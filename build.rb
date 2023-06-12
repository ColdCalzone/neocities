require 'fileutils'
require 'json'

# Modes in Markdown parsing
module ParseMode
    NORMAL       = 0
    ITALIC       = 1
    BOLD         = 2
    IMAGE        = 3
    LINK_TEXT    = 4
    LINK_URL     = 5
    IMAGE_TEXT   = 6
    IMAGE_URL    = 7
    HEADER_ONE   = 8
    HEADER_TWO   = 9
    HEADER_THREE = 10
    HEADER_FOUR  = 11
    HEADER_FIVE  = 12
    HEADER_SIX   = 13
end

# Aforementioned Markdown parsing
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
        when '!'
            if post_body[i + 1] == '[' || post_body[i + 1] == ']'
                style_stack.push ParseMode::IMAGE
            else
                out += '!'
            end
        when '['
            if style_stack.last == ParseMode::IMAGE
                style_stack.push ParseMode::IMAGE_TEXT
            else
                style_stack.push ParseMode::LINK_TEXT
            end
        when ']'
            if style_stack.last == ParseMode::LINK_TEXT || style_stack.last == ParseMode::IMAGE_TEXT
                style_stack.pop
            end
        when '('
            if style_stack.last == ParseMode::IMAGE
                style_stack.push ParseMode::IMAGE_URL
                out += "<img src=\""
            else
                style_stack.push ParseMode::LINK_URL
                out += "<a href=\""
            end
        when ')'
            while style_stack.last == ParseMode::LINK_TEXT || style_stack.last == ParseMode::LINK_URL || style_stack.last == ParseMode::IMAGE_TEXT || style_stack.last == ParseMode::IMAGE_URL
                style_stack.pop()
            end
            if style_stack.last == ParseMode::IMAGE
                out += "\">" + content + "</img>"
            else
                out += "\">" + content + "</a>"
            end
            content = ""
        when '\\'
            skip += 1
            out += post_body[i + 1]
        else
            if style_stack.last >= ParseMode::HEADER_ONE
                if post_body[i..i + 3] == "<br>"
                    header_size = style_stack.pop() - 2
                    out += "</h" + header_size.to_s + ">"
                    content = ""
                end
            end
            if style_stack.last != ParseMode::BOLD && style_stack.last != ParseMode::ITALIC && (style_stack.last != ParseMode::LINK_TEXT && style_stack.last != ParseMode::IMAGE_TEXT)
                out += post_body[i]
            else
                content += post_body[i]
            end
        end
    end
    return out
end

def generatePosts(args)
    posts = JSON.parse(File.read("../" + args[0])).map do |post|
        body = markdownParse post["body"]
        {
            "title": post["title"],
            "body": body
        }
    end
    posts.reverse!
    "<div id=\"postContainer\">
        <div id=\"posts\"></div>
        <div id=\"postButtons\">
            <button class=\"box\" id=\"prevButton\" onclick=\"prevPage()\" disabled><=</button>
            <button class=\"box\" id=\"nextButton\" onclick=\"nextPage()\" disabled>=></button>
    </div>
    <script>
        var posts = " + posts.to_json + ";
        var index = 0;
        const displayedPosts = 5;
        
        function updatePosts() {
            var postsDiv = document.getElementById(\"posts\");
            postsDiv.innerHTML = '';
            for(let post of posts.slice(index, index + displayedPosts)) {
                var container = document.createElement(\"div\");
                container.className = \"box\";
                var title = document.createElement(\"h2\");
                title.innerHTML = post[\"title\"];
                container.appendChild(title);
                container.appendChild(document.createElement(\"hr\"));
                container.innerHTML += post[\"body\"];
                postsDiv.appendChild(container);
            }
           
            var prevButton = document.getElementById(\"prevButton\");
            if(index != 0) {
                prevButton.removeAttribute(\"disabled\");
            } else {
                prevButton.setAttribute(\"disabled\", true);
            }

            var nextButton = document.getElementById(\"nextButton\");
            if(index < posts.length - displayedPosts) {
                nextButton.removeAttribute(\"disabled\");
            } else {
                nextButton.setAttribute(\"disabled\", true);
            }
        }

        function prevPage() {
            index -= displayedPosts;
            updatePosts()
        }

        function nextPage() {
            index += displayedPosts;
            updatePosts()
        }

        updatePosts()
        if(posts.length > displayedPosts) {
            document.getElementById(\"nextButton\").removeAttribute(\"disabled\");
        }
    </script>"
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
            macro = line[line.index("<!--MACRO") + 10 .. line.index("-->") - 1].split(' ')
            type = macro[0]
            case type
            when "header"
                puts "> Header Macro"
                header
            when "rightSidebar"
                puts "> Sidebar Macro"
                right_sidebar
            when "posts"
                puts "> Blog Section Macro on " + macro[1]
                generatePosts macro[1..-1]
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
