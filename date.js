function display_one_line_on_screen(oneDate, offset){
  g.drawString(oneDate, 0, offset);
}

function make_to_digits_string(datepart){
  datepartstring = datepart.toString();
  if(datepartstring.length<=1){
    return "0" + datepartstring;
  }
  else
  {
    return datepartstring;
  }
}

function make_datetext(dateObj){
    monthstring = make_to_digits_string(dateObj.getMonth()+1);
    daystring = make_to_digits_string(dateObj.getDate());
    return monthstring + "-" + daystring;
}

function display_dates() {
    //read data from file
    eventsJson = require("Storage").readJSON("personal.json", true);
    if(eventsJson == undefined){
      g.drawString("Error reading file", 50, 50);
      return;
    }

  // Reset the state of the graphics library
  g.reset();
  g.setFontAlign(-5,0); // center font
  g.setFont("6x8",2); // bitmap font, 2x magnified
  g.clear();

  //show Today
  now = new Date();
  g.drawString(make_datetext(now) + "Today", 0, 10);
  
  
  g.setFont("6x8",1.5); // bitmap font, 1.5x magnified
  maxDate =  new Date(now.setDate(now.getDate() + 10));  //only show dates to this datetime
  eventEntriesCount = eventsJson.length;

  datesToShow = [];
  for (var i=0; i<eventEntriesCount; i++) {    
    aDate = Date.parse(eventsJson[i].Date);     
    if(aDate < maxDate) {      
      aDateObj = new Date(aDate);
      datepart = make_datetext(aDateObj);
      datesToShow.push(datepart + " " + eventsJson[i].Event);
    }    
  }
  
  datesToShow.sort();
  
  //show on display
  eventTextOffset = 40;
  for (i=0; i<datesToShow.length; i++) { 
     display_one_line_on_screen(datesToShow[i], eventTextOffset);
     eventTextOffset += 15;
  }
  
}


// draw immediately at first
display_dates();
//var secondInterval = setInterval(readdates, 1000);