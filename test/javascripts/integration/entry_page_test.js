module("Entry Page", {
    setup: function() {
        Ember.run(function() {
            Etst.reset();
        });
        Ember.testing = true;

        Ember.run(Etst, Etst.advanceReadiness);
    },

    teardown: function() {
        Ember.testing = false;
    }
});

test("it displays the banner", function() {
    visit("/").then(function() {
        equal(find("h3").text(), "Index for Personas");
    });
});

test("it displays the link", function() {
    visit("/").then(function() {
        equal(find("a").text(), "See and Edit Personas");
    });
});
