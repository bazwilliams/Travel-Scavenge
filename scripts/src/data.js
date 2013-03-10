/*global define*/
define([
    'jquery',
    'text!../../data/tiles.json'
], function ($, data) {
    "use strict";
    var dict, getTiles;

    dict = $.parseJSON(data);

    getTiles = function () {
        return dict.tiles;
    };

    return {
        getTiles: getTiles
    };
});