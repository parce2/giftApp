import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../../../../../core/services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  
  get data(){ return this.gifsService.results;}

  ngOnInit(): void {}

}
