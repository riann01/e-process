import { SET_COLOR_SCHEME } from '../actionTypes';

export const setColorScheme = colorScheme => {
  return{
      type: SET_COLOR_SCHEME,
      payload: colorScheme
  }
}