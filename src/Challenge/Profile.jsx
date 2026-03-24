import React from 'react'
import ProfileImage from '/src/Photos/charan.jpg'
import Insta from '/src/Photos/ins.png'
import linkd from '/src/Photos/linkedin.png'
import git from '/src/Photos/git.png'
import pre from '/src/Photos/president.png'

function Profile() {
  return (
    <>
    <div className='flex bg-black justify-center w-full h-screen pt-20'>
        <div className='flex'>
            {/* vertical line */}
            <div className='w-2 h-30 bg-white gap-2 mt-2'></div>
            <h1 className='text-white p-10 text-2xl font-bold leading-tight'>Profile Card <br/>UI Design</h1>
        </div>

        <div className='w-80 rounded-4xl'>

            <div className='bg-amber-300 flex justify-center items-center w-full h-50'> 
                <img className="w-32 h-32 rounded-full object-cover " src={ProfileImage} alt='profile image'/>
                
            </div>

            <div className='w-full h-100 bg-amber-50'>
                <h1 className='text-center text-2xl'>Aero</h1>
                <p className='text-center text-2xl'>Content Creator</p>

                <div className='flex gap-x-3 mt-4 ml-4'>
                    <img className='w-15 flrx gap-x-5 rounded-2xl' src={Insta} />
                    <img className='w-15 flrx gap-x-5' src={linkd}></img>
                    <img className='w-15 flrx gap-x-5' src={git}></img>
                    <img className='w-15 flrx gap-x-5 rounded-2xl' src={pre}></img>
                </div>

                <div className='flex gap-4 justify-center mt-10'>
                    <button className='bg-red-500 w-20 rounded-xl'>Subscribe</button>
                    <button className='bg-red-500 w-20 rounded-xl'>Message</button>
                </div>

                <div className='flex mt-10 justify-center gap-10' >
                    <div>
                        <h1>❤️ 60.4k</h1>
                    </div>

                    <div>
                        <h1>💬20k</h1>
                    </div>

                    <div>
                        <h1>🚕12.5k</h1>
                    </div>
                </div>

              

                 
            </div>
        </div>
        
    </div>

    </>
  )
}

export default  Profile