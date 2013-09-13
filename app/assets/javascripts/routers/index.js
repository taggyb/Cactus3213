Cactus2.Routers.Index=Backbone.Router.extend({
	routes:{
		'movies':'index'
	},

	initialize: function(){
		this.movies=new Cactus2.Collections.Movies();
		this.movies.fetch();
	},

	index: function(){
		var view=new Cactus2.Views.MoviesIndex({
			el:'#wrapper',
			collection: this.movies,
			router: this
 	});

	view.render();
	}
});