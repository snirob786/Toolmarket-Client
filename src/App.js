import logo from "./logo.svg";
import "./App.css";
import Header from "./Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Shared/Footer/Footer";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddAReview from "./Pages/Dashboard/AddAReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import "react-toastify/dist/ReactToastify.css";
import Products from "./Pages/Products/Products";
import AllUser from "./Pages/Dashboard/AllUser";
import { ToastContainer } from "react-toastify";
import RequireAdmin from "./Pages/Login/RequireAuth/RequireAdmin";
import RequireNotAdmin from "./Pages/Login/RequireAuth/RequireNotAdmin";
import Payment from "./Pages/Dashboard/Payment";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import AddProduct from "./Pages/Dashboard/AddProduct";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import NotFound from "./Pages/NotFound/NotFound";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route
            path="addreview"
            element={
              <RequireNotAdmin>
                <AddAReview></AddAReview>
              </RequireNotAdmin>
            }
          ></Route>
          <Route
            path="payment/:orderId"
            element={
              <RequireNotAdmin>
                <Payment></Payment>
              </RequireNotAdmin>
            }
          ></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUser></AllUser>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
