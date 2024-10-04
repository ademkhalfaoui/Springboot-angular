import { Component } from '@angular/core';
import { ShareserviceService } from '../../../../services/shareservice.service';

@Component({
  selector: 'app-delete-formateur',
  templateUrl: './delete-formateur.component.html',
  styleUrl: './delete-formateur.component.css'
})
export class DeleteFormateurComponent {
constructor(private share:ShareserviceService){}
  deleteFormateur(num_action: number) {
    this.share.deleteFormateur(num_action).subscribe(
      () => {
        // Gérer le succès de la suppression
        console.log('Formateur supprimé avec succès');
      },
      (error) => {
        // Gérer les erreurs
        console.error('Erreur lors de la suppression du formateur', error);
      }
    );
  }
}
