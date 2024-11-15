import { createSelector } from '@ngrx/store'
import { ProfileState } from './profile.reducer'

// Update to use the correct path to state
export const selectProfileState = (state: any) => state.profile

export const selectProfile = createSelector(
  selectProfileState,
  (state: ProfileState) => {
    console.log('Profile State:', state) // Debugging
    return state?.profile
  }
)
