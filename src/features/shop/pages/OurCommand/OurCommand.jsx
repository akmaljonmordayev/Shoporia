import React from 'react'
import useGetAll from '../../../../hooks/UseGetAll'

function OurCommand () {
  const { data, isLoading, isError } = useGetAll('/OurCommand', ['ourcommand'])

  if (isLoading) {
    return (
      <div className='w-full h-[70vh] flex items-center justify-center text-xl text-blue-400'>
        Loading...
      </div>
    )
  }

  if (isError) {
    return (
      <div className='w-full h-[70vh] flex items-center justify-center text-xl text-red-500'>
        Failed to load data
      </div>
    )
  }

  return (
    <div className='w-full min-h-screen px-4 md:px-12 py-16 text-blue-900'>
      <h1 className='text-3xl md:text-5xl font-bold text-center mb-12 text-blue-700'>
        Our Command
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data?.map(item => (
          <div
            key={item.id}
            className='bg-white rounded-2xl p-5 shadow-lg border border-blue-200 hover:shadow-xl hover:scale-[1.02] duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-56 object-cover rounded-xl mb-5'
            />

            <h2 className='text-xl font-semibold text-blue-700'>
              {item.name}
            </h2>
            <p className='text-blue-500 text-sm mb-2'>{item.role}</p>

            <p className='text-blue-800 text-sm'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurCommand
