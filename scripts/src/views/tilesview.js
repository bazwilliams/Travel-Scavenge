/*global define*/
define([
	'jquery',
	'backbone',
	'handlebars',
	'views/tileview',
	'collections/tiles',
	'text!templates/tiles.html'
], function ($, Backbone, Handlebars, TileView, Tiles, Template) {
	var TilesView = Backbone.View.extend({
		initialize : function () {
			this.template = Handlebars.compile(Template);
            this.collection.on('change', this.checkForWin, this);
		},

        onClose: function () {
            this.collection.off('change', this.checkForWin);
        },

        checkForWin: function () {
            if (this.collection.size() === this.collection.getScore()) {
                this.$el.find('.playarea').addClass('game-complete');
            }
            else {
                this.$el.find('.playarea').removeClass('game-complete');
            }
        },

		render : function () {
			var self = this;
			this.$el.html(this.template);
			this.collection.each( function (model) {
				var tileView = new TileView({
					model : model
				});
				tileView.render();
				self.$el.find('ul').append(tileView.el);
			});
		}
	})
	return TilesView;
});