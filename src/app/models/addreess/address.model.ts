import { CityModel } from "./city.model";
import { Model } from "../person/model";

export class AddressModel{
    
    public city_id = 0;
    constructor(
        public id: number = 0,
        public rua: string = "",
        public number: number = 0,
        public cep: string = "",
        public neighborhood: string = "",
        public city: CityModel = new CityModel(),
    ) { }

}