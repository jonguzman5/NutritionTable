thing1 = "pg-thirteen,pg,r,pg,pg-thirteen,pg-thirteen,pg-thirteen,r,r,r,r,pg-thirteen,r,pg-thirteen,r,r,r,r,r,r,pg-thirteen,r,pg-thirteen,pg-thirteen,pg,r,r,pg,pg".split(',')
thing2 ="the hunger games: mockingjay - part 1|penguins of madagascar|horrible bosses 2|big hero 6|interstellar|dumb and dumber to|the theory of everything|gone girl|the pyramid|birdman|nightcrawler|st. vincent|fury|beyond the lights|wild|foxcatcher|the homesman|whiplash|john wick|the equalizer|guardians of the galaxy|the judge|the maze runner|ouija|alexander and the terrible, horrible, no good, very bad day|rosewater|hector and the search for happiness|the book of life|the boxtrolls".split('|')
thing3 = "65%, 76%*71%, 68%*34%, 60%*89%, 94%*73%, 87%*26%, 49%*81%, 84%*88%, 89%*7%, 39%*94%, 86%*95%, 87%*76%, 82%*78%, 88%*84%, 83%*92%, 80%*86%, 77%*79%, 53%*96%, 96%*85%, 82%*61%, 81%*90%, 94%*47%, 76%*63%, 73%*7%, 29%*62%, 65%*74%, 75%*36%, 67%*82%, 82%*75%, 68%".split('*')

##Capitalizing Ratings
# newthing1 = thing1.each do |t|
#     t.gsub!('thirteen', '13')
#     #alternative to capitalize: t.upcase!
# end
# newthing1.map(&:upcase)

## Capitalizing first letter of each string(Movie Array)
# newthing2 = []
# thing2.each do |m|
# newthing2.push(m.split.map(&:capitalize).join(' '))
# end
# newthing2
#(NONFUNCTIONALVERSION)
# newthing2 = thing2.each do |x|
#   title = x.split(" ").each{|y| y.capitalize!}
#   tille = title.join(" ")
#   # x.gsub!(x,title)
#   # newthing1 = [] << {title: title}
# end

##Movie Title Hashes
# newthing2_hash = thing2.map do |movie|
#   {title: movie}
# end
# p newthing2_hash

## Score Hashes
# newthing3_hash = thing3.map do |score|
#   {score: score}
# end
# p newthing3_hash

#(NONFUNCTIONAL)
# title_and_scores = newthing2_hash.each_with_index.map do |movie,index|
#     {title: movie[:title], score: scores_hash,[index][:score]}
# end
# p title_and_scores
