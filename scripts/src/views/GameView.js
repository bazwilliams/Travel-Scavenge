/*global define*/
define([
    'underscore',
    'jquery',
    'backbone',
    'handlebars',
    'views/TileView',
    'collections/Tiles',
    'text!templates/gameTemplate.html',
    'text!templates/gameRowTemplate.html'
], function (_, $, Backbone, Handlebars, TileView, Tiles, GameTemplate, GameRowTemplate) {
    "use strict";
    return Backbone.View.extend({
        initialize: function () {
            this.template = Handlebars.compile(GameTemplate);
            this.rowTemplate = Handlebars.compile(GameRowTemplate);
            this.collection.on('change', this.checkForWin, this);
        },

        onClose: function () {
            this.collection.off('change', this.checkForWin);
        },

        checkForWin: function () {
            if (this.collection.size() === this.collection.getScore()) {
                this.$el.find('.playarea').addClass('game-complete');
            } else {
                this.$el.find('.playarea').removeClass('game-complete');
            }
        },

        render: function () {
            var gameEl, self, gameHeight, gameWidth;
            self = this;
            gameWidth = this.options.config.get('gameWidth');
            gameHeight = this.options.config.get('gameHeight');

            gameEl = $(this.template());
            _.range(0, gameHeight).forEach(function (rowIndex) {
                var rowEl = $(self.rowTemplate());
                _.range(0, gameWidth).forEach(function (colIndex) {
                    var tileView, collectionIndex;
                    collectionIndex = rowIndex * gameWidth + colIndex;
                    tileView = new TileView({
                        model: self.collection.at(collectionIndex)
                    });
                    tileView.render();
                    rowEl.append(tileView.el);
                });
                gameEl.append(rowEl);
            });
            self.$el.html(gameEl);
        }
    });
});