import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [ProjectService]
})
export class MainPageComponent implements OnInit {
  projects: Project[];

  constructor(private router: Router, private projectService: ProjectService){}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject: Project) {
     this.router.navigate(['projects', clickedProject.id]);
   };

}
