import { useEffect, useState } from "react";
import "./App.css";

import Upload from "./components/Upload";
import UploadedFilesWrapper from "./components/UploadedFilesWrapper";

const App = () => {

  const [allFiles, setAllFiles] = useState([{}]);

  useEffect(() => {
    async function fetchFiles() {
      const response = await axios.get("http://localhost:4000/api/all_files");
      setAllFiles(response);
    }

    fetchFiles();

  }, []);

  return (
    <div className="App">
      <Upload />
      <UploadedFilesWrapper allFiles={allFiles} />
    </div>
  );
};

export default App;