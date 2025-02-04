import { useState } from "react"
import { Link } from "react-router-dom";

import { Pencil,UserPen,SquareArrowOutUpRight,RefreshCcw,Trash2} from "lucide-react"

import Table from "../LittleComponents/Table";
import ResetPasswordModal from "../LittleComponents/ResetPasswordModal";
import Pagination from "../LittleComponents/Pagination";
import DeleteModal from "../LittleComponents/DeleteModal";
import SearchBar from "../LittleComponents/SearchBar";

import { students } from "../Users";


const cols = [
  {colName : 'CEF',accessor : 'cef'},
  {colName : 'Full Name',accessor : 'name'},
  {colName : 'Age',accessor : 'age'},
  {colName:'Gender',accessor:'gender'},
 { colName : 'Group',accessor : 'group'},
 { colName : 'Total Absences',accessor : 'totalAbsences'},
 
 
]
export default function Teachers(){
  const [selectedItem,setSelectedItem]= useState(null)
  const [activeModal,setActiveModal]= useState(null);

  const [data,setData] = useState(students)
  
  const modal = activeModal === 'delete' ? <DeleteModal selectedItem={selectedItem} setSelectedItem={setSelectedItem}  setActiveModal={setActiveModal}  topic='teacher' /> : <ResetPasswordModal  selectedItem={selectedItem} setSelectedItem={setSelectedItem}  setActiveModal={setActiveModal}  topic='teacher'/>

  return (
      <>
      <div>
          <h1 className="text-2xl text-gray-700 dark:text-gray-50 font-bold mb-10 mt-7">{students.length} Students</h1>
      </div>
     <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-50">students List </h1>
        <Link to={'/addStudent'} className="bg-gray-700 rounded-md px-4 py-3 text-gray-50 hover:bg-gray-600 text-sm flex items-center gap-2 mr-2 font-medium dark:text-gray-700 dark:hover:bg-gray-200 dark:bg-gray-50">
          <Pencil size={18} />
          <span >Add new student</span>
        </Link>
     </div>
    
    <div class=" min-w-full max-w-5xl inline-block align-middle rounded-lg border divide-y divide-gray-100 relative dark:divide-gray-500 dark:border-gray-500">
       <div className="p-1.5 flex items-center justify-between">
          <SearchBar data={students} setData={setData} columnNames={['cef','name','group']}/>
          
          <Pagination />
       </div>
     
      <Table columns={cols} data={data} item={selectedItem} setItem={setSelectedItem} dropDown>
      <div>
            <Link to={`/studentProfile/${selectedItem?.cef}`} className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex gap-2 items-center text-xs p-2"><SquareArrowOutUpRight size={14}/> Profile</Link>
            <Link to={`/editStudent/${selectedItem?.cef}`} className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex gap-2 items-center text-xs p-2"><UserPen size={14}/> Edit</Link>
            <button  className="hover:bg-gray-100 dark:hover:bg-gray-700  rounded-sm flex gap-2 text-xs items-center p-2" onClick={()=>setActiveModal('reset')}><RefreshCcw size={14}  />Reset Password</button>
          </div>
          <button onClick={()=>setActiveModal('delete')}  className="text-red-500  hover:bg-red-100 w-full flex gap-2 text-xs items-center rounded-sm p-2  mt-2"> <Trash2 size={14}/>Delete</button>
      </Table>

    
      {
        activeModal && modal
      }
    </div>
 
      </>
      
       
     
    );
  };
