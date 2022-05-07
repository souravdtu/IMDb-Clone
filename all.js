let ApiCall = (function(){

    let movieName = "titanic";
    let printMovieName = function(data){
        movieName = data;
        console.log("printing suggesion from api.js: ", movieName);
    }
    // setInterval(()=>{console.log(movieName)},1000);

    var PromiseApi = fetch(`http://www.omdbapi.com/?apikey=89239137&t=${movieName}`).then(function(res){
            return res.json();})
            .then(function(data){
                console.log(data);
                var movie_data = data;
                // console.log(movie_data.Actors);
                return data;
    })

    return {

        PromiseApi: PromiseApi,
        movieName: movieName,
        printMovieName: printMovieName

    }

})()


var indexCall = (function(){

    var search = document.getElementById('search-input');
    var suggestion= 'p';


    var search_listener = function(){ 
        let x = '';
        search.addEventListener('keydown',(event)=>{
            x = search.value;
        });
    }

    search_listener();


    return {
        suggestion: suggestion

    }

})()


var moviePage = (function(){

    var headTitle = document.getElementById('head-title');
    var Poster = document.getElementById('item2-img');
    var Plot = document.getElementById('item3a');
    var movie_Name = document.getElementById('movie_name');
    var year = document.getElementById('year');
    var content_type = document.getElementById('type');
    var rated = document.getElementById('rated');
    var run_time = document.getElementById('run-time');
    var imdb_rating = document.getElementById('imdb-rating');
    var imdb_votes = document.getElementById('imdb-votes');
    var box_office = document.getElementById('box-office');
    var movie_lang = document.getElementById('movie-lang');
    var director = document.getElementById('directors');
    var actors = document.getElementById('actors');
    var writers = document.getElementById('writers');
    var awards = document.getElementById('awards');



    var api_data = async () => {
        var a = await ApiCall.PromiseApi;
        console.log(a.Title);
        headTitle.innerHTML = a.Title;
        Poster.src = a.Poster;
        Plot.innerHTML = a.Plot;
        movie_Name.innerHTML = a.Title;
        movie_Name.style.fontSize = '3rem';
        movie_Name.style.fontFamily = 'cursive';
        year.innerHTML = a.Year;
        content_type.innerHTML = a.Type;
        rated.innerHTML = a.Rated;
        run_time.innerHTML = a.Runtime;
        imdb_rating.innerHTML = a.imdbRating + "/10";
        imdb_votes.innerHTML = a.imdbVotes;
        box_office.innerHTML = a.BoxOffice;
        movie_lang.innerHTML = a.Language;
        director.innerHTML = "Director: "+ a.Director;
        actors.innerHTML = "Actors: "+a.Actors;
        writers.innerHTML = "Writers: "+a.Writer;
        awards.innerHTML = "Awards: "+a.Awards;

    }
    api_data();

    return{
        api_data: api_data,
        movie_Name: movie_Name
    }

})()



var favouites = (function(){

    var fav_item = document.getElementById('fav-item');
    var Fav_List = [
        
    ]


    function addMovie(movie) {
        var newMovie = {
            name: "indexCall.suggestion",
            id: Date.now().toString()
        }
        // if(movie){
        //     Fav_List.push(newMovie);
        //     renderList();
        //     return;
        // }

        

        Fav_List.push(newMovie);
        renderList();
        return;
    }


    function addMovieToDom(movie){
        const li = document.createElement('li');
        li.innerHTML = `
        <div id="${movie.id}">${movie.name}

        </div>

        <div class="delete-btn" data-id="${movie.id}">
        X
        </div>
        `
        fav_item.append(li);
    }


    function renderList () {
        fav_item.innerHTML = '';
        for(let i = 0; i < Fav_List.length; i++){
            addMovieToDom(Fav_List[i]); 

        }
    }

    function deleteMovie (movieId) {
        const newFavList = Fav_List.filter(function(movie){
            return movie.id != movieId
        });
        Fav_List = newFavList;
        renderList();
    }

    function handleClickListener(e){
        const target = e.target;
        if(target.className == 'delete-btn'){
            console.log("fadg");
            const movieId = target.dataset.id;
            deleteMovie(movieId);
            return;
        }
        return;
    }


    function initializeApp(){
        document.addEventListener('click',handleClickListener);
        // console.log(indexCall.suggestion);
        addMovie();
        renderList();
    }

    return {
        load: initializeApp
    }

})()


favouites.load()









