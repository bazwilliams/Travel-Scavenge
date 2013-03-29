define([
    'backbone',
    'handlebars',
    'text!templates/ConfigTemplate.html',
    'modaldialog'
], function (Backbone, Handlebars, ConfigTemplate) {
    "use strict";
    return Backbone.ModalView.extend({
        initialize: function () {
            this.template = Handlebars.compile(ConfigTemplate);
        },

        events: {
            'change #game-width': 'updateWidth',
            'change #game-height': 'updateHeight',
            'change #game-tags': 'updateTags',
            'submit form': 'submit'
        },

        updateWidth: function () {
            var newWidth = parseInt(this.$el.find('#game-width').val(), 10);
            if (newWidth) {
                this.model.set('gameWidth', newWidth);
            }
        },

        submit: function (e) {
            e.preventDefault();
            this.hideModal();
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
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});