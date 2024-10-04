import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { utilisateur } from '../../../layout/monclasse/utilisateur';
import { ShareserviceService } from '../../../services/shareservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-participant',
  templateUrl: './update-participant.component.html',
  styleUrls: ['./update-participant.component.css']
})
export class UpdateParticipantComponent implements OnInit {
  participantForm: FormGroup;
  participantId: number | null = null;
  participant: utilisateur | undefined;

  constructor(
    private fb: FormBuilder,
    private share: ShareserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.participantForm = this.fb.group({
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
      this.participantId = +id; // Convert the id to a number
      if (!isNaN(this.participantId)) {
        this.loadParticipant();
      } else {
        console.error('Invalid Participant ID');
      }
    } else {
      console.error('Participant ID not found in route parameters.');
    }
  }

  loadParticipant(): void {
    if (this.participantId !== null) {
      this.share.getParticipant(this.participantId).subscribe(
        (data: utilisateur) => {
          this.participant = data;
          this.participantForm.patchValue(this.participant);
        },
        (error: any) => {
          console.error('Error loading participant:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.participantForm.valid && this.participantId !== null) {
      this.share.updateParticipant(this.participantId, this.participantForm.value).subscribe(
        () => {
          this.router.navigate(['/admin/allparticipants']);
        },
        (error: any) => {
          console.error('Error updating participant:', error);
        }
      );
    }
  }
}
