import {bootstrap, Component} from 'angular2/angular2';
import {TestDirective} from './test-directive';

@Component({
    selector: 'my-app',
    template:
        `<h1>My First Angular 2 App21</h1>
         <div>
            <test-directive></test-directive>
         </div>`,
    directives: [TestDirective]
})
class AppComponent { }
bootstrap(AppComponent);