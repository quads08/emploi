import { Component, OnInit } from '@angular/core';
import { ApiClasseService } from 'src/app/services/api-classe.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  recs:any = [];
  idU:number ; 
  modalContent:undefined ;
  constructor(private service:ApiClasseService, private toastr: ToastrService, private modalService: NgbModal){ 
    this.idU = parseInt(localStorage.getItem("userID"));
    console.log("ID USER SESSION : "+this.idU);
  }

  ngOnInit(): void {  
  
  }

  openModal(targetModal, classes) {
    this.modalContent = classes; 
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
    
   }
 
   
}
