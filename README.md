### Example Ember/Epf App with QUnit tests

This Ember app uses [Epf](http://epf.io) for data persistence.

I want to be able to test my application, but Epf doesn't yet have a fixture
setup like Ember Data does.

However, an (arguably) better work around exists which is to use the
[Sinon](http://sinonjs.org) javascript mocking framework to set up a "fake server"
on a per-test (or per set of tests) basis, which returns the JSON used.

This project demonstrates how to do this.

To run the code, run the following commands.  This is a Rails app, so you'll need to
have Ruby (at least version 1.9.3) set up.

% bundle install

% rake db:migrate

% rake db:seed

% rails s

Then you can visit the app on [localhost:3000](http://localhost:3000) to play around
with it.

You can run the tests by visiting [localhost:3000/qunit](http://localhost:3000/qunit).

You'll note that you have a half-size version of the page in the bottom-right hand
corner of the tests page.  The test teardown sets "Ember.testing = false;" so that you
can try out the app there.

However, you can't "Save" the data from the "Entry Page Follow Link Test" page, since
that data is fake.  "Save" will work on the "Entry Page" page, since that's running
the "real" data via actual loads from the database, rather tha using the fake server.
This is probably a bug :-)

**NOTE**: There is an Epf bug in that when you change one of the values in the detail
page, the "(clean)" designation will change to "(dirty)", but when you save it won't
change back.  This Epf people are working on this.
