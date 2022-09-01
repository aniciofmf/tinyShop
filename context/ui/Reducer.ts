import { UIState } from "./../../interfaces/";

type ACTIONTYPE = { type: string; payload: boolean };

export const UIReducer = (state: UIState, action: ACTIONTYPE): UIState => {
	switch (action.type) {
		case "OPEN_SIDEMENU":
			return {
				...state,
				menuOpen: action.payload,
			};

		case "CLOSE_SIDEMENU":
			return {
				...state,
				menuOpen: action.payload,
			};

		default:
			return state;
	}
};
