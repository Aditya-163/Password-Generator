document.getElementById("submitButton").addEventListener("click",start);
function start()
{
	var numStr = document.getElementById("inputSize").value;
	if(numStr)
	{
		var num = 0;
		for(var i=0;i<numStr.length;i++)
		{
			if((numStr.charCodeAt(i)>="0".charCodeAt(0)) && (numStr.charCodeAt(i)<="9".charCodeAt(0)))
				num = (num*10) + (numStr.charCodeAt(i)-("0".charCodeAt(0)));
			else
			{
				num = -1;
				break;
			}
		}
		if(num<0)
			alert("Please enter a valid number!");
		else if((num>100000) || (num<=0))
			alert("PLease enter a number in the range (0,100000]");
		else 
		{
			// Now we have a valid number!
			var capChars = document.getElementById("capLetters").checked;
			var numChars = document.getElementById("nums").checked;
			var specialChars = document.getElementById("specials").checked;
			// Considering the inputs for the checkboxes!
			
			var specialSet = ["!","@","#","$","%","^","&","*",")","(","}","{","]","[","?","/","\\"];
			var capSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
			var numSet = ["0","1","2","3","4","5","6","7","8","9"];
			
			if(capChars && numChars && specialChars)
			{
				var set = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*",")","(","}","{","]","[","?","/","\\","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
				var pword = [];
				for(var i=0;i<num;i++)
				{
					var k = Math.floor(Math.random()*100)%(set.length);
					pword.push(set[k]);
				}
				// Code for having at least one cap, num and special characterSet
				var k = Math.floor(Math.random()*1000000)%num;
				var k1 = Math.floor(Math.random()*100)%(capSet.length);
				pword[k] = capSet[k1];
				//
				var k2 = Math.floor(Math.random()*1000000)%num;
				while(k2 === k)
					k2 = Math.floor(Math.random()*1000000)%num;
				k1 = Math.floor(Math.random()*100)%(numSet.length);
				pword[k2] = numSet[k1];
				//
				var k3 = Math.floor(Math.random()*1000000)%num;
				while((k2 === k3) || (k === k3))
					k3 = Math.floor(Math.random()*1000000)%num;
				k1 = Math.floor(Math.random()*100)%(specialSet.length);
				pword[k3] = specialSet[k1];
				//
			}
			else if(capChars && specialChars)
			{
				var set = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*",")","(","}","{","]","[","?","/","\\","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
				var pword = [];
				for(var i=0;i<num;i++)
				{
					var k = Math.floor(Math.random()*100)%(set.length);
					pword.push(set[k]);
				}
				// Code for having at least one cap and special character!
				var k = Math.floor(Math.random()*1000000)%num;
				var k1 = Math.floor(Math.random()*100)%(capSet.length);
				pword[k] = capSet[k1];
				//
				var k2 = Math.floor(Math.random()*1000000)%num;
				while(k2 === k)
					k2 = Math.floor(Math.random()*1000000)%num;
				k1 = Math.floor(Math.random()*100)%(specialSet.length);
				pword[k2] = specialSet[k1];
				//
			}
			else if(numChars && specialChars)
			{
				var set = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*",")","(","}","{","]","[","?","/","\\","0","1","2","3","4","5","6","7","8","9"];
				var pword = [];
				for(var i=0;i<num;i++)
				{
					var k = Math.floor(Math.random()*100)%(set.length);
					pword.push(set[k]);
				}
				// Code for having atleast one num and special charcter
				var k = Math.floor(Math.random()*1000000)%num;
				var k1 = Math.floor(Math.random()*100)%(numSet.length);
				pword[k] = numSet[k1];
				//
				var k2 = Math.floor(Math.random()*1000000)%num;
				while(k2 === k)
					k2 = Math.floor(Math.random()*1000000)%num;
				k1 = Math.floor(Math.random()*100)%(specialSet.length);
				pword[k2] = specialSet[k1];
				//
			}
			else if(capChars && numChars)
			{
				var set = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
				var pword = [];
				for(var i=0;i<num;i++)
				{
					var k = Math.floor(Math.random()*100)%(set.length);
					pword.push(set[k]);
				}
				// Code for having at least one cap and num!
				var k = Math.floor(Math.random()*1000000)%num;
				var k1 = Math.floor(Math.random()*100)%(capSet.length);
				pword[k] = capSet[k1];
				//
				var k2 = Math.floor(Math.random()*1000000)%num;
				while(k2 === k)
					k2 = Math.floor(Math.random()*1000000)%num;
				k1 = Math.floor(Math.random()*100)%(numSet.length);
				pword[k2] = numSet[k1];
				//
			}
			else if(capChars)
			{
				var set = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
				var pword = [];
				for(var i=0;i<num;i++)
				{
					var k = Math.floor(Math.random()*100)%(set.length);
					pword.push(set[k]);
				}
				// Code for having at least one cap!
				var k = Math.floor(Math.random()*1000000)%num;
				var k1 = Math.floor(Math.random()*100)%(capSet.length);
				pword[k] = capSet[k1];
				//
			}
			else if(numChars)
			{
				var set = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
				var pword = [];
				for(var i=0;i<num;i++)
				{
					var k = Math.floor(Math.random()*100)%(set.length);
					pword.push(set[k]);
				}
				// Code for haing at least one num!
				var k = Math.floor(Math.random()*1000000)%num;
				var k1 = Math.floor(Math.random()*100)%(numSet.length);
				pword[k] = numSet[k1];
				//
			}
			else if(specialChars)
			{
				var set = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*",")","(","}","{","]","[","?","/","\\"];
				var pword = [];
				for(var i=0;i<num;i++)
				{
					var k = Math.floor(Math.random()*100)%(set.length);
					pword.push(set[k]);
				}
				// Code for having atlease one special Char!
				var k = Math.floor(Math.random()*1000000)%num;
				var k1 = Math.floor(Math.random()*100)%(specialSet.length);
				pword[k] = specialSet[k1];
				//
			}
			else
			{
				var set = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
				var pword = [];
				for(var i=0;i<num;i++)
				{
					var k = Math.floor(Math.random()*100)%(set.length);
					pword.push(set[k]);
				}
			}	
			//
			// Finally returning the password!
			var passWord = "";
			for(var i=0;i<pword.length;i++)
				passWord += pword[i];
			passWord = "Here is your password: " + "<strong>" + passWord + "</strong>";
			document.getElementById("pwordReturn").innerHTML = passWord;
		}
	}
	else
		alert("Please enter the number of letters!");
}