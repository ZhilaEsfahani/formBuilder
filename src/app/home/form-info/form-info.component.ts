import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.scss']
})
export class FormInfoComponent implements OnInit {

  // field_name = 'عنوان فیلد'
  // require = true
  // type = 'text'
  // format = null
  // description = ''
  formInfo = [
    {
      field_show : 'عنوان فیلد',
      field_name : 'name',
      require: true,
      type : 'text',
      format: null,
      description: null
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
