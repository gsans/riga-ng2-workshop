import {Component} from 'angular2/core';

@Component({
  selector: 'about',
  template: `<h1>About</h1>`
})
export class About {
  constructor() { }

  ngOnInit() {
    console.log('hello `About` component');
  }
}
