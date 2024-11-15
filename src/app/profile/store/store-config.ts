import { provideStore } from '@ngrx/store'
import { profileReducer } from './profile.reducer'

export const storeProviders = [provideStore({ profile: profileReducer })]
