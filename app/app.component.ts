import {Component} from 'angular2/core'
import {CoursesComponent} from "./course.component";
import {AuthorComponent} from "./author.component";
import {FavouriteComponenet} from "./favourite.component";
import {HeartComponent} from "./heart.component"
import {VoteComponent} from "./vote.component";
import {TweetComponent} from "./tweet.component";
import {TweetsComponent} from "./tweets.component";
import {ZippyComponent} from "./zippy.component";

@Component({
    selector: 'my-app',
    template:`  <courses></courses>
                <authors></authors>
                <favourite></favourite>
                <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
                <vote [totalVotes]="vote.totalVotes"[myVote]="vote.myVote" (vote)="onVote($event)"></vote>
                 <!--<button class="btn btn-primary"
                        [class.active]="isActive"
                        [style.background]="isActive ? 'blue':'black'"
                        (click)="onClick()">submit</button>-->
                <input type="text" [(ngModel)]="title"/>
                <input type="button"(click)="title=''" value="Clear"/>
                Preview:{{title}}
                
                <tweets></tweets>
                
                <zippy title="Who can see my stuff?">
                     content who can see my stuff
                </zippy>
                <zippy title="Who can contact me?">
                     content who can contact me   
                </zippy>
`,
    directives:[CoursesComponent,AuthorComponent,FavouriteComponenet,HeartComponent,VoteComponent,TweetComponent,TweetsComponent,ZippyComponent]
})
export class AppComponent {
    tweet = {
        iLike :false,
        totalLikes :10
            }
    vote = {
        totalVotes:10,
        myVote:0
    }

    onVote($event){
        console.log($event);
    }

}