import { Footer, Menu, Nabvar, Title, DataTableComponenet } from "../components"
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
        name: 'A. Paterno',
        selector: row => row.apaterno,
    },
    {
        name: 'A. Materno',
        selector: row => row.amaterno,
    },
    {
        name: 'Telefono',
        selector: row => row.telefono,
    },
    {
        name: 'Correo',
        selector: row => row.correo,
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
        matricula: 1,
        nombre: 'Angel',
        apaterno: 'Luna',
        amaterno: 'Fox',
        telefono: '2221112212',
        correo: 'angel@gmail.com',
        cell: (props) => {
            <div>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>
        }
    },
    {
        matricula: 1,
        nombre: 'Angel',
        apaterno: 'Luna',
        amaterno: 'Fox',
        telefono: '2221112212',
        correo: 'angel@gmail.com',
        cell: (props) => {
            <div>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>
        }
    },
    {
        matricula: 1,
        nombre: 'Angel',
        apaterno: 'Luna',
        amaterno: 'Fox',
        telefono: '2221112212',
        correo: 'angel@gmail.com',
        cell: (props) => {
            <div>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>
        }
    },
    {
        matricula: 1,
        nombre: 'iuwfikebfiwuef',
        apaterno: 'Luna',
        amaterno: 'Fox',
        telefono: '2221112212',
        correo: 'angel@gmail.com',
        cell: (props) => {
            <div>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>
        }
    }
];
const Personas = () => {
    return (
        <>
            <Nabvar />
            <Menu nombre={"InvestarioSys"} usuario={"Jaimito el cartero"} />
            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper">
                <Title title={"Personas"} breadcrums={["Home", "Personas"]} />
                {/* <!-- Main content --> */}
                <section className="content">
                    <div className="row">
                        <div className="col-4">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4 className="card-tittle">Nueva Persona</h4>
                                </div>
                                <div className="card-body">
                                    <form action="" method="post">
                                        <div className="form-group">
                                            <label htmlFor="">Matricula/Identificador/No. de empleado</label>
                                            <input type="text" className="form-control" placeholder="NX02154"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Nombre(s)</label>
                                            <input type="text" className="form-control" placeholder="Alfredo"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Apellido Paterno</label>
                                            <input type="text" className="form-control" placeholder="Adame"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Apellido Materno</label>
                                            <input type="text" className="form-control" placeholder="Buenrostro"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Telefono</label>
                                            <input type="text" className="form-control" placeholder="2221111111"/>
                                        </div> 
                                        <div className="form-group">
                                            <label htmlFor="">Correo electronico</label>
                                            <input type="text" className="form-control" placeholder="yomero@correo.net"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-secondary">Cancelar</button>
                                    <button className="btn btn-success float-right">Aceptar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4 className="card-tittle">Personas registradas</h4>
                                </div>
                                <div className="card-body">
                                    <DataTableComponenet cols={cols} info={info}/>
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

export default Personas
