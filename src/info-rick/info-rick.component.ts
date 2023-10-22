import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-rick',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './info-rick.component.html',
  styleUrls: ['./info-rick.component.css'],
})
export class InfoRickComponent implements OnInit {
  name = 'Бет Смит';
  gender = 'Женский';
  species = 'Человек / Клон';
  occupation =
    'Лошадиный хирург и ветеринар больницы Сент-Эквис / Лидер движения сопротивления "Непокорные"';
  children = 'Саммер Смит и Морти Смит';

  state = true;

  toggleState() {
    this.state = !this.state;
  }

  today = new Date();

  constructor() {}

  ngOnInit() {}
}
