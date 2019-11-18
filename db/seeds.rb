# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do |i|
  User.create(email: "person#{i+1}@arcadia.com", password: 'password', password_confirmation: 'password')
end

User.all.each do |user|
  Profile.create(
    user: user,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    photo_url: "/jodoe.jpeg",
    phone1: Faker::PhoneNumber.cell_phone,
    phone2: Faker::PhoneNumber.cell_phone,
    notification_opt_in: Faker::Boolean.boolean(true_ratio: 0.2)
  )
end

puts "Created #{User.count} users and #{Profile.count} profiles."