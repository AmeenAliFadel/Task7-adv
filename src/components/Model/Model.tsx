import React from 'react';
import google from '../../assets/google.svg'
import Image from 'next/image';
interface ModalProps {
    type: 'login' | 'signup';
    onClose: () => void;
    onSwitch: (type: 'login' | 'signup') => void;
}

export default function Modal({ type, onClose, onSwitch }: ModalProps) {
    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={onClose} 
        >
            <div
                className="bg-white rounded-3xl py-[40px] px-[59px] w-[90%] max-w-md relative"
                onClick={(e) => e.stopPropagation()} 
            >

                {type === 'signup' ? (
                    <>
                        <div className=' flex justify-between items-center mb-5'>
                            <h2 className="text-[32px] font-bold text-black">Create Account</h2>
                            <button
                                onClick={onClose}
                                className=" text-gray-500 hover:text-black"
                            >
                                ✕
                            </button>
                        </div>
                        <label className=' text-lg text-black font-semibold mb-2.5 ' > Name and Surname</label>
                        <input type="text" placeholder="Enter your name and surname" className="border border-[#33333333] py-3.5 px-6 w-full mb-5 rounded-[8px]" />

                        <label className=' text-lg text-black font-semibold mb-2.5 ' > Email Address</label>
                        <input type="email" placeholder="Enter your email address" className="border border-[#33333333] py-3.5 px-6 w-full mb-5 rounded-[8px]" />

                        <label className=' text-lg text-black font-semibold mb-2.5 ' > Password</label>
                        <input type="password" placeholder="Enter your password" className="border border-[#33333333] py-3.5 px-6 w-full mb-5 rounded-[8px]" />

                        <label className="flex items-end gap-2 text-sm text-gray-600 mb-5">
                            <input type="checkbox" className="accent-[#FA8B02]" />
                            I agree with <a className="text-[#FA8B02]">Terms</a> and{' '}
                            <a className="text-[#FA8B02]">Privacy</a>
                        </label>
                        <button className="bg-[#FA8B02] text-white py-2.5 px-6 rounded-[50px] w-full mb-1.5 text-xl font-semibold">Sign Up</button>

                        <div className="text-center text-gray-500 text-base mb-1.5">or</div>
                        <button className="flex items-center justify-center gap-2 border border-[#33333333] rounded-[50px] py-2.5 px-6 w-full mb-5 hover:bg-gray-50">
                            <Image src={google} alt="Google" className="w-6 h-6" />
                            Sign Up with Google
                        </button>
                        <p className="text-base font-normal text-center">
                            Already have an account?{' '}
                            <span
                                className="text-[#FA8B02] cursor-pointer"
                                onClick={() => onSwitch('login')}
                            >
                                Log In
                            </span>
                        </p>
                    </>
                ) : (
                    <>
                        <div className=' flex justify-between items-center mb-5'>
                            <h2 className="text-[32px] font-bold text-black">Login</h2>
                            <button
                                onClick={onClose}
                                className=" text-gray-500 hover:text-black"
                            >
                                ✕
                            </button>
                        </div>
                        <label className=' text-lg text-black font-semibold mb-2.5 ' > Email Address</label>
                        <input type="email" placeholder="Enter your email address" className="border border-[#33333333] py-3.5 px-6 w-full mb-5 rounded-[8px]" />


                        <label className=' text-lg text-black font-semibold mb-2.5 ' > Password</label>
                        <input type="password" placeholder="Enter your password" className="border border-[#33333333] py-3.5 px-6 w-full mb-5 rounded-[8px]" />

                        <p className=' text-end text-[#33333399] text-sm font-normal mb-6'>Forgot your password?</p>

                        <button className="bg-[#FA8B02] text-white py-2.5 px-6 rounded-[50px] w-full mb-1.5 text-xl font-semibold">Sign In</button>

                        <div className="text-center text-gray-500 text-base mb-1.5">or</div>
                        <button className="flex items-center justify-center gap-2 border border-[#33333333] rounded-[50px] py-2.5 px-6 w-full mb-5 hover:bg-gray-50">
                            <Image src={google} alt="Google" className="w-6 h-6" />
                            Sign Up with Google
                        </button>

                        <p className="text-sm text-center">
                            Don’t have an account?
                            <span className="text-[#FA8B02] cursor-pointer"
                                onClick={() => onSwitch('signup')}>Sign up
                            </span>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
