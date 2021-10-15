// TMDB links
// https://api.themoviedb.org/3/movie/550?api_key=df79fe37be705e64cd2b681c66ffe74d
// https://api.themoviedb.org/4/df79fe37be705e64cd2b681c66ffe74d/{account_id}/movie/favorites?page=1
// https://image.tmdb.org/t/p/w500/9Xw0I5RV2ZqNLpul6lXKoviYg55.jpg

// ==========================================================================
// ==========================================================================

// Setting variables for TMDB API
const apiKey = `df79fe37be705e64cd2b681c66ffe74d`;
let apiSearch = "popular";
const apiTmbdAddress = "https://api.themoviedb.org/3/movie/";
const apiMovieImgAddress = "https://image.tmdb.org/t/p/";
let apiMovieImgSize = "w500";

// Setting variables for carousel (divs and buttons)
const headerSearchIcon = document.querySelector(".header__search__icon");
const headerSearchInput = document.querySelector("#header__search__input");

const moviesTopRated = document.querySelector(".movies__top__rated");
const moviesPopular = document.querySelector(".movies__popular");
const moviesUpcoming = document.querySelector(".movies__upcoming");
const moviesLatest = document.querySelector(".movies__latest");
const moviesNow = document.querySelector(".movies__now");

const headerMovieImg = document.querySelector(".header__movie--img");
const headerMovieTitle = document.querySelector(".header__text--title");

const buttonLeftTopRated = document.querySelector("#carousel__button__left--TopRated");
const buttonRightTopRated = document.querySelector("#carousel__button__right--TopRated");
const buttonLeftPopular = document.querySelector("#carousel__button__left--popular");
const buttonRightPopular = document.querySelector("#carousel__button__right--popular");
const buttonLeftUpcoming = document.querySelector("#carousel__button__left--upcoming");
const buttonRightUpcoming = document.querySelector("#carousel__button__right--upcoming");
const buttonLeftLatest = document.querySelector("#carousel__button__left--latest");
const buttonRightLatest = document.querySelector("#carousel__button__right--latest");
const buttonLeftNow = document.querySelector("#carousel__button__left--now");
const buttonRightNow = document.querySelector("#carousel__button__right--now");

let carouselItemStart = 0;
let carouselItemCount = 5;

const navUser = document.querySelector(".nav__user");
console.log(navUser)



// function to toggle search field
headerSearchIcon.addEventListener("click", () => {
    headerSearchInput.classList.toggle("input__display");
})




// function to show modal window for user settings

const showUserModal = () => {
    const template = document.querySelector("#template__nav__user");
    const userModal = template.content.cloneNode(true);
    document.body.appendChild(userModal);
}

navUser.addEventListener("click", showUserModal);

// addEventListener("click", this.handleClickEvent);

function showDayModal(dayDate, dayEvent) {
    const template = document.querySelector('#modal-template');
    const modal = template.content.cloneNode(true);
    const closeAction = () => {
        const child = document.querySelector('section.modal-container');
        document.body.removeChild(child);
    };
    modal.querySelector('#close-modal').addEventListener('click', closeAction);

    const cancelButton = modal.querySelector('#cancel-button');
    cancelButton.addEventListener('click', closeAction);
}





// function for creating carousel from the TMDB database
// arguments are data fetched from TMDB databased and DIV where will be carousel placed
// additional argument is image size
const carouselMovies = (moviesData, divToBeAppendedTo) => {
    console.log(divToBeAppendedTo);
    const toBeAppendedTo = divToBeAppendedTo;
    toBeAppendedTo.innerHTML = ` `;
    for (let i = carouselItemStart; i <= carouselItemStart + carouselItemCount; i++) {
        const newMovieImg = document.createElement("div");
        apiMovieImgSize = "w342";
        let imgAddress = `${apiMovieImgAddress}${apiMovieImgSize}/${moviesData[i].backdrop_path}`;
        newMovieImg.innerHTML = `<img src=${imgAddress} alt="${moviesData[i].title}">`;
        toBeAppendedTo.appendChild(newMovieImg);
    }
}

const carouselMoviesPoster = (moviesData, divToBeAppendedTo) => {
    let carouselItemCount = 7;
    console.log(divToBeAppendedTo);
    const toBeAppendedTo = divToBeAppendedTo;
    toBeAppendedTo.innerHTML = ` `;
    for (let i = carouselItemStart; i <= carouselItemStart + carouselItemCount; i++) {
        const newMovieImg = document.createElement("div");
        apiMovieImgSize = "w342";
        let imgAddress = `${apiMovieImgAddress}${apiMovieImgSize}/${moviesData[i].poster_path}`;
        newMovieImg.innerHTML = `<img src=${imgAddress} alt="${moviesData[i].title}">`;
        newMovieImg.classList.add("carousel__poster__now");
        toBeAppendedTo.appendChild(newMovieImg);
    }
}



// function for adding main header movie image and title
const headerMovieImgFce = (moviesData, i) => {
    let imgAddress = `${apiMovieImgAddress}${apiMovieImgSize}/${moviesData[i].backdrop_path}`;
    apiMovieImgSize = "original";
    headerMovieImg.innerHTML = `
        <img src="${imgAddress}" alt="${moviesData[i].title}">`;
    headerMovieTitle.textContent = `${moviesData[i].title}`;
}




// function to download data from TMDB movie database
// it takes argument apiSearch that can be "popular", "top_rated", "upcoming", "now_playing", "latest"

// I. carousel = download top_rated movies and populating carousel
apiSearch = "top_rated";
fetch(`https://api.themoviedb.org/3/movie/${apiSearch}?api_key=${apiKey}&language=en-US`)
    .then(serverResponse => serverResponse.json())
    .then(responseData => {
        const moviesData = responseData.results;


        headerMovieImgFce(moviesData, 3);
        carouselMovies(moviesData, moviesTopRated);

        // function for moving carousel right and left
        const carouselMoveRight = () => {
            if (carouselItemStart + carouselItemCount === 19) {
                carouselItemStart
            } else {
                carouselItemStart++;
            }
            carouselMovies(moviesData, moviesTopRated);
        }

        const carouselMoveLeft = () => {
            if (carouselItemStart === 0) {
                carouselItemStart === 0
            } else {
                carouselItemStart--;
            }
            carouselMovies(moviesData, moviesTopRated);
        }

        // moving carousel by click
        buttonRightTopRated.addEventListener("click", carouselMoveRight);
        buttonLeftTopRated.addEventListener("click", carouselMoveLeft);
    })



// II. carousel = download popular movies and populating carousel
apiSearch = "popular";
fetch(`https://api.themoviedb.org/3/movie/${apiSearch}?api_key=${apiKey}&language=en-US`)
    .then(serverResponse => serverResponse.json())
    .then(responseData => {
        const moviesData = responseData.results;

        carouselMovies(moviesData, moviesPopular);

        // function for moving carousel right and left
        const carouselMoveRight = () => {
            if (carouselItemStart + carouselItemCount === 19) {
                carouselItemStart
            } else {
                carouselItemStart++;
            }
            carouselMovies(moviesData, moviesPopular);
        }

        const carouselMoveLeft = () => {
            if (carouselItemStart === 0) {
                carouselItemStart === 0
            } else {
                carouselItemStart--;
            }
            carouselMovies(moviesData, moviesPopular);
        }

        // moving carousel by click
        buttonRightPopular.addEventListener("click", carouselMoveRight);
        buttonLeftPopular.addEventListener("click", carouselMoveLeft);
    })


// III. carousel = download upcoming movies and populating carousel
apiSearch = "upcoming";
fetch(`https://api.themoviedb.org/3/movie/${apiSearch}?api_key=${apiKey}&language=en-US`)
    .then(serverResponse => serverResponse.json())
    .then(responseData => {
        const moviesData = responseData.results;

        carouselMovies(moviesData, moviesUpcoming);

        // function for moving carousel right and left
        const carouselMoveRight = () => {
            if (carouselItemStart + carouselItemCount === 19) {
                carouselItemStart
            } else {
                carouselItemStart++;
            }
            carouselMovies(moviesData, moviesUpcoming);
        }

        const carouselMoveLeft = () => {
            if (carouselItemStart === 0) {
                carouselItemStart === 0
            } else {
                carouselItemStart--;
            }
            carouselMovies(moviesData, moviesUpcoming);
        }

        // moving carousel by click
        buttonRightUpcoming.addEventListener("click", carouselMoveRight);
        buttonLeftUpcoming.addEventListener("click", carouselMoveLeft);
    })



// IV. carousel = download upcoming movies and populating carousel
apiSearch = "popular";
fetch(`https://api.themoviedb.org/3/movie/${apiSearch}?api_key=${apiKey}&language=en-US`)
    .then(serverResponse => serverResponse.json())
    .then(responseData => {
        const moviesData = responseData.results;
        console.log(moviesData);

        carouselMovies(moviesData, moviesLatest);

        // function for moving carousel right and left
        const carouselMoveRight = () => {
            if (carouselItemStart + carouselItemCount === 19) {
                carouselItemStart
            } else {
                carouselItemStart++;
            }
            carouselMovies(moviesData, moviesLatest);
        }

        const carouselMoveLeft = () => {
            if (carouselItemStart === 0) {
                carouselItemStart === 0
            } else {
                carouselItemStart--;
            }
            carouselMovies(moviesData, moviesLatest);
        }

        // moving carousel by click
        buttonRightLatest.addEventListener("click", carouselMoveRight);
        buttonLeftLatest.addEventListener("click", carouselMoveLeft);
    })


// V. carousel = POSTERS download upcoming movies and populating carousel 
apiSearch = "popular";
fetch(`https://api.themoviedb.org/3/movie/${apiSearch}?api_key=${apiKey}&language=en-US`)
    .then(serverResponse => serverResponse.json())
    .then(responseData => {
        const moviesData = responseData.results;
        console.log(moviesData);

        carouselMoviesPoster(moviesData, moviesNow);

        // function for moving carousel right and left
        
        const carouselMoveRight = () => {          
            if (carouselItemStart + carouselItemCount === 19) {
                carouselItemStart
            } else {
                carouselItemStart++;
            }
            carouselMoviesPoster(moviesData, moviesNow);
        }

        const carouselMoveLeft = () => {
            if (carouselItemStart === 0) {
                carouselItemStart === 0
            } else {
                carouselItemStart--;
            }
            carouselMoviesPoster(moviesData, moviesNow);
        }

        // moving carousel by click
        buttonRightNow.addEventListener("click", carouselMoveRight);
        buttonLeftNow.addEventListener("click", carouselMoveLeft);
    })






