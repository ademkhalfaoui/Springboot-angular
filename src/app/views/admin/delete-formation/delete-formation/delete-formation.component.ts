import { Component } from '@angular/core';
import { ShareserviceService } from '../../../../services/shareservice.service';

@Component({
  selector: 'app-delete-formation',
  templateUrl: './delete-formation.component.html',
  styleUrl: './delete-formation.component.css'
})
export class DeleteFormationComponent {
  constructor(private share:ShareserviceService){}
  deleteFormation(formationId: number) {
    this.share.deleteFormation(formationId).subscribe(
      () => {
        
        console.log('Formation supprimé avec succès');
        window.alert("Formation supprimé avec succès");
      },
      (error) => {
        // Gérer les erreurs
        console.error('Erreur lors de la suppression du formateur', error);
      }
    );
  }
}
