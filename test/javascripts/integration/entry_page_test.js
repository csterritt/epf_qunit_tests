describe("Entry Page", function() {
    before(function() {
        Ember.run(function() {
            Etst.reset();
        });
        Ember.testing = true;

        Ember.run(Etst, Etst.advanceReadiness);
    });

    after(function() {
        Ember.testing = false;
    });

    it("it displays the banner", function() {
        visit("/").then(function() {
            assert(find("h3").text()).should(eql, "Index for Personas");
        });
    });

    it("it displays the link", function() {
        visit("/").then(function() {
            assert(find("a").text()).should(eql, "See and Edit Personas");
        });
    });

});
