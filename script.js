const tble = document.getElementById("sampleTable");

function insert_Row() {
    tble.innerHTML = 
		`
		<tr><td>new cell1</td> 
		<td>new cell2</td></tr> 
		` + tble.innerHTML
}
