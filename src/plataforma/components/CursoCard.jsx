import React from 'react'
import { Link } from 'react-router-dom'

export const CursoCard = () => {

  //const cursoImageUrl = `/assets/${ id }.jpg`;
  return (
    <div className='col'>
    <div className='card'>
        <div className="row no-gutters">
            <div className="col-4">
                <img src={``} className="card-img" alt={`no hay nada`} />
            </div>

            <div className="col-8">
                <div className="card-body">
                    <h5 className='card-titlte'> { `` } </h5>
                    <p className='card-text'>{ `` }</p>

                        {/* {
                            (alter_ego !== characters) && ( <p> {characters} </p>)
                        } */}

                    <p className='card-text'>
                        <small className='text-muted'> { `` } </small>
                    </p>

                    <Link to={`/tablero`}>
                        Mas...
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
