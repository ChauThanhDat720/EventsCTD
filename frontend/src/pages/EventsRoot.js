import RootLayout from "./RootLayout";

import { Outlet } from "react-router-dom";
function EventsRootLayout() {
  return (
    <>
      <h1>EventsRootLayout</h1>;
      <RootLayout />
      <Outlet />
    </>
  );
}
export default EventsRootLayout;
