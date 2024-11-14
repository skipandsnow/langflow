import { Skeleton } from "@/components/ui/skeleton";
import { Menu, Transition } from "@headlessui/react";
import { ChevronsUpDown } from "lucide-react";
import React from "react";
import { Fragment } from "react/jsx-runtime";
import ExpandMoreIcon from "../../assets/ExpandMoreIcon.svg?react";
import ScienceOutlinedIcon from "../../assets/ScienceOutlinedIcon.svg?react";

export const HeaderMenu = ({ children }) => (
  <Menu as="div" className="relative text-left">
    {children}
  </Menu>
);

export const HeaderMenuToggle = ({ children }) => (
  <Menu.Button className="inline-flex w-full items-center justify-center gap-1 rounded-md px-2 py-2 text-sm font-medium text-white hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
    {children}
    <ChevronsUpDown
      className="text-zinc-500"
      size={"15px"}
      strokeWidth={"2px"}
    />
  </Menu.Button>
);

export const HeaderMenuSelector = ({
  Icon,
  loading,
  children,
  Preview,
}: React.PropsWithChildren<{
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  loading?: boolean;
  Preview?: boolean;
}>) => (
  <Menu.Button className="group inline-flex h-8 w-full items-center justify-center gap-2 rounded-md border border-solid border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 dark:border-zinc-700 dark:hover:bg-zinc-800">
    {Icon ? <Icon className="h-4 w-4 fill-black dark:fill-zinc-400" /> : null}
    {loading ? (
      <Skeleton className="min-w-28 bg-gray-100 text-left">&nbsp;</Skeleton>
    ) : (
      <span className="min-w-0 max-w-48 overflow-x-clip text-ellipsis text-nowrap font-semibold">
        {children}
      </span>
    )}
    {Preview ? (
      <ScienceOutlinedIcon className="h-5 w-6 rounded border bg-zinc-100 fill-gray-500 group-hover:bg-purple-100 group-hover:fill-purple-700 dark:bg-zinc-800 dark:fill-zinc-400 dark:group-hover:bg-purple-500 dark:group-hover:fill-purple-100" />
    ) : null}
    <ExpandMoreIcon className="fill-gray-400 group-hover:fill-black dark:group-hover:fill-zinc-400" />
  </Menu.Button>
);

const BASE_ITEM_STYLES =
  "group flex w-full items-center justify-between h-[46px] rounded-md pl-2 py-2 text-sm text-gray-900 dark:text-[white] dark:hover:bg-zinc-800 hover:bg-gray-100";

export const HeaderMenuItemLink = ({
  href = "#",
  selected = false,
  children,
  newPage = false,
}) => (
  <Menu.Item>
    {({ active }) => (
      <a
        className={`${selected ? "bg-gray-50" : ""} ${BASE_ITEM_STYLES}`}
        href={href}
        {...(newPage ? { rel: "noreferrer", target: "_blank" } : {})}
      >
        {children}
      </a>
    )}
  </Menu.Item>
);

export const HeaderMenuItemButton = ({
  onClick,
  selected = false,
  children,
}) => (
  <Menu.Item>
    {({ active }) => (
      <button
        className={`${selected ? "bg-gray-50 dark:bg-zinc-800" : ""} ${BASE_ITEM_STYLES}`}
        onClick={onClick}
      >
        {children}
      </button>
    )}
  </Menu.Item>
);

export const HeaderMenuItems = ({
  position = "left",
  children,
}: React.PropsWithChildren<{ position?: "left" | "right" }>) => {
  const positionClass = position === "left" ? "left-0" : "right-0";
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        className={`absolute dark:bg-black ${positionClass} z-[999] mt-2 w-[20rem] origin-top-right rounded-md bg-[white] shadow-lg ring-1 ring-black/5 focus:outline-none`}
      >
        {children}
      </Menu.Items>
    </Transition>
  );
};

export const HeaderMenuItemsSection = ({ children }) => (
  <>
    <div className="m-1 p-1">{children}</div>
    <hr className="border-gray-200 last:hidden dark:border-zinc-700" />
  </>
);

export const HeaderMenuItemsTitle = ({
  subTitle,
  children,
}: React.PropsWithChildren<{ subTitle?: React.ReactNode }>) => (
  <header className="group flex w-full flex-col items-start rounded-md rounded-b-none border px-4 py-3">
    <h3 className="text-base font-semibold">{children}</h3>
    {subTitle ? <h4 className="text-sm font-normal">{subTitle}</h4> : null}
  </header>
);
