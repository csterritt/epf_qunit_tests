# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Persona.create([
                   {
                       name: "Fred", age: 32, favorite_food: "Burritos"
                   },
                   {
                       name: "Janey", age: 27, favorite_food: "Spaghetti"
                   }
               ])
