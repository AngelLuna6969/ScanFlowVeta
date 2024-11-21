import React from 'react'
import { Footer, Menu, Nabvar, Title } from "../components"

export const Usuarios = () => {
    return (
        <>
            <Nabvar />
            <Menu nombre={"InvestarioSys"} usuario={"Jaimito el cartero"} />
            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper">
                <Title title={"Usuarios"} breadcrums={["Home", "Usarios"]} />
                {/* <!-- Main content --> */}
                <section className="content">
                    {/* <h1>Usarios</h1> */}
                </section>
                {/* <!-- /.content --> */}
            </div>
            {/* <!-- /.content-wrapper --> */}
            <Footer />
        </>
    )
}
