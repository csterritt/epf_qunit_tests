# for more details see: http://emberjs.com/guides/models/defining-models/

Etst.Persona = Ep.Model.extend
  name: Ep.attr 'string'
  age: Ep.attr 'number'
  favorite_food: Ep.attr 'string'
  isClean: ( ->
    ! @get("isDirty")
  ).property("name", "age", "favorite_food")
