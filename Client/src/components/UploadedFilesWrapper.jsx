import UploadedFile from './UploadedFileContainer';

const UploadedFilesWrapper = ({ allFiles, setAllFiles }) => {
  return (
    <div className='UploadedFilesWrapper'>
      {allFiles.length == 0 ? <h2>No file uploaded</h2> :
        allFiles.map((item) => (
          <UploadedFile key={item.id} name={item.filename} setAllFiles={setAllFiles} />
        ))
      }
    </div>
  );
};

export default UploadedFilesWrapper;
