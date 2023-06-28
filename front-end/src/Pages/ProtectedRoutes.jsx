import React from 'react';
import ReactDOM from 'react-dom';
import { Navigate, Outlet } from 'react-router-dom';
import QuizPage from './quizPage';

const ProtectedRoutes = (props) => {
    const isAuth=props.gameOver;
    return ( 
        <>
            {isAuth ? <Outlet/> : <Navigate to='/'/>}
        </>
     );
}
 
export default ProtectedRoutes;