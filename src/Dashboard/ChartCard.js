import { UserX } from "lucide-react"
export default function ChartCard ({children}){

     return (
        <div className=" ">
        <div className={`bg-gray-50 rounded-lg shadow py-5 px-4 pb-2  flex-1 h-full dark:bg-gray-900 `}>
          <div className={`mb-2 text-sm text-gray-700 flex gap-2 items-end font-medium dark:text-gray-50`}>
          <UserX size={20} />
          <span>Today absence</span>
          
          </div>
          {children}
          
         
        </div>
    </div>
     )
}