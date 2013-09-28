# For more information see: http://emberjs.com/guides/routing/

Etst.Router.map ->
  @resource "personas", path: "/personas", ->
    @resource "persona", path: ":persona_id"
