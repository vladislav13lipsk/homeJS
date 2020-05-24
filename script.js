

'use strict';



const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    start:function(){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
        }
    },
    rememberMyFilms:function(){
        for(let i = 0 ; i < 2; i++){
    
            const   a = prompt("Один из последних просмотренных фильмов",""),
                    b = prompt("На сколько оцените его?","");
            
                if(a != null && b != null && a !="" && b !="" && a.length < 50){
                console.log('done');
                personalMovieDB.movies[a] = b;
            
                } else{
                    console.log('error');
                    i--;
                }
            
            }
    },
    detectPersonalLevel:function(){
        if(personalMovieDB.count < 10){
            console.log("Просмотренно довольно мало фильмов");
        } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30){
            console.log("Вы киноман");
        } else{
            console.log("Произошла ошибка");
        }
    },
    toogleVisibleMyDB:function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },

    showMyDB:function (hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres:function (){
        for(let i = 1; i <= 3; i++){ 
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre == '' || genre == null){
                console.log("Вы ввели некорректные данные");
                i--;
            }else{
                personalMovieDB.genres[i - 1] = genre;
            }
        }
            
           personalMovieDB.genres.forEach((item,i) => {
               console.log(`Любимый жанр${i + 1} - это ${item}`)
           });
    }
    
    
};




 // function showMyDB(){
//     while(personalMovieDB.privan == false){
//         console.log(personalMovieDB);
//         break;
//     }
// }

// showMyDB();


// let i = 0;
// while(i < 2){

//   const  a = prompt("Один из последних просмотренных фильмов",""),
//     b = prompt("На сколько оцените его?","");

//     if(a != null && b != null && a !="" && b !="" && a.length < 50){
//         console.log('done');
//         personalMovieDB.movies[a] = b;
    
//         } else{
//             console.log('error');
//             i--;
//         }
//         i++;
// }