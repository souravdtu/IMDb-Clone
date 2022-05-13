    var fav_item = document.getElementById('fav-item');
    var Fav_List = []
    
    function addMovie() {
        var n = 0;
        var i = 0;
        while(n<localStorage.length){
            if(localStorage.getItem(i)!=null){
                const list= {
                    name: localStorage[i],
                    id: i
                }
                n++;
                Fav_List.push(list);
            }
            i++;
        }

    }

    function addMovieToDom(movie){
        const ul = document.createElement('ul');
        ul.innerHTML = `
            <div class="movie-name" id="${movie.id}">${movie.name}</div>
            <div class="delete-btn" data-id="${movie.id}">Delete</div>
            `;
        fav_item.append(ul);
    }


    function renderList () {
        Fav_List = []
        addMovie();
        fav_item.innerHTML = '';
        for(let i = 0; i < Fav_List.length; i++){
            addMovieToDom(Fav_List[i]);
        }
    }

    function deleteMovie (movieId) {
        var movieNa = localStorage.getItem(movieId)
        console.log(movieNa)
        localStorage.removeItem(movieId);
        const newFavList = Fav_List.filter(function(movie){
            return movie != movieNa
        });
        Fav_List = newFavList;
        renderList();
    }

    function handleClickListener(e){
        const target = e.target;
        if(target.className == 'delete-btn'){
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

