import React, { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password,  });
  };

  return (
    <div className="w-full flex flex-col bg-[#F5F5F5]  dark:border-gray-700">
    
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-200 rounded-lg shadow-md">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Login</h1>
        <p >Welcome back please enter your details</p>
        <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <button type="submit" className="w-full bg-orange-400 text-white py-2 px-4">
            Login
        </button>
    </form>
       
    
    </div>
   
  );
};

export default LoginForm;
