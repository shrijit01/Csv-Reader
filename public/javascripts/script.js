// Script for search input 
document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector("table");
    const tbody = table.querySelector("tbody");
    const searchInput = document.querySelector("#searchInput");

    // Defined a function to filter and display matching rows
    function filterTable() {
        const searchTerm = searchInput.value.toLowerCase();
        const rows = tbody.querySelectorAll("tr");

        rows.forEach(function (row) {
            const rowData = row.textContent.toLowerCase();
            if (rowData.includes(searchTerm)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }

    // Attached an event listener to the search input
    searchInput.addEventListener("input", filterTable);
});

