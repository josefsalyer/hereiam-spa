'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('hereiam app', function() {


    it('should automatically redirect to /events when location hash/fragment is empty', function() {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/events");
    });


    describe('events', function() {

        beforeEach(function() {
            browser.get('index.html#/events');
        });


        it('should render events when user navigates to /events', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/partial for Events/);
        });

    });


    describe('people', function() {

        beforeEach(function() {
            browser.get('index.html#/people');
        });


        it('should render people when user navigates to /people', function() {
            expect(element.all(by.css('h1')).first().getText()).
            toMatch(/People add a person/);
        });

        it('should list people in a table', function() {
            var e = element.all(by.css('tr.ng-scope')).count();
            console.log(e);
            expect(e).toEqual(7);
        });


    });
});
