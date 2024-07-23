import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import ForwardedIconComponent from "../../components/genericIconComponent";
import PageLayout from "../../components/pageLayout";
import SidebarNav from "../../components/sidebarComponent";
import useFlowsManagerStore from "../../stores/flowsManagerStore";
import { useTranslation } from "react-i18next";

export default function SettingsPage(): JSX.Element {
  const { t } = useTranslation();
  const pathname = location.pathname;
  const setCurrentFlowId = useFlowsManagerStore(
    (state) => state.setCurrentFlowId,
  );
  useEffect(() => {
    setCurrentFlowId("");
  }, [pathname]);

  const sidebarNavItems = [
    {
      title: t("General"),
      href: "/settings/general",
      icon: (
        <ForwardedIconComponent
          name="SlidersHorizontal"
          className="w-4 flex-shrink-0 justify-start stroke-[1.5]"
        />
      ),
    },
    {
      title: t("Global Variables"),
      href: "/settings/global-variables",
      icon: (
        <ForwardedIconComponent
          name="Globe"
          className="w-4 flex-shrink-0 justify-start stroke-[1.5]"
        />
      ),
    },
    {
      title: t("Langflow API"),
      href: "/settings/api-keys",
      icon: (
        <ForwardedIconComponent
          name="Key"
          className="w-4 flex-shrink-0 justify-start stroke-[1.5]"
        />
      ),
    },
    {
      title: t("Shortcuts"),
      href: "/settings/shortcuts",
      icon: (
        <ForwardedIconComponent
          name="Keyboard"
          className="w-4 flex-shrink-0 justify-start stroke-[1.5]"
        />
      ),
    },
    {
      title: t("Messages"),
      href: "/settings/messages",
      icon: (
        <ForwardedIconComponent
          name="MessagesSquare"
          className="w-4 flex-shrink-0 justify-start stroke-[1.5]"
        />
      ),
    },
  ];
  return (
    <PageLayout
      title={t("Settings")}
      description={t("Manage the general settings for Langflow.")}
    >
      <div className="flex h-full w-full space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
        <aside className="flex h-full shrink-0 flex-col space-y-6 lg:w-[20vw]">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex h-full w-full flex-1 flex-col">
          <div className="flex-1 pb-8">
            <Outlet />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
