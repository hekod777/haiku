//console.log ("Node Starting...");
//console.log (fs.readFileSync('./cmudict.txt'));
//console.log (fs);
var fs = require('fs');
var ws = require('./haiku_wordsorting');
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file)
{
	return fs.readFileSync(file).toString();
}

function formatData(data)
{
	var lines = data.toString().split("\n"),
		linSplit
		lines.forEach(function(line)
		{
			lineSplit = line.split("  ");
			//console.log("The word " + lineSplit[0] + " has this phoneme     layout: " + lineSplit[1]);	
		})	
		return lines;
		
}

var allwords = formatData(cmudictFile);

//console.log (allwords[4]);

//console.log (allwords[allwords.length-2]);

//function formatArray(arr)
//{
//	var obj={};
//	for (var j=0; j<20; j++)
//	{
//		obj[j] = [];	
//	};
//	
//	
//	var num = 0;
//	for (var i=0; i<arr.length-2; i++)
//	{
//		if (arr[i].split("  ")[1].match(/\d/g) == null)
//		{num = 0}
//		else {num = arr[i].split("  ")[1].match(/\d/g).length};
//		//console.log (arr[i].split("  ")[1].match(/\d/g||[]).length);
//		obj[num].push(arr[i].split("  ")[0]);
//	}
//	return obj;
//}

var sortedwords = ws.formatArray(allwords);


function createLine(n,obj)
{
	var line = "";
	if (Array.isArray(n))
	{
		for (var i = 0; i<n.length; i++)
		{
			line = line + obj[n[i]][Math.floor(Math.random()*obj[n[i]].length)] + " ";
		}
	}
	else
	{
		line = obj[n][Math.floor(Math.random()*obj[n].length)];	
	}
	
	return line;
}



function createHaiku(arr, obj){
	var result = "";
	for (var i = 0; i<arr.length; i++)
	{
		result = result + createLine(arr[i],obj)+"\n";
	}
	
	result = result.replace(/\(1\)/g,"");
	
	return result;
	
}


var structure = [5,7,5];


console.log ("this haiku generator can generate traditional [5,7,5] haiku \n =========================================" )
console.log (createHaiku(structure,sortedwords));
console.log ("====================================================================\n this haiku generator can also generate modern [[2,3],5,[3,4]] or any other custom formate haiku \n ===================================================================")
console.log (createHaiku ([[2,3],5,[3,4]], sortedwords));

console.log("========================================================================");





//module.exports = {
//
//createHaiku: createHaiku,	
//
//};

//createHaiku("abc");

//module.exports.createHaiku = createHaiku;

//console.log(module);

