import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import styles from './Login.module.scss'
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/Slice/LoginSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let [pass, setPass] = useState(false)

  const signupSchema = Yup.object().shape({
    username: Yup.string().required("This field is required"),
    password: Yup.string().min(8, 'Minimun character should be 8').required("This field is required"),
    confirmPassword: Yup.string().required("This field is required").oneOf([Yup.ref("password"), null], "Password must match"),
  })
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center mt-5'>
          <div className={`${styles.mainLoginDiv} col-lg-4 col-md-6`}>
            <Formik
              initialValues={{ username: '', password: '', confirmPassword: '' }}
              validationSchema={signupSchema}
              onSubmit={(values, { resetForm }) => {
                console.log('values', values)
                dispatch(userLogin(values))
                navigate('/')
                resetForm();
              }}
            >
              {({ errors, touched, handleChange, handleSubmit, handleBlur, values }) => (
                <Form Form onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <label >username</label>
                    <input type='text' value={values.username} name="username" onChange={handleChange} onBlur={handleBlur} placeholder='username'
                      id="floatingInput" className={`form-control  inp  ${errors.username && touched.username && 'is-invalid'}`} />
                    {
                      errors.username && touched.username ?
                        <p className={styles.errorMessage}>{errors.username}</p> : null
                    }
                  </div>
                  <div className={`${styles.inputGroup} ${styles.passInput} `}>
                    <label>Password</label>
                    <input type={pass ? 'text' : 'password'} value={values.password} name="password" placeholder='password' onChange={handleChange}
                      onBlur={handleBlur} className={`form-control inp ${errors.password && touched.password}`} />

                    <span className={styles.eyeSpan} onClick={() => setPass(!pass)}>
                      {
                        pass ? <i class="bi bi-eye-fill"></i> :
                          <i class="bi bi-eye-slash-fill"></i>
                      }
                    </span>
                    {
                      errors.password && touched.password ?
                        <p className={styles.errorMessage}>{errors.password}</p> : null
                    }
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Confirm Password</label>
                    <input type='text' value={values.confirmPassword} name="confirmPassword" onChange={handleChange} onBlur={handleBlur} placeholder='confirm password'
                      className={`form-control inp ${errors.confirmPassword && touched.confirmPassword && 'is-invalid'}`} />
                    {
                      errors.confirmPassword && touched.confirmPassword ?
                        <p className={styles.errorMessage}>{errors.confirmPassword}</p> : null
                    }
                  </div>
                  <button className='btn btn-dark px-4 w-100' type='submit'>Login</button>
                </Form>
              )}
            </Formik>
          </div>

        </div>


      </div>
    </>
  )
}

export default Login