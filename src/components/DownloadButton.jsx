import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FiDownload } from "react-icons/fi";

export default function DownloadButton({ resumeRef, fileName = "resume" }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;

    try {
      setIsDownloading(true);
      // Get the resume element
      const element = resumeRef.current;

      // Create canvas from HTML
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");

      // Create PDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = pdfHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();

      // Add additional pages if needed
      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }

      // Download the PDF
      pdf.save(`${fileName}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to download PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleDownloadPDF}
        disabled={isDownloading}
        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        <FiDownload size={20} /> {isDownloading ? 'Downloading...' : 'Download PDF'}
      </button>
    </div>
  );
}
