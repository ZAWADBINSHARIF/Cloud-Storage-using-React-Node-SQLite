import UploadedFile from './UploadedFileContainer';

const UploadedFilesWrapper = ({ allFiles }) => {
  return (
    <div className='UploadedFilesWrapper'>
      {Array.isArray(allFiles) ? <h2>No file uploaded</h2> :
        allFiles.map((item) => (
          <UploadedFile key={item.id} name={item.name} />
        ))
      }
    </div>
  );
};

export default UploadedFilesWrapper;
