import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import * as Yup from 'yup';
import Videos from '../Components/Videos';
import { Formik, Form, Field, ErrorMessage, } from 'formik';

const Coursepage = () => {
  const { id } = useParams();
  const [courseObject, setCoursesObject] = useState({});
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [isButton, setIsButton] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [isEnroll, setIsEnroll] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [state, setState] = useState(false);

  const toggleEnroll = () => {
    setIsEnroll(!isEnroll);
  };

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

  const initialValue = {
    commentText: '',
  }

  const validationSchema = Yup.object().shape({
    commentText: Yup.string().required(),
  })
  const navigater = useNavigate()
  if (localStorage.getItem('accessToken')) {
    // console.log('user');
  } else {
    navigater('/signup')
  }
  const onSubmit = (data) => {
    axios.post(`http://localhost:3001/comment/addComment/${id}`, data, {
      headers: {
        accessToken: localStorage.getItem('accessToken')
      }
    })
    .then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert("comment added succsessfully")
      }
    })
    .catch((error) => {
      // Handle error if needed
      alert('worng pass or username');
      console.error(error);
    });
  }
  
  const data = 'sdfsfd'
  const enrollInCourse = () => {
    const token = localStorage.getItem('accessToken');
    axios.post(
      `http://localhost:3001/courses/enroll/${id}`, data,
      {
        headers: {
          accessToken: localStorage.getItem('accessToken')
        }
      }
    ).then((response) => {
      console.log(response);
      alert('Successfully enrolled');
    }).catch((err) => {
      console.error(err);
    });
  }


  useEffect(() => {
    axios
      .get(`http://localhost:3001/courses/byId/${id}`)
      .then((response) => {
        console.log(response.data)
        setCoursesObject(response.data)
        setCurrentVideoUrl(response.data.videoLectures[0]?.url || '')
        setQuizzes(response.data.quizzes)
        setState(response.data.accsess)
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);


  // useEffect(() => {
  //   // Fetch quiz data from API
  //   axios.get(`http://localhost:3001/courses/byId/${id}`)
  //     .then(response => {

  //       console.log(quizzes)
  //     })
  //     .catch(error => {
  //       console.error('Error fetching quiz data:', error);
  //     });
  // }, []);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizzes[currentQuestion].correctAnswer) {
      // Increment the score by 1 for each correct answer
      setScore(score + 1);
    }
    if (currentQuestion + 1 < quizzes.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If all questions are answered, show the result
      setShowResult(true);
    }
  };
    
  const [quizzes, setQuizzes] = useState([]);

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const cancelTerms = () => {
    navigate("/userui");
  }

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/courses/byId/${id}`)
  //     .then(response => {
  //       if (Array.isArray(response.data)) {
  //         setQuizzes(response.data);
  //       } else {
  //         console.error('Quizzes data is not an array:', response.data);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching quiz data:', error);
  //     });
  // }, [])


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
          {!state ? (
            <button className="btn-grp">purcahse</button>
          ) : (
            <button className='btn-grp'>Enroll for free</button>
          )}
            <button className="btn-grp" onClick={toggleDivVisibility}>
              See syllabus
            </button>
            <button className="btn-grp" onClick={submitHandler}>
              Assignment
            </button>
            {isEnroll && (
              <div className='terms'>
                <div className='terms-card'>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)} // Toggle checkbox state
                  />
                  <label>I Accept Terms and conditions</label>
                  <br />
                  <button
                    disabled={!isChecked}
                    className={isChecked ? 'checked' : 'unchecked'}
                    onClick={enrollInCourse}
                  >
                    Enroll
                  </button>
                  <button className='terms-cancel' onClick={() => setIsEnroll(false)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="video-list">
          <Videos lectures={courseObject.videoLectures} onVideoClick={handleVideoClick} />
        </div>
      </div>
      <div className='comments'>
        <Formik initialValues={initialValue}
          onSubmit={onSubmit}
          validationSchema={validationSchema} >
          <Form className='formC'>
            <Field className='fieldC'
              id='in'
              name='commentText'
              placeholder='Add a comment...'
            >
            </Field><br />
            <button className='submitbtn' type='submit'>Comment</button>
          </Form>
        </Formik>
        {isButton && (
          <div className='comment-btn'>
            <button onClick={cancel}>Cancel</button>
          </div>
        )}
        <div className="comment-area">
          {courseObject.comments?.map((comment) => (
            <div className='user-comment' key={comment._id}>
              <h4>{comment.username}</h4>
              <p className='cp'>{comment.commentText}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="quizzes-container">
        {quizzes && quizzes.map((quiz, index) => (
          <div key={index} className="quiz-item">
            <h3>{quiz.title}</h3>
            {quiz.questions.map((question, questionIndex) => (
              <div key={questionIndex}>
                <p>{question.question}</p>
                <ul>
                  {question.options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <label>
                        <input
                          type="radio"
                          name={`quiz-${index}-${questionIndex}`}
                          value={option}
                          onChange={() => handleAnswer(option)}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
      {showResult && (
        <div className="score-container">
          <h2>Your Score: {score}/{quizzes.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )} */}
    </div>

  );
};

export default Coursepage