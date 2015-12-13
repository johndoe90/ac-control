import {NgModel, Component} from 'angular2/angular2';

@Component({
    selector: 'test-directive',
    template: `
        <input type="text" [(ng-model)]="name" />
        <input type="button" value="click to greet" (click)="greet()" />
    `,
    directives: [NgModel]
})
export class TestDirective {
    name: string;

    greet() {
        window.alert('Hello, ' + this.name);
    }
}