import Image from 'next/image'
import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'

const BreakCard = () => {
  return (
    <div>
        {/* break card section starts */}
        <div className='lg:w-[400px] w-full p-2'>
        <div className='p-2 bg-gray-100'>
            {/* image starts */}
            <div>
                <Image src={"/Images/breakcard image.png"}height={400}width={400} />
                

            </div>
            {/* image ends */}
            </div>
    
            <div>
                <p className='lg:font-bold lg:text-2xl md:font-bold md:text-lg text-sm font-bold my-3 '>Great news! We can help you to get to the next level</p>
                <p className='w-full my-3 text-gray-800'>Our challenge is backed by thousand of research hours and content carefully crafted for your needs and skills!</p>
                </div>
                 {/* button starts */}
            <div>
            <button className='mb-3 mt-5 lg:[50px] bg-indigo-600 text-white p-4 w-full rounded-lg md:text-medium  '>CONTINUE</button>
            </div>
            {/* button ends */}
            
            </div>
            {/* break card section ends */}


        




    </div>
  )
}

export default BreakCard