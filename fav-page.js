

 var favouites = (function(){

    var fav_item = document.getElementById('fav-item');
    var Fav_List = [
        
    ]

    let i = 0 ;

    function addMovie(movie) {
        localStorage.setItem(i, movie);
        var as = localStorage.getItem(i);
        var newMovie = {
            name: as,
            id: i
        }
        
        i++;
        if(movie){
            Fav_List.push(newMovie);
            renderList();
            return;
        }
        return;
    }


    function addMovieToDom(movie){
        
        const ul = document.createElement('ul');
        ul.innerHTML = `
        <div id="${movie.id}">${movie.name}

        </div>

        <div class="delete-btn" data-id="${movie.id}">
        X
        </div>
        `;
        fav_item.append(ul);
    }


    function renderList () {
        fav_item.innerHTML = '';
        for(let i = 0; i < Fav_List.length; i++){
            addMovieToDom(Fav_List[i]);
        }
    }

    function deleteMovie (movieId) {

        localStorage.removeItem(movieId);
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
        addMovie("race");
        // renderList();
    }

    return {
        load: initializeApp,
        addMovie: addMovie
    }

})()

