import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label, TextInput, Button, Select, Alert } from "flowbite-react";
import { motion } from "framer-motion";
import { HiInformationCircle } from "react-icons/hi";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      setLoading(false);

      if (!res.ok) {
        setError(data.message);
        return;
      }

      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              E-Tailor
            </span>
          </Link>
          <p className="text-sm mt-5">
            Welcome to E-Tailor. Sign up to connect with skilled tailors or
            start your journey as a tailor.
          </p>
        </motion.div>

        {/* right */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Select Role" />
              <Select id="role" onChange={handleChange} required>
                <option value="user">User</option>
                <option value="tailor">Tailor</option>
              </Select>
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Loading...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          {error && (
            <Alert className="mt-5" color="failure" icon={HiInformationCircle}>
              {error}
            </Alert>
          )}
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
