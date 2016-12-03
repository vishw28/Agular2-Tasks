import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow-directive'

@Component({
    selector:'courses',
    template:`
            <h2>Angular2</h2>
            {{title}}
            <input type="text" autoGrow/>
            <ul>
                <li *ngFor="#course of courses">
                {{course}}
                </li>
            </ul>        
            `,
    providers:[CourseService],


})
export class CoursesComponent{
    title="The Title of Courses Page";
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}
