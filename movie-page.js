
// var moviePage = (function(){

//     var headTitle = document.getElementById('head-title');
//     var Poster = document.getElementById('item2-img');
//     var Plot = document.getElementById('item3a');
//     var movie_Name = document.getElementById('movie_name');
//     var year = document.getElementById('year');
//     var content_type = document.getElementById('type');
//     var rated = document.getElementById('rated');
//     var run_time = document.getElementById('run-time');
//     var imdb_rating = document.getElementById('imdb-rating');
//     var imdb_votes = document.getElementById('imdb-votes');
//     var box_office = document.getElementById('box-office');
//     var movie_lang = document.getElementById('movie-lang');
//     var director = document.getElementById('directors');
//     var actors = document.getElementById('actors');
//     var writers = document.getElementById('writers');
//     var awards = document.getElementById('awards');



//     var api_data = async () => {
//         var a = await ApiCall.PromiseApi;
//         console.log(a.Title);
//         headTitle.innerHTML = a.Title;
//         Poster.src = a.Poster;
//         Plot.innerHTML = a.Plot;
//         movie_Name.innerHTML = a.Title;
//         movie_Name.style.fontSize = '3rem';
//         movie_Name.style.fontFamily = 'cursive';
//         year.innerHTML = a.Year;
//         content_type.innerHTML = a.Type;
//         rated.innerHTML = a.Rated;
//         run_time.innerHTML = a.Runtime;
//         imdb_rating.innerHTML = a.imdbRating + "/10";
//         imdb_votes.innerHTML = a.imdbVotes;
//         box_office.innerHTML = a.BoxOffice;
//         movie_lang.innerHTML = a.Language;
//         director.innerHTML = "Director: "+ a.Director;
//         actors.innerHTML = "Actors: "+a.Actors;
//         writers.innerHTML = "Writers: "+a.Writer;
//         awards.innerHTML = "Awards: "+a.Awards;

//     }
//     api_data();

//     return{
//         api_data: api_data,
//         movie_Name: movie_Name
//     }

// })()


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

var s = document.body.baseURI;
var r = "";
for(let i = 0 ; i < s.length ;i++){
    if(s[i-1]=='='){
        for(let j = i ; j <s.length;j++){
            if(s[j]=='%'){
                j++;
                j++;
                r = r+ ' ';
            }else{
                r = r+s[j];
            }
        }
        break;
    }
}
console.log(r);


var PromiseApi = fetch(`http://www.omdbapi.com/?apikey=89239137&t=${r}`).then(function(res){
                return res.json();})
                .then(function(data){
                    console.log(data);
                    headTitle.innerHTML = data.Title;
                    Poster.src = data.Poster;
                    Plot.innerHTML = data.Plot;
                    movie_Name.innerHTML = data.Title;
                    movie_Name.style.fontSize = '3rem';
                    movie_Name.style.fontFamily = 'cursive';
                    year.innerHTML = data.Year;
                    content_type.innerHTML = data.Type;
                    rated.innerHTML = data.Rated;
                    run_time.innerHTML = data.Runtime;
                    imdb_rating.innerHTML = data.imdbRating + "/10";
                    imdb_votes.innerHTML = data.imdbVotes;
                    box_office.innerHTML = data.BoxOffice;
                    movie_lang.innerHTML = data.Language;
                    director.innerHTML = "Director: "+ data.Director;
                    actors.innerHTML = "Actors: "+data.Actors;
                    writers.innerHTML = "Writers: "+data.Writer;
                    awards.innerHTML = "Awards: "+data.Awards;
                    
})