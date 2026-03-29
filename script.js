function analyzeNews() {
  const text = document.getElementById("newsInput").value.toLowerCase();
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");
  const meterFill = document.getElementById("meterFill");
  const confidenceText = document.getElementById("confidenceText");

  if (text.trim() === "") {
    alert("Please enter some news text!");
    return;
  }

  const fakeWords = [
    "shocking", "secret", "exposed", "click here",
    "you won't believe", "viral", "hoax", "rumor"
  ];

  const realWords = [
    "report", "confirmed", "official",
    "government", "data", "research", "study"
  ];

  let fakeScore = 0;
  let realScore = 0;

  fakeWords.forEach(word => {
    if (text.includes(word)) fakeScore++;
  });

  realWords.forEach(word => {
    if (text.includes(word)) realScore++;
  });

  let result = "";
  let confidence = 0;

  if (fakeScore > realScore) {
    result = "⚠️ Likely Fake News";
    confidence = Math.min(90, 50 + fakeScore * 10);
    meterFill.className = "fill fake";
  } else {
    result = "✅ Likely Real News";
    confidence = Math.min(95, 50 + realScore * 10);
    meterFill.className = "fill real";
  }

  meterFill.style.width = confidence + "%";
  resultText.innerText = result;
  confidenceText.innerText = "Confidence: " + confidence + "%";

  resultBox.style.display = "block";
}
