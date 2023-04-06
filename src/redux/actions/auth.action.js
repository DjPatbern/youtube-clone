import { provider, auth } from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionTypes";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const res = await signInWithPopup(auth, provider);
    provider.addScope(process.env.REACT_APP_YOUTUBE_API);
    const accessToken = res.user.accessToken;

    const profile = {
      name: res.user.displayName,
      photoURL: res.user.photoURL,
    };

    const ytAcessToken = "youtube-clone-access-token";
    const ytUser = "youtube-clone-user";

    sessionStorage.setItem(ytAcessToken, accessToken);
    sessionStorage.setItem(ytUser, JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logOut = () => async (dispatch) => {
  await signOut(auth);
  dispatch({
    type: LOG_OUT,
  });

  sessionStorage.removeItem("youtube-clone-access-token");
  sessionStorage.removeItem("youtube-clone-user");
};
