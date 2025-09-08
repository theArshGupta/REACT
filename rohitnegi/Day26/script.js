
const $ = sel => document.querySelector(sel);

// --- Astrology Data ---
const SIGNS = [
  {name:"Aries",       start:[3,21], end:[4,19], element:"Fire", modality:"Cardinal", planet:"Mars", color:"Red", number:9, traits:["Bold","Energetic","Direct","Competitive"]},
  {name:"Taurus",      start:[4,20], end:[5,20], element:"Earth", modality:"Fixed",    planet:"Venus", color:"Green", number:6, traits:["Patient","Grounded","Loyal","Comfort‑loving"]},
  {name:"Gemini",      start:[5,21], end:[6,20], element:"Air",  modality:"Mutable",  planet:"Mercury", color:"Yellow", number:5, traits:["Curious","Witty","Adaptable","Chatty"]},
  {name:"Cancer",      start:[6,21], end:[7,22], element:"Water", modality:"Cardinal", planet:"Moon", color:"Silver", number:2, traits:["Caring","Intuitive","Protective","Nurturing"]},
  {name:"Leo",         start:[7,23], end:[8,22], element:"Fire",  modality:"Fixed",    planet:"Sun", color:"Gold", number:1, traits:["Radiant","Confident","Creative","Warm"]},
  {name:"Virgo",       start:[8,23], end:[9,22], element:"Earth", modality:"Mutable",  planet:"Mercury", color:"Olive", number:5, traits:["Precise","Helpful","Humble","Analytical"]},
  {name:"Libra",       start:[9,23], end:[10,22],element:"Air",  modality:"Cardinal", planet:"Venus", color:"Pink", number:6, traits:["Charming","Fair","Diplomatic","Aesthetic"]},
  {name:"Scorpio",     start:[10,23],end:[11,21],element:"Water",modality:"Fixed",    planet:"Pluto · Mars", color:"Burgundy", number:9, traits:["Intense","Magnetic","Private","Determined"]},
  {name:"Sagittarius", start:[11,22],end:[12,21],element:"Fire", modality:"Mutable",  planet:"Jupiter", color:"Purple", number:3, traits:["Adventurous","Philosophical","Optimistic","Honest"]},
  {name:"Capricorn",   start:[12,22],end:[1,19], element:"Earth",modality:"Cardinal", planet:"Saturn", color:"Charcoal", number:8, traits:["Ambitious","Responsible","Stoic","Strategic"]},
  {name:"Aquarius",    start:[1,20], end:[2,18], element:"Air",  modality:"Fixed",    planet:"Uranus · Saturn", color:"Electric Blue", number:4, traits:["Original","Humanitarian","Independent","Quirky"]},
  {name:"Pisces",      start:[2,19], end:[3,20], element:"Water", modality:"Mutable",  planet:"Neptune · Jupiter", color:"Sea Green", number:7, traits:["Empathic","Dreamy","Artistic","Compassionate"]},
];

const CHINESE = [
  {a:"Rat",      traits:["Clever","Resourceful","Quick‑witted"]},
  {a:"Ox",       traits:["Reliable","Patient","Strong"]},
  {a:"Tiger",    traits:["Brave","Confident","Competitive"]},
  {a:"Rabbit",   traits:["Gentle","Elegant","Responsible"]},
  {a:"Dragon",   traits:["Charismatic","Ambitious","Energetic"]},
  {a:"Snake",    traits:["Wise","Mysterious","Strategic"]},
  {a:"Horse",    traits:["Energetic","Independent","Enthusiastic"]},
  {a:"Goat",     traits:["Calm","Artistic","Sympathetic"]},
  {a:"Monkey",   traits:["Inventive","Curious","Playful"]},
  {a:"Rooster",  traits:["Observant","Hard‑working","Candid"]},
  {a:"Dog",      traits:["Loyal","Honest","Kind"]},
  {a:"Pig",      traits:["Generous","Compassionate","Diligent"]},
];

const LIFE_MEANINGS = {
  1:"Leadership, independence, initiative.",
  2:"Partnership, cooperation, diplomacy.",
  3:"Creativity, expression, optimism.",
  4:"Stability, structure, discipline.",
  5:"Change, freedom, versatility.",
  6:"Responsibility, care, harmony.",
  7:"Analysis, spirituality, wisdom.",
  8:"Power, ambition, material mastery.",
  9:"Compassion, idealism, completion.",
  11:"Intuition, inspiration (master).",
  22:"Master builder, large‑scale vision (master).",
  33:"Compassionate teacher (master)."
}

function parseDate(value){
  const d = new Date(value);
  if(Number.isNaN(d.getTime())) return null;
  return d;
}

function zodiacFor(month, day){
  // month: 1-12
  for(const s of SIGNS){
    const [sm, sd] = s.start;
    const [em, ed] = s.end;
    if(sm <= em){
      if((month==sm && day>=sd) || (month==em && day<=ed) || (month>sm && month<em)) return s;
    } else { // wraps new year (Capricorn)
      if((month==sm && day>=sd) || (month==em && day<=ed) || (month>sm || month<em)) return s;
    }
  }
  return null;
}

function chineseZodiac(year){
  // 1900 was Rat; use cycle of 12
  const animals = CHINESE;
  const idx = (year - 1900) % 12; // can be negative in ancient years, but fine
  return animals[(idx+12)%12];
}

function lifePathNumber(date){
  // Reduce YYYYMMDD to single digit, preserving 11/22/33
  const digits = date.getFullYear().toString() + (date.getMonth()+1).toString().padStart(2,'0') + date.getDate().toString().padStart(2,'0');
  const sumDigits = s => s.split('').reduce((a,b)=>a+Number(b),0);
  let n = sumDigits(digits).toString();
  // continue reducing
  while(true){
    const val = Number(n);
    if([11,22,33].includes(val) || val < 10) return val;
    n = sumDigits(n.toString()).toString();
  }
}

function weekdayName(date){
  return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][date.getDay()];
}

function ageFrom(date){
  const now = new Date();
  let years = now.getFullYear() - date.getFullYear();
  const m = now.getMonth() - date.getMonth();
  if(m < 0 || (m === 0 && now.getDate() < date.getDate())) years--;
  return years;
}

function makeBlurb(name, sign){
  const you = name ? name.trim() : "You";
  const t = sign.traits.slice(0,2).join(" & ").toLowerCase();
  return `${you} carry ${sign.element.toLowerCase()} energy with a ${sign.modality.toLowerCase()} drive — ${t}, guided by ${sign.planet}.`;
}

function setChips(el, arr){
  el.innerHTML = arr.map(s=>`<span class="chip">${s}</span>`).join("");
}

function saveToLocal() {
  const data = {
    name: $('#name').value,
    date: $('#date').value,
    time: $('#time').value,
    place: $('#place').value,
  };
  localStorage.setItem('starryskope:last', JSON.stringify(data));
}

function loadFromLocal(){
  try{
    const raw = localStorage.getItem('starryskope:last');
    if(!raw) return;
    const d = JSON.parse(raw);
    if(d.name) $('#name').value = d.name;
    if(d.date) $('#date').value = d.date;
    if(d.time) $('#time').value = d.time;
    if(d.place) $('#place').value = d.place;
  }catch{ /* ignore */ }
}

function shareLink(){
  const params = new URLSearchParams({
    n: $('#name').value || '',
    d: $('#date').value || '',
    t: $('#time').value || '',
    p: $('#place').value || '',
  });
  return location.origin + location.pathname + '?' + params.toString();
}

function readParams(){
  const q = new URLSearchParams(location.search);
  if(q.get('d')) $('#date').value = q.get('d');
  if(q.get('n')) $('#name').value = q.get('n');
  if(q.get('t')) $('#time').value = q.get('t');
  if(q.get('p')) $('#place').value = q.get('p');
}

function compute(){
  const name = $('#name').value.trim();
  const dateStr = $('#date').value;
  const d = parseDate(dateStr);
  if(!d){ alert('Please enter a valid date of birth.'); return; }
  const m = d.getMonth()+1, day = d.getDate(), y = d.getFullYear();
  const sign = zodiacFor(m, day);
  const cz = chineseZodiac(y);
  const lp = lifePathNumber(d);
  const weekday = weekdayName(d);
  const age = ageFrom(d);

  // UI binds
  $('#resultsWrap').style.display = 'block';
  $('#greet').textContent = name ? `${name}'s cosmic snapshot` : 'Your cosmic snapshot';
  $('#summary').textContent = `${d.toLocaleDateString()} • ${weekday}`;

  $('#sunSign').textContent = sign.name;
  $('#sunDate').textContent = `${String(m).padStart(2,'0')}/${String(day).padStart(2,'0')} · ${sign.element} · ${sign.modality}`;
  setChips($('#sunTraits'), sign.traits);
  $('#elementModality').textContent = `Element: ${sign.element} • Modality: ${sign.modality}`;

  $('#planet').textContent = sign.planet;
  $('#lucky').textContent = `Lucky color: ${sign.color} • Lucky number: ${sign.number}`;

  $('#cZodiac').textContent = cz.a;
  setChips($('#cTraits'), cz.traits);

  $('#lifePath').textContent = lp;
  $('#lifeDesc').textContent = LIFE_MEANINGS[lp] || '—';

  $('#weekday').textContent = weekday;
  $('#age').textContent = `Age: ${age}`;

  $('#blurb').textContent = makeBlurb(name, sign);

  // Nice little focus
  $('#resultsWrap').scrollIntoView({behavior:'smooth', block:'start'});
}

// --- Events ---
document.getElementById('astroForm').addEventListener('submit', e=>{
  e.preventDefault();
  compute();
});
document.getElementById('resetBtn').addEventListener('click', ()=>{
  document.getElementById('astroForm').reset();
  $('#resultsWrap').style.display = 'none';
  history.replaceState(null, '', location.pathname);
});
document.getElementById('copyBtn').addEventListener('click', async ()=>{
  const link = shareLink();
  try{
    await navigator.clipboard.writeText(link);
    const btn = $('#copyBtn');
    btn.textContent = 'Link copied!';
    setTimeout(()=>btn.textContent='Copy share link',1200);
  }catch{
    alert(link);
  }
});
document.getElementById('saveBtn').addEventListener('click', ()=>{
  saveToLocal();
  const btn = $('#saveBtn');
  btn.textContent = 'Saved ✓';
  setTimeout(()=>btn.textContent='Save',1000)
});

// On load
document.getElementById('year').textContent = new Date().getFullYear();
readParams();
loadFromLocal();

// If link had a date, auto compute
if($('#date').value){
  // Delay to allow initial paint
  setTimeout(compute, 100);
}
 