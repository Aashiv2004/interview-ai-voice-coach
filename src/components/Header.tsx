
import React from 'react';
import { Mic } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-6">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="bg-interview-primary p-3 rounded-full text-white">
            <Mic className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-interview-primary">
              AI Interview Coach
            </h1>
            <p className="text-interview-secondary">Master technical interviews with AI-powered practice</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
