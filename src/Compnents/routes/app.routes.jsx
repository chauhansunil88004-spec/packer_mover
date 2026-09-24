import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../About/About";
import WhyPashupati from "../About/WhyPashupati";
import OurMission from "../About/OurMission";
import OurVision from "../About/OurVision";
import HouseholdShifting from "../services/HouseholdShifting";
import OfficeRelocation from "../services/OfficeRelocation";
import VehicleTransportation from "../services/VehicleTransportation";
import PackingServices from "../services/PackingServices";
import LoadingUnloading from "../services/LoadingUnloading";
import StorageServices from "../services/StorageServices";
import Packing from "../process/Packing";
import Loading from "../process/loading";
import Transportion from "../process/Transportion";
import Unloading from "../process/Unloading";
import Delivery from "../process/delivery";
import Blogs from "../Blogs/Blogs";
import ContactUs from "../ContactUs/ContactUs";
import GetAQuote from "../ContactUs/GetAQuote";
import Enquiry from "../ContactUs/Enquiry";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin/admin";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
<Route path="/why-us" element={<WhyPashupati />} />
<Route path="/mission" element={<OurMission/>} />
<Route path="/vision" element={<OurVision />} />
      <Route
        path="/services/household-shifting"
        element={<HouseholdShifting />}
      />

      <Route
        path="/services/office-relocation"
        element={<OfficeRelocation />}
      />

      <Route
        path="/services/vehicle-transportation"
        element={<VehicleTransportation />}
      />

      <Route
        path="/services/packing"
        element={<PackingServices />}
      />

      <Route
        path="/services/loading-unloading"
        element={<LoadingUnloading />}
      />

      <Route
        path="/services/storage"
        element={<StorageServices />}
      />
      <Route path="/" element={<Navigate to="/packing" replace />} />

      <Route path="/packing" element={<Packing />} />

      <Route path="/loading" element={<Loading />} />

      <Route path="/transportation" element={<Transportion />} />

      <Route path="/unloading" element={<Unloading />} />

      <Route path="/delivery" element={<Delivery />} />

      <Route
        path="*"
        element={<Navigate to="/packing" replace />}
      />
      <Route path="/blog" element={<Blogs/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/quote" element={<GetAQuote/>}/>
      <Route path="/enquiry" element={<Enquiry/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/admin/dashboard" element={<Admin/>}/>




    </Routes>
  );
};

export default AppRoutes;