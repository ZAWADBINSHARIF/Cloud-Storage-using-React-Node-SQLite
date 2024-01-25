import UploadedFile from './UploadedFileContainer';
import { ImDropbox } from "react-icons/im";

const UploadedFilesWrapper = ({ allFiles, setAllFiles }) => {
  return (
    <div className='UploadedFilesWrapper'>
      {allFiles.length == 0 ?
        <div style={{
          display: 'flex',
          textAlign: 'center',
          gap: '12px',
          flexDirection: 'column'
        }}>
          <ImDropbox size={180} color='#979797' />
          <p>No file uploaded</p>
        </div> :
        allFiles.map((item) => (
          <UploadedFile key={item.id} name={item.filename} setAllFiles={setAllFiles} />
        ))
      }
    </div>
  );
};

export default UploadedFilesWrapper;
