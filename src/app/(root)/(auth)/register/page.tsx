import React from 'react';
import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
    return (
        <div className='wrapper min-h-[90vh] flex items-center justify-center'>
            <div className='bg-seconderyCol max-w-xl w-full px-3 md:px-12 py-12 my-12 rounded-md'>
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;