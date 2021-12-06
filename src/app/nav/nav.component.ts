import { Component, OnInit } from '@angular/core';
import { faComments, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faComments = faComments;
  faBell = faBell;
  faUserCircle = faUserCircle;

  constructor() { }

  ngOnInit(): void {
  }
  
}
