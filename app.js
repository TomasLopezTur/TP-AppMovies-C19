let movies = require('./movies');
const fs = require('fs');

const escibirJson = function(data){
    fs.writeFileSync('./movies.js', data ,{encoding: 'utf-8'})
};
//objeto literal
let moviesDH = {
    listMovies: ()=>{
        
        movies.forEach((movie, index)=>{
            console.log(index+1 , movie.title);
           /*  console.log(`${movie.id}. ${movie.title}`); */
        });
    },
    serachMovie: (id) => {
        let busqueda = movies.find((movie)=>movie.id=== id);
        if (busqueda === undefined){
            return null;
        };
        let movieInfo =`
        Pelicula: ${busqueda.title}
        Rating: ${busqueda.rating}
        Premios: ${busqueda.awards}
        Duracion: ${busqueda.length}
        Precio: ${busqueda.price}
        Genero: ${busqueda.genere}
        `;
        return movieInfo;
        /* console.log(busqueda); */
    },
    searchMoviesByGenre: (generos) => {
        let filtGenre = movies.filter ( movie =>{
            return generos=== movie.genere 
        });
        if(filtGenre<=[]){
            return null;
        }
        return filtGenre;
    },
    totalPrice: () => {
        let filtPrecio = movies.map ( movie => {return movie.price});
        let sumatoria = filtPrecio.reduce((pre,curr) => {
            return pre + curr;
        });
        return sumatoria;
    },
    changeMovieGenre: (id, genereNew) => {
        let busqueda = movies.find((movie)=>movie.id=== id);
        if (busqueda === undefined){
            return null;
        }else{
            busqueda.genere = genereNew;
            console.log(movies)
        };
    }

};
/* moviesDH.listMovies();  */
/* console.log(moviesDH.serachMovie(10)); */
/* console.log(moviesDH.searchMoviesByGenre('Animación')) */
/* console.log(moviesDH.totalPrice()); */
console.log(moviesDH.changeMovieGenre(1,'HD'))
