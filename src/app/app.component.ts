import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <hcl-sdk-component [config]="config"></hcl-sdk-component>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public config: any;
  ngOnInit(): void {
    // Set SDK configuration here
    // @see https://docs.healthcarelocator.com/index.htm#t=QStartGuide%2FCustomize_the_prebuilt_screens_of_the_SDKs.htm
    this.config = {
      apiKey: 'YOUR_API_KEY',
      showSuggestModification: true,
      // stylesheet: '/assets/custom-styles.css',
    };
  }
}
