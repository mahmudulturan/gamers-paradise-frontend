import { Button } from '@/components/ui/Button/button';
import { Input } from '@/components/ui/Input/input';
import Link from 'next/link';
import React from 'react';
import SocialLogin from '../../components/SocialLogin';

const RegisterForm = () => {
    return (
        <div>
            <h6 className='text-3xl uppercase font-bold mb-10 text-center'>Register Now</h6>
            <form className='flex flex-col gap-5'>
                <div className='space-y-3'>
                    <Input className='bg-[#39406D] py-4 rounded-md' type='text' placeholder='Your Name' />
                    <Input className='bg-[#39406D] py-4 rounded-md' type='email' placeholder='Email Address' />
                    <Input className='bg-[#39406D] py-4 rounded-md' type='password' placeholder='Password' />
                </div>
                <div className='w-full flex justify-between font-medium'>
                    <div className='flex items-center gap-2'>
                        <input className='h-4 w-4' type="checkbox" name="rememberme" id="rememberme" />
                        <label htmlFor="rememberme">Remember Me</label>
                    </div>
                    <span className='text-end underline cursor-pointer'>Forgot Password?</span>
                </div>
                <Button className='py-7 text-xl font-extrabold' variant={"secondary"}>Register</Button>
            </form>
            <div className='flex flex-col items-center justify-center gap-2'>
                <p className='text-center my-4'>
                    Already have an account? <Link className='text-primaryCol font-medium underline' href={'/login'}>Login Here</Link>
                </p>
                <span className="relative flex">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-primaryCol opacity-75"></span>
                    <span className="relative inline-flex rounded-full bg-primaryCol px-2.5 py-2 uppercase">Or</span>
                </span>
                <SocialLogin />
            </div>
        </div>
    );
};

export default RegisterForm;