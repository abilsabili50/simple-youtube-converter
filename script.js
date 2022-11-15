const btnConvert = document.getElementById("converter");
const spinner = document.getElementById("spinner");
const download = document.getElementById("download");

btnConvert.addEventListener("click", () => {
	download.innerHTML = "";
	spinner.style.display = "inline-block";
	const youtubeUrl = document.getElementById("youtubeUrl").value;

	fetch("https://youtube-mp3-converter-api.herokuapp.com", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			youtubeUrl,
		}),
	})
		.then((response) => response.json())
		.then((response) => {
			spinner.style.display = "none";
			download.innerHTML = `<a href="${response.data.link}" target="_blank" class="btn btn-primary" type="button">Download</a>`;
		})
		.catch((error) => {
			spinner.style.display = "none";
			download.innerHTML = `<p style="color: red">${error.message}</p>`;
		});
});
