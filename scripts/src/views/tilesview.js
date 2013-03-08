/*global define*/
define([
	'jquery',
	'backbone',
	'handlebars',
	'views/tileview',
	'collections/tiles',
	'text!templates/tiles.html'
], function ($, Backbone, Handlebars, TileView, Tiles, Template) {
	var TilesView = Backbone.View.extend({
		initialize : function () {
			this.template = Handlebars.compile(Template);
		},

		render : function () {
			var self = this;
			this.$el.html(this.template);
			this.collection.each( function (model) {
				var tileView = new TileView({
					model : model
				});
				tileView.render();
				self.$el.find('ul').append(tileView.el);
			});
		}
	})
	return TilesView;
});