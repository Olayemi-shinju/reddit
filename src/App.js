import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "../src/Navigation/Nav";
import Home from "./Pages/Home";
import SinglePost from "./Pages/SinglePost";
import Sidenav from "./Navigation/Sidenav";
import Post from "./Pages/Post";
import Modal from "./Modal/Modal";
import { useContext } from "react";
import { ToggleClass } from "./Context/Context";
import { CartProvider } from "./Context/Context";
import Profile from "./Pages/Profile";
import Setting from "./Pages/Setting";
import AdminLogin from "./AdminDashboad/AdminLogin";
import AdminSignin from "./AdminDashboad/AdminSignin";
import AdminSideNav from "./AdminDashboad/AdminPage";
import AdminDash from "./AdminDashboad/AdminDash";
import NotFound from "./Pages/NotFound";
import ViewPost from "./AdminDashboad/ViewPost";
import ViewComment from "./AdminDashboad/ViewComment";
import AdminProfile from "./AdminDashboad/AdminProfile";
import AdminSetting from "./AdminDashboad/AdminSetting";
import ViewSinglePost from "./AdminDashboad/ViewSinglePost";
import ViewSingleComment from "./AdminDashboad/ViewSingleComment";
import UpdatePost from "./Pages/UpdatePost";

function App() {
  const { light } = useContext(ToggleClass);
  const location = useLocation();

  return (
    <div className={`${light ? "bg-gray-950" : "bg-white"} pt-7`}>
      {location.pathname !== "/AdminLogin" &&
        location.pathname !== "/AdminDash" &&
        location.pathname !== "/AdminSetting" &&
        location.pathname !== "/AdminProfile" &&
        location.pathname !== "/ViewPost" &&
        location.pathname !== "/ViewComment" &&
        location.pathname !== "/Singlepage" &&
        !location.pathname.includes("/SingleComment/") &&
        !location.pathname.includes("/SinglePost/") &&
        location.pathname !== "/AdminSignin" && (
          <>
            <Nav />
            <Sidenav className="col-span-2 fixed top-0 left-0 w-[23%]" />
          </>
        )}
      <Routes>
        <Route path="/AdminDash" element={<AdminDash />} />
        <Route path="/AdminProfile" element={<AdminProfile />} />
        <Route path="/SinglePost/:id" element={<ViewSinglePost />} />
        <Route path="/SingleComment/:id" element={<ViewSingleComment />} />
        <Route path="/AdminSetting" element={<AdminSetting />} />
        <Route path="/ViewPost" element={<ViewPost />} />
        <Route path="/ViewComment" element={<ViewComment />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminSignin" element={<AdminSignin />} />
        <Route path="/" element={<Home />} />
        <Route path="/Singlepage/:id" element={<SinglePost />} />
        <Route path="/post" element={<Post />} />
        <Route path="/UpdatePost/:id" element={<UpdatePost />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  );
}

export default WrappedApp;
