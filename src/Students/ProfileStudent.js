import { useParams } from "react-router-dom"

import { students } from "../Users"
import SearchBar from "../LittleComponents/SearchBar"
import Pagination from "../LittleComponents/Pagination"
import { useState } from "react"
import { studentAbsenceRecords } from "../Users"
const dataa = [
 
    {
        name : 'Absences',
        total : 31,
        justified : 5,
        notJustified : 26
    },
    {
        name : 'retards',
        total : 5,
        justified : 1,
        notJustified : 4
    }
 
]


export default function ProfileStudent(){
    const [data,setData]=useState(studentAbsenceRecords)
    const {cef} =useParams()
    const student = students.find(student => student.cef === cef)
    const cols = [
        {colName : 'CEF',accessor : 'cef'},
        {colName : 'Full Name',accessor : 'name'},
        {colName : 'Age',accessor : 'age'},
        {colName:'Gender',accessor:'gender'},
       { colName : 'Group',accessor : 'group'},

       
       
      ]
    return (
        <div className=" select-none">
            <div>
                <h1 className="text-2xl text-gray-700 dark:text-gray-50 font-bold mb-10 mt-7">Welcome in { student.name} profile</h1>
                
            </div>
            <div className="flex min-w-full gap-5">
                <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-40 px-3 py-2 pt-4 flex-1">
                    <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">Student Info</h3>
                     <div>
                     {
                        cols.map(col => 
                            <div className="my-4 flex w-full items-center" key={col.accessor}>
                                <span  className="block  text-sm font-medium text-gray-700 dark:text-gray-50 bg-gray-300 dark:bg-gray-900 rounded-l-md p-2.5 border border-gray-300 dark:border-gray-500  basis-1/6">{col.colName} </span>
                                <span className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-r-lg flex-1   block  p-2.5 outline-none dark:bg-gray-600 dark:border-gray-500 dark:text-gray-50  ">{student[col.accessor]}</span>
                            </div>
                        )
                     }
                    
            
                     </div>
                </div>
                <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-40 px-3 py-auto pt-4 flex-1 bg-white dark:bg-gray-900 flex items-center justify-center">
                    <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">Student Absence Info</h3>
                    
                    <div className=" p-3  space-y-4 rounded-xl w-full">
                            {dataa.map((d, index) => (

                                <div key={index} className=" flex flex-row gap-1  justify-end items-center  h-full w-full " >
                                <span className=" uppercase  text-gray-700 font-semibold text-sm dark:text-gray-50 min-w-24">{d.total} {d.name}</span>
                            

                                    <div className=" flex gap-2 duration-150 h-16 w-full"  >
                                      {d.justified !== 0 && <div className="bg-emerald-500 items-center justify-center flex dark:bg-emerald-200 rounded-md h-full text-lg font-bold text-emerald-900" style={{ width: `${d.justified * 100 / d.total}%`}} >
                                         {d.justified && d.justified}
                                      </div>}
                                     {d.notJustified !== 0 && <div className="bg-yellow-500 flex items-center justify-center dark:bg-yellow-200 rounded-md h-full text-lg font-bold text-yellow-900" style={{ width: `${d.notJustified * 100 / d.total}%`}} >
                                         {d.notJustified }
                                      </div>}

                                    </div>
                                    

                                     
                                </div>
                            
                            ))}
                    </div>
                    <div className=" absolute bottom-7 flex items-center justify-center w-full gap-5 mt-5">
                        <div className="flex items-center gap-2">
                            <span className="size-5 bg-emerald-500 dark:bg-emerald-200 rounded-md "></span>
                            <span className="text-emerald-500 dark:text-emerald-200  text-sm font-semibold">Justified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="size-5 bg-yellow-500 dark:bg-yellow-200 rounded-md "></span>
                            <span className="text-yellow-500 dark:text-yellow-200  text-sm font-semibold">UnJustified</span>
                        </div>
                    </div>
                  
                          
                    
                    
                </div>
              
                
               

            </div>
            <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-40 px-3 py-auto pt-4 flex-1 bg-white dark:bg-gray-800 flex items-center justify-center mt-5">
                    <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">All absence records</h3>
                    
                   

                  
                    <div class=" min-w-full max-w-5xl inline-block align-middle rounded-lg border divide-y divide-gray-100 relative dark:divide-gray-500 dark:border-gray-500 mt-3">
                            <div className="p-1.5 flex items-center justify-between">
                                <SearchBar data={students} setData={setData} columnNames={['date']}/>
                                
                                <Pagination />
                            </div>
                            
                            <table className="min-w-full max-w-4xl  divide-y divide-gray-100  dark:divide-gray-500 rounded-lg table-auto">
          <thead>
            <tr className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-50">
        
                
                    <th  scope="col" className={`lg:px-3 lg:py-3  px-2 py-2 text-start text-xs xl:text-nowrap text-wrap   uppercase font-medium lg:font-semibold  gap-1`}>Date</th>
                    <th  scope="col" className={`lg:px-3 lg:py-3  px-2 py-2 text-start text-xs xl:text-nowrap text-wrap   uppercase font-medium lg:font-semibold  gap-1`}>Status</th>
                    <th  scope="col" className={`lg:px-3 lg:py-3  px-2 py-2 text-start text-xs xl:text-nowrap text-wrap   uppercase font-medium lg:font-semibold  gap-1`}>Justified</th>
                
            
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white dark:divide-gray-500 dark:bg-gray-800 ">
          {
            studentAbsenceRecords.map((t,index) =>
                <tr className={`hover:bg-gray-100 even:bg-gray-50 text-gray-700 dark:text-gray-50 dark:even:bg-gray-900 dark:hover:bg-gray-600 `} key={index}>
                    <td className="px-3 py-2 lg:px-5   whitespace-nowrap text-xs md:text-sm ">{t.date}</td>
                    <td className="px-3 py-2 lg:px-5   whitespace-nowrap text-xs md:text-sm ">{t.status}</td>
                    <td className="px-3 py-2 lg:px-5   whitespace-nowrap text-xs md:text-sm ">{t.justified }</td>
                </tr>
          )}
            
          </tbody>
        </table>

                        
                    </div>      
                                                
                                                
            </div>
        </div>
    )
}









    