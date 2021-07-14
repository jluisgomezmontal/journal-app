import React, { useEffect, useState } from 'react';
import { firebase} from '../firebase/firebaseConfig';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {


    const dispatch = useDispatch();
    
    const [checking, setChecking] = useState( true );

    const [isLoggin, setIsLoggin] = useState( false );
    
    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) =>{

            if ( user?.uid) {
                dispatch( login( user.uid, user.displayName ));
                setIsLoggin( true )
            }else{
                setIsLoggin( false )
            }
            
            setChecking( false );

            
        });
        
    }, [ dispatch, setChecking, setIsLoggin ]);

    if ( checking ) {
        return(
            <h1>Esperando!!!</h1>
        )
    }



    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
