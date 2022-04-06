import { Formik, Form, Field } from "formik";
import React from "react";
import * as Yup from "yup";
import Alerta from '../components/Alerta';
import {useNavigate} from 'react-router-dom'


const Formulario = () => {

  const navigate = useNavigate()

  const handleSubmit = async (valores) => {
    try {
      const url = "http://localhost:4000/canciones"
      const respuesta = await fetch(url, {
        method: "POST",
        body:JSON.stringify(valores),
        headers: {
          "Content-Type": "application/json"  
        },
      })
      console.log(respuesta);
      const resultado = await respuesta.json()
      console.log(resultado)
    } catch (error) {
      console.log(error);
    }
  };

  const nuevoAlumnoSchema = Yup.object().shape({
    nombre: Yup.string()
                .min(3)
                .max(50)
                .required('El nombre es obligatorio'),
    fecha: Yup.date(),
    album: Yup.string().required("El album es importante"),
    autor: Yup.string().required("El autor es requerido"),
    imgCancion: Yup.string(),
    notas: Yup.string(),
  });

  return (
    <div className="bg-amber-800 p-5 rounded-md mb-20 shadow-md">
      <Formik
        initialValues={{
          nombre: "",
          fecha: "",
          album: "",
          autor: "",
          imgCancion: "",
          notas: "",
        }}
        onSubmit={async(value, {resetForm}) => {
          await handleSubmit(value)
          resetForm()
          navigate('/')
        }}
        validationSchema={nuevoAlumnoSchema}
      >
        {({errors, touched}) => {
          // console.log(touched);
          return (
          <Form
            
          >
            <div>
              <label
                htmlFor="nombre"
                className="text-2xl font-semibold text-white"
              >
                Nombre:
              </label>
              <Field
                className="block w-full px-5 py-2 text-lg 
                    bg-white transition-all rounded-md mb-3"
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre del la canción"
              />
            </div>
            {
            errors.nombre &&touched.nombre ? (
              <Alerta>
                {errors.nombre}
              </Alerta>
            ):null
            }

            <div>
              <label
                htmlFor="fecha"
                className="text-2xl font-semibold text-white"
              >
                Fecha de creación:
              </label>
              <Field
                className="block w-full px-5 py-2 text-lg 
                    bg-white transition-all rounded-md mb-3"
                type="date"
                name="fecha"
                id="fecha"
                // placeholder='Fecha de grabación'
              />
            </div>
            {
            errors.fecha &&touched.fecha ? (
              <Alerta>
                {errors.fecha}
              </Alerta>
            ):null
            }

            <div>
              <label
                htmlFor="album"
                className="text-2xl font-semibold text-white"
              >
                Album:
              </label>
              <Field
                className="block w-full px-5 py-2 text-lg 
                    bg-white transition-all rounded-md mb-3"
                type="text"
                name="album"
                id="album"
                placeholder="Nombre del album"
              />
            </div>
            {
            errors.album &&touched.album ? (
              <Alerta>
                {errors.album}
              </Alerta>
            ):null
            }

            <div>
              <label
                htmlFor="autor"
                className="text-2xl font-semibold text-white"
              >
                Autor:
              </label>
              <Field
                className="block w-full px-5 py-2 text-lg 
                    bg-white transition-all rounded-md mb-3"
                type="text"
                name="autor"
                id="autor"
                placeholder="Autor de la canción"
              />
            </div>
            {
            errors.autor &&touched.autor ? (
              <Alerta>
                {errors.autor}
              </Alerta>
            ):null
            }


            <div>
              <label
                htmlFor="imgCancion"
                className="text-2xl font-semibold text-white"
              >
                Imagen:
              </label>
              <Field
                className="block w-full px-5 py-2 text-lg 
                    bg-white transition-all rounded-md mb-3"
                type="file"
                name="imgCancion"
                id="imgCancion"
                placeholder="Agrega una imagen"
              />
            </div>
            {
            errors.imgCancion && touched.imgCancion ? (
              <Alerta>
                {errors.imgCancion}
              </Alerta>
            ):null
            }

            <div>
              <label
                htmlFor="notas"
                className="text-2xl font-semibold text-white"
              >
                Notas:
              </label>
              <Field
                as="textarea"
                className="block w-full px-5 py-2 text-lg 
                    bg-white transition-all rounded-md h-40 mb-5"
                type="text"
                name="notas"
                id="notas"
                placeholder="Agrega cualquier comentario adicional"
                >
              </Field>
            </div>
            {
            errors.notas && touched.notas ? (
              <Alerta>
                {errors.notas}
              </Alerta>
            ):null
            }

            <div>
              <input 
                className="bg-amber-700 p-3 w-full block rounded-sm
                uppercase text-white font-bold cursor-pointer hover:bg-amber-600
                transition-colors text-xl"
                type="submit" 
                value="Agregar Canción" 
              />
            </div>

          </Form>
    )}}
      </Formik>
    </div>
  );
};

export default Formulario;
