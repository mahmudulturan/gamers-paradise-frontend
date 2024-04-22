
import React from 'react';
import LoginForm from './components/LoginForm';

const page = () => {
    return (
        <div className='wrapper min-h-screen flex items-center justify-center'>
            <div className='min-h-[70vh] bg-seconderyCol max-w-xl w-full px-12 py-20 rounded-md'>
                <LoginForm />
            </div>
        </div>
    );
};

export default page;