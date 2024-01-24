import { IoMdCloudDownload } from "react-icons/io";

const UploadedFileContainer = ({ name }) => {
  return (
    <div className="UploadedContainer">
      <div className="UploadedFile">
        <IoMdCloudDownload size={100} color="#000" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default UploadedFileContainer;