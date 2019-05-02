import React from 'react'


const Users = ({user})=>(
    <div className="content_user">
    <li className="user_name">{user.name}</li>
    <li className="user_id">{user.username}</li>
    <li className="user_mail">{user.email}</li>
    <li className="user_phone">{user.phone}</li>
    </div>
)
export default Users