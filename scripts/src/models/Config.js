define([
    'underscore',
    'jquery',
    'backbone'
], function (_, $, Backbone) {
    "use strict";
    return Backbone.Model.extend({
        defaults: {
            gameWidth: 2,
            gameHeight: 4,
            tags: []
        },

        addTag: function (tagName) {
            var tag, tags;
            tags = this.get('tags');
            tag = _.findWhere(tags, {id: tagName});
            if (tag) {
                tag.selected = true;
            } else {
                tags.push({
                    id: tagName,
                    selected: true
                });
            }
            this.set('tags', tags);
        },

        removeTag: function (tagName) {
            var tag, tags;
            tags = this.get('tags');
            tag = _.findWhere(tags, {id: tagName});
            if (tag) {
                tag.selected = false;
            } else {
                tags.push({
                    id: tagName,
                    selected: false
                });
            }
            this.set('tags', tags);
        },

        tilesRequired: function () {
            return this.get('gameWidth') * this.get('gameHeight');
        },

        getRequestedTags: function () {
            return _.pluck(_.where(this.get('tags'), {selected: true}), 'id');
        }
    });
});