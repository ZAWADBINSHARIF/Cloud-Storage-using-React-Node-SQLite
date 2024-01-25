import { useState } from "react";
import axios from 'axios';
import { FaCloudUploadAlt } from "react-icons/fa";
import { PiPackage } from "react-icons/pi";

const Upload = ({ setAllFiles }) => {

    const [uploadFile, setUploadFile] = useState(null);

    async function fetchFiles() {
        const response = await axios.get("http://localhost:4000/api/all_files");
        console.log(response.data.data);
        setAllFiles(response.data.data);
    }

    async function uploadFileToServer() {
        let formData = new FormData();
        formData.append('upload_file', uploadFile);

        try {
            const response = await axios.post("http://localhost:4000/api/upload",
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            console.log(response);
            setUploadFile(null)
            fetchFiles();

        } catch (error) {

            console.log(error);
        }


    }

    return (
        <>
            <div className="uploadContainer">
                <label htmlFor="input_file">
                    {uploadFile === null ?
                        <FaCloudUploadAlt size={150} color="#fff" className="uploadIcon" />
                        :
                        <PiPackage size={150} color="#fff" className="uploadIcon" />
                    }
                </label>
                <input type="file" name="upload_file" id="input_file" onChange={e => setUploadFile(e.target.files[0])} hidden />
            </div>
            <p className="uploadFileName">{uploadFile ? uploadFile.name : "No file selected"}</p>
            <div className="uploadBtn" onClick={() => uploadFileToServer()}>Upload</div>
        </>
    );
};

export default Upload;