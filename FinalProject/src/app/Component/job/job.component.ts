import { Component, Input } from '@angular/core';
import { Job } from '../../Models/Job';
import { field } from '../../Models/Field';

@Component({
  selector: 'app-job-details',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobDetailsComponent {
  @Input()
  job: Job =
    {
      field: field.QA,
      requirements: "",
      scopeOfHours: 0,
      area: "",
      Hybrid: false
    };
}
