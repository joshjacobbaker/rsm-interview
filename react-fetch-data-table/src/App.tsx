import './App.css'
import { useFetch } from './hooks/useFetch'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
// On your local machine – the task will be to build a React App (using hook) to make an async call to an API (via link), and display that data in an HTML table (via Material UI)
// Fetch data from the following API endpoint: https://api.example.com/data or https://jsonplaceholder.typicode.com/users
// Display the fetched data in a table format using Material UI Table components. 
// Include columns for 'ID', 'Name', and 'Age' in the table. 
// Handle loading and error states appropriately. 

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

function App() {
  const {data, status} = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')

  return (
<div>
   <TableContainer component={Paper}>
     <Table>
       <TableHead>
         <TableRow>
           <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        {
          status === "loading" && (
            <TableBody>
              <TableRow>
                <TableCell>Loading...</TableCell>
              </TableRow>
            </TableBody>
        )}
        {
          status === "error" && (
            <TableBody>
              <TableRow>
                <TableCell>Error...</TableCell>
              </TableRow>
            </TableBody>
        )
        }
        {
          data && data.map((user) => (
            <TableBody>
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.address.city}</TableCell>
              </TableRow>
            </TableBody>
          ))
        }
      </Table>
    </TableContainer>
</div>
  )
}

export default App
