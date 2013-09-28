Etst.PersonasRoute = Ember.Route.extend
  model: ->
    @session.query('persona')
