import { createSelector } from '@ngrx/store'
import { ProfileState } from './profile.reducer'

export const selectProfileState = (state: any) => state.profile

export const selectProfile = createSelector(
  selectProfileState,
  (state: ProfileState) => {
    console.log('Profile State:', state)
    return state?.profile
  }
)
