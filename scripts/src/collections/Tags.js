/*global define*/
define([
    'jquery',
    'backbone',
    'models/Tag'
], function ($, Backbone, Tag) {
    "use strict";
    var Tags = Backbone.Collection.extend({
    	model: Tag
    });
    return Tags;
});