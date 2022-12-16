import { Component, OnInit } from '@angular/core';
import {IWord} from "../../model/iword";
import {ServiceDictionaryService} from "../../service/service.dictionaryService";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionarys: IWord [] = [];
  constructor(private dictionaryService:ServiceDictionaryService) { }


  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.dictionarys = this.dictionaryService.dictionary;
  }

}
