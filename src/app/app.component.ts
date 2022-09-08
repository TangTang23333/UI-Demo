import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <div class="example-config">
          Selected date is {{ value | kendoDate:'MMMM yyyy' }}
      </div>
        <kendo-calendar
            bottomView="month"
            topView="year"
            [min] ="min"
            [max] = "value"
            [(value)]="value"
        ></kendo-calendar>
    `,
})
export class AppComponent {
  public value: Date = new Date();
  public min: Date = new Date(1900, 1, 1);
}
