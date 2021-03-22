import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../core/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(private gifsService: GifsService) { }

  ngOnInit(): void { }
  
  get historial() {
    return this.gifsService.historial;
  }

  search(item:string){
      this.gifsService.searchGift(item);
  }
}
