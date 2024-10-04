import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareserviceService } from '../../../services/shareservice.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  utilisateurForm: FormGroup;

  constructor(
    private share: ShareserviceService,
    private router: Router,
    private builder: FormBuilder
  ) {
    this.utilisateurForm = this.builder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      role: ['', Validators.required],
      num_cin: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      email: ['', [Validators.required, Validators.email]],
      nom_AR: ['', Validators.required],
      prenom_AR: ['', Validators.required],
      username: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      specialite: ['', Validators.required],
      direction: ['', Validators.required],
      theme_formation: ['', Validators.required],
      Horaire: ['', Validators.required],
      Periode: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  add(): void {
    this.utilisateurForm.get('username')?.setValue(this.utilisateurForm.get('email')?.value);
    if (this.utilisateurForm.valid) {
      this.share.inscription(this.utilisateurForm.value).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/loginuser']);
      });
    } else {
      window.alert('veuiller remplir les champs obligatoire')
      console.log('Form is invalid');
    }
  }
}
