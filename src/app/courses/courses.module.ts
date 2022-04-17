import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CourseResolver } from './services/course.resolver';
import { CoursesService } from './services/courses.service';
import { CourseComponent } from './course/course.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

export const coursesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':id',
    component: CourseComponent,
    resolve: {
      course: CourseResolver,
    },
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forChild(coursesRoutes),
  ],
  declarations: [
    HomeComponent,
    CoursesCardListComponent,
    CourseDialogComponent,
    CourseComponent,
  ],
  exports: [
    HomeComponent,
    CoursesCardListComponent,
    CourseDialogComponent,
    CourseComponent,
  ],
  entryComponents: [CourseDialogComponent],
  providers: [CoursesService, CourseResolver],
})
export class CoursesModule {}
