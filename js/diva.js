
function sendSubscribe(){
    var daten = $('#subscribe_form').serialize(); 
    
    $.getJSON("http://www.mistress-diva-zarah.com/dev/api.php?method=sendSubscribe&form="+daten+"&jsoncallback=?",				
				function(data){
					console.log(data);
					for(line in data){
						var answer = data[line];
						var msg = answer.answer;
						var state = answer.state;						
					    if(state == 1){
							$('#subscribe_form').get(0).reset();
							$('#results').html('<center><span style="color:green;">&nbsp;' + msg +'&nbsp;</span></center>');							
						} else {
							$('#results').html('<center><span style="color:red;">&nbsp;' + msg +'&nbsp;</span></center>');
						}
					}
				}
			);   
};