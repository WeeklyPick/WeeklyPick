const express = require('express');
const app = express();
var fs = require('fs');
let sizedata = [
	{
		XS: {
			shoulder: 48,
			chest: 49,
			sleeves: 22		
		},
		S: {
			shoulder: 52,
			chest: 52.5,
			sleeves: 24	
		},
		M: {
			shoulder: 53.5,
			chest: 55,
			sleeves: 25	
		},
		L: {
			shoulder: 55,
			chest: 57.5,
			sleeves: 26	
		},
		XL: {
			shoulder: 56.5,
			chest: 60,
			sleeves: 27	
		},
		XXL: {
			shoulder: 58,
			chest: 62.5,
			sleeves: 28	
		}
	}

];


let clothdata = [
  {
	brand: "testbrand",
    name: "맞춤형 옷1",
	image: "imagetest",
	shoulder: 47,
	chest: 108,
	sleeves: 65,
	tots: 73,	
	color: "black",
	material: "면 100%",
	number: 12245

  },
  {
	brand: "testbrand",
    name: "맞춤형 옷1",
	image: "imagetest",
	shoulder: 47,
	chest: 108,
	sleeves: 65,
	tots: 73,	
	color: "black",
	material: "면 100%",
	number: 12245

  },
  {
	brand: "testbrand",
    name: "맞춤형 옷1",
	image: "imagetest",
	shoulder: 47,
	chest: 108,
	sleeves: 65,
	tots: 73,	
	color: "black",
	material: "면 100%",
	number: 12245


  }
]
 
 app.get('/cloth', (req, res) => {
   console.log('옷 정보 조회');
   res.json(clothdata)
 });

 app.get('/size', (req, res) => {
	 console.log('SIZE DATA 조회');
	 res.json(sizedata)
 });

 app.get('/image', (req, res) => {
	var filename="./imgdata/블랙와이드진.jpg";
	fs.readFile(filename, function(err, data)
	{
		res.writeHead(200, {"Context-Type": "image/jpg"});
		res.write(data);
		res.end();
	}
	);

 });
 
 app.post('/post', (req, res) => {
   console.log('who get in here post /users');
   var inputData;
 
   req.on('data', (data) => {
     inputData = JSON.parse(data);
   });
 
   req.on('end', () => {
     console.log("user_id : "+inputData.user_id + " , name : "+inputData.name);
   });
 
   res.write("OK!");
   res.end();
 });
 
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});