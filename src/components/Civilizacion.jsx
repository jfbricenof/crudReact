import React  from 'react'
import {useParams} from 'react-router-dom'


const Civilizacion = () => {

    // console.log(useParams())
    const {id} = useParams();
    // console.log(id)


    const [pueblo, setPueblo] = React.useState([])

// useEffect para obtener datos de la url (api)
    React.useEffect(() => { 
        // console.log(useEffect)
       

    const obtenerDatos = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const users = await data.json()
        // console.log(users)
        setPueblo(users)
    }
    obtenerDatos()
    }, [id])
   
    return (
        <div>
            <h3>{pueblo.name}</h3>
            <ul>
                <li>{pueblo.username}</li>
                <li>{pueblo.email}</li>
                
            </ul>
        </div>
    )
    
}

export default Civilizacion
