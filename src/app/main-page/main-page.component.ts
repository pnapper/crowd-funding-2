import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router){}

  projects: Project[] = [
    new Project("Send Jimmy To Europe", "Jimmy Needs Cash", "You can be a part of sending Jimmy to Europe", "$3,000", "Money will be used for plane tickets, accomodations, meals, and tours.", "Jimmy will send you a postcard and bring you back a t-shirt.", "Charitable", 0)
  ]

  goToDetailPage(clickedProject: Project) {
     this.router.navigate(['projects', clickedProject.id]);
   };

  ngOnInit() {
  }

}
