import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { toast } from "react-toastify";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function DownloadButton({ resumeRef, fileName = "resume" }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) {
      toast.error("Resume not found");
      return;
    }

    try {
      setIsDownloading(true);
      toast.info("Generating PDF... Please wait");

      const element = resumeRef.current;

      // Convert HTML to Canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        imageTimeout: 5000,
      });

      // Get canvas dimensions
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // Create PDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageHeight = 297; // A4 height in mm
      let heightLeft = pdfHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      // Add additional pages if content is longer
      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      // Clean filename
      const cleanFileName = fileName
        .trim()
        .replace(/[^a-z0-9\s]/gi, "")
        .replace(/\s+/g, "_")
        .toLowerCase() || "resume";

      // Save PDF
      pdf.save(`${cleanFileName}.pdf`);

      toast.success("✅ Resume downloaded successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("❌ Failed to download PDF. Check console for details.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleDownloadPDF}
        disabled={isDownloading}
        className="flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-lg shadow-lg hover:shadow-xl cursor-pointer"
      >
        <FiDownload size={20} /> {isDownloading ? 'Generating...' : 'Download PDF'}
      </button>
    </div>
  );
}
