function display(message){
setTimeout(function() {
				$("#puf").hide();
				$("#list").append('<li> <div class="jumbotron"><h3><b> IIITaBot: </b>' + message + '</h3></div></li>').fadeIn(2000);
                                responsiveVoice.speak(message);
			}, 700);
}
var r="";
$(document).ready(function() {
	$("#preloader, #puf").hide();
	$("#form1").hide();
	var name = "You", check = 0;
	$("#buttons").click(function(e) {
		var val = $("#msg").val();
		$("#puf").show();
	
		check = 0;
		var ress = val.match(/hey/g);
		var ress1 = val.match(/Hey/g);
		var ress2 = val.match(/hi/g);
		var ress3 = val.match(/Hi/g);
		if(ress || ress1 || ress2 || ress3) {
			check = 1;
			display('Hey I\'m IIITaBot. Ask about IIITa :)')
		}
	window.scrollBy(0,1000);
		$("#form").hide();
		$("#form1").show();
		e.preventDefault();
	});
        var r="";
        $("#picbtn").click(function(event) {
             $("#puf").show();
                     flag=1;
                     display(' <a href="https://www.iiita.ac.in/uploads/carousel/campus818901.jpg"><img src="https://www.iiita.ac.in/uploads/carousel/campus818901.jpg" style="height:200px; width: 200px;"</a>&nbsp;&nbsp;<a href="https://www.iiita.ac.in/uploads/carousel/b218.jpg"><img src="https://www.iiita.ac.in/uploads/carousel/b218.jpg" style="height:200px; width: 200px;"</a>&nbsp;<a href="https://ece.iiita.ac.in/images/i1.jpg"><img src="https://ece.iiita.ac.in/images/i1.jpg" style="height:200px; width: 200px;"</a><br><a href="https://www.iiita.ac.in/institute/infrastructure/images/gridimage/infrastructure.jpg"><img src="https://www.iiita.ac.in/institute/infrastructure/images/gridimage/infrastructure.jpg" style="height:200px; width: 200px;"</a>&nbsp;<a href="https://img.collegepravesh.com/2015/11/IIIT-Allahabad-Logo.png"><img src="https://img.collegepravesh.com/2015/11/IIIT-Allahabad-Logo.png" style="height:200px; width: 200px;"</a>');
                     window.scrollBy(0,2000);
        });
        $("#aboutbtn").click(function(event) {
             $("#puf").show();
                     flag=1;
                     display('<div class="thumbnail" style="height:300px;width:200p;"><img src="https://mba.iiita.ac.in/img/2.jpg" style="height:280px;"></div><br><br><b>Indian Institute of Information Technology</b>, Allahabad (IIIT-Allahabad) is a public university located in Allahabad, in Uttar Pradesh state in northern India. It is one of the nineteen Indian Institutes of Information Technology listed by the Ministry of Human Resource Development. <br><br><ul><li><label>Established: </label> 1999 </li><li><label>Director: </label> P. Nagabhushan </li><li><label>Academic Staff: </label> 82 </li><li><label>Undergraduates: </label> 1080 </li><li><label>Postgraduates: </label> 475 </li></ul>');
             window.scrollBy(0,2000);
        });
        $("#locationbtn").click(function(event) {
             $("#puf").show();
                     flag=1;
                     display('<div class="thumbnail" style="height:300px;width:200p;"><img src="https://www.google.co.in/maps/vt/data=ASQ9HwYGfOQySfJcAicKosMT_fE7NpSiyo0JsrcFFUli8ZSY73a9tluPSJAt-tM6ULwoU0l8zhDxNGXY59BSfwr_Dbz9wZNBbAdE3RTpKmsUGSaf1UwMDeyJG4mXOdeJ-DJQ-lcKOlYpSSpV" style="height:280px;"></div><br><br><ul><li><label>Address: </label> IIIT Rd, Near Boys Hostel, Devghat, Jhalwa, Allahabad, Uttar Pradesh 211015 </li><br><li><label>Campus: </label> Urban, 100-acre (40 ha) </li> </ul>');
               window.scrollBy(0,2000);
        });
        $("#hostelbtn").click(function(event) {
             $("#puf").show();
                     flag=1;
                     display('"We have 5 Boys Hostel and 3 Girls Hostel. Apart from that there are 3 Visitors Hostel. Search for "boys hostel", "girls hostel", "visitor hostel" for further info');
        });
        $("#dirbtn").click(function(event) {
             $("#puf").show();
                     flag=1;
                     if (navigator.geolocation) {
                                  navigator.geolocation.getCurrentPosition(showPosition);
                       } else { 
                                  r.innerHTML = "Geolocation is not supported by this browser.";
                       }
               
        });
	$("#buttons1").click(function(event) {
		$("#puf").show();
		var val1 = $("#msg1").val();
		if($("#msg1").val() == '') {
			display('Say something manh!');
		}
		else {
		$("#list").append('<li> <div class="jumbotron"><h3><b>'+ name + ':</b>&nbsp' + val1 +'</h3></div></li>');
		$("#msg1").val('');
		var flag = 0, counter; 
		var res = val1.match(/up/g);
		if(res) {
			flag = 1;
 			counter = Math.floor(Math.random() * 11);  
 			switch(counter) {
 
 				case 1 :
 				case 2 : display('Well, nothings happening in my world, what about you ?');	
 						 break;
 				case 3 :
 				case 4 : display('The earth is round and space extends in all diretions.. I\'d place my bets on Matter,' + name +'!');	
 						 break;
 				case 5 :
 				case 6 : display('Anything that\'s not down or sideways B-)');	
 						 break;

 				default : display(' Well, nothings happening in my world, <br>what about you ?');	
 			}
			// display('Well, nothings happening in my world, <br>what about you ?</h3></div></li>');	
		}
		var res1 =val1.match(/created/g);
		var res4 = val1.match(/you/g);
		var res5 = val1.match(/made/g);
                var res6 = val1.match(/built/g);
                var res7 = val1.match(/your/g);
		var res8 = val1.match(/father/g);
		if((res1 && res4) || (res5 && res4) || (res6 && res4) || (res8 && res7)) {
			flag = 1;
			display('GeekHaven, Technical Student Council IIITa :D');	
		}
		var res2 =val1.match(/date/g);
		var date = new Date();
		if(res2) {
			flag = 1;
			display('It is&nbsp' + date.getDate() + '/' + (parseInt(date.getMonth())+1) + '/' + date.getFullYear() + ' today!');	
		}
		var res2c =val1.match(/made/g);
		var res2d =val1.match(/were/g);
		var res2a =val1.match(/when/g);
		var res2b =val1.match(/created/g);
		if((res2a && res2b) || (res2c && res2d)) {
			flag = 1;
			display('On 25<sup>rd</sup> June, 2017</h3></div></li>');
		}
	        var res3c =val1.match(/what/g);
		var res3d =val1.match(/you/g);
                var res3e =val1.match(/are/g);
                var res3f =val1.match(/who/g);

		if((res3c && res3d && res3e) || (res3f && res3d && res3e)) {
			flag = 1;
			display('Hey I\'m IIITaBot. Ask about IIITa :)');
		}
		if(res3a && res3b) {
			flag = 1;
			display('Helping you to know more about the college!!! And trying to guide you.');
		}
		if(res3a && res3b) {
			flag = 1;
			display('Helping you to know more about the college!!! And trying to guide you.');
		}
		var res3a =val1.match(/what/g);
		var res3b =val1.match(/doing/g);
		if(res3a && res3b) {
			flag = 1;
			display('Helping you to know more about the college!!! And trying to guide you.');
		}
		var res4a =val1.match(/how/g);
		var res4b =val1.match(/are/g);
		var res4c = val1.match(/you/g);
		if(res4a && res4b && res4c && flag == 0) {
			flag = 1;
			counter = Math.floor(Math.random() * 11);  
 			switch(counter) {
 
 				case 1 :
 				case 2 : display('My logic and cognitive functions are normal. <br> And how are you ?');
 						 break;
 				case 5 :
 				case 6 : display(' Talking to you makes makes my day so much better ! ^_^ <br> And how are you ?');	
 						 break;
 				case 7 :
 				case 8 : display(' Never Better :D <br> And how are you ?');	
 						 break;
 				default : display(' Great! :D <br> And how are you ?');	
 						
 			}
		}
                var res4d = val1.match(/I/g);
                var res4k = val1.match(/i/g);
                var res4e = val1.match(/fine/g);
                var res4f = val1.match(/great/g);
                var res4g = val1.match(/superb/g);
                var res4h = val1.match(/awesome/g);
                var res4i = val1.match(/happy/g);
                var res4j = val1.match(/good/g);
                if((res4d || res4k) && (res4e||res4f||res4g||res4h||res4i||res4j) && flag == 0) {
                     flag=1;
                     display(' Awesome _^-^_! :D <br> Now can we get to business ?');
                }
                var res8a = val1.match(/picture/g);
                var res8b = val1.match(/pictures/g);
                var res8c = val1.match(/Picture/g);
                var res8d = val1.match(/pics/g);
                var res8e = val1.match(/Pics/g);
                var res8f = val1.match(/pic/g);
                var res8g = val1.match(/image/g);
                var res8h = val1.match(/images/g);
                var res8i = val1.match(/photo/g);
                var res8j = val1.match(/photos/g);
                var res8k = val1.match(/iiita/g);
                var res8l = val1.match(/college/g);
                var res8m = val1.match(/IIITA/g);
                var res8n = val1.match(/IIITa/g);
                if((res8k || res8l || res8m || res8n) && (res8a || res8b || res8c || res8d || res8e || res8f || res8g || res8h || res8i || res8j) && flag == 0) {
                     flag=1;
                     display(' <a href="https://www.iiita.ac.in/uploads/carousel/campus818901.jpg"><img src="https://www.iiita.ac.in/uploads/carousel/campus818901.jpg" style="height:200px; width: 200px;"></a>&nbsp;&nbsp;<a href="https://www.iiita.ac.in/uploads/carousel/b218.jpg"><img src="https://www.iiita.ac.in/uploads/carousel/b218.jpg" style="height:200px; width: 200px;"></a>&nbsp;<a href="https://ece.iiita.ac.in/images/i1.jpg"><img src="https://ece.iiita.ac.in/images/i1.jpg" style="height:200px; width: 200px;"></a><br><a href="https://www.iiita.ac.in/institute/infrastructure/images/gridimage/infrastructure.jpg"><img src="https://www.iiita.ac.in/institute/infrastructure/images/gridimage/infrastructure.jpg" style="height:200px; width: 200px;"></a>&nbsp;<a href="https://img.collegepravesh.com/2015/11/IIIT-Allahabad-Logo.png"><img src="https://img.collegepravesh.com/2015/11/IIIT-Allahabad-Logo.png" style="height:200px; width: 200px;"></a>');
                     window.scrollBy(0,2000);
                }
                
                var res9a = val1.match(/about/g);
                var res9b = val1.match(/college/g);
                var res9c = val1.match(/iiita/g);
                var res9d = val1.match(/IIITa/g);
                var res9e = val1.match(/iiit allahabad/g);                
                var res9f = val1.match(/iiit Allahabad/g);
                if(res9a && (res9b || res9c || res9d || res9e || res9f) && flag==0)
                {
                      flag=1;
                     display('<div class="thumbnail" style="height:300px;width:200p;"><img src="https://mba.iiita.ac.in/img/2.jpg" style="height:280px;"></div><br><br><b>Indian Institute of Information Technology</b>, Allahabad (IIIT-Allahabad) is a public university located in Allahabad, in Uttar Pradesh state in northern India. It is one of the nineteen Indian Institutes of Information Technology listed by the Ministry of Human Resource Development. <br><br><ul><li><label>Established: </label> 1999 </li><li><label>Director: </label> P. Nagabhushan </li><li><label>Academic Staff: </label> 82 </li><li><label>Undergraduates: </label> 1080 </li><li><label>Postgraduates: </label> 475 </li></ul>');
                   window.scrollBy(0,3000);
                }

                var res10a = val1.match(/area/g);
                var res10b = val1.match(/college/g);
                var res10c = val1.match(/iiita/g);
                var res10d = val1.match(/IIITa/g);
                var res10e = val1.match(/location/g);
                var res10f = val1.match(/campus/g);
                if((res10a || res10e || res10f) && (res10b || res10c || res10d) && flag==0)
                {
                      flag=1;
                     display('<div class="thumbnail" style="height:300px;width:200p;"><img src="https://www.google.co.in/maps/vt/data=ASQ9HwYGfOQySfJcAicKosMT_fE7NpSiyo0JsrcFFUli8ZSY73a9tluPSJAt-tM6ULwoU0l8zhDxNGXY59BSfwr_Dbz9wZNBbAdE3RTpKmsUGSaf1UwMDeyJG4mXOdeJ-DJQ-lcKOlYpSSpV" style="height:280px;"></div><br><br><ul><li><label>Address: </label> IIIT Rd, Near Boys Hostel, Devghat, Jhalwa, Allahabad, Uttar Pradesh 211015 </li><br><li><label>Campus: </label> Urban, 100-acre (40 ha) </li> </ul>');
                       window.scrollBy(0,2000);
                }
                 
                var res11a = val1.match(/hostel/g);
                if((res11a) && flag==0)
                {
                      flag=1;
                      display('"We have 5 Boys Hostel and 3 Girls Hostel. Apart from that there are 3 Visitors Hostel. Search for "boys hostel", "girls hostel", "visitor hostel" for further info');
                      
                }

		var lol = val1.match(/lol/g);
			if(lol) {
				flag = 1;
				display(' lolol :P ');
			}
		var lolol = val1.match(/lolol/g);
		 if(lolol) {
		 	flag = 1;
		 	display(' lollol I think we should stop this ! :3 ');
		 }
		var lollol = val1.match(/lollol/g);
		 if(lollol) {
		 	flag = 1;
		 	display(' Oh, common, go do something, you\'re irritating me now!');
		 }

		var weatherr = val1.match(/weather/g);
                var weatherl = val1.match(/climate/g);
		var city = val1.split(" ").splice(-1)[0];
                city = "Allahabad";
		console.log(city);
		if(weatherr || weatherl) {
			flag = 1;
			$.ajax({

				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=b1884514adc3b3c175df2eff8f3f29e5",
				type: "GET",
				dataType: "jsonp",
				success: function(data) {
					var wt = weather(data);
					var t = temp(data);
					display('' + wt + ' with average temp about&nbsp' + t );
					window.scrollBy(0,2000);
				}
			});
		}

		var plus = val1.match(/plus/g); 
		if(plus || (val1.indexOf('+') > -1)) {
			flag = 1;
			var intValue = parseInt(val1.match(/[0-9]+/)[0], 10);
			var intVal = val1.split(" ").splice(-1)[0];
			var intValue1 = parseInt(intVal.match(/[0-9]+/)[0], 10);
			var sum = Number(intValue) + Number(intValue1);
			display(' It is '+ sum + '</h3></div></li>');
		}

		var minus = val1.match(/minus/g); 
		if(minus || (val1.indexOf('-') > -1)) {
			flag = 1;
			var intValue = parseInt(val1.match(/[0-9]+/)[0], 10);
			var intVal = val1.split(" ").splice(-1)[0];
			var intValue1 = parseInt(intVal.match(/[0-9]+/)[0], 10);
			var sub = Number(intValue) - Number(intValue1);
			display(' It is '+ sub );
		}

		var mult = val1.match(/mult/g); 
		var into = val1.match(/into/g); 
		if(mult || (val1.indexOf('x') > -1) || (val1.indexOf('*') > -1) || (val1.indexOf('X') > -1) || into) {
			flag = 1;
			var intValue = parseInt(val1.match(/[0-9]+/)[0], 10);
			var intVal = val1.split(" ").splice(-1)[0];
			var intValue1 = parseInt(intVal.match(/[0-9]+/)[0], 10);
			var mul = Number(intValue)*Number(intValue1);
			display(' It is '+ mul );
		}

		var divi = val1.match(/divi/g); 
		if(divi || (val1.indexOf('/') > -1)) {
			flag = 1;
			var intValue = parseInt(val1.match(/[0-9]+/)[0], 10);
			var intVal = val1.split(" ").splice(-1)[0];
			var intValue1 = parseInt(intVal.match(/[0-9]+/)[0], 10);
			var div = Number(intValue)/Number(intValue1);
			display(' It is '+ div );
		}
                
                var dir1 = val1.match(/directions/g);
		var dir2 = val1.match(/direction/g);
                var dir3 = val1.match(/from/g);
		var dir4 = val1.match(/to/g);

		var dirr = val1.split(" ");
		var index1, index2;
		for(var z = 0; z < dirr.length; z++) {
			if(dirr[z] == 'from') {
				index1 = z;
				continue;
			}
			if(dirr[z] == 'to') {
				index2 = z;
				continue;
			}
		}
		var source = dirr[index1 + 1];
                var source = "";
                var dest = "";
                for(var z = index1 + 1; z < index2; z++) {
                      source += dirr[z]+"+";
                }
                for(var z = index2 + 1; z < dirr.length; z++) {
                      dest += dirr[z]+"+";
                }
		
                //var dest = "Indian+Institute+of+Information+Technology,+Jhalwa,+Allahabad,+Allahabad,+Uttar+Pradesh";
		if((dir1 || dir2) && dir3 && dir4) {
			flag = 1;
				display('&nbsp&nbsp<a href="https://www.google.co.in/maps/dir/' + source +'/' + dest + '/@25.4432533,81.7678107" class="btn btn-default">Click to get DIRECTIONS</a>');
				window.scrollBy(0, 5000);
		}
                else if(dir1 || dir2)
                {
                       flag = 1;
                       var dest = "Indian+Institute+of+Information+Technology,+Jhalwa,+Allahabad,+Allahabad,+Uttar+Pradesh";
                       if (navigator.geolocation) {
                                  navigator.geolocation.getCurrentPosition(showPosition);
                       } else { 
                                  r.innerHTML = "Geolocation is not supported by this browser.";
                       }
                       
                        window.scrollBy(0,4000);
                }
                
		if(flag == 0)
 				display('Ahh ! Whut ... seems alien to me, come again please');
		
				window.scrollBy(0,2000);
			}
		event.preventDefault();
	});	
function showPosition(position) {
    var dest = "Indian+Institute+of+Information+Technology,+Jhalwa,+Allahabad,+Allahabad,+Uttar+Pradesh";
    var source = "";
    source += position.coords.latitude + "," + position.coords.longitude;
    display('&nbsp&nbsp<a href="https://www.google.co.in/maps/dir/' + source +'/' + dest + '/@25.4432533,81.7678107" class="btn btn-default">GET THE DIRECTIONS using Geolocation</a>');
}

function weather(data) {
        return data.weather[0].description;
}
function temp(data) {
	return data.main.temp + "&deg;C";
}
});
