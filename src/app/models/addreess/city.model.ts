import { Model } from "../person/model";
import { StateModel } from "./state.model";

export class CityModel{

    constructor(
        public id: number = 0,
        public name: string = "",
        public state: StateModel = new StateModel()
    ) { }

}