Cactus2.Views.NewMovie = Backbone.View.extend({
	template: JST["movies/newMovie"],

	render: function() {
		this.$el.html(this.template());
 		return this;
	},

	events: {
		"click #create"	: "saveMovie",
		"click #cancel"	: "cancelMovie"
	},

	saveMovie: function(e) {
		e.preventDefault();
		if (typeof gon == 'undefined'){
			alert('Please login!');
		} 
		
		
		$('#new_movie_form').ajaxSubmit({
			method: "POST",
			url: "http://cs3213.herokuapp.com/movies.json",
			data: {
				"access_token": gon.token
			},
			dataType: "json",
			success: function(e){
				alert("movie added");
				window.routerHome.navigate('/', {trigger: true});
			},
			error: function(e) {
					alert("movie not added!");
				}
			});
	},

	cancelMovie: function() {
		routerHome.navigate("", { trigger: true });
	}
});
