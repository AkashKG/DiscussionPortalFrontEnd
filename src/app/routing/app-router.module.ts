import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAnswersComponent } from '../body/main-content/answers/all-answers/all-answers.component';
import { HomeComponent } from '../body/main-content/home/home.component'
import { AnswerComponent} from '../body/main-content/answers/answer/answer.component';

const routes:Routes = [
    {path:"question/:id", component: AllAnswersComponent},
    {path:"home", component: HomeComponent},
    {path:"answer/:id", component: AnswerComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRouterModule {

}

export const RoutingInternalComponents = [AllAnswersComponent, HomeComponent, AnswerComponent]