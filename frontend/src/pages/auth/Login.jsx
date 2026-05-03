import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../redux/reducers/authReducer'
import { useNavigate } from 'react-router-dom';

// Lucide Icons
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(userLogin(form))
    navigate("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-8 bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 ">

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Show/Hide Icon */}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-green-600 cursor-pointer"
          >
            Register
          </span>
        </p>

      </div>

    </div>
  )
}

export default Login