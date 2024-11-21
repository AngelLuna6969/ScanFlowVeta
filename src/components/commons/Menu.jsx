import React from 'react'
import { Link } from 'react-router-dom'

// hacer lo de likn
export const Menu = ({ nombre, usuario }) => {
    return (
        <>
            {/* <!-- Main Sidebar Container --> */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* <!-- Brand Logo --> */}
                <a href="../../index3.html" className="brand-link">

                    <span className="brand-text font-weight-light">{nombre}</span>
                </a>

                {/* <!-- Sidebar --> */}
                <div className="sidebar">
                    {/* <!-- Sidebar user (optional) --> */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">{usuario}</a>
                        </div>
                    </div>

                    {/* <!-- Sidebar Menu --> */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* <!-- Add icons to the links using the .nav-icon className
               with font-awesome or any other icon font library --> */}
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <i className="fas fa-users"></i>
                                    <p className='m-2'>
                                        Personas
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/mobiliario" className="nav-link">
                                    <i className="fas fa-desktop"></i>
                                    <p className='m-2'>
                                        Mobiliario
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ubicaciones" className="nav-link">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p className='m-2'>
                                        Ubicaciones
                                        
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/usuarios" className="nav-link">
                                    <i className="fas fa-user-lock"></i>
                                    <p className='m-2'>
                                        Usuarios
                                        {/* <i className="right fas fa-angle-left"></i> */}
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/informes" className="nav-link">
                                    <i className="fas fa-chart-pie"></i>
                                    <p className='m-2'>
                                        Informes
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- /.sidebar-menu --> */}
                </div>
                {/* <!-- /.sidebar --> */}
            </aside>

        </>
    )
}

