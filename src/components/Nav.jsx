import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav className='navbar'>
               <Link to='/choose-team' className="navlink">Back to Teams</Link>
            </nav>
        )
    }
}
