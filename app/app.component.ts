import {Component} from 'angular2/core'
import {CoursesComponent} from "./course.component";
import {AuthorComponent} from "./author.component";
import {FavouriteComponenet} from "./favourite.componenet";
import {HeartComponent} from "./heart.component"


@Component({
    selector: 'my-app',
    template:`  <courses></courses>
                <authors></authors>
                <favourite></favourite>
                <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
                 <!--<button class="btn btn-primary"
                        [class.active]="isActive"
                        [style.background]="isActive ? 'blue':'black'"
                        (click)="onClick()">submit</button>-->
                <input type="text" [(ngModel)]="title"/>
                <input type="button"(click)="title=''" value="Clear"/>
                Preview:{{title}}
                
`,
    directives:[CoursesComponent,AuthorComponent,FavouriteComponenet,HeartComponent]
})
export class AppComponent {
    tweet = {
        iLike :false,
        totalLikes :10
            }

}