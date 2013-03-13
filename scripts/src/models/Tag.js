/*global define*/
define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    "use strict";
    var Tag = Backbone.Model.extend({
        defaults: {
            selected: false
        }
    });
    return Tag;
});