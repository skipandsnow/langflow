import { useState } from "react";
import NewFlowModal from "../../../../modals/newFlowModal";
import { useTranslation } from "react-i18next";

type EmptyComponentProps = {};

const EmptyComponent = ({}: EmptyComponentProps) => {
  const [openModal, setOpenModal] = useState(false);

  const { t }= useTranslation();

  return (
    <>
      <div className="mt-2 flex w-full items-center justify-center text-center">
        <div className="flex-max-width h-full flex-col">
          <div className="align-center flex w-full justify-center gap-1">
            <span className="text-muted-foreground">
              {t("This folder is empty. New?")}
            </span>
            <span className="transition-colors hover:text-muted-foreground">
              <NewFlowModal open={openModal} setOpen={setOpenModal} />
              <button
                onClick={() => {
                  setOpenModal(true);
                }}
                className="underline"
              >
                {t("Start Here")}
              </button>
            </span>
            <span className="animate-pulse">🚀</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmptyComponent;
