Cactus2.Models.Review=Backbone.Model.extend({
	defaults:{
		comment: null,
		id: null,
		movie_id: null,
		score: null,
		updated_at: null,
		user: {
			id: null,
			username: null
		}
	}
})
