define([
    'jquery',
    'backbone',
    'collections/Tags'
], function ($, Backbone, Tags) {
    "use strict";
    return Backbone.Model.extend({
        defaults: {
            gameWidth: 2,
            gameHeight: 4
        },

        addTag: function (tagName) {
            var collection, tag;
            collection = this.get('tags');
            tag = collection.get(tagName);
            if (tag) {
                tag.set('selected', true);
            } else {
                collection.add([{ id : tagName, selected: true}]);
            }
            this.set('tags', collection);
        },

        removeTag: function (tagName) {
            var collection, tag;
            collection = this.get('tags');
            tag = collection.get(tagName);
            if (tag) {
                tag.set('selected', false);
            } else {
                collection.add([{ id: tagName, selected: false}]);
            }
            this.set('tags', collection);
        },

        tilesRequired: function () {
            return this.get('gameWidth') * this.get('gameHeight');
        },

        getRequestedTags: function () {
            return this.get('tags').pluck('id');
        }
    });
});