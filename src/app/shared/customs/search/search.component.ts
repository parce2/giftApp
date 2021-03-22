import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { GifsService } from '../../../core/services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('txtSearch') input: ElementRef<HTMLInputElement>;
 // @Output() data: EventEmitter<any> = new EventEmitter();

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  search(): void {
    const valor = this.input.nativeElement.value;
    this.input.nativeElement.value = '';
    if (valor.trim().length != 0)  this.gifsService.searchGift(valor);
  }

}
