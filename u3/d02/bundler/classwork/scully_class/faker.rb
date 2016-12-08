require 'faker'

puts "I made it here!!!"

randNames = [];
i = 0;
num = 20;
until i > num do
  randNames.push(
    {
      name: Faker::Name.name,
      city: Faker::Address.city
    }
  );
  i+=1;
end;

# randNames.sort! {|a, b| a[:name] <=> b[:name]}

puts randNames.sort_by {|x| x[:name]}
