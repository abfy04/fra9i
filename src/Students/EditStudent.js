import {  User } from "lucide-react";
import { useState } from "react";
import Select from "../LittleComponents/Select";
import { useParams } from "react-router-dom";
import { students,groups,style,errorsMsgs } from "../Users";
import ErrorMsg from "../LittleComponents/ErrorMsg";


const names = ['cef','name','age']
export default function EditStudent(){
    const {id} = useParams();
    const student = students.find(student => student.cef === id)
   
    
   
   

    
      const [formData,setFormData] = useState(student)
      const [errors,setErrors]= useState({})
 
      const handleChange = (name,value)=>{
         setFormData(prev=> ({...prev,[name]:value}))
         
      }
      const InFocus = (name)=>{
        
         const updetedErros = {...errors}
         delete updetedErros[name]
         setErrors(updetedErros)
      }
      const handleError=()=>{
         const failures= {}
         names.forEach(name => {
            if (!formData[name]) failures[name] = errorsMsgs[name]
            
          });
           
         
         
         return failures
         
      }
      const handleSubmit = (e)=>{
         e.preventDefault()
         const validation = handleError()
     
         
         
         if (Object.keys(validation)){
             setErrors(validation)
             return false
         }
         
         
        
         
         
         
      }

      const config = {
         type : 'group',
         error: errors.group,
         onDelete : InFocus,
         onChange : handleChange,
         defaultValue : student.group
        }
     
    return (
        <>
        <div className="mb-5 mt-3 flex items-center gap-3 text-gray-700 dark:text-gray-50">
        <User size={20} strokeWidth={3}/>
        <h1 className="text-2xl font-bold ">Edit {student.name} info</h1>
        </div>
        {/* form */}

        
      
          <form className="max-w-sm mx-auto " onSubmit={handleSubmit}>
                       {/* personal info */}
          <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-full px-3 pt-4 pb-3 basis-1/3">
               <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">Personal Info</h3>
         
                           {/* cef input */}
                           <div className="flex my-3 mb-0 w-full">
                                <label className={`p-3 text-sm font-medium  rounded-l-md border border-r-0 basis-1/2 ${style.label}  ${style.border} `}>Cef</label>
                                <input 
                                   type="text" 
                                   name="cef" 
                                   value={formData.cef || ''} 
                                   className={`rounded-r-md px-3 border text-sm font-medium  py-2  outline-none placeholder:text-sm ${style.input}    ${errors.cef ? style.errorBorder :style.border} ${style.focusInput} `} 
                                   placeholder="Enter student's cef" 
                                   onChange={({target})=>handleChange('cef',target.value)} 
                                   onFocus={()=>InFocus('cef')}
         
                               />
                           </div>
                           <ErrorMsg value={errors.cef}/>
         
                           {/* full name input */}
                           <div className="flex my-3 mb-0  w-full">
                                <label className={`p-3 text-sm font-medium   rounded-l-md border border-r-0  basis-1/2 ${style.label}  ${style.border}`}>Full Name</label>
                                <input 
                                   type="text" 
                                   name="name" 
                                   value={formData.name || ''} 
                                   className={`rounded-r-md px-3 border text-sm font-medium  py-2  outline-none placeholder:text-sm ${style.input}  ${errors.name ? style.errorBorder :style.border} ${style.focusInput}`} 
                                   placeholder="Enter student's full name" 
                                   onChange={({target})=>handleChange('name',target.value)} 
                                   onFocus={()=>InFocus('name')}
         
                                 />
                           </div>
                           <ErrorMsg value={errors.name}/>
         
                           {/* age input  */}
                           <div className="flex my-3 mb-0  w-full">
                                <label className={`p-3 text-sm font-medium   rounded-l-md border border-r-0 basis-1/2 ${style.label}  ${style.border} `}>Age</label>
                                <input 
                                   type="number" 
                                   name="age" 
                                   value={formData.age || ''} 
                                   className={`rounded-r-md px-3 border text-sm font-medium   py-2  outline-none placeholder:text-sm ${style.input} ${errors.age ? style.errorBorder :style.border}  ${style.focusInput}`} 
                                   placeholder="Enter student's Age" 
                                   onChange={({target})=>handleChange('age',target.value)} 
                                   onFocus={()=>InFocus('age')}
                                   onKeyDown={(e) => {
                                     if (e.key === "e" || e.key === "E" || e.key === ".") {
                                       e.preventDefault();
                                     }
                                   }}
         
                                 />
                           </div>
                           <ErrorMsg value={errors.age}/>
                      
         
                           {/* gender input */}
                           <div className="flex my-3 mb-0  w-full">
                             <label  className={`p-3  text-sm font-medium  rounded-l-md border border-r-0 basis-1/2 max-w-[158px]  ${style.label}  ${style.border} `}>Gender </label>
                             <div className={`flex gap-4  ${style.input} ${style.border}  rounded-r-md px-3 border  py-2  flex-1 `}>
                                 <div className="flex items-center  gap-1">
                                     
                                     <input 
                                       type="radio" 
                                       name="gender" 
                                       value={'Male'} 
                                       checked={formData.gender === 'Male'} 
                                       className="    accent-purple-400 cursor-pointer"  
                                       onChange={()=>handleChange('gender','Male')} 
                                      />
                                     <label  className={` mb-1 text-sm font-medium  text-gray-700 dark:text-gray-50`}>Male </label>
                                 </div>
                                 <div className="flex items-center  gap-1">
                                     
                                     <input 
                                       type="radio" 
                                       name="gender" 
                                       value={'Female'}  
                                       checked={formData.gender === 'Female'} 
                                       className="  accent-purple-400 cursor-pointer"  
                                       onChange={()=>handleChange('gender','Female')} 
         
                                     />
                                     <label  className={` mb-1 text-sm font-medium text-gray-700 dark:text-gray-50 `}>Female </label>
                                 </div>
                                 
                           
                             </div>
                     
                           </div>
                        
                           
         
                           {/* group select */}
                           <div className="flex my-3 mb-0  w-full">
                             <label  className={`p-3 text-sm font-medium   rounded-l-md border border-r-0 basis-1/2 max-w-[158px] ${style.label}  ${style.border} `}>Group </label>
                             <Select 
                               config={{...config,defaultValue : formData.group || ''}}
                               items={groups} 
                              
                             /> 
                             </div>
                             <ErrorMsg value={errors.group}/>
         </div>
                           {/* Submit Button */}
                             <button type="submit" className="text-gray-50 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-3">Edit Student</button>
                         </form>

        
        



        </>
      
    )
}