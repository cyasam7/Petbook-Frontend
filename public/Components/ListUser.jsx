import React from 'react'
import '../assets/styles/ListUser.scss'
function ListUser({children}) {
    return (
        <div className="list-users">
            {children}
        </div>
    )
}

export default ListUser
