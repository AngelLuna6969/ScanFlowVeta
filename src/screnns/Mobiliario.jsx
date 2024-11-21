import React from 'react'
import { Footer, Menu, Nabvar, Title, DataTableComponenet } from "../components"
import QRCode from 'react-qr-code';
const cols = [
    {
        name: 'Identificador',
        selector: row => row.matricula,
    },
    {
        name: 'Nombre',
        selector: row => row.nombre,
    },
    {
        name: 'Descripcion',
        selector: row => row.des,
    },
    {
        name: 'Tipo',
        selector: row => row.tipo,
    },
    {
        name: 'Ubicacion',
        selector: row => row.ubicacion,
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
        nombre: 'Mesa',
        des: 'Mesa de madera',
        tipo: 'muebles',
        ubicacion: 'Edificio D-5',
        cell: (props) => {
            <div>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>
        }
    },
    {
        id: 2,
        matricula: 'ZACSFE346',
        nombre: 'Mesa',
        des: 'Mesa de madera',
        tipo: 'muebles',
        ubicacion: 'Edificio D-5',
        cell: (props) => {
            <div>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>
        }
    },
    {
        id: 3,
        matricula: 'ZACSFE346',
        nombre: 'Mesa',
        des: 'Mesa de madera',
        tipo: 'muebles',
        ubicacion: 'Edificio D-5',
        cell: (props) => {
            <div>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>
        }
    },
    {
        id: 4,
        matricula: 'ZACSFE346',
        nombre: 'Mesa',
        des: 'Mesa de madera',
        tipo: 'muebles',
        ubicacion: 'Edificio D-5',
        cell: (props) => {
            <div>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>
        }
    }
];
export const Mobiliario = () => {
    return (
        <>
            <Nabvar />
            <Menu nombre={"InvestarioSys"} usuario={"Jaimito el cartero"} />
            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper">
                <Title title={"Mobiliario"} breadcrums={["Home", "Mobiliario"]} />
                {/* <!-- Main content --> */}
                <section className="content">
                    <div className="row">
                        <div className="col-4">
                            <div className="card card-primary">
                                <div className="card-header">
                                    Mobiliario
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>Matricula / Identificador / No. invetario</label>
                                        <input type="text" className='form-control' placeholder='1' />
                                    </div>
                                    <div className="form-group">
                                        <label>Nombre del mobiliario / articulo</label>
                                        <input type="text" className='form-control' placeholder='Mesa de Madera' />
                                    </div>
                                    <div className="form-group">
                                        <label>Descripcion</label>
                                        <input type="text" className='form-control' placeholder='Mesa cafe de madera' />
                                    </div>
                                    <div className="form-group">
                                        <label>Tipo de mobilario</label>
                                        <select name="" id="" className="form-control">
                                            <option>Seleccione</option>
                                            <option value="muebles">Muebles</option>
                                            <option value="equipoComp">Equipo de Computo</option>
                                            <option value="equipoLan">Equipo de Laboratorio</option>
                                            <option value="articuloLab">Articulo de Laboratorio</option>
                                            <option value="articuloGen">Articulo General</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Ubicaciones</label>
                                        <select name="" id="" className="form-control">
                                            <option>Seleccione</option>
                                            <option value="muebles">Edificio D-5</option>
                                            <option value="equipoComp">Edificio K-5</option>
                                            <option value="equipoLan">Edificio D-6</option>
                                            <option value="equipoLan">Otro</option>
                                        </select>
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
                                    <h4 className="card-tittle">Personas registradas</h4>
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
