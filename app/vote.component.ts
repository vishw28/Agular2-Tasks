import {Component,Input,Output,EventEmitter} from 'angular2/core'

@Component({
    selector:'vote',
    template:`
        <div class="vote">
            <i class="glyphicon glyphicon-menu-up" [class.highlighted] = "myVote==1" (click)="onClickUp()"></i>
            <span>{{totalVotes + myVote}}</span>
            <i class="glyphicon glyphicon-menu-down" [class.highlighted] = "myVote==-1" (click)="onClickDown()"></i>
        </div>    
            `,
    styles:[`
            .vote{
                width: 20px;
                text-align: center;
                color: #999;
            }
            .glyphicon-menu-up{
                cursor: pointer;
            }
            .glyphicon-menu-down{
                cursor: pointer;
            }
            .highlighted{
                font-weight: bold;
                color: orange;
            }
            `]
})

export class VoteComponent{

    @Input() totalVotes = 10;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    onClickUp(){
        if(this.myVote==1)
            return;
        this.myVote++;
        this.vote.emit({myVote:this.myVote});
         }
    onClickDown(){

            if(this.myVote==-1)
                return;
            this.myVote--;
            this.vote.emit({myVote:this.myVote});
    }


}