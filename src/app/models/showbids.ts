import {BidderInformation} from './bidderinformation';
export interface ShowBids {
    productName: string;
    shortDescription: string;
    detailedDescription: string;
    category: string;
    startingPrice: string;
    bidenddate: string;
    bids: BidderInformation[];
  }