import React from "react";
import { useReactToPrint } from "react-to-print";

export default function DownloadButton({ resumeRef }) {
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div className="text-center mt-4">
      <button
        onClick={handlePrint}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download as PDF
      </button>
    </div>
  );
}
