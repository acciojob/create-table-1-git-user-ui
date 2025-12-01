const tble = document.getElementById("sampleTable");

function insert_Row() {
    // Insert new row at the top (position 0)
    const newRow = tble.insertRow(0);

    // Create two new cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set EXACT text required by the test
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
