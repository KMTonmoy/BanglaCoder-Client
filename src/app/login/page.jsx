'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B1221] flex items-center justify-center p-4">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#07A8ED] filter blur-3xl opacity-10"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-[#3B82F6] filter blur-3xl opacity-10"
            animate={{
              x: [0, -40, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </motion.div>

      {/* Login Card */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-[#0B1221]/90 backdrop-blur-sm border border-[#1E3A8A] rounded-xl overflow-hidden shadow-2xl"
      >
        <div className="p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-[#07A8ED] mb-2">Welcome Back</h2>
            <p className="text-[#E5E7EB]">Sign in to your BanglaCoder account</p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Email Field */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-[#E5E7EB] mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0B1221] border border-[#1E3A8A] rounded-lg text-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#07A8ED] transition-all"
                  required
                />
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="password" className="block text-sm font-medium text-[#E5E7EB] mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0B1221] border border-[#1E3A8A] rounded-lg text-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#07A8ED] transition-all"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-4 rounded-lg font-bold transition-all ${isLoading ? 'bg-[#07A8ED]/70 cursor-not-allowed' : 'bg-[#07A8ED] hover:bg-[#3B82F6]'} text-[#0B1221] flex items-center justify-center`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing In...
                    </>
                  ) : 'Sign In'}
                </button>
              </motion.div>
            </div>
          </form>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-center text-sm text-[#E5E7EB]"
          >
            <p>
              Don't have an account?{' '}
              <a href="/register" className="text-[#07A8ED] hover:underline font-medium">
                Register
              </a>
            </p>
            <p className="mt-2">
              <a href="/forgot-password" className="text-[#07A8ED] hover:underline">
                Forgot password?
              </a>
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#07A8ED] via-[#3B82F6] to-[#07A8ED]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </motion.div>
    </div>
  );
};

export default LoginPage;