// import React, { useState } from "react";
// import {
//   Eye,
//   EyeOff,
//   Lock,
//   Mail,
//   ArrowRight,
//   ShieldCheck,
//   Truck,
//   UserPlus,
//   CheckCircle2,
//   Loader2,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.email.trim()) {
//       newErrors.email = "Email address is required";
//     } else if (
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
//     ) {
//       newErrors.email = "Enter a valid email address";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password =
//         "Password must be at least 6 characters";
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

//       console.log("Login Data:", {
//         ...formData,
//         rememberMe,
//       });

//       navigate("/");
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="login-page">
//       <div className="login-background-shape shape-one"></div>
//       <div className="login-background-shape shape-two"></div>

//       <div className="login-container">

//         <section className="login-info">

//           <div className="login-brand">
//             <div className="login-brand-icon">
//               P
//             </div>

//             <div>
//               <h1>Pashupati</h1>
//               <span>PACKERS & MOVERS</span>
//             </div>
//           </div>

//           <div className="login-info-content">
//             <span className="login-badge">
//               <ShieldCheck size={16} />
//               Secure Customer Portal
//             </span>

//             <h2>
//               Move with confidence.
//               <span> We move your world.</span>
//             </h2>

//             <p>
//               Access your Pashupati account to manage
//               bookings, track shipments, view enquiries,
//               and manage your relocation services.
//             </p>

//             <div className="login-features">

//               <div className="login-feature">
//                 <div className="feature-icon">
//                   <Truck size={20} />
//                 </div>

//                 <div>
//                   <strong>Track Your Shipment</strong>
//                   <span>
//                     Get real-time relocation updates.
//                   </span>
//                 </div>
//               </div>

//               <div className="login-feature">
//                 <div className="feature-icon">
//                   <CheckCircle2 size={20} />
//                 </div>

//                 <div>
//                   <strong>Manage Your Bookings</strong>
//                   <span>
//                     View and manage your services.
//                   </span>
//                 </div>
//               </div>

//               <div className="login-feature">
//                 <div className="feature-icon">
//                   <ShieldCheck size={20} />
//                 </div>

//                 <div>
//                   <strong>Secure Account</strong>
//                   <span>
//                     Your information stays protected.
//                   </span>
//                 </div>
//               </div>

//             </div>
//           </div>

//           <div className="login-info-footer">
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

//         <section className="login-card">

//           <div className="mobile-brand">
//             <div className="login-brand-icon">
//               P
//             </div>

//             <div>
//               <h1>Pashupati</h1>
//               <span>PACKERS & MOVERS</span>
//             </div>
//           </div>

//           <div className="login-header">
//             <span className="welcome-text">
//               Welcome back
//             </span>

//             <h2>Sign in to your account</h2>

//             <p>
//               Enter your credentials to continue.
//             </p>
//           </div>

//           <form
//             className="login-form"
//             onSubmit={handleSubmit}
//           >

//             <div className="form-group">
//               <label htmlFor="email">
//                 Email Address
//               </label>

//               <div
//                 className={`input-wrapper ${
//                   errors.email ? "input-error" : ""
//                 }`}
//               >
//                 <Mail size={19} />

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
//                 <span className="error-message">
//                   {errors.email}
//                 </span>
//               )}
//             </div>

//             <div className="form-group">
//               <div className="password-label">
//                 <label htmlFor="password">
//                   Password
//                 </label>

//                 <Link to="/forgot-password">
//                   Forgot password?
//                 </Link>
//               </div>

//               <div
//                 className={`input-wrapper ${
//                   errors.password ? "input-error" : ""
//                 }`}
//               >
//                 <Lock size={19} />

//                 <input
//                   id="password"
//                   name="password"
//                   type={
//                     showPassword ? "text" : "password"
//                   }
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   autoComplete="current-password"
//                 />

//                 <button
//                   type="button"
//                   className="password-toggle"
//                   onClick={() =>
//                     setShowPassword(!showPassword)
//                   }
//                   aria-label={
//                     showPassword
//                       ? "Hide password"
//                       : "Show password"
//                   }
//                 >
//                   {showPassword ? (
//                     <EyeOff size={19} />
//                   ) : (
//                     <Eye size={19} />
//                   )}
//                 </button>
//               </div>

//               {errors.password && (
//                 <span className="error-message">
//                   {errors.password}
//                 </span>
//               )}
//             </div>

//             <div className="login-options">
//               <label className="remember-me">
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) =>
//                     setRememberMe(e.target.checked)
//                   }
//                 />

//                 <span className="custom-checkbox">
//                   <CheckCircle2 size={14} />
//                 </span>

//                 <span>Remember me</span>
//               </label>
//             </div>

//             <button
//               type="submit"
//               className="login-submit"
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <Loader2
//                     size={20}
//                     className="loading-icon"
//                   />
//                   Signing in...
//                 </>
//               ) : (
//                 <>
//                   Sign In
//                   <ArrowRight size={19} />
//                 </>
//               )}
//             </button>

//           </form>

//           <div className="divider">
//             <span>or continue with</span>
//           </div>

//           <div className="social-login">

//             <button
//               type="button"
//               className="social-login-button"
//             >
//               <span className="google-icon">
//                 G
//               </span>
//               Google
//             </button>

//             <button
//               type="button"
//               className="social-login-button"
//             >
//               <span className="facebook-icon">
//                 f
//               </span>
//               Facebook
//             </button>

//           </div>

//           <div className="register-prompt">
//             <span>
//               Don't have an account?
//             </span>

//             <Link to="/register">
//               <UserPlus size={16} />
//               Create account
//             </Link>
//           </div>

//         </section>

//       </div>
//     </main>
//   );
// };

// export default Login;
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  Truck,
  UserPlus,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // ==========================================
  // BACKEND API URL
  // ==========================================

  const API_URL = "http://localhost:8000/api/auth/login";

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

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ==========================================
  // LOGIN API
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear old errors
    setErrors({});

    // Validate
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // ========================================
      // LOGIN DATA
      // ========================================

      const loginData = {
        email: formData.email.trim().toLowerCase(),

        password: formData.password,
      };

      console.log("LOGIN REQUEST:", loginData);

      // ========================================
      // POST REQUEST
      // ========================================

      const response = await axios.post(API_URL, loginData, {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,

        timeout: 10000,
      });

      console.log("LOGIN RESPONSE:", response.data);

      // ========================================
      // GET RESPONSE DATA
      // ========================================

      const data = response.data;

      // ========================================
      // ACCESS TOKEN
      // ========================================

      const accessToken =
        data?.accessToken ||
        data?.token ||
        data?.data?.accessToken ||
        data?.data?.token;

      // ========================================
      // USER
      // ========================================

      const user = data?.user || data?.data?.user || null;

      // ========================================
      // SAVE TOKEN
      // ========================================

      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
      }

      // ========================================
      // SAVE USER
      // ========================================

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      // ========================================
      // REMEMBER ME
      // ========================================

      localStorage.setItem("rememberMe", rememberMe ? "true" : "false");

      // ========================================
      // SUCCESS
      // ========================================

      console.log("LOGIN SUCCESS");

      alert(data?.message || "Login successful!");

      // ========================================
      // REDIRECT
      // ========================================

      navigate("/");
    } catch (error) {
      console.error("LOGIN ERROR:", error);

      // ========================================
      // BACKEND RESPONSE ERROR
      // ========================================

      if (error.response) {
        const status = error.response.status;

        const data = error.response.data;

        console.log("STATUS:", status);

        console.log("BACKEND ERROR:", data);

        // ----------------------------------------
        // 401 UNAUTHORIZED
        // ----------------------------------------

        if (status === 401) {
          setErrors({
            submit: data?.message || "Invalid email or password.",
          });

          return;
        }

        // ----------------------------------------
        // 400 BAD REQUEST
        // ----------------------------------------

        if (status === 400) {
          setErrors({
            submit: data?.message || "Please enter valid login details.",
          });

          return;
        }

        // ----------------------------------------
        // 403 FORBIDDEN
        // ----------------------------------------

        if (status === 403) {
          setErrors({
            submit: data?.message || "Your account is not allowed to login.",
          });

          return;
        }

        // ----------------------------------------
        // 404 NOT FOUND
        // ----------------------------------------

        if (status === 404) {
          setErrors({
            submit: data?.message || "Account not found.",
          });

          return;
        }

        // ----------------------------------------
        // 422 VALIDATION
        // ----------------------------------------

        if (status === 422) {
          setErrors({
            submit: data?.message || "Please check your email and password.",
          });

          return;
        }

        // ----------------------------------------
        // 500 SERVER ERROR
        // ----------------------------------------

        if (status >= 500) {
          setErrors({
            submit: "Server error. Please try again later.",
          });

          return;
        }

        // ----------------------------------------
        // OTHER ERROR
        // ----------------------------------------

        setErrors({
          submit:
            data?.message || data?.error || "Login failed. Please try again.",
        });

        return;
      }

      // ========================================
      // SERVER NOT REACHABLE
      // ========================================

      if (error.request) {
        setErrors({
          submit:
            "Cannot connect to backend. Make sure Node.js server is running on port 5000.",
        });

        return;
      }

      // ========================================
      // UNKNOWN ERROR
      // ========================================

      setErrors({
        submit: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div className="login-background-shape shape-one"></div>
      <div className="login-background-shape shape-two"></div>

      <div className="login-container">
        {/* ======================================
            LEFT INFORMATION
        ====================================== */}

        <section className="login-info">
          <div className="login-brand">
            <div className="login-brand-icon">P</div>

            <div>
              <h1>Pashupati</h1>
              <span>PACKERS & MOVERS</span>
            </div>
          </div>

          <div className="login-info-content">
            <span className="login-badge">
              <ShieldCheck size={16} />
              Secure Customer Portal
            </span>

            <h2>
              Move with confidence.
              <span> We move your world.</span>
            </h2>

            <p>
              Access your Pashupati account to manage bookings, track shipments,
              view enquiries, and manage your relocation services.
            </p>

            <div className="login-features">
              <div className="login-feature">
                <div className="feature-icon">
                  <Truck size={20} />
                </div>

                <div>
                  <strong>Track Your Shipment</strong>

                  <span>Get real-time relocation updates.</span>
                </div>
              </div>

              <div className="login-feature">
                <div className="feature-icon">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <strong>Manage Your Bookings</strong>

                  <span>View and manage your services.</span>
                </div>
              </div>

              <div className="login-feature">
                <div className="feature-icon">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <strong>Secure Account</strong>

                  <span>Your information stays protected.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="login-info-footer">
            <span>© {new Date().getFullYear()} Pashupati Packers & Movers</span>

            <div>
              <Link to="/privacy">Privacy</Link>

              <Link to="/terms">Terms</Link>
            </div>
          </div>
        </section>

        {/* ======================================
            LOGIN CARD
        ====================================== */}

        <section className="login-card">
          <div className="mobile-brand">
            <div className="login-brand-icon">P</div>

            <div>
              <h1>Pashupati</h1>
              <span>PACKERS & MOVERS</span>
            </div>
          </div>

          <div className="login-header">
            <span className="welcome-text">Welcome back</span>

            <h2>Sign in to your account</h2>

            <p>Enter your credentials to continue.</p>
          </div>

          {/* ======================================
              BACKEND ERROR
          ====================================== */}

          {errors.submit && (
            <div className="register-alert">{errors.submit}</div>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            {/* EMAIL */}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <div
                className={`input-wrapper ${errors.email ? "input-error" : ""}`}
              >
                <Mail size={19} />

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
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            {/* PASSWORD */}

            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>

                <Link to="/forgot-password">Forgot password?</Link>
              </div>

              <div
                className={`input-wrapper ${
                  errors.password ? "input-error" : ""
                }`}
              >
                <Lock size={19} />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>

              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            {/* REMEMBER ME */}

            <div className="login-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />

                <span className="custom-checkbox">
                  <CheckCircle2 size={14} />
                </span>

                <span>Remember me</span>
              </label>
            </div>

            {/* LOGIN BUTTON */}

            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 size={20} className="loading-icon" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={19} />
                </>
              )}
            </button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-login">
            <button type="button" className="social-login-button">
              <span className="google-icon">G</span>
              Google
            </button>

            <button type="button" className="social-login-button">
              <span className="facebook-icon">f</span>
              Facebook
            </button>
          </div>

          <div className="register-prompt">
            <span>Don't have an account?</span>

            <Link to="/register">
              <UserPlus size={16} />
              Create account
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
