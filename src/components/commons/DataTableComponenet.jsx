import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
const defaultValues ={
    cols :[
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
        }
    ],
    info : [
        {
            matricula: 1,
            nombre: 'Angel',
            apaterno: 'Luna',
            amaterno: 'Fox',
            telefono: '2221112212',
            correo: 'angel@gmail.com',
        },
        {
            matricula: 1,
            nombre: 'Angel',
            apaterno: 'Luna',
            amaterno: 'Fox',
            telefono: '2221112212',
            correo: 'angel@gmail.com',
        },
        {
            matricula: 1,
            nombre: 'Angel',
            apaterno: 'Luna',
            amaterno: 'Fox',
            telefono: '2221112212',
            correo: 'angel@gmail.com',
        },
        {
            matricula: 1,
            nombre: 'iuwfikebfiwuef',
            apaterno: 'Luna',
            amaterno: 'Fox',
            telefono: '2221112212',
            correo: 'angel@gmail.com',
        }
    ]
}
export const DataTableComponenet = ({cols=defaultValues.cols, info=defaultValues.info})=>{
    return (
        <DataTable
        columns={cols}
        data={info}
        />
    )
}

DataTableComponenet.PropTypes = {
    cols: PropTypes.array,
    info: PropTypes.array,
}