/*global define*/
define([
	'jquery',
	'backbone',
	'data',
	'collections/tiles'
], function ($, Backbone, data, Tiles) {
	var initialize = function () {
		var tiles = new Tiles(
			data.getTiles()
		);
	};

	return {
		initialize: initialize
	}
});