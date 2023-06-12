require 'fileutils'
require 'json'

module ParseMode
    NORMAL       = 0
    ITALIC       = 1
    BOLD         = 2
    LINK_TEXT    = 3
    LINK_URL     = 4
    HEADER_ONE   = 5
    HEADER_TWO   = 6
    HEADER_THREE = 7
    HEADER_FOUR  = 8
    HEADER_FIVE  = 9
    HEADER_SIX   = 10
end

def markdownParse(post_body)
    out = ""
    skip = 0
    style_stack = [ParseMode::NORMAL]
    content = ""
    for i in 0...post_body.length do
        if skip > 0 
            skip -= 1
            break
        end
        case post_body[i]
        when '*'
            if post_body[i + 1] == '*'
                skip = 1
                if style_stack.last == ParseMode::BOLD
                    style_stack.pop()
                    if style_stack.last == ParseMode::NORMAL
                        out += "<strong>" + content + "</strong>"
                        content = ""
                    else 
                        content = "<strong>" + content + "</strong>"
                    end
                else
                    style_stack.push ParseMode::BOLD
                end
            else
                if style_stack.last == ParseMode::ITALIC
                    style_stack.pop()
                    if style_stack.last == ParseMode::NORMAL
                        out += "<i>" + content + "</i>"
                        content = ""
                    else 
                        content = "<i>" + content + "</i>"
                    end
                else
                    style_stack.push ParseMode::ITALIC
                end
            end
        when '#'
            # Not a header
            if style_stack.last < ParseMode::HEADER_ONE
                style_stack.push ParseMode::HEADER_ONE
            else
                if style_stack.last <= ParseMode::HEADER_SIX
                    style_stack[-1] += 1
                end
            end
            if post_body[i + 1] != "#"
                header_size = style_stack.pop() - 2
                out += "<h" + header_size.to_s + ">"
            end
        when '['
            style_stack.push ParseMode::LINK_TEXT
        when ']'
            if style_stack.last == ParseMode::LINK_TEXT
                style_stack.pop
            end
        when '('
            style_stack.push ParseMode::LINK_URL
            out += "<a href="
        when ')'
            while style_stack.last == ParseMode::LINK_TEXT || style_stack.last == ParseMode::LINK_URL
                style_stack.pop()
            end
            out += ">" + content + "</a>"
            content = ""
        else
            if style_stack.last >= ParseMode::HEADER_ONE
                if post_body[i..i + 3] == "<br>"
                    header_size = style_stack.pop() - 2
                    out += "</h" + header_size.to_s + ">"
                    content = ""
                end
            end
            if style_stack.last != ParseMode::BOLD && style_stack.last != ParseMode::ITALIC && style_stack.last != ParseMode::LINK_TEXT
                out += post_body[i]
            else
                content += post_body[i]
            end
        end
    end
    return out
end

# Get the header / sidebar from their html files
header = File.open("header.html") {|f| f.gets(nil)}

right_sidebar = File.open("rightSidebar.html") {|f| f.gets(nil)}

# Delete and re-copy src/ -> out/
puts "Copying src/ to out/"
FileUtils.rm_rf("out/")
FileUtils.copy_entry("src/", "out/")

puts "Moving to output directory... editing all HTML files..."
Dir.chdir("out/")
# Iterate through every .htm(l) file in all child directories
Dir.glob(File.join("**", "*.{htm,html}")) {|file| 
    puts "● " + file
    # Store the modified version of the html
    updated_page = IO.readlines(file).map do |line|
        # replaces the line with the macro with its respective html
        if line.index("<!--MACRO") != nil and line.index("-->") != nil then
            type = line[line.index("<!--MACRO") + 10 .. line.index("-->") - 1].split(' ')
            case type[0]
            when "header"
                puts "> Header Macro"
                header
            when "rightSidebar"
                puts "> Sidebar Macro"
                right_sidebar
            when "posts"
                puts "> Blog Section Macro"
                posts = JSON.parse(File.read("../" + type[1])).map do |post|
                    parsed_post = markdownParse (post["body"])
"<div class=\"box\">
    <h2>" + post["title"] + "</h2>
    <hr>
    " + parsed_post + "
</div>"
                end
                posts.reverse.join("<br>")
            end
        else
            # or just leaves it alone
            line
        end
    end
    # Finally, shove the modified HTML back into the file
    File.open(file, "w") do |f|
        f.puts updated_page
    end
}
