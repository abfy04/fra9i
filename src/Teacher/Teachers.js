import { useState } from "react"
import {  Pencil,UserPen,RefreshCcw,Trash2,SquareArrowOutUpRight} from "lucide-react"

import ResetPasswordModal from "../LittleComponents/ResetPasswordModal";
import DeleteModal from "../LittleComponents/DeleteModal";
import Pagination from "../LittleComponents/Pagination";
import { Link } from "react-router-dom";
import SearchBar from "../LittleComponents/SearchBar";
import Table from "../LittleComponents/Table";

import {users} from '../Users'

const teachers = users.filter(user => user.role === 'teacher')
const cols = [
{colName : 'Matricule',accessor : 'matricule'},
{colName : 'Full Name',accessor : 'name'},
{colName : 'Gender',accessor : 'gender'},
{colName : 'Age',accessor : 'age'},
{colName : 'Today`s Absences',accessor : 'todaysAbsences'},
{ colName : 'Total Groups',accessor : 'totalGroups'},

]
export default function Teachers(){
    const [selectedItem,setSelectedItem]= useState(null)
    const [activeModal,setActiveModal]= useState(null);
    
   const [data,setData]= useState(teachers)

    const modal = activeModal === 'delete' ? <DeleteModal selectedItem={selectedItem} setSelectedItem={setSelectedItem}  setActiveModal={setActiveModal}  topic='teacher' /> : <ResetPasswordModal  selectedItem={selectedItem} setSelectedItem={setSelectedItem}  setActiveModal={setActiveModal}  topic='teacher'/>
    
    return (
      <>
      <div>
          <h1 className="text-2xl text-gray-700 dark:text-gray-50 font-bold mb-10 mt-7">{teachers.length} Teachers</h1>
      </div>
     <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-50">Teachers List </h1>
        <Link to={'/addUser/teacher'} className="bg-gray-700 rounded-md px-4 py-3 text-gray-50 hover:bg-gray-600 text-sm flex items-center gap-2 mr-2 font-medium dark:text-gray-700 dark:bg-gray-50 dark:hover:bg-gray-200">
          <Pencil size={18} />
          <span >Add new teacher</span>
        </Link>
     </div>
    
    <div class=" min-w-full inline-block align-middle rounded-lg border divide-y divide-gray-100 relative dark:divide-gray-500 dark:border-gray-500">
       <div className="p-1.5 flex items-center justify-between">
          <SearchBar data={teachers} columnNames={['name','matricule']} setData={setData}/>
          <Pagination />
       </div>
      <div class="">
      <Table columns={cols} data={data} item={selectedItem} setItem={setSelectedItem} dropDown>
          <div>
            <Link to={'/'} className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex gap-2 items-center text-xs p-2"><SquareArrowOutUpRight size={14}/> See More</Link>
            <Link to={`/editUser/${selectedItem?.matricule}`} className="rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex gap-2 items-center text-xs p-2"><UserPen size={14}/> Edit</Link>
            <button  className="hover:bg-gray-100 dark:hover:bg-gray-700  rounded-sm flex gap-2 text-xs items-center p-2" onClick={()=>setActiveModal('reset')}><RefreshCcw size={14}  />Reset Password</button>
          </div>
          <button onClick={()=>setActiveModal('delete')}  className="text-red-500  hover:bg-red-100 w-full flex gap-2 text-xs items-center rounded-sm p-2  mt-2"> <Trash2 size={14}/>Delete</button>
      </Table>
       
      </div>
      {
        activeModal && modal
      }
    </div>
      </>
    );
  };
