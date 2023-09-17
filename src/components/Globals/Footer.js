import React from 'react'
import { footer } from '../layout.module.css'

export default function Footer() {
    return (
        <footer className={footer}>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto col-md-10 text-yellow text-capitalize'>
                        <h3>
                            all rights reserved &copy;{new Date().getFullYear().toString()}
                        </h3>
                    </div>
                </div>  
            </div>
        </footer>
    )
}
