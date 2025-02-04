
import {   Users, LogOut,  School,Moon,LayoutGrid, ClipboardList, ChevronRight, Sun } from 'lucide-react';

import { NavLink,Link } from 'react-router-dom';
const links = [
  {pageName:'Dashboard',pageLink:'/',icon : <LayoutGrid size={16}/>},
  {pageName:'Absence Mangers',pageLink:'/absenceManagers',icon : <Users size={16}/>},
  {pageName:'Teachers',pageLink:'/teachers',icon : <Users size={16}/>},
  {pageName:'Students',pageLink:'/students',icon : <Users size={16}/>},
  {pageName:'Filieres',pageLink:'/filieres',icon : <School size={16}/>},
  {pageName:'Groups',pageLink:'/groups',icon : <School size={16}/>},
]

export default function SideBar({isOpen,setIsOpen,darkMode,setDarkMode}){
  // const path = window.location.pathname
 

  
  
    return (
        <div className={` bg-gray-50 shadow-lg p-4 fixed z-50 h-svh duration-300 ${isOpen ? 'w-56' : 'w-fit'} dark:bg-gray-900`}>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6 pt-1 pb-4 border-b text-gray-700 dark:text-gray-50">
          <ClipboardList size={24}/>
           {isOpen && <h2 className="text-xl font-bold ">AttendWise</h2>}
        </div>
        <button 
          className={`absolute top-4  -right-4 bg-purple-100 px-1 rounded-xl border-2 border-purple-300 text-purple-700 `} 
          onClick={()=>setIsOpen(!isOpen)}
        > 
          <ChevronRight size={20} className={`duration-300 ${isOpen && 'rotate-180'}`}/>
        </button>
        {/* Navigation Menu */}
        <nav className="flex flex-col  justify-between gap-2 ">
        <div className='flex flex-col  gap-2'>
        {
          links.map(link=>
            <NavLink to={link.pageLink} key={link.pageName} className={`flex text-sm  items-center gap-3 px-2 py-2 rounded hover:bg-purple-50 text-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 font-semibold  ${({isActive}) =>isActive ? 'bg-purple-300' : ' bg-transparent'}`}>
            {link.icon}
            {isOpen && <span>{link.pageName}</span>}
          </NavLink>
          )
        }
        </div>
        
          <div className="mt-8 border-t pt-4 space-y-1" >
            <button  className="flex w-full text-sm items-center gap-3 p-2 rounded hover:bg-purple-50 text-gray-700 dark:text-gray-100 dark:hover:bg-slate-600 font-semibold duration-300 " onClick={()=>setDarkMode(darkMode === 'light' ? 'dark': 'light')}>
              {
                !darkMode ? <Moon size={16} />
                :<Sun size={16}/>
              }
             {isOpen && <span>{darkMode ? 'Light' : 'Dark'} Mode</span>}
            </button>
            
            
            <Link href="#" className="flex text-sm items-center gap-3 p-2 rounded hover:bg-red-50  font-semibold ">
              <LogOut size={16} color='#ef4444'/>
              {isOpen && <span className='text-red-500'>Logo out</span>}
            </Link>
          </div>
        </nav>
      </div>
    )
}