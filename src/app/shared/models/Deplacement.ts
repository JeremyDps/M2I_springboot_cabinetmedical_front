import { Infirmiere } from "./Infirmiere";
import { Patient } from "./Patient";

export interface Deplacement {
    id ?: number;
    date ?: Date;
    cout ?: number;
    infirmiere ?: Infirmiere;
    patient ?: Patient;
}