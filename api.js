
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

