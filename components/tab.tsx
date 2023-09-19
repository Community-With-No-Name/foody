import React, { useState } from 'react';

    const Tabs = ({ children }) => {
      const [activeTab, setActiveTab] = useState(children[0].props.label);
    
      const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
      };
    
      return (
        // This is the tab that aids the navigation on the signup/login page
        <div className="max-w-md mx-auto">
            <div className=' flex text-center items-center justify-center'>
          <div className="flex rounded-3xl bg-[#509e2f] items-center  w-[250px] my-auto text-center text-white relative">
            {children.map(child => (
              <button
                key={child.props.label}
                className={`${
                  activeTab === child.props.label ? 'top-0 left-0 w-[25px] h-full bg-[#98e877] absolute rounded-3xl' : ''
                } flex-1 rounded-3xl p-2 w-[250px] my-auto text-center text-white relative bg-[#509e2f]`}
                onClick={e => handleClick(e, child.props.label)}
              >
                {child.props.label}
              </button>
            ))}
          </div>
          </div>
          
          <div className="py-4">
            {children.map(child => {
              if (child.props.label === activeTab) {
                return <div key={child.props.label}>{child.props.children}</div>;
              }
              return null;
            })}
          </div>
        </div>
      );
    };
    
    const Tab = ({ label, children }) => {
      return (
        <div label={label} className="hidden">
          {children}
        </div>
      );
    };
    export { Tabs, Tab }