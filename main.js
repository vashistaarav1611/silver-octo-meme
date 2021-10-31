function setup() {
	canvas = createCanvas(400, 400);
	canvas.center();
	video = createCapture(VIDEO);
	video.hide();
	classifier = ml5.imageClassifier("MobileNet", modelFired);
}

function modelFired() {
	console.log("Starting...");
}

function draw() {
	image(video, 0, 0, 400, 400);
	classifier.classify(video, gotres);
}

function gotres(error,result) {
	if (error) {
		console.error("ERROR!!!!");
	} else {
		console.log(result);
		document.getElementById("res1").innerHTML = result[0].label;
		document.getElementById("res2").innerHTML = result[1].label;
		document.getElementById("res3").innerHTML = result[2].label;
		document.getElementById("acc1").innerHTML = result[0].confidence.toFixed(2);
		document.getElementById("acc2").innerHTML = result[1].confidence.toFixed(2);
		document.getElementById("acc3").innerHTML = result[2].confidence.toFixed(2);
	}
}
// link: https://storage.googleapis.com/tm-model/9Lf86XFIm/model.json MobileNet
