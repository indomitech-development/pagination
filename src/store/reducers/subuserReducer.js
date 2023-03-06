import {
  SUBUSER_DETAILS_REQUEST,
  SUBUSER_DETAILS_FAILED,
  SUBUSER_DETAILS_SUCCESS,
} from "../constants/subuserConstant";

export const subuserDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case SUBUSER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case SUBUSER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        count: action.payload,
      };
    case SUBUSER_DETAILS_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
