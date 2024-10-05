import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit{

  formUser: FormGroup
  addon: string;

  constructor(private fb: FormBuilder){
    this.addon = "@";
    this.formUser = this.fb.group({
      tipo: ['', Validators.required]
    })
  }


  ngOnInit(): void {
  
  }



  

  options = ['Artista/Projetos', 'Apoiador', 'Administrador']; 



  submitUser(){}


}
