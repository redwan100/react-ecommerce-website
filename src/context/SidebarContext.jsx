import { createContext, useState } from "react";

// create context
export const SidebarContexts = createContext();
const SidebarContext = ({ children }) => {
  // sidebar state
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(false);
  };

  return <SidebarContexts.Provider value={{isOpen, setIsOpen, handleSidebar}}>{children}</SidebarContexts.Provider>;
};

export default SidebarContext;
