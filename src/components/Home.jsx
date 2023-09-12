import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems:"center", height: "100vh" }} >
            <button> <Link to="/create">Create User</Link><br /></button>
         
            <span/>
            <button><Link to="/employeeslist">Employees List</Link><br /></button>
            <br />
            <button><Link to="/dropdown">Select Employee Dropdown</Link> </button>
            </div>

            
        </div>
    )
}
