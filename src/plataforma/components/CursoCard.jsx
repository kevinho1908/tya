import React from 'react'
import { Link } from 'react-router-dom'

export const CursoCard = ({ course_id, descripcion, fecha_de_creación, imagen, title }) => {

    //   const cursoImageUrl = `http://localhost:8000/${ imagenes }`;
    console.log(imagen)
    //http://localhost:8000/static/fotoprueba.png
    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={`http://localhost:8000/static/${imagen}`} className="card-img" alt={`no hay nada`} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-titlte'> {title} </h5>
                            <p className='card-text'>{descripcion}</p>
                            {/* {
                            (alter_ego !== characters) && ( <p> {characters} </p>)
                        } */}
                            <p className='card-text'>
                                <small className='text-muted'> {fecha_de_creación} </small>
                            </p>

                            <Link to={`/curso/${course_id}`}>
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
