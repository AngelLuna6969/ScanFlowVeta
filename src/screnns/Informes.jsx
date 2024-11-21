import React from 'react'
import { Footer, Menu, Nabvar, Title, PieChart, BarsCharts } from "../components"

export const Informes = () => {
  return (
    <>
      <Nabvar />
      <Menu nombre={"InvestarioSys"} usuario={"Jaimito el cartero"} />
      {/* <!-- Content Wrapper. Contains page content --> */}
      <div className="content-wrapper">
        <Title title={"Informes"} breadcrums={["Ubicaciones", "Menu"]} />
        {/* <!-- Main content --> */}
        <section className="content">
          <div className="row">
            <div className="col-12">
              <div className="card card-primary">
                <div className="card-header">
                  <h4 className="card-tittle">Resultados</h4>
                </div>
                <div className="card-body">
                  <PieChart />
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card card-primary">
                <div className="card-header">
                  <h4 className="card-tittle">Resultados</h4>
                </div>
                <div className="card-body">
                  <BarsCharts />
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /.content --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
      <Footer />
    </>
  )
}
