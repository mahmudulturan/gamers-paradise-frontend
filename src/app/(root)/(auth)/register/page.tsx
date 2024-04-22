import React from 'react';
import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
    return (
        <div className='wrapper min-h-[90vh] flex items-center justify-center'>
            <div className='min-h-[70vh] bg-seconderyCol max-w-xl w-full px-12 py-20 rounded-md'>
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;