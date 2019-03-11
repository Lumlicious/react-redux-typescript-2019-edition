import { AppState, AppActionTypes, TOGGLE_LOGO } from './types';

const initialState: AppState = {
  showLogo: false
};

export function appReducer(
  state = initialState,
  action: AppActionTypes
): AppState {
  switch (action.type) {
    case TOGGLE_LOGO:
      return {
        ...state,
        showLogo: !state.showLogo
      };
    default:
      return state;
  }
}
