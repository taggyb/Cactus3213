Cactus2.Routers.Index=Backbone.Router.extend({
	routes: {
		''			: 'index',
		'movies'		: 'index',
		'new'			: 'newMovie',
		'movies/:id'		: 'displaySingleMovie',
		'movies/:id/edit'	: 'editSingleMovie'
	},

	initialize: function() {
		this.movies=new Cactus2.Collections.Movies();
		this.movies.fetch();
	},

	index: function() {
		var view = new Cactus2.Views.MoviesIndex({
			el:'#wrapper',
			collection: this.movies,
			router: this
 		});

		view.render();
	},

	newMovie: function() {
		var view = new Cactus2.Views.NewMovie({
			el: '#wrapper',
			router: this
		});

		view.render();
	},

	displaySingleMovie: function(id) {
		this.amovie = new Cactus2.Collections.aMovie([],{id:id});
		this.amovie.fetch();
		this.amovie.models

		this.reviews = new Cactus2.Collections.Reviews([],{id:id});
		this.reviews.fetch();
		this.reviews.models
		var view = new Cactus2.Views.SingleMovie({
 			el: '#wrapper',
			collection: this.amovie,
			//mid: id,
			reviews: this.reviews,
			router: this
		});

		view.render();
	},

	editSingleMovie: function(id) {
		var view = new Cactus2.Views.EditMovie({
			el: '#wrapper',
			router: this
		});

		view.render();
	}
});
