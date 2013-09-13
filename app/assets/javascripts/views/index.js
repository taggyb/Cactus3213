Cactus2.Views.MoviesIndex = Backbone.View.extend({
	template: JST['movies/index'],
		
	initialize: function(){
	 this.collection = this.options.collection;
  	 this.router = this.options.router;
  	 this.collection.on('all', this.render, this);
  	 //this.movieListView = new Cactus2.Views.MovieList();
	  
	},

	render: function(){
		this.$el.html(this.template());
		this.setElement(this.$el.find('#movie-list')).$el.html({movies:this.collection.models});	
   	return this;
 	}
});
