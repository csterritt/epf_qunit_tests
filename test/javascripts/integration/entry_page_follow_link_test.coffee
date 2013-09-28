describe "Entry Page Follow Link Test", ->
    before ->
        Ember.run ->
            Etst.reset()
        Ember.testing = true
        Ember.run Etst, Etst.advanceReadiness

        server = sinon.fakeServer.create()
        server.respondWith "GET", /(.*)/, (xhr, url) ->
            res = {
                "personas": [
                    {"id": 1, "name": "Jack", "age": 32, "favorite_food": "Spam"},
                    {"id": 2, "name": "Jill", "age": 27, "favorite_food": "Mud Pie"}
                ]
            }
            Ember.run ->
                xhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(res))

        server.autoRespond = true

    after ->
        Ember.testing = false

    it "goes to the personas page", ->
        visit("/personas").then ->
            assert(find("h3").text()).should(eql, "Current Personas:")
            links = find("a")
            assert(links.length).should(eql, 2)
            assert(links[0].text).should(eql, "Jack")
            assert(links[1].text).should(eql, "Jill")
            assert(find("h4").length).should(eql, 0)
            assert(find("input").length).should(eql, 0)

    it "goes to the personas page's detail", ->
        visit("/personas").then ->
            links = find("a")
            click(links[0]).then ->
                assert(find("h4").text()).should(eql, "Persona for Jack (clean)")
                inputs = find("input")
                assert(inputs.length).should(eql, 3)
                assert(inputs[0].value).should(eql, "Jack")
                assert(inputs[1].value).should(eql, "32")
                assert(inputs[2].value).should(eql, "Spam")
