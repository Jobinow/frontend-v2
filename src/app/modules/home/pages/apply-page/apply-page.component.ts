import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '@app/shared/services';

@Component({
  selector: 'app-apply-page',
  templateUrl: './apply-page.component.html',
  styleUrls: ['./apply-page.component.less']
})
export class ApplyPageComponent implements OnInit {

  constructor(private _applicationService: ApplicationService, private _activatedRoute: ActivatedRoute) {}

  jobOfferId: string = "";

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next: ({id}) => {
        this.jobOfferId = id;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  message!:{message: string, status: string};
  file!: File;

  formInputs = {
    name: {
      id: 'fulName',
      name: 'fullName',
      type: 'text',
      value: '',
      placeholder: 'Full Name',
      label: 'Full Name',
      formControll: 'fullName',
      onChange: "",
      required: true
    },
    email: {
      id: 'email',
      name: 'email',
      type: 'email',
      value: '',
      placeholder: 'Email',
      label: 'Email',
      formControll: 'email',
      onChange: "",
      required: true
    },
    phone: {
      id: 'phone',
      name: 'phone',
      type: 'tele',
      value: '',
      placeholder: 'Phone Number',
      label: 'Phone Number',
      formControll: 'phone',
      onChange: "",
      required: true
    },
    identity: {
      id: 'identity',
      name: 'identity',
      type: 'text',
      value: '',
      placeholder: 'Identity',
      label: 'Identity',
      formControll: 'identity',
      onChange: "",
      required: true
    },
    motivationLetter: {
      id: 'letter',
      name: 'letter',
      type: 'text',
      value: '',
      placeholder: 'Motivation Letter',
      label: 'Motivation Letter',
      formControll: 'letter',
      onChange: "",
      required: true
    },
    resume: {
      id: 'resume',
      name: 'resume',
      type: 'file',
      value: '',
      placeholder: 'Resume',
      label: 'Resume',
      formControll: 'resume',
      onChange: "",
      required: true
    }
  }

  uploadFile(file: any) {
    this.file = file;
  }

  apply = () => {
    const formData = new FormData();
    formData.append('motivationLetter', this.formInputs.motivationLetter.value);
    formData.append('jobSeeker.fullName', this.formInputs.name.value);
    formData.append('jobSeeker.email', this.formInputs.email.value);
    formData.append('jobSeeker.phoneNumber', this.formInputs.phone.value);
    formData.append('jobSeeker.identity', this.formInputs.identity.value);
    formData.append('jobSeeker.resume', this.file);
    formData.append('jobOffer.id', this.jobOfferId);

    this._applicationService.create(formData).subscribe({
      next: (res) => {
        if (res.id != null) {
          this.message = {message: "Application sent successfully", status: "ok"}
        }
      },
      error: ({error}) => {
        this.message = { message: error.body.detail, status: "error"}        
      },
      complete: () => {}
    });
    
  }

}
