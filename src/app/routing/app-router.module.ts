import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question.component';
import { DummyComponent } from './dummy.component';
const routes:Routes = [
    {path:"answers", component: QuestionComponent},
    {path:"question", component: DummyComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRouterModule {

}

export const RoutingInternalComponents = [QuestionComponent, DummyComponent]