import { School } from "lucide-react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { filieres,style,errorsMsgs } from "../Users";
import ErrorMsg from "../LittleComponents/ErrorMsg";


const names = ['niveau','libel'];
export default function EditFiliere(){
    const {id} = useParams()
    const filiere = filieres.find(filiere => filiere.id === Number(id))
    const [formData,setFormData] = useState(filiere)
       const [errors,setErrors]= useState({})
  
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
          const failures= {}
          names.forEach(name => {
            if (!formData[name]) failures[name] = errorsMsgs[name]
            
          });
           
      
       
         
          return failures
          
       }
       const handleSubmit = (e)=>{
          e.preventDefault()
          const validation = handleError()
      
          
          console.log(formData,Object.keys(validation));
          
          if (Object.keys(validation).length){
              setErrors(validation)
              return false
          }
         console.log(formData)
          
         
          
          
          
       }
    return (
        <>
        <div className="mb-10 mt-7 flex items-center gap-3 text-gray-700  dark:text-gray-50">
        <School size={20} strokeWidth={3}/>
        <h1 className="text-2xl font-bold">Edit {filiere.libel} info</h1>
        </div>
          
         
        
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
                              value={formData.niveau}

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


        </>
      
    )
}



