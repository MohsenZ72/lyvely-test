export interface ProfileModel {
  id: number
  username: string
  fullName: string
  bio: string
  profileImageUrl: string
  coverImageUrl: string
  followers: FollowerModel[]
  following: FollowingModel[]
}

export interface FollowerModel {
  id: number
  username: string
  fullName: string
  profileImageUrl: string
}

export interface FollowingModel {
  id: number
  username: string
  fullName: string
  profileImageUrl: string
}
