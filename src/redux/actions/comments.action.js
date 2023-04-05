import request from "../../Utils/api";
import {
  COMMENTS_LIST_FAIL,
  COMMENTS_LIST_REQUEST,
  COMMENTS_LIST_SUCCESS,
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_SUCCESS,
} from "../actionTypes";

export const getCommentsOfVidoesByVideo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENTS_LIST_REQUEST,
    });

    const { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId: id,
      },
    });

    dispatch({
      type: COMMENTS_LIST_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: COMMENTS_LIST_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const addComment = (id, text) => async (dispatch, getState) => {
  try {
    const obj = {
      snippet: {
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    };

    await request.post("/commentThreads", obj, {
      params: {
        part: "snippet",
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    console.log(getState().auth.accessToken);
    dispatch({
      type: CREATE_COMMENT_SUCCESS,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: CREATE_COMMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};
