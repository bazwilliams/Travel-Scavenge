/*global define*/
define([
	'jquery',
	'backbone',
	'data',
	'views/tilesview',
	'collections/tiles'
], function ($, Backbone, data, TilesView, Tiles) {
	var initialize = function () {
		var tilesView = new TilesView({
			collection : new Tiles(data.getTiles())
		});
		tilesView.render();
		$(document).find('section').append(tilesView.el);
	};

	return {
		initialize: initialize
	}
});