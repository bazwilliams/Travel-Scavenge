define([
    'backbone',
    'handlebars',
    'text!templates/ConfigTemplate.html'
], function (Backbone, Handlebars, ConfigTemplate) {
    "use strict";
    return Backbone.View.extend({
        initialize: function () {
            this.template = Handlebars.compile(ConfigTemplate);
        },

        events: {
            'change #game-width': 'updateWidth',
            'change #game-height': 'updateHeight',
            'change #game-tags': 'updateTags'
        },

        updateWidth: function () {
            var newWidth = parseInt(this.$el.find('#game-width').val(), 10);
            if (newWidth) {
                this.model.set('gameWidth', newWidth);
            }
        },

        updateHeight: function () {
            var newHeight = parseInt(this.$el.find('#game-height').val(), 10);
            if (newHeight) {
                this.model.set('gameHeight', newHeight);
            }
        },

        updateTags: function () {
            var tags, selectedTags;
            tags = this.model.get('tags');
            tags.forEach(function (tag) {
                tag.selected = false;
            });
            selectedTags = this.$el.find('#game-tags').val();
            selectedTags.forEach(function (tag) {
                _.where(tags, { id: tag })[0].selected = true;
            });
            this.model.set('tags', tags);
            this.model.trigger('change');
            this.model.trigger('change:tags');
        },

        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
        }
    });
});