import React, { useEffect, useState } from 'react'
import { useAuthStore, useForm } from '../../../hook';
import { MainContent, Siderbar } from '../../../ui/components'
import { getCursos } from '../../../helpers/getCursos';
import { Axios } from 'axios';
import SafePageApi from '../../../api/SafePageApi';
import { CursoCard } from '../../components/CursoCard';
import Swal from "sweetalert2";

const sideBar = document.querySelector('.sidebar')
export const AddCourse = () => {


    const { titleCourse, descrCourse, imgCourse, onInputChange: onCourseInputChange } = useForm('')
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        const getAll = async () => {
            const data = await SafePageApi.get('/course/curso?page=1&pageSize=5');
            setTodos(data.data.cursos);
        }
        getAll();
    }, [page, pageSize]);

    const handleNextPage = () => {
        console.log('next')
        setPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        console.log('back')
        setPage(prevPage => prevPage - 1);
    };


    const insertCourse = async () => {
        const fecha = new Date();
        try {
            console.log(fecha)
            //const { data } = await SafePageApi.post('/course/curso', { titleCourse, fecha, descrCourse, imgCourse });
            console.log(data)

        } catch (error) {
            return Swal.fire('Error en la autenticación', errorMessage, 'error');
        }
    }

    return (
        <>
            <MainContent />
            <Siderbar />
            <div className="content row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form className='p-left-30' >
                        <input type="text"
                            placeholder="titulo"
                            className="form-control"
                            name="titleCourse"
                            alt="off"
                            value={titleCourse}
                            onChange={onCourseInputChange}
                        />
                        <input type="text"
                            placeholder="Descripcion"
                            className="form-control m-top-16"
                            name="descrCourse"
                            alt="off"
                            value={descrCourse}
                            onChange={onCourseInputChange}
                        />
                        <input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            className='m-top-16'
                            value={imgCourse}
                            onChange={onCourseInputChange}
                        />
                    </form>
                        <button className="btn btn-outline-primary m-top-16" onClick={insertCourse}>
                            Guardar
                        </button>

                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr />
                    <div className="alert alert-primary">
                        <ul>
                            {todos.map(post => (
                                <CursoCard
                                    key={post.course_id}
                                    {...post}
                                />
                            ))}
                        </ul>
                        <button onClick={handlePrevPage} disabled={page === 1}>
                            Anterior
                        </button>
                        <button onClick={handleNextPage}>
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
