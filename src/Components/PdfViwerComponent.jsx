// // PDFViewerComponent.jsx

// import React, { useState, useEffect } from 'react';
// import { Document, Page, pdfjs } from '@react-pdf/renderer';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const PDFViewerComponent = ({ pdfUrl }) => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   useEffect(() => {
//     const fetchPDF = async () => {
//       try {
//         const response = await fetch(pdfUrl);
//         const pdfBlob = await response.blob();
//         setNumPages(await getNumPages(pdfBlob));
//       } catch (error) {
//         console.error('Error fetching PDF:', error);
//       }
//     };

//     fetchPDF();
//   }, [pdfUrl]);

//   const getNumPages = async (pdfBlob) => {
//     const pdf = await pdfjs.getDocument(pdfBlob);
//     return pdf.numPages;
//   };

//   const onPageLoadSuccess = (page) => {
//     setPageNumber(page.pageNumber);
//   };

//   return (
//     <div>
//       {numPages &&
//         <div>
//           <p>Page {pageNumber} of {numPages}</p>
//           <Document file={pdfUrl} onLoadSuccess={onPageLoadSuccess}>
//             <Page pageNumber={pageNumber} />
//           </Document>
//         </div>
//       }
//     </div>
//   );
// };

// export default PDFViewerComponent;
