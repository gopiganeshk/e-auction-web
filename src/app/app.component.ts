import { Component ,OnInit} from '@angular/core';
import { FetchBidsComponent } from './fetch-bids/fetch-bids.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-Auction-App';
  public showContentLink = true;

  ngOnInit(): void {
    console.log("this executes once");
  }

  toggleContentLink(comp: any) {
   if(comp instanceof FetchBidsComponent) {
      this.showContentLink = false;
   } else {
      this.showContentLink = true;
   }
}
}