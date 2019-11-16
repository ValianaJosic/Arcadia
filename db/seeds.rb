# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Profile.delete_all

p1a = User.create(
                email: 'p1a@gmail.com',
                password: 'p1p1p1',
                password_confirmation: 'p1p1p1'
              )

p2a = User.create(
              email: 'p2a@gmail.com',
              password: 'p2p2p2',
              password_confirmation: 'p2p2p2'
            )

p3a = User.create(
              email: 'p3a@gmail.com',
              password: 'p3p3p3',
              password_confirmation: 'p3p3p3'
            )

p1b = User.create(
              email: 'p1b@gmail.com',
              password: 'p1p1p1',
              password_confirmation: 'p1p1p1'
            )

p2b = User.create(
              email: 'p2b@gmail.com',
              password: 'p2p2p2',
              password_confirmation: 'p2p2p2'
            )

Profile.create(
              user: p1a,
              first_name: "John",
              last_name: "Doe",
              photo_url: "/jodoe.jpeg",
              phone1: "2222222222",
              phone2: "2222222222",
              notification_opt_in: true
            )

Profile.create(
              user: p2a,
              first_name: "Jane",
              last_name: "Doe",
              photo_url: "/jadoe.jpeg",
              phone1: "3333333333",
              phone2: "3333333333",
              notification_opt_in: true
            )

Profile.create(
              user: p3a,
              first_name: "Steve",
              last_name: "Smith",
              photo_url: "/ssmith.jpeg",
              phone1: "4444444444",
              phone2: "4444444444",
              notification_opt_in: false
            )

Profile.create(
              user: p1b,
              first_name: "Ashley",
              last_name: "Reyes",
              photo_url: "/areyes.jpeg",
              phone1: "55555555555",
              phone2: "55555555555",
              notification_opt_in: true
            )

Profile.create(
              user: p2b,
              first_name: "Jack",
              last_name: "Reyes",
              photo_url: "/jreyes.jpeg",
              phone1: "6666666666",
              phone2: "6666666666",
              notification_opt_in: false
            )