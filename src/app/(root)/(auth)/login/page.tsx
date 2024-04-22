
import React from 'react';
import LoginForm from './components/LoginForm';

const page = () => {
    return (
        <div className='wrapper min-h-[90vh] flex items-center justify-center'>
            <div className='bg-seconderyCol max-w-xl w-full px-3 md:px-12 py-12 my-12 rounded-md'>
                <LoginForm />
            </div>
        </div>
    );
};

export default page;