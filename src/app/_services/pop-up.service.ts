import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
        `<div>capital:${ data.capital}</div>` +
        `<div>state:${ data.state}</div>` +
        `<div>population: ${ data.population}</div>`
}

}