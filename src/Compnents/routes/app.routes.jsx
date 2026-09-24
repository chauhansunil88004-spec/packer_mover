import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "../pages/Home";

// About
import About from "../About/About";
import WhyPashupati from "../About/WhyPashupati";
import OurMission from "../About/OurMission";
import OurVision from "../About/OurVision";

// Services
import HouseholdShifting from "../services/HouseholdShifting";
import OfficeRelocation from "../services/OfficeRelocation";
import VehicleTransportation from "../services/VehicleTransportation";
import PackingServices from "../services/PackingServices";
import LoadingUnloading from "../services/LoadingUnloading";
import StorageServices from "../services/StorageServices";

// Process
import Packing from "../process/Packing";
import Loading from "../process/loading";
import Transportion from "../process/Transportion";
import Unloading from "../process/Unloading";
import Delivery from "../process/delivery";

// Blogs / Contact
import Blogs from "../Blogs/Blogs";
import ContactUs from "../ContactUs/ContactUs";
import GetAQuote from "../ContactUs/GetAQuote";
import Enquiry from "../ContactUs/Enquiry";

// Auth
import Login from "../pages/Login";
import Register from "../pages/Register";

// Admin
import Admin from "../pages/Admin/admin";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ==================== HOME ==================== */}
      <Route path="/" element={<Home />} />

      {/* ==================== ABOUT ==================== */}
      <Route path="/about" element={<About />} />
      <Route path="/why-us" element={<WhyPashupati />} />
      <Route path="/mission" element={<OurMission />} />
      <Route path="/vision" element={<OurVision />} />

      {/* ==================== SERVICES ==================== */}
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

      {/* ==================== PROCESS ==================== */}
      <Route path="/packing" element={<Packing />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/transportation" element={<Transportion />} />
      <Route path="/unloading" element={<Unloading />} />
      <Route path="/delivery" element={<Delivery />} />

      {/* ==================== BLOG ==================== */}
      <Route path="/blog" element={<Blogs />} />

      {/* ==================== CONTACT ==================== */}
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/quote" element={<GetAQuote />} />
      <Route path="/enquiry" element={<Enquiry />} />

      {/* ==================== AUTH ==================== */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ==================== ADMIN ==================== */}
      <Route path="/admin/dashboard" element={<Admin />} />

      {/* ==================== 404 ==================== */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
};

export default AppRoutes;