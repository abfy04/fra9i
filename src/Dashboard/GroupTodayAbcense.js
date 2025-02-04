import { SquareArrowOutUpRight } from "lucide-react"
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../LittleComponents/Pagination";
import SearchBar from "../LittleComponents/SearchBar";
import Table from "../LittleComponents/Table";
const studentsAbsence = [
  {
    name: "John Doe",
    group: "Group A",
    totalAbsences: 5,
    yesterdayAbsence: 1,
  },
  {
    name: "Jane Smith",
    group: "Group B",
    totalAbsences: 4,
    yesterdayAbsence: 1,
  },
  {
    name: "Michael Brown",
    group: "Group A",
    totalAbsences: 9,
    yesterdayAbsence: 2,
  },
  {
    name: "John Doe",
    group: "Group A",
    totalAbsences: 5,
    yesterdayAbsence: 1,
  },

  {
    name: "John Doe",
    group: "Group A",
    totalAbsences: 5,
    yesterdayAbsence: 1,
  },
 
  
];
const cols = [
  {colName:'Full Name',accessor:'name'},
  {colName:'Group',accessor:'group'},
  {colName:'Total Absence',accessor:'totalAbsences'},
  {colName:'Yesterday Absence',accessor:'yesterdayAbsence'},
]


export default function YesterdayAbsence(){
     const [data,setData] = useState(studentsAbsence)
    return (

      <div className=" min-w-full inline-block align-middle rounded-lg border divide-y divide-gray-100 dark:divide-gray-500 relative dark:border-gray-500">
      <div className="p-1.5 flex items-center justify-between">
         <SearchBar data={studentsAbsence} columnNames={['name','group']} setData={setData}/>
         <Pagination />
      </div>
     <div >
     <Table columns={cols} data={data} >
          
            <Link to={'/'} className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"> See More <SquareArrowOutUpRight size={14}/></Link>

      </Table>
     </div>

   </div>

    )
}