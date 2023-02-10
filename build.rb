require 'fileutils'

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
            case line[line.index("<!--MACRO") + 10 .. line.index("-->") - 1]
            when "header"
                puts "> Header Macro"
                header
            when "rightSidebar"
                puts "> Sidebar Macro"
                right_sidebar
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
