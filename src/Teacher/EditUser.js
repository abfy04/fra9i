
import { useParams } from "react-router-dom";
import { User } from "lucide-react";
import {users} from '../Users'
export default function EditUser(){
    const {id} = useParams()
    const user = users.find (user => user.matricule === id)
    return (
        <>
        <div className="mb-10 mt-7 flex items-center gap-3  text-gray-700  dark:text-gray-50">
        <User size={20} strokeWidth={3}/>
        <h1 className="text-2xl  font-bold ">Edit {user.name} info</h1>
        </div>
          
         
        

<form class="max-w-sm mx-auto ">
  <div class="mb-5">
    <label for="matricule" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Matricule </label>
    <input type="text" defaultValue={user.matricule} id="matricule" class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg  focus:border-purple-300 block w-full p-2.5 outline-none dark:bg-gray-800 dark:border-gray-500 dark:text-gray-50  dark:focus:border-purple-500" placeholder="Enter user's matricule" />
  </div>
  <div class="mb-5">
    <label for="fullName" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Full Name </label>
    <input type="text" defaultValue={user.name} id="fullName" class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg  focus:border-purple-300 block w-full p-2.5 outline-none dark:bg-gray-800 dark:border-gray-500 dark:text-gray-50  dark:focus:border-purple-500" placeholder="Enter user's full name" />
  </div>
  <div class="mb-5">
    <label for="age" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Age </label>
    <input type="number" defaultValue={user.age} id="age" class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg  focus:border-purple-300 block w-full p-2.5 outline-none dark:bg-gray-800 dark:border-gray-500 dark:text-gray-50  dark:focus:border-purple-500" placeholder="Enter user's age" />
  </div>
  <div class="mb-5">
    <label for="fullName" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Gender </label>
    <div className="flex gap-4 ml-2">
        <div class="flex items-center  gap-1">
            
            <input type="radio" name="sexe" value={'Male'} checked={user.gender === 'Male'}   class="    accent-purple-400 cursor-pointer"  />
            <label  class=" mb-1 text-sm font-medium text-gray-700 dark:text-gray-50">Male </label>
        </div>
        <div class="flex items-center  gap-1">
            
            <input type="radio" name="sexe" value={'Female'} checked={user.gender === 'Female'}   class="  accent-purple-400 cursor-pointer"  />
            <label  class=" mb-1 text-sm font-medium text-gray-700 dark:text-gray-50">Female </label>
        </div>
        
   
    </div>
    
  </div>
  <div class="mb-5">
    <label for="role" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Role </label>
    <select   id="role" class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg  focus:border-purple-300 block w-full p-2.5 outline-none disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-500 dark:text-gray-50  dark:focus:border-purple-500" placeholder="Enter user's age" >
            <option value={''} selected disabled>Select user Role</option>
            <option selected={user.role==='admin'}>Admin</option>
            <option selected={user.role==='absence Manager'}>Absence Manager</option>
            <option selected={user.role==='teacher'}>Teacher</option>
    </select>
  </div>
  <button type="submit" class="text-gray-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Edit </button>
</form>


        </>
    )
}