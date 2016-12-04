System.register(['angular2/core', "./course.component", "./author.component", "./favourite.component", "./heart.component", "./vote.component", "./tweet.component", "./tweets.component", "./zippy.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, course_component_1, author_component_1, favourite_component_1, heart_component_1, vote_component_1, tweet_component_1, tweets_component_1, zippy_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_component_1_1) {
                course_component_1 = course_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (favourite_component_1_1) {
                favourite_component_1 = favourite_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.tweet = {
                        iLike: false,
                        totalLikes: 10
                    };
                    this.vote = {
                        totalVotes: 10,
                        myVote: 0
                    };
                }
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "  <courses></courses>\n                <authors></authors>\n                <favourite></favourite>\n                <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n                <vote [totalVotes]=\"vote.totalVotes\"[myVote]=\"vote.myVote\" (vote)=\"onVote($event)\"></vote>\n                 <!--<button class=\"btn btn-primary\"\n                        [class.active]=\"isActive\"\n                        [style.background]=\"isActive ? 'blue':'black'\"\n                        (click)=\"onClick()\">submit</button>-->\n                <input type=\"text\" [(ngModel)]=\"title\"/>\n                <input type=\"button\"(click)=\"title=''\" value=\"Clear\"/>\n                Preview:{{title}}\n                \n                <tweets></tweets>\n                \n                <zippy title=\"Who can see my stuff?\">\n                     content who can see my stuff\n                </zippy>\n                <zippy title=\"Who can contact me?\">\n                     content who can contact me   \n                </zippy>\n",
                        directives: [course_component_1.CoursesComponent, author_component_1.AuthorComponent, favourite_component_1.FavouriteComponenet, heart_component_1.HeartComponent, vote_component_1.VoteComponent, tweet_component_1.TweetComponent, tweets_component_1.TweetsComponent, zippy_component_1.ZippyComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map