import PageLayout from "../../components/pageLayout";
import FileManagement from './components/fileManagementComponent';

export default function FileManagementPage(): JSX.Element {
  
  return (
    <>
      <PageLayout
        title="File Management"
        description="File Management"
      >
        <div className="flex h-full w-full space-y-8 md:flex-col lg:flex-row lg:space-x-8 lg:space-y-0">
          <div>
            <FileManagement />
          </div>
        </div>
      </PageLayout>
    </>
  );
}
