import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Customers from '../components/Customers'


const List = () => {

    const [data, setData] = useState(null)

    useEffect(() =>{
  
        axios.get('http://localhost:8000/getdata')
          .then(response => {
            setData(response.data)
          })
          .catch((error) => {
            console.log(error);
          }) 
      },[])


      const exerciseList = () =>{
        return data.map(currentexercise => {
          return  <Customers excrecise={currentexercise} key={currentexercise._id}/> ;
        })
      }
      
    return (
        <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
         
            </tr>
          </thead>
          <tbody>
        
            {exerciseList()} 
            
          </tbody>
    
        </table>
            
        </div>
    );
}

export default List;
