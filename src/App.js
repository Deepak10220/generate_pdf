import React, { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
// import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    photo: null,
    rank: "",
    idNumber: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleDownload = async () => {
    const blob = await pdf(<MyDocument formData={formData} />).toBlob();
    const url = URL.createObjectURL(blob);

    const filename = formData.name
      ? `${formData.name.replace(/[^a-zA-Z0-9]/g, "_")}_info.pdf`
      : "user-info.pdf";

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="App bg-gray-50 min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">User Form</h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="photo" className="text-gray-700 font-medium mb-2">
              Photo:
            </label>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rank" className="text-gray-700 font-medium mb-2">
              Rank:
            </label>
            <select
              name="rank"
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Rank</option>
              <option value="First Rank">First Rank</option>
              <option value="Second Rank">Second Rank</option>
              <option value="Third Rank">Third Rank</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="idNumber"
              className="text-gray-700 font-medium mb-2"
            >
              ID Number:
            </label>
            <input
              type="text"
              name="idNumber"
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter ID Number"
            />
          </div>
        </form>
        <div className="mt-6">
          <button
            onClick={handleDownload}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
