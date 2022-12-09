const btnConvert = document.getElementById("converter");
const spinner = document.getElementById("spinner");
const download = document.getElementById("download");

btnConvert.addEventListener("click", () => {
	download.innerHTML = "";
	spinner.style.display = "inline-block";
	const youtubeUrl = document.getElementById("youtubeUrl").value;

	fetch("https://yt-2-mp3.cyclic.app/", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			youtubeUrl,
		}),
	})
		.then((response) => response.json())
		.catch((error) => {
			spinner.style.display = "none";
			download.innerHTML = `<p style="color: red">${error.message}</p>`;
		})
		.then((response) => {
			if (response.status == "fail") {
				spinner.style.display = "none";
				download.innerHTML = `<p style="color: red">${response.message}</p>`;
			}
			spinner.style.display = "none";
			download.innerHTML = `<a href="${response.data.link}" target="_blank" class="btn btn-primary" type="button">Download</a>`;
		});
});
