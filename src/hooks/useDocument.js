import { useState,useEffect } from "react"
import {projectFirestore} from "../firebase/config"

export const useDocument =(collection,id) =>{
  const [document,setDocument]=useState(null)
  const [error,setError]=useState(null)

  //real time data
  useEffect(() => {
   const ref =projectFirestore.collection(collection).doc(id)
   //invok cleanup fct unsub if we leave the page
   const unsubscribe =ref.onSnapshot((snapshot)=>{
    if (snapshot.data()) {
      setDocument({...snapshot.data(), id: snapshot.id})
      setError(null)
    }
    // no such doc exist if we enter random project id
    else{
      setError("No such document exist")
    }
   },(err)=>{
    console.log(err.message)
    setError("Failed to get the document")
   })
   return ()=> unsubscribe()
  }, [collection,id])
  return {document,error}
}