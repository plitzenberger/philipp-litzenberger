import { Outlet } from "react-router";
import { Header } from "~/components/header";

export const WebsiteLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
