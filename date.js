function readdates() {  
  
  eventsJson = require("Storage").readJSON("personal.json", true);  
  if(eventsJson == undefined){
    g.drawString("Error", 50, 50);
    return;
  }      
  // work out how to display the current time
  // wvar d = new Date();
  // wvar h = d.getHours(), m = d.getMinutes();
  // wvar time = h + ":" + ("0"+m).substr(-2);

  // Reset the state of the graphics library
  g.reset();
  g.setFontAlign(-5,0); // center font
  g.setFont("6x8",1); // bitmap font, 8x magnified
  // Clear the area where we want to draw the time
  //g.clearRect(50,50,100,120);
  // draw the current time
  g.clear();
  
  now = new Date();
  maxDate =  new Date(now.setDate(now.getDate() + 10));
  
  eventEntriesCount = eventsJson.length;  
  
  eventTextOffset = 40;
  
  for (var i=0; i<eventEntriesCount; i++) {
    aDate = Date.parse(eventsJson[i].Date);     
    if(aDate < maxDate){
      
      aDateObj = new Date(aDate);
      
      datepart = (aDateObj.getDate()) + "." + (aDateObj.getMonth() + 1);
      
      g.drawString(datepart + " " + eventsJson[i].Event, 0, eventTextOffset);
      
      //g.drawString(g.wrapString(datepart + " " + eventsJson[i].Event, g.getWidth()).join("\n\t"),0,eventTextOffset);
      
      eventTextOffset += 20;
    }
  }
}


// draw immediately at first
readdates();
//var secondInterval = setInterval(readdates, 1000);