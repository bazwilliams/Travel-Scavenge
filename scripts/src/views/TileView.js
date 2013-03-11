/*global define*/
define([
    'jquery',
    'backbone',
    'handlebars',
    'models/Tile',
    'text!templates/tileTemplate.html'
], function ($, Backbone, Handlebars, Tile, Template) {
    "use strict";
    return Backbone.View.extend({
        initialize: function () {
            this.template = Handlebars.compile(Template);
            this.model.on('change:selected', this.updateSide, this);
        },

        events: {
            'click .tile': 'toggle'
        },

        onClose: function () {
            this.model.off('change:selected', this.updateSide);
        },

        updateSide: function () {
            var isSelected = this.model.get('selected');
            if (isSelected) {
                this.$el.find('.tile').addClass('selected');
            } else {
                this.$el.find('.tile').removeClass('selected');
            }
        },

        toggle: function () {
            var wasSelected = this.model.get('selected');
            if (wasSelected) {
                this.$el.find('.tile').removeClass('selected');
                this.model.set('selected', false);
            } else {
                this.$el.find('.tile').addClass('selected');
                this.model.set('selected', true);
            }
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
});