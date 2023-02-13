import { Injectable } from "@angular/core";
import { Constants } from "../constants";

@Injectable()
export class CommonFunctions
{

  // Genera un texto aleatorio
  public generateLorem(length: number) {
    const loremArray = Constants.lorem.split(' ');

    let result = '';
    for (let i = 0; i < length; i++) {
      result += loremArray[Math.floor(Math.random() * loremArray.length)] + ' ';
    }
    return result;
  }
}