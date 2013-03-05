/*global define*/
define([
	'jquery',
	'backbone',
	'data'
], function ($, Backbone, data) {
	var initialize = function () {
		data.getTiles();
	};

	return {
		initialize: initialize
	}
});