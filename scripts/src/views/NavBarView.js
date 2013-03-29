/*global define, it, beforeEach, describe, spyOn, expect*/
define([
    'backbone',
    'handlebars',
    'views/ConfigView',
    'text!templates/NavBarTemplate.html'
], function (Backbone, Handlebars, ConfigView, NavBarTemplate) {
    "use strict";
    return Backbone.View.extend({
        initialize: function () {
            this.template = Handlebars.compile(NavBarTemplate);
        },

        events: {
            'click .config-button': 'showConfig',
            'click .new-button': 'newGame'
        },

        newGame: function () {
            this.model.trigger('change');
        },

        showConfig: function () {
            var configView = new ConfigView({
                model: this.model
            });

            configView.render().showModal({
                closeImageUrl: "resources/close-modal.png",
                closeImageHoverUrl: "resources/close-modal-hover.png",
                css: {
                    "padding": "10px",
                    "border": "1px solid #E5E5E5",
                    "background-color": "#fff",
                    "-webkit-box-shadow": "0px 0px 15px 4px rgba(0, 0, 0, 0.5)",
                    "-moz-box-shadow": "0px 0px 15px 4px rgba(0, 0, 0, 0.5)",
                    "box-shadow": "0px 0px 15px 4px rgba(0, 0, 0, 0.5)",
                    "-webkit-border-radius": "5px",
                    "-moz-border-radius": "5px",
                    "border-radius": "5px"
                }
            });
        },

        render: function () {
            this.$el.append(this.template());
            return this;
        }
    });
});