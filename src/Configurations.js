export const   AMconfig = {
    name : 'absence Manager',
    searchBy : ['matricule','name'],
    filterBy : ['gender','age'],
    resetPassword : true,
    dropDown : true,
    profile : false,
    links:{
      edit:'editUser'
    },
    moreInfo : false,
    action : true,
    columns : [
      {colName : 'Matricule',accessor : 'matricule'},
      {colName : 'Full Name',accessor : 'name'},
      {colName : 'Age',accessor : 'age'},
      {colName : 'Gender',accessor : 'gender'},
    ]
   
  }

export const Tconfig = {
    name : 'teacher',
    searchBy : ['matricule','name'],
    filterBy : ['gender','age'],
    resetPassword : true,
    dropDown : true,
    profile : false,
    links:{
      edit:'editUser'
    },
    moreInfo : true,
    action : true,
    columns :  [
    {colName : 'Matricule',accessor : 'matricule'},
    {colName : 'Full Name',accessor : 'name'},
    {colName : 'Gender',accessor : 'gender'},
    {colName : 'Age',accessor : 'age'},
    {colName : 'Today`s Absences',accessor : 'todaysAbsences'},
    { colName : 'Total Groups',accessor : 'totalGroups'},
    
    ]
  }

 export const Sconfig = {
    name : 'student',
    searchBy : ['cef','name'],
    filterBy : ['gender','group','age','totalAbsence'],
    resetPassword : false,
    dropDown : true,
    profile : true,
    links:{
      profile : 'studentProfile',
      edit:'editStudent'
    },
    moreInfo : false,
    action : true,
    columns :  [
      {colName : 'CEF',accessor : 'cef'},
      {colName : 'Full Name',accessor : 'name'},
      {colName : 'Age',accessor : 'age'},
      {colName:'Gender',accessor:'gender'},
     { colName : 'Group',accessor : 'group'},
     { colName : 'Total Absence',accessor : 'totalAbsence'},
     
     
    ]
  }

 export const Gconfig = {
    name : 'group',
    searchBy : ['libel'],
    filterBy : ['filiere','year','totalAbsence'],
    resetPassword : false,
    dropDown : true,
    profile : true,
    links:{
      profile : 'groupProfile',
      edit:'editGroup'
    },
    moreInfo : true,
    action : true,
    columns: [
          {colName:'Libel',accessor : 'libel'},
          {colName:'Filiere',accessor : 'filiere'},
          {colName:'Year',accessor : 'year'},
          {colName:'Number students',accessor : 'numberStudents'},
          {colName:'Total Absence',accessor : 'totalAbsence'},
          {colName:'Today Absence',accessor : 'todayAbsence'},
          {colName:'Yesterday Absence',accessor : 'YesterdayAbsence'},
        
        ]

  }

export  const Fconfig = {
    name : 'filiere',
    searchBy : ['libel'],
    filterBy : ['niveau','totalAbsence'],
    resetPassword : false,
    dropDown : true,
    profile : true,
    links:{
      profile : 'filiereProfile',
      edit:'editFiliere'
    },
    moreInfo : false,
    action : true,
    columns :  [
          
          {colName:'Libel',accessor : 'libel'},
          {colName:'Niveau',accessor : 'niveau'},
          {colName:'Number Groups',accessor : 'numberGroup'},
          {colName:'Total Absence',accessor : 'totalAbsence'},
          {colName:'Groups',accessor : 'groups',notSortable : true},
        ]
  }
    