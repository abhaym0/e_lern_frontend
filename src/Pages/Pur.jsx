import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';



const Pur = () => {
    const navigate = useNavigate()
    const ID = localStorage.getItem("ID")
    const name = localStorage.getItem("CourseName");
    const pur = () => {
        console.log(ID,name)
        const data = ''
        axios.post('http://localhost:3001/courses/purchase', data, {
            headers: {
                accessToken: localStorage.getItem('accessToken'),
                courseId: ID,
                coursName: name
            }
        }).then(() => {
            alert("course purchased")
        }).catch((err) => {
            alert("failed to purcahse the course")
            console.log(err)
        })
        navigate(`/course/${ID}`)
        localStorage.removeItem('ID');
        localStorage.removeItem('CourseName'); 
    }

    

    const cancel = () => {
        navigate('/userui')
    }
    return (
        <div>
            <div className='pur-sub'>
                <div className=''>
                    <span>Are you sure you want to purchcase the "{`${name}`}" Course?</span>
                </div>
                <button onClick={pur}>Purchase</button>
                <button onClick={cancel}>Cancel</button>
            </div>
        </div>
    )
}

export default Pur
