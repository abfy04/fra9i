import { Link } from "react-router-dom"
import { FileText,GraduationCap,Plus, School, User } from "lucide-react"
import { useState } from "react"
export default function QuickActions(){
    const [activeMenu,setActiveMenu] = useState(false)
    return (
        <>
        <div className='flex gap-2 items-center justify-end'>
          <div className="relative max-w-40">
          <button className={`bg-gray-700 px-3 py-2 text-gray-50   hover:bg-gray-600 text-sm flex items-center gap-2  font-medium max-w-56 ${activeMenu ? 'rounded-t-lg':'rounded-lg'} dark:bg-gray-50 dark:hover:bg-gray-200 dark:text-slate-700`} onClick={()=>setActiveMenu(!activeMenu)}>
            <Plus size={18} />
            <span >Add new </span>
          </button>
          {activeMenu && (
          <div className="absolute  z-50 min-w-full  rounded-b-lg dark:bg-gray-100 bg-gray-600 shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="p-2 dark:text-gray-700 text-gray-50">
                <Link to='/addUser' className="dark:hover:bg-gray-200 hover:bg-gray-700 rounded-sm flex gap-2 items-center text-sm p-2 "><User size={16}/> User</Link>
                <Link to='/addFiliere' className="dark:hover:bg-gray-200 hover:bg-gray-700 rounded-sm flex gap-2 text-sm items-center p-2 "><School size={16}/>Filiere</Link>
                <Link to='/addGroup' className="dark:hover:bg-gray-200 hover:bg-gray-700 rounded-sm flex gap-2 text-sm items-center p-2 "><School size={16}/>Group</Link>
                <Link to='/addStudent' className="dark:hover:bg-gray-200 hover:bg-gray-700 rounded-sm flex gap-2 text-sm items-center p-2 "><GraduationCap size={16}/>Student</Link>
               
            </div>
          </div>
        )}

          </div>
          
          <Link to={'/export'} className="bg-gray-700 rounded-md  px-3 py-2 text-gray-50 hover:bg-gray-600 text-sm flex items-center gap-2 mr-2 font-medium max-w-56 dark:bg-gray-50 dark:hover:bg-gray-200 dark:text-slate-700">
            <FileText size={18} />
            <span>Export Data</span>
          </Link>

          </div>
          
        </>
    )
}

