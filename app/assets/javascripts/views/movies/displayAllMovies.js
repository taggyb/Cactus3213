Cactus2.Views.MovieList = Backbone.View.extend({
	template: JST['movies/displayAllMovies'],

	events: {
		'click .menu_new'	: 'newMovie',
		//'click .moviedetail'	: 'movieDetail'
	},

 	newMovie: function() {
		Backbone.history.navigate("new", true);
		return false;
 	},

	movieDetail: function(event) {
		var name = $(event.target).data('name');
		window.router.navigate("movie/" + name, true);
		return false;
 	},

	initialize: function() {
	},

	render: function(data) {
		this.$el.html(this.template(data));
	}
});
