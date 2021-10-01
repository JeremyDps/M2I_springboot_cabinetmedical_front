import { Adresse } from "./Adresse";
import { Deplacement } from "./Deplacement";
import { Infirmiere } from "./Infirmiere";

export interface Patient {
    id ?: number;
    nom : string;
    prenom : string;
    sexe : string;
    numero_securite_sociale ?: string;
    date_de_naissance : Date;
    infirmiere ?: Infirmiere;
    deplacements ?: Deplacement[];
    adresse ?: Adresse;
}