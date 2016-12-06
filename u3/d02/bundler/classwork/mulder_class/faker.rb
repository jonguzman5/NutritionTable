require 'faker'

ar = [];

20.times do
  n = Faker::Name.name;
  ar.push(
    {'name'=> n,
     'age' => Faker::Number.number(2)}
  );
end

puts ar.sort_by {|obj| obj['age']}
