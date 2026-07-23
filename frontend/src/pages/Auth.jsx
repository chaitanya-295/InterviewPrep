import React from 'react'
import { FaRobot } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";

function Auth() {
  return (
    <div className='w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20'>
        <div className='w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-gray-200'>
            <div className='flex items-center justify-center gap-3 mb-6'>
                <div className='bg-black text-white p-1.5 rounded-lg'>
                    <FaRobot size={20} />
                </div>
                <h2 className='font-semibold text-lg'>InterviewPrep.AI</h2>
            </div>
            <h1 className='text-1xl md:text-2xl font-semibold text-center leading-snug mb-4'>
                Continue with
                <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-3'>
                    <HiOutlineSparkles size={20} />
                    AI Smart Interview
                </span>
            </h1>
            <p className='text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8'>
                Sing in to startt AI-powered mock interviews, track your progress, and unlock detailed performance insights.
            </p>
        </div>
    </div>
  )
}

export default Auth