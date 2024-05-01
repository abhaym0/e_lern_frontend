import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      console.log('user')
    } else {
      navigate('/login')
    }
  }, [])
  const [user, setUser] = useState('')
  let data = ''
  useEffect(() => {
    axios.post('http://localhost:3001/user/profile', data, {
      headers: {
        accessToken: localStorage.getItem('accessToken')
      }
    }).then((response) => {
      console.log(response.data)
      setUser(response.data)
    }).catch((err) => {
      console.log(err)
    })

  }, [])


  return (
    <div className='profile'>
      <div className="profile-card">
        <h1>User Profile</h1>
        <div className="bg-profile">
          <h2>Username: {user.username}</h2>
        </div>
        <div className='bg-profile'>
          <h2>Email: {user.email}</h2>
        </div>
        <div className="bg-profile">
          <h2>FullName: {user.fullname}</h2>
        </div>
        <button className='logout' onClick={() => {
          if (localStorage.getItem('accessToken')) {
            localStorage.removeItem('accessToken')
            navigate('/')
          }
        }}>Log out</button>
      </div>
      <div className='courses-list'>
        <ul>
          <h2>Enrolled Courses:</h2>
          {user && user.enrolledCourses && user.enrolledCourses.map((course, index) => (
            <li className='bg-profile' key={index}>
              <h3>{course.courseName}</h3>
              <p>Course ID: {course.courseId}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='courses-list'>
        <ul>
          <h2>Purchased Courses:</h2>
          {user && user.purchasedCourses
            && user.purchasedCourses
              .map((course, index) => (
                <li className='bg-profile' key={index}>
                  <h3>{course.courseName}</h3>
                  <p>Course ID: {course.courseId}</p>
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}

export default Profile
