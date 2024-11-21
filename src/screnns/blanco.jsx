import React from 'react'
import { Nabvar } from '../components/commons/Nabvar'
import { Menu } from '../components/commons/Menu'
import { Title } from '../components/commons/Title'
import { Footer } from '../components/commons/Footer'

const blanco = () => {
    return (
        <>
            <Nabvar />
            <Menu />
            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper">
                <Title />
                {/* <!-- Main content --> */}
                <section className="content">
                </section>
                {/* <!-- /.content --> */}
            </div>
            {/* <!-- /.content-wrapper --> */}
            <Footer />
        </>
    )
}

export default blanco
