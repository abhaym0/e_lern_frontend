// // AssignmentSubmission.jsx

// import React, { useState,useEffect } from 'react';
// useEffect(() => {
//   console.log('Assignment component is rendered');
// }, []);
// const AssignmentSubmission = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     file: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: name === 'file' ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const assignmentData = new FormData();
//     assignmentData.append('title', formData.title);
//     assignmentData.append('description', formData.description);
//     assignmentData.append('file', formData.file);

//     // Make a fetch or axios request to send the data to the server
//     fetch('/api/submitAssignment', {
//       method: 'POST',
//       body: assignmentData,
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Network response was not ok, status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Assignment submitted successfully:', data);
//         // You can redirect or show a success message
//       })
//       .catch(error => {
//         console.error('Error submitting assignment:', error.message);
//         // Handle errors
//       });

//   return (
//     <div>
//       <h2>Submit Assignment</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//           ></textarea>
//         </label>
//         <br />
//         <label>
//           File:
//           <input type="file" name="file" onChange={handleChange} />
//         </label>
//         <br />
//         <button type="submit">Submit Assignment</button>
//       </form>
//     </div>
//   );
// };
// }
// export default AssignmentSubmission;
