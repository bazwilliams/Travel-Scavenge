/*global define*/
define([
	'jquery',
	'backbone',
	'models/tile'
], function ($, Backbone, Tile) {
	var Tiles = Backbone.Collection.extend({
		model : Tile
	})
	return Tiles;
});