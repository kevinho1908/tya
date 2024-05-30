import React, { useEffect, useMemo, useState } from 'react'
import { MainContent, Siderbar } from '../../../ui'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import SafePageApi from '../../../api/SafePageApi';

export const CursoEdit = () => {


  const { course_id } = useParams();


  const [itemEncontrado, setItemEncontrado] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    // Llamar a la función que consulta la base de datos por el ID
    const consultarBaseDeDatos = async (course_id) => {
      try {
        // Supongamos que tienes una función en tu backend llamada buscarElementoPorId
        const respuesta = await SafePageApi.get(`/course/curso/${course_id}`, {
          headers: {
            'x-token': token
          }
        });

        setItemEncontrado(respuesta.data.curso);
        console.log(respuesta.data.curso)
      } catch (error) {
        console.error('Error al consultar la base de datos:', error);
      }
    };

    consultarBaseDeDatos(course_id);
  }, [course_id]);


  return (

    <>
      <MainContent />
      <Siderbar />

      {itemEncontrado && itemEncontrado.map(post => (
        <div className='content row mt-5'>
          <div className='col-4'>
            <img
              src={`http://localhost:8000/static/${post.imagen}`}
              alt={''}
              className='img-thumbnail animate__animated animate__fadeInLeft' />
          </div>

          <div className="col-8">
            <h3> {course_id} </h3>
            <ul className='list-group list-group-flush '>
              <li className='list-group-item'> <b> titulo </b> {post.title}</li>
              <li className='list-group-item'> <b> Descripcion: </b> {post.descripcion}</li>

            </ul>

            <h5 className='mt-3'> contenido </h5>
            <p> {''} </p>
            <div>
              <button className='btn btn-success'
                onClick={''}> editar </button>
              <button className='btn btn-primary m-left-16'
                onClick={''}> agregar contenido </button>
              <button className='btn btn-danger m-left-16'
                onClick={''}> eliminar </button>
            </div>

          </div>
        </div>
      ))}

    </>
  )
}
