import React, { useState } from 'react';
import {useRouter} from 'next/router';

const Login = () => {
    const router = useRouter();

    const [ pseudo, setPseudo ] = useState('');

    const login = (e) => {
        e.preventDefault();

        if(pseudo) {
            fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                body: JSON.stringify({ pseudo: pseudo }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then( res => res.json() )
                .then( data => {
                    if(!data.error) {
                        router.push('/');
                    }

                    alert(data.error);
                })

                .catch( error => console.log(error) );
        }
    };

    return(
        <div className={'form login-form'}>
            <form action='' method='POST' onSubmit={ login }>
                <input type='text' placeholder='Pseudo' onChange={ (e) => setPseudo(e.target.value) } />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;