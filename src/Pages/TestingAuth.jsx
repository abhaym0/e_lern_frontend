import axios from 'axios'
import React, { useEffect } from 'react'

const TestingAuth = () => {
    const data = 'hello'
    useEffect(()=>{
        axios.post(`http://localhost:3001/user/authentication`, data,{
            headers:{
                accessToken:localStorage.getItem('accessToken')
            }
        })
            .then((response) => {
               if(response.data.error){
                alert(response.data.error);
            }else{
                   alert("comment added succsessfully")
               }
            })
            .catch((error) => {
                // Handle error if needed
                alert('You are not logged in, Please Login ');
                console.error(error);
            });
    },[])
  return (
    <div>
      heyllo
    </div>
  )
}

export default TestingAuth
