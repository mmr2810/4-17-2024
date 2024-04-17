import React from 'react';

function Header({ toggleSidebar, share, feedback, favorite, showOptions }) {
  return (
    <div className="container mx-auto mt-8 p-8 flex items-center justify-between">
      <img
        id="sidebar-icon"
        src="images/sidebar.png"
        alt="Sidebar Icon"
        className="w-6 h-6 cursor-pointer"
        onClick={toggleSidebar}
      />
      {/* Additional buttons in the content part */}
      <div className="flex items-center space-x-4">
        {/* Share button with icon */}
        <img
          src="images/share.png"
          alt="Share Icon"
          className="w-6 h-6 cursor-pointer"
          onClick={share}
        />
        {/* Feedback button with icon */}
        <img
          src="images/feedback.png"
          alt="Feedback Icon"
          className="w-6 h-6 cursor-pointer"
          onClick={feedback}
        />
        {/* Favorite button with icon */}
        <img
          src="images/favorite.png"
          alt="Favorite Icon"
          className="w-6 h-6 cursor-pointer"
          onClick={favorite}
        />
        {/* Three dots button with icon */}
        <img
          src="images/dots.png"
          alt="Dots Icon"
          className="w-6 h-6 cursor-pointer"
          onClick={showOptions}
        />
      </div>
    </div>
  );
}

export default Header;
