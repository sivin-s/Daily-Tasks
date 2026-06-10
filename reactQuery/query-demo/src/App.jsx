import './App.css'
import {QueryClient, useMutation, useQuery} from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [fetchUsers,setFetchUsers] = useState(false)
  const query = new QueryClient()
  const {data,error,isLoading} = useQuery({
  queryKey: ["users"], // for cache 'unique key'.
 // queryKey: ["users",{inputState}], // for cache 'unique key' & dynamic keys "use searching - in key stroke".
  queryFn: async ()=>{
      const response =  await axios("https://dummyjson.com/users")
      // console.log(response.data.users[0].firstName)
      return response.data
  },
   // enabled: false // auto fetching like 'useEffect'
   enabled: fetchUsers, // eg: only fetch data - when click.
   refetchOnWindowFocus: true // default true - it auto refetch data on 'focus' on browser window.
  })

  /* # Notice: to get data from cache
     we use 
     const query = useQueryClient();
     const users = query.getQueryData(["users"]);
     console.log(users)
     query.setQueryData("users","hello -> data") -> used to set data to cache 
  */


// For 'POST' request, by default useQuery doesn't support post request we need to use 'useMutation()'
const {mutate}  = useMutation({ // create a new user
  mutationFn: ()=>{
    axios('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: 'Muhammad',
    lastName: 'Ovi',
    age: 250,
    /* other user data */
  })
}).then((res)=> console.log(res))
  },
 onSuccess: ()=>{
  // invalidate - data in the cache - getting the new data. eg: after submitting the form.
  // it retrigger the refetch 'useQuery()' - fetch fresh data. 
   query.invalidateQueries({
    queryKey: ["users"]
   })
  }
})

// console.log(res)

 
if(isLoading){
  return <h1>Loading....</h1>
}

  return (
    <div>
       list the users names: 
       <button onClick={()=> setFetchUsers((prev)=>!prev)}>Fetch Users</button>
       <button onClick={()=> mutate()}>Add User</button>
      <ul>
        {
          data?.users?.slice(0,6).map((user,i)=>{
             return  <li id={i}>{user?.firstName}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App
