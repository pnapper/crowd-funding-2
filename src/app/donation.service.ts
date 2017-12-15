import { Injectable } from '@angular/core';
import { Donation } from './Donation.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DonationService {
  donations: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.donations = database.list('donations');
  }

  getDonations() {
    return this.donations;
  }

  getTotalDonations(id) {
    //For each donation object loop'
      var fundRaised: number = 0;
      this.donations.subscribe(data => {
        data.forEach(function(pledge) {
          if (pledge.projectId === id) {
            fundRaised += parseInt(pledge.amountDonated);
          }
        })
      });
      console.log("the project id is: "+ id);
      console.log(fundRaised);
      return fundRaised;
    // this.donations.forEach((donation) => {
    //   console.log('donations:' +  donation[0])
    //   if (donation.projectId == id) {
    //     alert("hello!");
    //   }
    // })

    //if projectId of Donation object == projectId
      //add donation amount to fund

      //else ignore donation object
  }

  addDonation(newDonation: Donation) {
    this.donations.push(newDonation);
  }

  getDonationById(donationId: string){
    return this.database.object('donations/' + donationId);
  }

  updateDonation(localUpdatedDonation){
    var donationEntryInFirebase = this.getDonationById(localUpdatedDonation.$key);
    donationEntryInFirebase.update({donor: localUpdatedDonation.donor,
                                amountDonated: localUpdatedDonation.amountDonated
                                });
  }

  deleteDonation(localDonationToDelete){
    var donationEntryInFirebase = this.getDonationById(localDonationToDelete.$key);
    donationEntryInFirebase.remove();
  }
}
