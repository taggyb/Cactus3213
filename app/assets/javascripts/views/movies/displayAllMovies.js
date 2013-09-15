Cactus2.Views.MovieList = Backbone.View.extend({
        template: JST['movies/displayAllMovies'],
 
        events: {
                "click #new_movie"              : "newMovie",
                "click .moviedetail"            : "movieDetail",
                "click span#nextPage.enabled"   : "nextPage",
                "click span#prevPage.enabled"   : "prevPage"
        },
 
        initialize: function() {
        },
 
        newMovie: function() {
                routerHome.navigate("/new", { trigger: true });
        },
 
        movieDetail: function(event) {
                var name = $(event.target).data('name');
                routerHome.navigate("movies/" + name, { trigger: true });
        },
 
        nextPage: function() {
                var currentPage = this._getCurrentPageNumber();
                var nextPage = currentPage + 1;
                this.undelegateEvents();
                routerHome.navigate("/" + nextPage, { trigger: true });
        },
 
        prevPage: function() {
                var currentPage = this._getCurrentPageNumber();
 
                var prevPage;
                if (currentPage !== 1) {
                        prevPage = currentPage - 1;
                } else {
                        prevPage = 1;
                }
                this.undelegateEvents();
                routerHome.navigate("/" + prevPage, { trigger: true });
        },
 
        _getCurrentPageNumber: function() {
                var currentLocation = Backbone.history.location.hash;
                var currentPage = currentLocation.slice(1);
 
                if (currentPage === "") {
                        currentPage = 1;
                } else {
                        currentPage = parseInt(currentPage, 10);
                }
 
                return currentPage;
        },
 
        render: function(data) {
                this.$el.html(this.template(data));
        }
});
