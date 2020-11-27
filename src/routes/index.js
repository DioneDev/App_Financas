//Este index vai controlar a rota do usuario se estiver logado ou não.
import React from 'react';

import AuthRoutes from './auth.routes';
//import AppRoutes from './app.routes';

export default function Routes(){
    return(
        <AuthRoutes />
    );
}