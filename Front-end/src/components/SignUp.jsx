// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";
// import "./styles/LoginPage.css"; // reuse same css

// function SignUp() {
//   const [username, setId] = useState("");  // using `id` because backend may expect this
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [role, setRole] = useState("Member"); // default Member
//   const navigate = useNavigate();
//   async function handleLogin(event) {
//     event.preventDefault();
//     const username = event.target.username.value;
//     const password = event.target.password.value;
//     const confirmpassword = event.target.confirmpassword.value;
//     const role = event.target.role?.value || "Member";
//     if (password !== confirmpassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     try {
//       const response = await fetch("http://localhost:8080/user/sign-in", {  // adjust URL if needed
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password, role }),
//       });
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(errorText || "Signup failed");
//       }
//       const data = await response.text();
//       console.log("Response from backend:", data);
//       alert(data.message || "Signup successful!");
//       // navigate("/login-intimation", { state: { role } });
      // try {
      //   const response_log = await fetch("http://localhost:8080/user/log-in", {  // adjust URL if needed
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ username, password, role }),
      //   });
      //   if (!response_log.ok) {
      //     const errorText = await response_log.text();
      //     throw new Error(errorText || "Signup failed");
      //   }
      //   const data = await response_log.text();
      //   console.log("Response from backend:", data);
      //   alert(data.message || "Signup successful!");
      //   navigate("/login-intimation", { state: { role } });
      // } catch (error) {
      //   console.error("Error:", error);
      //   alert("Signup failed: " + error.message);
      // }

//     } catch (error) {
//       console.error("Error:", error);
//       alert("Signup failed: " + error.message);
//     }
//   };
//   return (
//     <div className="page-container">
//       <Header />
//       <div className="login-box">
//         <h2>Sign Up</h2>
//         {/* <form onSubmit={handleSignUp}>
//           <input
//             type="text"
//             name="username"
//             placeholder="User ID"
//             value={username}
//             onChange={(e) => setId(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             name="confirmpassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           <select
//             value={role}
//             name="role"
//             onChange={(e) => setRole(e.target.value)}
//             className="role-dropdown"
//             required
//           >
//             <option value="Member">Member</option>
//             <option value="Staff">Staff</option>
//           </select>
//           <button type="submit">Sign Up</button>
//         </form> */}
//         <form onSubmit={handleLogin}>
//           <input type="text" name="username" placeholder="Username" required
//             className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
//           <input type="password" name="password" placeholder="Password" required
//             className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
//           <input type="password" name="confirmpassword" placeholder="ConfirmPassword" required
//             className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
//           <button type="submit"
//             className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
//             Sign Up
//           </button>
//         </form>
//         <div className="signup-link">
//           <span>Already have an account?</span>
//           <a
//             href="#"
//             onClick={(e) => {
//               e.preventDefault();
//               navigate("/login-intimation");
//             }}
//             className="signup-btn"
//           >
//             Login
//           </a>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
// export default SignUp;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/LoginPage.css";

function SignUp() {
  const [username, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Member"); // default Member

  const navigate = useNavigate();

  async function handleSignUp(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/user/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Signup failed");
      }

      // Expecting token in server response (plain text or JSON)
      const text = await response.text();
      console.log("Response from backend"+text);

      let token;
      // try {
      //   const data = JSON.parse(text);
      //   token = data.token; // if backend responds { token: "..." }
      //   console.log("Response from backend" 
      //     +token);
      // } catch {
      //   token = text; // if backend sends plain token
      // }
      try {
        const response_log = await fetch("http://localhost:8080/user/log-in", {  // adjust URL if needed
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password, role }),
        });
        if (!response_log.ok) {
          const errorText = await response_log.text();
          throw new Error(errorText || "Signup failed");
        }
        const data = await response_log.text();
        console.log("Response from backend:", data);
        alert(data.message || "Signup successful!");
        if (data!=="") {
          console.log(data);
          localStorage.setItem("token", data);
          //console.log(JSON.parse(localStorage.getItem("user")));
          navigate("/entity", { state: { username, role } });
        } else {
          alert("Invalid credentials");
        }
       

      } catch (error) {
        console.error("Error:", error);
        alert("Signup failed: " + error.message);
      }

      // Navigate to Entity.jsx passing token, username, and role
      // navigate("/entity", {
      //   state: { token, username, role },
      // });
    } catch (error) {
      console.error("Error:", error);
      alert("Signup failed: " + error.message);
    }
  }

  return (
    <div className="page-container">
      <Header />
      <div className="login-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text" name="username" placeholder="Username"
            value={username}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <input
            type="password" name="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password" name="confirmpassword" placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <select
            value={role}
            name="role"
            onChange={(e) => setRole(e.target.value)}
            className="role-dropdown"
            required
          >
            <option value="Member">Member</option>
            <option value="Staff">Staff</option>
          </select>
          <button type="submit">
            Sign Up
          </button>
        </form>
        <div className="signup-link">
          <span>Already have an account?</span>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/login-intimation");
            }}
            className="signup-btn"
          >
            Login
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
