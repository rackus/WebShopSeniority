import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dbContext: AngularFireDatabase) { }

  create (product){
    return this.dbContext.list('/products').push(product);
  }
}
