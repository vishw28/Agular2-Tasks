import {Component} from 'angular2/core'
import {CoursesComponent} from "./course.component";
import {AuthorComponent} from "./author.component";
import {FavouriteComponenet} from "./favourite.componenet";


@Component({
    selector: 'my-app',
    template:`  <courses></courses>
                <authors></authors>
                <favourite></favourite>
                 <!--<button class="btn btn-primary"
                        [class.active]="isActive"
                        [style.background]="isActive ? 'blue':'black'"
                        (click)="onClick()">submit</button>-->
                <input type="text" [(ngModel)]="title"/>
                <input type="button"(click)="title=''" value="Clear"/>
                Preview:{{title}}
                
`,
    directives:[CoursesComponent,AuthorComponent,FavouriteComponenet]
})
export class AppComponent {


}