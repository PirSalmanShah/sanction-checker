import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form";

const Search = () => {

const [first, setFirst] = useState([])
  

  const requestData = async (data) => {
    const payload = {
    queries: {
      q1: {
        "schema": "Person",
        "properties": {
          "name": [data.name],
          "birthDate": [data.birthDate],
          "nationality": [data.country],
        }
      }
    }
  };
  console.log(payload)
    let response = await fetch("http://localhost:3000/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    let b = await response.json();
    setFirst(b.responses.q1.results)
    console.log(first)
  }



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {console.log(data.country); requestData(data)};
  return (
    
    <div className='w-full text-white py-3'>
      
      <div className='w-[90%] mx-auto'>
        {/* Heading */}
        <div className='heading flex flex-col justify-center items-center gap-1.5'>
          <h1 className='text-5xl font-black text-center'>Sanction Check</h1>
          <h2 className='text-3xl text-neutral-500 text-center'>Global sanctions screening and compliance verification</h2>
        </div>
        {/* Sreaching Form */}
        <div className='bg-transparent flex justify-center py-4'>
          <form onSubmit={handleSubmit(onSubmit)} className='bg-white/5 backdrop-blur-md border my-1.5 border-white/5 rounded-lg p-6 shadow-lg flex flex-col  gap-2.5  w-[70%]'>
            <input {...register("name")} type="text" placeholder='Enter Name' className='p-2.5 bg-transparent appearance-none rounded-full border-1 border-netural w-full outline-none transition-all duration-300 focus:shadow-2xl focus:border-indigo-800 focus:shadow-indigo-800' />
            <div className='flex justify-between gap-2'>
              <input {...register("country")} type="text" placeholder='Enter Country' className='p-2.5 bg-transparent appearance-none rounded-full border-1 border-netural  outline-none transition-all duration-300 focus:shadow-2xl focus:border-indigo-800 focus:shadow-indigo-800 w-2/5' />
              <button type='submit' className=' w-14 flex justify-center items-center bg-transparent appearance-none rounded-full border-1 border-netural  outline-none transition-all duration-300 hover:shadow-lg hover:border-indigo-800 hover:shadow-indigo-800'>
                <img src="search.svg" alt="" />
              </button>
              <input {...register("birthDate")} type="text" placeholder='Enter BirthDay' className='p-2.5 bg-transparent appearance-none rounded-full border-1 border-netural  outline-none transition-all duration-300 focus:shadow-2xl focus:border-indigo-800 focus:shadow-indigo-800 w-2/5' />
            </div>
          </form>
        </div>
        {/* data section */}
        <div className='results my-3'>
          <div className="cards w-full bg-transparent">
            
            {first?.map((items,index)=>{
              return <div key={items.id} className="card bg-white/5 backdrop-blur-md border my-1.5 border-white/5 rounded-lg p-6 shadow-lg">
              {/* Starting */}
              <h3 className="text-xl font-semibold text-white">{items.caption}</h3>
              <h4 className="text-xs text-red-200 font-black bg-red-600 rounded-2xl w-fit p-0.5">{items.schema}</h4>
              <div className=' flex justify-between'>
                <h4 className="text-lg text-white/90">Created at: {items.first_seen}</h4>
              <h4 className="text-lg text-white/90">Data last updated: {items.last_change}</h4>
              </div>
              <div className=' flex justify-between'>
                <h4 className="text-lg text-white/90">Birth day: {items.properties.birthDate?.[0]??"N/A"}</h4>
              <h4 className="text-lg text-white/90">Country: {items.properties.country?.[0]??"N/A"}</h4>
              </div>
              <div className='w-full mx-auto border-1 rounded-full border-white/10 my-3'></div>
              <div className='flex gap-1.5'>
              {items.properties.topics?.map((e,i)=>{

              return <h4 key={i} className="text-xs text-red-200 font-black bg-red-600 rounded-2xl w-fit p-0.5">{e}</h4>
              })}
              </div>

              <div className='flex gap-1.5 flex-wrap items-center'>
                DataSets:
              {items.datasets?.map((e,i)=>{

              return <h4 key={i} className="text-xs text-white/50 font-black  rounded-2xl w-fit p-0.5">{e}</h4>
              })}
              </div>

              {/* Ending */}
            </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
