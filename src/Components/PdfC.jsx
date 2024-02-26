import React, { useState } from 'react';
import { PDFDownloadLink, PDFViewer, Document, Page, Text } from '@react-pdf/renderer';

// Component to generate PDF
const MyDocument = () => (
  <Document>
    <Page>
      <Text></Text>
    </Page>
  </Document>
);

// Component with download button
const PDFDownloadComponent = () => {
  return (
    <div>

      {/* PDF viewer */}
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
      {/* Download button */}
      <PDFDownloadLink document={<MyDocument />} fileName="./math.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
};

export default PDFDownloadComponent;
