
import Table from "../LittleComponents/Table";


import { students } from "../Users";
import Title from "../LittleComponents/Title";
import { Sconfig } from "../Configurations";
import { TableProvider } from "../Context";




export default function Teachers(){
  

  
  


  return (
      <>
      <Title  title={'student'} link={'/addStudent'} />
      <TableProvider>
              <Table  dataset={students} config={Sconfig} />

      </TableProvider>
      </>

     
    );
  };
