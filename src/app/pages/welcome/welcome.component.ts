import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  
  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients()
      .subscribe(clients => {
        console.log(clients)
        this.clients = clients;
      });
  }

}
