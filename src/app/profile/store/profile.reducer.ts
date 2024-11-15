import { createReducer, on } from '@ngrx/store'
import { setProfile, removeFollowing, addFollowing } from './profile.actions'
import { ProfileModel } from '../profile.model'

export interface ProfileState {
  profile: ProfileModel | null
}

export const initialState: ProfileState = {
  profile: null
}

export const profileReducer = createReducer(
  initialState,
  on(setProfile, (state, { profile }) => ({
    ...state,
    profile
  })),

  on(removeFollowing, (state, { id }) => {
    if (state.profile) {
      return {
        ...state,
        profile: {
          ...state.profile,
          following: state.profile.following.filter(
            (follower) => follower.id !== id
          )
        }
      }
    }
    return state
  }),

  on(addFollowing, (state, { profile }) => {
    if (state.profile) {
      return {
        ...state,
        profile: {
          ...state.profile,
          following: [...state.profile.following, profile]
        }
      }
    }
    return state
  })
)
