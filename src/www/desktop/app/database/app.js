const DOM = {
  total_rows: document.getElementById("total-rows"),
  corrupted_rows: document.getElementById("corrupted-rows"),
  corruption_rate_bar: document.getElementById("corruption-rate-bar"),
  corruption_rate: document.getElementById("corruption-rate"),
};
Object.freeze(DOM);

const corruptionRate = (sessionDbTotalRows.v == 0) ? 0 : sessionDbCorruptedRows.v / sessionDbTotalRows.v * 100;

DOM.total_rows.innerText = sessionDbTotalRows.v;

DOM.corrupted_rows.innerText = sessionDbCorruptedRows.v;

DOM.corruption_rate.innerText = corruptionRate;

DOM.corruption_rate_bar.style.width = corruptionRate + "%";