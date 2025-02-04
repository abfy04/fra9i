import { Link, useParams } from "react-router-dom"
import { PenBox,School, Trash2, UserX2,SquareArrowOutUpRight , Edit } from "lucide-react"
import { groups,filieres } from "../Users"
import SearchBar from "../LittleComponents/SearchBar"
import Pagination from "../LittleComponents/Pagination"
import { useState } from "react"
import Table from "../LittleComponents/Table"

import DeleteModal from "../LittleComponents/DeleteModal";
import Alert from "../LittleComponents/Alert"
import DonutCHart from "../Charts/DonutChart"



const style = {
    'first year' : {
    
    style:'bg-blue-500 dark:bg-blue-300 text-blue-50 dark:text-blue-700',
   
    stroke:'stroke-blue-500 dark:stroke-blue-300',
 
  },
  'second year' : {
    style:'bg-purple-400 dark:bg-purple-300 text-purple-50 dark:text-purple-700',
    stroke:'stroke-purple-400 dark:stroke-purple-300',
  },
  'third year' : {
    style:'bg-cyan-400 dark:bg-cyan-300 text-cyan-50 dark:text-cyan-700',
    stroke:'stroke-cyan-400 dark:stroke-cyan-300',
  }
  }

const  cardsData = [
    {
      title:'Total Absence ',
      nbr: 20,
      icon : <UserX2 size={32}/>,
      style :'text-red-700 bg-red-100 hover:bg-red-200'

     
    },
    {
      title:'Total Groups',
      nbr: 21,
      icon : <School size={32}/>,
       style :'text-slate-700 bg-slate-100 hover:bg-slate-200'
      
    },
    {
      title:'Today Absence',
      nbr: 4,
      icon : <UserX2 size={32}/>,
       style :'text-sky-700 bg-sky-100 hover:bg-sky-200'
   
    },
    
    {
      title:'Yesterday Absence',
      nbr: 0,
      icon : <UserX2 size={32}/>,
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
        type : 'first year',
        nbr : 20
    },
    {
        type : 'second year',
        nbr : 2
    },
    {
        type : 'third year',
        nbr : 1
    },
]


const totalAbsence = dataa2.reduce((acc,val)=> acc + val.absence , 0)
const totalRetard = dataa2.reduce((acc,val)=> acc + val.retard , 0)
export default function ProfileFiliere(){
    const cols = [
        {colName:'Libel',accessor : 'libel'},
        {colName:'Year',accessor : 'year'},
        {colName:'Number students',accessor : 'numberStudents'},
        {colName:'Number Absence',accessor : 'nbrAbsence'},
        {colName:'Today Absence',accessor : 'todayAbsence'},
        {colName:'Yesterday Absence',accessor : 'YesterdayAbsence'},
      ]
      const [selectedItem,setSelectedItem]= useState(null)
  const [activeModal,setActiveModal]= useState(null);

  const [data,setData] = useState(groups)
  
  const modal =  <DeleteModal selectedItem={selectedItem} setSelectedItem={setSelectedItem}  setActiveModal={setActiveModal}  topic={activeModal === 'deleteGroup' ? 'group' :'filiere'} >
  <Alert msg={ activeModal === 'deleteGroup' ? 'if you delete any group ,all values associated with this group will be lost' : 'if you delete any filiere ,all values associated with this filiere will be lost'}/>
  </DeleteModal>  

    const {id} =useParams()
    const filiere = filieres.find(student => student.id === Number(id))

    const infos = [
        {colName:'Libel',accessor : 'libel'},
    

      ]

    const handleClick = ()=>{
        setSelectedItem(filiere)
        setActiveModal('deleteFiliere')
        
        
    }
    return (
        <div className=" select-none">
            <div>
                <h1 className="text-2xl text-gray-700 dark:text-gray-50 font-bold mb-10 mt-7">Welcome in { filiere.libel} profile</h1>
               
                
            </div>
            <div className=" flex min-w-full  gap-5 mb-10">
            <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-56 px-3 py-2 pt-10 flex-1">
                    <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">Group Info</h3>
                     <div >
                     {
                        infos.map(col => 
                            <div className="my-4 flex w-full items-center" key={col.accessor}>
                                <span  className="block  text-sm font-medium text-gray-700 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 rounded-l-md p-2.5 border border-gray-300 dark:border-gray-500  basis-3/6">{col.colName} </span>
                                <span className="bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-r-lg flex-1   block  p-2.5 outline-none dark:bg-gray-600 dark:border-gray-500 dark:text-gray-50  ">{filiere[col.accessor]}</span>
                            </div>
                        )
                     }
                    
            
                     </div>
                     <div className="flex items-center justify-center gap-3 my-7">
                        <Link to={`/editFiliere/${filiere?.id}`} className="text-blue-800 bg-blue-200 hover:bg-blue-400 dark:text-gray-50 dark:bg-blue-700 dark:hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex-1 flex  items-center justify-center gap-2"><PenBox size={20}/> Edit</Link>
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




                <div className="relative border border-gray-300 dark:border-gray-500 rounded-md   min-h-72 px-5  py-auto pt-4 flex-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center w-full">
                    <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">Group Absence by Year</h3>
                    <DonutCHart css={style} data={dataa2}/>
                </div>
                
               

            </div>







            {/* Table */}
            <div className="relative border border-gray-300 dark:border-gray-500 rounded-md  min-h-40 px-3 py-4 pt-6 flex-1 bg-white dark:bg-gray-800 flex items-center justify-center mt-8">
                    <h3 className="absolute text-gray-700 dark:text-gray-50 px-2 py-1 border border-gray-300 dark:border-gray-500 z-30 -top-4 bg-gray-50 dark:bg-gray-800 left-4 rounded-md">All absence records</h3>
                    
                   

                    <div class=" min-w-full max-w-5xl inline-block align-middle rounded-lg border divide-y divide-gray-100 relative dark:divide-gray-500 dark:border-gray-500 ">
       <div className="p-1.5 flex items-center justify-between">
          <SearchBar data={groups} setData={setData} columnNames={['libel','name','group']}/>
          
          <Pagination />
       </div>
     
      <Table columns={cols} data={data} item={selectedItem} setItem={setSelectedItem} dropDown>
      <div>
            <Link to={`/groupProfile/${selectedItem?.id}`} className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex gap-2 items-center text-xs p-2"><SquareArrowOutUpRight size={14}/> Profile</Link>
            <Link to={`/editGroup/${selectedItem?.id}`} className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex gap-2 items-center text-xs p-2"><Edit size={14}/> Edit</Link>
          </div>
          <button onClick={()=>setActiveModal('deleteStudent')}  className="text-red-500  hover:bg-red-100 w-full flex gap-2 text-xs items-center rounded-sm p-2  mt-2"> <Trash2 size={14}/>Delete</button>
      </Table>

    
      
        { activeModal && modal }
      
    </div>    
                                                
                                                
            </div>
        </div>
    )
}









    