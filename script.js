const raw = [
  ["Ghajini","Ghajini",7.6,7.4,61.8,194.6,2005,2008],
  ["Pokkiri","Wanted",7.6,6.7,86.6,93.2,2007,2008],
  ["Bodyguard","Bodyguard",6.8,4.8,60.7,234.4,2010,2011],
  ["Ready","Ready",7.2,5.0,22.8,183.4,2008,2011],
  ["Singam","Singham",7.0,6.8,60.7,141.3,2010,2011],
  ["Vikramarkudu","Rowdy Rathore",7.7,5.8,63.6,198.5,2006,2012],
  ["Maryada Rammana","Son Of Sardaar",7.5,4.4,34.8,135.1,2010,2012],
  ["Kick","Kick",7.9,5.9,32.4,351.8,2009,2014],
  ["Stalin","Jai Ho",6.1,5.1,60.2,186.2,2006,2014],
  ["Thuppakki","Holiday",8.1,7.2,138.9,176.4,2012,2014],
  ["Drishyam","Drishyam",8.4,8.2,83.3,110.4,2013,2015],
  ["Joker","Toilet: Ek Prem Katha",8.3,7.2,5.7,200.1,2016,2017],
  ["Temper","Simmba",7.4,5.5,87.0,391.7,2015,2018],
  ["Kshanam","Baaghi 2",8.1,4.7,12.9,251.1,2016,2018],
  ["Sairat","Dhadak",8.3,4.7,117.9,111.8,2016,2018],
  ["Arjun Reddy","Kabir Singh",7.9,7.0,54.6,373.5,2017,2019],
  ["Theri","Baby John",7.4,5.0,213.1,36,2016,2024],
  ["Kaithi","Bholaa",8.4,5.8,103.5,90,2019,2023],
  ["Ala Vaikunthapurramuloo","Shehzada",7.3,4.5,289.2,37,2020,2023],
  ["Driving License","Selfiee",7.2,5.7,33.6,17,2019,2023],
  ["Jersey","Jersey",8.5,7.3,36.9,24.4,2019,2022],
  ["Vikram Vedha","Vikram Vedha",8.2,7.1,72.8,78,2017,2022],
  ["Drishyam 2","Drishyam 2",8.4,8.2,null,233.5,2021,2022],
  ["HIT: The First Case","HIT: The First Case",7.6,6.8,7.0,11.3,2020,2022],
  ["Thadam","Gumraah",8.1,6.5,26.9,9.8,2019,2023],
  ["Helen","Mili",7.7,6.7,2.4,2.24,2019,2022],
  ["Jigarthanda","Bachchhan Paandey",8.2,5.0,0.0,59,2014,2022],
  ["Alaipayuthey","Saathiya",8.3,6.8,16.3,24.7,2000,2002],
];

const data = raw.map(r => ({
  orig:r[0], remake:r[1], ro:r[2], rr:r[3],
  ratingOrig:r[2], ratingRemake:r[3],
  origRev:r[4], remakeRev:r[5], oy:r[6], ry:r[7]
}));

const C_GREEN="#2e8b57", C_RED="#c0392b", C_GREY="#bbb";
const charts = {};

const P = "posters-web/";
const POSTER_IMGS = {
  "Ghajini":                    { origUrl:P+"ghajini-original.jpg",      remakeUrl:P+"ghajini-remake.jpg" },
  "Pokkiri":                    { origUrl:P+"pokkiri.jpg",                remakeUrl:P+"wanted.jpg" },
  "Bodyguard":                  { origUrl:P+"bodyguard-original.jpg",     remakeUrl:P+"bodyguard-remake.jpg" },
  "Ready":                      { origUrl:P+"ready-original.jpg",         remakeUrl:P+"ready-remake.jpg" },
  "Singam":                     { origUrl:P+"singam.jpg",                 remakeUrl:P+"singham.jpg" },
  "Vikramarkudu":               { origUrl:P+"vikramarkudu.jpg",           remakeUrl:P+"rowdyrathore.jpg" },
  "Maryada Rammana":            { origUrl:P+"maryadaraman.jpg",           remakeUrl:P+"sonofsardaar.jpg" },
  "Kick":                       { origUrl:P+"kick-original.jpg",          remakeUrl:P+"kick-remake.jpg" },
  "Stalin":                     { origUrl:P+"stalin.jpg",                 remakeUrl:P+"jaiho.jpg" },
  "Thuppakki":                  { origUrl:P+"thuppakki.jpg",              remakeUrl:P+"holiday.jpg" },
  "Drishyam":                   { origUrl:P+"drishyam-original.jpg",      remakeUrl:P+"drishyam-remake.jpg" },
  "Joker":                      { origUrl:P+"joker.jpg",                  remakeUrl:P+"toilet.jpg" },
  "Temper":                     { origUrl:P+"temper.jpg",                 remakeUrl:P+"simmba.jpg" },
  "Kshanam":                    { origUrl:P+"kshanam.jpg",                remakeUrl:P+"baaghi2.jpg" },
  "Sairat":                     { origUrl:P+"sairat.jpg",                 remakeUrl:P+"dhadak.jpg" },
  "Arjun Reddy":                { origUrl:P+"arjunreddy.jpg",             remakeUrl:P+"kabirsingh.jpg" },
  "Theri":                      { origUrl:P+"theri.jpg",                  remakeUrl:P+"babyjohn.jpg" },
  "Kaithi":                     { origUrl:P+"kaithi.jpg",                 remakeUrl:P+"bholaa.jpg" },
  "Ala Vaikunthapurramuloo":    { origUrl:P+"alavaikunthapurramuloo.jpg", remakeUrl:P+"shehzada.jpg" },
  "Driving License":            { origUrl:P+"drivinglicense.jpg",         remakeUrl:P+"selfiee.jpg" },
  "Jersey":                     { origUrl:P+"jersey-original.jpg",        remakeUrl:P+"jersey-remake.jpg" },
  "Vikram Vedha":               { origUrl:P+"vikramvedha-original.jpg",   remakeUrl:P+"vikramvedha-remake.jpg" },
  "Drishyam 2":                 { origUrl:P+"drishyam2-original.jpg",     remakeUrl:P+"drishyam2-remake.jpg" },
  "HIT: The First Case":        { origUrl:P+"hit-original.jpg",           remakeUrl:P+"hit-remake.jpg" },
  "Thadam":                     { origUrl:P+"thadam.jpg",                 remakeUrl:P+"gumraah.jpg" },
  "Helen":                      { origUrl:P+"helen.jpg",                  remakeUrl:P+"mili.jpg" },
  "Jigarthanda":                { origUrl:P+"jigarthanda.jpg",            remakeUrl:P+"bachchanpandey.jpg" },
  "Alaipayuthey":               { origUrl:P+"alaipayuthey.jpg",           remakeUrl:P+"saathiya.jpg" },
};

// ── MODE TOGGLE + REEL DROPDOWN ──────────────────────────────
const sorted = [...data].sort((a,b)=>a.orig.localeCompare(b.orig));
let curOrig  = "Temper";   // default: Simmba
let dropMode = "orig";     // active mode button

const btnOrig    = document.getElementById("btn-orig");
const btnRemake  = document.getElementById("btn-remake");
const reelWrap   = document.getElementById("reel-wrap");
const reelTrig   = document.getElementById("reel-trigger");
const reelDrop   = document.getElementById("reel-dropdown");
const trigText   = document.getElementById("reel-trigger-text");

function trigLabel(orig, mode) {
  if (orig === "__all__") return "All films";
  if (mode === "orig") return orig;
  const d = data.find(x=>x.orig===orig);
  return d ? d.remake : orig;
}

function setActiveMode(mode) {
  dropMode = mode;
  btnOrig.classList.toggle("active",   mode==="orig");
  btnRemake.classList.toggle("active", mode==="remake");
  trigText.textContent = trigLabel(curOrig, mode);
}

function buildReelOptions() {
  reelDrop.innerHTML = "";
  // "All films" first
  const allDiv = document.createElement("div");
  allDiv.className = "sel-opt" + (curOrig==="__all__"?" selected":"");
  allDiv.dataset.value = "__all__";
  allDiv.textContent = "All films";
  allDiv.addEventListener("click", e => {
    e.stopPropagation();
    curOrig = "__all__";
    trigText.textContent = "All films";
    reelWrap.classList.remove("open");
    clearPanel();
    Object.values(charts).forEach(c=>c.resetAll());
  });
  reelDrop.appendChild(allDiv);

  const items = dropMode==="orig"
    ? sorted.map(d=>({value:d.orig, label:d.orig}))
    : [...sorted].sort((a,b)=>a.remake.localeCompare(b.remake)).map(d=>({value:d.orig, label:d.remake}));

  items.forEach(({value,label}) => {
    const div = document.createElement("div");
    div.className = "sel-opt" + (value===curOrig?" selected":"");
    div.dataset.value = value;
    div.textContent = label;
    div.addEventListener("click", e => {
      e.stopPropagation();
      curOrig = value;
      trigText.textContent = trigLabel(value, dropMode);
      reelWrap.classList.remove("open");
      updatePanel(value);
    });
    reelDrop.appendChild(div);
  });
}

reelTrig.addEventListener("click", e => {
  e.stopPropagation();
  reelWrap.classList.toggle("open");
  if (reelWrap.classList.contains("open")) buildReelOptions();
});

document.addEventListener("click", () => reelWrap.classList.remove("open"));

btnOrig.addEventListener("click",   () => { if (dropMode!=="orig")   setActiveMode("orig");   });
btnRemake.addEventListener("click", () => { if (dropMode!=="remake") setActiveMode("remake"); });

// expose for hover sync (does NOT permanently change curOrig — hover is transient)
function selSetValue(val) {
  const d=data.find(x=>x.orig===val); if(!d) return;
  // update trigger text to show hovered film, but don't change curOrig
  trigText.textContent = trigLabel(val, dropMode);
}
function selGetValue() { return curOrig; }

// ── PANEL CLEAR (all-films state) ────────────────────────────
function clearPanel() {
  ++_panelGen;  // invalidate any in-flight image loads
  ["img-orig","img-remake"].forEach(id=>{
    const el=document.getElementById(id);
    el.classList.remove("visible"); el.src="";
  });
  document.getElementById("ph-orig").style.display="";
  document.getElementById("ph-orig").textContent="Select a movie to compare with remake";
  document.getElementById("ph-remake").style.display="";
  document.getElementById("ph-remake").textContent="—";
  document.getElementById("name-orig").textContent   = "";
  document.getElementById("year-orig").textContent   = "";
  document.getElementById("name-remake").textContent = "";
  document.getElementById("year-remake").textContent = "";
  ["chip-rating-orig","chip-rating-remake","chip-rev-orig","chip-rev-remake"].forEach(id=>{
    const el=document.getElementById(id);
    el.textContent="—"; el.className="chip-val";
  });
}

// ── PANEL UPDATE (single film) ───────────────────────────────
let _panelGen = 0;  // incremented on every clearPanel/updatePanel call; stale onload callbacks are ignored

function updatePanel(orig) {
  if (orig === "__all__") { clearPanel(); Object.values(charts).forEach(c=>c.resetAll()); return; }
  const d = data.find(x => x.orig === orig);
  if (!d) return;

  const gen = ++_panelGen;
  const p = POSTER_IMGS[orig];
  const imgO = document.getElementById("img-orig");
  const phO  = document.getElementById("ph-orig");
  const imgR = document.getElementById("img-remake");
  const phR  = document.getElementById("ph-remake");

  if (p) {
    imgO.src = p.origUrl;
    imgO.onload  = () => { if (_panelGen!==gen) return; imgO.classList.add("visible"); phO.style.display="none"; };
    imgO.onerror = () => { if (_panelGen!==gen) return; imgO.classList.remove("visible"); phO.style.display=""; phO.textContent=d.orig; };
    imgR.src = p.remakeUrl;
    imgR.onload  = () => { if (_panelGen!==gen) return; imgR.classList.add("visible"); phR.style.display="none"; };
    imgR.onerror = () => { if (_panelGen!==gen) return; imgR.classList.remove("visible"); phR.style.display=""; phR.textContent=d.remake; };
  } else {
    imgO.classList.remove("visible"); phO.style.display=""; phO.textContent=d.orig;
    imgR.classList.remove("visible"); phR.style.display=""; phR.textContent=d.remake;
  }

  document.getElementById("name-orig").textContent   = d.orig;
  document.getElementById("year-orig").textContent   = d.oy;
  document.getElementById("name-remake").textContent = d.remake;
  document.getElementById("year-remake").textContent = d.ry;

  // Chip: IMDb rating
  const roChip = document.getElementById("chip-rating-orig");
  const rrChip = document.getElementById("chip-rating-remake");
  roChip.textContent = d.ro!=null ? d.ro.toFixed(1) : "—";
  rrChip.textContent = d.rr!=null ? d.rr.toFixed(1) : "—";
  if (d.ro!=null && d.rr!=null) {
    roChip.className = "chip-val" + (d.ro>d.rr ? " highlight-green" : d.ro<d.rr ? " highlight-red" : "");
    rrChip.className = "chip-val" + (d.rr>d.ro ? " highlight-green" : d.rr<d.ro ? " highlight-red" : "");
  } else {
    roChip.className = "chip-val";
    rrChip.className = "chip-val";
  }

  // Chip: Box office — special OTT label for certain films
  const OTT_ORIG   = ["Drishyam 2"];
  const ooChip = document.getElementById("chip-rev-orig");
  const orChip = document.getElementById("chip-rev-remake");
  ooChip.textContent = OTT_ORIG.includes(d.orig) ? "Released on OTT"
                     : d.origRev!=null ? "Rs. " + d.origRev.toFixed(0) + " Cr" : "—";
  orChip.textContent = d.remakeRev!=null ? "Rs. " + d.remakeRev.toFixed(0) + " Cr" : "—";
  if (d.origRev!=null && d.remakeRev!=null) {
    ooChip.className = "chip-val" + (d.origRev>d.remakeRev ? " highlight-green" : d.origRev<d.remakeRev ? " highlight-red" : "");
    orChip.className = "chip-val" + (d.remakeRev>d.origRev ? " highlight-green" : d.remakeRev<d.origRev ? " highlight-red" : "");
  } else {
    ooChip.className = "chip-val";
    orChip.className = "chip-val";
  }

  Object.values(charts).forEach(c=>c.highlightOrig(orig));
}

// (reel dropdown handles its own change events above)

// ── HELPERS ───────────────────────────────────────────────────
function lineColor(lv, rv, range) {
  const diff = rv - lv;
  if (Math.abs(diff) < 0.01 * range) return C_GREY;
  return diff > 0 ? C_GREEN : C_RED;
}

// Pack label positions for ONE side — returns an array of packed y values.
// Preserves relative order. minGap = minimum pixels between adjacent labels.
function packLabels(trueYs, minGap, yMin, yMax) {
  const n = trueYs.length;
  const packed = [...trueYs];
  const idx = Array.from({length:n},(_,i)=>i).sort((a,b)=>trueYs[a]-trueYs[b]);
  // push down pass
  for (let k=0;k<n;k++) {
    const i=idx[k];
    if (packed[i] < yMin) packed[i] = yMin;
    if (k > 0) { const prev=idx[k-1]; if (packed[i]-packed[prev]<minGap) packed[i]=packed[prev]+minGap; }
  }
  // pull up pass (clamp to yMax)
  for (let k=n-1;k>=0;k--) {
    const i=idx[k];
    if (packed[i] > yMax) packed[i] = yMax;
    if (k < n-1) { const next=idx[k+1]; if (packed[next]-packed[i]<minGap) packed[i]=packed[next]-minGap; }
  }
  // final clamp to yMin
  for (let k=0;k<n;k++) {
    const i=idx[k];
    if (packed[i] < yMin) packed[i] = yMin;
    if (k > 0) { const prev=idx[k-1]; if (packed[i]-packed[prev]<minGap) packed[i]=packed[prev]+minGap; }
  }
  return packed;
}

function drawFilmStrip(svg, x, yTop, height, width) {
  const PW=Math.round(width*0.28), HW=Math.round(PW*0.62);
  const HH=Math.round(width*0.09), HS=Math.round(HH*0.7);
  svg.append("rect").attr("x",x).attr("y",yTop).attr("width",width).attr("height",height).attr("fill","#8a8480");
  [[x,PW],[x+width-PW,PW]].forEach(a=>{
    svg.append("rect").attr("x",a[0]).attr("y",yTop).attr("width",a[1]).attr("height",height).attr("fill","#76726e");
  });
  const hx0=x+(PW-HW)/2, hx1=x+width-PW+(PW-HW)/2;
  for (let hy=yTop+HS; hy+HH<yTop+height; hy+=HH+HS) {
    [hx0,hx1].forEach(hx=>{
      svg.append("rect").attr("x",hx).attr("y",hy).attr("width",HW).attr("height",HH)
        .attr("rx",1.2).attr("fill","#f2ede6").attr("opacity",0.85);
    });
  }
  const cx=x+PW, cw=width-PW*2, step=HH+HS;
  for (let fy=yTop+step; fy<yTop+height; fy+=step)
    svg.append("line").attr("x1",cx).attr("x2",cx+cw).attr("y1",fy).attr("y2",fy)
      .attr("stroke","#bbb").attr("stroke-width",0.4).attr("opacity",0.5);
  svg.append("rect").attr("x",x).attr("y",yTop).attr("width",width).attr("height",height)
    .attr("fill","none").attr("stroke","#6e6a66").attr("stroke-width",1);
}

// ── BUILD CHART ───────────────────────────────────────────────
function buildChart(svgId, dataset, getL, getR, unitFmt) {
  const header = document.querySelector(".right-header");
  const footer = document.querySelector(".footer");
  const rightSide = document.querySelector(".right-side");
  const rs = getComputedStyle(rightSide);
  const vPad = parseFloat(rs.paddingTop) + parseFloat(rs.paddingBottom);
  const usedH = (header ? header.offsetHeight : 0) + (footer ? footer.offsetHeight : 0) + vPad + 8 + 8;
  const availH = window.innerHeight - usedH;
  const PAD_T=46, PAD_B=20, PAD_SIDE=6;
  const axisH = availH - PAD_T - PAD_B;

  const allVals = dataset.flatMap(d=>[getL(d),getR(d)]).filter(v=>v!=null);
  const vMin=d3.min(allVals), vMax=d3.max(allVals);
  const pad=(vMax-vMin)*0.08;
  const domMin = svgId==="chart-revenue" ? 0 : Math.max(0,vMin-pad);
  const domMax = vMax+pad;
  const range  = domMax-domMin;

  // yR maps a data value → SVG y coordinate (higher value = lower y number = higher on screen)
  function yR(v) { return PAD_T + (1-(v-domMin)/range)*axisH; }

  const availW = (window.innerWidth - 260 - 36) / 2;  // half of right side minus left panel and padding
  const STRIP_W=28, LBL_W=Math.max(110, Math.round(availW*0.28)), GAP=Math.max(140, Math.round(availW*0.36));
  const xLS=PAD_SIDE+LBL_W, xSL=xLS+STRIP_W, xSR=xSL+GAP, xRS=xSR;
  const W=xRS+STRIP_W+LBL_W+PAD_SIDE, H=PAD_T+axisH+PAD_B;
  const PILL_W=26, PILL_H=11;
  const pxL=Math.round(xLS+(STRIP_W-PILL_W)/2), pxR=Math.round(xRS+(STRIP_W-PILL_W)/2);

  const svg=d3.select("#"+svgId).attr("width",W).attr("height",H).attr("viewBox","0 0 "+W+" "+H);
  svg.append("rect").attr("width",W).attr("height",H).attr("fill","#e8e8e8");

  drawFilmStrip(svg,xLS,PAD_T,axisH,STRIP_W);
  drawFilmStrip(svg,xRS,PAD_T,axisH,STRIP_W);

  svg.append("text").attr("x",(xSL+xSR)/2).attr("y",16).attr("text-anchor","middle")
    .attr("font-size",14).attr("font-weight",700).attr("fill","#1a1a1a").attr("letter-spacing","0.01em")
    .attr("font-family","IBM Plex Sans,sans-serif")
    .text(svgId==="chart-rating"?"IMDb Rating":"Box Office Revenue (Rs. crore)");

  [["ORIGINAL",xLS+STRIP_W/2],["REMAKE (HINDI)",xRS+STRIP_W/2]].forEach(([lbl,cx])=>{
    svg.append("text").attr("x",cx).attr("y",PAD_T-6).attr("text-anchor","middle")
      .attr("font-size",11).attr("font-weight",700).attr("fill","#333").attr("letter-spacing","0.05em")
      .attr("font-family","IBM Plex Sans,sans-serif").text(lbl);
  });

  // ── PACKING ──────────────────────────────────────────────────
  // Pack each side independently (same as index3). Then enforce direction:
  // red slope (rv < lv) → right packed y must be BELOW left packed y (higher y = lower on screen)
  // green slope (rv > lv) → right packed y must be ABOVE left packed y (lower y = higher on screen)
  // This guarantees red always goes down-right, green always goes up-right.
  const yBotBound = PAD_T + axisH;
  const leftTrueY  = dataset.map(d => yR(getL(d)));
  const rightTrueY = dataset.map(d => yR(getR(d)));
  const leftLY  = packLabels(leftTrueY,  13, PAD_T, yBotBound);
  const rightLY = packLabels(rightTrueY, 13, PAD_T, yBotBound);

  // Direction clamp: enforce visual direction matches data direction
  dataset.forEach((d,i)=>{
    const lv=getL(d), rv=getR(d);
    const diff = rv - lv;
    if (Math.abs(diff) < 0.01 * range) return;
    if (diff < 0) {
      if (rightLY[i] <= leftLY[i]) rightLY[i] = leftLY[i] + 4;
    } else {
      if (rightLY[i] >= leftLY[i]) rightLY[i] = leftLY[i] - 4;
    }
  });

  // Re-pack right side after direction clamp to fix any new collisions it introduced,
  // but preserve the clamped direction by using the clamped values as the new trueYs.
  const rightLY2 = packLabels([...rightLY], 13, PAD_T, yBotBound);
  // Only accept re-packed position if it doesn't violate direction
  dataset.forEach((d,i)=>{
    const lv=getL(d), rv=getR(d);
    const diff = rv - lv;
    if (Math.abs(diff) < 0.01 * range) {
      rightLY[i] = rightLY2[i];
      return;
    }
    if (diff < 0) {
      // red: right must stay below left
      rightLY[i] = rightLY2[i] > leftLY[i] ? rightLY2[i] : Math.max(rightLY2[i], leftLY[i] + 4);
    } else {
      // green: right must stay above left
      rightLY[i] = rightLY2[i] < leftLY[i] ? rightLY2[i] : Math.min(rightLY2[i], leftLY[i] - 4);
    }
  });

  // Draw slopes at packed positions
  dataset.forEach((d,i)=>{
    const lv=getL(d), rv=getR(d), diff=rv-lv, absDiff=Math.abs(diff);
    const lc=lineColor(lv,rv,range);
    const sw=absDiff/range>=0.35?2.4:absDiff/range>=0.2?1.8:absDiff/range>=0.1?1.3:0.9;
    const op=lc===C_GREY?0.2:0.75;
    svg.append("line").attr("class","slope-line").attr("data-orig",d.orig)
      .attr("x1",xSL).attr("y1",leftLY[i])
      .attr("x2",xSR).attr("y2",rightLY[i])
      .attr("stroke",lc).attr("stroke-width",sw)
      .attr("stroke-dasharray",lc===C_GREY?"3 4":null).attr("opacity",op);
  });

  // Labels and pills — at packed positions, leader lines connect true y to packed y
  const dotL={}, dotR={}, nameEls={};
  dataset.forEach((d,i)=>{
    const ly=leftLY[i], ry=rightLY[i];
    const lv=getL(d), rv=getR(d);
    const y1=yR(lv), y2=yR(rv);   // true data y (for leader lines only)
    const lc=lineColor(lv,rv,range);

    // LEFT: leader from strip-edge at true y → pill at packed y
    if (Math.abs(ly-y1)>2)
      svg.append("line").attr("x1",xLS).attr("y1",y1).attr("x2",pxL+PILL_W).attr("y2",ly)
        .attr("stroke","#c8c8c8").attr("stroke-width",0.5).attr("opacity",0.6).attr("pointer-events","none");
    svg.append("rect").attr("x",pxL).attr("y",ly-PILL_H/2).attr("width",PILL_W).attr("height",PILL_H)
      .attr("rx",2.5).attr("fill",C_GREEN).attr("opacity",0.85).attr("pointer-events","none");
    svg.append("text").attr("x",pxL+PILL_W/2).attr("y",ly+3.8)
      .attr("text-anchor","middle").attr("font-size",8).attr("font-weight",700).attr("fill","#fff")
      .attr("font-family","IBM Plex Sans,sans-serif").attr("pointer-events","none").text(unitFmt(lv));
    const nameL=svg.append("text").attr("x",xLS-3).attr("y",ly+3.8)
      .attr("text-anchor","end").attr("font-size",10).attr("font-weight",500).attr("fill","#555")
      .attr("font-family","IBM Plex Sans,sans-serif").style("cursor","pointer").text(d.orig);

    // RIGHT: leader from strip-edge at true y → pill at packed y
    if (Math.abs(ry-y2)>2)
      svg.append("line").attr("x1",xRS+STRIP_W).attr("y1",y2).attr("x2",pxR).attr("y2",ry)
        .attr("stroke","#c8c8c8").attr("stroke-width",0.5).attr("opacity",0.6).attr("pointer-events","none");
    svg.append("rect").attr("x",pxR).attr("y",ry-PILL_H/2).attr("width",PILL_W).attr("height",PILL_H)
      .attr("rx",2.5).attr("fill",lc===C_GREY?"#999":lc).attr("opacity",0.85).attr("pointer-events","none");
    svg.append("text").attr("x",pxR+PILL_W/2).attr("y",ry+3.8)
      .attr("text-anchor","middle").attr("font-size",8).attr("font-weight",700).attr("fill","#fff")
      .attr("font-family","IBM Plex Sans,sans-serif").attr("pointer-events","none").text(unitFmt(rv));
    const nameR=svg.append("text").attr("x",xRS+STRIP_W+3).attr("y",ry+3.8)
      .attr("text-anchor","start").attr("font-size",10).attr("font-weight",500).attr("fill","#555")
      .attr("font-family","IBM Plex Sans,sans-serif").style("cursor","pointer").text(d.remake);

    // dots at slope endpoints (= label positions)
    dotL[d.orig]=svg.append("circle").attr("cx",xSL).attr("cy",ly).attr("r",3.5)
      .attr("fill",C_GREEN).attr("stroke","white").attr("stroke-width",1).attr("opacity",0).attr("pointer-events","none");
    dotR[d.orig]=svg.append("circle").attr("cx",xSR).attr("cy",ry).attr("r",3.5)
      .attr("fill",lc).attr("stroke","white").attr("stroke-width",1).attr("opacity",0).attr("pointer-events","none");

    nameEls[d.orig]={nameL,nameR};
  });

  function highlightOrig(orig) {
    svg.selectAll(".slope-line").attr("opacity",0.05).attr("stroke","#bbb");
    const dd=dataset.find(x=>x.orig===orig);
    if(dd){
      const lv=getL(dd),rv=getR(dd),diff=Math.abs(rv-lv);
      const lc=lineColor(lv,rv,range);
      const sw=diff/range>=0.35?3.0:diff/range>=0.2?2.4:diff/range>=0.1?1.8:1.2;
      svg.selectAll(".slope-line").filter(function(){
        return d3.select(this).attr("data-orig")===orig;
      }).attr("opacity",1).attr("stroke",lc).attr("stroke-width",sw);
    }
    Object.entries(nameEls).forEach(([key,{nameL,nameR}])=>{
      const isSel=key===orig;
      nameL.attr("fill",isSel?"#111":"#ccc").attr("font-weight",isSel?700:400);
      nameR.attr("fill",isSel?"#111":"#ccc").attr("font-weight",isSel?700:400);
    });
    Object.keys(dotL).forEach(k=>{ dotL[k].attr("opacity",0); dotR[k].attr("opacity",0); });
    if(dotL[orig]){ dotL[orig].attr("opacity",1); dotR[orig].attr("opacity",1); }
  }

  function resetAll() {
    svg.selectAll(".slope-line").each(function(){
      const el=d3.select(this), key=el.attr("data-orig");
      const dd=dataset.find(x=>x.orig===key); if(!dd) return;
      const lv=getL(dd),rv=getR(dd),diff=Math.abs(rv-lv);
      const lc=lineColor(lv,rv,range);
      const sw=diff/range>=0.35?2.4:diff/range>=0.2?1.8:diff/range>=0.1?1.3:0.9;
      el.attr("stroke",lc).attr("stroke-width",sw).attr("opacity",lc===C_GREY?0.2:0.75);
    });
    Object.values(nameEls).forEach(({nameL,nameR})=>{
      nameL.attr("fill","#555").attr("font-weight",500);
      nameR.attr("fill","#555").attr("font-weight",500);
    });
    Object.keys(dotL).forEach(k=>{ dotL[k].attr("opacity",0); dotR[k].attr("opacity",0); });
  }

  charts[svgId]={highlightOrig,resetAll,nameEls,dataset};
}

// ── INIT ──────────────────────────────────────────────────────
buildChart("chart-rating",  data,    d=>d.ro,      d=>d.rr,      v=>v.toFixed(1));
const revData = data.filter(d=>d.origRev!=null && d.remakeRev!=null);
buildChart("chart-revenue", revData, d=>d.origRev, d=>d.remakeRev, v=>Math.round(v)+"");

// Attach hover AFTER both charts are built so Object.values(charts) has both
Object.values(charts).forEach(({nameEls,dataset})=>{
  dataset.forEach(d=>{
    if (!nameEls[d.orig]) return;
    const {nameL,nameR}=nameEls[d.orig];
    function onOver() {
      Object.values(charts).forEach(c=>c.highlightOrig(d.orig));
      selSetValue(d.orig);   // update trigger text to show hovered film
      updatePanel(d.orig);
    }
    function onOut() {
      const cur = selGetValue();
      trigText.textContent = trigLabel(cur, dropMode);
      Object.values(charts).forEach(c=>c.resetAll());
      clearPanel();
    }
    nameL.on("mouseover",onOver).on("mouseout",onOut);
    nameR.on("mouseover",onOver).on("mouseout",onOut);
  });
});

// default: Simmba selected
updatePanel("Temper");
Object.values(charts).forEach(c=>c.highlightOrig("Temper"));
