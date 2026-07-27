import React from 'react'
import femaleVideo from "../assets/videos/female-ai.mp4"
import maleVideo from "../assets/videos/male-ai.mp4"

function Step2Interview({interviewData, onFinish}) {
  const {interviewId, questions, username} = interviewData


  return (
    <div className='min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-100 flex items-center justify-center p-4 sm:p-6'>
      <div className='w-full max-w-350 min-h-[80vh] bg-white rounded-3xl shadow-2xl border bordeer-gary-200 flex flex-col lg:flex-row overflow-hidden'>

        {/* Video section */}
        <div className='w-full lg:w-[35%] bg-white flex flex-col items-center p-6 spacec-y-6 border-r border-gray-200'>

          <div className='w-full max-w-md rounded-2xl overflow-hidden shadow-xl'>
            <video
              src={femaleVideo}
              className='w-full max-w-md rounded-2xl overflow-hidden shadow-xl'
            />
          </div>

          {/* subtitle pending */}

          {/* timer Area */}
          <div className='w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-md p-6 space-y-5'>
            <div className='fles justify-between items-center'>
              <span className='text-sm text-gary-500'>
                Interview Status
              </span>
              <span className='text-sm font-semibold text-green-600'>
                AI Speaking
              </span>
            </div>

            <div className='h-px bg-gray-200'></div>

            <div className='flex justify-center'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step2Interview