import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

const routes: Routes = [
    { path: 'one', component: PageOneComponent },
    { path: 'two', component: PageTwoComponent },
    { path: '', redirectTo: '/one', pathMatch: 'full' },
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {}
