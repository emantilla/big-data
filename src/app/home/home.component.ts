import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showPeriod = false;
  showGeographical = false;
  showPolice = false;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goToPeriod(){
    this.showPeriod = true;
    this.showGeographical = false;
    this.showPolice = false;
  }


  goToGeographical(){
    this.showPeriod = false;
    this.showGeographical = true;
    this.showPolice = false;
  }


  goToPolice(){
    this.showPeriod = false;
    this.showGeographical = false;
    this.showPolice = true;
  }

}
