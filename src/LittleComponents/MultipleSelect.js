import { ChevronDown, X } from "lucide-react"
import { useState } from "react"
import { users } from "../Users"

export default function MultipleSelect ({defaultValues}){
  const [focusing,setFocusing] = useState(false)
  const [values,setValues] = useState(defaultValues || [])
  const teachers = users.filter(users=> users.role === 'teacher')

  const handleChange=(teacher)=>{
    if (values.find(v => v === teacher)) {
      setValues(prev => prev.filter(v=> v !== teacher))
      return false
    }
    setValues(prev => [...prev,teacher])
  }

  const removeItem = (item,e)=>{
    e.stopPropagation();
    setValues(prev => prev.filter(v=> v !== item))
    
  }
  
  return (
    <>
      <div className="relative ">
      <div className={`bg-gray-50 border  dark:bg-gray-800 rounded-lg p-2.5 flex items-center justify-between cursor-pointer ${focusing ? 'border-purple-300 dark:border-purple-500' : 'border-gray-300 dark:border-gray-500 '}`} onClick={()=>setFocusing(!focusing)}>
        { !values.length ? 
          <span className="text-gray-400 text-sm ">Select Teachers</span>
          :
          <div className="flex gap-2 items-center flex-wrap">
             {values.map(v=>
              <span key={v} className="text-xs  px-2 py-1 borber-2 hover:bg-purple-100 border-purple-300 bg-purple-50 text-purple-700  dark:bg-purple-700 dark:text-purple-50 rounded-xl flex items-center gap-2 justify-between ">
              {v} 
              <button type="button" onClick={(e)=>removeItem(v,e)}><X size={14} className=" text-purple-700 dark:text-purple-50"/></button>
              </span>
             )}
            
          </div>
        }
        <div className="flex items-center gap-1">
            {
              values.length ? 
                <button type="button" onClick={()=>setValues([])}><X size={14} className=" text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-50"/></button> 
              : null
            }
            <button type="button" onClick={()=>setFocusing(!focusing)} >
              <ChevronDown size={14} className={`text-gray-400  ${focusing && 'rotate-180 text-purple-500'}`}/>
            </button>
 
        </div>
        
      </div>
      { focusing &&
        <div className="mt-2 p-3 border border-gray-300 flex items-center flex-wrap gap-3 bg-gray-50 dark:border-gray-500 dark:bg-gray-800 rounded-lg ">
          {
            teachers.map(
              teacher => <span key={teacher.id} className={`px-3  min-w-20 rounded-md py-1 dark:text-gray-50  cursor-pointer ${values.includes(teacher.name) ? 'dark:bg-purple-600 dark:hover:bg-purple-500' : 'dark:bg-gray-500 dark:hover:bg-gray-600'}`} onClick={()=>handleChange(teacher.name)}>{teacher.name}</span>
            
            )
          }
        </div>
      }

      </div>
    </>
  )
}