import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareserviceService } from '../../../../services/shareservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formation } from '../../../../layout/monclasse/foramtion';


@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {
  formationForm: FormGroup;
  num_action: number | null = null;
  formation: formation | undefined;

  constructor(
    private fb: FormBuilder,
    private share: ShareserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formationForm = this.fb.group({
      num_salle: ['', Validators.required],
      lieu_formation: ['', Validators.required],
      mode_formation: ['', Validators.required],
      theme_formation: ['', Validators.required],
      gouvernorat: ['', Validators.required],
      entreprise: ['', Validators.required],
      credit_Impot: ['', Validators.required],
      periode: ['', Validators.required],
      horaire: ['', Validators.required],
      droit_tirage_collectif: ['', Validators.required],
      droit_tirage_individuel: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('num_action');
    if (id !== null) {
      this.num_action = +id; // Convert the id to a number
      if (!isNaN(this.num_action)) {
        this.loadFormation();
      } else {
        console.error('Invalid Formation ID');
      }
    } else {
      console.error('Formation ID not found in route parameters.');
    }
  }

  loadFormation(): void {
    if (this.num_action !== null) {
      this.share.getFormation(this.num_action).subscribe(
        (data: formation) => {
          this.formation = data;
          this.formationForm.patchValue(this.formation);
        },
        (error: any) => {
          console.error('Error loading formation:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.formationForm.valid && this.num_action !== null) {
      const updatedFormation = {
        ...this.formationForm.value,
        num_action: this.num_action // Ensure the ID is included
      };
      this.share.updateFormation(this.num_action, updatedFormation).subscribe(
        () => {
          this.router.navigate(['/admin/allformations']);
        },
        (error: any) => {
          console.error('Error updating formation:', error);
        }
      );
    }
  }
}
