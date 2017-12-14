import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [ProjectService]
})
export class MainPageComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByType: string = "";

  constructor(private router: Router, private projectService: ProjectService){}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    console.log(this.router.url);
  }

  goToDetailPage(clickedProject) {
     this.router.navigate(['projects', clickedProject.$key]);
   }

  onChange(optionFromMenu) {
    this.filterByType = optionFromMenu;
 }


}
