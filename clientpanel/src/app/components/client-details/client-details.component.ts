import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

import { Client } from '../../models/Client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  clients: Client[];

  constructor(private clientservice: ClientService) { }

  ngOnInit() {
    this.clientservice.getClients().subscribe(clients => console.log(clients));
  }

}
