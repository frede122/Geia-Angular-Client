import { AddressModel } from "../../addreess/address.model";


export class UserDetailsModel {

    public id: number = 0;
    public name: string = "";
    public address: AddressModel = new AddressModel();
    constructor(
    ) { }


}