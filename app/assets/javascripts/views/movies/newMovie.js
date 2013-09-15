Cactus2.Views.NewMovie = Backbone.View.extend({
        template: JST["movies/newMovie"],
 
        render: function() {
                this.$el.html(this.template());
                return this;
        },
 
        events: {
                "click #create" : "saveMovie",
                "click #cancel" : "cancelMovie"
        },
 
        saveMovie: function(e) {
                e.preventDefault();
                if (typeof gon == 'undefined'){
                        alert('Please login!');
 
                        return false;
                }
               
                $(e.target).closest('form').ajaxSubmit({
                        url: 'http://cs3213.herokuapp.com/movies.json',
                        dataType:'json',
                        data: {        
                                access_token: gon.token
                        },
                        method: "POST",
                        error: function(e){
                                alert("error");
                        },
                        success: function(e){
                                alert("movie added."); 
                        },
                });
        },
 
        cancelMovie: function() {
                routerHome.navigate("", { trigger: true });
        }
});