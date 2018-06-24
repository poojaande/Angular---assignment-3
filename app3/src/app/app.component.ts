import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  public fun(value : string)  
  { 
      value = "Marvellous Infosystems";
      return value;
  }

}
