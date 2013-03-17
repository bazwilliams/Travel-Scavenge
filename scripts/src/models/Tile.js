/*global define*/
define([
    'jquery',
    'backbone',
    'localstorage'
], function ($, Backbone) {
    "use strict";
    return Backbone.Model.extend({
        idAttribute: "description",

        localStorage: new Backbone.LocalStorage("Tiles"),

        defaults: {
            selected: false
        },

        initialize: function () {
            this.on('add', this.saveModel, this);
            this.on('change', this.saveModel, this);
        },

        saveModel: function () {
            this.save();
        }
    });
});