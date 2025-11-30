// import { jsPDF } from "jspdf";
// export function downloadPDFAlternative(resumeRef, fileName) {
//   try {
//     const pdf = new jsPDF({
//       orientation: "portrait",
//       unit: "mm",
//       format: "a4",
//     });

//     const element = resumeRef.current;
//     if (!element) return;

//     // Get text content from resume
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");
    
//     // Use a simpler approach - capture as image and add to PDF
//     const width = element.offsetWidth;
//     const height = element.offsetHeight;
    
//     canvas.width = width * 2;
//     canvas.height = height * 2;
    
//     context.scale(2, 2);
//     context.fillStyle = "#ffffff";
//     context.fillRect(0, 0, width, height);
    
//     // Convert to image and add to PDF
//     const img = canvas.toDataURL("image/png");
//     const imgWidth = 210;
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
//     pdf.addImage(img, "PNG", 0, 0, imgWidth, imgHeight);
//     pdf.save(`${fileName}.pdf`);
    
//   } catch (error) {
//     console.error("Alternative download failed:", error);
//   }
// }
