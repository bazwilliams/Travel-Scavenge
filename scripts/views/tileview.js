/*global define*/
define([
	'jquery',
	'backbone',
	'handlebars',
	'models/tile',
	'text!templates/tile.html'
], function ($, Backbone, Handlebars, Tile, Template) {
	var TileView = Backbone.View.extend({
		initialize : function () {
			this.template = Handlebars.compile(Template);
		},

		render : function () {
			this.$el.html(this.template(this.model.toJSON()));
		}
	})
	return TileView;
});