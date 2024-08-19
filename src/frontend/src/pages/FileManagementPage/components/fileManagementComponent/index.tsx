import React from 'react';
import { FileUpload } from 'primereact/fileupload';
import { getURL } from "../../../../controllers/API/helpers/constants"; // Import the getURL function
import { useTranslation } from 'react-i18next';
import 'primereact/resources/themes/saga-blue/theme.css'; // PrimeReact theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const FileManagement: React.FC = () => {

  const { t } = useTranslation();
  
  return (
    <div>
      <h2>{t('File Management')}</h2>
      <FileUpload
        name="files"
        url={`${getURL("FILES")}/data/upload`}
        multiple
        accept=".pdf,.csv,.json,.md"
        maxFileSize={1000000} // 1MB limit for example
        chooseLabel={t('Choose Files')}
        uploadLabel={t('Upload')}
        cancelLabel={t('Cancel')}
      />
    </div>
  );
};

export default FileManagement;
