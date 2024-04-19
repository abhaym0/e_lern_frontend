import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom"
import Home from './Pages/Home';
import Singup from './Pages/Singup';
import Login from './Pages/Login';
import Userui from './Pages/Userui';
import Coursepage from './Pages/Coursepage';
import DashBoard from './Pages/DashBoard';
import Profile from './Pages/Profile'
import { AuthContext } from './Helpers/AuthContex';
import { useEffect, useState } from 'react';
import AssignmentSubmission from './Pages/AssignmentSubmission';
import axios from 'axios';
import Shery from "sheryjs";
import TestComment from './Pages/Comment';
import AdminPanel from './Pages/AdminPanel';
import AdminLoginForm from './Pages/AdminLogin';
import TeacherLogin from './Pages/TeacherLogin';
import TeacherPanel from './Pages/TeacherPanel';
import LocomotiveScroll from 'locomotive-scroll';
import Terms from './Pages/Terms';
import TestingAuth from './Pages/TestingAuth';
import { motion } from 'framer-motion';
import PdfViewer from './Components/PdfViewer';
import Notes from './Components/Notes';
import { AnimatePresence } from 'framer-motion';
import PDFDownloadComponent from './Components/PdfC';
import QuizGame from './Components/QuizeGame';
import ModelViewer from './Pages/ModelViewer';
import Pur from './Pages/Pur';
import CreateCourse from './Pages/createCourse';

function App() {
const locomotiveScroll = new LocomotiveScroll();
  const[authState, setAuthState] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    const data = 'hey hey hey'
    axios.post("http://localhost:3001/user/authentication",data,{
      headers:{
          accessToken:accessToken
      }
  })
      .then((response) => {
         if(response.data.error){
          alert(response.data.error);
      }else{
            //  alert("authenticated"); 
             setAuthState(true);
         }
      })
      .catch((error) => {
          // Handle error if needed
          // alert('You are not logged in, Please Login ');
          console.error(error);
      });

  }, []);

  return (
    <div className='App '>
      <AuthContext.Provider value={{authState, setAuthState}}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<Singup />}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/userui' element={<Userui></Userui>}></Route>
          <Route path='/course/:id'element={<Coursepage></Coursepage>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/terms/*' element={<Terms></Terms>}></Route>
          <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
          <Route path='/testcomment' element={<TestComment></TestComment>}></Route>
          <Route path='/notes' element={<Notes></Notes>}></Route>
          <Route path='/pur' element={<Pur></Pur>}></Route>
          <Route path='/pdff' element={<PDFDownloadComponent></PDFDownloadComponent>}></Route>
          {/* <Route path='/pdf' element={<PdfViewer></PdfViewer>}></Route> */}
          <Route path='/quizegame' element={<QuizGame></QuizGame>}></Route>
          <Route path='/3d' element={<ModelViewer></ModelViewer>}></Route>
          <Route path='/admin/login' element={<AdminLoginForm></AdminLoginForm>}></Route>
          <Route path='/adminpanel' element = {<AdminPanel></AdminPanel>}></Route>
          <Route path='/teacher/login' element = {<TeacherLogin></TeacherLogin>}></Route>
          <Route path='/teacher/panel' element = {<TeacherPanel></TeacherPanel>}></Route>
          <Route path='/testAuth' element={<TestingAuth></TestingAuth>}></Route>
          <Route path='/assignment' element={<AssignmentSubmission></AssignmentSubmission>}></Route>
          <Route path='/createCourse' element={<CreateCourse></CreateCourse>}></Route>
        </Routes>
      </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App
