import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  
  iterateArr = []
  infoFlag = true
  group ={}
  addRadioOption = false
  errorFlag = false
  finalFormInfo = []
  finalFormInfoLenghth : any
  preOption = [];


  //first form controls
  private addUserFiels(): FormGroup {
    return this._fb.group({
      field_name: ['', Validators.required],
      field_show: ['', Validators.required],
      require: [false],
      type: [null,Validators.required],
      format: [],
      description: [],
      option: [''],
      optionArr : [[]]
    });
  }
  public userForm: FormGroup;


  public finalForm: FormGroup;
  
  constructor(private _fb: FormBuilder,) { 
    this.userForm = this._fb.group({
      myForm: this._fb.array([this.addUserFiels()])
    });
    this.finalForm = this._fb.group({
      final: this._fb.array([])
    });
  }

  ngOnInit() {        
  }

   //Add Fields
   addField(index:Number): void {   
    if(this.controls.type.errors){
      this.errorFlag = true
    } else{
      this.errorFlag = false
      this.createdForm.push(this.addUserFiels());
    }
    //@ts-ignore
    this.createdForm.value[index].optionArr.push(this.preOption)
    this.preOption = [] 
       
  }
 
  //Remove Fields
  removeField(index: number): void {
    this.createdForm.removeAt(index);
  }
  //Fields Array
  get createdForm(): FormArray {
    return <FormArray>this.userForm.get('myForm');
  }

  createForm(){
    //@ts-ignore
    this.createdForm.value[this.createdForm.value.length-1].optionArr.push(this.preOption)
    this.preOption = []
    this.infoFlag = false
    const formArray  = this.finalFormUser;
    for(let i = 0; i< this.createdForm.value.length ; i++){            
      //@ts-ignore
      this.group[`${this.createdForm.value[i].field_name}`] = 
      [null,
      this.createdForm.value[i].type,
      this.createdForm.value[i].field_show,
      this.createdForm.value[i].field_name,
      this.createdForm.value[i].format,
      this.createdForm.value[i].optionArr,
      this.createdForm.value[i].description]   
      formArray.insert(formArray.length, this._fb.control(``));
      if(this.createdForm.value[i].require){
        this.finalFormUser.controls[i].setValidators([Validators.required]);   
      }
      if(this.createdForm.value[i].format){
        if(this.createdForm.value[i].format.length != 0){
          let unamePattern
          if(this.createdForm.value[i].format === 'email'){
            unamePattern = "^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}$"
          }else if(this.createdForm.value[i].format === 'number'){
            unamePattern = "^[+98-9]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
          }
          //@ts-ignore
          this.finalFormUser.controls[i].setValidators([Validators.pattern(unamePattern)]);   
        }
        if(this.createdForm.value[i].format.length != 0 && this.createdForm.value[i].require){
          let unamePattern
          if(this.createdForm.value[i].format === 'email'){
            unamePattern = "^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}$"
          }else if(this.createdForm.value[i].format === 'number'){
            unamePattern = "^[+98-9]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
          }
          //@ts-ignore
          this.finalFormUser.controls[i].setValidators([Validators.required,Validators.pattern(unamePattern)]);  
        }
      }
    }
        
    for (const property in this.group) {
      //@ts-ignore
      this.iterateArr.push([property,this.group[property]])
    }        
  }

   //Fields Array
   get finalFormUser(): FormArray {
    return <FormArray>this.finalForm.get('final');
  }

  get controls(){  
    //@ts-ignore
    return this.createdForm.controls[0].controls;
  }

  get finalcontrols(){  
    //@ts-ignore
    return this.finalFormUser.controls;
  }

  getInfo(){  
    this.errorFlag = false
    let counter = false
    this.finalFormUser.controls.forEach((error)=>{
      if(error.errors){
        console.log(error.errors);
        
        this.errorFlag = true
        counter = true
      }
    })
    if(!counter){
      this.finalFormInfo =this.finalForm.value.final
      this.finalFormInfoLenghth = this.finalFormInfo.length
    }
    
  }

  addOption(index:Number){
    //@ts-ignore
    this.preOption.push(this.createdForm.value[index].option)
     //@ts-ignore
     this.createdForm.controls[index].patchValue({ option: '' })        
  }

}
