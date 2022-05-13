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
    var addtofav = document.getElementById('add-to-fav-list');

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
console.log(":",r);


var PromiseApi = fetch(`https://www.omdbapi.com/?apikey=89239137&t=${r}`).then(function(res){
                return res.json();})
                .then(function(data){
                    // console.log(data);
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

var count = 0;

function handleClick(){
    if(count==0){
        localStorage.setItem(localStorage.length,headTitle.innerHTML);
        count++;
        window.alert("added to Favourite List")
    }
}


addtofav.addEventListener('click',handleClick);