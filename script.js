
// Klíč API (v3 auth)
// df79fe37be705e64cd2b681c66ffe74d

// https://api.themoviedb.org/3/movie/550?api_key=df79fe37be705e64cd2b681c66ffe74d


// https://api.themoviedb.org/4/df79fe37be705e64cd2b681c66ffe74d/{account_id}/movie/favorites?page=1

// https://image.tmdb.org/t/p/w500/9Xw0I5RV2ZqNLpul6lXKoviYg55.jpg

// https://image.tmdb.org/t/p/w500/

// ==========================================================================
// ==========================================================================



// Downloading data and creating carousel
const moviesTopRated = document.querySelector(".movies__top__rated");
const moviesPopular = document.querySelector(".movies__popular");

const buttonLeftTopRated = document.querySelector("#carousel__button__left--TopRated");
const buttonRightTopRated = document.querySelector("#carousel__button__right--TopRated");

const buttonLeftPopular = document.querySelector("#carousel__button__left--Popular");
const buttonRightPopular = document.querySelector("#carousel__button__right--Popular");
console.log(buttonRightPopular);

let carouselItemStart = 0;
const carouselItemCount = 4;

const headerMovieImg = document.querySelector(".header__movie--img");


fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=df79fe37be705e64cd2b681c66ffe74d&language=en-US')
    .then(serverResponse => serverResponse.text())
    .then(responseText => {
        const moviesData = JSON.parse(responseText);
        console.log(moviesData.results)


            const moviesTopRatedList = (data) => {

                moviesTopRated.innerHTML= ` `;

                for (let i=carouselItemStart; i<= carouselItemStart+carouselItemCount; i++) {
                    const moviesTopRatedDiv = document.createElement("div");
                    moviesTopRatedDiv.innerHTML = 
                                    `
                                        <img src="https://image.tmdb.org/t/p/w342${data[i].backdrop_path}" alt="${data[i].title}">
                                    `;

                    moviesTopRated.appendChild(moviesTopRatedDiv);
                }
                headerMovieImg.innerHTML =  `
                <img src="https://image.tmdb.org/t/p/original${data[15].backdrop_path}" alt="${data[0].title}">
            `;
            }

            moviesTopRatedList(moviesData.results);

            buttonRightTopRated.addEventListener("click", () => {
                if (carouselItemStart+carouselItemCount===19) {
                    carouselItemStart
                } else {
                    carouselItemStart++; 
                }
                
                moviesTopRatedList(moviesData.results);
            })

            buttonLeftTopRated.addEventListener("click", () => {
                if (carouselItemStart===0) {
                    carouselItemStart===0
                } else {
                   carouselItemStart--; 
                }
                
                moviesTopRatedList(moviesData.results);
            })   
    }
    )   

    
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=df79fe37be705e64cd2b681c66ffe74d&language=en-US')
    .then(serverResponse => serverResponse.text())
    .then(responseText => {
        const moviesData = JSON.parse(responseText);
        console.log(moviesData.results)


            const moviesPopularList = (data) => {

                moviesPopular.innerHTML= ` `;

                for (let i=carouselItemStart; i<= carouselItemStart+carouselItemCount; i++) {
                    const moviesPopularDiv = document.createElement("div");
                    moviesPopularDiv.innerHTML = 
                                    `
                                        <img src="https://image.tmdb.org/t/p/w342${data[i].backdrop_path}" alt="${data[i].title}">
                                    `;

                    moviesPopular.appendChild(moviesPopularDiv);
                }

      
            }

            moviesPopularList(moviesData.results);

            buttonRightPopular.addEventListener("click", () => {
                if (carouselItemStart+carouselItemCount===19) {
                    carouselItemStart
                } else {
                    carouselItemStart++; 
                }
                
                moviesPopularList(moviesData.results);
            })

            buttonLeftPopular.addEventListener("click", () => {
                if (carouselItemStart===0) {
                    carouselItemStart===0
                } else {
                   carouselItemStart--; 
                }
                
                moviesPopularList(moviesData.results);
            })   
    }
    )   






















    // fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=df79fe37be705e64cd2b681c66ffe74d&language=en-US')
    // .then(serverResponse => serverResponse.text())
    // .then(responseText => {
    //     const moviesData = JSON.parse(responseText);
    //     console.log(moviesData.results)

    //         const moviesTopRatedList = (data) => {

    //             for (let i=0; i<= data.length; i++) {
    //                 const moviesTopRatedDiv = document.createElement("div");
    //                 moviesTopRatedDiv.innerHTML = 
    //                                 `
    //                                     <img src="https://image.tmdb.org/t/p/w342${data[i].backdrop_path}" alt="${data[i].title}">
    //                                 `;
    //                 moviesTopRated.appendChild(moviesTopRatedDiv);
    //             }
    //         }
    //     moviesTopRatedList(moviesData.results);
    // }
    // )  

      






