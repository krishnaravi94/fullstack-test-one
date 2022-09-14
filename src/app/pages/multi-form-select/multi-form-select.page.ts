import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-multi-form-select',
  templateUrl: './multi-form-select.page.html',
  styleUrls: ['./multi-form-select.page.scss'],
})
export class MultiFormSelectPage implements OnInit {
  parentForm: FormGroup;
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  countryList: string[];
  beneficiaryMode = 'myself';
  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
  ) {}

  ngOnInit() {this.getCountries();}

  initAllForms() {
    this.parentForm = this.fb.group({});
    this.firstForm = this.fb.group({
      selfAcknowledge: [, Validators.required],
    });
    this.secondForm = this.fb.group({
      companyName: [],
      foundedDate: [],
      ownerName: [],
      businessLicenceNo: [],
      addressLineOne: [],
      addressLineTwo: [],
      pinCode: [],
      telephoneNo: [],
      country: [],
    });
    this.thirdForm = this.fb.group({
      beneficiaryName: [],
      addressLineOne: [],
      addressLineTwo: [],
      pinCode: [],
      phoneNo: [],
      country: [],
    });
  }
  getCountries() {
    this.countryService.getCountries().then(
      (response: any[]) => {
        console.log(response);
    this.countryList = response.map((respCountry)=>respCountry.name.common);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  beneficialOwnerChanged(event: any){
    console.log(event);
    this.beneficiaryMode = event.detail.value;
    console.log(this.beneficiaryMode);
  }
}
