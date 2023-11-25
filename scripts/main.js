window.onload = () => {
	const url = window.location.href;

	fetch(url, {"method":"GET"})
	.then((response) => {
		return response.text();
	})
	.then((html) => {
		const doc = new DOMParser().parseFromString(html, "text/html");
		var code = doc.getElementById("editor").innerHTML;
		
		const decodedText = document.createElement('div');
		decodedText.innerHTML = code;
		code = decodedText.textContent;
				
		var d = document.querySelector(".exercise-compiler");
		var btn = document.createElement('button');
		btn.innerText = 'העתק קוד';
		
		btn.addEventListener("click", () => {
			navigator.clipboard.writeText(code);
		});
		
		d.parentElement.parentElement.parentElement.parentElement.parentElement.appendChild(btn);
	});
};