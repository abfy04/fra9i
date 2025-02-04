import { School } from "lucide-react";

export default function AddFiliere(){
    return (
        <>
        <div className="mb-10 mt-7 flex items-center gap-3 text-gray-700  dark:text-gray-50">
        <School size={20} strokeWidth={3}/>
        <h1 className="text-2xl font-bold">Add new Filiere</h1>
        </div>
          
         
        

<form class="max-w-sm mx-auto ">
  <div class="mb-5">
    <label for="matricule" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">Matricule </label>
    <input type="text" id="matricule" class="bg-gray-50  border border-gray-300   text-gray-700 text-sm rounded-lg  focus:border-purple-300 dark:bg-gray-800 dark:border-gray-500 dark:text-gray-50  dark:focus:border-purple-500 block w-full p-2.5 outline-none" placeholder="Enter user's matricule" />
  </div>
  
  <button type="submit" class="text-gray-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add Filiere</button>
</form>


        </>
      
    )
}