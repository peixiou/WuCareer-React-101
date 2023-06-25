import {useState} from 'react'

function useCounter(startingValue,{min, max}){
    const [count, setCount] = useState(startingValue)
    const increment = function(){
        if (max && count >= max){
            return;
        }
        setCount(prevState=>prevState+1)
    }
    const decrement = function(){
        if (min && count <= min){
            return;
        }
        setCount(prevState=>prevState-1)
    }
    const set = function(value){
        if ((max && value > max) || (min && value < min)){
            return;
        }
        setCount(value)
    }
    const reset = function(){
        set(startingValue)
    }
    return [count , {increment, decrement, set, reset}]
}

export default useCounter