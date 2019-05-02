import React, { useEffect, useState } from 'react'
import Users from './users'

// note: You can use: export function simpleState(){.....}

const simpleState =()=>{
    const [ useUser, setUser] = useState([])
    function getPost(){
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(res=>res.json())
         .then(useUser=> setUser(useUser))
         .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getPost()
    },[])

    return(
        <div>
            <div className="content_title">
            <h1 className="hook_title"> Hooks testing</h1>
            <h2>Don’t worry if you dont undertand right yet</h2>
            </div>
<div className="content_users">
    { useUser.map((user, i)=>(
        <Users
        key={i}
        user={user}
        />
    )) }
</div>

       <div className="hook_video">
       <h2>React Conf 2018 - React hooks</h2>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/dpw9EHDh2bM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
       </div>
        </div>
    )
}

export default simpleState