import { Component, ViewChild } from '@angular/core';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public custItems: Array<string> = [
    'UIDIA Card (Addhar Card)',
    'Pan Card',
    'Election Card',
    'Passport'
  ];
  public langItems: Array<string> = ['English', 'Hindi', 'Gujarati', 'Marathi'];
  public titlesItems: Array<string> = ['Mr.', 'Miss', 'Mrs.'];
  model: Model = {
    CustName: null,
    FatherHubName: null,
    MotherName: null,
    NameTitle: 'Mr.',
    Gender : 'male',
    FatherHubTitle : 'Mr.',
    MotherTitle : ' Miss',
    CustIDType: 'UIDIA Card (Addhar Card)',
    Language: 'English'
  };

  @ViewChild('tabstrip')

  public tabstrip: TabStripComponent;
  onKycClick() {
    Promise.resolve(null).then(() => this.tabstrip.selectTab(4));
  }
  OnNextClick() {
    Promise.resolve(null).then(() => this.tabstrip.selectTab(1));
  }
}
