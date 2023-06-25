import {useState, useEffect} from 'react'

function useWindowScroll(){
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const setPosition = function(){
        setX(document.documentElement.scrollLeft)
        setY(document.documentElement.scrollTop)
    }
    const scrollTo = function({left,top,behavior}){
        window.scrollTo({
            top: top,
            left: left,
            behavior: behavior
        });
    }
    useEffect(()=>{
        window.addEventListener('scroll',setPosition)
        return ()=>{
            window.removeEventListener('scroll',setPosition)
        }
    },[])
    return [{x,y},scrollTo]
}

export default useWindowScroll