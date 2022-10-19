import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {


  values : number[] = [1,2,3,4];

  // we can create this dynamicly
  public form : FormGroup = new FormGroup({
    textFormField1: new FormControl('',[Validators.required]),
    textFormField2: new FormControl('',[Validators.required]),
    textFormField3: new FormControl('',[Validators.required]),
    textFormField4: new FormControl('',[Validators.required]),
  })

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid)
      this.router.navigate(['/two']);
  }

  get isFormEmpty(): boolean{
    const formData = this.form.getRawValue();
    return this.values.every(x=> !(formData['textFormField'+x]))
  }

}
