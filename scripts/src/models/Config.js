define([
    'underscore',
    'jquery',
    'backbone',
    'localstorage'
], function (_, $, Backbone) {
    "use strict";
    return Backbone.Model.extend({

        localStorage: new Backbone.LocalStorage("Config"),

        defaults: {
            gameWidth: 2,
            gameHeight: 4
        },

        initialize: function () {
            this.id = 'Config';
            this.on('change', this.saveModel, this);
        },

        saveModel: function () {
            this.save();
        },

        setTags: function (selectedTags) {
            var tags = this.get('tags');
            tags.forEach(function (tag) {
                tag.selected = false;
            });
            selectedTags.forEach(function (tag) {
                _.where(tags, { id: tag })[0].selected = true;
            });
            this.set('tags', tags);
            this.trigger('change');
            this.trigger('change:tags');
        },

        tilesRequired: function () {
            return this.get('gameWidth') * this.get('gameHeight');
        },

        getRequestedTags: function () {
            return _.pluck(_.where(this.get('tags'), {selected: true}), 'id');
        }
    });
});