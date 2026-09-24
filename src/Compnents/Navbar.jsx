import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About Us",
    dropdown: [
      {
        label: "About Pashupati",
        href: "/about",
      },
      {
        label: "Why Pashupati?",
        href: "/why-us",
      },
      {
        label: "Our Mission",
        href: "/mission",
      },
      {
        label: "Our Vision",
        href: "/vision",
      },
    ],
  },

  {
    label: "Services",
    dropdown: [
      {
        label: "Household Shifting",
        href: "/services/household-shifting",
      },
      {
        label: "Office Relocation",
        href: "/services/office-relocation",
      },
      {
        label: "Vehicle Transportation",
        href: "/services/vehicle-transportation",
      },
      {
        label: "Packing Services",
        href: "/services/packing",
      },
      {
        label: "Loading & Unloading",
        href: "/services/loading-unloading",
      },
      {
        label: "Storage Services",
        href: "/services/storage",
      },
    ],
  },

  {
    label: "Process",
    dropdown: [
      {
        label: "Packing",
        href: "/process/packing",
      },
      {
        label: "Loading",
        href: "/process/loading",
      },
      {
        label: "Transportation",
        href: "/process/transportation",
      },
      {
        label: "Unloading",
        href: "/process/unloading",
      },
      {
        label: "Delivery",
        href: "/process/delivery",
      },
    ],
  },

  {
    label: "Locations",
    dropdown: [
      {
        label: "Kathmandu",
        href: "/locations/kathmandu",
      },
      {
        label: "Pokhara",
        href: "/locations/pokhara",
      },
      {
        label: "Butwal",
        href: "/locations/butwal",
      },
      {
        label: "Bhairahawa",
        href: "/locations/bhairahawa",
      },
      {
        label: "Chitwan",
        href: "/locations/chitwan",
      },
      {
        label: "Biratnagar",
        href: "/locations/biratnagar",
      },
      {
        label: "Nepalgunj",
        href: "/locations/nepalgunj",
      },
      {
        label: "All Nepal",
        href: "/locations",
      },
    ],
  },

  {
    label: "Blog",
    href: "/blog",
  },

  {
    label: "Contact Us",
    dropdown: [
      {
        label: "Contact Us",
        href: "/contact",
      },
      {
        label: "Get a Quote",
        href: "/quote",
      },
      {
        label: "Enquiry",
        href: "/enquiry",
      },
    ],
  },

  {
    label: "Login",
    href: "/login",
  },

  {
    label: "Register",
    href: "/register",
  },

  {
    label: "Admin Dashboard",
    href: "/admin/dashboard",
  },
];

const locations = [
  "All Nepal",
  "Kathmandu",
  "Lalitpur",
  "Bhaktapur",
  "Pokhara",
  "Butwal",
  "Bhairahawa",
  "Chitwan",
  "Nepalgunj",
  "Biratnagar",
  "Dharan",
  "Janakpur",
  "Hetauda",
  "Dhangadhi",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] =
    useState("All Nepal");

  const toggleDropdown = (index) => {
    setActiveDropdown(
      activeDropdown === index ? null : index
    );

    setLocationOpen(false);
  };

  const selectLocation = (location) => {
    setSelectedLocation(location);
    setLocationOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setLocationOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMobileMenu}
        >
          <span className="logo-main">
            Pashupati
          </span>

          <span className="logo-sub">
            PACKERS & MOVERS
          </span>
        </Link>

        <div className="navbar-content">

          <div className="location-wrapper">
            <button
              type="button"
              className="location-button"
              onClick={() => {
                setLocationOpen(!locationOpen);
                setActiveDropdown(null);
              }}
            >
              <MapPin size={18} />

              <span>
                {selectedLocation}
              </span>

              <ChevronDown size={16} />
            </button>

            <div
              className={`location-dropdown ${
                locationOpen ? "show" : ""
              }`}
            >
              {locations.map((location) => (
                <button
                  type="button"
                  key={location}
                  className={`location-item ${
                    selectedLocation === location
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    selectLocation(location)
                  }
                >
                  <MapPin size={15} />

                  <span>
                    {location}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <nav
            className={`nav-menu ${
              mobileOpen ? "open" : ""
            }`}
          >
            {navItems.map((item, index) => (
              <div
                className={`nav-item ${
                  activeDropdown === index
                    ? "active-dropdown"
                    : ""
                }`}
                key={item.label}
              >

                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      className="nav-link dropdown-button"
                      onClick={() =>
                        toggleDropdown(index)
                      }
                    >
                      <span>
                        {item.label}
                      </span>

                      <ChevronDown
                        size={15}
                        className={
                          activeDropdown === index
                            ? "rotate-arrow"
                            : ""
                        }
                      />
                    </button>

                    <div className="dropdown-menu">
                      {item.dropdown.map(
                        (subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="dropdown-link"
                            onClick={
                              closeMobileMenu
                            }
                          >
                            <span>
                              {subItem.label}
                            </span>

                            <ChevronRight
                              size={18}
                            />
                          </Link>
                        )
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`nav-link ${
                      item.label === "Login"
                        ? "login-link"
                        : ""
                    } ${
                      item.label === "Register"
                        ? "register-link"
                        : ""
                    } ${
                      item.label === "Admin Dashboard"
                        ? "admin-link"
                        : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                )}

              </div>
            ))}
          </nav>
        </div>

        <Link
          to="/quote"
          className="quote-button"
          onClick={closeMobileMenu}
        >
          Get a Quote
        </Link>

        <button
          type="button"
          className="mobile-toggle"
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>
    </header>
  );
};

export default Navbar;