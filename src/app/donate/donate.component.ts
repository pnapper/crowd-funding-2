import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Donation } from '../donation.model';
import { ProjectService } from '../project.service';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
  providers: [ProjectService, DonationService]

})
export class DonateComponent implements OnInit {
  @Input() selectedProjectId;
  // projectId;

  constructor(private projectService: ProjectService, private donationService: DonationService) { }

  ngOnInit() {
    console.log(this.selectedProjectId);
    // this.selectedProject.subscribe(data => {
    //   this.projectId = data.$key;
    // });
  }

  submitForm(donor: string, amountDonated: number) {
    // projectId = this.selectedProject.$key;
    var newDonation: Donation = new Donation(donor, amountDonated, this.selectedProjectId);
    this.donationService.addDonation(newDonation);
  }

}
