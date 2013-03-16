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
            var selectedTags = this.$el.find('#game-tags').val() || [];
            this.model.setTags(selectedTags);
        },

        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
        }
    });
});