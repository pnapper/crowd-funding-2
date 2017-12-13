import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, managers: string, description: string, amount: string, usage: string, rewards: string, type: string,) {
    var newProject: Project = new Project(name, managers, description, amount, usage, rewards, type);
    this.projectService.addProject(newProject);
  }
}
