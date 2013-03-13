/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'models/Tag'
], function (Tag) {
    "use strict";
    describe('Tag', function () {
        var tag;

        beforeEach(function () {
            tag = new Tag({
                name: 'tag'
            });
        });

        it('Selected should be false', function () {
            expect(tag.get('selected')).toBe(false);
        });
    });
});