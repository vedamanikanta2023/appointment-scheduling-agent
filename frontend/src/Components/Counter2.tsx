import { useEffect } from "react"

export default function Counter2 ({number}:{number:number}){

    useEffect(()=>{
        console.log('app mounting runs in function');
        
        return ()=>{
            console.log('cleaning in unmounting');
        }
    },[number])

    return<h1>counter-2{" "}{number}</h1>
}