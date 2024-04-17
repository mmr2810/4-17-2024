import React from 'react';

function MainContent() {
  return (
    <div className="container mx-auto mt-8">
      {/* Getting Started */}
      <h2 className="text-5xl font-bold mb-4">Getting started</h2>
      {/* Card */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-8">
        <p>
          This doc is in your private channel, where you can store your private
          work. You can share docs one by one from here, but to properly
          organize your team's knowledge base, use workspace channels.
        </p>
        <p>
          You can make channels public to make all docs visible to everyone on
          the team, or private if you want the channel's docs to only be visible
          by a selection of teammates.
        </p>
      </div>
      {/* Collaborate with your team */}
      <h2 className="text-3xl font-bold mb-4">
        Collaborate with your team with these three features
      </h2>
      <div className="bg-blue-200 p-4 rounded-lg flex items-center">
        {/* Left side */}
        <div className="mr-4">
          <div className="p-4 rounded-lg">
            <p className="font-bold">Create docs to collaborate with your team.</p>
            <p>
              Type / to discover Slite's editor tools and bring your docs to
              life.
            </p>
          </div>
        </div>
        {/* Right side */}
        <div>
          <img src="images/image.jpg" alt="Img" className="w-64 h-auto" />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
