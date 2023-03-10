import axios from 'axios'
import React, { useEffect, useState } from 'react'
export default function useFetch(url) {
      const [ data , setData ] = useState(null)
      const [ loading , setLoading ] = useState(false)
      const [ error , setError ] = useState(null)

      useEffect(() => {
            setLoading(true)
            axios.get(url).then((res)=>{
                  setData(res.data)
            }).catch((error) =>{
                  setError(error)
            }).finally(() =>{
                  setLoading(false)
            })
      },[url]);
      return { data , loading , error }
}
