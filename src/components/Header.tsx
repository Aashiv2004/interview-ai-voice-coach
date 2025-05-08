
import React from 'react';
import { Mic } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCapIcon } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="py-6">
      <div className="flex items-center justify-between">
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
        
        <div>
          <Link to={location.pathname === "/portfolio" ? "/" : "/portfolio"}>
            <Button variant="outline" className="flex items-center gap-2">
              {location.pathname === "/portfolio" ? (
                <>
                  <Mic className="h-4 w-4" />
                  <span>Interview Simulator</span>
                </>
              ) : (
                <>
                  <GraduationCapIcon className="h-4 w-4" />
                  <span>Portfolio</span>
                </>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
