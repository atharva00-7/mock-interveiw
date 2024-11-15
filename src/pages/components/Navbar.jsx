import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinkStyles = "hover:text-slate-900 transition-colors";
  const activeStyle = "text-slate-900 font-medium";

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="text-xl font-bold text-slate-900"
          >
            Logo
          </NavLink>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `${navLinkStyles} ${isActive ? activeStyle : 'text-slate-600'}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink 
              to="/new-interview" 
              className={({ isActive }) => 
                `${navLinkStyles} ${isActive ? activeStyle : 'text-slate-600'}`
              }
            >
              New Interview
            </NavLink>
            <NavLink 
              to="/profile" 
              className={({ isActive }) => 
                `${navLinkStyles} flex items-center gap-2 ${isActive ? activeStyle : 'text-slate-600'}`
              }
            >
              <img 
                src="/api/placeholder/32/32"
                alt="Profile" 
                className="w-8 h-8 rounded-full"
              />
              Profile
            </NavLink>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-14 left-0 right-0 bg-white border-b md:hidden">
              <div className="flex flex-col p-4 space-y-4">
                <NavLink 
                  to="/dashboard"
                  className={({ isActive }) => 
                    `${navLinkStyles} ${isActive ? activeStyle : 'text-slate-600'}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
                <NavLink 
                  to="/new-interview"
                  className={({ isActive }) => 
                    `${navLinkStyles} ${isActive ? activeStyle : 'text-slate-600'}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  New Interview
                </NavLink>
                <NavLink 
                  to="/profile"
                  className={({ isActive }) => 
                    `${navLinkStyles} flex items-center gap-2 ${isActive ? activeStyle : 'text-slate-600'}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img 
                    src="/api/placeholder/32/32"
                    alt="Profile" 
                    className="w-8 h-8 rounded-full"
                  />
                  Profile
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;