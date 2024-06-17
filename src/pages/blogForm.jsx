import React,  {useEffect} from 'react'
import { useForm, Controller } from 'react-hook-form';
import Input from '../components/input';
import Button from '../components/button';
import MyEditor from '../components/quill';
import authService from '../appwrite/auth';


function BlogForm({blog}) {

  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch,control } = useForm();

  async function onSubmit(data) {
    console.log(data);
  }




  return (
    <div className='text-center w-7/8 md:w-5/6 lg:w-3/4 mx-auto mt-32 p-8 bg-gray-200 rounded-xl shadow-md'>
    <h1 className='font-bold text-2xl p-4 my-4'>Blog Form</h1>
    <form action="" onSubmit={handleSubmit(onSubmit)}>

      <Controller
        name="title"
        control={control}
        rules={{
          required: { value: true, message: "input is required" },
          minLength: { value: 4, message: "at least 4 chars" }
        }}
        defaultValue={blog?.title}
        render={({ field }) => (
          <Input {...field} label={"title:"} type={"text"} placeHolder={"title"}
          id={"title"} errors={errors.title}/>
        )}
        />

    <Controller
            name="thumbnail"
            control={control}
            rules={{
              required: { value: true, message: "input is required" },
            }}
            defaultValue={blog?.thumbnail}
            render={({ field: { ref, ...field } }) => (
              <Input {...field} label={"thumbnail:"} type={"file"}
              onChange={(e)=>{setValue('thumbnail', e.target.files[0]) }}
              ref={(e) => {
                // Connect the input ref
                ref(e);
                field.ref(e);
              }}
              value={null}
              id={"thumbnail"} errors={errors.thumbnail}/>
      
            )}
            />

    <Controller
            name="content"
            control={control}
            rules={{
              required: { value: true, message: "input is required" },
            }}
            defaultValue={blog?.content}
            render={({ field }) => (
              <MyEditor {...field} label={"content:"} 
              id={"content"} errors={errors.content}/>
            )}
            />
    <Button name={"submit"} onClick={()=>{}}/>
    </form>
    </div>
  )
}

export default BlogForm





