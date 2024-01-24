import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PiPackage } from "react-icons/pi";

const Upload = () => {

    const [uploadFile, setUploadFile] = useState(null);
    console.log(uploadFile);

    async function uploadFileToServer() {
        const response = await axios.get("http://localhost:4000/api/all_files")

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
            <p className="uploadFileName">{uploadFile? uploadFile.name: "No file selected"}</p>
            <div className="uploadBtn">Upload</div>
        </>
    );
};

export default Upload;