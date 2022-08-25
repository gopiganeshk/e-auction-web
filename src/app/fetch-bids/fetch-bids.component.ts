import {Component, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShowBidsResults} from '../models/showbidsresults';
import {ShowBids} from '../models/showbids';
import {BidderInformation} from '../models/bidderinformation';
import {SellerService} from '../services/seller.service';

@Component({
  selector: 'app-fetch-bids',
  templateUrl: './fetch-bids.component.html',
  styleUrls: ['./fetch-bids.component.css']
})
export class FetchBidsComponent {

  bidResults: ShowBidsResults;
  bidderInformation: BidderInformation[];
  product : ShowBids;
  isNotValidBid = false ;
  errorMessage = "";
  constructor(private sellerService: SellerService) {
    this.bidResults = {} as ShowBidsResults;
    this.bidderInformation = [];
    this.product = {} as ShowBids;
   }

  

  getBids(id: string) {
    console.log(id);
    if(id === "")
    {
      this.isNotValidBid = true;
      this.errorMessage = 'Bid ID is required.'
    }
    else{
    this.sellerService.getBidsById(id)
    .subscribe(response => {
      this.bidResults = response;
      if(this.bidResults.payload != null)
      {
        this.isNotValidBid = false;
        this.product = this.bidResults.payload;
        this.bidderInformation = this.bidResults.payload.bids;
      }
      else if(this.bidResults.messages?.length > 0)
      {
        this.isNotValidBid = true;
        this.errorMessage = this.bidResults.messages[0];
      }

    });
  }
  }
}
