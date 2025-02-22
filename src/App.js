
import { useEffect, useState } from "react";

function App() {
   const players= [
      'Ayoub','Rachid','Mustapha','Mohammed','Nordine','Farawla','Nordine Ewaj','Mohammed Ezzine'
      ,'Mohssin','Oussama','Youssef','Abde lmoghit','omar','bilal','Abd Jalil'
   ]
   const [selectedPlayers,setSelectedPlayers] = useState([])
   const [isLoading,setIsLoading] = useState(false);
   const [teams,setTeams] = useState({team1 : [],team2:[]})
   const [isFinish,setIsFinish] = useState(false)
   
   useEffect(()=>{

   },[])
   const addPlayer=(p)=>{
    if (selectedPlayers.includes(p)) {
      setSelectedPlayers(selectedPlayers.filter(player => player !== p))
      return false
    }
    setSelectedPlayers(prev => [...prev,p])
   }
   const randomNbr = () => Math.random()
  const createTeams = () =>{

       setIsLoading(true);
       setTimeout(() => {
          setIsLoading(false)
       }, 3000);
       var localTeams = {
        team1 : [],
        team2 : [],
       }
      
   
       selectedPlayers.forEach(player => {
      
         const lastTeam = randomNbr() < .5 ? 'team1' : 'team2'
         console.log(randomNbr() , lastTeam, localTeams[lastTeam].length,Math.floor(selectedPlayers.length / 2));
         
         if (localTeams[lastTeam].length < Math.floor(selectedPlayers.length / 2)) {
          localTeams = {...localTeams,[lastTeam] : [...localTeams[lastTeam],player]}
          return false

         }
         if (lastTeam === 'team1') {
          localTeams = {...localTeams,team2 : [...localTeams.team2,player]}
        

         }else {
          localTeams = {...localTeams,team1 : [...localTeams.team1,player]}
         }
          
         
     
         
           
          //  setLastTeam(team)
          //  if (randomNbr % 2) {
          //    if (teams.team1.length >= Math.floor(selectedPlayers.length / 2)) {
          //     setTeams(prev => ({...prev,team2 : [...prev.team2,player ]}))
          //     return false
              
          //    }
          //    setTeams(prev => ({...prev,team1 : [...prev.team1,player ]}))
          //     return false
            
          //  }

          //  if (teams.team2.length >= Math.floor(selectedPlayers.length / 2)) {
          //   setTeams(prev => ({...prev,team1 : [...prev.team1,player ]}))
          //   return false
          //  }
         
          //  setTeams(prev => ({...prev,team2 : [...prev.team2,player ]}))
          //   return false
         
       });
       
       
       setTeams(localTeams)
       
       setIsFinish(true)

  }
  const reset = ()=>{
    setIsFinish(false)
    setTeams({team1:[],team2:[]})
    setSelectedPlayers([])
    setIsLoading(false);
  }
  
  return (
    <div className={`App `} >
    {
      isLoading ? 
      <div className="h-svh w-full flex items-center justify-center">
          <span>Creating Teams ...</span>
      </div>
      :
      (
        isFinish ? 
        <div>
        <h1 className="text-center text-gray-700 text-3xl font-semibold my-10">Teams</h1>
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between sm:flex-row  flex-col">
            {/* red team */}
              <div className=" bg-gray-100 px-2 py-1 rounded-sm sm:basis-1/3 w-3/4">
                <h1 className="text-xl uppercase font-semibold my-2 text-red-700">Red Team </h1>
                <div className=" space-y-2">
                  {teams.team1.map(player => 
                     <span className="px-3 block text-center uppercase py-2 text-sm font-semibold text-red-700 rounded-md bg-red-200">
                        {player}
                     </span>
                  )}
                </div>
              </div>
               <span className="text-gray-700 text-6xl font-bold my-4 sm:my-0"> VS</span>
              {/* green team */}
              <div className=" bg-gray-100 px-2 py-1 rounded-sm sm:basis-1/3  w-3/4">
                <h1 className="text-xl uppercase font-semibold text-green-700 my-2">Green Team </h1>
                <div className=" space-y-2">
                  {teams.team2.map(player => 
                     <span className="px-3 block text-center uppercase py-2 text-sm font-semibold text-green-700 rounded-md bg-green-200">
                        {player}
                     </span>
                  )}
                </div>
              </div>
            </div>
            <button 
              className="my-4 ml-10 bg-blue-600 hover:bg-blue-700 border border-blue-700 text-center font-medium text-sm text-gray-50 rounded-md px-3 py-2 disabled:bg-blue-300 disabled:cursor-not-allowed disabled:border-blue-300"
              onClick={reset}
             
            >
              Reset
            </button>
        </div>
       
      </div>
        : 
        <div>
        <h1 className="text-center text-gray-700 text-3xl font-semibold my-10">Select Players</h1>
        <div className="sm:max-w-2xl mx-auto max-w-sm px-2">
            <div className="grid sm:grid-cols-4 grid-cols-3 sm:gap-5 gap-3 ">
              {
                players.map(player =>
                  <div 
                    onClick={()=>addPlayer(player)}
                    className={`${selectedPlayers.includes(player) ? 'bg-green-300 hover:bg-green-400' : 'bg-gray-50 hover:bg-gray-100'} p-2 sm:px-3 sm:py-4 text-center rounded-md  text-gray-700 text-xs sm:text-sm font-medium border border-gray-500`}
                  >
                    {player}
                  </div>
                )
              }
            </div>
            <button 
              className="my-4 bg-blue-600 hover:bg-blue-700 border border-blue-700 text-center font-medium text-sm text-gray-50 rounded-md px-3 py-2 disabled:bg-blue-300 disabled:cursor-not-allowed disabled:border-blue-300"
              onClick={createTeams}
              disabled={selectedPlayers.length < 6}
            >
              Create Teams
            </button>
            
        </div>
       
      </div>
      )
      

    }
       
    </div>
  );
}

export default App;
