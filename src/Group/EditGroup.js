import { School } from "lucide-react";
import Select from "../LittleComponents/Select";

import { useParams } from "react-router-dom";
import { useState } from "react";

import { filieres,style,errorsMsgs, groups,users } from "../Users";
import ErrorMsg from "../LittleComponents/ErrorMsg";
  const names = ['libel','filiere','teachers'];
export default function EditGroup(){
     
     const {id} = useParams()
     const teachers = users.filter(user=>(user.role  === 'teacher'))
     const group = groups.find(group=> group.id === Number(id))
     const [formData,setFormData] = useState(group)
      const [errors,setErrors]= useState({})
   
    
      const handleChange = (e)=>{
         const {name,value}= e.target
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
     
         
         
         
         if (Object.keys(validation).length){
             setErrors(validation)
             return false
         }
       
         
        
         
         
      }
      const teacherConfig = {
         type : 'teacher',
         error: errors.teacher,
         onDelete : InFocus,
         onChange : handleChange,
         defaultValue : formData.teacher,
         placeholder : 'select main teacher'
        }
        const filiereConfig = {
         type : 'filiere',
         error: errors.filiere,
         onDelete : InFocus,
         onChange : handleChange,
         defaultValue : formData.filiere,
         placeholder : 'select  filiere'
        }
    return (
        <>
        <div className="mb-10 mt-7 flex items-center gap-3 text-gray-700 dark:text-gray-50">
        <School size={20} strokeWidth={2}/>
        <h1 className="text-2xl font-bold ">Edit {group.libel} info</h1>
        </div>
          
         
        

           <form className="max-w-sm mx-auto " onSubmit={handleSubmit}>
           <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-full px-3 pt-4 pb-3 basis-1/3">
           <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">General Info</h3>
              {/* libel input */}
              <div className="flex my-2 w-full">
                                <label className={`p-3 text-sm font-medium  rounded-l-md border border-r-0 ${style.label} ${ style.border} basis-1/2  `}>Group Libel</label>
                                <input 
                                   type="text" 
                                   name="libel" 
                                   className={`rounded-r-md px-3  py-2  border disabled:cursor-not-allowed outline-none flex-1 ${style.input} ${errors.libel ? style.errorBorder : style.border} ${style.focusInput}`} 
                                   placeholder="Enter group libel" 
                                   value={formData.libel || ''}
                                   onChange={({target})=>handleChange('libel',target.value)} 
                                   onFocus={()=>InFocus('libel')}
                                />
             </div>
             <ErrorMsg value={errors.libel}/>
               {/* year input */}
               <div className="flex my-3 w-full">
                                <label  className={`p-3  text-sm font-medium   rounded-l-md border border-r-0 ${style.label} ${style.border}  basis-1/2 max-w-[152px] `}>Year </label>
                                <select   
                                  
                                   className={`border text-sm font-medium rounded-r-md flex-1 py-2 px-3 outline-none ${style.input} ${errors.year ? style.errorBorder : style.border} ${style.focusInput} `}  
                                   onChange={({target})=>handleChange('year',target.value)}  
                                   onFocus={()=>InFocus('year')}
                                   value={formData.year}
                               
                                   name="year"
                                 >
                                       <option value={''}  disabled >Select group year</option>
                                       <option value={'first year'}>first year</option>
                                       <option value={'second year'}> second year</option>
                                       <option value={'third year'}>third year</option>
                                     
                               </select>
                                
                             </div>
                             <ErrorMsg value={errors.year}/>
               {/* filiere input */}
                             <div className="flex my-3 w-full">
                                <label className={`p-3  text-sm font-medium  rounded-l-md border border-r-0 ${style.label} ${ style.border} basis-1/2 max-w-[152px]`}>Filiere</label>
                                <Select 
                                  items={filieres}
                                  config={{...filiereConfig,defaultValue : formData.filiere || ''}}
                                />
                                
                             </div>
                             <ErrorMsg value={errors.filiere}/>
              {/* main teacher */}
                             <div className="flex my-3 w-full">
                               <label className={`p-3  text-sm font-medium  rounded-l-md border border-r-0 ${style.label} ${ style.border} basis-1/2 max-w-[152px]`}>Main Teacher</label>
                               <Select 
                               items={teachers} 
                               config={{...teacherConfig,defaultValue : formData.teacher || ''}}
           
                               />
                             </div>
                             <ErrorMsg value={errors.teacher}/>
           </div>
             <button type="submit" className="text-gray-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-3">Add Group</button>
           </form>


        </>
      
    )
}
