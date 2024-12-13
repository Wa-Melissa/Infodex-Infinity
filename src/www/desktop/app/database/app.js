const DOM = createDOMReferences({
	total_rows: "#total-rows",
	corrupted_rows: "#corrupted-rows",
	corruption_rate_bar: "#corruption-rate-bar",
	corruption_rate: "#corruption-rate",
	score: "#score",
	satisfaction_rate: "#satisfaction-rate",
	satisfaction_rate_bar: "#satisfaction-rate-bar",
	skill_rate: "#skill-rate",
	skill_rate_bar: "#skill-rate-bar"
});
broadcastUpdateAppName("Miracle DB - Statistiques");	

//Calculate database corruption rate
const corruptionRate = (sessionDbTotalCells.v == 0) ? 0 : sessionDbCorruptedCells.v / sessionDbTotalCells.v * 100;

//Fill database stats
DOM.total_rows.innerText = sessionDbTotalCells.v;
DOM.corrupted_rows.innerText = sessionDbCorruptedCells.v;
DOM.corruption_rate.innerText = Math.floor(corruptionRate * 10) / 10 + "%";
DOM.corruption_rate_bar.style.width = corruptionRate * (100 / 5) + "%";

//Fill user stats
DOM.satisfaction_rate.innerText = sessionSatisfaction.v + "%";
DOM.satisfaction_rate_bar.style.width = sessionSatisfaction.v + "%";
DOM.skill_rate.innerText = sessionSkill.v + "%";
DOM.skill_rate_bar.style.width = sessionSkill.v + "%";
