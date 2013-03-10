/*global define*/
define([
    'jquery',
    'backbone',
    'handlebars',
    'models/Tile',
    'text!templates/tile.html'
], function ($, Backbone, Handlebars, Tile, Template) {
    "use strict";
    var TileView = Backbone.View.extend({
        initialize: function () {
            this.template = Handlebars.compile(Template);
        },

        events: {
            'click .tile': 'toggle'
        },

        onClose: function () {
        },

        toggle: function () {
            var wasSelected = this.model.get('selected');
            if (wasSelected) {
                this.$el.find('.tile').removeClass('selected');
                this.model.set('selected', false);
            }
            else {
                this.$el.find('.tile').addClass('selected');
                this.model.set('selected', true);
            }
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    })
    return TileView;
});