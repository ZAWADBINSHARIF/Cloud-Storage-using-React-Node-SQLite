import { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";

import Upload from "./components/Upload";
import UploadedFilesWrapper from "./components/UploadedFilesWrapper";

const App = () => {

  const [allFiles, setAllFiles] = useState([]);

  useEffect(() => {
    async function fetchFiles() {
      const response = await axios.get("http://localhost:4000/api/all_files");
      console.log(response.data.data);
      setAllFiles(response.data.data);
    }

    fetchFiles();

  }, []);

  return (
    <div className="App">
      <Upload setAllFiles={setAllFiles} />
      <UploadedFilesWrapper allFiles={allFiles} setAllFiles={setAllFiles} />
    </div>
  );
};

export default App;