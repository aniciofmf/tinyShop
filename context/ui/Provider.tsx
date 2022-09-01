import { FC, ReactNode, useReducer } from "react";

import { UIState } from "../../interfaces";
import { UIContext, UIReducer } from "../";

const INITIAL_STATE: UIState = {
	menuOpen: false,
};

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(UIReducer, INITIAL_STATE);

	const openMenu = () => {
		dispatch({ type: "OPEN_SIDEMENU", payload: true });
	};

	const closeMenu = () => {
		dispatch({ type: "CLOSE_SIDEMENU", payload: false });
	};

	return (
		<UIContext.Provider
			value={{
				...state,
				openMenu,
				closeMenu,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
