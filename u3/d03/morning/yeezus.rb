kanye_records = [
{ year: 2016, title: "The Life of Pablo" },
{ year: 2013, title: "Yeezus" },
{ year: 2011, title: "Watch the Throne" },
{ year: 2010, title: "My Beautiful Dark Twisted Fantasy" },
{ year: 2008, title: "808s and Heartbreak" },
{ year: 2007, title: "Graduation" },
{ year: 2005, title: "Late Registration" },
{ year: 2004, title: "The College Dropout" }
]

kanye_records.each do |record|
puts record[:title]
end

kanye_records.each do |year|
puts year[:year]
end

kanye_records.push({year: 2017, title: "The Life of Ernesto"})
p kanye_records

# kanye_records.each{|x| puts x[:record] unless x[:year] < 2007}

kanye_records.each do |record|
if(record[:year] > 2007)
puts record[:title]
end
end

kanye_records.each do |key|
puts "#{key[:title]} was released in #{key[:year]}"
end

kanye_records.each do |x|
x[:label] = "def jam"
# no_space = x[:title].split(" "),join("") #to count chars with no space
if x[:title] > 15 #if no_space.length > 15
print "that's a long title"
end
p kanye_records

kanye_records.each do |x|
p x[:title].gsub("o", "0")
end
