import { toggleShowingMobileNavbar } from "./uiSlice";

export const startOpeningNavbar = () => {
    return async (dispatch, getState) => {
      dispatch(toggleShowingMobileNavbar);
    };
  };