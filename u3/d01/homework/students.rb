students = ["James","Puneet","Jonathan","Xinke","Mazhar","Bairon","Laura","Carson","Miriam","Vanice","Justin","Jayan","Justin","Bryan","Emmanuel","Taj","Glenn","Jennifer","Ayo","Taylor","Leslie","Fariha","Daniel","Nick","Malik","Matthew","Kristi","Marcela","Hillary","Connie","Miko","Michael","Robert","Danielle","Michelle","Marcos","Dom"]

students.each do |student|
puts student
end

students.each do |student|
puts student[0]
end

vowels = ["A", "E", "I", "O", "U"]
students.each do |student|
if(student[0] = vowels)
puts student
end
end
