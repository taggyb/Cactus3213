Cactus2.Routers.Index=Backbone.Router.extend({
        routes: {
                ''                      : 'index',
                'movies'                : 'index',
                'new'                   : 'newMovie',
                ':page'                 : 'index',
                'movies/:id'            : 'displaySingleMovie',
                'movies/:id/edit'       : 'editSingleMovie'
        },
 
        initialize: function() {
        },
 
        index: function(page) {
                if (!page) {
                        // set default page to 1
                        page = 1;
                        $('#prevPage').removeClass("enabled");
                        $('#prevPage').addClass("disabled");
                }else {
                        // cast the parameter to a number because it may be a string
                        page = parseInt(page, 10);
                }
 
                var moviePageSourceUrl = '//cs3213.herokuapp.com/movies.json?page=';
 
                // check if there is a next page
                var nextCollection = $.get(moviePageSourceUrl + (page + 1), function(data) {
                        // next page exists
                        if (data.length) {
                                $('#nextPage').removeClass("disabled");
                                $('#nextPage').addClass("enabled");
                        }
 
                        // activate the previous page if not at page 1
                        if (page > 1) {
                                $('#prevPage').removeClass("disabled");
                                $('#prevPage').addClass("enabled");
                        }
                });
 
                this.movies = new Cactus2.Collections.Movies([],{page:page});
                this.movies.fetch();
                this.movies.models
 
                var view = new Cactus2.Views.MoviesIndex({
                        el:'#wrapper',
                        collection: this.movies,
                        mpage: page,
                        router: this
                });
 
                view.render();
        },
 
        newMovie: function() {
                var view = new Cactus2.Views.NewMovie({
                        el:'#wrapper',
                        router: this
                });
 
                view.render();
        },
 
        displaySingleMovie: function(id) {
                this.amovie = new Cactus2.Collections.aMovie([],{id:id});
                this.amovie.fetch();
                this.amovie.models
 
                this.reviews = new Cactus2.Collections.Reviews([],{id:id});
                this.reviews.fetch();
                this.reviews.models
                var view = new Cactus2.Views.SingleMovie({
                        el: '#wrapper',
                        collection: this.amovie,
                        mid: id,
                        reviews: this.reviews,
                        router: this
                });
 
                view.render();
        },
 
        editSingleMovie: function(id) {
                var view = new Cactus2.Views.EditMovie({
                        el: '#wrapper',
                        router: this
                });
 
                view.render();
        }
});