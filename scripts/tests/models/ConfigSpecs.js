/*global define, it, beforeEach, describe, spyOn, expect*/
define(['models/Config'
], function (Config) {
    describe('Config', function () {
        var model;

        beforeEach(function () {
            model = new Config();
        });

        it('Has default value for gameSize', function () {
            expect(model.get('gameSize')).toBe(3);
        });

        it('Has default value for tags', function () {
            expect(model.get('tags').length).toBe(0);
        });

        it('Correctly adds tags', function () {
            model.addTag('addTest');
            expect(model.get('tags')[0]).toBe('addTest');
        });

        it('Correctly removes tags', function () {
            model.addTag('test');
            model.addTag('banana');
            model.removeTag('test');
            expect(model.get('tags')[0]).toBe('banana');
        });
    });
});