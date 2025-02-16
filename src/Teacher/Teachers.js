import Table from "../LittleComponents/Table";
import {users} from '../Users'
import Title from "../LittleComponents/Title";
import { Tconfig } from "../Configurations";
import { TableProvider } from "../Context";


export default function Teachers(){
  
  const teachers = users.filter(user => user.role === 'teacher')


  
  

  return (<>
    <Title  title={'teacher'} link={'/addUser/teacher'}/>
    
    <TableProvider>
      <Table  dataset={teachers} config={Tconfig} />
    </TableProvider>
    </>
  )};
