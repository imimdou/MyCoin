import { Component, OnInit } from '@angular/core';

import { SocketService } from "../socket.service";

@Component({
  selector: 'app-bitcoin-alsat',
  templateUrl: './bitcoin-alsat.component.html',
  styleUrls: ['./bitcoin-alsat.component.css']
})
export class BitcoinAlsatComponent implements OnInit {
  
  title = 'Bitcoin Sat/Al';
  public bitcoinMsgs: Array<Array<any>>;
  
  constructor(private socket: SocketService) {
  	this.bitcoinMsgs = [];
   }

	ngOnInit() {
		this.socket.getEventListener().subscribe(event => {
			console.log(event.type)
	        if(event.type == "message"){
				
				var data = event.content.split("~")
	        	
	        	if(data[0] == "bitcoin" && data[1] == "getbitcoin") {
	            	var message = [];
	            	message.push(data[2])
	            	message.push("At " + data[3])
	                this.bitcoinMsgs.push(message);

	                if(this.bitcoinMsgs.length > 4)
	                	this.bitcoinMsgs.splice(0, 1);

	            }
            }
            else if(event.type == "close") {
                //this.bitcoinMsgs.push("Connection lost");
            }
            else if(event.type == "open") {
                //this.bitcoinMsgs.push("Connected");
            }
      });
  	}

}
