// Static weather samples
const weatherSamples = [
  { location: "Bengaluru, IN", tempC: 30, condition: "Sunny", humidity: 42, windKmh: 8 },
  { location: "Mumbai, IN", tempC: 28, condition: "Cloudy", humidity: 68, windKmh: 12 },
  { location: "Shimla, IN", tempC: 6,  condition: "Snow", humidity: 72, windKmh: 6 },
  { location: "Kolkata, IN", tempC: 34, condition: "Rainy", humidity: 88, windKmh: 22 },
  { location: "Chandigarh, IN", tempC: 21, condition: "Storm", humidity: 60, windKmh: 38 }
];

// Icon & background mapping
const visualMap = {
  Sunny: { icon: "☀️", bg: "var(--sunny)" },
  Cloudy:{ icon: "☁️", bg: "var(--cloudy)" },
  Rainy: { icon: "🌧️", bg: "var(--rainy)" },
  Snow:  { icon: "❄️", bg: "var(--snow)" },
  Storm: { icon: "⛈️", bg: "var(--storm)" },
  Default:{ icon: "🌤️", bg: "var(--default-bg)" }
};

// DOM references
const el = {
  bg: document.getElementById("bg"),
  card: document.getElementById("card"),
  icon: document.getElementById("icon"),
  location: document.getElementById("location"),
  temp: document.getElementById("temp"),
  condLabel: document.getElementById("condLabel"),
  humidity: document.getElementById("humidity"),
  wind: document.getElementById("wind"),
  subtitle: document.getElementById("subtitle"),
  refresh: document.getElementById("refresh"),
  random: document.getElementById("randomize"),
  note: document.getElementById("note")
};

let currentIndex = 0;

// Display a weather record
function render(i) {
  const s = weatherSamples[i];
  el.location.textContent = s.location;
  el.temp.textContent = `${s.tempC}°C`;
  el.condLabel.textContent = s.condition;
  el.humidity.textContent = `💧 ${s.humidity}%`;
  el.wind.textContent = `🌬️ ${s.windKmh} km/h`;
  el.subtitle.textContent = `Static Weather — sample #${i+1}`;

  const v = visualMap[s.condition] || visualMap.Default;
  el.icon.textContent = v.icon;
  el.bg.style.background = v.bg;

  // text color adjustment for dark backgrounds
  if (s.condition === "Storm" || s.condition === "Rainy") {
    el.card.style.color = "#fff";
    el.note.style.color = "#fff";
  } else {
    el.card.style.color = "#082032";
    el.note.style.color = "#082032";
  }
}

// Buttons
el.refresh.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % weatherSamples.length;
  render(currentIndex);
});
el.random.addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * weatherSamples.length);
  render(currentIndex);
});

// Initial display
render(0);
