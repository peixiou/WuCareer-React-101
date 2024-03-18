import axios from './axios'


export function getPopularMovieByGenre(params){
    const resp = axios({
        method: "GET",
        url: `/title/v2/get-popular-movies-by-genre?${new URLSearchParams(params)}`
    })
    return resp
}

export function getPopularMovies(){
    const resp = axios({
        method: "GET",
        url: `/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US&limit=5`
    })
    return resp
}

export function getTopRatedMovies(){
    axios({
        method: "GET",
        url: `https://imdb8.p.rapidapi.com/title/get-top-rated-movies`
    }).then((response)=>{return response})
}

export function getMovieDetails(id){
    const resp = axios({
        method: "GET",
        url: `title/get-details?tconst=${id}`
    })
    return resp
}

export function getOverviewMovieDetails(params){
    const resp = axios({
        method: "GET",
        url: `/title/get-overview-details?${new URLSearchParams(params)}`
    })
    return resp
}

export function getFullCredits(params){
    const resp = axios({
        method: "GET",
        url: `/title/get-full-credits?${new URLSearchParams(params)}`
    })
    return resp
}