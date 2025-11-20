import React from 'react'
import { useState } from 'react'
import { FaTruck, FaShieldAlt, FaTrash } from 'react-icons/fa'

const CartItem = ({
  title,
  color,
  initialCount,
  delivery,
  guarantee,
  price,
  image
}) => {
  const [count, setCount] = useState(initialCount)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <div className='flex w-full items-center rounded-xl bg-white shadow-sm p-4 gap-4'>
      <div className='w-1/3 min-w-[150px]'>
        <img
          src={image}
          alt={title}
          className='w-full h-auto object-contain rounded-lg'
        />
      </div>

      <div className='flex-1 flex flex-col gap-2'>
        <h2 className='text-lg font-semibold text-gray-800 leading-tight'>
          {title}
        </h2>

        <p className='text-sm text-gray-500'>
          {color} <br /> ×{count}
        </p>

        <div className='flex items-center gap-4'>
          {delivery && (
            <div className='flex items-center gap-1 text-blue-500 text-sm'>
              <FaTruck /> Free Delivery
            </div>
          )}
          {guarantee && (
            <div className='flex items-center gap-1 text-blue-500 text-sm'>
              <FaShieldAlt /> Guaranteed
            </div>
          )}
        </div>

        <div className='flex items-center justify-between'>
          <p className='text-lg font-semibold text-gray-800'>{price}</p>

          <div className='flex items-center gap-3'>
            <button className='text-red-500 text-lg'>
              <FaTrash />
            </button>
            <div className='flex items-center gap-2 border-b border-gray-400 pb-1'>
              <button
                onClick={decreaseCount}
                className='text-gray-600 text-xl px-2'
              >
                −
              </button>
              <span className='text-gray-800 text-sm font-medium'>{count}</span>
              <button
                onClick={increaseCount}
                className='text-gray-600 text-xl px-2'
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
