import { SET_COLOR_SCHEME } from '../../actions/actionTypes'

const initialState = {
  colorScheme: "dark"
}

const reducer = (state = initialState, action) => {

  switch (action.type) {   
      case SET_COLOR_SCHEME: {
          return{
              ...state,
              colorScheme: action.payload
          }
      } 
      default: {
          return state
      }
  }
}

export default reducer