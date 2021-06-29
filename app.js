const express = require('express');
const app = express();
const searchdata = [];


var fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended : true}));



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

app.post('/search', (req, res) => {
	
	console.log(req.body.chest);
	console.log(req.body.shoulder);
	//req.body.sleeves
	//req.body.tots
	//req.body.color
	//req.body.material
	//var s_chest = req.body.chest;
	//var s_shoulder = req.body.shoulder;
	//var s_sleeves = req.body.sleeves;
	//var s_tots = req.body.tots;
	//var s_color = req.body.color;
	searchdata.push({chest: req.body.chest, shoulder:req.body.shoulder, sleeves: req.body.sleeves, tots: req.body.tots, color: req.body.color, material: req.body.material});
	//console.log(s_chest);
	//res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	//res.write(searchdata[0].material);
	//res.end();
	var result = [{name: "TESTNAME", brand: "TESTBRAND", image: "DUMMYIMAGE",data:searchdata[0]}];
	res.json(result);
	//DB 구조에 따라 다소 변경 가능
	//데이터베이스 검색 및 반환 예정

})




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
 //이미지 반환 stub-code
 
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
 
app.listen(80, () => {
  console.log('WeeklyPick Listening on Port 80');
});