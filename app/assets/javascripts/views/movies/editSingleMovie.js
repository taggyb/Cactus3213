Cactus2.Views.EditMovie = Backbone.View.extend({
	template: JST['movies/editSingleMovie'],

	render: function() {
		this.$el.html(this.template());
		return this;
	}
})
