import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigate } from "react-router-dom";
function RootLayout() {
  const navigate = useNavigate();
  return (
    <>
      <MainNavigation />
      <main>
        {navigate.state === "Loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
