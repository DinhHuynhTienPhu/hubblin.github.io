
import React from 'react';
import pdfFile from '../images/file.pdf';

function DownloadButton() {
    const handleDownload = () => {
        const url = window.URL.createObjectURL(new Blob([pdfFile]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload}>
            Download PDF
        </button>
    );
}

export default DownloadButton;
