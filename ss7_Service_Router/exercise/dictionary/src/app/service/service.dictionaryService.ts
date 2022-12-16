import { Injectable } from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class ServiceDictionaryService {
  dictionary:  IWord [] = [
    {
      id:1,
      word : 'Leisure travel',
      mean:'du lịch đời thường'
    },
    {
      id:2,
      word : 'adventure travel',
      mean :'du lịch thám hiểm'
    },
    {
      id:3,
      word : 'agritourism travel',
      mean:'du lịch đồng quê'
    },
    {
      id:4,
      word : 'backpacking ',
      mean:'du lịch bụi'
    },
    {
      id:5,
      word :'trip',
      mean:'chuyến đi'
    }
  ]
  constructor() { }

  findDectionaryId(id:string){
    return this.dictionary.find(item => item.id === id)
  }
}
