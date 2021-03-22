import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-gift',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  data:any;
  constructor() { }

  ngOnInit(): void {
  }

  dataSearch(event){
   this.data=event;
  }

}
