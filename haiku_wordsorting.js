function formatArray(arr)
{
	var obj={};
	for (var j=0; j<20; j++)
	{
		obj[j] = [];	
	};
	
	
	var num = 0;
	for (var i=0; i<arr.length-2; i++)
	{
		if (arr[i].split("  ")[1].match(/\d/g) == null)
		{num = 0}
		else {num = arr[i].split("  ")[1].match(/\d/g).length};
		//console.log (arr[i].split("  ")[1].match(/\d/g||[]).length);
		obj[num].push(arr[i].split("  ")[0]);
	}
	return obj;
}

module.exports = {formatArray: formatArray};