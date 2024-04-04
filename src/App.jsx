import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import Home from './Home.jsx';
import Tech from './Tech.jsx';
import Project from './Project.jsx';
import Education from './Education.jsx';
import Contact from './Contact.jsx';

function App() {

  return (
    <>
      <div className=' box-border   w-screen h-screen bg-slate-950 flex flex-col' >

        <header className='text-white text-[2.5rem] h-[10%] p-3'>Welcome!</header>
        <BrowserRouter>
          <div className='flex w-screen h-[90%] '>
            <main className='w-[80%]
              bg-white' >
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/techstack' element={<Tech />} />
                <Route path='/projects' element={<Project/>}/>
                <Route path='/education' element={<Education/>}/>
                <Route path='/contact' element={<Contact/>}/>
              </Routes>
            </main>
            <aside className='w-[20%] bg-slate-500 flex flex-col items-center justify-center gap-[5%] text-xl font-semibold'>
              <Link />
            </aside>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

function Link() {
  const navigate=useNavigate();
  return (
    <>
      <button onClick={() => navigate('/')} className=' text-white  rounded-[30px] hover:bg-stone-600  
         cursor-pointer p-2' >Home</button>
      <button onClick={() => navigate('/techstack')} className=' text-white rounded-[30px]  p-2 hover:bg-stone-600 
         cursor-pointer'>Tech Stack</button>
      <button onClick={()=>navigate('/projects')} className='text-white rounded-[30px]  p-2 hover:bg-stone-600  
         cursor-pointer'>Projects</button>
      <button onClick={()=>navigate('/education')} className='text-white rounded-[30px]  p-2 hover:bg-stone-600  
         cursor-pointer'>Education</button>
      <button onClick={()=>navigate('/contact')} className='text-white rounded-[30px] p-2 hover:bg-stone-600  
         cursor-pointer'>Contact</button>
    </>

  )
}
export default App
