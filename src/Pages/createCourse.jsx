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
        <Form>
          {/* Course details */}
          <label htmlFor="dp">Course Thumbnail URL</label>
          <Field type="text" name="dp" />
          <ErrorMessage name="dp" component="div" />

          <label htmlFor="title">Title</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" />

          <label htmlFor="them">Theme</label>
          <Field type="text" name="them" />
          <ErrorMessage name="them" component="div" />

          <label htmlFor="instructor">Instructor Name</label>
          <Field type="text" name="instructor" />
          <ErrorMessage name="instructor" component="div" />

          <label htmlFor="syllabus">Syllabus</label>
          <Field as="textarea" name="syllabus" />
          <ErrorMessage name="syllabus" component="div" />

          {/* Video Lectures */}
          {videoLectures.map((lecture, index) => (
            <div key={index}>
              <label htmlFor={`videoLectures[${index}].title`}>Video Title</label>
              <Field type="text" name={`videoLectures[${index}].title`} />
              <ErrorMessage name={`videoLectures[${index}].title`} component="div" />

              <label htmlFor={`videoLectures[${index}].url`}>Video URL</label>
              <Field type="text" name={`videoLectures[${index}].url`} />
              <ErrorMessage name={`videoLectures[${index}].url`} component="div" />

              <label htmlFor={`videoLectures[${index}].thumbnail`}>Thumbnail URL</label>
              <Field type="text" name={`videoLectures[${index}].thumbnail`} />
              <ErrorMessage name={`videoLectures[${index}].thumbnail`} component="div" />

              <button type="button" onClick={() => removeVideoLecture(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={addVideoLecture}>Add Video Lecture</button>

          {/* Submit button */}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateCourse;
