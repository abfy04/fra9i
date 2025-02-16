import { CircleAlert, CircleX, UserRoundCheck,X} from "lucide-react";

export default function CustomToast ({message, closeToast, toastProps}) {
            const icons = {
               success :  <UserRoundCheck size={20} className=" mr-2 text-2xl" />,
               error :  <CircleX size={20} className=" mr-2 text-2xl" />,
               info :  <CircleAlert size={20} className=" mr-2 text-2xl" />,
            }
            return (
            <div className={`flex items-center justify-between rounded-md px-3 py-2 w-full`}>
              <div className="flex items-center ">
              {icons[toastProps.type]}
              <span className="text-sm font-bold">{message}</span>
         
              </div>
              
              {/* Custom Close Button */}
              <X
                className={` cursor-pointer ml-3 text-xl`}
                onClick={closeToast}
              />
            </div>
)}