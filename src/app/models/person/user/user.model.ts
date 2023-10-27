import { AddressModel } from "../../addreess/address.model";


export class UserModel {

    constructor(
        public id: number = 0,
        public name: string = "",
        public address: AddressModel = new AddressModel(),
        public email : string = "",
    ) { }


}