import { School } from "lucide-react";
import { useState } from "react";
import { errorsMsgs,style } from "../Users";
import ErrorMsg from "../LittleComponents/ErrorMsg";
import { ToastContainer,toast } from "react-toastify";
import ConfirmAdding from "../LittleComponents/ConfirmAdding";
import CustomToast from "../LittleComponents/CustomToast";
const names = ['niveau','libel']
export default function AddFiliere(){
   const [formData,setFormData] = useState({})
       const [errors,setErrors]= useState({})
       const [isSubmited,setIsSubmited] = useState(false)
       const handleChange = (e)=>{
          const {name,value}= e.target
          setFormData(prev=> ({...prev,[name]:value}))
        
          
          
       }
       const InFocus = (e)=>{
         const {name} = e.target
          const updetedErros = {...errors}
          delete updetedErros[name]
         
          
          setErrors(updetedErros)
          
          
       }
  
       const handleError=()=>{
         const nameRegex = /^[A-Za-z]+$/
          const failures= {}
          names.forEach(name => {
            if (!formData[name]) failures[name] = errorsMsgs[name]
            
          });
           
          if (!nameRegex.test(formData.libel)) failures.libel = 'The libel should not contain symbols or numbers';
       
         
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
       const notify  = ()=> toast.success(<CustomToast message='filiere added seccussfully'/>,
                { 
                position: 'bottom-right',
                className: 'p-0 w-76 bg-green-600 dark:bg-green-100 text-green-100 dark:text-green-600',
                icon : false,
                progressClassName: "bg-green-100 dark:bg-green-600",
                
                })
                const handleClick = ()=>{
                  notify()
                  setIsSubmited(false)
                  setFormData({})
                  
      }
    return (
        <>
        <div className="mb-10 mt-7 flex items-center gap-3 text-gray-700  dark:text-gray-50">
        <School size={20} strokeWidth={3}/>
        <h1 className="text-2xl font-bold">Add new Filiere</h1>
        </div>
        <ToastContainer 
            pauseOnHover={false}
            closeButton = {false}
         /> 
          
         
        

<form className="max-w-sm mx-auto " onSubmit={handleSubmit}>
<div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-full px-3 pt-4 pb-3 basis-1/3">
<h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">General Info</h3>
<div className="flex my-3 mb-0 w-full">
                     <label className={`p-3 text-sm font-medium  rounded-l-md border border-r-0 ${style.label} ${style.border} basis-1/2 max-w-[158px]`}>Niveau</label>
                     <select   
                        id="niveau" 
                        className={`border text-sm font-medium  rounded-r-md flex-1 py-2 px-3 outline-none ${style.input} ${errors.niveau ? style.errorBorder : style.border} ${style.focusInput} `}  
                        onChange={handleChange} 
                        onFocus={InFocus}
                        name="niveau"
                        value={formData.niveau || ''}
                       
                      >
                            <option value={''}  disabled >Select filiere niveau</option>
                            <option value={'Technicien Specialise'}>Technicien Specialise</option>
                            <option value={'Technicien'}> Technicien</option>
                            <option value={'Qualification'}>Qualification</option>
                            <option value={'Specialisation'}>Specialisation</option>
                    </select>
                     
                  </div>
                  <ErrorMsg value={errors.niveau}/>

                  <div className="flex my-3 mb-0 w-full">
                     <label className={`p-3 text-sm font-medium  rounded-l-md border border-r-0 ${style.label} ${ style.border} basis-1/2 `}>Libel</label>
                     <input 
                        type="text" 
                        name="libel" 
                        className={`rounded-r-md px-3 border text-sm font-medium   py-2  disabled:cursor-not-allowed outline-none ${style.input} ${errors.libel ? style.errorBorder : style.border} ${style.focusInput}`} 
                        placeholder="Enter filiere's libel" 
                        onChange={handleChange} 
                        onFocus={InFocus}
                        value={formData.libel || ''}
                     />
                  </div>
                  <ErrorMsg value={errors.libel}/>
  </div>
  <button type="submit" className="text-gray-50 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-2 text-center">Add Filiere</button>
</form>
   {
      isSubmited && <ConfirmAdding data={formData} setIsSubmited={setIsSubmited} handleClick={handleClick} />
   }

        </>
      
    )
}