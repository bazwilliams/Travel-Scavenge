/*global define*/
define([
	'jquery',
	'text!../data/dictionary2.json'
], function($, data){
	var dict = $.parseJSON(data);
	var getTiles = function () {
		return dict['tiles'];
	};
	return getWord;
});