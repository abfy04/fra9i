
import {  useNavigate,useParams } from "react-router-dom";
import { User } from "lucide-react";
import { useState } from "react";
import ErrorMsg from "../LittleComponents/ErrorMsg";
import { users,style,errorsMsgs } from "../Users";

const names = ['matricule','name','age',]
export default function EditUser(){
    const {id} = useParams()
    const nv =  useNavigate()
    
    
    
    const user = users.find (user => user.matricule === id)
     const [formData,setFormData] = useState(user)
         const [errors,setErrors]= useState({})
    
         const handleChange = (e)=>{
            const {name,value}= e.target
            setFormData(prev=> ({...prev,[name]:value}))
            if(name === 'gender'){
                const updetedErros = {...errors}
                delete updetedErros[name]
                setErrors(updetedErros)
            }
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
           
            nv( -1 , {state:{action : 'seccuss'}})
  
         }
            
            
           
            
            
            
         
    return (
        <>
        <div className="mb-10 mt-7 flex items-center gap-3  text-gray-700  dark:text-gray-50">
        <User size={20} strokeWidth={3}/>
        <h1 className="text-2xl  font-bold ">Edit {user.name} info</h1>
        </div>
          
         
        <form className=" mx-auto " onSubmit={handleSubmit}>
        
         <div className="flex gap-10 justify-center ">
         {/* personal info */}
         <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-full px-3 pt-2 pb-3 basis-1/3">
                            <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">Personal Info</h3>
                          
                             <div className="flex mt-5 mb-0  w-full">
                               <label className={`p-3  rounded-l-md text-sm font-medium border border-r-0 ${style.label}  ${style.border} basis-1/2 `}>Full Name</label>
                               <input 
                                   type="text" 
                                   name="name"  
                                   className={`rounded-r-md px-3 border py-2 text-sm font-medium   outline-none placeholder:text-xs ${style.input}  ${errors.name ? style.errorBorder :style.border} ${style.focusInput}`} 
                                   placeholder="Enter student's full name" 
                                   onChange={handleChange} 
                                   onFocus={()=>InFocus('name')}
                                   value={formData.name || ''}
        
                                />
                          </div>
                          <ErrorMsg value={errors.name}/>
                          <div className="flex mt-5 mb-0  w-full">
                               <label className={`p-3  rounded-l-md text-sm font-medium border border-r-0 ${style.label}  ${style.border} basis-1/2`}>Age</label>
                               <input 
                                  type="number" 
                                  name="age" 
                                  className={`rounded-r-md px-3 border  text-sm font-medium py-2  outline-none placeholder:text-xs ${style.input} ${errors.age ? style.errorBorder :style.border}  ${style.focusInput}`} 
                                  placeholder="Enter user's Age" 
                                  onChange={handleChange} 
                                  onFocus={()=>InFocus('age')}
                                  value={formData.age || ''}
                                
                                  />
                          </div>
                          <ErrorMsg value={errors.age}/>
        
                          <div className="flex mt-5 mb-0  w-full">
                            <label className={`p-3 text-sm font-medium  rounded-l-md border ${style.label}  ${style.border} basis-1/2 max-w-[158px]`}>Gender </label>
                            <div className={`flex gap-4 border ${style.input} ${style.border}  rounded-r-md px-3 border border-l-0 py-2  flex-1`}>
                                <div className="flex items-center  gap-1">
                                    
                                    <input type="radio" name="gender" value={'Male'} checked={formData.gender === 'Male'}   className="    accent-purple-400 cursor-pointer"  onChange={handleChange} />
                                    <label  className={` text-sm font-medium  text-gray-700 dark:text-gray-50`}>Male </label>
                                </div>
                                <div className="flex items-center  gap-1">
                                    
                                    <input type="radio" name="gender" value={'Female'} checked={formData.gender === 'Female'}   className="  accent-purple-400 cursor-pointer"  onChange={handleChange} />
                                    <label  className={`  text-sm font-medium text-gray-700 dark:text-gray-50 `}>Female </label>
                                </div>
                                
                          
                            </div>
                    
                          </div>
                            
                    
          </div>
        
          {/* profesinal info */}
        <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-40 px-3 py-3  pt-2 basis-1/3">
                            <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">Professional Info</h3>
        
                         <div className="flex mt-5 mb-0 w-full">
                               <label className={`p-3 text-sm font-medium rounded-l-md border border-r-0 ${style.label}  ${style.border} basis-1/2`}>Matricule</label>
                               <input 
                                   type="text" 
                                   name="matricule" 
                                   className={`rounded-r-md px-3 text-sm font-medium  border  py-2  outline-none placeholder:text-xs ${style.input}    ${errors.matricule ? style.errorBorder :style.border} ${style.focusInput} `} 
                                   placeholder="Enter user's matricule" 
                                   onChange={handleChange} 
                                   onFocus={()=>InFocus('matricule')}
                                   value={formData.matricule || ''}
        
                                />
                          </div>
                          <ErrorMsg value={errors.matricule}/>
        
                          <div className="flex mt-5 mb-0 w-full">
                               <label className={`p-3  rounded-l-md text-sm font-medium border border-r-0 ${style.label}  ${style.border} basis-1/2`}>Professional Email</label>
                               <input 
                                   type="email" 
                                   name="email" 
                                   className={`rounded-r-md px-3 text-sm font-medium  border  py-2  outline-none placeholder:text-xs ${style.input}    ${errors.email ? style.errorBorder :style.border} ${style.focusInput} `} 
                                   placeholder="Enter user's professional email" 
                                   onChange={handleChange} 
                                   onFocus={()=>InFocus('email')}
                                   value={formData.email || ''}
        
                                />
                          </div>
                          <ErrorMsg value={errors.email}/>
        
                         
        
                          
                          
        
                          <div className="flex mt-5 mb-0 w-full">
                            <label  className={`p-3 text-sm font-medium  rounded-l-md border border-r-0 ${style.label} ${style.border}  basis-1/2 max-w-[158px]`}>Role </label>
                            <input 
                                   type="text" 
                                   name="role" 
                                   className={`rounded-r-md px-3 text-sm font-medium  border  py-2  outline-none placeholder:text-xs ${style.input} ${style.disabledInput}   ${style.border} ${style.focusInput} `} 
                                   placeholder="Enter user's professional email" 
                                   defaultValue={formData.role }
                                   disabled
        
                                />
                          </div>
                         
        
                         
        </div>
        
         </div>
         
                       
        
        
        
        <button type="submit" className="text-gray-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3 max-w-40 ml-[170px]">Edit User</button>
         </form>

        </>
    )
}