import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  model: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UsuariosComponent>
  ) { }

  ngOnInit(): void {
    this.model = this.formBuilder.group({
      user: [null, Validators.required],
    });
  }

  logForm() {
    // console.log(this.model.get('user').value);
    if (this.model.status) {
      // console.log(this.model.value);
      this.dialogRef.close(this.model.value); // cerrar modal y pasar datos a la vista padre
    }
  }

}
