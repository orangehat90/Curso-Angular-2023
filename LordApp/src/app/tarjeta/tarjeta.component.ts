import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  public image:string="https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/T3_magazine_brand_logo.svg/1200px-T3_magazine_brand_logo.svg.png";
  public Titulo:string = "Curso de Angular con Interpolación";

  constructor() { }

  ngOnInit(): void {

  }
  }