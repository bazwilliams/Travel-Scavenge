/*global define*/
define([
    'jquery',
    'backbone',
    'localstorage'
], function ($, Backbone) {
    "use strict";
    return Backbone.Model.extend({
        idAttribute: "description",
        defaults: {
            selected: false
        }
    });
});