import React,  {useEffect} from 'react'
import { useForm, Controller } from 'react-hook-form';
import Input from '../components/input';
import Button from '../components/button';
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import {signin} from "../stores/userStore";


function Signup() {
  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch,control } = useForm();
  const dispatcher = useDispatch();



  async function onSubmit(data) {
    const user = await new authService().signup(data.nameInput, data.emailInput, data.passwordInput, );
    console.log(user);
    dispatcher(signin(user));
  }


  return (
    <div className='text-center w-5/6 md:w-3/4 lg:w-1/2 mx-auto mt-32 p-8 bg-gray-200 rounded-xl shadow-md'>
      <h1 className='font-bold text-xl p-4'>SignUp</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>


        <Controller
          name="nameInput"
          control={control}
          rules={{
            required: { value: true, message: "input is required" },
            minLength: { value: 4, message: "at least 4 chars" }
          }}
          defaultValue=""
          render={({ field }) => (
            <Input {...field} label={"name"} type={"text"} placeHolder={"enter your name"}
             id={"nameInput"} errors={errors.nameInput}/>
          )}
        />
        
        <Controller
          name="emailInput"
          control={control}
          rules={{
            required: { value: true, message: "input is required" },
            minLength: { value: 4, message: "at least 4 chars" }
          }}
          defaultValue=""
          render={({ field }) => (
            <Input {...field} label={"email"} type={"email"} placeHolder={"enter your email"} 
            id={"name"} errors={errors.emailInput}/>
          )}
        />

          <Controller
          name="passwordInput"
          control={control}
          rules={{
            required: { value: true, message: "input is required" },
            minLength: { value: 4, message: "at least 4 chars" }
          }}
          defaultValue=""
          render={({ field }) => (
            <Input {...field} label={"password"} type={"password"} placeHolder={"enter your password"}
             id={"passwordInput"} errors={errors.passwordInput}/>
          )}
        />       

      <Button name={"submit"} />
      </form>
    </div>
  )
}

export default Signup