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
			this.model.on('change', this.render, this);
		},

		events : {
			'click .tile' : 'toggle'
		},

		onClose : function () {
			this.model.off('change', this.render);
		},

		toggle : function () {
			var state = this.model.get('selected');
			this.model.set('selected', !state);
		},

		render : function () {
			this.$el.html(this.template(this.model.toJSON()));
		}
	})
	return TileView;
});