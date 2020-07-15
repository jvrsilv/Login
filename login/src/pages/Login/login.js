import React from 'react';
import Login from '../../components/Login';
import Register from '../../components/Register';
import './styles.css';

const Page = () => {    

    return (
        <>
            <div className="background-user">                
            {/* <Login /> */}
            <Register />              
            </div>
        </>
    );
}

export default Page;