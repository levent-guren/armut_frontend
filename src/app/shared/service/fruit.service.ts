import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from '../model/fruit';
import { SuccessResponse } from '../model/successResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  editingFruit: Fruit | null = null;
  
  constructor(
    private http: HttpClient,
  ) { }

  createFruit(fruit: Fruit): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>('/fruit/create', fruit);
  }

  getAllFruits(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>('/fruit/');
  }
  deleteFruit(id: number): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>('/fruit/delete', { id } );
  }
}
