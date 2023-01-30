import React from 'react'

import './Navbar.css'
import { HashLink as Link} from 'react-router-hash-link '
function Navbar() {
  return (
    <div className='nav'>
    <nav>
        <div class="content">
            <div class="logo">
                Ricky Jonathan
            </div>
            <div class="navitem">
                <ul>
                    <li><Link className="link" smooth to='#Home'>Home</Link></li>
                    <li><Link className="link" smooth to="#About">about</Link></li>
                    <li><Link className="link" smooth to="#Porto">Skills</Link></li>
                    <li><Link className="link" smooth to='#Blog'>Contact</Link></li>
        
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar