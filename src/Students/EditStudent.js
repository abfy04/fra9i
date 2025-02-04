import { ChevronDown, User } from "lucide-react";
import { useState } from "react";
import { Search,X } from "lucide-react";
import { useParams } from "react-router-dom";
import { students } from "../Users";
export default function EditStudent(){
    const {id} = useParams();
    const student = students.find(student => student.cef === id)
    const groups = [
        {
          id: 1,
          name: "Group A",
        },
        {
          id: 2,
          name: "Group B",
        },
        {
          id: 3,
          name: "Group C",
        },
        {
          id: 4,
          name: "Group D",
        },
        {
          id: 5,
          name: "Group E",
        },
        {
            id: 6,
            name: "Group B",
          },
          {
            id: 7,
            name: "Group C",
          },
          {
            id: 8,
            name: "Group D",
          },
          {
            id: 9,
            name: "Group E",
          },
      ];
    const [isSelectGroup,setIsSelectGroup]= useState(false)
    const [selectedGroup,setSelectedGroup]= useState(groups.find(group=> group.name === student.group));
    const [search,setSearch] = useState('');
    const [isFocus,setIsFocus] = useState(false)
    const handleClick=()=>setSearch('');
   

    const select = (obj)=>{
        setSelectedGroup(obj)
        setIsSelectGroup(false)
      }

    
     
    return (
        <>
        <div className="mb-5 mt-3 flex items-center gap-3 text-gray-700 dark:text-gray-50">
        <User size={20} strokeWidth={3}/>
        <h1 className="text-2xl font-bold ">Edit {student.name} info</h1>
        </div>
        {/* form */}

        
      
          <form className="max-w-sm mx-auto ">
            <div className="mb-3">
              <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Cef </label>
              <input type="number" defaultValue={student.cef} id="cef" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg   focus:border-purple-300 block w-full p-2.5 outline-none dark:bg-gray-800 dark:border-gray-500 dark:text-gray-50  dark:focus:border-purple-500 dark:disabled:bg-gray-600 disabled:cursor-not-allowed" disabled placeholder="Enter student's cef" />
            </div>
            <div className="mb-3">
              <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Full Name </label>
              <input type="text" defaultValue={student.name} id="fullName" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg  focus:border-purple-300 block w-full p-2.5 outline-none dark:bg-gray-800 dark:border-gray-500 dark:text-gray-50  dark:focus:border-purple-500" placeholder="Enter student's full name" />
            </div>
            <div className="mb-3">
              <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Age </label>
              <input type="number" defaultValue={student.age} id="age" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg  focus:border-purple-300 block w-full p-2.5 outline-none dark:bg-gray-800 dark:border-gray-500 dark:text-gray-50  dark:focus:border-purple-500" placeholder="Enter student's age" />
            </div>
            <div className="mb-3">
                <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Gender </label>
                <div className="flex gap-4 ml-2">
                  <div className="flex items-center  gap-1">
                      
                      <input type="radio" name="gender"  value={'Male'} checked={student.gender.toLowerCase() === 'male'}    className="    accent-purple-400 cursor-pointer"  />
                      <label  className=" mb-1 text-sm font-medium text-gray-700 dark:text-gray-50">Male </label>
                  </div>
                  <div className="flex items-center  gap-1">
                      
                      <input type="radio" name="gender" value={'Female'} checked={student.gender.toLowerCase() === 'female'}  className="  accent-purple-400 cursor-pointer"  />
                      <label  className=" mb-1 text-sm font-medium text-gray-700 dark:text-gray-50">Female </label>
                  </div>
                </div>
    
            </div>
            <div className="mb-3">
            <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Group </label>
    <div className="relative">
        <div className={`flex items-center justify-between  bg-gray-50 border  text-gray-700 dark:text-gray-50 dark:bg-gray-800 dark:border-gray-500 text-sm rounded-lg  ${isSelectGroup?'border-purple-300 dark:border-purple-500' :'border-gray-300'} w-full p-2.5`} onClick={()=>setIsSelectGroup(!isSelectGroup)}>
            { selectedGroup.name  ?
                <span className="text-gray-700 dark:text-gray-50 text-sm">{selectedGroup?.name}</span>
                :<span className="text-gray-400 text-sm">select group</span>
                 
            }
            <ChevronDown size={20} className={`duration-300 text-gray-300 ${isSelectGroup && 'rotate-180 text-purple-300'}`}/>
        </div>
        {
            isSelectGroup && 
            <div className="absolute px-3 py-2 border border-gray-300 dark:border-gray-500 rounded-lg bg-gray-50 dark:bg-gray-800 bottom-12 w-full space-y-1">
                <div className={`flex items-center gap-2 justify-between bg-gray-100 dark:bg-gray-800 text-gray-700 py-2 border dark:border-gray-500 rounded-md px-3  dark:text-gray-50 ${isFocus && 'border-gray-700 dark:border-gray-500'} sticky top-0`}>
                    <div className="flex items-center gap-2  ">
                        <Search size={20} className={` ${isFocus ?'text-gray-700 dark:text-gray-50': 'text-gray-400'} bg-transparent`}/>
                        <input 
                            type="text" 
                            className="border-none outline-none  text-sm bg-transparent" 
                            placeholder="search by the libel"
                            onChange={({target})=>setSearch(target.value)}
                            onFocus={()=>setIsFocus(true)}
                            onBlur={()=>setIsFocus(false)}
                            value={search}
                        />

                    </div>
                
                    <X size={20} className={`text-gray-200  ${search.trim() ? 'visible':'invisible'} cursor-pointer hover:text-gray-700 duration-200`} onClick={handleClick}/>


                
                </div>
                <div className=" max-h-40 overflow-y-auto  space-y-1">
                {
                    groups.map (g=>
                    <span className="bg-gray-100 dark:bg-gray-600 dark:text-gray-50 px-2 py-1 rounded-md text-gray-700 block text-sm" onClick={()=>select(g)}>{g.name}</span>
                    )
                }
                </div>
            </div>
            
        }
    </div>
            </div>
            <button type="submit" className="text-gray-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add Student</button>
        </form>

        
        



        </>
      
    )
}