import {useState, useEffect} from 'react'
const useWatchList = () => {
    const [watchList, setWatchList] = useState([])
    const removeMovie = (movie) => {
        let list = [...watchList]
        list.splice(list.findIndex(listMovie=>{
            return listMovie.title.id === movie.id
        }),1) 
        localStorage.setItem("watchlist",JSON.stringify(list))
        console.log(list)
        setWatchList(list)
    }

    const addMovie = (movie) => {
        let list = []
        list = [...watchList,movie]
        localStorage.setItem("watchlist",JSON.stringify(list))
        setWatchList(list)

    }
    useEffect(()=>{
        if (localStorage.getItem("watchlist")) {
            setWatchList(JSON.parse(localStorage.getItem("watchlist")))
        } else {
            localStorage.setItem("watchlist",[])
        }
    },[])
    useEffect(()=>{
        console.log(watchList)
    },[watchList])
    return [addMovie,removeMovie,watchList]
}

export default useWatchList