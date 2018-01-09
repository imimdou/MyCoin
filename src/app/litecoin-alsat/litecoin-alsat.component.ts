import { Component, OnInit } from '@angular/core';

import { SocketService } from "../socket.service";

@Component({
  selector: 'app-litecoin-alsat',
  templateUrl: './litecoin-alsat.component.html',
  styleUrls: ['./litecoin-alsat.component.css']
})
export class LitecoinAlsatComponent implements OnInit {
  
  title = 'Litecoin Sat/Al';
  public litecoinMsgs: Array<Array<any>>;
  
  constructor(private socket: SocketService) {
  	this.litecoinMsgs = [];
   }

	ngOnInit() {
		this.socket.getEventListener().subscribe(event => {

	        if(event.type == "message"){
				
				var data = event.content.split("~")
	        	
	        	if(data[0] == "litecoin" && data[1] == "getlitecoin") {
	            	var message = [];
	            	message.push(data[2])
	            	message.push("At " + data[3])
	                this.litecoinMsgs.push(message);

	                if(this.litecoinMsgs.length > 4)
	                	this.litecoinMsgs.splice(0, 1);
	            }
            }
            else if(event.type == "close") {
                //this.litecoinMsgs.push("Connection lost");
            }
            else if(event.type == "open") {
                //this.litecoinMsgs.push("Connected");
            }
      });
  	}

}
