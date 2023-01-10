import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './layouts/full/full.component';
import { DemoFlexyModule } from './demo-flexy-module'

// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';
import { AttendanceComponent } from './manage/attendance/attendance.component';
import { FeeViewComponent } from './manage/fee-view/fee-view.component';
import { FeeComponent } from './manage/fee/fee.component';
import { MarksViewComponent } from './manage/marks-view/marks-view.component';
import { MarksComponent } from './manage/marks/marks.component';
import { StudentViewComponent } from './manage/student-view/student-view.component';
import { StudentComponent } from './manage/student/student.component';
import { AssignmentsComponent } from './online/assignments/assignments.component';
import { AssignmentsViewComponent } from './online/assignments-view/assignments-view.component';
import { ClassesComponent } from './online/classes/classes.component';
import { ClassesViewComponent } from './online/classes-view/classes-view.component';
import { HomeworkComponent } from './online/homework/homework.component';
import { HomeworkViewComponent } from './online/homework-view/homework-view.component';
import { TutorialsComponent } from './online/tutorials/tutorials.component';
import { TutorialsViewComponent } from './online/tutorials-view/tutorials-view.component';
import { EnrollmentComponent } from './setup/enrollment/enrollment.component';
import { FeecodeComponent } from './setup/feecode/feecode.component';
import { MarkscodeComponent } from './setup/markscode/markscode.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HelpdeskComponent } from './shared/helpdesk/helpdesk.component';
import { HeaderAdminComponent } from './shared/header-admin/header-admin.component';
import { FileuploadComponent } from './shared/dropzone/fileupload/fileupload.component';
import { LoginComponent } from './shared/login/login/login.component';
import { SignupComponent } from './shared/login/signup/signup.component';
import { NotificationsComponent } from './shared/settings/notifications/notifications.component';
import { SettingsComponent } from './shared/settings/settings/settings.component';
import { EmployeeComponent } from './staff/employee/employee.component';
import { ExpensesComponent } from './staff/expenses/expenses.component';
import { SalaryComponent } from './staff/salary/salary.component';
import { SalarycodeComponent } from './staff/salarycode/salarycode.component';
import { VoucherComponent } from './staff/voucher/voucher.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AttendanceComponent,
    FeeViewComponent,
    FeeComponent,
    MarksViewComponent,
    MarksComponent,
    StudentViewComponent,
    StudentComponent,
    AssignmentsComponent,
    AssignmentsViewComponent,
    ClassesComponent,
    ClassesViewComponent,
    HomeworkComponent,
    HomeworkViewComponent,
    TutorialsComponent,
    TutorialsViewComponent,
    EnrollmentComponent,
    FeecodeComponent,
    MarkscodeComponent,
    AboutusComponent,
    FooterComponent,
    HelpdeskComponent,
    HeaderAdminComponent,
    FileuploadComponent,
    LoginComponent,
    SignupComponent,
    NotificationsComponent,
    SettingsComponent,
    EmployeeComponent,
    ExpensesComponent,
    SalaryComponent,
    SalarycodeComponent,
    VoucherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    DashboardModule,
    ComponentsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
