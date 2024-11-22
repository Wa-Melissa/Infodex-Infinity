const DOM = createDOMReferences({
	total_rows: "#total-rows",
	corrupted_rows: "#corrupted-rows",
	corruption_rate_bar: "#corruption-rate-bar",
	corruption_rate: "#corruption-rate",
});

const corruptionRate = (sessionDbTotalCells.v == 0) ? 0 : sessionDbCorruptedCells.v / sessionDbTotalCells.v * 100;

DOM.total_rows.innerText = sessionDbTotalCells.v;

DOM.corrupted_rows.innerText = sessionDbCorruptedCells.v;

DOM.corruption_rate.innerText = Math.floor(corruptionRate * 10) / 10 + "%";

DOM.corruption_rate_bar.style.width = corruptionRate * (100 / 5) + "%";