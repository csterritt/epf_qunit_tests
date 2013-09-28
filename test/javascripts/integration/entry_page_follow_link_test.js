describe("Entry Page Follow Link Test", function() {
    before(function() {
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
    });

    after(function() {
        Ember.testing = false;
    });

    it("goes to the personas page", function() {
        visit("/personas").then(function() {
            assert(find("h3").text()).should(eql, "Current Personas:");
            var links = find("a");
            assert(links.length).should(eql, 2);
            assert(links[0].text).should(eql, "Jack");
            assert(links[1].text).should(eql, "Jill");
            assert(find("h4").length).should(eql, 0);
            assert(find("input").length).should(eql, 0);
        });
    });

    it("goes to the personas page's detail", function() {
        visit("/personas").then(function() {
            var links = find("a");
            click(links[0]).then(function() {
                assert(find("h4").text()).should(eql, "Persona for Jack (clean)");
                var inputs = find("input");
                assert(inputs.length).should(eql, 3);
                assert(inputs[0].value).should(eql, "Jack");
                assert(inputs[1].value).should(eql, "32");
                assert(inputs[2].value).should(eql, "Spam");
            });
        });
    });

});
