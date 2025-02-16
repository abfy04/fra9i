import { useState } from "react"
import { UploadCloud, } from "lucide-react"
import Select from "../LittleComponents/Select"
import { ToastContainer,toast } from "react-toastify"
import { errorsMsgs,style } from "../Users"
import ErrorMsg from "../LittleComponents/ErrorMsg"
import CustomToast from "../LittleComponents/CustomToast"
import ConfirmAdding from "../LittleComponents/ConfirmAdding"
const names = ['file','group']
export default function AddManyForm({groups}){

         const [formData,setFormData] = useState({})
         const [errors,setErrors]= useState({})
         const [isSubmited,setIsSubmited] = useState(false)
    
         const handleChange = (name,value)=>{
            setFormData(prev=> ({...prev,[name]:value}))
            if (name === 'file') {
                InFocus(name)
            }

         }
         const InFocus = (name)=>{
            const updetedErros = {...errors}
            delete updetedErros[name]
            setErrors(updetedErros)
         }
        
         
        const notify  = ()=> toast.success(<CustomToast message='students imported  seccussfully'/>,
        { 
               position: 'bottom-right',
               className: 'p-0 w-76 bg-green-600 dark:bg-green-100 text-green-100 dark:text-green-600',
               icon : false,
               progressClassName: "bg-green-100 dark:bg-green-600",
               
})
         
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
            setIsSubmited(true)  
         }

         const handleClick = ()=>{
            notify()
            setIsSubmited(false)
            setFormData({})
            
         }
         
         const config = {
            type : 'group',
            error: errors.group,
            onDelete : InFocus,
            onChange : handleChange,
            defaultValue : formData.group,
            placeholder : 'select group'
           }

    return (
        <>
         <ToastContainer 
            pauseOnHover={false}
            closeButton = {false}
         />
          <form className="max-w-sm mx-auto " onSubmit={handleSubmit}>
           <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-full px-3 pt-8 pb-3 basis-1/2">
           <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">Upload Info</h3>
            <div className="mb-0 flex w-full ">
                <label  className={`p-3 text-sm font-medium  rounded-l-md border-r-0 border ${style.label} ${style.border } basis-1/2 max-w-[158px]`}>Students File </label>
    
                <div className={`rounded-r-md px-3 border py-2  outline-none flex-1  ${style.input} ${errors.file ? style.errorBorder : style.border }  `}>
                    <label htmlFor="dropzone-file"  className="flex items-center justify-center gap-2 " >
                       
                        {
                            formData.file ? 
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-50">{formData.file}</p>
                            :
                            <>
                            <UploadCloud size={20} className="text-gray-500"/>
                            <p className=" text-sm font-medium text-gray-500">Uplod XLS, XLSX  </p>
                        
                            </>
                            
                        }
                        
                       
                        <input 
                           id="dropzone-file" 
                           type="file" 
                           name="file"
                           className="hidden" 
                           accept=".xls,.xlsx" 
                           onChange={({target})=>handleChange('file',target.files[0].name)}

                        />
                    </label>
                </div> 

            </div>
            <ErrorMsg value={errors.file}/>

            <div className="flex mt-3 mb-0 w-full">
                <label  className={`p-3 text-sm font-medium  rounded-l-md border-r-0 border ${style.label} ${style.border } basis-1/2 max-w-[158px]`}>Group </label>
                <Select 
                 
                   items={groups} 
                  
                    config = {{...config,defaultValue : formData.group || ''}}
     
                />                
            </div>
            <ErrorMsg value={errors.group}/>
           </div>
       
  
            {/* submit Button */}
            <button type="submit" className="text-gray-50 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-3">Import Students</button>
        </form> 

        {/* confirm adding modal */}
        {isSubmited && <ConfirmAdding data={formData} setIsSubmited={setIsSubmited} handleClick={handleClick} />}
    </>
    )
}