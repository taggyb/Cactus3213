Cactus2.Views.SingleMovie = Backbone.View.extend({
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
	},

	events: {
                "click #update_movie" : "updateMovie",
                "click #delete_movie" : "deleteMovie",
                "click #submit_review" : "submitReview",
                "click #delete_review" : "deleteReview"
        },

    updateMovie: function() {
                routerHome.navigate("/movies/"+this.id+"/edit", { trigger: true });
    },

    deleteMovie: function(e) {
                e.preventDefault();
                if (typeof gon == 'undefined'){
                        alert('Please login to delete this movie!');
 
                        return false;
                }
               
                //$(e.target).closest('form').ajax({
                $.ajax({
                        url: 'http://cs3213.herokuapp.com/movies/'+this.id+'.json',
                        dataType:'json',
                        data: {        
                                access_token: gon.token
                        },
                        method: "DELETE",
                        error: function(e){
                                alert("You are not authorised to delete this movie");
                        },
                        success: function(e){
                                alert("Movie deleted successfully."); 
                                routerHome.navigate("", { trigger: true });
                        },
                });
        },


    submitReview: function(e) {
                e.preventDefault();
                if (typeof gon == 'undefined'){
                        alert('You are not authorised to add a review. Please sign in.');
 
                        return false;
                }
               
                $(e.target).closest('form').ajaxSubmit({
                        url: 'http://cs3213.herokuapp.com/movies/'+this.id+'/reviews.json',
                        dataType:'json',
                        data: {        
                                access_token: gon.token
                        },
                        method: "POST",
                        error: function(e){
                                alert("You are not authorised to add a review Please sign in.");
                        },
                        success: function(e){
                                alert("Review has been successfully added."); 
                                routerHome.navigate("", { trigger: true });
                        },
                });
        },


	redirectToMain: function() {
		routerHome.navigate("", { trigger: true });
	}
})
