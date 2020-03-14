var http=require('http');
var fs=require('fs');
http.createServer(
	function(request,response)
	{
		var url=request.url;
		var image='images/H';
		switch(url)
		{
			case '/':
				getfilecontent(response,'Hesperidium.html','text/html');
				break;
			case '/css/styling.css':
				getfilecontent(response,'css/styling.css','text/css');
				break;
			case '/'+image+'esperidium'+'.jpg':
				getfilecontent(response,image+'esperidium'+'.jpg','image/jpg');
				break;
			case '/'+image+'1'+'.jpg':
				getfilecontent(response,image+'1'+'.jpg','image/jpg');
				break;
			case '/'+image+'2'+'.jpg':
				getfilecontent(response,image+'2'+'.jpg','image/jpg');
				break;
			case '/'+image+'3'+'.jpg':
				getfilecontent(response,image+'3'+'.jpg','image/jpg');
				break;
			case '/'+image+'4'+'.jpg':
				getfilecontent(response,image+'4'+'.jpg','image/jpg');
				break;
			case '/'+image+'5'+'.jpg':
				getfilecontent(response,image+'5'+'.jpg','image/jpg');
				break;
			case '/'+image+'6'+'.jpg':
				getfilecontent(response,image+'6'+'.jpg','image/jpg');
				break;
			case '/'+image+'7'+'.jpg':
				getfilecontent(response,image+'7'+'.jpg','image/jpg');
				break;
			case '/'+image+'8'+'.jpg':
				getfilecontent(response,image+'8'+'.jpg','image/jpg');
				break;
			case '/'+image+'9'+'.jpg':
				getfilecontent(response,image+'9'+'.jpg','image/jpg');
				break;
			case '/'+image+'10'+'.jpg':
				getfilecontent(response,image+'10'+'.jpg','image/jpg');
				break;
			case '/'+image+'11'+'.jpg':
				getfilecontent(response,image+'11'+'.jpg','image/jpg');
				break;
			case '/'+image+'12'+'.jpg':
				getfilecontent(response,image+'12'+'.jpg','image/jpg');
				break;
			case '/'+image+'13'+'.jpg':
				getfilecontent(response,image+'13'+'.jpg','image/jpg');
				break;
			case '/'+image+'14'+'.jpg':
				getfilecontent(response,image+'14'+'.jpg','image/jpg');
				break;
			case '/'+image+'15'+'.jpg':
				getfilecontent(response,image+'15'+'.jpg','image/jpg');
				break;
			case '/'+image+'16'+'.jpg':
				getfilecontent(response,image+'16'+'.jpg','image/jpg');
				break;
			case '/'+image+'17'+'.jpg':
				getfilecontent(response,image+'17'+'.jpg','image/jpg');
				break;
			case '/'+image+'18'+'.jpg':
				getfilecontent(response,image+'18'+'.jpg','image/jpg');
				break;
			case '/'+image+'19'+'.jpg':
				getfilecontent(response,image+'19'+'.jpg','image/jpg');
				break;
			case '/'+image+'20'+'.jpg':
				getfilecontent(response,image+'20'+'.jpg','image/jpg');
				break;
			case '/'+image+'21'+'.jpg':
				getfilecontent(response,image+'21'+'.jpg','image/jpg');
				break;
			case '/'+image+'22'+'.jpg':
				getfilecontent(response,image+'22'+'.jpg','image/jpg');
				break;
			case '/'+image+'23'+'.jpg':
				getfilecontent(response,image+'23'+'.jpg','image/jpg');
				break;
			default:
				response.writeHead(404,{'Content-Type':'text/plain'});
				response.end('404-Page not found');
		}
	}
).listen(4444);
console.log('server running at http://localhost:4444');
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