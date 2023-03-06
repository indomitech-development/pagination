import {
  SUBUSER_DETAILS_REQUEST,
  SUBUSER_DETAILS_SUCCESS,
  SUBUSER_DETAILS_FAILED,
} from "../constants/subuserConstant";

import axios from "axios";

export const getSubuserDetails = () => async (dispatch) => {
  try {
    dispatch({ type: SUBUSER_DETAILS_REQUEST });

    const { data } = await axios.get("http://localhost:3500/TableData");
    dispatch({
      type: SUBUSER_DETAILS_SUCCESS,
      payload: data,
      count: data?.count,
    });
  } catch (error) {
    dispatch({ type: SUBUSER_DETAILS_FAILED });
  }
};
