const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    // {
    //   id: 1,
    //   fullName: "Artem",
    //   followed: true,
    //   status: "I am a boss",
    //   location: { country: "Ukraine", city: "Kremenchuk" }
    // },
    // {
    //   id: 2,
    //   fullName: "Thomas",
    //   followed: true,
    //   status: "I am a teacher",
    //   location: { country: "England", city: "Liverpool" }
    // },
    // {
    //   id: 3,
    //   fullName: "Roman",
    //   followed: false,
    //   status: "I am an admin",
    //   location: { country: "Ukraine", city: "Lviv" }
    // },
    // {
    //   id: 4,
    //   fullName: "Herald",
    //   followed: false,
    //   status: "I am a witcher",
    //   location: { country: "Poland", city: "Warsaw" }
    // }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        })
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      };
    default:
      return state;
  }
};

export const followAC = userID => ({
  type: FOLLOW,
  userID
});

export const unFollowAC = userID => ({
  type: UNFOLLOW,
  userID
});

export const setUsersAC = users => ({
  type: SET_USERS,
  users
});

export default usersReducer;
