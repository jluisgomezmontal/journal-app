import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {


    const dispatch = useDispatch();



    const [ formValues, handleImputchange, reset ] = useForm({
        name: 'Luis',
        email: 'montalgex18@gmail.com',
        password:'123456',
        password2:'123456'
    });

    const {email, password, name, password2 } = formValues;


    
    const handleRegister = (e) =>{
        e.preventDefault();
        if( isFormValid() ){
            console.log('Formulario Valido')
        }
    }

    const isFormValid = () => {

        
        
        if( name.trim().length === 0){
            dispatch( setError('Nombre es requerido') )
            return false;
        }else if( !validator.isEmail( email )){
            dispatch( setError('Email es invalido') )
            return false;
        }else if( password !== password2 || password.length < 5 ){
            dispatch( setError('Password deberia de tener minimo 6 letras'))
            return false
        }


        dispatch( removeError() )
        return true;
    }



    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>

                <div className="auth__alert-error">
                    Rellene los datos!
                </div>


                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleImputchange }
                    value={ name }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleImputchange }
                    value={ email }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    onChange={ handleImputchange }
                    value={ password }
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    onChange={ handleImputchange }
                    value={ password2 }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
