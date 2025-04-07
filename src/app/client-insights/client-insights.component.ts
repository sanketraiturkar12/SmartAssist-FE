import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataserviceService } from "../dataservice.service";

@Component({
  selector: 'app-client-insights',
  templateUrl: './client-insights.component.html',
  styleUrls: ['./client-insights.component.css']
})
export class ClientInsightsComponent implements OnInit {
@Input() insights:any;
clientDetails:any;
userDetails:any;
expandAll = false;
modalRow:any
  constructor(private elRef: ElementRef, private modalService: NgbModal, private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.dataService.getuserName(1).subscribe((data) => {
      this.userDetails = data["data"][0];
    });
  }

  expandDetails(type){
    if(type === 'expand'){
       this.expandAll = true;
    } else{
      this.expandAll = false;
       const dataElement = this.elRef.nativeElement.querySelectorAll(".panel-collapse");
      for(var i=0;i<dataElement.length;i++){
      dataElement[i].classList.remove('show');
      }
    }
  }

  open(content, selectedItem, tableRow) {
    this.modalRow = tableRow;
    this.clientDetails = selectedItem;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size:'md',centered: true});
  }
}
