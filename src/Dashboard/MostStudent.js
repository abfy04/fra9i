import { ExternalLink } from "lucide-react";

function MostStudent (){
    const students= [
        {
            cef:2004102200250,
            name:'Ayoub Fikry',
            group:'DEVOWFS201',
            totalAbsence : 20,
            YesterdayAbsence : 'Yes',
            TodayAbsence : 'Yes',
            LastAbsenceDate: '2024-01-29'
        },
        {
          cef:2004102200250,
          name:'Ayoub Fikry',
          group:'DEVOWFS201',
          totalAbsence : 20,
          YesterdayAbsence : 'Yes',
          TodayAbsence : 'Yes',
          LastAbsenceDate: '2024-01-29'
      },
      {
        cef:2004102200250,
        name:'Ayoub Fikry',
        group:'DEVOWFS201',
        totalAbsence : 20,
        YesterdayAbsence : 'Yes',
        TodayAbsence : 'Yes',
        LastAbsenceDate: '2024-01-29'
    },
    {
      cef:2004102200250,
      name:'Ayoub Fikry',
      group:'DEVOWFS201',
      totalAbsence : 20,
      YesterdayAbsence : 'Yes',
      TodayAbsence : 'Yes',
      LastAbsenceDate: '2024-01-29'
  },
    ]
    return(
        <div class="flex flex-col">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class=" rounded-lg overflow-hidden ">
        <table class="min-w-full divide-y divide-red-700  dark:divide-red-50">
          <thead>
            <tr className="text-gray-50 bg-red-700 dark:bg-red-50 dark:text-red-700">
              <th scope="col" className="lg:px-4 lg:py-3 px-2 py-1 text-start text-xs uppercase font-semibold ">Cef</th>
              <th scope="col" className="lg:px-4 lg:py-3 px-2 py-1 text-start text-xs uppercase font-semibold ">Full Name</th>
              <th scope="col" className="lg:px-4 lg:py-3 px-2 py-1 text-start text-xs uppercase font-semibold ">Group</th>
              <th scope="col" className="lg:px-4 lg:py-3 px-2 py-1 text-start text-xs uppercase font-semibold ">Total absence</th>
              <th scope="col" className="lg:px-4 lg:py-3 px-2 py-1 text-start text-xs uppercase font-semibold ">Yesterday Absence</th>
              <th scope="col" className="lg:px-4 lg:py-3 px-2 py-1 text-start text-xs uppercase font-semibold ">Today Absence</th>
              <th scope="col" className="lg:px-4 lg:py-3 px-2 py-1 text-start text-xs uppercase font-semibold ">Last absence Date</th>
              <th scope="col" className="lg:px-4 lg:py-3 px-2 py-1 text-start text-xs uppercase font-semibold "></th>
   
            </tr>
          </thead>
          <tbody className="divide-y divide-red-700 bg-white text-red-700 dark:bg-slate-800 dark:text-red-50 dark:divide-red-50">
          {
            students.map(st =>
                <tr className="dark:even:bg-red-50 dark:even:text-red-700">
              <td className="lg:px-6 lg:py-4 px-3 py-2 whitespace-nowrap lg:text-sm text-xs font-medium  ">{st.cef}</td>
              <td className="lg:px-6 lg:py-4 px-3 py-2 whitespace-nowrap lg:text-sm text-xs  ">{st.name}</td>
              <td clasName="lg:px-6 lg:py-4 px-3 py-2 whitespace-nowrap lg:text-sm text-xs ">{st.group}</td>
              <td clasName="lg:px-6 lg:py-4 px-3 py-2 whitespace-nowrap lg:text-sm text-xs ">{st.totalAbsence}</td>
              <td clasName="lg:px-6 lg:py-4 px-3 py-2 whitespace-nowrap lg:text-sm text-xs ">{st.YesterdayAbsence}</td>
              <td clasName="lg:px-6 lg:py-4 px-3 py-2 whitespace-nowrap lg:text-sm text-xs ">{st.totalAbsence}</td>
              <td clasName="lg:px-6 lg:py-4 px-3 py-2 whitespace-nowrap lg:text-sm text-xs ">{st.LastAbsenceDate}</td>
              <td clasName="lg:px-6 lg:py-4 px-3 py-2 whitespace-nowrap text-end lg:text-sm text-xs  font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Details <ExternalLink size={20}/></button>
              </td>
            </tr>

            
            )
          }
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    )
}

export default MostStudent;