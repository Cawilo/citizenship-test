import React from "react"
import "./style.css"
import { Link } from "react-router-dom"

function Nav(){
    return(
        <nav>
            <div>
            <Link to ="/">U.S Citizenship Practice Test</Link>
            </div>
        </nav>
    )
}

export default Nav