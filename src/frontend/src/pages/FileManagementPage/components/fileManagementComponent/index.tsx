import React, { useState, useEffect, useContext, useRef } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { Table } from '../../../../components/ui/table';
import { AuthContext } from '../../../../contexts/authContext';
import useAlertStore from '../../../../stores/alertStore';
import { useTranslation } from 'react-i18next';
import { useUploadData } from "@/controllers/API/queries/auth";

const FileManagement: React.FC = () => {
  const [files, setFiles] = useState<string[]>([]);
  const setSuccessData = useAlertStore((state) => state.setSuccessData);
  const setErrorData = useAlertStore((state) => state.setErrorData);
  const { userData } = useContext(AuthContext);
  const { t } = useTranslation();

  const { mutate: uploadData } = useUploadData({
    onSuccess: (data) => {
      setSuccessData(data.message);
      fetchFiles();
    },
    onError: (error) => {
      setErrorData('Error uploading file');
    }
  });

  const { mutate: fetchFiles, isPending } = useGetFiles({
    onSuccess: (data) => {
      setFiles(data.files);
    },
    onError: (error) => {
      setErrorData('Error fetching files');
    }
  });

  useEffect(() => {
    fetchFiles();
  }, []);

  const onUpload = (event: any) => {
    const formData = new FormData();
    for (let file of event.files) {
      formData.append('files', file);
    }
    uploadData(formData);
  };

  const columns = [
    { header: 'File Name', accessor: 'name' },
  ];

  const data = files.map(file => ({ name: file }));

  return (
    <div>
      <h2>{t('File Management')}</h2>
      <FileUpload
        name="files"
        customUpload
        uploadHandler={onUpload}
        multiple
        accept=".pdf,.csv,.json,.md"
        maxFileSize={1000000} // 1MB limit for example
        chooseLabel={t('Choose Files')}
        uploadLabel={t('Upload')}
        cancelLabel={t('Cancel')}
      />
      <Table columns={columns} data={data} />
    </div>
  );
};

export default FileManagement;