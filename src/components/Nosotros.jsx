import React from 'react'
import {
    
    Link
    
  } from "react-router-dom";

const Nosotros = () => {

const [equipo, setEquipo] = React.useState([])

    React.useEffect(() => {
        // console.log(useEffect)
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users/')
        const users = await data.json()
        // console.log(users)
        setEquipo(users)
    }




    return ( 
       
        <div>
            <h1>Pagina de Nosotros </h1>
            <ul>
                {
                    equipo.map(item => (
                        <li key={item.id}>
                            <Link to ={`/nosotros/${item.id}`}>
                            {item.name} --->  {item.username}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>

     );
}
 
export default Nosotros