class PersonaSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :favorite_food
end
