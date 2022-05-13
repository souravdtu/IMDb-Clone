
var search = document.getElementById('search-input');
var labels = document.getElementById('labels');
var opt = document.getElementsByTagName('option');
var search_icon = document.getElementById('search-icon-i');
var def = "aaa";
var array = [];

function deleteOp(){
    // console.log(opt.length);
    labels.innerHTML = '';
    // for(let i = 0 ; i < opt.length ;i++){
    //     labels.removeChild(labels.children[i]);
    // }
    // console.log(opt.length);
}

function labOp(){
    deleteOp();
    for(let i = 0 ; i < array.length ;i++){
        const op = document.createElement('option');
        op.value = array[i];
        op.innerHTML = `
        <a href="movie-page.html?title=${array[i]}"></a>`
        labels.append(op);
    }
}


function handleInputKeypress(e){
    if(e.key!='Enter'){
        search_icon.innerHTML = `
            <a href="movie-page.html?title=${e.target.value}" target="_blank"></a>
            `
        array = [];
        def = e.target.value;
        var PromiseApi = fetch(`https://www.omdbapi.com/?apikey=89239137&s=${def}`).then(function(res){
                return res.json();})
                .then(function(data){
                    if(data!=undefined){
                        for(let i = 0 ; i < 10  ;i++){
                            array.push(data.Search[i].Title);
                            // console.log(array[i]);
                        }
                        labOp();
                        // console.log(data.Search);
                    }
                    
        })
    }
}


function initializeApp(){
    search.addEventListener('keyup',handleInputKeypress);
    
}



initializeApp();