const tble = document.getElementById("sampleTable");
let i = tble.rows.length +1;  // start counting from existing rows + 1

function insert_Row() {

    // Create a new row
    const newRow = tble.insertRow();

    // Create two new cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set cell content
    cell1.textContent = `Row${i} cell1`;
    cell2.textContent = `Row${i} cell2`;

    // Increase counter for next insertion
    i++;
}
