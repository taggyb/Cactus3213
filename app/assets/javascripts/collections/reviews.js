Cactus2.Collections.Reviews = Backbone.Collection.extend({
	url: function() {
		return 'http://cs3213.herokuapp.com/movies/' + this.movie_id + '/reviews.json';
	},
	model: Cactus2.Models.Review,

	initialize: function(models, options) {
		this.movie_id = options.id || [];
	}
});
