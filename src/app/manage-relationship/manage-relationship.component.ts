import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-manage-relationship',
  templateUrl: './manage-relationship.component.html',
  styleUrls: ['./manage-relationship.component.css']
})
export class ManageRelationshipComponent implements OnInit {
  public modalRow: any;
  public notificationValues: number = 0;
  public upcomingEventsData: any;
  modalTitle: string;
  modalBodyText: string;
  @Input() clientID: any;
  @Output() countChanged: EventEmitter<number> = new EventEmitter();
  public relatedDoc: any = [
    { itemName: 'Fund Document' },
    { itemName: 'Risk Profile' },
    { itemName: 'FA Contract with john' },
    { itemName: 'Signed Will' },
    { itemName: 'Dependents information' },
    { itemName: 'Signed Acceptence Of Risk' }
  ]

  public upcomingMeet: any = [
    { date: '19-sep-2018', time: '12:00' },
    { date: '17-sep-2018', time: '13:00' },
  ]
  expandAll = false;
  public historyData: any;
  public clientName: any;
  public intials: any;
  constructor(public _service: DataserviceService, public elRef: ElementRef, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getRelatedDocumentData();
    this.getClientUpcomingMeetings();
    this.getClientHistoryData();
    this.getClientEventsData();
    this.clientName = sessionStorage.getItem("clientName");
    var name = this.clientName.split(" ");
    var firstName = name[0];
    var lastName = name[1];
    this.intials = firstName.charAt(0) + lastName.charAt(0);
  }

  expandDetails(type) {
    if (type === 'expand') {
      this.expandAll = true;
    } else {
      this.expandAll = false;
      const dataElement = this.elRef.nativeElement.querySelectorAll(".panel-collapse");
      for (var i = 0; i < dataElement.length; i++) {
        dataElement[i].classList.remove('show');
      }
    }
  }

  getRelatedDocumentData() {
    this._service.getClientRelatedDoc(1, this.clientID).subscribe((data: any) => {
      this.relatedDoc = data.data[0].relatedDocument.document;
    })
  }

  getClientUpcomingMeetings() {
    this._service.getClientMeeting(1, this.clientID).subscribe((data: any) => {
      this.upcomingMeet = data.data[0].clientUpcomingMeetings.meetings;
    })
  }

  getClientHistoryData() {
    this._service.getClientHistory(1, this.clientID).subscribe((data: any) => {
      this.historyData = data.data[0]["Genesis Data"]
    })
  }

  getClientEventsData() {
    this._service.getClientIntel(1, this.clientID).subscribe((data: any) => {
      this.upcomingEventsData = data.data;
      this.upcomingEventsData.forEach(element => {
        if (element.color == '#f2210a') {
          this.notificationValues = this.notificationValues + 1;
        }
      });
      this.countChanged.emit(this.notificationValues);
    })
  }

  goToLink(url: string, heading, message) {
    sessionStorage.setItem("heading", heading);
    sessionStorage.setItem("message", message);
    window.open(url, "_blank");
  }
  open(content, tableRow) {
    this.modalRow = tableRow;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'md', centered: true });
  }


  openTwitterModal(content, item) {
    console.log('item', item);
    this.modalService.open(content, { centered: true });
    this.modalTitle = item.accTitle;
    this.getBodyText(item.accTitle);
    // modalRef.title = item.eventTitle;
  }

  getBodyText(title) {
    if (title.includes('bereavement')) {
      this.modalBodyText = 'Heartfelt condolences on your loss'
    } else if (title.includes('birthday') || title.includes('anniversary')){
      this.modalBodyText = 'Wish you well'
    } else if(title.includes('retirement')){
      this.modalBodyText = 'Enjoy the retired life!';
    }
  }
}
