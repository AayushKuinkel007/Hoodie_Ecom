import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='p-3'>
          <h1 className='text-xl font-bold'>UjjyaloHoodie</h1>
          <div className='flex justify-between items-center mt-2'>
              <div className='flex justify-start gap-2'>
                <h2 className='text-xs flex gap-2 font-semibold'>All
                  <span className='text-gray-400'>20</span>
                </h2>
                <h2 className='text-xs flex gap-2 font-semibold'>Stores
                  <span className='text-gray-400'>4</span>
                </h2>
              </div>
              <div>
                <h2 className='text-xs flex gap-2 font-semibold'>Cart
                  <span className='text-gray-400'>00</span>
                </h2>
              </div>
          </div>
      </div>
    </>
  )
}

export default Navbar