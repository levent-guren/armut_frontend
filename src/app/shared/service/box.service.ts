import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Box } from '../model/box';
import { SuccessResponse } from '../model/successResponse';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
 
  constructor(
    private http: HttpClient,
  ) { }

  getAllBoxes(): Observable<Box[]> {
    return this.http.get<Box[]>('/box/');
  }
  createBoxes(capacity: number, count: number): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>('/box/create', {capacity, count});
  }
  deleteBox(id: number): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>('/box/delete', {id});
  }
  updateBox(id: number, capacity: number): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>('/box/update', {id, capacity});
  }
}
