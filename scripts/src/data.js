/*global define*/
define([
    'jquery',
    'text!../../data/tiles.json'
], function ($, data) {
    "use strict";
    var dict = $.parseJSON(data);
    var getTiles = function () {
        return dict['tiles'];
    };
    return {
        getTiles: getTiles
    };
});