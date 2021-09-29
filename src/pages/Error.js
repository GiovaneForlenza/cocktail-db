import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <section className='error-page section'>
            <div className="error-container">
                <h1>ooops! this is a dead end</h1>
                <Link to='/' className='btn btn-primary'>
                    Home page
                </Link>
            </div>
        </section>
    )
}

export default Error
