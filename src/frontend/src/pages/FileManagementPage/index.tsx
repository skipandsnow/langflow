import FolderSidebarNav from "@/components/folderSidebarComponent";
import { useDeleteFolders } from "@/controllers/API/queries/folders";
import useAlertStore from "@/stores/alertStore";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DropdownButton from "../../components/dropdownButtonComponent";
import PageLayout from "../../components/pageLayout";
import FileManagement from './components/fileManagementComponent';
import {
  MY_COLLECTION_DESC,
  USER_PROJECTS_HEADER,
} from "../../constants/constants";
import { useFolderStore } from "../../stores/foldersStore";
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

export default function FileManagementPage(): JSX.Element {
  const location = useLocation();
  const pathname = location.pathname;
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteFolderModal, setOpenDeleteFolderModal] = useState(false);
  const is_component = pathname === "/components";
  const setFolderToEdit = useFolderStore((state) => state.setFolderToEdit);
  const navigate = useNavigate();

  const setSuccessData = useAlertStore((state) => state.setSuccessData);
  const setErrorData = useAlertStore((state) => state.setErrorData);
  const folderToEdit = useFolderStore((state) => state.folderToEdit);

  const { t } = useTranslation();

  return (
    <>
      <PageLayout
        title="File Management"
        description="File Management"
      >
        <div className="flex h-full w-full space-y-8 md:flex-col lg:flex-row lg:space-x-8 lg:space-y-0">
          <div>
            <FileManagement uploadPath="/api/upload" />
          </div>
        </div>
      </PageLayout>
    </>
  );
}
