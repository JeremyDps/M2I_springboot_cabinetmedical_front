import { Adresse } from "./Adresse";
import { Deplacement } from "./Deplacement";
import { Patient } from "./Patient";

export interface Infirmiere {
    id ?: number;
    nom ?: string;
    prenom: string;
    numero_professionnel ?: number;
    tel_pro ?: string;
    tel_perso ?: string;
    adresse ?: Adresse;
    patients ?: Patient[];
    deplacements ?: Deplacement[];
}