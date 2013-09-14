Cactus2.Views.MoviesView = Backbone.View.extend({
	template: JST['movies/singlemovie'],

	initialize: function() {
		this.collection = this.options.collection;
		this.id = this.options.mid;
		this.router = this.options.router;
		this.reviews = this.options.reviews;
		this.collection.on('all', this.render, this);
	},

	render: function() {
		this.$el.html(this.template({movies: this.collection.models, mid: this.id, reviews: this.reviews.models}));
		return this;
	}
})
