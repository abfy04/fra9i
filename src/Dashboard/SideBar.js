
import {   Users,   School,LayoutGrid, ClipboardList, ChevronRight, GraduationCap, PencilRuler, CalendarFold, } from 'lucide-react';


import { Link, NavLink,useLocation } from 'react-router-dom';

const links = [
  {pageName:'Dashboard',pageLink:'/'},
  {pageName:'Absence Managers',pageLink:'/absenceManagers'},
  {pageName:'Teachers',pageLink:'/teachers'},
  {pageName:'Students',pageLink:'/students'},
  {pageName:'Filieres',pageLink:'/filieres'},
  {pageName:'Groups',pageLink:'/groups'},
  {pageName:'Schedule',pageLink:'/schedule'},
]

export default function SideBar({isOpen,setIsOpen}){
  const location = useLocation()
  const path = location.pathname
  const size = 20;

 
 
  
  
    return (
        <div className={` bg-gray-50 shadow-lg p-4 fixed z-50 h-svh duration-300 ${isOpen ? 'w-56' : 'w-fit'} dark:bg-gray-900`}>
        {/* Logo */}
        <Link to={'/'} className="flex items-center gap-3 mb-6 pl-2 pt-1 pb-4 border-b text-gray-700 dark:text-gray-50">
          <ClipboardList size={24}/>
           {isOpen && <h2 className="text-xl font-bold ">AttendWise</h2>}
        </Link>
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
            <NavLink to={link.pageLink} key={link.pageName} className={`flex text-sm  items-center gap-3 px-2 py-2 rounded hover:bg-purple-200 text-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 font-semibold  ${ path === link.pageLink ? 'bg-purple-300 dark:hover:bg-purple-400' : ' bg-transparent'}`}>
            {link.pageName === 'Dashboard' && <LayoutGrid size={size} className={path === link.pageLink && 'text-purple-700  '}/>}
            {link.pageName === 'Absence Managers' && <Users size={size} className={path === link.pageLink && 'text-purple-700 '}/>}
            {link.pageName === 'Teachers' && <PencilRuler size={size} className={path === link.pageLink && 'text-purple-700 '}/>}
            {link.pageName === 'Students' && <GraduationCap size={size} className={path === link.pageLink && 'text-purple-700 '}/>}
            {(link.pageName === 'Groups' || link.pageName === 'Filieres'  )&& <School size={size} className={path === link.pageLink && 'text-purple-700'}/>}
            {(link.pageName === 'Schedule' )&& <CalendarFold size={size} className={path === link.pageLink && 'text-purple-700'}/>}
           
            {isOpen && <span className={`${path === link.pageLink && 'text-purple-700'}`}>{link.pageName}</span>}
          </NavLink>
          )
        }
        </div>
        
        </nav>
      </div>
    )
}