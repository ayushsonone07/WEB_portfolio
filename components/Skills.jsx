import React from 'react'

const Skills = () => {
  return (
    <div>
        <section className="w-full h-screen	justify-center">
        <h1 className="text-center text-5xl font-bold my-8 text-black">Skills</h1>
        <div className='grid grid-cols-12'>
            <div className='sm:col-span-4 col-span-12 shadow-md rounded-xl bg-slate-100 sm:m-3 px-9'>
                <h1 className='text-center font-bold text-4xl mt-4 text-black my-8'>Languages</h1>
                <div className=''>
                    <p className='text-center font-bold text-black my-4'>C-language</p>
                    <p className='text-center font-bold text-black my-4'>JavaScript</p>
                    <p className='text-center font-bold text-black my-4'>PHP</p>
                    <p className='text-center font-bold text-black my-4'>HTML-5</p>
                    <p className='text-center font-bold text-black my-4'>CSS-3</p>
                </div>
            </div>
            <div className='sm:col-span-4 col-span-12 shadow-md rounded-xl bg-slate-100 sm:m-3 px-9'>
                <h1 className='text-center font-bold text-4xl mt-4 text-black my-8'>Frameworks</h1>
                <div className=''>
                    <p className='text-center font-bold text-black my-4'>Next js</p>
                    <p className='text-center font-bold text-black my-4'>Firebase</p>
                    <p className='text-center font-bold text-black my-4'>CodeIgniter (CI)</p>
                    <p className='text-center font-bold text-black my-4'>Shadcn</p>
                    <p className='text-center font-bold text-black my-4'>Tailwind css</p>
                </div>
            </div>
            <div className='sm:col-span-4 col-span-12 shadow-md rounded-xl bg-slate-100 sm:m-3 px-9'>
                <h1 className='text-center font-bold text-4xl mt-4 text-black my-8'>Tools</h1>
                <div className=''>
                    <p className='text-center font-bold text-black my-4'>Git</p>
                    <p className='text-center font-bold text-black my-4'>Linux</p>
                    <p className='text-center font-bold text-black my-4'>Figma</p>
                </div>
            </div>  
        </div>
        </section>
    </div>
  )
}

export default Skills