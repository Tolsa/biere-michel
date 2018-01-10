# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
p 'Destroying old database'
Participation.destroy_all
Tasting.destroy_all
User.destroy_all
Guest.destroy_all



p 'Fetching seed'
tasting_attributes = [
{
  date: "26 janvier 2018 à 19h00",
  capacity: 40
},
{
  date: "12 fevrier 2018 à 20h00",
  capacity: 35
}
]

Tasting.create!(tasting_attributes)
p 'done'
