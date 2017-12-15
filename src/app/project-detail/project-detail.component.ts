import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { DonationService } from '../donation.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService, DonationService]
})

export class ProjectDetailComponent implements OnInit {
  projectId: string;
  totalDonation;
  projectToDisplay;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private projectService: ProjectService,
              private donationService: DonationService
            ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];

      console.log(this.route.params);
      console.log("proj name: "+this.projectId);
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
    this.totalDonation = this.donationService.getTotalDonations(this.projectId);
}

}
