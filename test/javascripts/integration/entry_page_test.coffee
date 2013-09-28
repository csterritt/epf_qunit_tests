describe "Entry Page", ->
    before ->
        Ember.run ->
            Etst.reset()
        Ember.testing = true
        Ember.run Etst, Etst.advanceReadiness

    after ->
        Ember.testing = false

    it "it displays the banner", ->
        visit("/").then ->
            assert(find("h3").text()).should(eql, "Index for Personas")

    it "it displays the link", ->
        visit("/").then ->
            assert(find("a").text()).should(eql, "See and Edit Personas")
