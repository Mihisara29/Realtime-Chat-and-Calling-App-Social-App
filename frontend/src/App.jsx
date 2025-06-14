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
import PageLoader from './components/PageLoader';
import useAuthUser from './hooks/useAuthUser';





export const App = () => {
  
const { isLoading, authUser} = useAuthUser();

const isAuthenticated = Boolean(authUser);
const isOnboarded = authUser?.isOnboarded ;

  if(isLoading) return <PageLoader />

  return (
    <div className='h-screen' data-theme="forest">
      
      <Routes>

        <Route 
            path="/" 
            element={isAuthenticated && isOnboarded ?(<HomePage />) : <Navigate to={!isAuthenticated ? "/login" : "/onboarding"}  />} />

        <Route path="/signup" element={!isAuthenticated ?<SignUpPage/> : <Navigate to={
          isOnboarded ? "/" : "/onboarding"}
          /> }/>

        <Route path="/login" element={!isAuthenticated ?<LoginPage/> : <Navigate to={
          isOnboarded ? "/" : "/onboarding"}
          />}/>

        <Route path="/notification" element={isAuthenticated ? <NotificationsPage/> : <Navigate to="/login"/>}/>

        <Route path="/call" element={isAuthenticated ? <CallPage/>: <Navigate to="/"/>} />

        <Route path="/chat" element={isAuthenticated ? <ChatPage/>: <Navigate to="/"/>} />

        <Route path="/onboarding" element={isAuthenticated ? (
          !isOnboarded ? (
            <OnboardingPage />
          ) : (<Navigate to="/"/>)
        ) : (
          <Navigate to="/login" />
        )} />

      </Routes>

      <Toaster />
   </div>
  )
}


export default App;