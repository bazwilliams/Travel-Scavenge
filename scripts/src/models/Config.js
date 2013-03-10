define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    "use strict";
    return Backbone.Model.extend({
        defaults: {
            gameWidth: 2,
            gameHeight: 4
        },

        initialize: function () {
            this.set('tags', []);
        },

        addTag: function (tag) {
            var tags = this.get('tags');
            tags.push(tag);
            this.set('tags', tags);
        },

        removeTag: function (tag) {
            var tags = this.get('tags');
            tags.splice(tags.indexOf(tag), 1);
            this.set('tags', tags);
        },

        tilesRequired: function () {
            return this.get('gameWidth') * this.get('gameHeight');
        }
    });
});