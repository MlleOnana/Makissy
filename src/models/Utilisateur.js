export class Utilisateur{


    constructor(id, nom, pseudo, email, num, dateDebut, ville, pays, joursRestants ){
        this.id=id;
        this.nom=nom;
        this.pseudo=pseudo;
        this.email=email;
        this.num=num;
        this.dateDebut= new Date(dateDebut);
        this.ville=ville;
        this.pays=pays;
        this.joursRestants=joursRestants;
    }

     CalculJoursRestants(){
        const day= new Date();

        const diff= day-this.dateDebut;
        const nmbreJours= Math.floor(diff/(1000*60*60*24));//conversion en jours
        const jouRestants= 360-nmbreJours;
        
        this.joursRestants= jouRestants>0 ? jouRestants : 0;
    }

    getJoursRestants(){
        this.CalculJoursRestants();
        return this.joursRestants;
    }

    static fromJson(json){
        return new Utilisateur(
            json.id,
            json.nom,
            json.pseudo,
            json.email,
            json.num,
            json.dateDebut,
            json.ville,
            json.pays,
            json.joursRestants,
        );
    }
}

