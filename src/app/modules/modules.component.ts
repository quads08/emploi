import { Component, OnInit } from '@angular/core'; 
import { ToastrService } from 'ngx-toastr';
import { ApiModulesService } from '../services/api-modules.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
    reponses:any = [];
    modalContent:undefined ;
    idU:number; 
    isReclamant:boolean = false  ; 
    constructor(private service:ApiModulesService, private toastr: ToastrService, 
      private modalService: NgbModal, private router:Router){
     this.idU = parseInt(localStorage.getItem("userID"));
    }
  
    ngOnInit(): void {  
    
    }
  
  
    openModal(targetModal, modules) {
      this.modalContent = modules; 
      this.modalService.open(targetModal, {
       centered: true,
       backdrop: 'static'
      });
      
     }
   
     
  }
  