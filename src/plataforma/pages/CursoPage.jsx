import React, { useEffect, useState } from 'react'
import '../../ui/components/App.css'
import { Nav } from '../../ui'
import SafePageApi from '../../api/SafePageApi';
import { CursoCard } from '../components';

export const CursoPage = () => {

  const [todos, setTodos] = useState();
  useEffect(() => {
    const getAll = async () => {
      const data = await SafePageApi.get('/course/curso');
      setTodos(data.data.cursos)
    }
    getAll();
  }, []);

  return (
    <>
      < Nav />
      <div className='p-top-57'>CursoPage</div>
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        {todos && (
          <ul>
            {todos.map(post => (
              <CursoCard
                key={post.course_id}
                {...post}
              />
            ))}
          </ul>
        )}


      </div>
    </>
  )
}
