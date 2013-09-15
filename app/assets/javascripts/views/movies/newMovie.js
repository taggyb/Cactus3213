Cactus2.Views.NewMovie = Backbone.View.extend({
	template: JST['movies/newMovie'],

	render: function() {
		this.$el.html(this.template());
 		return this;
	},

	events: {
		"click #create"	: "saveMovie",
		"click #cancel"	: "cancelMovie"
	},

	saveMovie: function() {
		if (typeof gon == 'undefined'){
			alert('Please login!');
			console.log(gon.token);
		} 
		
		$('#new_movie_form').ajaxSubmit({
				url: 'http://cs3213.herokuapp.com/movies.json',
				dataType: 'json',
				method: 'POST',
				data: {
					'access_token': gon.token
					},
				success: function(){
					alert('Movie added!');
				},
				error: function(){
					alert('movie not added!');
				}
		});
			
		window.routerHome.navigate('/', {trigger: true});
	},

	cancelMovie: function() {
		routerHome.navigate("", { trigger: true });
	}
});
