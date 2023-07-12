import React from 'react'

export const CursoList = () => {
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
    {
      heroes.map(hero => (
        <CursoCard
          key={hero.id}
          {...hero}
        />
      ))
    }
  </div>
  )
}
