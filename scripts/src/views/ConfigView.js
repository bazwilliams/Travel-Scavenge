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
            'change #game-height': 'updateHeight'
        },

        updateWidth: function () {
            this.model.set('gameWidth', parseInt(this.$el.find('#game-width').val()));
        },

        updateHeight: function () {
            this.model.set('gameHeight', parseInt(this.$el.find('#game-height').val()));
        },

        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
        }
    });
});