module("Entry Page Follow Link Test", {
    setup: function() {
        Ember.run(function() {
            Etst.reset();
        });
        Ember.testing = true;

        Ember.run(Etst, Etst.advanceReadiness);
        server = sinon.fakeServer.create();

        server.respondWith("GET", /(.*)/, function(xhr, url) {
            var res = {
                "personas": [
                    {"id": 1, "name": "Jack", "age": 32, "favorite_food": "Spam"},
                    {"id": 2, "name": "Jill", "age": 27, "favorite_food": "Mud Pie"}
                ]
            };
            Ember.run(function() {
                xhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify(res));
            });
        });

        server.autoRespond = true;
    },

    teardown: function() {
        Ember.testing = false;
    }
});

test("it goes to the personas page", function() {
    visit("/personas").then(function() {
        equal(find("h3").text(), "Current Personas:");
        var links = find("a");
        equal(links.length, 2);
        equal(links[0].text, "Jack");
        equal(links[1].text, "Jill");
        equal(find("h4").length, 0);
        equal(find("input").length, 0);
    });
});

test("it goes to the personas page's detail", function() {
    visit("/personas").then(function() {
        var links = find("a");
        click(links[0]).then(function() {
            equal(find("h4").text(), "Persona for Jack (clean)");
            var inputs = find("input");
            equal(inputs.length, 3);
            equal(inputs[0].value, "Jack");
            equal(inputs[1].value, "32");
            equal(inputs[2].value, "Spam");
        });
    });
});
