import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { toast } from "react-toastify";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function DownloadButton({ fileName = "resume" }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    const element = document.getElementById("resume-preview-area");

    if (!element) {
      toast.error("❌ Resume preview not found!");
      return;
    }

    try {
      setIsDownloading(true);
      toast.info("Generating PDF... Please wait");

      // Convert HTML to Canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageHeight = 297; // A4 height in mm
      let heightLeft = pdfHeight;
      let position = 0;

      // First page
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      // Additional pages if needed
      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${fileName || "resume"}.pdf`);

      toast.success("✅ Resume downloaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to download PDF.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownloadPDF}
      disabled={isDownloading}
      className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-lg shadow-lg hover:shadow-xl cursor-pointer"
    >
      <FiDownload size={20} />
      {isDownloading ? "Generating..." : "Download PDF"}
    </button>
  );
}
