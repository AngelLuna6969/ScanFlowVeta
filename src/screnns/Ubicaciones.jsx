import React, { useEffect } from 'react'
import { Footer, Menu, Nabvar, Title, DataTableComponenet } from "../components"
import { useFetchv2 } from '../hooks/useFetchv2';
import QRCode from 'react-qr-code';
const cols = [
    {
        name: 'Identificador',
        selector: row => row.matricula,
    },
    {
        name: 'Edificio',
        selector: row => row.edificio,
    },
    {
        name: 'Departamento',
        selector: row => row.dep,
    },
    {
        name: 'Area',
        selector: row => row.area,
    },
    {
        name: 'Opciones',
        selector: row => row.action,
        cell: (props) => (
            <div>
                <button className='btn btn-primary btn-sm m-1'>
                    <i class="fas fa-pen-nib"></i>
                </button>
                <button className='btn btn-danger btn-sm'>
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true
    }

];
const info = [
    {
        id: 1,
        matricula: 'ZACSFE346',
        edificio: 'K-3',
        dep: 'lab-101',
        area: 'Mecatronica',
        cell: (props) => (
            <div>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>
        )
    },
    {
        id: 1,
        matricula: 'ZACSFE346',
        edificio: 'K-3',
        dep: 'lab-101',
        area: 'Mecatronica',
        cell: (props) => (
            <div>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>
        )
    },
    {
        id: 1,
        matricula: 'ZACSFE346',
        edificio: 'K-3',
        dep: 'lab-101',
        area: 'Mecatronica',
        cell: (props) => (
            <div>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>
        )
    },
    {
        id: 1,
        matricula: 'ZACSFE346',
        edificio: 'K-3',
        dep: 'lab-101',
        area: 'Mecatronica',
        cell: (props) => (
            <div>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>
        )
    },
];

// const getUbicaciones = async () => {

//     const { getData } = useFetchv2();

//     const ubicaciones = await getData('http://localhost/Backend-CodeIgniter-REST-Controller/index.php/Api/ubicacion');
//     if (!ubicaciones.error) {
//         console.log(ubicaciones)
//     }
// }

// useEffect(() => {
//     getUbicaciones();
// }, [])

export const Ubicaciones = () => {
    return (
        <>
            <Nabvar />
            <Menu nombre={"InvestarioSys"} usuario={"Jaimito el cartero"} />
            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper">
                <Title title={"Ubicaciones"} breadcrums={["Home", "Ubicaciones"]} />
                {/* <!-- Main content --> */}
                <section className="content">
                    <div className="row">
                        <div className="col-4">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4 className="card-tittle">Nueva Ubicacion</h4>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>Matricula / Identificador</label>
                                        <input type="text" className='form-control' placeholder='1' />
                                    </div>
                                    <div className="form-group">
                                        <label>Edificio</label>
                                        <input type="text" className='form-control' placeholder='K5' />
                                    </div>
                                    <div className="form-group">
                                        <label>Departamento</label>
                                        <input type="text" className='form-control' placeholder='lab-102' />
                                    </div>
                                    <div className="form-group">
                                        <label>Area</label>
                                        <input type="text" className='form-control' placeholder='TIC' />
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-secondary">Cancelar</button>
                                        <button className="btn btn-success float-right" data-toggle="modal" data-target="#modal-default">Aceptar</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4 className="card-tittle">Ubicaciones registradas</h4>
                                </div>
                                <div className="card-body">
                                    <DataTableComponenet cols={cols} info={info} />
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
            <div className="modal fade" id="modal-default">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Default Modal</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <QRCode value="Este es mi codigo QR" />
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
