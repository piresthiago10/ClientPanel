import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';



import { Client } from '../../models/Client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(
    private clientservice: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {
    // Recuperar id da url
    this.id = this.route.snapshot.params['id'];
    // get client
    this.clientservice.getClient(this.id).subscribe(client => {
      if(client != null){
        if (client.balance > 0){
          this.hasBalance = true;
        }
      }
      this.client = client;
    });
  }

  updateBalance(){
    this.clientservice.updateClient(this.client);
    this.flashMessage.show('Renda atualizada', {
      cssClass: 'alert-success', timeout:4000
    });
  }

}
