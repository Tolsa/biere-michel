# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




tasting_attributes = [
{
  date: "25 janvier 2018 à 19h00",
  capacity: 40
},
{
  date: "12 février 2018 à 20h00",
  capacity: 35
}
]

Tasting.create!(tasting_attributes)
