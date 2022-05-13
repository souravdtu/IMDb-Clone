

    // // document.cookie = "movie1=sdfff; expires=Wed, 11 May 2022 12:00:00 UTC";
    // document.cookie = "movie=sdfadff";
    // document.cookie = "movie2=as";
    // document.cookie = "movie3=asdsf"
    // console.log(document.cookie)
    var fav_item = document.getElementById('fav-item');
    var Fav_List = []

    localStorage.setItem(localStorage.length,"fast");
    function addMovie() {
        // localStorage.setItem(i, movie);
        // var as = localStorage.getItem(i);
        // var newMovie = {
        //     name: as,
        //     id: i
        // }
        
        // i++;
        // if(movie){
        //     Fav_List.push(newMovie);
        //     renderList();
        //     return;
        // }
        // return;
        for(let i = 0 ; i< localStorage.length ;i++){
            Fav_List.push(localStorage[i]);
        }
    }


    function addMovieToDom(movie){
        
        const ul = document.createElement('ul');
        ul.innerHTML = `
        <div id="${movie}">${movie}

        </div>

        <div class="delete-btn" data-id="${movie}">
        X
        </div>
        `;
        fav_item.append(ul);
    }


    function renderList () {
        addMovie();
        fav_item.innerHTML = '';
        for(let i = 0; i < Fav_List.length; i++){
            addMovieToDom(Fav_List[i]);
        }
    }

    function deleteMovie (movieId) {
        localStorage.removeItem(0);
        const newFavList = Fav_List.filter(function(movie){
            return movie != movieId
        });
        Fav_List = newFavList;
        renderList();
    }

    function handleClickListener(e){
        const target = e.target;
        if(target.className == 'delete-btn'){
            console.log("fadg");
            const movieId = target.dataset.id;
            console.log(movieId)
            deleteMovie(movieId);
            return;
        }
        return;
    }


    function initializeApp(){
        document.addEventListener('click',handleClickListener);
        renderList();
    }
    
    initializeApp();

