Cactus2.Views.NewMovie = Backbone.View.extend({
	template: JST['movies/newMovie'],

	render: function() {
		this.$el.html(this.template());
 		//return this;
	},

	events: {
		"click button#save_movie" : "saveMovie"
	},

	saveMovie: function() {

	}
})