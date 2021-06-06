import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  model = new FormGroup({
    user: new FormControl('', [Validators.required]),
    cellphone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')])
  });

  constructor(
    private dialogRef: MatDialogRef<UsuariosComponent>
  ) { }

  ngOnInit(): void { }

  logForm() {
    // console.log(this.model.get('user').value);
    console.log(this.model);
    if (this.model.status) {
      this.dialogRef.close(this.model.value); // cerrar modal y pasar datos a la vista padre
    }
  }

}
