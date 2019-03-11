// Constants definitions
export const TOGGLE_LOGO = 'TOGGLE_LOGO';

// State of Application
export interface AppState {
  showLogo: boolean;
}

// Action Type
interface ToggleLogoAction {
  type: typeof TOGGLE_LOGO;
}

// Bulk Exported action types. Add new actions by adding "| <new action>"
export type AppActionTypes = ToggleLogoAction;
