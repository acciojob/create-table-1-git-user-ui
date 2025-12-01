const tble = document.getElementById("sampleTable");

function insert_Row() {
    tble.innerHTML = 
		`
		<tr><td>New Cell1</td> 
		<td>New Cell2</td></tr> 
		` + tble.innerHTML
}
