import { School } from "lucide-react";
import MultipleSelect from "../LittleComponents/MultipleSelect";

export default function AddGroup(){
const teachers = [
  {
    "id": 1,
    "name": "John Doe"
  },
  {
    "id": 2, 
    "name": "Jane Smith"
  },
  {
    "id": 3,
    "name": "Michael Johnson"
  },
  {
    "id": 4,
    "name": "Emily Williams"
  },
  {
    "id": 5,
    "name": "David Brown"
  }
]
const filieres =[
    {id:1, libel :'Developement Digital'},
    {id:2, libel :'Gestion d`entreprise'},
    {id:3, libel :'Genie civil'},
    {id:4, libel :'Infrastructure digital'},
]
    return (
        <>
        <div className="mb-10 mt-7 flex items-center gap-3 text-gray-700 dark:text-gray-50">
        <School size={20} strokeWidth={2}/>
        <h1 className="text-2xl font-bold ">Add new Group</h1>
        </div>
          
         
        

<form class="max-w-sm mx-auto ">
  <div class="mb-5">
    <label for="matricule" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Group Name </label>
    <input type="text" id="matricule" class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg  focus:border-purple-300 block w-full p-2.5 outline-none caret-purple-300 dark:bg-gray-800 dark:border-gray-500 dark:text-gray-50  dark:focus:border-purple-500" placeholder="Enter user's matricule" />
  </div>
  <div class="mb-5">
    <label for="fullName" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Year </label>
    <div className="flex gap-4 ml-2">
        <div class="flex items-center  gap-1">
            
            <input type="radio" name="year" checked   class="    accent-purple-400 cursor-pointer"  />
            <label  class=" mb-1 text-sm font-medium text-gray-700 dark:text-gray-50">First Year </label>
        </div>
        <div class="flex items-center  gap-1">
            
            <input type="radio" name="year"   class="  accent-purple-400 cursor-pointer"  />
            <label  class=" mb-1 text-sm font-medium text-gray-700 dark:text-gray-50">Second Year </label>
        </div>
        <div class="flex items-center gap-1">
            
            <input type="radio" name="year"   class="  accent-purple-400 cursor-pointer"  />
            <label  class="  text-sm mb-1 font-medium text-gray-700 dark:text-gray-50">Third Year </label>
        </div>
   
    </div>
    
  </div>

  <div class="mb-5">
    <label for="role" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Filiere of this Group </label>
    <select   id="role" class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg  focus:border-purple-300 block w-full p-2.5 outline-none dark:bg-gray-800 dark:border-gray-500 dark:text-gray-50  dark:focus:border-purple-500" placeholder="Enter user's age" >
            <option value={''} disabled selected>Select Filiere</option>
            {filieres.map(f=><option value={f.id} key={f.id}>{f.libel}</option>)} 
    </select>
  </div>
  <div class="mb-5">
    <label for="role" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Teachers </label>
    <MultipleSelect data={teachers}/>
  </div>
  <button type="submit" class="text-gray-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add Group</button>
</form>


        </>
      
    )
}
