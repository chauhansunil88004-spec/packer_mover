// import React, { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Activity,
//   AlertCircle,
//   ArrowDownRight,
//   ArrowUpRight,
//   BarChart3,
//   Bell,
//   Box,
//   Calendar,
//   CalendarDays,
//   CheckCircle2,
//   ChevronDown,
//   ChevronRight,
//   CircleDollarSign,
//   ClipboardList,
//   Clock3,
//   Download,
//   Edit3,
//   Eye,
//   FileText,
//   Filter,
//   LayoutDashboard,
//   LogOut,
//   MapPin,
//   Menu,
//   MessageSquare,
//   MoreHorizontal,
//   Package,
//   Plus,
//   RefreshCw,
//   Search,
//   Settings,
//   ShieldCheck,
//   Truck,
//   User,
//   UserCheck,
//   UserPlus,
//   Users,
//   X,
//   Trash2,
//   Phone,
//   Mail,
//   Star,
//   Navigation,
// } from "lucide-react";
// import "./Admin.css";

// const initialBookings = [
//   {
//     id: "#PSP-10482",
//     customer: "Aarav Sharma",
//     service: "Household Shifting",
//     from: "Kathmandu",
//     to: "Pokhara",
//     date: "26 Aug 2026",
//     amount: 28500,
//     status: "In Transit",
//   },
//   {
//     id: "#PSP-10481",
//     customer: "Suman Thapa",
//     service: "Office Relocation",
//     from: "Lalitpur",
//     to: "Kathmandu",
//     date: "26 Aug 2026",
//     amount: 42000,
//     status: "Confirmed",
//   },
//   {
//     id: "#PSP-10480",
//     customer: "Nisha Gurung",
//     service: "Vehicle Transportation",
//     from: "Kathmandu",
//     to: "Chitwan",
//     date: "25 Aug 2026",
//     amount: 18500,
//     status: "Completed",
//   },
//   {
//     id: "#PSP-10479",
//     customer: "Rajan KC",
//     service: "Packing Services",
//     from: "Bhaktapur",
//     to: "Kathmandu",
//     date: "25 Aug 2026",
//     amount: 12800,
//     status: "Pending",
//   },
//   {
//     id: "#PSP-10478",
//     customer: "Priya Joshi",
//     service: "Household Shifting",
//     from: "Pokhara",
//     to: "Butwal",
//     date: "24 Aug 2026",
//     amount: 31200,
//     status: "Completed",
//   },
// ];

// const initialCustomers = [
//   {
//     id: "CUS-1001",
//     name: "Aarav Sharma",
//     email: "aarav@example.com",
//     phone: "+977 9812345678",
//     location: "Kathmandu",
//     bookings: 8,
//     status: "Active",
//   },
//   {
//     id: "CUS-1002",
//     name: "Suman Thapa",
//     email: "suman@example.com",
//     phone: "+977 9823456789",
//     location: "Lalitpur",
//     bookings: 5,
//     status: "Active",
//   },
//   {
//     id: "CUS-1003",
//     name: "Nisha Gurung",
//     email: "nisha@example.com",
//     phone: "+977 9834567890",
//     location: "Pokhara",
//     bookings: 3,
//     status: "Active",
//   },
//   {
//     id: "CUS-1004",
//     name: "Rajan KC",
//     email: "rajan@example.com",
//     phone: "+977 9845678901",
//     location: "Bhaktapur",
//     bookings: 2,
//     status: "Inactive",
//   },
// ];

// const initialVehicles = [
//   {
//     id: "VEH-001",
//     number: "BA 2 KHA 1234",
//     type: "Mini Truck",
//     driver: "Bikash Rai",
//     location: "Kathmandu",
//     status: "Available",
//   },
//   {
//     id: "VEH-002",
//     number: "BA 3 KHA 5678",
//     type: "Medium Truck",
//     driver: "Suresh Tamang",
//     location: "Pokhara",
//     status: "On Trip",
//   },
//   {
//     id: "VEH-003",
//     number: "BA 4 KHA 9012",
//     type: "Large Truck",
//     driver: "Deepak Gurung",
//     location: "Lalitpur",
//     status: "Maintenance",
//   },
// ];

// const services = [
//   {
//     name: "Household Shifting",
//     description: "Complete residential relocation service",
//     bookings: 428,
//     revenue: "रू 82.4L",
//     active: true,
//   },
//   {
//     name: "Office Relocation",
//     description: "Professional commercial moving solutions",
//     bookings: 216,
//     revenue: "रू 56.8L",
//     active: true,
//   },
//   {
//     name: "Vehicle Transportation",
//     description: "Safe vehicle transportation across Nepal",
//     bookings: 184,
//     revenue: "रू 31.6L",
//     active: true,
//   },
//   {
//     name: "Packing Services",
//     description: "Professional packing and protection",
//     bookings: 151,
//     revenue: "रू 18.2L",
//     active: true,
//   },
//   {
//     name: "Loading & Unloading",
//     description: "Experienced loading and unloading team",
//     bookings: 119,
//     revenue: "रू 12.5L",
//     active: true,
//   },
// ];

// const locations = [
//   {
//     name: "Kathmandu",
//     bookings: 584,
//     customers: 2841,
//     vehicles: 18,
//     status: "Operational",
//   },
//   {
//     name: "Lalitpur",
//     bookings: 248,
//     customers: 1248,
//     vehicles: 9,
//     status: "Operational",
//   },
//   {
//     name: "Pokhara",
//     bookings: 196,
//     customers: 1024,
//     vehicles: 7,
//     status: "Operational",
//   },
//   {
//     name: "Butwal",
//     bookings: 114,
//     customers: 682,
//     vehicles: 5,
//     status: "Operational",
//   },
//   {
//     name: "Chitwan",
//     bookings: 92,
//     customers: 514,
//     vehicles: 4,
//     status: "Operational",
//   },
// ];

// const enquiries = [
//   {
//     id: "ENQ-501",
//     name: "Ramesh Adhikari",
//     subject: "House shifting quotation",
//     location: "Kathmandu",
//     date: "26 Aug 2026",
//     priority: "High",
//     status: "New",
//   },
//   {
//     id: "ENQ-502",
//     name: "Mina Shrestha",
//     subject: "Vehicle transportation",
//     location: "Pokhara",
//     date: "26 Aug 2026",
//     priority: "Medium",
//     status: "In Progress",
//   },
//   {
//     id: "ENQ-503",
//     name: "Anil Karki",
//     subject: "Office relocation",
//     location: "Lalitpur",
//     date: "25 Aug 2026",
//     priority: "Low",
//     status: "Resolved",
//   },
// ];

// const staff = [
//   {
//     name: "Bikash Rai",
//     role: "Operations Manager",
//     email: "bikash@pashupati.com",
//     phone: "+977 9800000001",
//     status: "Active",
//   },
//   {
//     name: "Suresh Tamang",
//     role: "Fleet Manager",
//     email: "suresh@pashupati.com",
//     phone: "+977 9800000002",
//     status: "Active",
//   },
//   {
//     name: "Deepak Gurung",
//     role: "Driver",
//     email: "deepak@pashupati.com",
//     phone: "+977 9800000003",
//     status: "Active",
//   },
//   {
//     name: "Anita KC",
//     role: "Customer Support",
//     email: "anita@pashupati.com",
//     phone: "+977 9800000004",
//     status: "Inactive",
//   },
// ];

// const menuItems = [
//   {
//     title: "Dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Bookings",
//     icon: ClipboardList,
//     count: "12",
//   },
//   {
//     title: "Customers",
//     icon: Users,
//   },
//   {
//     title: "Services",
//     icon: Package,
//   },
//   {
//     title: "Vehicles",
//     icon: Truck,
//   },
//   {
//     title: "Locations",
//     icon: MapPin,
//   },
//   {
//     title: "Enquiries",
//     icon: MessageSquare,
//     count: "5",
//   },
// ];

// const managementItems = [
//   {
//     title: "Staff",
//     icon: UserCheck,
//   },
//   {
//     title: "Reports",
//     icon: BarChart3,
//   },
//   {
//     title: "Settings",
//     icon: Settings,
//   },
// ];

// const stats = [
//   {
//     title: "Total Bookings",
//     value: "1,284",
//     change: "+12.8%",
//     positive: true,
//     icon: ClipboardList,
//   },
//   {
//     title: "Active Moves",
//     value: "186",
//     change: "+8.4%",
//     positive: true,
//     icon: Truck,
//   },
//   {
//     title: "Total Customers",
//     value: "8,942",
//     change: "+14.2%",
//     positive: true,
//     icon: Users,
//   },
//   {
//     title: "Total Revenue",
//     value: "रू 24.8L",
//     change: "-3.2%",
//     positive: false,
//     icon: CircleDollarSign,
//   },
// ];

// const activities = [
//   {
//     icon: UserPlus,
//     title: "New customer registered",
//     text: "Anish Bhandari created an account",
//     time: "8 min ago",
//   },
//   {
//     icon: Package,
//     title: "New booking received",
//     text: "Booking #PSP-10482 was created",
//     time: "24 min ago",
//   },
//   {
//     icon: CheckCircle2,
//     title: "Booking completed",
//     text: "#PSP-10480 marked as completed",
//     time: "1 hour ago",
//   },
//   {
//     icon: MessageSquare,
//     title: "New enquiry",
//     text: "New relocation enquiry received",
//     time: "2 hours ago",
//   },
// ];

// const Admin = () => {
//   const [activeMenu, setActiveMenu] = useState("Dashboard");
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [notificationsOpen, setNotificationsOpen] =
//     useState(false);
//   const [search, setSearch] = useState("");
//   const [bookings, setBookings] =
//     useState(initialBookings);
//   const [customers, setCustomers] =
//     useState(initialCustomers);
//   const [vehicles, setVehicles] =
//     useState(initialVehicles);
//   const [modal, setModal] = useState(null);
//   const [selectedBooking, setSelectedBooking] =
//     useState(null);

//   const filteredBookings = useMemo(() => {
//     const value = search.toLowerCase();

//     return bookings.filter((booking) =>
//       [
//         booking.id,
//         booking.customer,
//         booking.service,
//         booking.from,
//         booking.to,
//         booking.status,
//       ]
//         .join(" ")
//         .toLowerCase()
//         .includes(value)
//     );
//   }, [bookings, search]);

//   const filteredCustomers = useMemo(() => {
//     const value = search.toLowerCase();

//     return customers.filter((customer) =>
//       [
//         customer.id,
//         customer.name,
//         customer.email,
//         customer.phone,
//         customer.location,
//         customer.status,
//       ]
//         .join(" ")
//         .toLowerCase()
//         .includes(value)
//     );
//   }, [customers, search]);

//   const filteredVehicles = useMemo(() => {
//     const value = search.toLowerCase();

//     return vehicles.filter((vehicle) =>
//       [
//         vehicle.id,
//         vehicle.number,
//         vehicle.type,
//         vehicle.driver,
//         vehicle.location,
//         vehicle.status,
//       ]
//         .join(" ")
//         .toLowerCase()
//         .includes(value)
//     );
//   }, [vehicles, search]);

//   const changeSection = (section) => {
//     setActiveMenu(section);
//     setSearch("");
//     setSidebarOpen(false);
//   };

//   const openBooking = (booking) => {
//     setSelectedBooking(booking);
//     setModal("booking");
//   };

//   const addBooking = (event) => {
//     event.preventDefault();

//     const form = new FormData(event.currentTarget);

//     const newBooking = {
//       id: `#PSP-${10500 + bookings.length}`,
//       customer: form.get("customer"),
//       service: form.get("service"),
//       from: form.get("from"),
//       to: form.get("to"),
//       date: form.get("date"),
//       amount: Number(form.get("amount")),
//       status: "Pending",
//     };

//     setBookings((prev) => [newBooking, ...prev]);
//     setModal(null);
//   };

//   const addCustomer = (event) => {
//     event.preventDefault();

//     const form = new FormData(event.currentTarget);

//     const newCustomer = {
//       id: `CUS-${1000 + customers.length + 1}`,
//       name: form.get("name"),
//       email: form.get("email"),
//       phone: form.get("phone"),
//       location: form.get("location"),
//       bookings: 0,
//       status: "Active",
//     };

//     setCustomers((prev) => [newCustomer, ...prev]);
//     setModal(null);
//   };

//   const addVehicle = (event) => {
//     event.preventDefault();

//     const form = new FormData(event.currentTarget);

//     const newVehicle = {
//       id: `VEH-${String(
//         vehicles.length + 1
//       ).padStart(3, "0")}`,
//       number: form.get("number"),
//       type: form.get("type"),
//       driver: form.get("driver"),
//       location: form.get("location"),
//       status: "Available",
//     };

//     setVehicles((prev) => [newVehicle, ...prev]);
//     setModal(null);
//   };

//   const renderStatus = (status) => (
//     <span
//       className={`admin-status ${status
//         .toLowerCase()
//         .replace(/\s+/g, "-")}`}
//     >
//       <i />
//       {status}
//     </span>
//   );

//   const renderDashboard = () => (
//     <>
//       <section className="admin-welcome">
//         <div>
//           <span>Wednesday, 26 August 2026</span>
//           <h2>Good afternoon, Admin 👋</h2>
//           <p>
//             Here's what's happening with your business
//             today.
//           </p>
//         </div>

//         <button
//           className="admin-primary-button"
//           onClick={() => setModal("add-booking")}
//         >
//           <Plus size={17} />
//           New Booking
//         </button>
//       </section>

//       <section className="admin-stats">
//         {stats.map((stat) => {
//           const Icon = stat.icon;

//           return (
//             <article
//               className="admin-stat-card"
//               key={stat.title}
//             >
//               <div className="stat-top">
//                 <div className="stat-icon">
//                   <Icon size={20} />
//                 </div>

//                 <MoreHorizontal size={18} />
//               </div>

//               <span className="stat-title">
//                 {stat.title}
//               </span>

//               <div className="stat-bottom">
//                 <strong>{stat.value}</strong>

//                 <span
//                   className={
//                     stat.positive
//                       ? "stat-positive"
//                       : "stat-negative"
//                   }
//                 >
//                   {stat.positive ? (
//                     <ArrowUpRight size={13} />
//                   ) : (
//                     <ArrowDownRight size={13} />
//                   )}
//                   {stat.change}
//                 </span>
//               </div>

//               <span className="stat-period">
//                 vs last month
//               </span>
//             </article>
//           );
//         })}
//       </section>

//       <section className="admin-main-grid">
//         <div className="admin-panel">
//           <PanelHeader
//             title="Recent Bookings"
//             subtitle="Latest customer bookings and relocations"
//             action="View all"
//             onAction={() => changeSection("Bookings")}
//           />

//           <BookingTable
//             bookings={filteredBookings.slice(0, 5)}
//             onView={openBooking}
//             renderStatus={renderStatus}
//           />
//         </div>

//         <div className="admin-side-panels">
//           <div className="admin-panel">
//             <PanelHeader
//               title="Quick Actions"
//               subtitle="Frequently used actions"
//             />

//             <div className="quick-actions">
//               <QuickAction
//                 icon={<Plus size={17} />}
//                 title="New Booking"
//                 onClick={() => setModal("add-booking")}
//               />

//               <QuickAction
//                 icon={<UserPlus size={17} />}
//                 title="Add Customer"
//                 onClick={() =>
//                   setModal("add-customer")
//                 }
//               />

//               <QuickAction
//                 icon={<Truck size={17} />}
//                 title="Add Vehicle"
//                 onClick={() =>
//                   setModal("add-vehicle")
//                 }
//               />

//               <QuickAction
//                 icon={<CircleDollarSign size={17} />}
//                 title="View Reports"
//                 onClick={() => changeSection("Reports")}
//               />
//             </div>
//           </div>

//           <div className="admin-panel">
//             <PanelHeader
//               title="Recent Activity"
//               subtitle="Latest system activities"
//             />

//             <div className="activity-list">
//               {activities.map((activity, index) => {
//                 const Icon = activity.icon;

//                 return (
//                   <div
//                     className="activity-item"
//                     key={index}
//                   >
//                     <div className="activity-icon">
//                       <Icon size={15} />
//                     </div>

//                     <div className="activity-content">
//                       <strong>
//                         {activity.title}
//                       </strong>
//                       <span>{activity.text}</span>
//                       <small>
//                         <Clock3 size={10} />
//                         {activity.time}
//                       </small>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="admin-bottom-grid">
//         <PerformancePanel />
//         <ServicesPanel />
//       </section>
//     </>
//   );

//   const renderBookings = () => (
//     <PageSection
//       title="Bookings Management"
//       subtitle="Manage all Pashupati Packers & Movers bookings"
//       action={
//         <button
//           className="admin-primary-button"
//           onClick={() => setModal("add-booking")}
//         >
//           <Plus size={17} />
//           Create Booking
//         </button>
//       }
//     >
//       <div className="management-stats">
//         <MiniStat
//           title="Total"
//           value={bookings.length + 1279}
//           icon={<ClipboardList size={18} />}
//         />
//         <MiniStat
//           title="Pending"
//           value={
//             bookings.filter(
//               (item) => item.status === "Pending"
//             ).length + 41
//           }
//           icon={<Clock3 size={18} />}
//         />
//         <MiniStat
//           title="In Transit"
//           value="186"
//           icon={<Truck size={18} />}
//         />
//         <MiniStat
//           title="Completed"
//           value="1,012"
//           icon={<CheckCircle2 size={18} />}
//         />
//       </div>

//       <div className="admin-panel">
//         <Toolbar
//           search={search}
//           setSearch={setSearch}
//           placeholder="Search booking..."
//         />

//         <BookingTable
//           bookings={filteredBookings}
//           onView={openBooking}
//           renderStatus={renderStatus}
//         />
//       </div>
//     </PageSection>
//   );

//   const renderCustomers = () => (
//     <PageSection
//       title="Customer Management"
//       subtitle="Manage customer accounts and booking history"
//       action={
//         <button
//           className="admin-primary-button"
//           onClick={() => setModal("add-customer")}
//         >
//           <UserPlus size={17} />
//           Add Customer
//         </button>
//       }
//     >
//       <div className="management-stats">
//         <MiniStat
//           title="Total Customers"
//           value="8,942"
//           icon={<Users size={18} />}
//         />
//         <MiniStat
//           title="Active"
//           value="8,214"
//           icon={<UserCheck size={18} />}
//         />
//         <MiniStat
//           title="New This Month"
//           value="428"
//           icon={<UserPlus size={18} />}
//         />
//         <MiniStat
//           title="VIP Customers"
//           value="184"
//           icon={<Star size={18} />}
//         />
//       </div>

//       <div className="admin-panel">
//         <Toolbar
//           search={search}
//           setSearch={setSearch}
//           placeholder="Search customers..."
//         />

//         <div className="responsive-table">
//           <table className="advanced-table">
//             <thead>
//               <tr>
//                 <th>Customer</th>
//                 <th>Contact</th>
//                 <th>Location</th>
//                 <th>Bookings</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredCustomers.map((customer) => (
//                 <tr key={customer.id}>
//                   <td>
//                     <div className="person-cell">
//                       <div className="table-avatar">
//                         {customer.name
//                           .split(" ")
//                           .map((n) => n[0])
//                           .join("")
//                           .slice(0, 2)}
//                       </div>

//                       <div>
//                         <strong>{customer.name}</strong>
//                         <span>{customer.id}</span>
//                       </div>
//                     </div>
//                   </td>

//                   <td>
//                     <div className="contact-cell">
//                       <span>
//                         <Mail size={12} />
//                         {customer.email}
//                       </span>
//                       <span>
//                         <Phone size={12} />
//                         {customer.phone}
//                       </span>
//                     </div>
//                   </td>

//                   <td>{customer.location}</td>

//                   <td>
//                     <strong>{customer.bookings}</strong>
//                   </td>

//                   <td>
//                     {renderStatus(customer.status)}
//                   </td>

//                   <td>
//                     <TableActions />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </PageSection>
//   );

//   const renderServices = () => (
//     <PageSection
//       title="Services Management"
//       subtitle="Manage your moving and relocation services"
//       action={
//         <button className="admin-primary-button">
//           <Plus size={17} />
//           Add Service
//         </button>
//       }
//     >
//       <div className="service-management-grid">
//         {services.map((service, index) => (
//           <div
//             className="service-management-card"
//             key={service.name}
//           >
//             <div className="service-card-top">
//               <div className="large-service-icon">
//                 {index === 0 ? (
//                   <HomeIcon />
//                 ) : index === 1 ? (
//                   <Box size={21} />
//                 ) : index === 2 ? (
//                   <Truck size={21} />
//                 ) : (
//                   <Package size={21} />
//                 )}
//               </div>

//               <button>
//                 <MoreHorizontal size={18} />
//               </button>
//             </div>

//             <h3>{service.name}</h3>
//             <p>{service.description}</p>

//             <div className="service-card-data">
//               <div>
//                 <span>Bookings</span>
//                 <strong>{service.bookings}</strong>
//               </div>

//               <div>
//                 <span>Revenue</span>
//                 <strong>{service.revenue}</strong>
//               </div>
//             </div>

//             <div className="service-card-footer">
//               <span className="active-label">
//                 <i />
//                 {service.active
//                   ? "Active"
//                   : "Inactive"}
//               </span>

//               <button>
//                 Manage
//                 <ChevronRight size={14} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </PageSection>
//   );

//   const renderVehicles = () => (
//     <PageSection
//       title="Fleet Management"
//       subtitle="Monitor and manage all transportation vehicles"
//       action={
//         <button
//           className="admin-primary-button"
//           onClick={() => setModal("add-vehicle")}
//         >
//           <Plus size={17} />
//           Add Vehicle
//         </button>
//       }
//     >
//       <div className="management-stats">
//         <MiniStat
//           title="Total Vehicles"
//           value="43"
//           icon={<Truck size={18} />}
//         />
//         <MiniStat
//           title="Available"
//           value="21"
//           icon={<CheckCircle2 size={18} />}
//         />
//         <MiniStat
//           title="On Trip"
//           value="17"
//           icon={<Navigation size={18} />}
//         />
//         <MiniStat
//           title="Maintenance"
//           value="5"
//           icon={<AlertCircle size={18} />}
//         />
//       </div>

//       <div className="vehicle-grid">
//         {filteredVehicles.map((vehicle) => (
//           <div
//             className="vehicle-card"
//             key={vehicle.id}
//           >
//             <div className="vehicle-top">
//               <div className="vehicle-icon">
//                 <Truck size={22} />
//               </div>

//               {renderStatus(vehicle.status)}
//             </div>

//             <span className="vehicle-id">
//               {vehicle.id}
//             </span>

//             <h3>{vehicle.number}</h3>

//             <p>{vehicle.type}</p>

//             <div className="vehicle-details">
//               <span>
//                 <User size={13} />
//                 {vehicle.driver}
//               </span>

//               <span>
//                 <MapPin size={13} />
//                 {vehicle.location}
//               </span>
//             </div>

//             <button className="vehicle-manage">
//               Manage Vehicle
//               <ChevronRight size={14} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </PageSection>
//   );

//   const renderLocations = () => (
//     <PageSection
//       title="Location Management"
//       subtitle="Monitor operations across Nepal"
//       action={
//         <button className="admin-primary-button">
//           <Plus size={17} />
//           Add Location
//         </button>
//       }
//     >
//       <div className="location-overview">
//         {locations.map((location) => (
//           <div
//             className="location-card"
//             key={location.name}
//           >
//             <div className="location-card-top">
//               <div className="location-large-icon">
//                 <MapPin size={21} />
//               </div>

//               {renderStatus(location.status)}
//             </div>

//             <h3>{location.name}</h3>

//             <div className="location-metrics">
//               <div>
//                 <strong>{location.bookings}</strong>
//                 <span>Bookings</span>
//               </div>

//               <div>
//                 <strong>
//                   {location.customers.toLocaleString()}
//                 </strong>
//                 <span>Customers</span>
//               </div>

//               <div>
//                 <strong>{location.vehicles}</strong>
//                 <span>Vehicles</span>
//               </div>
//             </div>

//             <button>
//               View Location
//               <ArrowUpRight size={14} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </PageSection>
//   );

//   const renderEnquiries = () => (
//     <PageSection
//       title="Customer Enquiries"
//       subtitle="Track and respond to customer enquiries"
//       action={
//         <button className="admin-secondary-button">
//           <Download size={16} />
//           Export
//         </button>
//       }
//     >
//       <div className="management-stats">
//         <MiniStat
//           title="Total Enquiries"
//           value="584"
//           icon={<MessageSquare size={18} />}
//         />
//         <MiniStat
//           title="New"
//           value="24"
//           icon={<AlertCircle size={18} />}
//         />
//         <MiniStat
//           title="In Progress"
//           value="48"
//           icon={<Activity size={18} />}
//         />
//         <MiniStat
//           title="Resolved"
//           value="512"
//           icon={<CheckCircle2 size={18} />}
//         />
//       </div>

//       <div className="admin-panel">
//         <Toolbar
//           search={search}
//           setSearch={setSearch}
//           placeholder="Search enquiries..."
//         />

//         <div className="responsive-table">
//           <table className="advanced-table">
//             <thead>
//               <tr>
//                 <th>Enquiry</th>
//                 <th>Customer</th>
//                 <th>Location</th>
//                 <th>Date</th>
//                 <th>Priority</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {enquiries
//                 .filter((item) =>
//                   Object.values(item)
//                     .join(" ")
//                     .toLowerCase()
//                     .includes(search.toLowerCase())
//                 )
//                 .map((item) => (
//                   <tr key={item.id}>
//                     <td>
//                       <strong>{item.id}</strong>
//                       <span className="table-muted">
//                         {item.subject}
//                       </span>
//                     </td>

//                     <td>{item.name}</td>
//                     <td>{item.location}</td>
//                     <td>{item.date}</td>

//                     <td>
//                       <span
//                         className={`priority ${item.priority.toLowerCase()}`}
//                       >
//                         {item.priority}
//                       </span>
//                     </td>

//                     <td>
//                       {renderStatus(item.status)}
//                     </td>

//                     <td>
//                       <TableActions />
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </PageSection>
//   );

//   const renderStaff = () => (
//     <PageSection
//       title="Staff Management"
//       subtitle="Manage employees, drivers and administrators"
//       action={
//         <button className="admin-primary-button">
//           <UserPlus size={17} />
//           Add Staff
//         </button>
//       }
//     >
//       <div className="staff-grid">
//         {staff.map((member) => (
//           <div className="staff-card" key={member.email}>
//             <div className="staff-card-top">
//               <div className="staff-avatar">
//                 {member.name
//                   .split(" ")
//                   .map((n) => n[0])
//                   .join("")
//                   .slice(0, 2)}
//               </div>

//               {renderStatus(member.status)}
//             </div>

//             <h3>{member.name}</h3>
//             <span className="staff-role">
//               {member.role}
//             </span>

//             <div className="staff-contact">
//               <span>
//                 <Mail size={13} />
//                 {member.email}
//               </span>

//               <span>
//                 <Phone size={13} />
//                 {member.phone}
//               </span>
//             </div>

//             <div className="staff-actions">
//               <button>
//                 <Edit3 size={14} />
//                 Edit
//               </button>

//               <button>
//                 <Eye size={14} />
//                 Profile
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </PageSection>
//   );

//   const renderReports = () => (
//     <PageSection
//       title="Reports & Analytics"
//       subtitle="Business performance, revenue and operational insights"
//       action={
//         <button className="admin-secondary-button">
//           <Download size={16} />
//           Export Report
//         </button>
//       }
//     >
//       <div className="report-summary-grid">
//         <ReportCard
//           title="Monthly Revenue"
//           value="रू 24.8L"
//           change="+18.4%"
//           icon={<CircleDollarSign size={19} />}
//         />

//         <ReportCard
//           title="Total Bookings"
//           value="1,284"
//           change="+12.8%"
//           icon={<ClipboardList size={19} />}
//         />

//         <ReportCard
//           title="Avg. Booking Value"
//           value="रू 19,320"
//           change="+7.2%"
//           icon={<BarChart3 size={19} />}
//         />

//         <ReportCard
//           title="Customer Growth"
//           value="14.2%"
//           change="+4.8%"
//           icon={<Users size={19} />}
//         />
//       </div>

//       <div className="reports-grid">
//         <PerformancePanel />
//         <div className="admin-panel report-insights">
//           <PanelHeader
//             title="Key Insights"
//             subtitle="Business intelligence summary"
//           />

//           <div className="insight-list">
//             <Insight
//               icon={<ArrowUpRight size={16} />}
//               title="Bookings increased"
//               text="Bookings are 12.8% higher than last month."
//             />

//             <Insight
//               icon={<Users size={16} />}
//               title="Customer growth"
//               text="428 new customers joined this month."
//             />

//             <Insight
//               icon={<Truck size={16} />}
//               title="Fleet utilization"
//               text="Current fleet utilization is 82%."
//             />

//             <Insight
//               icon={<AlertCircle size={16} />}
//               title="Pending enquiries"
//               text="24 enquiries require immediate attention."
//             />
//           </div>
//         </div>
//       </div>
//     </PageSection>
//   );

//   const renderSettings = () => (
//     <PageSection
//       title="System Settings"
//       subtitle="Configure your admin panel and business preferences"
//     >
//       <div className="settings-layout">
//         <div className="settings-nav">
//           {[
//             "General",
//             "Business Profile",
//             "Notifications",
//             "Security",
//             "Payment",
//             "Email",
//           ].map((item, index) => (
//             <button
//               className={index === 0 ? "active" : ""}
//               key={item}
//             >
//               {item}
//               <ChevronRight size={15} />
//             </button>
//           ))}
//         </div>

//         <div className="admin-panel settings-panel">
//           <div className="settings-heading">
//             <div>
//               <h3>General Settings</h3>
//               <p>
//                 Manage basic platform preferences.
//               </p>
//             </div>
//           </div>

//           <div className="settings-form">
//             <SettingInput
//               label="Company Name"
//               value="Pashupati Packers & Movers"
//             />

//             <SettingInput
//               label="Support Email"
//               value="support@pashupati.com"
//             />

//             <SettingInput
//               label="Phone Number"
//               value="+977 9800000000"
//             />

//             <SettingInput
//               label="Default Currency"
//               value="NPR - Nepalese Rupee"
//             />

//             <div className="setting-toggle">
//               <div>
//                 <strong>Email Notifications</strong>
//                 <span>
//                   Receive notifications for new bookings.
//                 </span>
//               </div>

//               <button className="toggle active">
//                 <span />
//               </button>
//             </div>

//             <div className="setting-toggle">
//               <div>
//                 <strong>Booking Alerts</strong>
//                 <span>
//                   Get alerts when booking status changes.
//                 </span>
//               </div>

//               <button className="toggle active">
//                 <span />
//               </button>
//             </div>

//             <div className="settings-actions">
//               <button className="admin-secondary-button">
//                 Cancel
//               </button>

//               <button className="admin-primary-button">
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </PageSection>
//   );

//   const renderContent = () => {
//     switch (activeMenu) {
//       case "Bookings":
//         return renderBookings();

//       case "Customers":
//         return renderCustomers();

//       case "Services":
//         return renderServices();

//       case "Vehicles":
//         return renderVehicles();

//       case "Locations":
//         return renderLocations();

//       case "Enquiries":
//         return renderEnquiries();

//       case "Staff":
//         return renderStaff();

//       case "Reports":
//         return renderReports();

//       case "Settings":
//         return renderSettings();

//       default:
//         return renderDashboard();
//     }
//   };

//   return (
//     <div className="admin-dashboard">

//       {sidebarOpen && (
//         <div
//           className="admin-overlay"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <aside
//         className={`admin-sidebar ${
//           sidebarOpen ? "sidebar-open" : ""
//         }`}
//       >
//         <div className="admin-sidebar-top">
//           <Link to="/" className="admin-logo">
//             <div className="admin-logo-icon">P</div>

//             <div>
//               <strong>Pashupati</strong>
//               <span>PACKERS & MOVERS</span>
//             </div>
//           </Link>

//           <button
//             className="admin-mobile-close"
//             onClick={() => setSidebarOpen(false)}
//           >
//             <X size={21} />
//           </button>
//         </div>

//         <div className="admin-profile-mini">
//           <div className="admin-avatar">AD</div>

//           <div>
//             <strong>Admin User</strong>
//             <span>Super Administrator</span>
//           </div>

//           <i className="online-dot" />
//         </div>

//         <nav className="admin-navigation">

//           <span className="navigation-title">
//             MAIN MENU
//           </span>

//           {menuItems.map((item) => {
//             const Icon = item.icon;

//             return (
//               <button
//                 key={item.title}
//                 className={`admin-nav-item ${
//                   activeMenu === item.title
//                     ? "active"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   changeSection(item.title)
//                 }
//               >
//                 <Icon size={18} />

//                 <span>{item.title}</span>

//                 {item.count && (
//                   <b>{item.count}</b>
//                 )}

//                 {activeMenu === item.title && (
//                   <ChevronRight size={15} />
//                 )}
//               </button>
//             );
//           })}

//           <span className="navigation-title management-title">
//             MANAGEMENT
//           </span>

//           {managementItems.map((item) => {
//             const Icon = item.icon;

//             return (
//               <button
//                 key={item.title}
//                 className={`admin-nav-item ${
//                   activeMenu === item.title
//                     ? "active"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   changeSection(item.title)
//                 }
//               >
//                 <Icon size={18} />

//                 <span>{item.title}</span>

//                 {activeMenu === item.title && (
//                   <ChevronRight size={15} />
//                 )}
//               </button>
//             );
//           })}
//         </nav>

//         <div className="admin-sidebar-bottom">
//           <div className="admin-security-card">
//             <div className="security-icon">
//               <ShieldCheck size={18} />
//             </div>

//             <div>
//               <strong>System Secure</strong>
//               <span>All systems operational</span>
//             </div>
//           </div>

//           <button
//             className="admin-logout"
//             onClick={() => setModal("logout")}
//           >
//             <LogOut size={17} />
//             Logout
//           </button>
//         </div>
//       </aside>

//       <main className="admin-main">

//         <header className="admin-header">

//           <div className="admin-header-left">
//             <button
//               className="admin-menu-toggle"
//               onClick={() => setSidebarOpen(true)}
//             >
//               <Menu size={21} />
//             </button>

//             <div>
//               <span className="admin-header-label">
//                 ADMINISTRATION
//               </span>

//               <h1>{activeMenu}</h1>
//             </div>
//           </div>

//           <div className="admin-header-right">

//             <div className="admin-search">
//               <Search size={17} />

//               <input
//                 value={search}
//                 onChange={(event) =>
//                   setSearch(event.target.value)
//                 }
//                 placeholder={`Search ${activeMenu.toLowerCase()}...`}
//               />
//             </div>

//             <div className="notification-wrapper">
//               <button
//                 className="admin-notification"
//                 onClick={() =>
//                   setNotificationsOpen(
//                     !notificationsOpen
//                   )
//                 }
//               >
//                 <Bell size={19} />
//                 <span />
//               </button>

//               {notificationsOpen && (
//                 <div className="notification-panel">
//                   <div className="notification-header">
//                     <strong>Notifications</strong>
//                     <span>4 new</span>
//                   </div>

//                   <div className="notification-item">
//                     <div>
//                       <Package size={15} />
//                     </div>
//                     <span>
//                       New booking #PSP-10482 received.
//                     </span>
//                   </div>

//                   <div className="notification-item">
//                     <div>
//                       <MessageSquare size={15} />
//                     </div>
//                     <span>
//                       New customer enquiry received.
//                     </span>
//                   </div>

//                   <div className="notification-item">
//                     <div>
//                       <Truck size={15} />
//                     </div>
//                     <span>
//                       Vehicle BA 3 KHA 5678 is on trip.
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div className="admin-user-wrapper">
//               <button
//                 className="admin-user-button"
//                 onClick={() =>
//                   setProfileOpen(!profileOpen)
//                 }
//               >
//                 <div className="admin-header-avatar">
//                   AD
//                 </div>

//                 <div className="admin-user-info">
//                   <strong>Admin User</strong>
//                   <span>Administrator</span>
//                 </div>

//                 <ChevronDown size={15} />
//               </button>

//               {profileOpen && (
//                 <div className="admin-profile-menu">
//                   <button
//                     onClick={() =>
//                       changeSection("Settings")
//                     }
//                   >
//                     <User size={16} />
//                     My Profile
//                   </button>

//                   <button
//                     onClick={() =>
//                       changeSection("Settings")
//                     }
//                   >
//                     <Settings size={16} />
//                     Account Settings
//                   </button>

//                   <button
//                     onClick={() => setModal("logout")}
//                   >
//                     <LogOut size={16} />
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </header>

//         <div className="admin-content">
//           {renderContent()}
//         </div>
//       </main>

//       {modal === "add-booking" && (
//         <Modal
//           title="Create New Booking"
//           subtitle="Add a new customer booking"
//           onClose={() => setModal(null)}
//         >
//           <form
//             className="admin-form"
//             onSubmit={addBooking}
//           >
//             <FormField
//               label="Customer Name"
//               name="customer"
//               placeholder="Enter customer name"
//               required
//             />

//             <div className="form-row">
//               <FormField
//                 label="From"
//                 name="from"
//                 placeholder="Kathmandu"
//                 required
//               />

//               <FormField
//                 label="To"
//                 name="to"
//                 placeholder="Pokhara"
//                 required
//               />
//             </div>

//             <div className="form-row">
//               <FormField
//                 label="Service"
//                 name="service"
//                 type="select"
//                 options={[
//                   "Household Shifting",
//                   "Office Relocation",
//                   "Vehicle Transportation",
//                   "Packing Services",
//                   "Loading & Unloading",
//                 ]}
//               />

//               <FormField
//                 label="Amount"
//                 name="amount"
//                 type="number"
//                 placeholder="25000"
//                 required
//               />
//             </div>

//             <FormField
//               label="Moving Date"
//               name="date"
//               type="date"
//               required
//             />

//             <ModalActions
//               onCancel={() => setModal(null)}
//               submit="Create Booking"
//             />
//           </form>
//         </Modal>
//       )}

//       {modal === "add-customer" && (
//         <Modal
//           title="Add Customer"
//           subtitle="Create a new customer account"
//           onClose={() => setModal(null)}
//         >
//           <form
//             className="admin-form"
//             onSubmit={addCustomer}
//           >
//             <FormField
//               label="Full Name"
//               name="name"
//               placeholder="Customer name"
//               required
//             />

//             <FormField
//               label="Email"
//               name="email"
//               type="email"
//               placeholder="customer@example.com"
//               required
//             />

//             <FormField
//               label="Phone"
//               name="phone"
//               placeholder="+977 98XXXXXXXX"
//               required
//             />

//             <FormField
//               label="Location"
//               name="location"
//               placeholder="Kathmandu"
//               required
//             />

//             <ModalActions
//               onCancel={() => setModal(null)}
//               submit="Create Customer"
//             />
//           </form>
//         </Modal>
//       )}

//       {modal === "add-vehicle" && (
//         <Modal
//           title="Add Vehicle"
//           subtitle="Register a new company vehicle"
//           onClose={() => setModal(null)}
//         >
//           <form
//             className="admin-form"
//             onSubmit={addVehicle}
//           >
//             <FormField
//               label="Vehicle Number"
//               name="number"
//               placeholder="BA 2 KHA 1234"
//               required
//             />

//             <FormField
//               label="Vehicle Type"
//               name="type"
//               type="select"
//               options={[
//                 "Mini Truck",
//                 "Medium Truck",
//                 "Large Truck",
//                 "Container Truck",
//               ]}
//             />

//             <FormField
//               label="Driver"
//               name="driver"
//               placeholder="Driver name"
//               required
//             />

//             <FormField
//               label="Current Location"
//               name="location"
//               placeholder="Kathmandu"
//               required
//             />

//             <ModalActions
//               onCancel={() => setModal(null)}
//               submit="Add Vehicle"
//             />
//           </form>
//         </Modal>
//       )}

//       {modal === "booking" && selectedBooking && (
//         <Modal
//           title="Booking Details"
//           subtitle={selectedBooking.id}
//           onClose={() => setModal(null)}
//         >
//           <div className="booking-detail-modal">

//             <div className="detail-status">
//               {renderStatus(selectedBooking.status)}
//             </div>

//             <div className="booking-detail-grid">
//               <Detail
//                 label="Customer"
//                 value={selectedBooking.customer}
//               />

//               <Detail
//                 label="Service"
//                 value={selectedBooking.service}
//               />

//               <Detail
//                 label="From"
//                 value={selectedBooking.from}
//               />

//               <Detail
//                 label="To"
//                 value={selectedBooking.to}
//               />

//               <Detail
//                 label="Moving Date"
//                 value={selectedBooking.date}
//               />

//               <Detail
//                 label="Amount"
//                 value={`रू ${selectedBooking.amount.toLocaleString()}`}
//               />
//             </div>

//             <div className="modal-footer">
//               <button
//                 className="admin-secondary-button"
//                 onClick={() => setModal(null)}
//               >
//                 Close
//               </button>

//               <button className="admin-primary-button">
//                 <Edit3 size={15} />
//                 Edit Booking
//               </button>
//             </div>
//           </div>
//         </Modal>
//       )}

//       {modal === "logout" && (
//         <Modal
//           title="Logout"
//           subtitle="Are you sure you want to logout?"
//           onClose={() => setModal(null)}
//         >
//           <div className="logout-confirm">
//             <div className="logout-warning">
//               <LogOut size={22} />
//             </div>

//             <p>
//               Your current admin session will be ended.
//             </p>

//             <div className="modal-footer">
//               <button
//                 className="admin-secondary-button"
//                 onClick={() => setModal(null)}
//               >
//                 Cancel
//               </button>

//               <Link
//                 to="/login"
//                 className="admin-danger-button"
//               >
//                 Logout
//               </Link>
//             </div>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// const PanelHeader = ({
//   title,
//   subtitle,
//   action,
//   onAction,
// }) => (
//   <div className="panel-header">
//     <div>
//       <h3>{title}</h3>
//       <span>{subtitle}</span>
//     </div>

//     {action && (
//       <button
//         className="panel-action"
//         onClick={onAction}
//       >
//         {action}
//         <ArrowUpRight size={14} />
//       </button>
//     )}
//   </div>
// );

// const PageSection = ({
//   title,
//   subtitle,
//   action,
//   children,
// }) => (
//   <section className="admin-page-section">
//     <div className="page-title-row">
//       <div>
//         <span className="page-kicker">
//           PASHUPATI ADMIN
//         </span>

//         <h2>{title}</h2>

//         <p>{subtitle}</p>
//       </div>

//       {action}
//     </div>

//     {children}
//   </section>
// );

// const Toolbar = ({
//   search,
//   setSearch,
//   placeholder,
// }) => (
//   <div className="admin-toolbar">
//     <div className="toolbar-search">
//       <Search size={16} />

//       <input
//         value={search}
//         onChange={(event) =>
//           setSearch(event.target.value)
//         }
//         placeholder={placeholder}
//       />
//     </div>

//     <div className="toolbar-actions">
//       <button>
//         <Filter size={15} />
//         Filter
//       </button>

//       <button>
//         <RefreshCw size={15} />
//         Refresh
//       </button>

//       <button>
//         <Download size={15} />
//         Export
//       </button>
//     </div>
//   </div>
// );

// const BookingTable = ({
//   bookings,
//   onView,
//   renderStatus,
// }) => (
//   <div className="responsive-table">
//     <table className="advanced-table">
//       <thead>
//         <tr>
//           <th>Booking</th>
//           <th>Customer</th>
//           <th>Route</th>
//           <th>Date</th>
//           <th>Amount</th>
//           <th>Status</th>
//           <th>Action</th>
//         </tr>
//       </thead>

//       <tbody>
//         {bookings.map((booking) => (
//           <tr key={booking.id}>
//             <td>
//               <strong>{booking.id}</strong>
//               <span className="table-muted">
//                 {booking.service}
//               </span>
//             </td>

//             <td>
//               <div className="person-cell">
//                 <div className="table-avatar">
//                   {booking.customer
//                     .split(" ")
//                     .map((n) => n[0])
//                     .join("")
//                     .slice(0, 2)}
//                 </div>

//                 <strong>{booking.customer}</strong>
//               </div>
//             </td>

//             <td>
//               <div className="route-modern">
//                 <span>{booking.from}</span>
//                 <ChevronRight size={13} />
//                 <span>{booking.to}</span>
//               </div>
//             </td>

//             <td>
//               <span className="date-modern">
//                 <CalendarDays size={13} />
//                 {booking.date}
//               </span>
//             </td>

//             <td>
//               <strong>
//                 रू {booking.amount.toLocaleString()}
//               </strong>
//             </td>

//             <td>{renderStatus(booking.status)}</td>

//             <td>
//               <button
//                 className="table-view-button"
//                 onClick={() => onView(booking)}
//               >
//                 <Eye size={15} />
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>

//     {bookings.length === 0 && (
//       <div className="empty-state">
//         <Search size={25} />
//         <strong>No results found</strong>
//         <span>
//           Try using a different search keyword.
//         </span>
//       </div>
//     )}
//   </div>
// );

// const QuickAction = ({
//   icon,
//   title,
//   onClick,
// }) => (
//   <button
//     className="quick-action-row"
//     onClick={onClick}
//   >
//     <div className="quick-icon">{icon}</div>

//     <span>{title}</span>

//     <ChevronRight size={15} />
//   </button>
// );

// const MiniStat = ({ title, value, icon }) => (
//   <div className="mini-stat">
//     <div className="mini-stat-icon">{icon}</div>

//     <div>
//       <span>{title}</span>
//       <strong>{value}</strong>
//     </div>
//   </div>
// );

// const PerformancePanel = () => (
//   <div className="admin-panel performance-panel">
//     <PanelHeader
//       title="Business Performance"
//       subtitle="Booking overview for this month"
//     />

//     <div className="performance-chart">
//       <div className="chart-y-axis">
//         <span>300</span>
//         <span>240</span>
//         <span>180</span>
//         <span>120</span>
//         <span>60</span>
//         <span>0</span>
//       </div>

//       <div className="chart-area">
//         {[0, 25, 50, 75, 100].map((item) => (
//           <div
//             className="chart-grid-line"
//             style={{ top: `${item}%` }}
//             key={item}
//           />
//         ))}

//         <div className="chart-bars">
//           {[42, 55, 48, 72, 63, 80, 69, 88, 74, 94, 82, 100].map(
//             (height, index) => (
//               <div className="chart-bar" key={index}>
//                 <span
//                   style={{
//                     height: `${height}%`,
//                   }}
//                 />

//                 <small>{index + 1}</small>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const ServicesPanel = () => (
//   <div className="admin-panel service-panel">
//     <PanelHeader
//       title="Top Services"
//       subtitle="Most requested services"
//     />

//     <div className="service-list">
//       {[
//         ["Household Shifting", "82%"],
//         ["Office Relocation", "67%"],
//         ["Vehicle Transportation", "54%"],
//         ["Packing Services", "41%"],
//       ].map(([name, percentage], index) => (
//         <div className="service-row" key={name}>
//           <div className="service-number">
//             0{index + 1}
//           </div>

//           <div className="service-info">
//             <strong>{name}</strong>

//             <div className="service-progress">
//               <span
//                 style={{
//                   width: percentage,
//                 }}
//               />
//             </div>
//           </div>

//           <strong>{percentage}</strong>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const ReportCard = ({
//   title,
//   value,
//   change,
//   icon,
// }) => (
//   <div className="report-card">
//     <div className="report-card-icon">{icon}</div>

//     <span>{title}</span>

//     <strong>{value}</strong>

//     <small>
//       <ArrowUpRight size={12} />
//       {change} this month
//     </small>
//   </div>
// );

// const Insight = ({ icon, title, text }) => (
//   <div className="insight-item">
//     <div className="insight-icon">{icon}</div>

//     <div>
//       <strong>{title}</strong>
//       <span>{text}</span>
//     </div>
//   </div>
// );

// const TableActions = () => (
//   <div className="table-actions">
//     <button>
//       <Eye size={14} />
//     </button>

//     <button>
//       <Edit3 size={14} />
//     </button>

//     <button>
//       <MoreHorizontal size={14} />
//     </button>
//   </div>
// );

// const FormField = ({
//   label,
//   name,
//   type = "text",
//   placeholder,
//   options,
//   required,
// }) => (
//   <label className="form-field">
//     <span>{label}</span>

//     {type === "select" ? (
//       <select name={name} required={required}>
//         {options.map((option) => (
//           <option key={option}>{option}</option>
//         ))}
//       </select>
//     ) : (
//       <input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         required={required}
//       />
//     )}
//   </label>
// );

// const Modal = ({
//   title,
//   subtitle,
//   children,
//   onClose,
// }) => (
//   <div className="modal-overlay" onMouseDown={onClose}>
//     <div
//       className="admin-modal"
//       onMouseDown={(event) =>
//         event.stopPropagation()
//       }
//     >
//       <div className="modal-header">
//         <div>
//           <h3>{title}</h3>
//           <span>{subtitle}</span>
//         </div>

//         <button onClick={onClose}>
//           <X size={18} />
//         </button>
//       </div>

//       <div className="modal-body">{children}</div>
//     </div>
//   </div>
// );

// const ModalActions = ({
//   onCancel,
//   submit,
// }) => (
//   <div className="modal-footer">
//     <button
//       type="button"
//       className="admin-secondary-button"
//       onClick={onCancel}
//     >
//       Cancel
//     </button>

//     <button
//       type="submit"
//       className="admin-primary-button"
//     >
//       <CheckCircle2 size={15} />
//       {submit}
//     </button>
//   </div>
// );

// const Detail = ({ label, value }) => (
//   <div className="detail-box">
//     <span>{label}</span>
//     <strong>{value}</strong>
//   </div>
// );

// const SettingInput = ({ label, value }) => (
//   <label className="setting-input">
//     <span>{label}</span>
//     <input defaultValue={value} />
//   </label>
// );

// const HomeIcon = () => (
//   <Box size={21} />
// );

// export default Admin;
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Activity,
  AlertCircle,
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Box,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  Clock3,
  Download,
  Edit3,
  Eye,
  Filter,
  LayoutDashboard,
  LogOut,
  MapPin,
  Menu,
  MessageSquare,
  MoreHorizontal,
  Package,
  Plus,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  Truck,
  User,
  UserCheck,
  UserPlus,
  Users,
  X,
  Phone,
  Mail,
  Star,
  Navigation,
} from "lucide-react";
import "./Admin.css";

/* =========================================================
   API CONFIG
========================================================= */

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

/* =========================================================
   API HELPER (hardened)
   - surfaces network/CORS failures instead of swallowing them
   - extracts real validation messages from common error shapes:
     { message }, { error }, { errors: [{msg}] }, { errors: {field: msg} }
========================================================= */

// Custom error carrying the HTTP status, so callers (e.g. loadData)
// can tell a 401 "not logged in" failure apart from a generic error
// instead of only having a string message to guess from.
class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

const getToken = () => {
  const token =
    localStorage.getItem("token") ||
    localStorage.getItem("accessToken") ||
    localStorage.getItem("adminToken") ||
    "";

  if (!token && typeof window !== "undefined") {
    // Helps diagnose a key-name mismatch between Login.jsx and here —
    // e.g. login saves "authToken" but this file only checks "token".
    console.warn(
      "[getToken] No token found under 'token' / 'accessToken' / 'adminToken'. " +
        "Current localStorage keys:",
      Object.keys(localStorage),
    );
  }

  return token;
};

// Decodes a JWT's payload WITHOUT verifying the signature — this is only
// for local debugging (to see what role/permissions claim the backend
// issued), never use this to trust the token client-side.
const debugDecodeJwtPayload = (token) => {
  try {
    const parts = token.split(".");

    if (parts.length !== 3) {
      console.warn(
        "[debugDecodeJwtPayload] Token doesn't look like a JWT (expected 3 dot-separated parts). " +
          "If your backend issues opaque/session tokens instead of JWTs, this check doesn't apply.",
      );
      return null;
    }

    const payloadJson = atob(parts[1].replace(/-/g, "+").replace(/_/g, "/"));

    const payload = JSON.parse(payloadJson);

    console.info(
      "[debugDecodeJwtPayload] Token payload (role/permissions claim shown below) — " +
        "compare this against what your backend's authorization middleware expects for admin routes:",
      payload,
    );

    return payload;
  } catch (err) {
    console.warn("[debugDecodeJwtPayload] Could not decode token:", err);
    return null;
  }
};

const apiRequest = async (endpoint, options = {}) => {
  const token = getToken();

  const headers = {
    Accept: "application/json",
    ...(options.body instanceof FormData
      ? {}
      : { "Content-Type": "application/json" }),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  let response;

  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
      credentials: "include",
    });
  } catch (networkErr) {
    // fetch throws on CORS failure / server down / DNS issues.
    // Previously this would have produced a generic, unhelpful error.
    console.error(
      `[apiRequest] Network failure calling ${API_BASE_URL}${endpoint}:`,
      networkErr,
    );

    throw new Error(
      `Network error calling ${endpoint}: ${networkErr.message}. ` +
        `Check that the backend is running at ${API_BASE_URL} and CORS allows this origin.`,
    );
  }

  const contentType = response.headers.get("content-type") || "";

  let data = null;

  if (contentType.includes("application/json")) {
    data = await response.json().catch(() => null);
  } else {
    const text = await response.text().catch(() => "");

    try {
      data = JSON.parse(text);
    } catch {
      data = text ? { message: text } : null;
    }
  }

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("adminToken");
    }

    let message =
      data?.message ||
      data?.error ||
      (Array.isArray(data?.errors)
        ? data.errors
            .map((e) => e.msg || e.message || JSON.stringify(e))
            .join(", ")
        : typeof data?.errors === "object" && data?.errors
          ? Object.values(data.errors).flat().join(", ")
          : null);

    if (!message) {
      message = `Request failed with status ${response.status} (${
        response.statusText || "no message from server"
      })`;
    }

    console.error(
      `[apiRequest] ${response.status} ${API_BASE_URL}${endpoint}:`,
      message,
    );

    throw new ApiError(message, response.status);
  }

  return data;
};

/* =========================================================
   RESPONSE NORMALIZER
========================================================= */

const getArray = (response) => {
  if (Array.isArray(response)) return response;

  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.data?.data)) return response.data.data;
  if (Array.isArray(response?.results)) return response.results;
  if (Array.isArray(response?.items)) return response.items;
  if (Array.isArray(response?.bookings)) return response.bookings;
  if (Array.isArray(response?.customers)) return response.customers;
  if (Array.isArray(response?.services)) return response.services;
  if (Array.isArray(response?.vehicles)) return response.vehicles;
  if (Array.isArray(response?.locations)) return response.locations;
  if (Array.isArray(response?.enquiries)) return response.enquiries;
  if (Array.isArray(response?.staff)) return response.staff;

  return [];
};

const getObject = (response) => {
  if (!response) return {};

  if (response.data && !Array.isArray(response.data)) {
    return response.data;
  }

  return response;
};

/* =========================================================
   DATA NORMALIZERS
========================================================= */

const normalizeBooking = (item, index) => ({
  id: item.id || item._id || item.bookingId || `BOOK-${index + 1}`,
  customer:
    item.customer?.name || item.customerName || item.name || "Unknown Customer",
  service:
    item.service?.name || item.serviceName || item.service || "Moving Service",
  from:
    item.from ||
    item.pickupLocation ||
    item.pickupAddress ||
    item.source ||
    "-",
  to:
    item.to || item.dropLocation || item.dropAddress || item.destination || "-",
  date:
    item.date || item.movingDate || item.bookingDate || item.createdAt || "-",
  amount: Number(
    item.amount || item.totalAmount || item.price || item.total || 0,
  ),
  status: item.status || "Pending",
  raw: item,
});

const normalizeCustomer = (item, index) => ({
  id: item.id || item._id || item.customerId || `CUS-${index + 1}`,
  name: item.name || item.fullName || item.customerName || "Unknown",
  email: item.email || "-",
  phone: item.phone || item.mobile || item.phoneNumber || "-",
  location: item.location || item.city || item.address?.city || "-",
  bookings: Number(
    item.bookingsCount ||
      item.totalBookings ||
      item.bookings?.length ||
      item.bookings ||
      0,
  ),
  status: item.status || "Active",
  raw: item,
});

const normalizeService = (item, index) => ({
  id: item.id || item._id || `SER-${index + 1}`,
  name: item.name || item.title || "Service",
  description: item.description || "-",
  bookings: Number(
    item.bookingsCount || item.totalBookings || item.bookings || 0,
  ),
  revenue: item.revenue !== undefined ? item.revenue : "रू 0",
  active:
    item.active !== undefined
      ? item.active
      : item.isActive !== undefined
        ? item.isActive
        : true,
  raw: item,
});

const normalizeVehicle = (item, index) => ({
  id: item.id || item._id || item.vehicleId || `VEH-${index + 1}`,
  number: item.number || item.vehicleNumber || item.registrationNumber || "-",
  type: item.type || item.vehicleType || "Truck",
  driver: item.driver?.name || item.driverName || item.driver || "Not Assigned",
  location: item.location || item.currentLocation || item.city || "-",
  status: item.status || "Available",
  raw: item,
});

const normalizeLocation = (item, index) => ({
  id: item.id || item._id || `LOC-${index + 1}`,
  name: item.name || item.city || item.location || "Location",
  bookings: Number(
    item.bookingsCount || item.totalBookings || item.bookings || 0,
  ),
  customers: Number(
    item.customersCount || item.totalCustomers || item.customers || 0,
  ),
  vehicles: Number(
    item.vehiclesCount || item.totalVehicles || item.vehicles || 0,
  ),
  status: item.status || "Operational",
  raw: item,
});

const normalizeEnquiry = (item, index) => ({
  id: item.id || item._id || item.enquiryId || `ENQ-${index + 1}`,
  name: item.name || item.customerName || item.customer?.name || "Unknown",
  subject: item.subject || item.title || item.message || "-",
  location: item.location || item.city || "-",
  date: item.date || item.createdAt || "-",
  priority: item.priority || "Medium",
  status: item.status || "New",
  raw: item,
});

const normalizeStaff = (item, index) => ({
  id: item.id || item._id || `STAFF-${index + 1}`,
  name: item.name || item.fullName || "Staff",
  role: item.role || item.position || "Staff",
  email: item.email || "-",
  phone: item.phone || item.mobile || "-",
  status: item.status || "Active",
  raw: item,
});

/* =========================================================
   NAVIGATION
========================================================= */

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard },
  { title: "Bookings", icon: ClipboardList },
  { title: "Customers", icon: Users },
  { title: "Services", icon: Package },
  { title: "Vehicles", icon: Truck },
  { title: "Locations", icon: MapPin },
  { title: "Enquiries", icon: MessageSquare },
];

const managementItems = [
  { title: "Staff", icon: UserCheck },
  { title: "Reports", icon: BarChart3 },
  { title: "Settings", icon: Settings },
];

/* =========================================================
   ADMIN COMPONENT
========================================================= */

const Admin = () => {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [bookings, setBookings] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [services, setServices] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [locations, setLocations] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [staff, setStaff] = useState([]);

  const [dashboard, setDashboard] = useState({});
  const [reports, setReports] = useState({});
  const [settings, setSettings] = useState({});

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const [modal, setModal] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Per-form submitting flags, so one form's submit state can't
  // disable/relabel a completely different modal's button.
  const [submitting, setSubmitting] = useState({
    booking: false,
    customer: false,
    vehicle: false,
  });

  /* =======================================================
     LOAD ALL DATA

     CORE endpoints are the ones confirmed live on the backend
     (http://localhost:8000/api/admin/dashboard, /bookings,
     /customers, /services, /reports). If any of these fail,
     that's a real problem and we surface it in the red banner.

     OPTIONAL endpoints (vehicles, locations, enquiries, staff,
     settings) may not exist on the backend yet. If they 404 or
     error, we degrade quietly — the matching tab just shows an
     empty state instead of throwing a scary banner for a route
     that was never expected to work.
  ======================================================= */

  const CORE_ENDPOINTS = [
    { key: "dashboard", path: "/admin/dashboard" },
    { key: "bookings", path: "/bookings" },
    { key: "customers", path: "/customers" },
    { key: "services", path: "/services" },
    { key: "reports", path: "/reports" },
  ];

  const OPTIONAL_ENDPOINTS = [
    { key: "vehicles", path: "/vehicles" },
    { key: "locations", path: "/locations" },
    { key: "enquiries", path: "/enquiries" },
    { key: "staff", path: "/staff" },
    { key: "settings", path: "/settings" },
  ];

  const loadData = async (showLoader = true) => {
    try {
      if (showLoader) {
        setLoading(true);
      } else {
        setRefreshing(true);
      }

      setError("");

      const allEndpoints = [...CORE_ENDPOINTS, ...OPTIONAL_ENDPOINTS];

      const results = await Promise.allSettled(
        allEndpoints.map((endpoint) => apiRequest(endpoint.path)),
      );

      // Map each settled result back to its endpoint key so we can
      // apply state updates and build error messages by name instead
      // of relying on fixed array positions.
      const byKey = {};
      allEndpoints.forEach((endpoint, index) => {
        byKey[endpoint.key] = results[index];
      });

      if (byKey.dashboard.status === "fulfilled") {
        setDashboard(getObject(byKey.dashboard.value));
      }

      if (byKey.bookings.status === "fulfilled") {
        setBookings(getArray(byKey.bookings.value).map(normalizeBooking));
      }

      if (byKey.customers.status === "fulfilled") {
        setCustomers(getArray(byKey.customers.value).map(normalizeCustomer));
      }

      if (byKey.services.status === "fulfilled") {
        setServices(getArray(byKey.services.value).map(normalizeService));
      }

      if (byKey.reports.status === "fulfilled") {
        setReports(getObject(byKey.reports.value));
      }

      if (byKey.vehicles.status === "fulfilled") {
        setVehicles(getArray(byKey.vehicles.value).map(normalizeVehicle));
      }

      if (byKey.locations.status === "fulfilled") {
        setLocations(getArray(byKey.locations.value).map(normalizeLocation));
      }

      if (byKey.enquiries.status === "fulfilled") {
        setEnquiries(getArray(byKey.enquiries.value).map(normalizeEnquiry));
      }

      if (byKey.staff.status === "fulfilled") {
        setStaff(getArray(byKey.staff.value).map(normalizeStaff));
      }

      if (byKey.settings.status === "fulfilled") {
        setSettings(getObject(byKey.settings.value));
      }

      const failedCore = CORE_ENDPOINTS.filter(
        (endpoint) => byKey[endpoint.key].status === "rejected",
      );

      const failedOptional = OPTIONAL_ENDPOINTS.filter(
        (endpoint) => byKey[endpoint.key].status === "rejected",
      );

      // If ANY endpoint failed with 401, the session is missing/expired.
      // Don't show a scary error banner — send them to /login instead,
      // same as a normal auth-gated app would.
      const isUnauthorized = [...failedCore, ...failedOptional].some(
        (endpoint) => byKey[endpoint.key].reason?.status === 401,
      );

      if (isUnauthorized) {
        console.warn(
          "[loadData] One or more requests returned 401 — session missing or expired. Redirecting to /login.",
        );

        localStorage.removeItem("token");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("adminToken");

        navigate("/login", { replace: true });
        return;
      }

      // A 403 is different from a 401: the token IS valid and accepted,
      // but the account's role/permissions don't satisfy this route's
      // authorization check. Redirecting to /login won't fix this —
      // logging in again returns the same account with the same role.
      // Surface it as a distinct, actionable message instead.
      const isForbidden = [...failedCore, ...failedOptional].some(
        (endpoint) => byKey[endpoint.key].reason?.status === 403,
      );

      if (isForbidden) {
        const token = getToken();
        const payload = token ? debugDecodeJwtPayload(token) : null;

        const roleHint = payload?.role
          ? ` Your token's role claim is "${payload.role}".`
          : "";

        throw new Error(
          `You're logged in, but this account doesn't have admin permissions ` +
            `on the backend (403 Insufficient permissions).${roleHint} ` +
            `Check the user's role in your database, or check the backend's ` +
            `authorization middleware for these routes (e.g. requireRole("admin")) ` +
            `to confirm what role/permission it actually expects. See the console ` +
            `for the full decoded token payload.`,
        );
      }

      if (failedOptional.length > 0) {
        console.warn(
          "Optional admin APIs not available (safe to ignore if not built yet):",
          failedOptional.map(
            (endpoint) =>
              `${endpoint.path} -> ${byKey[endpoint.key].reason?.message}`,
          ),
        );
      }

      if (failedCore.length > 0) {
        const detail = failedCore
          .map(
            (endpoint) =>
              `${endpoint.path} (${byKey[endpoint.key].reason?.message})`,
          )
          .join("; ");

        throw new Error(
          `Failed to load: ${failedCore
            .map((e) => e.key)
            .join(", ")} — ${detail}`,
        );
      }
    } catch (err) {
      console.error("Admin API error:", err);
      setError(err.message || "Failed to load admin data");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    // Guard: if there's no token at all, don't fire 10 requests that
    // are guaranteed to 401 — go straight to /login instead.
    const token = getToken();

    if (!token) {
      console.warn(
        "[Admin] No auth token present on mount — redirecting to /login.",
      );
      navigate("/login", { replace: true });
      return;
    }

    // Debug aid: log what role/permissions this token actually carries,
    // so a 403 "Insufficient permissions" can be compared directly
    // against the backend's expectation.
    debugDecodeJwtPayload(token);

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* =======================================================
     SEARCH
  ======================================================= */

  const filteredBookings = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return bookings;

    return bookings.filter((booking) =>
      [
        booking.id,
        booking.customer,
        booking.service,
        booking.from,
        booking.to,
        booking.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(value),
    );
  }, [bookings, search]);

  const filteredCustomers = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return customers;

    return customers.filter((customer) =>
      [
        customer.id,
        customer.name,
        customer.email,
        customer.phone,
        customer.location,
        customer.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(value),
    );
  }, [customers, search]);

  const filteredVehicles = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return vehicles;

    return vehicles.filter((vehicle) =>
      [
        vehicle.id,
        vehicle.number,
        vehicle.type,
        vehicle.driver,
        vehicle.location,
        vehicle.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(value),
    );
  }, [vehicles, search]);

  const filteredEnquiries = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return enquiries;

    return enquiries.filter((item) =>
      Object.values(item).join(" ").toLowerCase().includes(value),
    );
  }, [enquiries, search]);

  /* =======================================================
     SECTION
  ======================================================= */

  const changeSection = (section) => {
    setActiveMenu(section);
    setSearch("");
    setSidebarOpen(false);
  };

  /* =======================================================
     BOOKING (fixed)
     - client-side validation before hitting the network
     - guards against double-submit
     - sends common backend field-name variants so a naming
       mismatch (customerName vs customer, movingDate vs date,
       pickupLocation vs from, etc.) doesn't silently 400
     - always resets the submitting flag, even on error
  ======================================================= */

  const openBooking = (booking) => {
    setSelectedBooking(booking);
    setModal("booking");
  };

  const addBooking = async (event) => {
    event.preventDefault();

    if (submitting.booking) return;

    const formEl = event.currentTarget;

    try {
      setError("");

      const form = new FormData(formEl);

      const customer = (form.get("customer") || "").trim();
      const from = (form.get("from") || "").trim();
      const to = (form.get("to") || "").trim();
      const service = form.get("service");
      const date = form.get("date");
      const amount = Number(form.get("amount"));

      if (
        !customer ||
        !from ||
        !to ||
        !date ||
        !Number.isFinite(amount) ||
        amount <= 0
      ) {
        setError(
          "Please fill in all fields with a valid amount before creating the booking.",
        );
        return;
      }

      setSubmitting((prev) => ({ ...prev, booking: true }));

      const payload = {
        customer,
        customerName: customer,
        service,
        serviceName: service,
        from,
        pickupLocation: from,
        to,
        dropLocation: to,
        date,
        movingDate: date,
        amount,
        totalAmount: amount,
        status: "Pending",
      };

      const response = await apiRequest("/bookings", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const created = normalizeBooking(getObject(response), 0);

      setBookings((prev) => [created, ...prev]);

      setModal(null);
      formEl.reset();

      await loadData(false);
    } catch (err) {
      console.error("addBooking failed:", err);
      setError(err.message || "Booking create failed");
    } finally {
      setSubmitting((prev) => ({ ...prev, booking: false }));
    }
  };

  /* =======================================================
     CUSTOMER
  ======================================================= */

  const addCustomer = async (event) => {
    event.preventDefault();

    if (submitting.customer) return;

    const formEl = event.currentTarget;

    try {
      setError("");

      const form = new FormData(formEl);

      const name = (form.get("name") || "").trim();
      const email = (form.get("email") || "").trim();
      const phone = (form.get("phone") || "").trim();
      const location = (form.get("location") || "").trim();

      if (!name || !email || !phone || !location) {
        setError("Please fill in all customer fields.");
        return;
      }

      setSubmitting((prev) => ({ ...prev, customer: true }));

      const payload = { name, email, phone, location, status: "Active" };

      const response = await apiRequest("/customers", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const created = normalizeCustomer(getObject(response), 0);

      setCustomers((prev) => [created, ...prev]);

      setModal(null);
      formEl.reset();

      await loadData(false);
    } catch (err) {
      console.error("addCustomer failed:", err);
      setError(err.message || "Customer create failed");
    } finally {
      setSubmitting((prev) => ({ ...prev, customer: false }));
    }
  };

  /* =======================================================
     VEHICLE
  ======================================================= */

  const addVehicle = async (event) => {
    event.preventDefault();

    if (submitting.vehicle) return;

    const formEl = event.currentTarget;

    try {
      setError("");

      const form = new FormData(formEl);

      const number = (form.get("number") || "").trim();
      const type = form.get("type");
      const driver = (form.get("driver") || "").trim();
      const location = (form.get("location") || "").trim();

      if (!number || !driver || !location) {
        setError("Please fill in all vehicle fields.");
        return;
      }

      setSubmitting((prev) => ({ ...prev, vehicle: true }));

      const payload = {
        number,
        vehicleNumber: number,
        type,
        vehicleType: type,
        driver,
        driverName: driver,
        location,
        currentLocation: location,
        status: "Available",
      };

      const response = await apiRequest("/vehicles", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const created = normalizeVehicle(getObject(response), 0);

      setVehicles((prev) => [created, ...prev]);

      setModal(null);
      formEl.reset();

      await loadData(false);
    } catch (err) {
      console.error("addVehicle failed:", err);
      setError(err.message || "Vehicle create failed");
    } finally {
      setSubmitting((prev) => ({ ...prev, vehicle: false }));
    }
  };

  /* =======================================================
     LOGOUT
  ======================================================= */

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("adminToken");

    setModal(null);

    navigate("/login", { replace: true });
  };

  /* =======================================================
     STATUS
  ======================================================= */

  const renderStatus = (status) => {
    const safeStatus = status || "Unknown";

    return (
      <span
        className={`admin-status ${safeStatus
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        <i />
        {safeStatus}
      </span>
    );
  };

  /* =======================================================
     DASHBOARD
  ======================================================= */

  const dashboardStats = [
    {
      title: "Total Bookings",
      value:
        dashboard?.totalBookings ??
        dashboard?.stats?.totalBookings ??
        bookings.length,
      change:
        dashboard?.bookingGrowth ?? dashboard?.stats?.bookingGrowth ?? "0%",
      positive: true,
      icon: ClipboardList,
    },
    {
      title: "Active Moves",
      value:
        dashboard?.activeMoves ??
        dashboard?.stats?.activeMoves ??
        bookings.filter((x) => x.status === "In Transit").length,
      change:
        dashboard?.activeMoveGrowth ??
        dashboard?.stats?.activeMoveGrowth ??
        "0%",
      positive: true,
      icon: Truck,
    },
    {
      title: "Total Customers",
      value:
        dashboard?.totalCustomers ??
        dashboard?.stats?.totalCustomers ??
        customers.length,
      change:
        dashboard?.customerGrowth ?? dashboard?.stats?.customerGrowth ?? "0%",
      positive: true,
      icon: Users,
    },
    {
      title: "Total Revenue",
      value:
        dashboard?.totalRevenue ?? dashboard?.stats?.totalRevenue ?? "रू 0",
      change:
        dashboard?.revenueGrowth ?? dashboard?.stats?.revenueGrowth ?? "0%",
      positive: true,
      icon: CircleDollarSign,
    },
  ];

  const activities = dashboard?.activities || dashboard?.recentActivities || [];

  const renderDashboard = () => (
    <>
      <section className="admin-welcome">
        <div>
          <span>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>

          <h2>Good afternoon, Admin 👋</h2>

          <p>Here's what's happening with your business today.</p>
        </div>

        <button
          className="admin-primary-button"
          onClick={() => setModal("add-booking")}
        >
          <Plus size={17} />
          New Booking
        </button>
      </section>

      <section className="admin-stats">
        {dashboardStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article className="admin-stat-card" key={stat.title}>
              <div className="stat-top">
                <div className="stat-icon">
                  <Icon size={20} />
                </div>

                <MoreHorizontal size={18} />
              </div>

              <span className="stat-title">{stat.title}</span>

              <div className="stat-bottom">
                <strong>
                  {typeof stat.value === "number"
                    ? stat.value.toLocaleString()
                    : stat.value}
                </strong>

                <span
                  className={stat.positive ? "stat-positive" : "stat-negative"}
                >
                  {stat.positive ? (
                    <ArrowUpRight size={13} />
                  ) : (
                    <ArrowDownRight size={13} />
                  )}

                  {stat.change}
                </span>
              </div>

              <span className="stat-period">vs last month</span>
            </article>
          );
        })}
      </section>

      <section className="admin-main-grid">
        <div className="admin-panel">
          <PanelHeader
            title="Recent Bookings"
            subtitle="Latest customer bookings and relocations"
            action="View all"
            onAction={() => changeSection("Bookings")}
          />

          <BookingTable
            bookings={filteredBookings.slice(0, 5)}
            onView={openBooking}
            renderStatus={renderStatus}
          />
        </div>

        <div className="admin-side-panels">
          <div className="admin-panel">
            <PanelHeader
              title="Quick Actions"
              subtitle="Frequently used actions"
            />

            <div className="quick-actions">
              <QuickAction
                icon={<Plus size={17} />}
                title="New Booking"
                onClick={() => setModal("add-booking")}
              />

              <QuickAction
                icon={<UserPlus size={17} />}
                title="Add Customer"
                onClick={() => setModal("add-customer")}
              />

              <QuickAction
                icon={<Truck size={17} />}
                title="Add Vehicle"
                onClick={() => setModal("add-vehicle")}
              />

              <QuickAction
                icon={<CircleDollarSign size={17} />}
                title="View Reports"
                onClick={() => changeSection("Reports")}
              />
            </div>
          </div>

          <div className="admin-panel">
            <PanelHeader
              title="Recent Activity"
              subtitle="Latest system activities"
            />

            <div className="activity-list">
              {activities.length > 0 ? (
                activities.slice(0, 5).map((activity, index) => (
                  <div className="activity-item" key={activity.id || index}>
                    <div className="activity-icon">
                      <Activity size={15} />
                    </div>

                    <div className="activity-content">
                      <strong>
                        {activity.title || activity.action || "System Activity"}
                      </strong>

                      <span>
                        {activity.text ||
                          activity.description ||
                          activity.message ||
                          ""}
                      </span>

                      <small>
                        <Clock3 size={10} />
                        {activity.time || activity.createdAt || ""}
                      </small>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <Activity size={22} />
                  <strong>No recent activity</strong>
                  <span>New system activities will appear here.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="admin-bottom-grid">
        <PerformancePanel reports={reports} />
        <ServicesPanel services={services} />
      </section>
    </>
  );

  /* =======================================================
     BOOKINGS
  ======================================================= */

  const renderBookings = () => (
    <PageSection
      title="Bookings Management"
      subtitle="Manage all Pashupati Packers & Movers bookings"
      action={
        <button
          className="admin-primary-button"
          onClick={() => setModal("add-booking")}
        >
          <Plus size={17} />
          Create Booking
        </button>
      }
    >
      <div className="management-stats">
        <MiniStat
          title="Total"
          value={bookings.length}
          icon={<ClipboardList size={18} />}
        />

        <MiniStat
          title="Pending"
          value={bookings.filter((item) => item.status === "Pending").length}
          icon={<Clock3 size={18} />}
        />

        <MiniStat
          title="In Transit"
          value={
            bookings.filter(
              (item) =>
                item.status === "In Transit" || item.status === "InTransit",
            ).length
          }
          icon={<Truck size={18} />}
        />

        <MiniStat
          title="Completed"
          value={bookings.filter((item) => item.status === "Completed").length}
          icon={<CheckCircle2 size={18} />}
        />
      </div>

      <div className="admin-panel">
        <Toolbar
          search={search}
          setSearch={setSearch}
          placeholder="Search booking..."
          onRefresh={() => loadData(false)}
          refreshing={refreshing}
        />

        <BookingTable
          bookings={filteredBookings}
          onView={openBooking}
          renderStatus={renderStatus}
        />
      </div>
    </PageSection>
  );

  /* =======================================================
     CUSTOMERS
  ======================================================= */

  const renderCustomers = () => (
    <PageSection
      title="Customer Management"
      subtitle="Manage customer accounts and booking history"
      action={
        <button
          className="admin-primary-button"
          onClick={() => setModal("add-customer")}
        >
          <UserPlus size={17} />
          Add Customer
        </button>
      }
    >
      <div className="management-stats">
        <MiniStat
          title="Total Customers"
          value={customers.length}
          icon={<Users size={18} />}
        />

        <MiniStat
          title="Active"
          value={customers.filter((item) => item.status === "Active").length}
          icon={<UserCheck size={18} />}
        />

        <MiniStat
          title="New This Month"
          value={
            dashboard?.newCustomersThisMonth ??
            dashboard?.stats?.newCustomersThisMonth ??
            0
          }
          icon={<UserPlus size={18} />}
        />

        <MiniStat
          title="VIP Customers"
          value={dashboard?.vipCustomers ?? dashboard?.stats?.vipCustomers ?? 0}
          icon={<Star size={18} />}
        />
      </div>

      <div className="admin-panel">
        <Toolbar
          search={search}
          setSearch={setSearch}
          placeholder="Search customers..."
          onRefresh={() => loadData(false)}
          refreshing={refreshing}
        />

        <div className="responsive-table">
          <table className="advanced-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Contact</th>
                <th>Location</th>
                <th>Bookings</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td>
                    <div className="person-cell">
                      <div className="table-avatar">
                        {customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>

                      <div>
                        <strong>{customer.name}</strong>
                        <span>{customer.id}</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="contact-cell">
                      <span>
                        <Mail size={12} />
                        {customer.email}
                      </span>

                      <span>
                        <Phone size={12} />
                        {customer.phone}
                      </span>
                    </div>
                  </td>

                  <td>{customer.location}</td>

                  <td>
                    <strong>{customer.bookings}</strong>
                  </td>

                  <td>{renderStatus(customer.status)}</td>

                  <td>
                    <TableActions />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredCustomers.length === 0 && (
            <EmptyState text="No customers found." />
          )}
        </div>
      </div>
    </PageSection>
  );

  /* =======================================================
     SERVICES
  ======================================================= */

  const renderServices = () => (
    <PageSection
      title="Services Management"
      subtitle="Manage your moving and relocation services"
      action={
        <button
          className="admin-primary-button"
          onClick={() => {
            alert(
              "Service creation API ke exact fields backend route ke according configure karna hoga.",
            );
          }}
        >
          <Plus size={17} />
          Add Service
        </button>
      }
    >
      <div className="service-management-grid">
        {services.map((service, index) => (
          <div
            className="service-management-card"
            key={service.id || service.name}
          >
            <div className="service-card-top">
              <div className="large-service-icon">
                {index === 0 ? (
                  <HomeIcon />
                ) : index === 1 ? (
                  <Box size={21} />
                ) : index === 2 ? (
                  <Truck size={21} />
                ) : (
                  <Package size={21} />
                )}
              </div>

              <button>
                <MoreHorizontal size={18} />
              </button>
            </div>

            <h3>{service.name}</h3>

            <p>{service.description}</p>

            <div className="service-card-data">
              <div>
                <span>Bookings</span>
                <strong>{service.bookings}</strong>
              </div>

              <div>
                <span>Revenue</span>
                <strong>
                  {typeof service.revenue === "number"
                    ? `रू ${service.revenue.toLocaleString()}`
                    : service.revenue}
                </strong>
              </div>
            </div>

            <div className="service-card-footer">
              <span className="active-label">
                <i />
                {service.active ? "Active" : "Inactive"}
              </span>

              <button>
                Manage
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        ))}

        {services.length === 0 && <EmptyState text="No services found." />}
      </div>
    </PageSection>
  );

  /* =======================================================
     VEHICLES
  ======================================================= */

  const renderVehicles = () => (
    <PageSection
      title="Fleet Management"
      subtitle="Monitor and manage all transportation vehicles"
      action={
        <button
          className="admin-primary-button"
          onClick={() => setModal("add-vehicle")}
        >
          <Plus size={17} />
          Add Vehicle
        </button>
      }
    >
      <div className="management-stats">
        <MiniStat
          title="Total Vehicles"
          value={vehicles.length}
          icon={<Truck size={18} />}
        />

        <MiniStat
          title="Available"
          value={vehicles.filter((item) => item.status === "Available").length}
          icon={<CheckCircle2 size={18} />}
        />

        <MiniStat
          title="On Trip"
          value={
            vehicles.filter(
              (item) => item.status === "On Trip" || item.status === "OnTrip",
            ).length
          }
          icon={<Navigation size={18} />}
        />

        <MiniStat
          title="Maintenance"
          value={
            vehicles.filter((item) => item.status === "Maintenance").length
          }
          icon={<AlertCircle size={18} />}
        />
      </div>

      <div className="vehicle-grid">
        {filteredVehicles.map((vehicle) => (
          <div className="vehicle-card" key={vehicle.id}>
            <div className="vehicle-top">
              <div className="vehicle-icon">
                <Truck size={22} />
              </div>

              {renderStatus(vehicle.status)}
            </div>

            <span className="vehicle-id">{vehicle.id}</span>

            <h3>{vehicle.number}</h3>

            <p>{vehicle.type}</p>

            <div className="vehicle-details">
              <span>
                <User size={13} />
                {vehicle.driver}
              </span>

              <span>
                <MapPin size={13} />
                {vehicle.location}
              </span>
            </div>

            <button className="vehicle-manage">
              Manage Vehicle
              <ChevronRight size={14} />
            </button>
          </div>
        ))}

        {filteredVehicles.length === 0 && (
          <EmptyState text="No vehicles found." />
        )}
      </div>
    </PageSection>
  );

  /* =======================================================
     LOCATIONS
  ======================================================= */

  const renderLocations = () => (
    <PageSection
      title="Location Management"
      subtitle="Monitor operations across Nepal"
      action={
        <button className="admin-primary-button">
          <Plus size={17} />
          Add Location
        </button>
      }
    >
      <div className="location-overview">
        {locations.map((location) => (
          <div className="location-card" key={location.id || location.name}>
            <div className="location-card-top">
              <div className="location-large-icon">
                <MapPin size={21} />
              </div>

              {renderStatus(location.status)}
            </div>

            <h3>{location.name}</h3>

            <div className="location-metrics">
              <div>
                <strong>{location.bookings}</strong>
                <span>Bookings</span>
              </div>

              <div>
                <strong>{location.customers.toLocaleString()}</strong>
                <span>Customers</span>
              </div>

              <div>
                <strong>{location.vehicles}</strong>
                <span>Vehicles</span>
              </div>
            </div>

            <button>
              View Location
              <ArrowUpRight size={14} />
            </button>
          </div>
        ))}

        {locations.length === 0 && <EmptyState text="No locations found." />}
      </div>
    </PageSection>
  );

  /* =======================================================
     ENQUIRIES
  ======================================================= */

  const renderEnquiries = () => (
    <PageSection
      title="Customer Enquiries"
      subtitle="Track and respond to customer enquiries"
      action={
        <button className="admin-secondary-button">
          <Download size={16} />
          Export
        </button>
      }
    >
      <div className="management-stats">
        <MiniStat
          title="Total Enquiries"
          value={enquiries.length}
          icon={<MessageSquare size={18} />}
        />

        <MiniStat
          title="New"
          value={enquiries.filter((x) => x.status === "New").length}
          icon={<AlertCircle size={18} />}
        />

        <MiniStat
          title="In Progress"
          value={enquiries.filter((x) => x.status === "In Progress").length}
          icon={<Activity size={18} />}
        />

        <MiniStat
          title="Resolved"
          value={enquiries.filter((x) => x.status === "Resolved").length}
          icon={<CheckCircle2 size={18} />}
        />
      </div>

      <div className="admin-panel">
        <Toolbar
          search={search}
          setSearch={setSearch}
          placeholder="Search enquiries..."
          onRefresh={() => loadData(false)}
          refreshing={refreshing}
        />

        <div className="responsive-table">
          <table className="advanced-table">
            <thead>
              <tr>
                <th>Enquiry</th>
                <th>Customer</th>
                <th>Location</th>
                <th>Date</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredEnquiries.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong>{item.id}</strong>
                    <span className="table-muted">{item.subject}</span>
                  </td>

                  <td>{item.name}</td>
                  <td>{item.location}</td>
                  <td>{item.date}</td>

                  <td>
                    <span
                      className={`priority ${item.priority
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {item.priority}
                    </span>
                  </td>

                  <td>{renderStatus(item.status)}</td>

                  <td>
                    <TableActions />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredEnquiries.length === 0 && (
            <EmptyState text="No enquiries found." />
          )}
        </div>
      </div>
    </PageSection>
  );

  /* =======================================================
     STAFF
  ======================================================= */

  const renderStaff = () => (
    <PageSection
      title="Staff Management"
      subtitle="Manage employees, drivers and administrators"
      action={
        <button className="admin-primary-button">
          <UserPlus size={17} />
          Add Staff
        </button>
      }
    >
      <div className="staff-grid">
        {staff.map((member) => (
          <div className="staff-card" key={member.id || member.email}>
            <div className="staff-card-top">
              <div className="staff-avatar">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>

              {renderStatus(member.status)}
            </div>

            <h3>{member.name}</h3>

            <span className="staff-role">{member.role}</span>

            <div className="staff-contact">
              <span>
                <Mail size={13} />
                {member.email}
              </span>

              <span>
                <Phone size={13} />
                {member.phone}
              </span>
            </div>

            <div className="staff-actions">
              <button>
                <Edit3 size={14} />
                Edit
              </button>

              <button>
                <Eye size={14} />
                Profile
              </button>
            </div>
          </div>
        ))}

        {staff.length === 0 && <EmptyState text="No staff found." />}
      </div>
    </PageSection>
  );

  /* =======================================================
     REPORTS
  ======================================================= */

  const renderReports = () => {
    const totalRevenue =
      reports?.monthlyRevenue ??
      reports?.totalRevenue ??
      dashboard?.totalRevenue ??
      "रू 0";

    const totalBookings = reports?.totalBookings ?? bookings.length;

    const averageValue =
      reports?.averageBookingValue ??
      (bookings.length
        ? Math.round(
            bookings.reduce((sum, item) => sum + Number(item.amount || 0), 0) /
              bookings.length,
          )
        : 0);

    const customerGrowth =
      reports?.customerGrowth ?? dashboard?.customerGrowth ?? "0%";

    return (
      <PageSection
        title="Reports & Analytics"
        subtitle="Business performance, revenue and operational insights"
        action={
          <button className="admin-secondary-button">
            <Download size={16} />
            Export Report
          </button>
        }
      >
        <div className="report-summary-grid">
          <ReportCard
            title="Monthly Revenue"
            value={
              typeof totalRevenue === "number"
                ? `रू ${totalRevenue.toLocaleString()}`
                : totalRevenue
            }
            change={reports?.revenueGrowth || "0%"}
            icon={<CircleDollarSign size={19} />}
          />

          <ReportCard
            title="Total Bookings"
            value={
              typeof totalBookings === "number"
                ? totalBookings.toLocaleString()
                : totalBookings
            }
            change={reports?.bookingGrowth || "0%"}
            icon={<ClipboardList size={19} />}
          />

          <ReportCard
            title="Avg. Booking Value"
            value={
              typeof averageValue === "number"
                ? `रू ${averageValue.toLocaleString()}`
                : averageValue
            }
            change={reports?.averageGrowth || "0%"}
            icon={<BarChart3 size={19} />}
          />

          <ReportCard
            title="Customer Growth"
            value={customerGrowth}
            change={reports?.customerGrowthChange || "0%"}
            icon={<Users size={19} />}
          />
        </div>

        <div className="reports-grid">
          <PerformancePanel reports={reports} />

          <div className="admin-panel report-insights">
            <PanelHeader
              title="Key Insights"
              subtitle="Business intelligence summary"
            />

            <div className="insight-list">
              <Insight
                icon={<ArrowUpRight size={16} />}
                title="Bookings"
                text={`${bookings.length} bookings loaded from backend.`}
              />

              <Insight
                icon={<Users size={16} />}
                title="Customers"
                text={`${customers.length} customers currently available.`}
              />

              <Insight
                icon={<Truck size={16} />}
                title="Fleet"
                text={`${vehicles.length} vehicles available in the system.`}
              />

              <Insight
                icon={<MessageSquare size={16} />}
                title="Enquiries"
                text={`${
                  enquiries.filter((x) => x.status === "New").length
                } new enquiries require attention.`}
              />
            </div>
          </div>
        </div>
      </PageSection>
    );
  };

  /* =======================================================
     SETTINGS
  ======================================================= */

  const [settingForm, setSettingForm] = useState({
    companyName: settings?.companyName || "Pashupati Packers & Movers",
    supportEmail: settings?.supportEmail || "support@pashupati.com",
    phoneNumber: settings?.phoneNumber || "+977 9800000000",
    currency: settings?.currency || "NPR - Nepalese Rupee",
    emailNotifications: settings?.emailNotifications ?? true,
    bookingAlerts: settings?.bookingAlerts ?? true,
  });

  useEffect(() => {
    if (settings && Object.keys(settings).length) {
      setSettingForm((prev) => ({
        ...prev,
        ...settings,
      }));
    }
  }, [settings]);

  const saveSettings = async () => {
    try {
      setError("");

      await apiRequest("/settings", {
        method: "PUT",
        body: JSON.stringify(settingForm),
      });

      alert("Settings saved successfully.");

      await loadData(false);
    } catch (err) {
      console.error(err);
      setError(err.message || "Settings save failed");
    }
  };

  const renderSettings = () => (
    <PageSection
      title="System Settings"
      subtitle="Configure your admin panel and business preferences"
    >
      <div className="settings-layout">
        <div className="settings-nav">
          {[
            "General",
            "Business Profile",
            "Notifications",
            "Security",
            "Payment",
            "Email",
          ].map((item, index) => (
            <button className={index === 0 ? "active" : ""} key={item}>
              {item}
              <ChevronRight size={15} />
            </button>
          ))}
        </div>

        <div className="admin-panel settings-panel">
          <div className="settings-heading">
            <div>
              <h3>General Settings</h3>
              <p>Manage basic platform preferences.</p>
            </div>
          </div>

          <div className="settings-form">
            <SettingInput
              label="Company Name"
              value={settingForm.companyName}
              onChange={(value) =>
                setSettingForm((prev) => ({
                  ...prev,
                  companyName: value,
                }))
              }
            />

            <SettingInput
              label="Support Email"
              value={settingForm.supportEmail}
              onChange={(value) =>
                setSettingForm((prev) => ({
                  ...prev,
                  supportEmail: value,
                }))
              }
            />

            <SettingInput
              label="Phone Number"
              value={settingForm.phoneNumber}
              onChange={(value) =>
                setSettingForm((prev) => ({
                  ...prev,
                  phoneNumber: value,
                }))
              }
            />

            <SettingInput
              label="Default Currency"
              value={settingForm.currency}
              onChange={(value) =>
                setSettingForm((prev) => ({
                  ...prev,
                  currency: value,
                }))
              }
            />

            <div className="setting-toggle">
              <div>
                <strong>Email Notifications</strong>
                <span>Receive notifications for new bookings.</span>
              </div>

              <button
                type="button"
                className={`toggle ${
                  settingForm.emailNotifications ? "active" : ""
                }`}
                onClick={() =>
                  setSettingForm((prev) => ({
                    ...prev,
                    emailNotifications: !prev.emailNotifications,
                  }))
                }
              >
                <span />
              </button>
            </div>

            <div className="setting-toggle">
              <div>
                <strong>Booking Alerts</strong>
                <span>Get alerts when booking status changes.</span>
              </div>

              <button
                type="button"
                className={`toggle ${
                  settingForm.bookingAlerts ? "active" : ""
                }`}
                onClick={() =>
                  setSettingForm((prev) => ({
                    ...prev,
                    bookingAlerts: !prev.bookingAlerts,
                  }))
                }
              >
                <span />
              </button>
            </div>

            <div className="settings-actions">
              <button
                className="admin-secondary-button"
                onClick={() => loadData(false)}
              >
                Cancel
              </button>

              <button className="admin-primary-button" onClick={saveSettings}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );

  /* =======================================================
     CONTENT
  ======================================================= */

  const renderContent = () => {
    switch (activeMenu) {
      case "Bookings":
        return renderBookings();

      case "Customers":
        return renderCustomers();

      case "Services":
        return renderServices();

      case "Vehicles":
        return renderVehicles();

      case "Locations":
        return renderLocations();

      case "Enquiries":
        return renderEnquiries();

      case "Staff":
        return renderStaff();

      case "Reports":
        return renderReports();

      case "Settings":
        return renderSettings();

      default:
        return renderDashboard();
    }
  };

  /* =======================================================
     MAIN UI
  ======================================================= */

  return (
    <div className="admin-dashboard">
      {sidebarOpen && (
        <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`admin-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="admin-sidebar-top">
          <Link to="/" className="admin-logo">
            <div className="admin-logo-icon">P</div>

            <div>
              <strong>Pashupati</strong>
              <span>PACKERS & MOVERS</span>
            </div>
          </Link>

          <button
            className="admin-mobile-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={21} />
          </button>
        </div>

        <div className="admin-profile-mini">
          <div className="admin-avatar">AD</div>

          <div>
            <strong>Admin User</strong>
            <span>Super Administrator</span>
          </div>

          <i className="online-dot" />
        </div>

        <nav className="admin-navigation">
          <span className="navigation-title">MAIN MENU</span>

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className={`admin-nav-item ${
                  activeMenu === item.title ? "active" : ""
                }`}
                onClick={() => changeSection(item.title)}
              >
                <Icon size={18} />

                <span>{item.title}</span>

                {item.title === "Bookings" && bookings.length > 0 && (
                  <b>{bookings.length}</b>
                )}

                {item.title === "Enquiries" &&
                  enquiries.filter((x) => x.status === "New").length > 0 && (
                    <b>{enquiries.filter((x) => x.status === "New").length}</b>
                  )}

                {activeMenu === item.title && <ChevronRight size={15} />}
              </button>
            );
          })}

          <span className="navigation-title management-title">MANAGEMENT</span>

          {managementItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className={`admin-nav-item ${
                  activeMenu === item.title ? "active" : ""
                }`}
                onClick={() => changeSection(item.title)}
              >
                <Icon size={18} />

                <span>{item.title}</span>

                {activeMenu === item.title && <ChevronRight size={15} />}
              </button>
            );
          })}
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-security-card">
            <div className="security-icon">
              <ShieldCheck size={18} />
            </div>

            <div>
              <strong>System Secure</strong>
              <span>
                {error ? "API requires attention" : "All systems operational"}
              </span>
            </div>
          </div>

          <button className="admin-logout" onClick={() => setModal("logout")}>
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div className="admin-header-left">
            <button
              className="admin-menu-toggle"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={21} />
            </button>

            <div>
              <span className="admin-header-label">ADMINISTRATION</span>

              <h1>{activeMenu}</h1>
            </div>
          </div>

          <div className="admin-header-right">
            <div className="admin-search">
              <Search size={17} />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={`Search ${activeMenu.toLowerCase()}...`}
              />
            </div>

            <div className="notification-wrapper">
              <button
                className="admin-notification"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
              >
                <Bell size={19} />
                <span />
              </button>

              {notificationsOpen && (
                <div className="notification-panel">
                  <div className="notification-header">
                    <strong>Notifications</strong>
                    <span>
                      {enquiries.filter((x) => x.status === "New").length} new
                    </span>
                  </div>

                  {bookings[0] && (
                    <div className="notification-item">
                      <div>
                        <Package size={15} />
                      </div>

                      <span>New booking {bookings[0].id} received.</span>
                    </div>
                  )}

                  {enquiries[0] && (
                    <div className="notification-item">
                      <div>
                        <MessageSquare size={15} />
                      </div>

                      <span>New customer enquiry received.</span>
                    </div>
                  )}

                  {vehicles[0] && (
                    <div className="notification-item">
                      <div>
                        <Truck size={15} />
                      </div>

                      <span>
                        Vehicle {vehicles[0].number} is{" "}
                        {vehicles[0].status.toLowerCase()}.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="admin-user-wrapper">
              <button
                className="admin-user-button"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <div className="admin-header-avatar">AD</div>

                <div className="admin-user-info">
                  <strong>Admin User</strong>
                  <span>Administrator</span>
                </div>

                <ChevronDown size={15} />
              </button>

              {profileOpen && (
                <div className="admin-profile-menu">
                  <button onClick={() => changeSection("Settings")}>
                    <User size={16} />
                    My Profile
                  </button>

                  <button onClick={() => changeSection("Settings")}>
                    <Settings size={16} />
                    Account Settings
                  </button>

                  <button onClick={() => setModal("logout")}>
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {error && (
          <div
            style={{
              margin: "15px 20px 0",
              padding: "12px 15px",
              borderRadius: "8px",
              background: "#fff1f2",
              color: "#be123c",
              border: "1px solid #fecdd3",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <span>
              <strong>API Error:</strong> {error}
            </span>

            <button
              onClick={() => setError("")}
              style={{
                border: 0,
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <X size={16} />
            </button>
          </div>
        )}

        <div className="admin-content">
          {loading ? (
            <div className="empty-state" style={{ minHeight: "300px" }}>
              <RefreshCw size={28} className="admin-loading-icon" />

              <strong>Loading admin data...</strong>

              <span>Backend se latest data load ho raha hai.</span>
            </div>
          ) : (
            renderContent()
          )}
        </div>
      </main>

      {/* =====================================================
          ADD BOOKING
      ===================================================== */}

      {modal === "add-booking" && (
        <Modal
          title="Create New Booking"
          subtitle="Add a new customer booking"
          onClose={() => setModal(null)}
        >
          <form className="admin-form" onSubmit={addBooking}>
            <FormField
              label="Customer Name"
              name="customer"
              placeholder="Enter customer name"
              required
            />

            <div className="form-row">
              <FormField
                label="From"
                name="from"
                placeholder="Kathmandu"
                required
              />

              <FormField label="To" name="to" placeholder="Pokhara" required />
            </div>

            <div className="form-row">
              <FormField
                label="Service"
                name="service"
                type="select"
                options={[
                  "Household Shifting",
                  "Office Relocation",
                  "Vehicle Transportation",
                  "Packing Services",
                  "Loading & Unloading",
                ]}
                required
              />

              <FormField
                label="Amount"
                name="amount"
                type="number"
                placeholder="25000"
                required
              />
            </div>

            <FormField label="Moving Date" name="date" type="date" required />

            <ModalActions
              onCancel={() => setModal(null)}
              submit="Create Booking"
              submitting={submitting.booking}
              submittingLabel="Creating..."
            />
          </form>
        </Modal>
      )}

      {/* =====================================================
          ADD CUSTOMER
      ===================================================== */}

      {modal === "add-customer" && (
        <Modal
          title="Add Customer"
          subtitle="Create a new customer account"
          onClose={() => setModal(null)}
        >
          <form className="admin-form" onSubmit={addCustomer}>
            <FormField
              label="Full Name"
              name="name"
              placeholder="Customer name"
              required
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="customer@example.com"
              required
            />

            <FormField
              label="Phone"
              name="phone"
              placeholder="+977 98XXXXXXXX"
              required
            />

            <FormField
              label="Location"
              name="location"
              placeholder="Kathmandu"
              required
            />

            <ModalActions
              onCancel={() => setModal(null)}
              submit="Create Customer"
              submitting={submitting.customer}
              submittingLabel="Creating..."
            />
          </form>
        </Modal>
      )}

      {/* =====================================================
          ADD VEHICLE
      ===================================================== */}

      {modal === "add-vehicle" && (
        <Modal
          title="Add Vehicle"
          subtitle="Register a new company vehicle"
          onClose={() => setModal(null)}
        >
          <form className="admin-form" onSubmit={addVehicle}>
            <FormField
              label="Vehicle Number"
              name="number"
              placeholder="BA 2 KHA 1234"
              required
            />

            <FormField
              label="Vehicle Type"
              name="type"
              type="select"
              options={[
                "Mini Truck",
                "Medium Truck",
                "Large Truck",
                "Container Truck",
              ]}
              required
            />

            <FormField
              label="Driver"
              name="driver"
              placeholder="Driver name"
              required
            />

            <FormField
              label="Current Location"
              name="location"
              placeholder="Kathmandu"
              required
            />

            <ModalActions
              onCancel={() => setModal(null)}
              submit="Add Vehicle"
              submitting={submitting.vehicle}
              submittingLabel="Adding..."
            />
          </form>
        </Modal>
      )}

      {/* =====================================================
          BOOKING DETAILS
      ===================================================== */}

      {modal === "booking" && selectedBooking && (
        <Modal
          title="Booking Details"
          subtitle={selectedBooking.id}
          onClose={() => setModal(null)}
        >
          <div className="booking-detail-modal">
            <div className="detail-status">
              {renderStatus(selectedBooking.status)}
            </div>

            <div className="booking-detail-grid">
              <Detail label="Customer" value={selectedBooking.customer} />

              <Detail label="Service" value={selectedBooking.service} />

              <Detail label="From" value={selectedBooking.from} />

              <Detail label="To" value={selectedBooking.to} />

              <Detail label="Moving Date" value={selectedBooking.date} />

              <Detail
                label="Amount"
                value={`रू ${Number(
                  selectedBooking.amount || 0,
                ).toLocaleString()}`}
              />
            </div>

            <div className="modal-footer">
              <button
                className="admin-secondary-button"
                onClick={() => setModal(null)}
              >
                Close
              </button>

              <button className="admin-primary-button">
                <Edit3 size={15} />
                Edit Booking
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* =====================================================
          LOGOUT
      ===================================================== */}

      {modal === "logout" && (
        <Modal
          title="Logout"
          subtitle="Are you sure you want to logout?"
          onClose={() => setModal(null)}
        >
          <div className="logout-confirm">
            <div className="logout-warning">
              <LogOut size={22} />
            </div>

            <p>Your current admin session will be ended.</p>

            <div className="modal-footer">
              <button
                className="admin-secondary-button"
                onClick={() => setModal(null)}
              >
                Cancel
              </button>

              <button className="admin-danger-button" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

/* =========================================================
   COMPONENTS
========================================================= */

const PanelHeader = ({ title, subtitle, action, onAction }) => (
  <div className="panel-header">
    <div>
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </div>

    {action && (
      <button className="panel-action" onClick={onAction}>
        {action}
        <ArrowUpRight size={14} />
      </button>
    )}
  </div>
);

const PageSection = ({ title, subtitle, action, children }) => (
  <section className="admin-page-section">
    <div className="page-title-row">
      <div>
        <span className="page-kicker">PASHUPATI ADMIN</span>

        <h2>{title}</h2>

        <p>{subtitle}</p>
      </div>

      {action}
    </div>

    {children}
  </section>
);

const Toolbar = ({ search, setSearch, placeholder, onRefresh, refreshing }) => (
  <div className="admin-toolbar">
    <div className="toolbar-search">
      <Search size={16} />

      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={placeholder}
      />
    </div>

    <div className="toolbar-actions">
      <button>
        <Filter size={15} />
        Filter
      </button>

      <button onClick={onRefresh} disabled={refreshing}>
        <RefreshCw size={15} className={refreshing ? "admin-spin" : ""} />
        {refreshing ? "Refreshing..." : "Refresh"}
      </button>

      <button>
        <Download size={15} />
        Export
      </button>
    </div>
  </div>
);

const BookingTable = ({ bookings, onView, renderStatus }) => (
  <div className="responsive-table">
    <table className="advanced-table">
      <thead>
        <tr>
          <th>Booking</th>
          <th>Customer</th>
          <th>Route</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td>
              <strong>{booking.id}</strong>

              <span className="table-muted">{booking.service}</span>
            </td>

            <td>
              <div className="person-cell">
                <div className="table-avatar">
                  {booking.customer
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                <strong>{booking.customer}</strong>
              </div>
            </td>

            <td>
              <div className="route-modern">
                <span>{booking.from}</span>
                <ChevronRight size={13} />
                <span>{booking.to}</span>
              </div>
            </td>

            <td>
              <span className="date-modern">
                <CalendarDays size={13} />
                {formatDate(booking.date)}
              </span>
            </td>

            <td>
              <strong>रू {Number(booking.amount || 0).toLocaleString()}</strong>
            </td>

            <td>{renderStatus(booking.status)}</td>

            <td>
              <button
                className="table-view-button"
                onClick={() => onView(booking)}
              >
                <Eye size={15} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {bookings.length === 0 && <EmptyState text="No bookings found." />}
  </div>
);

const QuickAction = ({ icon, title, onClick }) => (
  <button className="quick-action-row" onClick={onClick}>
    <div className="quick-icon">{icon}</div>

    <span>{title}</span>

    <ChevronRight size={15} />
  </button>
);

const MiniStat = ({ title, value, icon }) => (
  <div className="mini-stat">
    <div className="mini-stat-icon">{icon}</div>

    <div>
      <span>{title}</span>
      <strong>
        {typeof value === "number" ? value.toLocaleString() : value}
      </strong>
    </div>
  </div>
);

const PerformancePanel = ({ reports = {} }) => {
  const chartData = reports?.monthlyBookings ||
    reports?.bookingChart || [42, 55, 48, 72, 63, 80, 69, 88, 74, 94, 82, 100];

  return (
    <div className="admin-panel performance-panel">
      <PanelHeader
        title="Business Performance"
        subtitle="Booking overview for this month"
      />

      <div className="performance-chart">
        <div className="chart-y-axis">
          <span>300</span>
          <span>240</span>
          <span>180</span>
          <span>120</span>
          <span>60</span>
          <span>0</span>
        </div>

        <div className="chart-area">
          {[0, 25, 50, 75, 100].map((item) => (
            <div
              className="chart-grid-line"
              style={{ top: `${item}%` }}
              key={item}
            />
          ))}

          <div className="chart-bars">
            {chartData.map((height, index) => {
              const numericHeight =
                typeof height === "object" ? height.value || 0 : Number(height);

              return (
                <div className="chart-bar" key={index}>
                  <span
                    style={{
                      height: `${Math.min(Math.max(numericHeight, 0), 100)}%`,
                    }}
                  />

                  <small>{index + 1}</small>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPanel = ({ services = [] }) => {
  const topServices = services.length > 0 ? services.slice(0, 4) : [];

  const maxBookings = Math.max(
    ...topServices.map((service) => Number(service.bookings) || 0),
    1,
  );

  return (
    <div className="admin-panel service-panel">
      <PanelHeader title="Top Services" subtitle="Most requested services" />

      <div className="service-list">
        {topServices.map((service, index) => {
          const percentage = Math.round(
            (Number(service.bookings || 0) / maxBookings) * 100,
          );

          return (
            <div className="service-row" key={service.id || service.name}>
              <div className="service-number">0{index + 1}</div>

              <div className="service-info">
                <strong>{service.name}</strong>

                <div className="service-progress">
                  <span
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>
              </div>

              <strong>{percentage}%</strong>
            </div>
          );
        })}

        {topServices.length === 0 && <EmptyState text="No service data." />}
      </div>
    </div>
  );
};

const ReportCard = ({ title, value, change, icon }) => (
  <div className="report-card">
    <div className="report-card-icon">{icon}</div>

    <span>{title}</span>

    <strong>{value}</strong>

    <small>
      <ArrowUpRight size={12} />
      {change} this month
    </small>
  </div>
);

const Insight = ({ icon, title, text }) => (
  <div className="insight-item">
    <div className="insight-icon">{icon}</div>

    <div>
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  </div>
);

const TableActions = () => (
  <div className="table-actions">
    <button>
      <Eye size={14} />
    </button>

    <button>
      <Edit3 size={14} />
    </button>

    <button>
      <MoreHorizontal size={14} />
    </button>
  </div>
);

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  options = [],
  required,
}) => (
  <label className="form-field">
    <span>{label}</span>

    {type === "select" ? (
      <select name={name} required={required} defaultValue={options[0] || ""}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    )}
  </label>
);

const Modal = ({ title, subtitle, children, onClose }) => (
  <div className="modal-overlay" onMouseDown={onClose}>
    <div
      className="admin-modal"
      onMouseDown={(event) => event.stopPropagation()}
    >
      <div className="modal-header">
        <div>
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>

        <button onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      <div className="modal-body">{children}</div>
    </div>
  </div>
);

// ModalActions now supports a submitting state so the button
// shows progress and can't be double-clicked into a duplicate
// booking/customer/vehicle.
const ModalActions = ({
  onCancel,
  submit,
  submitting = false,
  submittingLabel,
}) => (
  <div className="modal-footer">
    <button
      type="button"
      className="admin-secondary-button"
      onClick={onCancel}
      disabled={submitting}
    >
      Cancel
    </button>

    <button
      type="submit"
      className="admin-primary-button"
      disabled={submitting}
    >
      <CheckCircle2 size={15} />
      {submitting ? submittingLabel || "Saving..." : submit}
    </button>
  </div>
);

const Detail = ({ label, value }) => (
  <div className="detail-box">
    <span>{label}</span>
    <strong>{value}</strong>
  </div>
);

const SettingInput = ({ label, value, onChange }) => (
  <label className="setting-input">
    <span>{label}</span>

    <input
      value={value || ""}
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
);

const HomeIcon = () => <Box size={21} />;

const EmptyState = ({ text }) => (
  <div className="empty-state">
    <Search size={25} />
    <strong>{text}</strong>
    <span>Backend mein data available hone par yahan show hoga.</span>
  </div>
);

/* =========================================================
   HELPERS
========================================================= */

const formatDate = (date) => {
  if (!date || date === "-") return "-";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default Admin;
