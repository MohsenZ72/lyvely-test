import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ProfileModel } from '../profile.model'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfileData(): Observable<ProfileModel> {
    return this.http.get<ProfileModel>('/assets/data/user.json')
  }
}
