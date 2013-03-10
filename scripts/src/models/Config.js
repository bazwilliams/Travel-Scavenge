define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    var Config = Backbone.Model.extend({
        defaults: {
            gameSize: 3
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
            tags.splice(tags.indexOf(tag),1);
            this.set('tags', tags);
        }
    });
    return Config;
});