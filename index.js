
var indexCall = (function(){
    var add_to_fav = document.getElementById('add-to-fav');
    var search = document.getElementById('search-input');
    var suggestion= 'p';


    var search_listener = function(){ 
        let x = '';
        search.addEventListener('keydown',(event)=>{
            x = search.value;
        });
    }

    search_listener();

    favouites.addMovie("exam");


    return {
        suggestion: suggestion

    }

})()



