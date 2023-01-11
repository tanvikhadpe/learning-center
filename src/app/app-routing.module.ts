import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { FormsComponent } from './components/forms/forms.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProgressSnipperComponent } from './components/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { ProductComponent } from './dashboard/dashboard-components/product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { FeeViewComponent } from './manage/fee-view/fee-view.component';
import { FeeComponent } from './manage/fee/fee.component';
import { MarksViewComponent } from './manage/marks-view/marks-view.component';
import { MarksComponent } from './manage/marks/marks.component';
import { StudentViewComponent } from './manage/student-view/student-view.component';
import { StudentComponent } from './manage/student/student.component';
import { AssignmentsViewComponent } from './online/assignments-view/assignments-view.component';
import { AssignmentsComponent } from './online/assignments/assignments.component';
import { ClassesViewComponent } from './online/classes-view/classes-view.component';
import { ClassesComponent } from './online/classes/classes.component';
import { HomeworkViewComponent } from './online/homework-view/homework-view.component';
import { HomeworkComponent } from './online/homework/homework.component';
import { TutorialsViewComponent } from './online/tutorials-view/tutorials-view.component';
import { TutorialsComponent } from './online/tutorials/tutorials.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NavAuthGuardService } from './services/nav-auth-guard.service';
import { EnrollmentComponent } from './setup/enrollment/enrollment.component';
import { FeecodeComponent } from './setup/feecode/feecode.component';
import { MarkscodeComponent } from './setup/markscode/markscode.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { LoginComponent } from './shared/login/login/login.component';
import { SignupComponent } from './shared/login/signup/signup.component';
import { NotificationsComponent } from './shared/settings/notifications/notifications.component';
import { SettingsComponent } from './shared/settings/settings/settings.component';
import { EmployeeComponent } from './staff/employee/employee.component';
import { ExpensesComponent } from './staff/expenses/expenses.component';
import { SalaryComponent } from './staff/salary/salary.component';
import { SalarycodeComponent } from './staff/salarycode/salarycode.component';
import { VoucherComponent } from './staff/voucher/voucher.component';

const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"home", component:DashboardComponent},
      {path:"alerts", component:AlertsComponent},
      {path:"forms", component:FormsComponent},
      {path:"table", component:ProductComponent},
      {path:"grid-list", component:GridListComponent},
      {path:"menu", component:MenuComponent},
      {path:"tabs", component:TabsComponent},
      {path:"expansion", component:ExpansionComponent},
      {path:"chips", component:ChipsComponent},
      {path:"progress", component:ProgressComponent},
      {path:"toolbar", component:ToolbarComponent},
      {path:"progress-snipper", component:ProgressSnipperComponent},
      {path:"snackbar", component:SnackbarComponent},
      {path:"slider", component:SliderComponent},
      {path:"slide-toggle", component:SlideToggleComponent},
      {path:"tooltip", component:TooltipsComponent},
      {path:"button", component:ButtonsComponent},

      { path: 'aboutus', component: AboutusComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'student', component: StudentComponent },
      { path: 'student-view', component: StudentViewComponent },
      { path: 'enrollment', component: EnrollmentComponent},
      { path: 'feecode', component: FeecodeComponent},
      { path: 'fee', component: FeeComponent },
      { path: 'fee-view', component: FeeViewComponent},
      { path: 'fee/:id', component: FeeComponent},
      { path: 'marks', component: MarksComponent },
      { path: 'marks-view', component: MarksViewComponent},
      { path: 'marks/:id', component: MarksComponent },
      { path: 'markscode', component: MarkscodeComponent },
      { path: 'employee', component: EmployeeComponent},
      { path: 'voucher', component: VoucherComponent},
      { path: 'expenses', component: ExpensesComponent},
      { path: 'assignments', component: AssignmentsComponent},
      { path: 'assignments-view', component: AssignmentsViewComponent},
      { path: 'homework', component: HomeworkComponent},
      { path: 'homework-view', component: HomeworkViewComponent},
      { path: 'tutorials', component: TutorialsComponent},
      { path: 'tutorials-view', component: TutorialsViewComponent },
      { path: 'classes', component: ClassesComponent},
      { path: 'classes-view', component: ClassesViewComponent},
      { path: 'salarycode', component: SalarycodeComponent },
      { path: 'salary/:id', component: SalaryComponent},
      { path: 'settings', component: SettingsComponent},
      { path: 'notifications', component: NotificationsComponent},
      // { path: 'student', component: StudentComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'student-view', component: StudentViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'enrollment', component: EnrollmentComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'feecode', component: FeecodeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'fee', component: FeeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'fee-view', component: FeeViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'fee/:id', component: FeeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'marks', component: MarksComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'marks-view', component: MarksViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'marks/:id', component: MarksComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'markscode', component: MarkscodeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'voucher', component: VoucherComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'assignments', component: AssignmentsComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'assignments-view', component: AssignmentsViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'homework', component: HomeworkComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'homework-view', component: HomeworkViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'tutorials', component: TutorialsComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'tutorials-view', component: TutorialsViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'classes', component: ClassesComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'classes-view', component: ClassesViewComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'salarycode', component: SalarycodeComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'salary/:id', component: SalaryComponent, canActivate: [AuthGuardService, NavAuthGuardService] },
      // { path: 'settings', component: SettingsComponent, canActivate: [AuthGuardService] },
      // { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuardService] },
      

    ]
  },

  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path: '**', redirectTo: '/aboutus', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
