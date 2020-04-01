var http=require('http');
var fs=require('fs');
http.createServer(
	function(request,response)
	{
		var url=request.url;
		var image='images/H';
		var path = require('path');
		console.log('Requested: '+url);
		switch(url)
		{
			case '/':
				getfilecontent(response,path.join(__dirname,'Hesperidium.html'),'text/html');
				break;
			case '/css/styling.css':
				getfilecontent(response,path.join(__dirname,'css','styling.css'),'text/css');
				break;
			case '/'+image+'esperidium'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'esperidium'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'1'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'1'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'2'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'2'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'3'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'3'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'4'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'4'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'5'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'5'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'6'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'6'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'7'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'7'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'8'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'8'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'9'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'9'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'10'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'10'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'11'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'11'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'12'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'12'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'13'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'13'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'14'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'14'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'15'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'15'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'16'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'16'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'17'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'17'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'18'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'18'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'19'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'19'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'20'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'20'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'21'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'21'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'22'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'22'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'23'+'.jpg':
				getfilecontent(response,path.join(__dirname,image+'23'+'.jpg'),'image/jpg');
				break;
			default:
				response.writeHead(404,{'Content-Type':'text/plain'});
				response.end('404-Page not found');
		}
	}
).listen(5000);
console.log('Directory: '+__dirname);
console.log('Website is up and running at: http://localhost:5000/');
function getfilecontent(response,filepath,ContentType)
{
	fs.readFile(filepath,function(error,data)
	{
		if(error)
		{
			response.writeHead(500,{'Content-Type':'text/plain'});
			response.end('500-Internal Server error');
		}
		if(data)
		{
			response.writeHead(200,{'Content-Type':ContentType});
			response.end(data);
		}
	});
}
