import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Videos from '../Components/Videos';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Coursepage = () => {
  let { id } = useParams();
  const [courseObject, setCoursesObject] = useState({});
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [isButton, setIsButton] = useState(false);
  const [newComment, setNewComment] = useState('');

  const navigate = useNavigate();

  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  const handleVideoClick = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
  };

  const visbtn = () => {
    setIsButton(true);
  }

  const cancel = () => {
    setIsButton(false);
  }

  const submitHandler = () => {
    navigate('/assignment');
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const enrollInCourse = () => {
    // Placeholder function for enrolling in the course
    console.log('Enrolling in the course...');
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/courses/byId/${id}`)
      .then((response) => {
        setCoursesObject(response.data);
        setCurrentVideoUrl(response.data.videoLectures[0]?.url || '');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const initialValues = {
    commentText: '',
  };

  const validationSchema = Yup.object({
    commentText: Yup.string().required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    axios
      .post(`http://localhost:3001/courses/addComment/${id}`, {
        commentText: values.commentText,
        user: {
          _id: '65bf78eb5459987ac76c34bc', // Replace with the actual user ID
          username: 'abhay_m' // Replace with the actual username
        }
      })
      .then((response) => {
        setCoursesObject(response.data);
        resetForm();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="coursepage-container">
      <h1>{courseObject.title}</h1>
      <div className="main">
        <div className="player-container">
          <div className="player" style={{ borderRadius: '10px' }}>
            <ReactPlayer url={currentVideoUrl} height="100%" width="100%" autoPlay loop controls />
          </div>
          <div className="titlel">
            <h3>{courseObject.title}</h3>
            <button className="btn-grp btn-1" onClick={enrollInCourse}>
              Enroll Yourself
            </button>
            <button className="btn-grp" onClick={toggleDivVisibility}>
              See syllabus
            </button>
            <button className="btn-grp" onClick={submitHandler}>
              Assignment
            </button>
          </div>
          <div className="misc">
            {isDivVisible && (
              <div className="syllabus">
                <p>{courseObject.syllabus}</p>
              </div>
            )}
          </div>
        </div>
        <div className="video-list">
          <Videos lectures={courseObject.videoLectures} onVideoClick={handleVideoClick} />
        </div>
      </div>
      <div className='comments'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Field className='cm' type="text" name="commentText" placeholder='Add a comment...' />
            <button type="submit" className='cm-btn-1' disabled={isButton}>Comment</button>
            <button type="button" onClick={cancel} disabled={isButton}>Cancel</button>
          </Form>
        </Formik>
        <div className="comment-area">
          {courseObject.comments?.map((comment) => (
            <div className='user-comment' key={comment._id}>
              <h4>{comment.username}</h4>
              <p className='cp'>{comment.commentText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coursepage;
