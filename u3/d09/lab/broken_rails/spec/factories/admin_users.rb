FactoryGirl.define do
  factory :admin_user do
    first_name { Faker::Name.first_name }
    last_name  { Faker::Name.last_name }
    email      { Faker::Internet.email }
    password   { "12345" }
  end
end
