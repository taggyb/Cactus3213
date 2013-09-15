Cactus2.Views.NewMovie = Backbone.View.extend({
	template: JST['movies/newMovie'],

	render: function() {
		this.$el.html(this.template());
 		//return.this;
	},

	events: {
		"click #create"	: "saveMovie",
		"click #cancel"	: "cancelMovie"
	},

	saveMovie: function() {
		if (typeof gon.token == 'undefined'){
			alert('Please login!');
		} 

		else {
			this.movie = new Cactus2.Models.Movie();
			this.movie.set({
				url: "http://cs3213.herokuapp.com/movies.json", 
				title: document.getElementById("movie_title"),
				summary: document.getElementById("movie_summary"),
				img: document.getElementById("movie_img"),
				data: {access_token: gon.token}
			});

			this.movie.save();
			
			window.routerHome.navigate('/', {trigger: true});
			}
	},

	cancelMovie: function() {
		routerHome.navigate("", { trigger: true });
	}
});
