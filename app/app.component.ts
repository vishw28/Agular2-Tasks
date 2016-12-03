import {Component} from 'angular2/core'
import {CoursesComponent} from "./course.component";
import {AuthorComponent} from "./author.component";


@Component({
    selector: 'my-app',
    template:`  <courses></courses>
                <authors></authors>
                
`,
    directives:[CoursesComponent,AuthorComponent]
})
export class AppComponent {

}