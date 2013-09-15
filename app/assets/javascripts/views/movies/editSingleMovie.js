Cactus2.Views.EditSingleMovie = Backbone.View.extend({
	template: JST['movies/editSingleMovie'],

	render: function() {
		this.$el.html(this.template());
		return this;
	},

    initialize: function() {
		this.collection = this.options.collection;
		this.id = this.options.mid;
		this.router = this.options.router;
		this.reviews = this.options.reviews;
	},

	events: {
                "click #update" : "updateMovie",
                "click #cancel" : "cancelMovie"
    },
 
    updateMovie: function(e) {
                e.preventDefault();
                if (typeof gon == 'undefined'){
                        alert('Please login to update this movie!');
                        return false;
                }
               
                $(e.target).closest('form').ajaxSubmit({
                        url: 'http://cs3213.herokuapp.com/movies/'+this.id+'.json',
                        dataType:'json',
                        data: {        
                                access_token: gon.token
                        },
                        method: "PUT",
                        error: function(e){
                                alert("You are not authorised to update this movie");
                        },
                        success: function(e){
                                alert("Update successful."); 
                                routerHome.navigate("", { trigger: true });
                        },
                });
        },
 
        cancelMovie: function() {
                routerHome.navigate("", { trigger: true });
        }
})
