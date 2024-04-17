import React from 'react';

function Sidebar({ isOpen }) {
    const sidebarClasses = isOpen
      ? "bg-gray-200 text-black h-full w-65 fixed top-0 left-0 overflow-y-auto z-50 transform transition-transform"
      : "bg-gray-200 text-black h-full w-65 fixed top-0 left-0 overflow-y-auto z-50 transform -translate-x-full transition-transform";
  
    return (
      <div id="sidebar" className={sidebarClasses}>
      <div className="p-4">
        {/* Sidebar Content */}
        {/* User Info */}
        <div className="flex items-center mb-4">
          <span className="text-black mr-2">refero team</span>
          <img
            src="images/bell.png"
            alt="Bell Icon"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Ask your AI assistant"
            className="w-full px-3 py-2 bg-gray-10 text-black rounded-md pl-10"
          />
          <img
            src="images/search.png"
            alt="Search Icon"
            className="absolute top-3 left-3 w-4 h-4 cursor-pointer"
          />
        </div>
        {/* Usage Card */}
        <div className="bg-gray-400 text-black px-4 py-3 mb-4 rounded-md cursor-pointer">
          <p className="font-bold">Your team used 8/50 free docs</p>
          <p>Upgrade to create unlimited docs</p>
        </div>
        {/* Sidebar Sections */}
        <div>
          {/* Add icon image in front of "Catch up" */}
          <div className="flex items-center text-black mb-2 cursor-pointer hover:bg-blue-300 rounded-md">
            <img src="images/clock.png" alt="Time Icon" className="w-4 h-4 mr-2" />
            <p>Catch up</p>
          </div>
          {/* Add icon image in front of "Discussion" */}
          <div className="flex items-center text-black mb-2 cursor-pointer hover:bg-blue-300 rounded-md">
            <img src="images/chat.png" alt="Chat Icon" className="w-4 h-4 mr-2" />
            <p>Discussion</p>
          </div>
          {/* Add icon image in front of "Favorites" */}
          <p className="text-black font-bold mb-2">Favorites</p>
          {/* Add icon image in front of "Getting started" */}
          <div className="flex items-center text-black mb-2 cursor-pointer hover:bg-blue-300 rounded-md">
            <img src="images/waving-hand.png" alt="Hand Icon" className="w-4 h-4 mr-2" />
            <p>Getting started</p>
          </div>
        </div>
        {/* My Channels */}
        <div>
          <p className="text-black font-bold mb-2">My Channels</p>
          {/* Add icon image in front of "My private channel" */}
          <div className="flex items-center text-black mb-2 cursor-pointer hover:bg-blue-300 rounded-md">
            <img src="images/padlock.png" alt="Lock Icon" className="w-4 h-4 mr-2" />
            <p>My private channel</p>
          </div>
          {/* Add icon image in front of "Engineering" */}
          <div className="flex items-center text-black mb-2 cursor-pointer hover:bg-blue-300 rounded-md">
            <img src="images/technology.png" alt="Project Icon" className="w-4 h-4 mr-2" />
            <p>Engineering</p>
          </div>
          {/* Add icon image in front of "Product" */}
          <div className="flex items-center text-black mb-2 cursor-pointer hover:bg-blue-300 rounded-md">
            <img src="images/layers.png" alt="Project Icon" className="w-4 h-4 mr-2" />
            <p>Product</p>
          </div>
        </div>
        {/* Bottom Links */}
        <div>
          {/* Add icon image in front of "Add people" */}
          <div className="flex items-center text-black mb-2 cursor-pointer hover:bg-blue-300 rounded-md">
            <img src="images/user.png" alt="User Icon" className="w-4 h-4 mr-2" />
            <p>Add people</p>
          </div>
          {/* Add icon image in front of "Templates" */}
          <div className="flex items-center text-black mb-2 cursor-pointer hover:bg-blue-300 rounded-md">
            <img src="images/layout.png" alt="Template Icon" className="w-4 h-4 mr-2" />
            <p>Templates</p>
          </div>
          {/* Add icon image in front of "Shared with me" */}
          <div className="flex items-center text-black mb-2 cursor-pointer hover:bg-blue-300 rounded-md">
            <img src="images/shared.png" alt="Shared Icon" className="w-4 h-4 mr-2" />
            <p>Shared with me</p>
          </div>
          {/* Add icon image in front of "Archive" */}
          <div className="flex items-center text-black mb-2 cursor-pointer hover:bg-blue-300 rounded-md">
            <img src="images/archive.png" alt="Archive Icon" className="w-4 h-4 mr-2" />
            <p>Archive</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
