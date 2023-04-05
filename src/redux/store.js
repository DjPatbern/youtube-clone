import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import {
  homeVideoReducer,
  selectedVideoReducer,
} from "./reducers/videos.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentsListReducer } from "./reducers/comments.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideoReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentsList: commentsListReducer,
});

const store = legacy_createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
