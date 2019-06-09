import {Component, OnInit} from '@angular/core';
import {HousesService} from '../../services/houses/houses.service';
import {Observable} from 'rxjs';
import {House} from '../../models/house.model';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.scss']
})
export class HousesListComponent implements OnInit {

  houses: Observable<House[]>;

  constructor(housesService: HousesService) {
    this.houses = housesService.houses;
  }

  ngOnInit() {
  }

}
