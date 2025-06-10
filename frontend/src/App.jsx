import React from 'react';
import { Navigate, Route,Routes } from "react-router";
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import NotificationsPage from './pages/NotificationsPage';
import CallPage from './pages/CallPage';
import ChatPage from './pages/ChatPage';
import OnboardingPage from './pages/OnboardingPage';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { axiosInstance } from './lib/axios';
import { useQuery } from '@tanstack/react-query';




export const App = () => {
  
  const { data:authData , isLoading, error} = useQuery({
    queryKey: ["authUser"],

    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
    retry: false, // auth check
  });

  const authUser = authData?.user

  return (
    <div className='h-screen' data-theme="forest">
      <button onClick={() => toast.error("Hello world!")}>Create a toast</button>
      <Routes>

        <Route path="/" element={authUser ?<HomePage /> : <Navigate to="/login"/>} />

        <Route path="/signup" element={!authUser ?<SignUpPage/> : <Navigate to="/"/> }/>

        <Route path="/login" element={!authUser ?<LoginPage/> : <Navigate to="/"/>}/>

        <Route path="/notification" element={authUser ? <NotificationsPage/> : <Navigate to="/login"/>}/>

        <Route path="/call" element={authUser ? <CallPage/>: <Navigate to="/"/>} />

        <Route path="/chat" element={authUser ? <ChatPage/>: <Navigate to="/"/>} />

        <Route path="/onboarding" element={authUser ? <OnboardingPage/>: <Navigate to="/"/>} />

      </Routes>

      <Toaster />
   </div>
  )
}


export default App;