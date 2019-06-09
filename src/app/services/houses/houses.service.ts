import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {House} from '../../models/house.model';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  housesCollection: AngularFirestoreCollection<House>;
  houses: Observable<House[]>;

  constructor(private afs: AngularFirestore) {
    this.housesCollection = afs.collection<House>('houses');
    this.houses = this.housesCollection.valueChanges();
  }

  addHouse(house) {
    this.housesCollection.add(house);
  }
}
