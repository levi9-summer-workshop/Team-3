export class SurveyUser {

    public username:string;
    public email:string;
    public password:string;

    public constructor(username:string, password:string){
        this.username = username;
        this.password = password;
    }
   
}
