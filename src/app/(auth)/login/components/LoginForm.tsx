import { Button } from '@/components/ui/Button/button';
import { Input } from '@/components/ui/Input/input';
import React from 'react';

const LoginForm = () => {
    return (
        <form>
            <h6 className='text-3xl uppercase font-bold my-10 text-center'>Login</h6>
            <div className='flex flex-col gap-5'>
                <div className='space-y-3'>
                    <Input className='bg-[#39406D] py-4 rounded-md' type='text' placeholder='Username or Email Address' />
                    <Input className='bg-[#39406D] py-4 rounded-md' type='password' placeholder='Password' />
                </div>
                <div className='w-full flex justify-between font-medium'>
                    <div className='flex items-center gap-2'>
                        <input className='h-4 w-4' type="checkbox" name="rememberme" id="rememberme" />
                        <label htmlFor="rememberme">Remember Me</label>
                    </div>
                    <span className='text-end underline cursor-pointer'>Forgot Password?</span>
                </div>
                <Button className='py-7 text-xl font-extrabold' variant={"secondary"}>Login</Button>
            </div>
        </form>
    );
};

export default LoginForm;