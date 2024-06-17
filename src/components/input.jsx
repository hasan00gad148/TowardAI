import React from 'react'

function Input({label,name,type, placeHolder,value,onChange,errors, ref,id=null}) {
  return(

    <>
    <div className='p-4 flex justify-center gap-8 rounded-md '>
    {label? <label className='p-2  text-lg' htmlFor={id}>{label}</label>:""}
    <input id={id} name={name} ref={ref} placeholder={placeHolder} className='p-2 outline-none rounded-md border-2 border-green-700
     bg-slate-100' type={type} value={value} onChange={onChange}  /> 
    </div>
    {errors? <span className='text-red-600 font-semibold o-2'>{errors.massege}</span>:null}
    </>
  )
}

export default Input