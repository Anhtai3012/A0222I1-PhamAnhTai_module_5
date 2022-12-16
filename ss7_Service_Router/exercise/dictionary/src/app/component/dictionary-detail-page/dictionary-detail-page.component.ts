import { Component, OnInit } from '@angular/core';
import {ServiceDictionaryService} from "../../service/service.dictionaryService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail-page',
  templateUrl: './dictionary-detail-page.component.html',
  styleUrls: ['./dictionary-detail-page.component.css']
})
export class DictionaryDetailPageComponent implements OnInit {
  dictionary :any
  constructor(private dictionaryService:ServiceDictionaryService,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data =>{
      const id= data.get('id');
      this.dictionary = this.dictionaryService.
    })
  }

}
