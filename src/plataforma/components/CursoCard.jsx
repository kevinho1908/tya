import React from 'react'

export const CursoCard = () => {

    const cursoImageUrl = `/assets/${ id }.jpg`;
  return (
    <div className='col'>
    <div className='card'>
        <div className="row no-gutters">
            <div className="col-4">
                <img src={cursoImageUrl} className="card-img" alt={superhero} />
            </div>

            <div className="col-8">
                <div className="card-body">
                    <h5 className='card-titlte'> { superhero } </h5>
                    <p className='card-text'>{ alter_ego }</p>

                        {
                            (alter_ego !== characters) && ( <p> {characters} </p>)
                        }

                    <p className='card-text'>
                        <small className='text-muted'> { first_appearance } </small>
                    </p>

                    <Link to={`/hero`}>
                        Mas...
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
