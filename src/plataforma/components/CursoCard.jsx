import React from 'react'
import { Link } from 'react-router-dom'

export const CursoCard = ({ course_id, descripción, fecha_de_creación, imagen , título}) => {

  //const cursoImageUrl = `/assets/${ id }.jpg`;
  return (
    <div className='col animate__animated animate__fadeIn'>
    <div className='card'>
        <div className="row no-gutters">
            <div className="col-4">
                <img src={``} className="card-img" alt={`no hay nada`} />
            </div>

            <div className="col-8">
                <div className="card-body">
                    <h5 className='card-titlte'> { course_id } </h5>
                    <h5 className='card-titlte'> { título } </h5>
                    <p className='card-text'>{ descripción }</p>

                        {/* {
                            (alter_ego !== characters) && ( <p> {characters} </p>)
                        } */}

                    <p className='card-text'>
                        <small className='text-muted'> { fecha_de_creación } </small>
                    </p>

                    <Link to={`/curso/${ course_id }`}>
                        Mas...
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
