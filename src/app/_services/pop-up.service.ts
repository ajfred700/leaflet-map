import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
        `<div>capital:${ data.name}</div>` +
        `<div>state:${ data.state}</div>` +
        `<div>population: ${ data.population}</div>`
}

}