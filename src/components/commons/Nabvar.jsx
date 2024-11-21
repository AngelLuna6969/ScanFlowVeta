import React from 'react'
import { Link } from 'react-router-dom'

export const Nabvar = () => {
    return (
        <>
            {/* <!-- Navbar --> */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* <!-- Left navbar links --> */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="../../index3.html" className="nav-link">Inicio</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">Contacto</a>
                    </li>
                </ul>
                {/* <!-- Right navbar links --> */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                            <i className="fas fa-sign-out-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* <!-- /.navbar --> */}
        </>
    )
}
