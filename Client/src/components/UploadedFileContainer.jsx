import axios from "axios";
import { IoMdCloudDownload } from "react-icons/io";
import { FaDeleteLeft } from "react-icons/fa6";
import { saveAs } from 'file-saver';

const UploadedFileContainer = ({ name, setAllFiles }) => {

  const fileExt = name.split(".").pop();

  function saveDownloadedFile(responseData) {
    const blob = new Blob([responseData]);
    saveAs(blob, name);
  }

  async function fetchFiles() {
    const response = await axios.get("http://localhost:4000/api/all_files");
    console.log(response.data.data);
    setAllFiles(response.data.data);
  }

  async function removeFile(filename) {
    try {
      const response = await axios.delete(`http://localhost:4000/api/remove/${filename}`);
      console.log(response.data);
      fetchFiles();
    } catch (error) {
      console.log(error);
    }
  }

  async function downloadFile(filename) {
    try {
      const response = await axios.get(`http://localhost:4000/api/download/${filename}`, { responseType: 'blob' });
      await saveDownloadedFile(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="UploadedContainer">
      <div className="UploadedFile" onClick={() => downloadFile(name)}>
        <IoMdCloudDownload size={100} className="DownloadIcon" />
      </div>
      {
        name.length > 25 ?
          <p>{name.substring(0, 25) + "..." + fileExt}</p> :
          <p>{name}</p>
      }
      <FaDeleteLeft size={35} className="DeleteIcon" onClick={() => removeFile(name)} />
    </div>
  );
};

export default UploadedFileContainer;