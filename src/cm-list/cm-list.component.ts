import { Component, OnInit } from '@angular/core';
import { ICMCable } from '../cm-list/CMCable';
@Component({
  selector: 'app-cm-list',
  templateUrl: './cm-list.component.html',
  styleUrls: ['./cm-list.component.css']

})
export class CmListComponent implements OnInit {
  pageTitle: string = 'Cable List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredCables = this.performFilter(value);
  }
  performFilter(filterBy: string): ICMCable[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.Cables.filter((cable: ICMCable) =>
      cable.cableAId.toLocaleLowerCase().includes(filterBy));
  }

   filteredCables: ICMCable[] = [];
   Cables: ICMCable[] = [
     {
       "cableId": 1,
       "cableAId": "A00001",
       "cableAConnectorType": "RJ45",
       "cableBId": "B00001",
       "cableBConnectorType": "RJ45",
       "cableMediaType": "Cat6",
       "cableLenght": 3,
     },
     {
      "cableId": 2,
      "cableAId": "A00002",
      "cableAConnectorType": "RJ45",
      "cableBId": "B00002",
      "cableBConnectorType": "RJ45",
      "cableMediaType": "Cat6",
      "cableLenght": 3,
    }

   ];

   toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit() {

    this.listFilter = 'A';
    console.log('In setter:', this.listFilter);
  }

}