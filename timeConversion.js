function timeConversion(t) {
    
    let period=t.slice(-2)
    
    const time=t.slice(0,-2)
   
    let [hours,minute,second]=time.split(":")
    hours=parseInt(hours)
    if(period ==="AM"){
        if(hours === 12){
            hours=0
        }
    }else if(period==="PM"){
        if(hours !==12){
            hours +=12
        }
    }

    let finalhours=hours.toString().padStart(2,"0")
    return `${finalhours}:${minute}:${second}`;

}
console.log(timeConversion("07:05:45PM"));  // Output: 19:05:45
console.log(timeConversion("12:00:01AM"));  // Output: 00:00:00
console.log(timeConversion("12:45:00PM"))
