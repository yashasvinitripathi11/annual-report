// import React, { useState } from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./DashboardNode.css";

// const DashboardNode = () => {
//   const [sourceSelection, setSourceSelection] = useState("");
//   const [fileOperations, setFileOperations] = useState({
//     describe: false,
//     delete: false,
//   });
//   const [errorMessage, setErrorMessage] = useState("No errors found");
//   const [dashboardPreview, setDashboardPreview] = useState("");
//   const [fileDetails, setFileDetails] = useState([
//     { date: "2024-02-20", author: "System" },
//   ]);

//   const handleSourceChange = (event) => {
//     setSourceSelection(event.target.value);
//   };

//   const handleFileOperationChange = (operation) => {
//     setFileOperations((prev) => ({
//       ...prev,
//       [operation]: !prev[operation],
//     }));
//   };

//   const generateDashboard = () => {
//     if (fileOperations.describe || fileOperations.delete) {
//       setDashboardPreview("Dashboard generated!");
//       setErrorMessage("No errors found");
//     } else {
//       setErrorMessage("Select at least one file operation");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="dashboard-node">
//         <div className="dashboard-node-header">
//           <h2>Dashboard Node</h2>
//           <i className="fas fa-chevron-down"></i>
//         </div>
//         <div>
//           <div className="select-container">
//             <label className="label">Source Selection</label>
//             <select value={sourceSelection} onChange={handleSourceChange}>
//               <option value="">Choose from explorer node</option>
//               <option value="custom">Custom source</option>
//             </select>
//           </div>

//           <div className="file-operations">
//             <label className="label">File Operations</label>
//             <div className="file-operation-label">
//               <input
//                 type="checkbox"
//                 checked={fileOperations.describe}
//                 onChange={() => handleFileOperationChange("describe")}
//               />
//               <span>Describe it</span>
//             </div>
//             <div className="file-operation-label">
//               <input
//                 type="checkbox"
//                 checked={fileOperations.delete}
//                 onChange={() => handleFileOperationChange("delete")}
//               />
//               <span>Delete it</span>
//             </div>
//           </div>

//           <div className="generate-btn-container">
//             <button className="generate-btn" onClick={generateDashboard}>
//               Generate Dashboard
//             </button>
//           </div>

//           <div className="error-message">
//             <i className="fas fa-exclamation-circle"></i>
//             <span>{errorMessage}</span>
//           </div>

//           <div className="preview-box">
//             <p>{dashboardPreview || "Dashboard preview will appear here"}</p>
//           </div>

//           <div className="file-details">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Date</th>
//                   <th>Author</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {fileDetails.map((detail, index) => (
//                   <tr key={index}>
//                     <td>{detail.date}</td>
//                     <td>{detail.author}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardNode;

