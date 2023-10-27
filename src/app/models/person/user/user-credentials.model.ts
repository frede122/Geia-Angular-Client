import { AddressModel } from "../../addreess/address.model";


export class UserCredentialsModel {

    public newEmail? : string 
    public newPassword? : string 
    constructor(
        public id: number = 0,
        public email : string = "",
        public password? : string,
    ) { 

    }


}