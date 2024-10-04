import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareserviceService } from '../../../../services/shareservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { utilisateur } from '../../../../layout/monclasse/utilisateur';

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrl: './update-formateur.component.css'
})
export class UpdateFormateurComponent {
formateurForm: FormGroup;
  formateurId: number | null = null;
 formateur: utilisateur | undefined;

  constructor(
    private fb: FormBuilder,
    private share: ShareserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formateurForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      num_cin: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      email: ['', [Validators.required, Validators.email]],
      nom_AR: [''],
      prenom_AR: [''],
      specialite: [''],
      direction: ['', Validators.required],
      theme_formation: [''],
      horaire: [''],
      periode: [''],
      username: [''],
      password: ['', [Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    alert(id)
    if (id !== null) {
      this.formateurId = +id; // Convert the id to a number
      if (!isNaN(this.formateurId)) {
        this.loadParticipant();
      } else {
        console.error('Invalid Formateur ID');
      }
    } else {
      console.error('Formateur ID not found in route parameters.');
    }
  }

  loadParticipant(): void {
    if (this.formateurId !== null) {
      this.share.getformateur(this.formateurId).subscribe(
        (data: utilisateur) => {
          this.formateur = data;
          this.formateurForm.patchValue(this.formateur);
        },
        (error: any) => {
          console.error('Error loading formateur:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.formateurForm.valid && this.formateurId !== null) {
      this.share.updateFormateur(this.formateurId, this.formateurForm.value).subscribe(
        () => {
          this.router.navigate(['/admin/allformateurs']);
        },
        (error: any) => {
          console.error('Error updating formateur:', error);
        }
      );
    }
  }
}
