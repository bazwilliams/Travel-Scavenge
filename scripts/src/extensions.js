define([
    'backbone'
], function (Backbone) {
    "use strict";
    Backbone.View.prototype.close = function () {
        this.remove();
        this.unbind();
        if (this.onClose) {
            this.onClose();
        }
    }
});