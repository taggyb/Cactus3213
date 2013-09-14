Cactus2.Views.MovieList = Backbone.View.extend({
	template: JST['movies/displayAllMovies'],

	initialize: function() {
	},

	render: function(data) {
		this.$el.html(this.template(data));
	}
});
