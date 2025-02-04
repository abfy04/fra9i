export const users = [
    {
        id:1,
        matricule : 'T001',
        name: "John Doe",
      gender: "Male",
      age: 40,
      todaysAbsences: 2,
      totalGroups: 3,
      role:'teacher'
     
    },
    {
      id:2,
      matricule : 'T002',
      name: "Sarah Smith",
      gender: "Female",
      age: 35,
      todaysAbsences: 0,
      totalGroups: 2,
       role:'teacher'
     
    },
    {
        id:3,
        matricule : 'T003',
      name: "Michael Brown",
      gender: "Male",
      age: 50,
      todaysAbsences: 1,
      totalGroups: 4,
       role:'teacher'
  
    },
    {
      id:4,
      matricule : 'T004',
      name: "Emily Davis",
      gender: "Female",
      age: 29,
      todaysAbsences: 0,
      totalGroups: 1,
       role:'teacher'
  
    },
    {id:5,matricule:'A001',name:'Ahmed Mohammed',gender: 'Male',role: 'absence Manager',age:50},
    {id:6,matricule:'A002',name:'Jilali Brahim',gender: 'Male',role: 'absence Manager',age:43},
    {id:7,matricule:'A003',name:'Hasnaoui Ghita',gender: 'Female',role: 'absence Manager',age:23},
    {id:8,matricule:'A005',name:'Basir Hassan',gender: 'Male',role: 'absence Manager',age:22},
]


export const students = [
    { 
      id:1,
      cef: "2004102200250",
      name: "John Doe",
      age: 16,
      gender: "Male",
      group: "Group A",
      totalAbsences: 5,

    },
    { 
      id:2,
      cef: "S002",
      name: "Jane Smith",
      age: 17,
      gender: "Female",
      group: "Group B",
      totalAbsences: 4,

    },
    {
      id:3,
  
      cef: "S003",
      name: "Michael Brown",
      age: 16,
      gender: "Male",
      group: "Group A",
      totalAbsences: 9,

    },
    {
      id:4,
  
      cef: "S004",
      name: "Emily Davis",
      age: 15,
      gender: "Female",
      group: "Group C",
      totalAbsences: 12,

    },
    {
      id:5,
  
      cef: "S005",
      name: "Chris Wilson",
      age: 17,
      gender: "Male",
      group: "Group B",
      totalAbsences: 7,
 
    },
    {
      id:6,
  
      cef: "S006",
      name: "Sarah Johnson",
      age: 16,
      gender: "Female",
      group: "Group A",
      totalAbsences: 6,
     
    },
    {
      id:7,
  
      cef: "S007",
      name: "David Lee",
      age: 16,
      gender: "Male",
      group: "Group C",
      totalAbsences: 10,
   
    }
  ];

export const filieres = [
    {id:1,libel:'Developement Digital',numberGroup: 3, nbrAbsence : 10,groups:['DEV101','DEVOWFS201']},
    {id:2,libel:'GS',numberGroup: 3, nbrAbsence : 10,groups:['GS101','GS102','GS103']},
    {id:3,libel:'GC',numberGroup: 3, nbrAbsence : 10,groups:['GC101','GC201','Batiment101']},
    {id:4,libel:'ID',numberGroup: 3, nbrAbsence : 10,groups:['ID101','ID201','ID101','ID201','ID101','ID201','ID101','ID201','ID101','ID201','ID101','ID201']},
    {id:5,libel:'AI',numberGroup: 3, nbrAbsence : 10,groups:['AI101','AI201']},
    
  ]

export const groups = [
    { 
      id:1,
      libel:'Dev101',
      filiere:'Developement Digital',
      year:'first year',
      numberStudents: 20, 
      nbrAbsence : 10,
      todayAbsence:4,
      YesterdayAbsence:0,
      teacher:['Ahmed Ahmed','Ayoub Fikry','Adbellah daaif']
    },
    { 
      id:2,
      libel:'Dev102',
      filiere:'Developement Digital',
      year:'first year',
      numberStudents: 23, 
      nbrAbsence : 5,
      todayAbsence:1,
      YesterdayAbsence:0,
      teacher:['Ahmed 1','Jawad Fikry']
    },
    { 
      id:3,
      libel:'DEVOWFS201',
      filiere:'Developement Digital',
      year:'second year',
      numberStudents: 21, 
      nbrAbsence : 10,
      todayAbsence:2,
      YesterdayAbsence:3,
      teacher:['Ahmed Ahmed','Ayoub Fikry','Adbellah daaif']
    },
    { 
      id:4,
      libel:'GS101',
      filiere:'Gestion d`entreprise',
      year:'first year',
      numberStudents: 20, 
      nbrAbsence : 10,
      todayAbsence:4,
      YesterdayAbsence:0,
      teacher:['Ahmed Ahmed','Ayoub Fikry','Adbellah daaif']
    },
    { 
      id:5,
      libel:'GS201',
      filiere:'Gestion d`entreprise',
      year:'first year',
      numberStudents: 30, 
      nbrAbsence : 20,
      todayAbsence:0,
      YesterdayAbsence:5,
      teacher:['Adbellah daaif']
    },


    
  ]


  
export  const studentAbsenceRecords = [
    { date: "2025-01-21", status: "Absent", justified : 'Yes'},
    { date: "2025-01-20", status: "Absent", justified : 'No' },
    { date: "2025-01-18", status: "Late",   justified : 'Yes'},
    { date: "2025-01-15", status: "Absent", justified : 'No'},
    { date: "2025-01-10", status: "Late",   justified : 'Yes'},
    { date: "2025-01-08", status: "Absent", justified : 'No'},
    { date: "2025-01-05", status: "Absent", justified : 'No'},
    { date: "2024-12-28", status: "Late",   justified : 'Yes' },
    { date: "2024-12-22", status: "Absent", justified : 'No'},
    { date: "2024-12-18", status: "Absent", justified : 'Yes'},
  ];