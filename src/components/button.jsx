import React from 'react'

function Button({name, onClick}) {
  return (
    <button onClick={onClick} className='bg-transparent hover:bg-green-500
     text-green-700 font-semibold hover:text-white py-2 px-4  my-6 border
      border-green-500 hover:border-transparent rounded'>
        {name}
      </button>
  )
}

export default Button