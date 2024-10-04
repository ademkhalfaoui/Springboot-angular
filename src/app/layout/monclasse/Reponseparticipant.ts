import { Question } from "./Question";
import { Reponse } from "./Reponse";
import { utilisateur } from "./utilisateur";


export interface ReponseParticipant {
  id: number;
  utilisateur: utilisateur;
  reponse: Reponse;
  question: Question;
}