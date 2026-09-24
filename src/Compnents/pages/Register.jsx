// import React, { useMemo, useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   CheckCircle2,
//   Eye,
//   EyeOff,
//   Lock,
//   Mail,
//   ShieldCheck,
//   Truck,
//   User,
//   UserPlus,
//   AtSign,
//   Loader2,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Register.css";

// const Register = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState(false);
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   const passwordStrength = useMemo(() => {
//     const password = formData.password;

//     if (!password) {
//       return {
//         score: 0,
//         label: "",
//       };
//     }

//     let score = 0;

//     if (password.length >= 8) score++;
//     if (/[A-Z]/.test(password)) score++;
//     if (/[a-z]/.test(password)) score++;
//     if (/[0-9]/.test(password)) score++;
//     if (/[^A-Za-z0-9]/.test(password)) score++;

//     if (score <= 2) {
//       return {
//         score,
//         label: "Weak",
//       };
//     }

//     if (score <= 3) {
//       return {
//         score,
//         label: "Medium",
//       };
//     }

//     if (score <= 4) {
//       return {
//         score,
//         label: "Strong",
//       };
//     }

//     return {
//       score,
//       label: "Very Strong",
//     };
//   }, [formData.password]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//       submit: "",
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Full name is required";
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = "Enter a valid name";
//     }

//     if (!formData.username.trim()) {
//       newErrors.username = "Username is required";
//     } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
//       newErrors.username =
//         "Only letters, numbers and underscore are allowed";
//     } else if (formData.username.length < 3) {
//       newErrors.username =
//         "Username must be at least 3 characters";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email address is required";
//     } else if (
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
//     ) {
//       newErrors.email = "Enter a valid email address";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 8) {
//       newErrors.password =
//         "Password must be at least 8 characters";
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword =
//         "Please confirm your password";
//     } else if (
//       formData.password !== formData.confirmPassword
//     ) {
//       newErrors.confirmPassword =
//         "Passwords do not match";
//     }

//     if (!agreeTerms) {
//       newErrors.terms =
//         "Please accept the terms and privacy policy";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setLoading(true);

//     try {
//       await new Promise((resolve) =>
//         setTimeout(resolve, 1200)
//       );

//       console.log("Register Data:", {
//         name: formData.name,
//         username: formData.username,
//         email: formData.email,
//         password: formData.password,
//       });

//       navigate("/login");
//     } catch (error) {
//       setErrors({
//         submit: "Something went wrong. Please try again.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="register-page">
//       <div className="register-shape register-shape-one"></div>
//       <div className="register-shape register-shape-two"></div>

//       <div className="register-container">

//         <section className="register-info">

//           <div className="register-brand">
//             <div className="register-brand-icon">
//               P
//             </div>

//             <div>
//               <h1>Pashupati</h1>
//               <span>PACKERS & MOVERS</span>
//             </div>
//           </div>

//           <div className="register-info-content">

//             <span className="register-badge">
//               <ShieldCheck size={16} />
//               Trusted Moving Partner
//             </span>

//             <h2>
//               Start your journey
//               <span> with Pashupati.</span>
//             </h2>

//             <p>
//               Create your account and get access to
//               professional packing, moving, transportation
//               and relocation services across Nepal.
//             </p>

//             <div className="register-benefits">

//               <div className="register-benefit">
//                 <div className="benefit-icon">
//                   <Truck size={20} />
//                 </div>

//                 <div>
//                   <strong>
//                     Professional Moving Services
//                   </strong>

//                   <span>
//                     Reliable household and office relocation.
//                   </span>
//                 </div>
//               </div>

//               <div className="register-benefit">
//                 <div className="benefit-icon">
//                   <CheckCircle2 size={20} />
//                 </div>

//                 <div>
//                   <strong>
//                     Easy Booking Management
//                   </strong>

//                   <span>
//                     Manage your bookings from one place.
//                   </span>
//                 </div>
//               </div>

//               <div className="register-benefit">
//                 <div className="benefit-icon">
//                   <ShieldCheck size={20} />
//                 </div>

//                 <div>
//                   <strong>
//                     Secure & Protected
//                   </strong>

//                   <span>
//                     Your account information stays secure.
//                   </span>
//                 </div>
//               </div>

//             </div>
//           </div>

//           <div className="register-info-footer">
//             <span>
//               © {new Date().getFullYear()} Pashupati
//               Packers & Movers
//             </span>

//             <div>
//               <Link to="/privacy">Privacy</Link>
//               <Link to="/terms">Terms</Link>
//             </div>
//           </div>

//         </section>

//         <section className="register-card">

//           <div className="mobile-register-brand">
//             <div className="register-brand-icon">
//               P
//             </div>

//             <div>
//               <h1>Pashupati</h1>
//               <span>PACKERS & MOVERS</span>
//             </div>
//           </div>

//           <div className="register-header">

//             <span className="register-welcome">
//               Get started
//             </span>

//             <h2>Create your account</h2>

//             <p>
//               Join Pashupati and manage your moving services
//               easily.
//             </p>

//           </div>

//           {errors.submit && (
//             <div className="register-alert">
//               {errors.submit}
//             </div>
//           )}

//           <form
//             className="register-form"
//             onSubmit={handleSubmit}
//           >

//             <div className="register-form-row">

//               <div className="register-form-group">
//                 <label htmlFor="name">
//                   Full Name
//                 </label>

//                 <div
//                   className={`register-input ${
//                     errors.name ? "has-error" : ""
//                   }`}
//                 >
//                   <User size={18} />

//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     placeholder="Your full name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     autoComplete="name"
//                   />
//                 </div>

//                 {errors.name && (
//                   <span className="register-error">
//                     {errors.name}
//                   </span>
//                 )}
//               </div>

//               <div className="register-form-group">
//                 <label htmlFor="username">
//                   Username
//                 </label>

//                 <div
//                   className={`register-input ${
//                     errors.username ? "has-error" : ""
//                   }`}
//                 >
//                   <AtSign size={18} />

//                   <input
//                     id="username"
//                     name="username"
//                     type="text"
//                     placeholder="Choose username"
//                     value={formData.username}
//                     onChange={handleChange}
//                     autoComplete="username"
//                   />
//                 </div>

//                 {errors.username && (
//                   <span className="register-error">
//                     {errors.username}
//                   </span>
//                 )}
//               </div>

//             </div>

//             <div className="register-form-group">
//               <label htmlFor="email">
//                 Email Address
//               </label>

//               <div
//                 className={`register-input ${
//                   errors.email ? "has-error" : ""
//                 }`}
//               >
//                 <Mail size={18} />

//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   autoComplete="email"
//                 />
//               </div>

//               {errors.email && (
//                 <span className="register-error">
//                   {errors.email}
//                 </span>
//               )}
//             </div>

//             <div className="register-form-group">
//               <label htmlFor="password">
//                 Password
//               </label>

//               <div
//                 className={`register-input ${
//                   errors.password ? "has-error" : ""
//                 }`}
//               >
//                 <Lock size={18} />

//                 <input
//                   id="password"
//                   name="password"
//                   type={
//                     showPassword ? "text" : "password"
//                   }
//                   placeholder="Create a strong password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   autoComplete="new-password"
//                 />

//                 <button
//                   type="button"
//                   className="register-password-toggle"
//                   onClick={() =>
//                     setShowPassword(!showPassword)
//                   }
//                 >
//                   {showPassword ? (
//                     <EyeOff size={18} />
//                   ) : (
//                     <Eye size={18} />
//                   )}
//                 </button>
//               </div>

//               {formData.password && (
//                 <div className="password-strength">

//                   <div className="strength-bars">
//                     {[1, 2, 3, 4, 5].map(
//                       (item) => (
//                         <span
//                           key={item}
//                           className={
//                             item <=
//                             passwordStrength.score
//                               ? "filled"
//                               : ""
//                           }
//                         ></span>
//                       )
//                     )}
//                   </div>

//                   <div className="strength-info">
//                     <span>
//                       Password strength
//                     </span>

//                     <strong>
//                       {passwordStrength.label}
//                     </strong>
//                   </div>

//                 </div>
//               )}

//               {errors.password && (
//                 <span className="register-error">
//                   {errors.password}
//                 </span>
//               )}
//             </div>

//             <div className="register-form-group">
//               <label htmlFor="confirmPassword">
//                 Confirm Password
//               </label>

//               <div
//                 className={`register-input ${
//                   errors.confirmPassword
//                     ? "has-error"
//                     : ""
//                 }`}
//               >
//                 <Lock size={18} />

//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type={
//                     showConfirmPassword
//                       ? "text"
//                       : "password"
//                   }
//                   placeholder="Confirm your password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   autoComplete="new-password"
//                 />

//                 <button
//                   type="button"
//                   className="register-password-toggle"
//                   onClick={() =>
//                     setShowConfirmPassword(
//                       !showConfirmPassword
//                     )
//                   }
//                 >
//                   {showConfirmPassword ? (
//                     <EyeOff size={18} />
//                   ) : (
//                     <Eye size={18} />
//                   )}
//                 </button>
//               </div>

//               {formData.confirmPassword &&
//                 formData.password ===
//                   formData.confirmPassword && (
//                   <span className="password-match">
//                     <Check size={14} />
//                     Passwords match
//                   </span>
//                 )}

//               {errors.confirmPassword && (
//                 <span className="register-error">
//                   {errors.confirmPassword}
//                 </span>
//               )}
//             </div>

//             <div className="terms-section">

//               <label className="terms-checkbox">

//                 <input
//                   type="checkbox"
//                   checked={agreeTerms}
//                   onChange={(e) =>
//                     setAgreeTerms(e.target.checked)
//                   }
//                 />

//                 <span className="terms-box">
//                   <Check size={13} />
//                 </span>

//                 <span>
//                   I agree to the{" "}
//                   <Link to="/terms">
//                     Terms of Service
//                   </Link>{" "}
//                   and{" "}
//                   <Link to="/privacy">
//                     Privacy Policy
//                   </Link>
//                 </span>

//               </label>

//               {errors.terms && (
//                 <span className="register-error">
//                   {errors.terms}
//                 </span>
//               )}

//             </div>

//             <button
//               type="submit"
//               className="register-submit"
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <Loader2
//                     size={19}
//                     className="register-loading"
//                   />
//                   Creating account...
//                 </>
//               ) : (
//                 <>
//                   Create Account
//                   <ArrowRight size={19} />
//                 </>
//               )}
//             </button>

//           </form>

//           <div className="register-divider">
//             <span>Already have an account?</span>
//           </div>

//           <Link
//             to="/login"
//             className="back-login"
//           >
//             <UserPlus size={17} />
//             Sign in to your account
//           </Link>

//         </section>

//       </div>
//     </main>
//   );
// };

// export default Register;

import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  Truck,
  User,
  UserPlus,
  AtSign,
  Loader2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // ==========================================
  // BACKEND API
  // ==========================================

  const API_URL = "http://localhost:8000/api/auth/register";

  // ==========================================
  // PASSWORD STRENGTH
  // ==========================================

  const passwordStrength = useMemo(() => {
    const password = formData.password;

    if (!password) {
      return {
        score: 0,
        label: "",
      };
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
      return {
        score,
        label: "Weak",
      };
    }

    if (score <= 3) {
      return {
        score,
        label: "Medium",
      };
    }

    if (score <= 4) {
      return {
        score,
        label: "Strong",
      };
    }

    return {
      score,
      label: "Very Strong",
    };
  }, [formData.password]);

  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      submit: "",
    }));
  };

  // ==========================================
  // VALIDATION
  // ==========================================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Enter a valid name";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = "Only letters, numbers and underscore are allowed";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!agreeTerms) {
      newErrors.terms = "Please accept the terms and privacy policy";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ==========================================
  // REGISTER → BACKEND
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Data sent to backend
      const registerData = {
        name: formData.name.trim(),
        username: formData.username.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      };

      console.log("Sending Register Data:", registerData);

      // ========================================
      // POST REQUEST
      // http://localhost:5000/api/auth/register
      // ========================================

      const response = await axios.post(API_URL, registerData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      console.log("Register Response:", response.data);

      // ========================================
      // SUCCESS
      // ========================================

      alert(response.data?.message || "Account created successfully!");

      // Login page
      navigate("/login");
    } catch (error) {
      console.error("Register Error:", error);

      // ========================================
      // BACKEND ERROR
      // ========================================

      if (error.response) {
        console.log("Backend Response:", error.response.data);

        setErrors({
          submit:
            error.response.data?.message ||
            error.response.data?.error ||
            "Registration failed. Please try again.",
        });
      } else if (error.request) {
        setErrors({
          submit:
            "Backend server is not responding. Please make sure Node.js server is running.",
        });
      } else {
        setErrors({
          submit: "Something went wrong. Please try again.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="register-page">
      <div className="register-shape register-shape-one"></div>
      <div className="register-shape register-shape-two"></div>

      <div className="register-container">
        {/* ======================================
            LEFT INFORMATION
        ====================================== */}

        <section className="register-info">
          <div className="register-brand">
            <div className="register-brand-icon">P</div>

            <div>
              <h1>Pashupati</h1>
              <span>PACKERS & MOVERS</span>
            </div>
          </div>

          <div className="register-info-content">
            <span className="register-badge">
              <ShieldCheck size={16} />
              Trusted Moving Partner
            </span>

            <h2>
              Start your journey
              <span> with Pashupati.</span>
            </h2>

            <p>
              Create your account and get access to professional packing,
              moving, transportation and relocation services across Nepal.
            </p>

            <div className="register-benefits">
              <div className="register-benefit">
                <div className="benefit-icon">
                  <Truck size={20} />
                </div>

                <div>
                  <strong>Professional Moving Services</strong>

                  <span>Reliable household and office relocation.</span>
                </div>
              </div>

              <div className="register-benefit">
                <div className="benefit-icon">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <strong>Easy Booking Management</strong>

                  <span>Manage your bookings from one place.</span>
                </div>
              </div>

              <div className="register-benefit">
                <div className="benefit-icon">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <strong>Secure & Protected</strong>

                  <span>Your account information stays secure.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="register-info-footer">
            <span>© {new Date().getFullYear()} Pashupati Packers & Movers</span>

            <div>
              <Link to="/privacy">Privacy</Link>

              <Link to="/terms">Terms</Link>
            </div>
          </div>
        </section>

        {/* ======================================
            REGISTER CARD
        ====================================== */}

        <section className="register-card">
          <div className="mobile-register-brand">
            <div className="register-brand-icon">P</div>

            <div>
              <h1>Pashupati</h1>
              <span>PACKERS & MOVERS</span>
            </div>
          </div>

          <div className="register-header">
            <span className="register-welcome">Get started</span>

            <h2>Create your account</h2>

            <p>Join Pashupati and manage your moving services easily.</p>
          </div>

          {/* ======================================
              BACKEND ERROR
          ====================================== */}

          {errors.submit && (
            <div className="register-alert">{errors.submit}</div>
          )}

          <form className="register-form" onSubmit={handleSubmit}>
            {/* NAME + USERNAME */}

            <div className="register-form-row">
              <div className="register-form-group">
                <label htmlFor="name">Full Name</label>

                <div
                  className={`register-input ${errors.name ? "has-error" : ""}`}
                >
                  <User size={18} />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>

                {errors.name && (
                  <span className="register-error">{errors.name}</span>
                )}
              </div>

              <div className="register-form-group">
                <label htmlFor="username">Username</label>

                <div
                  className={`register-input ${
                    errors.username ? "has-error" : ""
                  }`}
                >
                  <AtSign size={18} />

                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Choose username"
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="username"
                  />
                </div>

                {errors.username && (
                  <span className="register-error">{errors.username}</span>
                )}
              </div>
            </div>

            {/* EMAIL */}

            <div className="register-form-group">
              <label htmlFor="email">Email Address</label>

              <div
                className={`register-input ${errors.email ? "has-error" : ""}`}
              >
                <Mail size={18} />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>

              {errors.email && (
                <span className="register-error">{errors.email}</span>
              )}
            </div>

            {/* PASSWORD */}

            <div className="register-form-group">
              <label htmlFor="password">Password</label>

              <div
                className={`register-input ${
                  errors.password ? "has-error" : ""
                }`}
              >
                <Lock size={18} />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {formData.password && (
                <div className="password-strength">
                  <div className="strength-bars">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <span
                        key={item}
                        className={
                          item <= passwordStrength.score ? "filled" : ""
                        }
                      ></span>
                    ))}
                  </div>

                  <div className="strength-info">
                    <span>Password strength</span>

                    <strong>{passwordStrength.label}</strong>
                  </div>
                </div>
              )}

              {errors.password && (
                <span className="register-error">{errors.password}</span>
              )}
            </div>

            {/* CONFIRM PASSWORD */}

            <div className="register-form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>

              <div
                className={`register-input ${
                  errors.confirmPassword ? "has-error" : ""
                }`}
              >
                <Lock size={18} />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {formData.confirmPassword &&
                formData.password === formData.confirmPassword && (
                  <span className="password-match">
                    <Check size={14} />
                    Passwords match
                  </span>
                )}

              {errors.confirmPassword && (
                <span className="register-error">{errors.confirmPassword}</span>
              )}
            </div>

            {/* TERMS */}

            <div className="terms-section">
              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />

                <span className="terms-box">
                  <Check size={13} />
                </span>

                <span>
                  I agree to the <Link to="/terms">Terms of Service</Link> and{" "}
                  <Link to="/privacy">Privacy Policy</Link>
                </span>
              </label>

              {errors.terms && (
                <span className="register-error">{errors.terms}</span>
              )}
            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              className="register-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 size={19} className="register-loading" />
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight size={19} />
                </>
              )}
            </button>
          </form>

          <div className="register-divider">
            <span>Already have an account?</span>
          </div>

          <Link to="/login" className="back-login">
            <UserPlus size={17} />
            Sign in to your account
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Register;
