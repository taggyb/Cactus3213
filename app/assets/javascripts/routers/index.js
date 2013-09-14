Cactus2.Routers.Index=Backbone.Router.extend({
	routes: {
		''		: 'index',
		'movies/:id'	: 'singleMovie'
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

	view: function (id) {
		//this.reviews = new Cactus2.Collections.Reviews([],{id:id});
		//this.reviews.fetch();
		//this.reviews.models
		var view = new Cactus2.Views.MoviesView({
 			el: 'body',
			collection: this.movies,
			//mid: id,
			//reviews: this.reviews,
			router: this
		});

		view.render();
	}
});
