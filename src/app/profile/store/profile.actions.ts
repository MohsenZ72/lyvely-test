import { createAction, props } from '@ngrx/store'
import { ProfileModel } from '../profile.model'
import { FollowerModel, FollowingModel } from '../profile.model'

export const setProfile = createAction(
  '[Profile] Set Profile',
  props<{ profile: ProfileModel }>()
)

export const addFollowing = createAction(
  '[Profile] Add Following',
  props<{ profile: FollowerModel }>()
)

export const removeFollowing = createAction(
  '[Profile] Remove Following',
  props<{ id: number }>()
)
