// const invoices = [
//     { id: 1, status: "draft", amount: 100 },
//     { id: 2, status: "pending", amount: 200 },
//     { id: 3, status: "paid", amount: 300 },
//     { id: 4, status: "draft", amount: 150 },
//     { id: 5, status: "pending", amount: 250 },
//     { id: 6, status: "paid", amount: 350 },
// ];
// Function to generate a random invoice
function generateRandomInvoice() {
    const statuses = ["draft", "pending", "paid"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const randomAmount = Math.floor(Math.random() * 500) + 50; // Random amount between 50 and 550

    return {
        id: Math.floor(Math.random() * 1000) + 1, // Random ID between 1 and 1000
        status: randomStatus,
        amount: randomAmount
    };
}

// Generate a random list of invoices
const numInvoices = 10; // You can adjust the number of invoices
const invoices = [];

for (let i = 0; i < numInvoices; i++) {
    invoices.push(generateRandomInvoice());
}

const statusFilter = document.getElementById("statusFilter");
const invoiceList = document.getElementById("invoiceList");

function filterInvoices(status) {
    invoiceList.innerHTML = "";
    const filteredInvoices = status === "all" ? invoices : invoices.filter(inv => inv.status === status);

    if (filteredInvoices.length === 0) {
        invoiceList.innerHTML = "<p>No invoices found.</p>";
    } else {
        filteredInvoices.forEach(inv => {
            const invoiceDiv = document.createElement("div");
            invoiceDiv.className = `invoice ${inv.status}`;
            invoiceDiv.innerHTML = `<p>Invoice #${inv.id}</p><p>Status: ${inv.status}</p><p>Amount: $${inv.amount}</p>`;
            invoiceList.appendChild(invoiceDiv);
        });
    }
}

statusFilter.addEventListener("change", () => {
    filterInvoices(statusFilter.value);
});

// Initial filter on page load
filterInvoices(statusFilter.value);
