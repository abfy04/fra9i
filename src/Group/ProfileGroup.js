import { Link, useParams } from "react-router-dom"
import { PenBox, Trash2, UserX2,Users,SquareArrowOutUpRight ,UserPen, LogIn } from "lucide-react"
import { groups,students } from "../Users"
import SearchBar from "../LittleComponents/SearchBar"
import Pagination from "../LittleComponents/Pagination"
import { useState } from "react"
import Table from "../LittleComponents/Table"

import DeleteModal from "../LittleComponents/DeleteModal";
import Alert from "../LittleComponents/Alert"


const  cardsData = [
    {
      title:'Total Absence ',
      nbr: 20,
      icon : <UserX2 size={36}/>,
      style :'text-red-700 bg-red-100 hover:bg-red-200'

     
    },
    {
      title:'Total Students',
      nbr: 21,
      icon : <Users size={36}/>,
       style :'text-slate-700 bg-slate-100 hover:bg-slate-200'
      
    },
    {
      title:'Today Absence',
      nbr: 4,
      icon : <UserX2 size={36}/>,
       style :'text-sky-700 bg-sky-100 hover:bg-sky-200'
   
    },
    
    {
      title:'Yesterday Absence',
      nbr: 0,
      icon : <UserX2 size={36}/>,
       style :'text-violet-700 bg-violet-100 hover:bg-violet-200'
      
    },
    
   
  ]


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
const dataa2= [
    {
        name : 'Male',
        retard :20,
        absence : 10
    },
    {
        name : 'Female',
        retard :1,
        absence : 1
    },
]
const totalAbsence = dataa2.reduce((acc,val)=> acc + val.absence , 0)
const totalRetard = dataa2.reduce((acc,val)=> acc + val.retard , 0)
export default function ProfileGroup(){
    const cols = [
        {colName : 'CEF',accessor : 'cef'},
        {colName : 'Full Name',accessor : 'name'},
        {colName : 'Age',accessor : 'age'},
        {colName:'Gender',accessor:'gender'},
       { colName : 'Group',accessor : 'group'},
       { colName : 'Total Absences',accessor : 'totalAbsences'},
       
       
      ]
      const [selectedItem,setSelectedItem]= useState(null)
  const [activeModal,setActiveModal]= useState(null);

  const [data,setData] = useState(students)
  
  const modal =  <DeleteModal selectedItem={selectedItem} setSelectedItem={setSelectedItem}  setActiveModal={setActiveModal}  topic={activeModal === 'deleteGroup' ? 'group' :'student'} >{selectedItem?.libel &&  <Alert msg={'if you delete any group ,all values associated with this group will be lost'}/> }</DeleteModal>  

    const {id} =useParams()
    const group = groups.find(student => student.id === Number(id))
    const infos = [
        {colName:'Libel',accessor : 'libel'},
        {colName:'Filiere',accessor : 'filiere'},
        {colName:'Year',accessor : 'year'},

    ]

    const handleClick = ()=>{
        setSelectedItem(group)
        setActiveModal('deleteGroup')
        
        
    }
    return (
        <div className=" select-none">
            <div>
                <h1 className="text-2xl text-gray-700 dark:text-gray-50 font-bold mb-10 mt-7">Welcome in { group.libel} profile</h1>
               
                
            </div>
            <div className=" flex min-w-full gap-5 mb-10">
            <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-40 px-3 py-2 pt-4 flex-1">
                    <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">Group Info</h3>
                     <div>
                     {
                        infos.map(col => 
                            <div className="my-4 flex w-full items-center" key={col.accessor}>
                                <span  className="block  text-sm font-medium text-gray-700 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 rounded-l-md p-2.5 border border-gray-300 dark:border-gray-500  basis-3/6">{col.colName} </span>
                                <span className="bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-r-lg flex-1   block  p-2.5 outline-none dark:bg-gray-600 dark:border-gray-500 dark:text-gray-50  ">{group[col.accessor]}</span>
                            </div>
                        )
                     }
                    
            
                     </div>
                     <div className="flex items-center justify-center gap-3 my-7">
                        <Link to={`/editGroup/${group.id}`} className="text-blue-800 bg-blue-200 hover:bg-blue-400 dark:text-gray-50 dark:bg-blue-700 dark:hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex-1 flex  items-center justify-center gap-2"><PenBox size={20}/> Edit</Link>
                        <button className="text-red-800 bg-red-200 hover:bg-red-400 dark:dark:text-gray-50 dark:bg-red-700 dark:hover:bg-red-800  focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-cente flex-1 flex  items-center justify-center gap-2" onClick={handleClick}><Trash2 size={20}/> Delete</button>
                     </div>
            </div>

            <div className="  grid grid-cols-2  gap-6  ">
        {
          cardsData.map(
            d=>
            <div className={` rounded-lg flex justify-between shadow py-4 px-3 pb-2 duration-100   h-full ${d.style}`} key={d.title}>
              <div className=" text-sm  flex gap-2  h-fit items-end font-medium">
              {d.icon}
              <span className="font-medium text-base">{d.title}</span>
              </div>
              <div className="text-5xl font-bold self-end ">{d.nbr}</div>
            
            </div>
            
          )
        }
            
            </div>
            </div>







            <div className="flex min-w-full gap-5">
                







                <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-56 px-3 py-auto pt-4 flex-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                    <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">Group Absence Info</h3>
                    
                    <div className=" p-3  space-y-4 rounded-xl w-full mb-8">
                            {dataa.map((d, index) => (

                                <div key={index} className=" flex flex-row gap-1  justify-end items-center  h-full w-full " >
                                <span className=" uppercase  text-gray-700 font-semibold text-sm dark:text-gray-50 min-w-24">{d.total} {d.name}</span>
                            

                                    <div className=" flex gap-2 duration-150 h-16 w-full"  >
                                      {d.justified !== 0 && <div className="bg-green-400 dark:bg-green-200 items-center justify-center flex  rounded-md h-full text-lg font-bold text-gray-50 dark:text-green-700" style={{ width: `${d.justified * 100 / d.total}%`}} >
                                         {d.justified && d.justified}
                                      </div>}
                                     {d.notJustified !== 0 && <div className="bg-yellow-400 dark:bg-yellow-200 flex items-center justify-center rounded-md h-full text-lg font-bold text-gray-50 dark:text-yellow-700" style={{ width: `${d.notJustified * 100 / d.total}%`}} >
                                         {d.notJustified }
                                      </div>}

                                    </div>
                                    

                                     
                                </div>
                            
                            ))}
                    </div>
                    <div className=" absolute bottom-7 flex items-center justify-center w-full gap-5 mt-5">
                        <div className="flex items-center gap-2">
                            <span className="size-5  bg-green-400 dark:bg-green-200 rounded-md "></span>
                            <span className="text-green-400 dark:text-green-200  text-sm font-semibold">Justified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="size-5 bg-yellow-400 dark:bg-yellow-200 rounded-md "></span>
                            <span className="text-yellow-400 dark:text-yellow-200   text-sm font-semibold">UnJustified</span>
                        </div>
                    </div>
                  
                          
                    
                    
                </div>




                <div className="relative border border-gray-300 dark:border-gray-500 rounded-md   min-h-72 px-5  py-auto pt-4 flex-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-between w-full">
                    <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">Group Absence by gender</h3>
                    

                    <div className="flex flex-col gap-5  ">
                        <div className="flex items-center gap-2">
                            <span className="size-5 bg-red-500 dark:bg-red-200 rounded-md "></span>
                            <span className="text-red-500 dark:text-red-200  text-sm font-semibold">Absence</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="size-5 bg-orange-400 dark:bg-orange-200 rounded-md "></span>
                            <span className="text-orange-400 dark:text-orange-200  text-sm font-semibold">Retard</span>
                        </div>
                    </div>

                    <div className=" p-3  flex items-center justify-end gap-10  w-full h-4/5 ">
                            {dataa2.map((d, index) => (
                                
                                
                                <div key={index} className=" flex flex-col space-y-2  justify-end items-center  h-full  " >
                            

                                    <div className=" flex items-end gap-2 duration-150 h-full "  >
                                      {d.absence !== 0 && <div className="bg-red-500 items-center justify-center flex dark:bg-red-200 rounded-md w-16 text-lg font-bold text-gray-50 dark:text-red-700 min-h-5" style={{ height: `${d.absence * 100 / totalAbsence}%`}} >
                                         { d.absence}
                                      </div>}
                                     {d.retard !== 0 && <div className="bg-orange-400 flex items-center justify-center dark:bg-orange-200 rounded-md w-16 text-lg font-bold text-gray-50 dark:text-orange-700 min-h-5" style={{ height: `${d.retard * 100 / totalRetard}%`}} >
                                         {d.retard }
                                      </div>}

                                    </div>
                                    <div className="h-12 flex justify-center items-center">
                                        <span className="text-center uppercase text-sm font-semibold text-gray-700 dark:text-gray-50">{d.name}</span>
                                    </div> 
                                   

                                    

                                     
                                </div>
                                
                            ))}
                            
                    </div>
                    
                
                          
                    
                    
                </div>
                
               

            </div>
            <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-40 px-3 py-4 pt-6 flex-1 bg-white dark:bg-gray-800 flex items-center justify-center mt-8">
                    <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">All absence records</h3>
                    
                   

                    <div class=" min-w-full max-w-5xl inline-block align-middle rounded-lg border divide-y divide-gray-100 relative dark:divide-gray-500 dark:border-gray-500 ">
       <div className="p-1.5 flex items-center justify-between">
          <SearchBar data={students} setData={setData} columnNames={['cef','name','group']}/>
          
          <Pagination />
       </div>
     
      <Table columns={cols} data={data} item={selectedItem} setItem={setSelectedItem} dropDown>
      <div>
            <Link to={`/studentProfile/${selectedItem?.cef}`} className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex gap-2 items-center text-xs p-2"><SquareArrowOutUpRight size={14}/> Profile</Link>
            <Link to={`/editStudent/${selectedItem?.cef}`} className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex gap-2 items-center text-xs p-2"><UserPen size={14}/> Edit</Link>
          </div>
          <button onClick={()=>setActiveModal('deleteStudent')}  className="text-red-500  hover:bg-red-100 w-full flex gap-2 text-xs items-center rounded-sm p-2  mt-2"> <Trash2 size={14}/>Delete</button>
      </Table>

    
      
        { activeModal && modal }
      
    </div>    
                                                
                                                
            </div>
        </div>
    )
}









    