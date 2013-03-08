/*global define*/
define([
	'jquery',
	'backbone'
],function ($, Backbone) {
	var Tile = Backbone.Model.extend({
		defaults : {
			selected : false
		}
	});
	return Tile;
});