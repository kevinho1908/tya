import React, { useEffect, useState } from 'react'
import { useAuthStore, useForm } from '../../../hook';
import { MainContent, Siderbar } from '../../../ui/components'
import { getCursos } from '../../../helpers/getCursos';
import axios, { Axios } from 'axios';
import SafePageApi from '../../../api/SafePageApi';
import { CursoCard } from '../../components/CursoCard';
import Swal from "sweetalert2";

const sideBar = document.querySelector('.sidebar')
export const AddCourse = () => {

    const [todos, setTodos] = useState([]);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [descripcion, setDescripcion] = useState('');


    const selectedHandler = e => {
        setFile(e.target.files[0]);
    }

    const sendHandler = async () => {
        console.log("hola mundo ")
        const token = localStorage.getItem('token');
        if (!file) {
            Swal.fire('Uno o mas valores no estan completos');
            return
        }
        const fecha = new Date(); // o tu fecha en el formato que la tengas
        const fechaISO = fecha.toISOString();
        const formdata = new FormData()
        formdata.append('image', file)
        formdata.append('title', title);  // Agregar los datos al formulario
        formdata.append('fechaISO', fechaISO);
        formdata.append('descripcion', descripcion);

        fetch('http://localhost:8000/api/course/curso', {
            method: 'POST',
            body: formdata,
            headers: {
                'x-token': token
              }
        })
            .then(res => res.text())
            .then(res => console.log(res))
            .catch(err => {
                console.error(err)
            })
        //borramos todo el form
        document.getElementById('fileinput').value = null
        setFile(null)
        setTitle(null)
        setDescripcion(null)
        setFile(null)
    }

    useEffect(() => {
        const getAll = async () => {
            const token = localStorage.getItem('token');
          
            try {
              const response = await SafePageApi.get('/course/curso', {
                headers: {
                  'x-token': token
                }
              });
          
              setTodos(response.data.cursos);
            } catch (error) {
              // Manejar errores si es necesario
              console.error('Error al hacer la petición:', error);
            }
          };
        getAll();
    }, []);



    return (
        <>
            <MainContent />
            <Siderbar />
            <div className="content row">
                <div className="col-7">
                    <h4> Crea un curso </h4>
                    <hr />
                    <input type="text"
                        placeholder="titulo"
                        className="form-control"
                        name="titleCourse"
                        alt="off"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        className="form-control m-top-16"
                        aria-label="With textarea"
                        placeholder='Descripcion'
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}

                    />
                    <div className="row">
                        <div className="col-10 m-top-16">
                            <input id="fileinput" onChange={selectedHandler} className="form-control" type="file" />
                        </div>
                        <div className="col-2 m-top-16">
                            <button onClick={sendHandler} type="button" className="btn btn-primary col-12">Upload</button>
                        </div>
                    </div>
                </div>

                <div className="col-5">
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
                    </div>
                </div>
            </div>
        </>
    )
}
