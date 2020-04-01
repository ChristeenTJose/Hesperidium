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
				getfilecontent(response,path.join('Hesperidium.html'),'text/html');
				break;
			case '/css/styling.css':
				getfilecontent(response,path.join('css','styling.css'),'text/css');
				break;
			case '/'+image+'esperidium'+'.jpg':
				getfilecontent(response,path.join(image+'esperidium'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'1'+'.jpg':
				getfilecontent(response,path.join(image+'1'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'2'+'.jpg':
				getfilecontent(response,path.join(image+'2'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'3'+'.jpg':
				getfilecontent(response,path.join(image+'3'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'4'+'.jpg':
				getfilecontent(response,path.join(image+'4'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'5'+'.jpg':
				getfilecontent(response,path.join(image+'5'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'6'+'.jpg':
				getfilecontent(response,path.join(image+'6'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'7'+'.jpg':
				getfilecontent(response,path.join(image+'7'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'8'+'.jpg':
				getfilecontent(response,path.join(image+'8'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'9'+'.jpg':
				getfilecontent(response,path.join(image+'9'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'10'+'.jpg':
				getfilecontent(response,path.join(image+'10'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'11'+'.jpg':
				getfilecontent(response,path.join(image+'11'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'12'+'.jpg':
				getfilecontent(response,path.join(image+'12'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'13'+'.jpg':
				getfilecontent(response,path.join(image+'13'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'14'+'.jpg':
				getfilecontent(response,path.join(image+'14'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'15'+'.jpg':
				getfilecontent(response,path.join(image+'15'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'16'+'.jpg':
				getfilecontent(response,path.join(image+'16'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'17'+'.jpg':
				getfilecontent(response,path.join(image+'17'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'18'+'.jpg':
				getfilecontent(response,path.join(image+'18'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'19'+'.jpg':
				getfilecontent(response,path.join(image+'19'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'20'+'.jpg':
				getfilecontent(response,path.join(image+'20'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'21'+'.jpg':
				getfilecontent(response,path.join(image+'21'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'22'+'.jpg':
				getfilecontent(response,path.join(image+'22'+'.jpg'),'image/jpg');
				break;
			case '/'+image+'23'+'.jpg':
				getfilecontent(response,path.join(image+'23'+'.jpg'),'image/jpg');
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
