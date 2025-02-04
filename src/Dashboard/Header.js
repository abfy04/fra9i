import { User } from "lucide-react"
import { Link } from "react-router-dom"
function Header(){
    return (
      <div className="flex justify-between items-center mb-4 pb-4 border-b dark:border-b-gray-50">
        <h1 className="text-lg font-bold text-gray-700 dark:text-gray-50">Overview</h1>
        <div className="flex items-center gap-4">
            <Link to={'/adminProfile'} className="flex items-center gap-2 cursor-pointer">
              <div className="size-8 bg-blue-200 text-blue-900 rounded-full flex items-center justify-center">
                      <User size={20}/>
              </div>
              <div className="flex items-center gap-2">
                        <div className="text-xs font-bold text-gray-700 dark:text-gray-50">Adam Taylor</div>
              </div>
            </Link>
        </div>
      </div>
    )
}
export default Header