import React, { createContext, useState } from "react";

export const NavContext = createContext();

export default function NavProvider(props) {
   const [navVisible, setNavVisible] = useState(true);
   const [open, setOpen] = useState(false);

   const removeNav = () => {
      setNavVisible(false)
      setOpen(false)
   }

   const restoreNav = () => {
      setNavVisible(true)
      setOpen(false)
   }

	const value = {
      navVisible,
      restoreNav,
      removeNav,
      open,
      setOpen,
	};

	return (
		<NavContext.Provider value={value}>
			{props.children}
		</NavContext.Provider>
	);
}
