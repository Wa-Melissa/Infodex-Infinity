const DOM = createDOMReferences({
  total_rows: "#total-rows",
  corrupted_rows: "#corrupted-rows",
  corruption_rate_bar: "#corruption-rate-bar",
  corruption_rate: "#corruption-rate",
});

const corruptionRate = (sessionDbTotalRows.v == 0) ? 0 : sessionDbCorruptedRows.v / sessionDbTotalRows.v * 100;

DOM.total_rows.innerText = sessionDbTotalRows.v;

DOM.corrupted_rows.innerText = sessionDbCorruptedRows.v;

DOM.corruption_rate.innerText = corruptionRate;

DOM.corruption_rate_bar.style.width = corruptionRate + "%";