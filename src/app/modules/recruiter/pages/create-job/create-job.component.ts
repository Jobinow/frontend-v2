import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfferStatus } from '@app/core/enums/offer-status';
import { JobOffer } from '@app/core/models/job-offer';
import { JobOfferService } from '@shared/services/job-offer/job-offer.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.less']
})
export class CreateJobComponent {
  
  constructor(private _jobOfferService: JobOfferService, private _router: Router) {}

  formInputs = {
    title: {
      id: 'title',
      name: 'title',
      type: 'text',
      value: '',
      placeholder: 'Job Title',
      label: 'Job Title',
      formControll: 'title',
      onChange: "",
      required: true
    },
    description: {
      id: 'description',
      name: 'description',
      type: 'text',
      value: '',
      placeholder: 'Job Description',
      label: 'Job Description',
      formControll: 'description',
      onChange: "",
      required: true
    },
    profile: {
      id: 'profile',
      name: 'profile',
      type: 'text',
      value: '',
      placeholder: 'Job Profile',
      label: 'Job Profile',
      formControll: 'profile',
      onChange: "",
      required: true
    },
    address: {
      id: 'address',
      name: 'address',
      type: 'text',
      value: '',
      placeholder: 'Job Address',
      label: 'Job Address',
      formControll: 'address',
      onChange: "",
      required: true
    },
    educLevel: {
      id: 'educationalLevel',
      name: 'educationalLevel',
      type: 'text',
      value: '',
      placeholder: 'Educational Level',
      label: 'Educational Level',
      formControll: 'educationalLevel',
      onChange: "",
      required: true
    },
    salary: {
      id: 'salary',
      name: 'salary',
      type: 'number',
      value: '',
      placeholder: 'Job Salary',
      label: 'Job Salary',
      formControll: 'salary',
      onChange: "",
      required: true
    }
  }

  submitJob = () => {
    const jobOffer: JobOffer = new JobOffer(
      this.formInputs.title.value, 
      this.formInputs.description.value, 
      this.formInputs.profile.value,
      this.formInputs.address.value,
      this.formInputs.educLevel.value,
      parseInt(this.formInputs.salary.value),
      OfferStatus.PENDING,
      JSON.parse((localStorage.getItem("recruiter") as string)),
      []
      );

    this._jobOfferService.create(jobOffer).subscribe({
      next: (res) => {
        console.log(res);
        this._router.navigate(["/recruiter/jobs"]);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {}
    })
  }
}
