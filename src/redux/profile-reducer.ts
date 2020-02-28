import { usersAPI, profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { PhotosType, PostType, ProfileType } from "../types/types";

const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

const initialState = {
  posts: [
    { id: 1, message: "Hey, this is my first post!", likesCount: 9 },
    { id: 2, message: "Like this post, please!", likesCount: 3 }
  ] as Array<PostType>,
  userProfile: null as ProfileType | null,
  status: ""
};

export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };
      return { ...state, posts: [...state.posts, newPost] };
    }
    case SET_USER_PROFILE: {
      return { ...state, userProfile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: action.photos
        } as ProfileType
      };
    }
    default:
      return state;
  }
};

type AddPostCreatorActionType = {
  type: typeof ADD_POST;
  newPostText: string;
};

export const addPostCreator = (
  newPostText: string
): AddPostCreatorActionType => ({
  type: ADD_POST,
  newPostText
});

type DeletePostCreatorActionType = {
  type: typeof DELETE_POST;
  postId: number;
};

export const deletePostCreator = (
  postId: number
): DeletePostCreatorActionType => ({
  type: DELETE_POST,
  postId
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};

export const setUserProfile = (
  profile: ProfileType
): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile
});

type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};

export const setStatusAC = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status
});

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};

export const savePhotoSuccess = (
  photos: PhotosType
): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await usersAPI.getProfile(userId);

  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId);

  dispatch(setStatusAC(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  } catch (error) {
    console.log("help");
  }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: PhotosType) => async (
  dispatch: any,
  getState: any
) => {
  const userId = getState().auth.userId;

  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
