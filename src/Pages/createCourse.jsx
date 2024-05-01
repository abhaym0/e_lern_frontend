import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const CreateCourse = () => {
  const [videoLectures, setVideoLectures] = useState([
    { title: '', url: '', thumbnail: '' }
  ]);

  const addVideoLecture = () => {
    setVideoLectures([...videoLectures, { title: '', url: '', thumbnail: '' }]);
  };

  const removeVideoLecture = (index) => {
    const updatedVideoLectures = [...videoLectures];
    updatedVideoLectures.splice(index, 1);
    setVideoLectures(updatedVideoLectures);
  };

  const handleVideoLectureChange = (index, field, value) => {
    const updatedVideoLectures = [...videoLectures];
    updatedVideoLectures[index][field] = value;
    setVideoLectures(updatedVideoLectures);
  };

  const initialValues = {
    dp: '', // Course Thumbnail URL
    title: '',
    them: '',
    instructor: '',
    accsess: false,
    syllabus: '',
    videoLectures: videoLectures,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    them: Yup.string().required('Theme is required'),
    instructor: Yup.string().required('Instructor name is required'),
    syllabus: Yup.string().required('Syllabus is required'),
    videoLectures: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required('Video title is required'),
        url: Yup.string().url('Invalid video URL').required('Video URL is required'),
        thumbnail: Yup.string().url('Invalid thumbnail URL').required('Thumbnail URL is required'),
      })
    ),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const payload = {
        ...values,
        quizzes: [], // Add default value for quizzes
        videoLectures: values.videoLectures.map((lecture) => ({
          title: lecture.title,
          url: lecture.url,
          thumbnail: lecture.thumbnail,
        })),
      };

      // Make API request using Axios
      const response = await axios.post('http://localhost:3001/courses/create', payload);
      console.log(response.data);
      alert('Course created successfully!');
    } catch (error) {
      console.error('Error creating course:', error);
      alert('Failed to create course. Please try again.');
    }

    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form className='createCourse'>
          <h1 style={{background:"white", margin:"10px"}}>Create Course</h1>
          {/* <h1>Create Course</h1> */}
          {/* Course details */}
          <p htmlFor="title">Title</p><br />
          <Field placeholder = 'Course Title' type="text" name="title" /><br />
          <ErrorMessage className='error-cc' name="title" component="div" />
          
          <p htmlFor="dp">Course Thumbnail URL</p><br />
          <Field placeholder = 'Course Thumbnail URL ' type="text" name="dp" /><br />
          <ErrorMessage className='error-cc' name="dp" component="div" />


          <p htmlFor="them">Theme</p><br />
          <Field placeholder = 'Enter Theme' type="text" name="them" /><br />
          <ErrorMessage className='error-cc' name="them" component="div" />

          <p htmlFor="instructor">Instructor Name</p><br />
          <Field placeholder = 'Enter Instructor Name' type="text" name="instructor" /><br />
          <ErrorMessage className='error-cc' name="instructor" component="div" />

          <p htmlFor="syllabus">Syllabus</p><br />
          <Field placeholder = 'Write here...' as="textarea" type='textare' className='txt' name="syllabus"  /><br />
          <ErrorMessage className='error-cc' name="syllabus" component="div" />

          {/* Video Lectures */}
          <div className="vid-lec">
          {videoLectures.map((lecture, index) => (
            <div key={index} >
              <h1 className='lec-header'>Lecture  - {index + 1}</h1>
              <p htmlFor={`videoLectures[${index}].title`}>Video Title</p><br />
              <Field placeholder = 'Video Title' type="text" name={`videoLectures[${index}].title`} /><br />
              <ErrorMessage className='error-cc ' name={`videoLectures[${index}].title`} component="div" style={{background:"#dfdfdf"}}/>

              <p htmlFor={`videoLectures[${index}].url`}>Video URL</p><br />
              <Field placeholder = 'Video URL' type="text" name={`videoLectures[${index}].url`} /><br />
              <ErrorMessage className='error-cc' name={`videoLectures[${index}].url`} component="div" style={{background:"#dfdfdf"}} />

              <p htmlFor={`videoLectures[${index}].thumbnail`}>Thumbnail URL</p><br />
              <Field placeholder = 'Thumbnail URL' type="text" name={`videoLectures[${index}].thumbnail`} /><br />
              <ErrorMessage className='error-cc' name={`videoLectures[${index}].thumbnail`} component="div" style={{background:"#dfdfdf"}} />

              <button type="button" onClick={() => removeVideoLecture(index)} className='rmbtn'>Remove</button>
            </div>
          ))}
          <button type="button" onClick={addVideoLecture} className='submitbtn'>Add Video Lecture</button><br />
          </div>

          {/* Submit button */}
          <button type="submit" disabled={isSubmitting} className='submitbtn'>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateCourse;
