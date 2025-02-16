import { useState } from "react";
import Select from "../LittleComponents/Select";
import { errorsMsgs,style } from "../Users";
import ErrorMsg from "../LittleComponents/ErrorMsg";
import CustomToast from "../LittleComponents/CustomToast";
import { ToastContainer,toast } from "react-toastify";
import ConfirmAdding from "../LittleComponents/ConfirmAdding";


const names=['cef','name','age','group','gender']

export default function AddOneForm ({groups}){
     const [formData,setFormData] = useState({gender:'Male'})
     const [errors,setErrors]= useState({})
     const [isSubmited,setIsSubmited] = useState(false)
     const handleChange = (name,value)=> setFormData(prev=> ({...prev,[name]:value}))

     const InFocus = (name)=>{
       
        const updetedErros = {...errors}
        delete updetedErros[name]
        setErrors(updetedErros)
     }

     const handleError=()=>{
      const nameRegex = /^[A-Za-z]+$/
      const cefRegex  = /^\d+$/
        const failures= {}
        names.forEach(name => {
          if (!formData[name]) failures[name] = errorsMsgs[name]
          
        });
          if (!nameRegex.test(formData.name)) failures.name = 'The name should not contain symbols or numbers';
          if (formData.cef && !cefRegex.test(formData.cef)) failures.cef = 'The cef should not contain symbols or letters';
          if (formData.age > 33 || formData.age < 18 ) failures.age = 'The age should be between 18 and 33';
        
        return failures
        
     }
     const handleSubmit = (e)=>{
        e.preventDefault()
        const validation = handleError()
        
        if (Object.keys(validation).length){
            setErrors(validation)
            return false
        }
        setIsSubmited(true)
        

     }

   
     const notify  = ()=> toast.success(<CustomToast message='student added seccussfully'/>,
         { 
         position: 'bottom-right',
         className: 'p-0 w-76 bg-green-600 dark:bg-green-100 text-green-100 dark:text-green-600',
         icon : false,
         progressClassName: "bg-green-100 dark:bg-green-600",
         
         })
   

         const config = {
          type : 'group',
          error: errors.group,
          onDelete : InFocus,
          onChange : handleChange,
          defaultValue : formData.group,
          placeholder:'select group'
         }
         
     const handleClick = ()=>{
      notify()
      setIsSubmited(false)
      setFormData({gender:'Male'})
      
   }
    
    
     
    return (
      <>
      <ToastContainer 
            pauseOnHover={false}
            closeButton = {false}
         />
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
                    <button type="submit" className="text-gray-50 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-3">Add Student</button>
                </form>
                {
         isSubmited &&  <ConfirmAdding data={formData} setIsSubmited={setIsSubmited} handleClick={handleClick} />
        }
    </>
    )
}