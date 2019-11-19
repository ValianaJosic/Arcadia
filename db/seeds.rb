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


Survey.create(name: "Sign up survey", is_active: true)

Survey.all.each do |survey|
  Question.create(
    survey: survey,
    name: "What's your gender?",
    is_active: true
  )
end

User.all.each do |user|
  Response.create(
    user: user,
    question: Question.all[0],
    value: ["male", "female"].sample
  )
end

2.times do 
  User.all.each do |user|
    Prescription.create(
      user: user,
    )
  end
end

User.all.each do |user|
  Contact.create(
    user: user,
    name: Faker::Name.first_name,
    zipcode: Faker::Address.zip
  )
end

Event.create(
  user_id: 1,
  activity_date: Date.today,
  notes: "blah blah blah",
  eventable_type: 'Prescription',
  eventable_id: 1
)

Event.create(
  user_id: 1,
  activity_date: Date.today,
  notes: "blah blah blah",
  eventable_type: 'Contact',
  eventable_id: 1
)

puts "Created #{User.count} users and #{Profile.count} profiles."
puts "Created #{Survey.count} survey with #{Question.count} question. "
puts "Created #{Response.count} responses."
puts "Created #{Prescription.count} prescriptions and #{Contact.count} contacts."
puts "Create #{Event.count} total events."