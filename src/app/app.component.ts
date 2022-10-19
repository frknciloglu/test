import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  public menus : any [] = [];
  ngOnInit(): void {
    this.setColorsOfMenu();
  }
  

  public setColorsOfMenu() {
    this.menus = [];
    for (let index = 0; index < 10; index++) {
      this.menus.push({
        text: 'Item ' + (index + 1),
        color: this.getRandomColor(),
      });
    }
  }

  getRandomColor(): string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
