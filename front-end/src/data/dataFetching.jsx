import { useEffect , useState } from "react";
import axios from 'axios'

export default function DataFetching() {
      const [blogs , setBlogs] = useState([])
      useEffect(() => {
            axios
            .get('http://localhost:1337/api/blogs')
            .then(res => {
                  console.log(res)
                  setBlogs(res.data)
            }).catch(err => {
                  console.log(err)
            })
      }, [])
  return (
    <div>
    </div>
  )
}
