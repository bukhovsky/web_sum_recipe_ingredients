file = File.new("./file.txt","r:UTF-8")
lines = file.readlines

ingridients = Array.new

i = 0
while i < lines.size do
  if lines[i]=~/^.+ +\d+ +гр.*$/
    ingridients.push lines[i] 
  end
   i += 1
end

ingridients_consolidated = Array.new

i = 0
while i < ingridients.size do
ingridients_name = ingridients[i][0..(ingridients[i] =~ /\d+ +гр/)-1]
ingridients_weight = ingridients[i][(ingridients[i] =~ /\d+ +гр/)..(ingridients[i] =~ / +гр/)-1]
ingridients_consolidated.push [ingridients_name, ingridients_weight.to_i]
i += 1
end

ingridients_names = Array.new

for item in ingridients_consolidated do
  ingridients_names.push item[0]
end

ingridients_names_unique = ingridients_names.uniq

ingridients_names_w_unique = Array.new

for item in ingridients_names_unique do
  ingridients_names_w_unique.push [item, 0]
end


x = 0
while x < ingridients_names_w_unique.size do

  i = 0
  while i < ingridients_consolidated.size do
    if  ingridients_names_w_unique[x][0] == ingridients_consolidated[i][0]
      ingridients_names_w_unique[x][1] = ingridients_names_w_unique[x][1] + ingridients_consolidated[i][1]
    end 
    i += 1 
  end
x += 1  
end

sorted_ingridients = ingridients_consolidated.sort


sorted_ingridients_forprint = Array.new
for item in sorted_ingridients do
  sorted_ingridients_forprint.push item[0].to_s + item[1].to_s
end

myfile = File.new("sorted.txt", "w+") 
myfile.puts(sorted_ingridients_forprint)


ingridients_names_w_unique_forprint = Array.new
for item in ingridients_names_w_unique do
  ingridients_names_w_unique_forprint.push item[0].to_s + item[1].to_s
end

sorted_ingridients_names_w_unique_forprint = ingridients_names_w_unique_forprint.sort

myfile = File.new("sumup.txt", "w+") 
myfile.puts(sorted_ingridients_names_w_unique_forprint)


