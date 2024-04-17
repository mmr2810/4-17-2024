import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  // Define state to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close sidebar when clicking outside
  const handleOutsideClick = (event) => {
    const sidebar = document.getElementById("sidebar");
    const sidebarIcon = document.getElementById("sidebar-icon");
    if (
      !sidebar.contains(event.target) &&
      !sidebarIcon.contains(event.target)
    ) {
      setIsSidebarOpen(false);
    }
  };

  // Attach click event listener to document
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Functions for header buttons
  const share = () => {
    // Handle share button action
  };

  const feedback = () => {
    // Handle feedback button action
  };

  const favorite = () => {
    // Handle favorite button action
  };

  const showOptions = () => {
    // Handle three dots button action
  };

  return (
    <div className="bg-gray-100">
      <Header 
        toggleSidebar={toggleSidebar} 
        share={share} 
        feedback={feedback} 
        favorite={favorite} 
        showOptions={showOptions} 
      />
      <Sidebar isOpen={isSidebarOpen} />
      <MainContent />
    </div>
  );
}

export default App;
