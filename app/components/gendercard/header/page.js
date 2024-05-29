import Image from 'next/image'
import React from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <div>
        {/* header section starts */}
        <div className='flex  items-center justify-center mt-5'>
           <img src={"https://yt3.googleusercontent.com/wgHXb0ycVHaZO8GgyhsFaUKqgVHU2BZ-_VEKsioCPC08pExojBx6Wv_MCXFYSB16OYg74DJR1Q=s900-c-k-c0x00ffffff-no-rj"} width={100} height={100} className='w-14 h-14 rounded-full'/>
            

        </div>
        {/* header section ends */}



    </div>
  )
}

export default Header