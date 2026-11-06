import fs from "fs";
import path from "path";
import crypto from "crypto";

const out = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));

function model(spec) {
  const palette = ["#d9a441", "#4fbf8f", "#c7d0dc", "#ff6a3d", "#4a8fff"];
  function rowsFrom(pairs) {
    return pairs.map(function (p, i) {
      return { name: p[0], n: p[1], col: palette[i % palette.length] };
    });
  }
  function sum(rs) {
    let s = 0;
    for (let i = 0; i < rs.length; i++) s += rs[i].n;
    return s;
  }
  function balDigits(n) {
    if (n === 0) return [0];
    const d = [];
    let x = n;
    while (x !== 0) {
      let rem = ((x % 3) + 3) % 3;
      if (rem === 2) rem = -1;
      d.push(rem);
      x = (x - rem) / 3;
    }
    return d;
  }
  function fromBal(d) {
    let s = 0, p = 1;
    for (let i = 0; i < d.length; i++) { s += d[i] * p; p *= 3; }
    return s;
  }
  function fib(n) {
    let a = 1, b = 1;
    if (n <= 2) return 1;
    for (let i = 3; i <= n; i++) { const c = a + b; a = b; b = c; }
    return b;
  }
  const alpha = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  const vowels = "аеёиоуыэюя";
  const cons = "бвгджзйклмнпрстфхцчшщ";
  const signs = "ъь";
  const roomWall = {
    russian: "A count of letters or steps is not a soul, and it is not a claim about a people.",
    ternary: "Three states make a trit. They do not make a spirit. Setun was a machine in Moscow.",
    geometry: "A proportion is a number. It is not a spirit living in the drawing.",
    count: "The luck, the destiny, and the power claimed for these counts are not shown here.",
    root: "A language family is not a race. The political flag is not the Sanskrit word."
  };
  let rows = [];
  let series = [];
  let water = "bars";
  let waterArg = 0;
  let lit = "";
  let detail = "";
  let ok = false;
  const k = spec.proof;

  if (k === "alpha") {
    rows = rowsFrom([["vowels", vowels.length], ["consonants", cons.length], ["signs", signs.length]]);
    ok = vowels.length === 10 && cons.length === 21 && signs.length === 2 && alpha.length === 33 && (alpha.indexOf("ё") + 1) === 7;
    lit = "10 vowels, 21 consonants, 2 signs, 33 letters. Yo is the 7th.";
    series = [10, 21, 2, 33, 7];
    detail = "The alphabet string on this page is the source. The three rows are its parts.";
  } else if (k === "yo") {
    rows = rowsFrom([["place of yo", alpha.indexOf("ё") + 1], ["letters before it", alpha.indexOf("ё")]]);
    ok = alpha.indexOf("ё") + 1 === 7 && alpha.length === 33;
    lit = "Ё is letter 7 of the 33.";
    series = [7, 33];
    detail = "Counted from the same alphabet string.";
  } else if (k === "scheme") {
    const scheme = "AbAbCCddEffEgg";
    const families = {};
    for (let i = 0; i < scheme.length; i++) families[scheme.charAt(i).toLowerCase()] = 1;
    const fam = Object.keys(families).length;
    rows = rowsFrom([["lines", scheme.length], ["rhyme families", fam]]);
    ok = scheme.length === 14 && fam === 7;
    lit = "The scheme AbAbCCddEffEgg is 14 lines and 7 rhyme families.";
    series = [14, 7];
    detail = "No line of the novel is copied. Only the length of the scheme.";
  } else if (k === "stress") {
    rows = rowsFrom([["beats in a line", 4], ["lines", 14]]);
    ok = 4 * 14 === 56;
    lit = "Four beats times fourteen lines is 56 seats.";
    series = [4, 14, 56];
    detail = "A seat is not a promise that every beat is stressed.";
  } else if (k === "cheby") {
    rows = rowsFrom([["k = 2, bound in fourths", 1], ["k = 3, bound in ninths", 1]]);
    ok = (1 / (2 * 2) === 1 / 4) && (1 / (3 * 3) === 1 / 9) && (4 * (1 / 4) === 1) && (9 * (1 / 9) === 1);
    lit = "At two widths the bound is 1/4. At three widths it is 1/9.";
    series = [1 / 4, 1 / 9, 1 / 16, 1 / 25];
    detail = "The page checks the squares. It does not draw a measured population.";
  } else if (k === "defect") {
    const angles = [50, 60, 40];
    const s = angles[0] + angles[1] + angles[2];
    rows = rowsFrom([["angle 50", 50], ["angle 60", 60], ["angle 40", 40]]);
    ok = s === 150 && (180 - s) === 30 && s < 180;
    lit = "50 + 60 + 40 = 150. The defect under 180 is 30.";
    series = angles.concat([150, 30]);
    detail = "This is the arithmetic of a shortfall. It is not a surveyed triangle.";
  } else if (k === "doubles") {
    let left = 13, right = 17, got = 0, kept = 0, drops = 0;
    while (left > 0) {
      if (left % 2 === 1) { got += right; kept++; } else drops++;
      left = Math.floor(left / 2);
      right *= 2;
    }
    rows = rowsFrom([["kept odd steps", kept], ["dropped even steps", drops]]);
    ok = got === 221 && kept === 3 && drops === 1 && 13 * 17 === 221;
    lit = "13 by 17 keeps 17, 68, and 136. They sum to 221.";
    series = [17, 68, 136, 221];
    water = "digits";
    waterArg = 221;
    detail = "An even step is dropped. An odd step is kept.";
  } else if (k === "days") {
    rows = rowsFrom([["new date", 14], ["old date", 1]]);
    ok = 14 - 1 === 13;
    lit = "In the 1918 switch, 1 became 14. The gap is 13 days.";
    series = [1, 14, 13];
    detail = "The decree's arithmetic, not a full calendar.";
  } else if (k === "pal") {
    const w = spec.arg;
    const chars = Array.from(w);
    const rev = chars.slice().reverse().join("");
    rows = rowsFrom([["letters", chars.length]]);
    ok = w === rev && chars.length === spec.n;
    lit = w + " has " + chars.length + " letters and equals its reverse.";
    series = [chars.length];
    detail = "Read from the letters on this page.";
  } else if (k === "len") {
    const w = spec.arg;
    const n = Array.from(w).length;
    rows = rowsFrom([["letters", n]]);
    ok = n === spec.n;
    lit = w + " has " + n + " letters.";
    series = [n];
    detail = "Counted from the spelling on this page.";
  } else if (k === "nest") {
    rows = rowsFrom([["dolls", 7], ["gaps between them", 6]]);
    ok = 7 - 1 === 6;
    lit = "Seven nested dolls leave six gaps.";
    series = [7, 6];
    detail = "Seven is the assigned set. The gap count is the arithmetic.";
  } else if (k === "beads") {
    rows = rowsFrom([["beads on the rod", 10]]);
    ok = 10 === 10;
    lit = "The rod in view has 10 beads.";
    series = [10];
    detail = "Ten is the assigned rod, the common schoty count.";
  } else if (k === "sum") {
    rows = rowsFrom(spec.parts);
    const s = sum(rows);
    ok = s === spec.n;
    lit = spec.lit;
    series = rows.map(function (r) { return r.n; }).concat([s]);
    detail = "The live sum of the rows that are still on.";
  } else if (k === "pow") {
    const a = spec.a, b = spec.b, c = spec.c;
    rows = rowsFrom([["base", a], ["power", b], ["value", c]]);
    ok = Math.pow(a, b) === c;
    lit = a + " to the " + b + " is " + c + ".";
    series = [];
    for (let i = 0; i <= b; i++) series.push(Math.pow(a, i));
    detail = "Recomputed as repeated multiplication.";
  } else if (k === "range") {
    const n = spec.n;
    const count = Math.pow(3, n);
    const half = (count - 1) / 2;
    rows = rowsFrom([["trits", n], ["patterns", count], ["each way from zero", half]]);
    let round = true;
    for (let v = -half; v <= half; v++) if (fromBal(balDigits(v)) !== v) round = false;
    ok = count === spec.count && half === spec.half && round;
    lit = n + " trits make " + count + " patterns, from -" + half + " to " + half + ".";
    series = [n, count, half];
    water = "digits";
    waterArg = half;
    detail = "Every integer in that range converts and comes back.";
  } else if (k === "negate") {
    let good = true;
    for (let v = 1; v <= 40; v++) {
      const d = balDigits(v).map(function (x) { return -x; });
      if (fromBal(d) !== -v) good = false;
    }
    rows = rowsFrom([["values checked", 40], ["sign flip", 1]]);
    ok = good && fromBal(balDigits(13).map(function (x) { return -x; })) === -13;
    lit = "Flipping every trit of a value from 1 to 40 negates it.";
    series = balDigits(13);
    water = "digits";
    waterArg = 13;
    detail = "Thirteen is the sample drawn in the water window.";
  } else if (k === "cantor") {
    const n = spec.n;
    const num = 2 ** n;
    const den = 3 ** n;
    rows = rowsFrom([["removals", n], ["numerator 2^n", num], ["denominator 3^n", den]]);
    ok = num === Math.pow(2, n) && den === Math.pow(3, n) && num < den && num > 0;
    lit = "After " + n + " middle-third cuts, the length left is " + num + "/" + den + ".";
    series = [];
    for (let i = 0; i <= n; i++) series.push(Math.pow(2, i) / Math.pow(3, i));
    detail = "The dust keeps two of the three pieces each time.";
  } else if (k === "econ") {
    const e2 = 2 / Math.log(2);
    const e3 = 3 / Math.log(3);
    rows = rowsFrom([["base 2 scaled by 1000", Math.round(e2 * 1000)], ["base 3 scaled by 1000", Math.round(e3 * 1000)]]);
    ok = e3 < e2 && e3 > 0;
    lit = "Base 3 costs less radix than base 2: 3/ln 3 is under 2/ln 2.";
    series = [Math.round(e2 * 1000), Math.round(e3 * 1000)];
    detail = "This compares bases. It does not price a machine.";
  } else if (k === "round") {
    const nums = spec.nums;
    let good = true;
    for (let i = 0; i < nums.length; i++) if (fromBal(balDigits(nums[i])) !== nums[i]) good = false;
    rows = rowsFrom(nums.map(function (n) { return [String(n), n]; }));
    ok = good;
    lit = "Each listed number survives a trip through balanced ternary.";
    series = nums;
    water = "digits";
    waterArg = nums[0];
    detail = "Digits use -1, 0, and 1. There is no digit 2.";
  } else if (k === "weights") {
    const ws = [1, 3, 9, 27, 81];
    rows = rowsFrom(ws.map(function (n, i) { return ["3^" + i, n]; }));
    ok = sum(rows) === 121 && ws[0] + ws[1] + ws[2] + ws[3] + ws[4] === 121;
    lit = "1+3+9+27+81 = 121.";
    series = ws;
    detail = "These are the place values of five trits, taken positive.";
  } else if (k === "log3") {
    rows = rowsFrom([["target", 81], ["trits to reach it", 4]]);
    ok = Math.pow(3, 4) === 81;
    lit = "81 is 3 to the 4, so the ternary depth is 4.";
    series = [1, 3, 9, 27, 81];
    detail = "Exact power, not a rounded log.";
  } else if (k === "rep") {
    const n = 5;
    const v = (Math.pow(3, n) - 1) / 2;
    rows = rowsFrom([["trits", n], ["value", v]]);
    ok = v === 121 && fromBal([1, 1, 1, 1, 1]) === 121;
    lit = "Five trits of +1 sum to 121, which is (3^5 - 1) / 2.";
    series = [1, 1, 1, 1, 1];
    water = "digits";
    waterArg = 121;
    detail = "All marks positive, then read back.";
  } else if (k === "vesica") {
    const h = Math.sqrt(1 - 0.5 * 0.5) * 2;
    rows = rowsFrom([["width, in tenths", 10], ["height over width, in tenths", Math.round(h * 10)]]);
    ok = Math.abs(h - Math.sqrt(3)) < 1e-12;
    lit = "Two unit circles whose centers are 1 apart cross at height √3.";
    series = [1, Math.round(h * 1000)];
    water = "poly";
    waterArg = 3;
    detail = "Height is 2 √(1 - 0.5²), which is √3.";
  } else if (k === "angle") {
    rows = rowsFrom([["corners", spec.n], ["straight angle", 180]]);
    const interior = (spec.n - 2) * 180;
    ok = interior === spec.sum;
    lit = "A regular " + spec.n + "-gon holds " + interior + " degrees inside.";
    series = [spec.n, interior];
    water = "poly";
    waterArg = spec.n;
    detail = "(n - 2) times 180.";
  } else if (k === "cassini") {
    const n = spec.n;
    const left = fib(n + 1) * fib(n - 1) - fib(n) * fib(n);
    const right = (n % 2 === 0) ? 1 : -1;
    rows = rowsFrom([["F" + (n + 1), fib(n + 1)], ["F" + n, fib(n)], ["F" + (n - 1), fib(n - 1)]]);
    ok = left === right;
    lit = "F" + (n + 1) + " · F" + (n - 1) + " − F" + n + "² = " + right + ".";
    series = [fib(1), fib(2), fib(3), fib(4), fib(5), fib(6), fib(7), fib(8)];
    detail = "Cassini's identity on these Fibonacci numbers. The golden ratio is the limit, not this integer.";
  } else if (k === "phi") {
    rows = rowsFrom([["continued ones checked", 8]]);
    const phi = (1 + Math.sqrt(5)) / 2;
    ok = Math.abs(phi * phi - phi - 1) < 1e-12;
    lit = "φ² = φ + 1, for φ = (1 + √5) / 2.";
    series = [1, 1, 2, 3, 5, 8, 13, 21];
    detail = "The identity is algebraic. A drawing of a spiral is not required.";
  } else if (k === "silver") {
    const s = 1 + Math.sqrt(2);
    rows = rowsFrom([["square side", 1], ["the extra root", 1]]);
    ok = Math.abs(s * s - (2 * s + 1)) < 1e-12;
    lit = "The silver ratio δ = 1 + √2 satisfies δ² = 2δ + 1.";
    series = [1, 2, 5, 12, 29];
    detail = "Checked by expanding both sides.";
  } else if (k === "platonic") {
    const solids = [[4, 6, 4], [8, 12, 6], [6, 12, 8], [20, 30, 12], [12, 30, 20]];
    const names = ["tetrahedron", "cube", "octahedron", "dodecahedron", "icosahedron"];
    rows = rowsFrom(names.map(function (name, i) { return [name + " V−E+F", solids[i][0] - solids[i][1] + solids[i][2]]; }));
    ok = solids.every(function (s) { return s[0] - s[1] + s[2] === 2; }) && solids.length === 5;
    lit = "Five solids. Each has V − E + F = 2.";
    series = solids.map(function (s) { return s[0] - s[1] + s[2]; });
    water = "poly";
    waterArg = 6;
    detail = "Tetrahedron 4,6,4. Cube 8,12,6. Octahedron 6,12,8. Dodecahedron 20,30,12. Icosahedron 12,30,20.";
  } else if (k === "dual") {
    rows = rowsFrom([["cube faces", 6], ["octahedron vertices", 6], ["shared edges", 12]]);
    ok = 6 === 6 && (8 - 12 + 6 === 2) && (6 - 12 + 8 === 2);
    lit = "The cube's 6 faces match the octahedron's 6 vertices. Both keep Euler's 2.";
    series = [8, 12, 6, 6, 12, 8];
    detail = "Faces and vertices trade. Edges stay 12.";
  } else if (k === "seed") {
    rows = rowsFrom([["center", 1], ["ring", 6]]);
    ok = 1 + 6 === 7;
    lit = "One circle and six around it are seven.";
    series = [1, 6, 7];
    water = "poly";
    waterArg = 6;
    detail = "Seven is the seed count. A larger flower is a further ring.";
  } else if (k === "flower") {
    rows = rowsFrom([["center", 1], ["first ring", 6], ["second ring", 12]]);
    ok = 1 + 6 + 12 === 19;
    lit = "1 + 6 + 12 = 19 circles in the two-ring drawing.";
    series = [1, 6, 12, 19];
    detail = "Nineteen is this drawing's count, not a law of nature.";
  } else if (k === "pyth") {
    rows = rowsFrom([["3 squared", 9], ["4 squared", 16], ["5 squared", 25]]);
    ok = 9 + 16 === 25;
    lit = "3² + 4² = 5².";
    series = [3, 4, 5];
    detail = "An integer right triangle. Nothing further is claimed for it.";
  } else if (k === "chords") {
    const n = 6;
    const c = n * (n - 1) / 2;
    rows = rowsFrom([["points", n], ["chords", c]]);
    ok = c === 15;
    lit = "Six points on a circle, every pair joined, make 15 chords.";
    series = [6, 15];
    water = "poly";
    waterArg = 6;
    detail = "C(6, 2) = 15.";
  } else if (k === "tetra") {
    const edges = 4 * 3 / 2;
    rows = rowsFrom([["vertices", 4], ["edges", edges], ["faces", 4]]);
    ok = edges === 6 && 4 - 6 + 4 === 2;
    lit = "Four points, every pair joined, make 6 edges, and 4 − 6 + 4 = 2.";
    series = [4, 6, 4, 2];
    water = "poly";
    waterArg = 3;
    detail = "The complete figure on 4 vertices.";
  } else if (k === "merkaba") {
    rows = rowsFrom([["one tetrahedron", 4], ["the other", 4]]);
    ok = 4 + 4 === 8;
    lit = "Two tetrahedra, counted separately, have 8 vertices.";
    series = [4, 4, 8];
    water = "poly";
    waterArg = 3;
    detail = "Eight is the separate count. A fused star is a further identification.";
  } else if (k === "loshu") {
    const g = [[2, 7, 6], [9, 5, 1], [4, 3, 8]];
    const lines = [];
    for (let i = 0; i < 3; i++) lines.push(g[i][0] + g[i][1] + g[i][2]);
    for (let i = 0; i < 3; i++) lines.push(g[0][i] + g[1][i] + g[2][i]);
    lines.push(g[0][0] + g[1][1] + g[2][2]);
    lines.push(g[0][2] + g[1][1] + g[2][0]);
    rows = rowsFrom([["lines that sum", lines.length], ["the sum", 15]]);
    ok = lines.length === 8 && lines.every(function (n) { return n === 15; });
    lit = "Eight lines of the order-3 square each sum to 15.";
    series = lines;
    water = "grid";
    waterArg = 15;
    detail = "2 7 6 / 9 5 1 / 4 3 8. Rows, columns, and both diagonals.";
  } else if (k === "magic") {
    function mc(n) { return n * (n * n + 1) / 2; }
    const want = { 3: 15, 4: 34, 5: 65, 6: 111, 7: 175, 8: 260, 9: 369 };
    const keys = [3, 4, 5, 6, 7, 8, 9];
    rows = rowsFrom(keys.map(function (n) { return ["order " + n, mc(n)]; }));
    ok = keys.every(function (n) { return mc(n) === want[n]; });
    lit = "Orders 3 through 9 have constants 15, 34, 65, 111, 175, 260, 369.";
    series = keys.map(mc);
    detail = "n(n²+1)/2. A talisman is not part of the sum.";
  } else if (k === "binom") {
    const c = 22 * 21 / 2;
    rows = rowsFrom([["letters", 22], ["pairs", c]]);
    ok = c === 231;
    lit = "C(22, 2) = 231.";
    series = [22, 231];
    detail = "Twenty-two letters, every unordered pair. The gate story is not the count.";
  } else if (k === "tarot") {
    rows = rowsFrom([["trumps", 22], ["suits", 4], ["ranks in a suit", 14]]);
    ok = 22 + 4 * 14 === 78 && 4 * 14 === 56;
    lit = "22 + 4×14 = 78. The suited cards are 56.";
    series = [22, 56, 78];
    detail = "A deck count. A reading of the future is not in the sum.";
  } else if (k === "seventh") {
    rows = rowsFrom([["the block", 142857], ["the divisor", 7]]);
    ok = 142857 * 7 === 999999;
    lit = "142857 × 7 = 999999.";
    series = [1, 4, 2, 8, 5, 7];
    detail = "The repeating block of 1/7. A personality chart is not this product.";
  } else if (k === "hex") {
    rows = rowsFrom([["lines", 6], ["patterns", 64], ["trigrams", 8]]);
    ok = Math.pow(2, 6) === 64 && Math.pow(2, 3) === 8;
    lit = "Six broken-or-whole lines make 64 figures. Three lines make 8.";
    series = [2, 4, 8, 16, 32, 64];
    detail = "Powers of two. A thrown future is not one of them.";
  } else if (k === "tetractys") {
    rows = rowsFrom([["row", 1], ["row", 2], ["row", 3], ["row", 4]]);
    ok = 1 + 2 + 3 + 4 === 10;
    lit = "1 + 2 + 3 + 4 = 10.";
    series = [1, 2, 3, 4, 10];
    detail = "The triangle of the first four integers.";
  } else if (k === "circle") {
    rows = rowsFrom([["signs", 12], ["degrees in a sign", 30]]);
    ok = 12 * 30 === 360;
    lit = "Twelve signs of 30 degrees fill 360.";
    series = [12, 30, 360];
    water = "poly";
    waterArg = 12;
    detail = "A division of the circle. Not a fate.";
  } else if (k === "decans") {
    rows = rowsFrom([["signs", 12], ["decans in a sign", 3]]);
    ok = 12 * 3 === 36;
    lit = "Twelve signs times three decans is 36.";
    series = [12, 3, 36];
    detail = "The ternary cut of the zodiac, as a product.";
  } else if (k === "sandhi") {
    const naive = "su" + "asti" + "ka";
    const word = naive.replace("ua", "va");
    rows = rowsFrom([["su", 2], ["asti", 4], ["ka", 2]]);
    ok = naive === "suastika" && word === "svastika" && word.length === 8;
    lit = "su + asti + ka = suastika. Sandhi ua → va yields svastika.";
    series = [2, 4, 2, 8];
    detail = "Three pieces. The join eats the meeting of u and a.";
  } else if (k === "c4") {
    rows = rowsFrom([["arms", 4], ["degrees of one turn", 90]]);
    ok = 4 * 90 === 360;
    lit = "Four arms, each a quarter turn, close the circle: 4 × 90 = 360.";
    series = [0, 90, 180, 270, 360];
    water = "hooks";
    waterArg = 4;
    detail = "One arm, copied by rotation. The drawing is the geometry, in plain ink.";
  } else if (k === "turns") {
    const degs = [0, 90, 180, 270];
    rows = rowsFrom(degs.map(function (d) { return [d + "°", d]; }));
    ok = degs.length === 4 && degs[0] + degs[1] + degs[2] + degs[3] === 540 && 4 * 90 === 360;
    lit = "The four positions are 0, 90, 180, and 270. Four steps return to the start.";
    series = degs;
    water = "hooks";
    waterArg = 4;
    detail = "The cyclic group of order 4.";
  } else if (k === "scripts") {
    const dev = "स्वस्तिक";
    const lat = "svastika";
    rows = rowsFrom([["Latin letters", lat.length], ["Devanagari code points", Array.from(dev).length], ["scripts named", 2]]);
    ok = lat.length === 8 && Array.from(dev).length === 8 && ("su" + "asti" + "ka").replace("ua", "va") === lat;
    lit = "svastika has 8 Latin letters. The Devanagari स्वस्तिक on this page has 8 code points. The sandhi still yields svastika.";
    series = [8, 8, 2];
    detail = "Two scripts are written here. A reconstructed tongue is not a third script on the page.";
  } else if (k === "hundred") {
    rows = rowsFrom([["rooms", 5], ["pages in a room", 20]]);
    ok = 5 * 20 === 100;
    lit = "Five rooms times twenty pages is 100.";
    series = [5, 20, 100];
    detail = "Russian, ternary, geometry, the count, and the root.";
  } else {
    ok = false;
    lit = "unknown proof";
  }

  if (!ok) {
    return { ok: false, lit: "LIT FAIL " + spec.slug, rows: rows, series: series, water: water, waterArg: waterArg, detail: detail };
  }
  return {
    ok: true,
    lit: lit,
    amber: spec.amber,
    wall: spec.wall || roomWall[spec.room],
    rows: rows,
    series: series,
    water: water,
    waterArg: waterArg,
    detail: detail,
    sum: sum(rows)
  };
}

const pages = [
  ["cyrillic-thirty-three", "The Thirty-Three", "the alphabet still counted", "russian", "alpha", "Modern Russian writes thirty-three letters, and the page splits them."],
  ["the-seventh-letter", "The Seventh Letter", "where yo sits", "russian", "yo", "Ё is not an afterthought pasted at the end."],
  ["the-onegin-scheme", "The Onegin Scheme", "fourteen seats, no verse copied", "russian", "scheme", "The rhyme scheme has a length. The poem is not pasted here."],
  ["fifty-six-seats", "Fifty-Six Seats", "four beats across fourteen lines", "russian", "stress", "Iambic tetrameter offers four seats a line."],
  ["the-chebyshev-bound", "The Chebyshev Bound", "one guarantee for any shape", "russian", "cheby", "Any distribution sits under 1/k². The page checks k = 2 and k = 3."],
  ["the-short-triangle", "The Short Triangle", "angles that do not reach 180", "russian", "defect", "Lobachevsky's geometry lets the angles fall short. This page adds one example."],
  ["the-kept-steps", "The Kept Steps", "odd steps only", "russian", "doubles", "Halve one factor and double the other. Keep the step only when the factor is odd."],
  ["the-thirteen-days", "The Thirteen Days", "the 1918 gap", "russian", "days", "When Russia dropped the old calendar, the first became the fourteenth."],
  ["kazak", "Kazak", "a word that returns", "russian", "pal", "казак", 5, "The word reads the same from either end."],
  ["sofia", "Sofia", "five letters of the keeper's name", "russian", "len", "София", 5, "Sofya, Sophia, София. This page counts the Cyrillic spelling."],
  ["mir", "Mir", "one spelling, named once", "russian", "len", "мир", 3, "Three letters. The double meaning, peace and world, is a lexicon note, not a second spelling."],
  ["the-nested-dolls", "The Nested Dolls", "seven shells, six gaps", "russian", "nest", "A matryoshka is dolls inside dolls. Seven is the set chosen here."],
  ["the-rod-of-ten", "The Rod of Ten", "one wire of a schoty", "russian", "beads", "A common Russian abacus rod holds ten beads. Ten is assigned, then counted."],
  ["the-troika", "The Troika", "three horses", "russian", "sum", [["horses", 3]], 3, "Three abreast is the whole team.", "Three horses are the assigned team."],
  ["three-strings", "Three Strings", "the balalaika", "russian", "sum", [["strings", 3], ["gaps between them", 2]], 5, "Three strings leave two gaps.", "The instrument is named. The count is the strings."],
  ["five-domes", "Five Domes", "a quincunx of roofs", "russian", "sum", [["center", 1], ["around the center", 4]], 5, "One dome and four around it.", "Five domes are a common church plan, assigned here, not surveyed."],
  ["brusentsov", "Brusentsov", "Moscow, a machine of three", "russian", "pow", null, null, "Setun's digit has three states.", "The machine is 1958, Moscow State. The states are the arithmetic."],
  ["two-signs", "The Two Signs", "hard and soft", "russian", "sum", [["hard sign", 1], ["soft sign", 1]], 2, "Ъ and Ь are signs, not vowels.", "They sit inside the thirty-three. They do not add a third vowel row."],
  ["ten-vowels", "Ten Vowels", "the vowel row", "russian", "sum", [["vowels named", 10]], 10, "А Е Ё И О У Ы Э Ю Я.", "Ten names, listed as a row of the alphabet already counted."],
  ["twenty-one-consonants", "Twenty-One Consonants", "the rest of the sound", "russian", "sum", [["consonants named", 21]], 21, "The consonant row, apart from the two signs.", "Twenty-one is the length of that row, not a mystic rank."],
  ["shalash", "Shalash", "a hut that reads both ways", "russian", "pal", "шалаш", 5, "The word reads the same from either end.", "A palindrome is a spelling. It is not a proverb."],
  ["moskva", "Moskva", "six letters of the city", "russian", "len", "Москва", 6, "The Cyrillic spelling of Moscow, counted on this page.", "Six letters. The city is not a claim about its people."],
  ["twelve-months", "Twelve Months", "the civil year", "russian", "sum", [["months", 12]], 12, "Twelve months make the civil year.", "The thirteen-day gap of 1918 is a different page. Twelve is the count the year kept."],
  ["four-seasons", "Four Seasons", "the year in quarters", "russian", "sum", [["winter", 1], ["spring", 1], ["summer", 1], ["autumn", 1]], 4, "Four seasons.", "Named as the year's quarters. Not a rite."],

  ["three-states", "Three States", "minus, zero, plus", "ternary", "sum", [["minus", -1], ["zero", 0], ["plus", 1]], 0, "A trit is −1, 0, or +1. The three of them sum to zero.", "Balanced ternary, the digit Setun used."],
  ["two-trits", "Two Trits", "nine patterns", "ternary", "pow", null, null, "Two trits cover nine patterns.", "3²."],
  ["seven-trits", "Seven Trits", "2187 patterns", "ternary", "pow", null, null, "Seven trits cover 2187 patterns.", "3⁷."],
  ["four-trit-range", "The Four-Trit Range", "from minus forty to forty", "ternary", "range", null, null, "Four trits name every integer from −40 to 40.", "81 patterns. The middle one is zero."],
  ["the-sign-flip", "The Sign Flip", "negate by turning every trit", "ternary", "negate", "Negation does not need a minus key. It flips every digit."],
  ["the-middle-third", "The Middle Third", "what the Cantor cut leaves", "ternary", "cantor", null, null, "Each cut throws away the middle third and keeps two pieces.", "After four cuts the length is 16/81."],
  ["three-triangles", "Three Triangles", "a Sierpinski step", "ternary", "pow", null, null, "Each step keeps three copies.", "3⁵ small triangles after five steps."],
  ["the-cheaper-base", "The Cheaper Base", "three against two", "ternary", "econ", "The radix cost b/ln b is lower at 3 than at 2."],
  ["residues", "Three Residues", "zero, one, and two", "ternary", "sum", [["0", 0], ["1", 1], ["2", 2]], 3, "Ordinary base 3 still has only three remainders.", "They sum to 3. Balanced digits are the other notation."],
  ["the-round-trip", "The Round Trip", "there and back", "ternary", "round", [0, 1, 2, 4, 7, 13, 40], null, "A handful of integers goes to digits and returns."],
  ["thirteen-in-trits", "Thirteen in Trits", "one number, written balanced", "ternary", "round", [13], null, "Thirteen is the water-window sample."],
  ["no-digit-two", "No Digit Two", "balanced form never writes 2", "ternary", "round", [2, 5, 8, 26], null, "The numbers that want a digit 2 in ordinary base 3 are rewritten with −1."],
  ["nine-cells", "Nine Cells", "a three-by-three table", "ternary", "pow", null, null, "Two inputs of three values fill nine cells.", "3² again, read as a logic table's size. The table is not a doctrine."],
  ["place-values", "Place Values", "five positive powers", "ternary", "weights", "The positive weights of five trits."],
  ["depth-of-eighty-one", "Depth of Eighty-One", "an exact power", "ternary", "log3", "81 is reached at depth 4."],
  ["all-marks-up", "All Marks Up", "five plus-ones", "ternary", "rep", "A trit string of only +1."],
  ["nine-to-the-second", "Nine to the Second", "already waiting above", "ternary", "pow", null, null, "The same nine, named as a square.", "Kept so the room can show 9 beside 81 and 2187."],
  ["the-sixth-power", "The Sixth Power", "729", "ternary", "pow", null, null, "3⁶."],
  ["the-ninth-power", "The Ninth Power", "19683", "ternary", "pow", null, null, "3⁹. A machine word of nine trits would have this many patterns.", "The word width is amber history. The power is the arithmetic."],
  ["deeper-dust", "Deeper Dust", "six cuts", "ternary", "cantor", null, null, "Six middle-third cuts.", "Length left: 64/729."],
  ["the-cube-of-three", "The Cube of Three", "twenty-seven patterns", "ternary", "pow", null, null, "Three trits.", "3³ = 27. The power is the count of patterns."],
  ["the-eighth-power", "The Eighth Power", "eight trits", "ternary", "pow", null, null, "Eight trits.", "3⁸. A word of eight trits is a count, not a machine claimed here."],
  ["two-cuts", "Two Cuts", "four ninths remain", "ternary", "cantor", null, null, "Two middle-third cuts.", "The length left is 4/9."],
  ["forty-in-trits", "Forty in Trits", "both ends of the four-trit range", "ternary", "round", [40, -40, 0], null, "The ends of the four-trit range, and zero, survive the trip."],

  ["the-vesica", "The Vesica", "height root three", "geometry", "vesica", "Two equal circles, centers one radius apart."],
  ["three-sixties", "Three Times Sixty", "the equilateral", "geometry", "angle", null, null, "Three corners of 60 degrees.", "Interior sum 180."],
  ["the-pentagon-sum", "The Pentagon Sum", "five corners", "geometry", "angle", null, null, "A pentagon's interior.", "540 degrees."],
  ["the-hexagon-sum", "The Hexagon Sum", "six corners", "geometry", "angle", null, null, "A hexagon's interior.", "720 degrees."],
  ["cassini-six", "Cassini at Six", "an integer near the gold", "geometry", "cassini", null, null, "Fibonacci, the even case."],
  ["cassini-seven", "Cassini at Seven", "the odd case", "geometry", "cassini", null, null, "The sign flips with the index."],
  ["the-golden-identity", "The Golden Identity", "phi squared", "geometry", "phi", "The defining equation, not a spiral cult."],
  ["the-silver-identity", "The Silver Identity", "one plus root two", "geometry", "silver", "The square's diagonal ratio, as an equation."],
  ["five-solids", "Five Solids", "Euler on each of them", "geometry", "platonic", "Tetrahedron, cube, octahedron, dodecahedron, icosahedron."],
  ["the-dual-pair", "The Dual Pair", "cube and octahedron", "geometry", "dual", "Faces of one are vertices of the other."],
  ["the-seed", "The Seed", "seven circles", "geometry", "seed", "The first ring around a center."],
  ["two-rings", "Two Rings", "nineteen circles", "geometry", "flower", "The drawing with a second ring of twelve."],
  ["three-four-five", "Three Four Five", "the integer right triangle", "geometry", "pyth", "The smallest integer triple."],
  ["fifteen-chords", "Fifteen Chords", "six points, every pair", "geometry", "chords", "The complete graph drawn on a circle."],
  ["four-points", "Four Points", "the tetrahedron's edges", "geometry", "tetra", "Every pair among four points."],
  ["eight-vertices", "Eight Vertices", "two tetrahedra, counted apart", "geometry", "merkaba", "The star is a picture. The eight is the separate count."],
  ["the-order-three-square", "The Order-Three Square", "eight lines of fifteen", "geometry", "loshu", "The old square of order 3, added by hand on the page."],
  ["square-angles", "Four Right Angles", "the square itself", "geometry", "sum", [["right angle", 90], ["right angle", 90], ["right angle", 90], ["right angle", 90]], 360, "Four right angles close the square."],
  ["six-faces", "Six Faces", "the cube will not grow a seventh", "geometry", "sum", [["faces", 6], ["vertices", 8], ["edges", 12]], 26, "6 + 8 + 12 = 26.", "Nets of the cube are a further count, left amber. Euler's 2 is on the five-solids page."],
  ["twelve-around", "Twelve Around", "the second ring alone", "geometry", "sum", [["second ring", 12]], 12, "Twelve is the ring. Nineteen needs the inner seven as well."],
  ["the-heptagon-sum", "The Heptagon Sum", "seven corners", "geometry", "angle", null, null, "A heptagon's interior.", "900 degrees."],
  ["the-octagon-sum", "The Octagon Sum", "eight corners", "geometry", "angle", null, null, "An octagon's interior.", "1080 degrees."],
  ["the-nonagon-sum", "The Nonagon Sum", "nine corners", "geometry", "angle", null, null, "A nonagon's interior.", "1260 degrees."],
  ["cassini-eight", "Cassini at Eight", "the next even case", "geometry", "cassini", null, null, "Fibonacci, one step past seven."],

  ["ten-sephirot", "Ten Sephirot", "nodes, not a power", "count", "sum", [["nodes", 10]], 10, "The tree's nodes, as a count.", "Ten is the usual list. What the nodes govern is not shown."],
  ["thirty-two", "Thirty-Two", "nodes plus paths", "count", "sum", [["nodes", 10], ["paths", 22]], 32, "10 + 22 = 32.", "Twenty-two paths are the usual drawing."],
  ["two-hundred-thirty-one", "Two Hundred Thirty-One", "every pair of letters", "count", "binom", "Twenty-two letters, unordered pairs."],
  ["seventy-eight", "Seventy-Eight", "a deck's arithmetic", "count", "tarot", "Trumps plus four suits of fourteen."],
  ["the-seven-constants", "The Seven Constants", "orders three through nine", "count", "magic", "The magic constants of the seven small orders."],
  ["five-phases", "Five Phases", "the palette's own count", "count", "sum", [["wood", 1], ["fire", 1], ["earth", 1], ["metal", 1], ["water", 1]], 5, "The five phases named by this pentaptych.", "A generating cycle is a story about the five. The five is the count."],
  ["seven-metals", "Seven Metals", "the old list", "count", "sum", [["metals in the old list", 7]], 7, "Seven names in the classical list.", "Turning one metal into another is not shown, and it is not granted."],
  ["sixty-four", "Sixty-Four", "six lines, two choices", "count", "hex", "The hexagram count is a power of two."],
  ["the-repeating-seven", "The Repeating Seven", "one divided by seven", "count", "seventh", "The block 142857, proved by multiplication."],
  ["the-circle-of-signs", "The Circle of Signs", "twelve times thirty", "count", "circle", "A circle cut into twelve."],
  ["thirty-six-decans", "Thirty-Six Decans", "three in each sign", "count", "decans", "The zodiac's ternary cut."],
  ["the-tetractys", "The Tetractys", "the first four integers", "count", "tetractys", "A triangle that sums to ten."],
  ["twenty-eight", "Twenty-Eight", "four weeks added", "count", "sum", [["week", 7], ["week", 7], ["week", 7], ["week", 7]], 28, "Four weeks of 7 days add to 28.", "Lunar mansions are counted 27 or 28 by different lists. Twenty-eight here is four sevens."],
  ["fifty-six-cards", "Suits and Ranks", "the labels beside the deck", "count", "sum", [["suits", 4], ["ranks", 14]], 18, "The labels 4 and 14 add to 18.", "Four times fourteen is 56 suited cards. That product is named here and proved on the seventy-eight page."],
  ["twenty-two-letters", "Twenty-Two Letters", "the path count alone", "count", "sum", [["letters", 22]], 22, "Twenty-two, before they are paired."],
  ["nine-points", "Nine Points", "a nine-point figure", "count", "sum", [["points", 9]], 9, "Nine points around a circle.", "What a person 'is' on that figure is not a result."],
  ["order-seven", "Order Seven", "the constant beside the order", "count", "sum", [["order", 7], ["constant", 175]], 182, "The labels 7 and 175 add to 182.", "The line sum 7×(49+1)/2 = 175 is proved with the other orders on the seven-constants page."],
  ["eight-trigrams", "Eight Trigrams", "three lines beside eight patterns", "count", "sum", [["lines", 3], ["patterns", 8]], 11, "The labels 3 and 8 add to 11.", "2³ = 8 is proved on the sixty-four page, which builds the powers of two."],
  ["one-and-the-ring", "One and the Ring", "metatron's count, assigned", "count", "sum", [["center", 1], ["around", 12]], 13, "Some drawings place twelve around one.", "Thirteen is that drawing. It is assigned."],
  ["the-lo-shu-again", "Fifteen, Again", "the same square, the constant alone", "count", "loshu", "The order-3 constant, repeated so the count room holds the square too."],
  ["one-hundred-twenty-eight", "One Hundred Twenty-Eight", "seven bits", "count", "pow", null, null, "Seven yes-or-no lines.", "2⁷ = 128. A fate is not one of the patterns."],
  ["two-hundred-fifty-six", "Two Hundred Fifty-Six", "eight bits", "count", "pow", null, null, "Eight yes-or-no lines.", "2⁸ = 256. The count is the patterns, not a destiny."],
  ["one-thousand-twenty-four", "One Thousand Twenty-Four", "ten bits", "count", "pow", null, null, "Ten yes-or-no lines.", "2¹⁰ = 1024."],
  ["nine-times-nine", "Nine Times Nine", "the square of nine", "count", "pow", null, null, "Nine by nine.", "9² = 81. The order-3 line of 15 is a different page."],

  ["su-asti-ka", "Su, Asti, Ka", "the three pieces of the word", "root", "sandhi", "The word is a small sentence that survived a join."],
  ["eight-letters", "Eight Letters", "the Latin spelling", "root", "len", "swastika", 8, "The English spelling of the Sanskrit word."],
  ["the-devanagari", "The Devanagari", "the same word in its script", "root", "scripts", "स्वस्तिक beside svastika."],
  ["four-arms", "Four Arms", "a quarter turn, four times", "root", "c4", "The ancient figure is one arm rotated. The ink is plain."],
  ["four-positions", "Four Positions", "zero, ninety, one-eighty, two-seventy", "root", "turns", "The rotation group, written as degrees."],
  ["not-the-flag", "Not the Flag", "a word is not a regime", "root", "c4", "In the 1920s and 1930s a political party tilted a hooked cross onto a flag. That regime murdered millions. The Sanskrit word does not mean that flag, and this page does not draw the flag."],
  ["two-directions", "Two Directions", "clockwise and the other way", "root", "sum", [["one facing", 1], ["the other facing", 1]], 2, "The same fourfold turn has two orientations.", "Buddhist and other uses name both. Neither orientation is the flag."],
  ["four-gammas", "Four Gammas", "the Greek name", "root", "sum", [["gamma", 1], ["gamma", 1], ["gamma", 1], ["gamma", 1]], 4, "Gammadion: four Γ shapes.", "A Greek name for the same quarter-turn figure."],
  ["the-fylfot", "The Fylfot", "an English folk name", "root", "len", "fylfot", 6, "Six letters in one old English name for the figure."],
  ["four-destinies", "Four Destinies", "a Jain reading, marked amber", "root", "sum", [["arms", 4]], 4, "Four arms. A teaching maps them to four destinies.", "The map is a teaching. It is not a census of souls."],
  ["the-kolovrat", "The Kolovrat", "a Russian word for a crank", "root", "len", "коловорот", 9, "Коловорот names a thing that turns. A modern claim that the hooked cross is an ancient Slavic racial sign is not attested on this page."],
  ["it-is-well", "It Is Well", "three words in the gloss", "root", "sum", [["it", 1], ["is", 1], ["well", 1]], 3, "The gloss of svasti is 'it is well.'", "A gloss is a translation. It is not a charm."],
  ["two-scripts", "Two Scripts", "Latin and Devanagari, and no third", "root", "scripts", "What is written can be counted. A lost mother-tongue of everybody is not written here."],
  ["language-not-race", "Language, Not Race", "the category error", "root", "sum", [["a language family", 1], ["a blood test", 0]], 1, "Indo-European names languages. It does not name a race. The word Aryan was dragged from a language label onto a blood myth. The myth is false.", "One stands for the language family. Zero stands for the blood test, because there is nothing there to add."],
  ["the-loanword", "The Loanword", "how the English word arrived", "root", "sandhi", "English borrowed the Sanskrit word. The join that makes the spelling is still the sandhi on this page."],
  ["the-suffix-ka", "The Suffix Ka", "a small ending", "root", "len", "ka", 2, "Ka is the diminutive piece. Two letters in the analysis."],
  ["asti", "Asti", "it is", "root", "len", "asti", 4, "Asti is 'it is,' from the verb to be."],
  ["su", "Su", "well", "root", "len", "su", 2, "Su is the piece that means well or good."],
  ["the-hundred", "The Hundred", "five rooms, twenty each", "root", "hundred", "This is page one hundred only in the count. The rooms are the point."],
  ["the-word-remains", "The Word Remains", "svastika, once more, as grammar", "root", "sandhi", "The last page of the root room repeats the only identity the word needs."],
  ["svasti", "Svasti", "the stem before ka", "root", "len", "svasti", 6, "Six letters, after the join and before ka.", "su + asti, with ua changed to va, is svasti. The suffix ka is a different page. A gloss is not a charm."],
  ["tri", "Tri", "three, as a number-word", "root", "len", "tri", 3, "Tri is a spelling of three.", "Three letters name the number three. The word does not bless the three."],
  ["panca", "Panca", "five, in this spelling", "root", "len", "panca", 5, "Panca, written here without a tilde, has five letters.", "The marked spelling pañca is a further convention. This page counts the letters it writes."],
  ["catur", "Catur", "four, and the word is longer", "root", "len", "catur", 5, "Catur has five letters and means four.", "The length of the word is not the number it names."]
];

const powArgs = {
  "two-trits": [3, 2, 9],
  "seven-trits": [3, 7, 2187],
  "three-triangles": [3, 5, 243],
  "nine-cells": [3, 2, 9],
  "nine-to-the-second": [3, 2, 9],
  "the-sixth-power": [3, 6, 729],
  "the-ninth-power": [3, 9, 19683],
  "brusentsov": [3, 1, 3],
  "the-cube-of-three": [3, 3, 27],
  "the-eighth-power": [3, 8, 6561],
  "one-hundred-twenty-eight": [2, 7, 128],
  "two-hundred-fifty-six": [2, 8, 256],
  "one-thousand-twenty-four": [2, 10, 1024],
  "nine-times-nine": [9, 2, 81]
};
const cantorN = { "the-middle-third": 4, "deeper-dust": 6, "two-cuts": 2 };
const angleArgs = {
  "three-sixties": [3, 180],
  "the-pentagon-sum": [5, 540],
  "the-hexagon-sum": [6, 720],
  "the-heptagon-sum": [7, 900],
  "the-octagon-sum": [8, 1080],
  "the-nonagon-sum": [9, 1260]
};
const cassiniN = { "cassini-six": 6, "cassini-seven": 7, "cassini-eight": 8 };

function specOf(row) {
  const slug = row[0], title = row[1], em = row[2], room = row[3], proof = row[4];
  const spec = { slug: slug, title: title, em: em, room: room, proof: proof, focus: row[row.length - 1] };
  if (proof === "pal" || proof === "len") {
    spec.arg = row[5];
    spec.n = row[6];
    spec.focus = row[7];
    spec.amber = row[8] || "Named beside the identity. The identity is what the page checks.";
  } else if (proof === "sum") {
    spec.parts = row[5];
    spec.n = row[6];
    spec.lit = row[7];
    spec.focus = row[8] || row[7];
    spec.amber = row[9] || "Assigned or named, beside the count.";
  } else if (proof === "pow") {
    const a = powArgs[slug];
    spec.a = a[0]; spec.b = a[1]; spec.c = a[2];
    spec.focus = row[7];
    spec.amber = row[8] || "The power is recomputed on the page.";
  } else if (proof === "cantor") {
    spec.n = cantorN[slug];
    spec.focus = row[7];
    spec.amber = row[8] || "The cut is the middle third.";
  } else if (proof === "angle") {
    spec.n = angleArgs[slug][0];
    spec.sum = angleArgs[slug][1];
    spec.focus = row[7];
    spec.amber = row[8] || "Regular polygon, Euclidean degrees.";
  } else if (proof === "cassini") {
    spec.n = cassiniN[slug];
    spec.focus = row[7];
    spec.amber = "Fibonacci numbers as integers.";
  } else if (proof === "range") {
    spec.n = slug === "four-trit-range" ? 4 : 0;
    spec.count = 81;
    spec.half = 40;
    spec.focus = row[7];
    spec.amber = row[8] || "Every integer in the range converts and returns.";
  } else if (proof === "round") {
    spec.nums = row[5];
    spec.focus = row[7];
    spec.amber = "Balanced digits are −1, 0, +1.";
  } else {
    spec.focus = row[5];
    spec.amber = row[6] || "Named beside the identity. The identity is what the page checks.";
  }
  if (!spec.amber) spec.amber = "Named beside the identity. The identity is what the page checks.";
  return spec;
}

const grounds = [
  ["#12151c", "#171b24", "#1a1f2a", "#2a3140", "slate-dusk"],
  ["#0e1210", "#141a16", "#171e19", "#2a332c", "pine-night"],
  ["#14110e", "#1c1814", "#221c16", "#3a3228", "lamp-brown"],
  ["#10141c", "#161c28", "#1a2230", "#2c384c", "ink-blue"],
  ["#160e12", "#1e1418", "#24181c", "#3d2830", "wine-ash"]
];
const roomName = {
  russian: "the Russian",
  ternary: "the ternary",
  geometry: "the geometry",
  count: "the count",
  root: "the root"
};

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function pageHtml(spec, m) {
  const g = grounds[Math.abs(hash(spec.slug)) % grounds.length];
  const room = roomName[spec.room];
  const foot = "Earth holds the source. Wood names the build. Metal draws the series. Fire toggles the parts, and the sum on the button is only the parts still lit. Water holds the figure. " + m.detail + " " + m.lit;
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(spec.title)} · Sophia · Five-Element Pentaptych</title>
<style>
:root{
  --ground:${g[0]};--ground-2:${g[1]};--card:${g[2]};--rule:${g[3]};--rule-2:#3a4354;
  --ink:#e6ebf2;--faint:#8592a4;--fainter:#4a5568;
  --earth:#d9a441;--wood:#4fbf8f;--metal:#c7d0dc;--fire:#ff6a3d;--water:#4a8fff;
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:var(--ground);color:var(--ink);font:400 12px/1.5 "IBM Plex Mono",ui-monospace,Menlo,monospace}
body{padding:18px 16px 40px}
.wrap{max-width:1500px;margin:0 auto}
.eyebrow{font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--faint);margin-bottom:9px}
h1{font:600 26px/1.05 "IBM Plex Sans","Helvetica Neue",sans-serif;letter-spacing:-.02em;color:var(--ink)}
h1 em{font-style:normal;color:var(--fire)}
.sub{color:var(--faint);font-size:12.5px;max-width:104ch;line-height:1.6;margin-top:9px}
.sub b{color:var(--ink);font-weight:400}
.elrow{display:flex;gap:6px;margin:12px 0 4px;flex-wrap:wrap;font-size:9px;letter-spacing:.1em;text-transform:uppercase}
.elrow span{padding:2px 8px;border-radius:10px;border:1px solid currentColor}
.master{display:flex;gap:12px;align-items:center;margin:14px 0;padding:11px 14px;background:var(--card);border:1px solid var(--rule);border-radius:8px;flex-wrap:wrap}
.master .lbl{font-size:11px;color:var(--faint)}
.master button{font:inherit;font-size:11px;color:var(--ink);background:var(--ground-2);border:1px solid var(--rule);border-radius:7px;padding:8px 13px;cursor:pointer}
.master button.run{border-color:var(--fire);color:var(--fire);font-weight:600}
.master .v{margin-left:auto;font-variant-numeric:tabular-nums;color:var(--fire);font-weight:600}
.grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;align-items:stretch}
@media(max-width:1180px){.grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:640px){.grid{grid-template-columns:1fr}}
.win{background:var(--card);border:1px solid var(--rule);border-radius:9px;overflow:hidden;display:flex;flex-direction:column;min-height:540px;border-top:2px solid var(--el)}
.win.earth{--el:var(--earth)} .win.wood{--el:var(--wood)} .win.metal{--el:var(--metal)} .win.fire{--el:var(--fire)} .win.water{--el:var(--water)}
.win .hd{padding:10px 12px;border-bottom:1px solid var(--rule);background:var(--ground-2)}
.win .hd .tag{font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--el)}
.win .hd .el{float:right;font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:var(--el);opacity:.75}
.win .hd .ttl{font:600 12.5px "IBM Plex Sans",sans-serif;color:var(--ink);margin-top:2px}
.win .bd{padding:11px;flex:1;display:flex;flex-direction:column;gap:9px}
.win canvas{width:100%;display:block;border-radius:6px;background:var(--ground)}
.txt{font-size:10.5px;color:var(--faint);line-height:1.5}
.txt b{color:var(--ink);font-weight:400}
.stamp{display:inline-block;font-size:8.5px;padding:1px 6px;border-radius:10px;border:1px solid currentColor;margin-right:3px}
.stamp.lit{color:var(--wood)} .stamp.amber{color:var(--earth)} .stamp.wall{color:var(--fire)}
.ledger{font-size:10px;line-height:1.65}
.ledger .who{color:var(--earth);font-weight:600}
.ledger .who.c{color:var(--water)} .ledger .who.both{color:var(--wood)}
.winrun{width:100%;font:inherit;font-size:11px;font-weight:600;color:var(--el);background:var(--ground-2);border:1px solid var(--el);border-radius:7px;padding:9px;cursor:pointer}
.rows{display:flex;flex-direction:column;gap:4px}
.rw{display:flex;align-items:center;gap:6px;font-size:10px;padding:4px 6px;border-radius:5px;background:var(--ground-2);cursor:pointer;border:1px solid transparent}
.rw.on{border-color:var(--fire)}
.rw .sw{width:9px;height:9px;border-radius:2px;flex-shrink:0}
.rw .nm{flex:1}
.rw .od{color:var(--faint);font-variant-numeric:tabular-nums}
.report{margin-top:auto;font-size:10px;padding:8px 9px;border-radius:6px;background:var(--ground-2);border:1px solid var(--rule)}
.report .r{display:flex;justify-content:space-between;line-height:1.75}
.report .r b{font-weight:400}
.verdict{margin-top:8px;padding:9px;border-radius:6px;text-align:center;font-weight:600;font-size:11px;background:rgba(217,164,65,0.1);color:var(--earth);border:1px solid rgba(217,164,65,0.35)}
.foot{color:var(--fainter);font-size:11px;line-height:1.7;margin-top:18px;max-width:112ch}
.foot b{color:var(--faint);font-weight:400}
</style></head>
<body>
<div class="wrap">
  <div class="eyebrow">Sophia pentaptych · five-element palette (Earth·Wood·Metal·Fire·Water) · ground: ${g[4]} · room: ${esc(room)}</div>
  <h1>${esc(spec.title)} — <em>${esc(spec.em)}</em></h1>
  <p class="sub">${esc(spec.focus)} The identity is checked on load. Toggle a part and the fire window adds only what is still on.</p>
  <div class="elrow">
    <span style="color:var(--earth)">W1 earth · source</span><span style="color:var(--wood)">W2 wood · built</span><span style="color:var(--metal)">W3 metal · 1D</span><span style="color:var(--fire)">W4 fire · interactive</span><span style="color:var(--water)">W5 water · figure</span>
  </div>
  <div class="master">
    <span class="lbl">${esc(room)}</span>
    <button class="run" id="runAll">▸ run the series</button>
    <button id="reset">↺ reset</button>
    <span class="v" id="vClock">step 0</span>
  </div>
  <div class="grid">
    <div class="win earth">
      <div class="hd"><span class="el">earth</span><div class="tag">W1 · source</div><div class="ttl">What it is</div></div>
      <div class="bd">
        <div class="txt">${esc(spec.focus)}</div>
        <div class="txt"><span class="stamp lit">LIT</span> ${esc(m.lit)}<br><span class="stamp amber">AMBER</span> ${esc(m.amber)}<br><span class="stamp wall">WALL</span> ${esc(m.wall)}</div>
        <div class="report">
          <div class="r"><span>room</span><b>${esc(room)}</b></div>
          <div class="r"><span>proof</span><b>${esc(spec.proof)}</b></div>
        </div>
        <div class="verdict" id="verdict">checking</div>
      </div>
    </div>
    <div class="win wood">
      <div class="hd"><span class="el">wood</span><div class="tag">W2 · contributions</div><div class="ttl">Built together</div></div>
      <div class="bd">
        <div class="txt" style="color:var(--wood)">One page, the August shape.</div>
        <div class="ledger">
          <div><span class="who">ROOT0 →</span> the ask: Sophia pages in the five-window form of the August precipice file.</div>
          <div style="margin-top:7px"><span class="who c">Grok →</span> this identity, ${esc(spec.proof)}, checked in the page rather than described.</div>
          <div style="margin-top:7px"><span class="who both">together →</span> Earth to Water, ground ${g[4]}.</div>
        </div>
        <div class="report">
          <div class="r"><span>build</span><b>${esc(spec.slug)}</b></div>
          <div class="r"><span>palette</span><b>5-element</b></div>
          <div class="r"><span>ground</span><b>${g[4]}</b></div>
        </div>
      </div>
    </div>
    <div class="win metal">
      <div class="hd"><span class="el">metal</span><div class="tag">W3 · 1D view</div><div class="ttl">The series</div></div>
      <div class="bd">
        <canvas id="c3" width="260" height="160"></canvas>
        <div class="txt">${esc(m.detail)}</div>
        <button class="winrun" id="run3">▸ run the series</button>
        <div class="report">
          <div class="r"><span>step</span><b id="p3">0</b></div>
          <div class="r"><span>value</span><b id="h3">—</b></div>
        </div>
      </div>
    </div>
    <div class="win fire">
      <div class="hd"><span class="el">fire</span><div class="tag">W4 · 2D + interactive</div><div class="ttl">The parts · toggle</div></div>
      <div class="bd">
        <div class="rows" id="rows"></div>
        <canvas id="c4" width="260" height="80"></canvas>
        <div class="txt">Click a part off. The sum uses only the parts still on.</div>
        <button class="winrun" id="run4">▸ recompute sum</button>
        <div class="report">
          <div class="r"><span>sum of parts on</span><b id="p4">—</b></div>
          <div class="r"><span>parts on</span><b id="h4">—</b></div>
        </div>
      </div>
    </div>
    <div class="win water">
      <div class="hd"><span class="el">water</span><div class="tag">W5 · figure</div><div class="ttl">The figure</div></div>
      <div class="bd">
        <canvas id="c5" width="260" height="150"></canvas>
        <div class="txt">${esc(m.detail)}</div>
        <button class="winrun" id="run5">▸ draw again</button>
        <div class="report">
          <div class="r"><span>figure</span><b id="p5">${esc(m.water)}</b></div>
          <div class="r"><span>mark</span><b id="h5">${esc(String(m.waterArg))}</b></div>
        </div>
      </div>
    </div>
  </div>
  <div class="foot"><b>Reading the Pentaptych.</b> ${esc(foot)}</div>
</div>
<script>
(function(){
var SPEC=${JSON.stringify({ rows: m.rows, series: m.series.length ? m.series : [m.sum], water: m.water, waterArg: m.waterArg, lit: m.lit, sum: m.sum })};
var $=function(id){return document.getElementById(id);};
var step=0;
var rows=SPEC.rows.map(function(r){return {name:r.name,n:r.n,col:r.col,on:true};});
function liveSum(){var s=0,k=0;rows.forEach(function(r){if(r.on){s+=r.n;k++;}});return {s:s,k:k};}
var c3=$("c3"),g3=c3.getContext("2d"),c4=$("c4"),g4=c4.getContext("2d"),c5=$("c5"),g5=c5.getContext("2d");
var DPR=Math.min(window.devicePixelRatio||1,2);
function fitAll(){[[c3,g3,160,260],[c4,g4,80,260],[c5,g5,150,260]].forEach(function(o){var w=o[0].clientWidth||260;o[0].width=w*DPR;o[0].height=w*o[2]/o[3]*DPR;o[1].setTransform(DPR,0,0,DPR,0,0);o[0]._w=w;o[0]._h=w*o[2]/o[3];});}
function drawW3(){
  var W=c3._w,H=c3._h,g=g3,s=SPEC.series;g.clearRect(0,0,W,H);g.fillStyle=getComputedStyle(document.body).backgroundColor;g.fillRect(0,0,W,H);
  var min=Math.min.apply(null,s), max=Math.max.apply(null,s); if(max===min){max=min+1;}
  g.strokeStyle="#c7d0dc";g.lineWidth=2;g.beginPath();
  for(var i=0;i<s.length;i++){var x=s.length===1?W/2:i/(s.length-1)*W; var y=H-((s[i]-min)/(max-min))*(H-24)-12; if(i===0)g.moveTo(x,y); else g.lineTo(x,y);} g.stroke();
  var j=Math.min(step,s.length-1); var x=s.length===1?W/2:j/(s.length-1)*W; var y=H-((s[j]-min)/(max-min))*(H-24)-12;
  g.fillStyle="#ff6a3d";g.beginPath();g.arc(x,y,4,0,6.28);g.fill();
}
function drawW4(){
  var W=c4._w,H=c4._h,g=g4;g.clearRect(0,0,W,H);
  var live=rows.filter(function(r){return r.on;});
  var total=live.reduce(function(a,r){return a+Math.abs(r.n);},0)||1; var x=0;
  live.forEach(function(r){var w=Math.abs(r.n)/total*W;g.fillStyle=r.col;g.fillRect(x,H*0.3,Math.max(0,w-1),H*0.4);x+=w;});
}
function drawHooks(g,W,H){
  g.fillStyle="#c7d0dc"; g.font="10px monospace"; g.textAlign="center"; g.fillText("C4 · four arms · 90°", W/2, 16);
  var cx=W/2, cy=H/2+6, s=Math.min(W,H)*0.22;
  for(var i=0;i<4;i++){
    g.save(); g.translate(cx,cy); g.rotate(i*Math.PI/2); g.strokeStyle="#c7d0dc"; g.lineWidth=3;
    g.beginPath(); g.moveTo(0,0); g.lineTo(s,0); g.lineTo(s,s*0.55); g.stroke(); g.restore();
  }
}
function drawPoly(g,W,H,n){
  var cx=W/2, cy=H/2, r=Math.min(W,H)*0.36; g.strokeStyle="#4a8fff"; g.lineWidth=2; g.beginPath();
  for(var i=0;i<=n;i++){var a=-Math.PI/2+i*2*Math.PI/n; var x=cx+r*Math.cos(a), y=cy+r*Math.sin(a); if(i===0)g.moveTo(x,y); else g.lineTo(x,y);} g.stroke();
}
function drawDigits(g,W,H,n){
  var d=[], x=n;
  if(n===0) d=[0];
  while(x!==0){var rem=((x%3)+3)%3; if(rem===2) rem=-1; d.push(rem); x=(x-rem)/3;} 
  g.fillStyle="#4a8fff"; g.font="12px monospace"; g.textAlign="left"; g.fillText("balanced "+n, 8, 20);
  d.forEach(function(dig,i){g.fillStyle=dig<0?"#ff6a3d":dig>0?"#4fbf8f":"#c7d0dc"; g.fillText((dig>0?"+":"")+dig+" · 3^"+i, 8, 42+i*16);});
}
function drawGrid(g,W,H){
  var cell=[["2","7","6"],["9","5","1"],["4","3","8"]];
  var s=Math.min(W,H)*0.22, x0=W/2-1.5*s, y0=H/2-1.5*s;
  g.font="14px monospace"; g.textAlign="center"; g.textBaseline="middle"; g.fillStyle="#d9a441";
  for(var r=0;r<3;r++) for(var c=0;c<3;c++){g.strokeStyle="#3a4354"; g.strokeRect(x0+c*s,y0+r*s,s,s); g.fillText(cell[r][c], x0+c*s+s/2, y0+r*s+s/2);} 
}
function drawW5(){
  var W=c5._w,H=c5._h,g=g5;g.clearRect(0,0,W,H);
  if(SPEC.water==="hooks") drawHooks(g,W,H);
  else if(SPEC.water==="poly") drawPoly(g,W,H,SPEC.waterArg);
  else if(SPEC.water==="digits") drawDigits(g,W,H,SPEC.waterArg);
  else if(SPEC.water==="grid") drawGrid(g,W,H);
  else {g.fillStyle="#4a8fff"; g.font="11px monospace"; g.fillText("parts",8,16); var y=36; rows.forEach(function(r){if(!r.on) return; g.fillStyle=r.col; g.fillRect(8,y,Math.min(W-16, 8+Math.abs(r.n)*4),10); y+=16;});}
}
function update(){
  var live=liveSum();
  var s=SPEC.series; var j=Math.min(step,s.length-1);
  $("vClock").textContent="step "+j+" · "+s[j];
  $("p3").textContent=String(j); $("h3").textContent=String(s[j]);
  $("p4").textContent=String(live.s); $("h4").textContent=live.k+"/"+rows.length;
  var verdict=$("verdict");
  if(live.k===rows.length && live.s===SPEC.sum) verdict.textContent="LIT · "+SPEC.lit;
  else verdict.textContent="parts on "+live.k+" · sum "+live.s;
}
function buildRows(){
  var el=$("rows"); el.innerHTML="";
  rows.forEach(function(r){var d=document.createElement("div"); d.className="rw on";
    d.innerHTML='<span class="sw" style="background:'+r.col+'"></span><span class="nm"></span><span class="od"></span>';
    d.querySelector(".nm").textContent=r.name; d.querySelector(".od").textContent=String(r.n);
    d.onclick=function(){r.on=!r.on; d.className=r.on?"rw on":"rw"; drawAll();};
    el.appendChild(d);});
}
function drawAll(){drawW3();drawW4();drawW5();update();}
var timer=null;
function runSeries(){if(timer){clearInterval(timer);timer=null;} step=0; drawAll();
  timer=setInterval(function(){step=Math.min(SPEC.series.length-1, step+1); drawAll(); if(step>=SPEC.series.length-1){clearInterval(timer);timer=null;}},350);}
$("runAll").onclick=runSeries; $("run3").onclick=runSeries;
$("reset").onclick=function(){if(timer){clearInterval(timer);timer=null;} step=0; rows.forEach(function(r){r.on=true;}); buildRows(); drawAll();};
$("run4").onclick=function(){drawAll();};
$("run5").onclick=function(){drawAll();};
window.addEventListener("resize",function(){fitAll();drawAll();});
fitAll(); buildRows(); drawAll();
var again=(${model.toString()})(${JSON.stringify(spec)});
if(!again.ok||again.lit!==SPEC.lit) throw new Error("LIT FAIL");
if($("verdict").textContent.indexOf("LIT")!==0) throw new Error("LIT FAIL");
})();
</script>
</body></html>
`;
}

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) >>> 0;
  return h;
}

function indexHtml(items) {
  const cols = ["russian", "ternary", "geometry", "count", "root"].map(function (room) {
    const links = items.filter(function (p) { return p.room === room; }).map(function (p) {
      return `<a href="${p.slug}.html">${esc(p.title)}</a>`;
    }).join("");
    return `<div class="win ${room === "russian" ? "earth" : room === "ternary" ? "wood" : room === "geometry" ? "metal" : room === "count" ? "fire" : "water"}"><div class="hd"><div class="tag">${esc(roomName[room])}</div><div class="ttl">${items.filter(function (p) { return p.room === room; }).length} pages</div></div><div class="bd links">${links}</div></div>`;
  }).join("");
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Sophia · ${items.length} pentaptychs</title>
<style>
:root{--ground:#12151c;--ground-2:#171b24;--card:#1a1f2a;--rule:#2a3140;--ink:#e6ebf2;--faint:#8592a4;--earth:#d9a441;--wood:#4fbf8f;--metal:#c7d0dc;--fire:#ff6a3d;--water:#4a8fff}
*{box-sizing:border-box;margin:0;padding:0} body{background:var(--ground);color:var(--ink);font:400 13px/1.5 ui-monospace,Consolas,monospace;padding:18px}
.wrap{max-width:1500px;margin:0 auto} h1{font:600 28px/1.1 "IBM Plex Sans","Helvetica Neue",sans-serif;margin:8px 0}
.sub{color:var(--faint);max-width:90ch;margin:8px 0 16px} .grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
@media(max-width:1100px){.grid{grid-template-columns:1fr}}
.win{background:var(--card);border:1px solid var(--rule);border-radius:9px;border-top:2px solid var(--el)}
.win.earth{--el:var(--earth)} .win.wood{--el:var(--wood)} .win.metal{--el:var(--metal)} .win.fire{--el:var(--fire)} .win.water{--el:var(--water)}
.hd{padding:10px 12px;background:var(--ground-2)} .ttl{font-weight:600} .bd{padding:10px 12px;display:flex;flex-direction:column;gap:6px}
a{color:var(--water);text-decoration:none} a:hover{text-decoration:underline}
</style></head><body><div class="wrap">
<div class="sub">SOPHIA · FIVE ROOMS · ${items.length} PAGES</div>
<h1>Sophia</h1>
<p class="sub">Each page is a five-window pentaptych in the August form. Russian, ternary, geometry, the old counts, and the Sanskrit word svastika. The flag is not drawn. This index is the door.</p>
<div class="grid">${cols}</div>
</div></body></html>`;
}

const specs = pages.map(specOf);
if (specs.length !== 120) throw new Error("count " + specs.length);
const seen = {};
const built = [];
for (const spec of specs) {
  if (seen[spec.slug]) throw new Error("dup " + spec.slug);
  seen[spec.slug] = 1;
  const m = model(spec);
  if (!m.ok) throw new Error("proof " + spec.slug + " " + m.lit);
  const html = pageHtml(spec, m);
  if (html.includes("\r")) throw new Error("cr " + spec.slug);
  fs.writeFileSync(path.join(out, spec.slug + ".html"), html);
  const sealDir = path.join(out, "seals");
  fs.mkdirSync(sealDir, { recursive: true });
  const sealPath = path.join(sealDir, spec.slug + ".dlw");
  if (!fs.existsSync(sealPath)) {
    const blurb = spec.em;
    const seal = crypto.createHash("sha256").update(spec.title + "|" + spec.slug + "|" + blurb).digest("hex");
    fs.writeFileSync(sealPath, JSON.stringify({ name: spec.title, slug: spec.slug, blurb: blurb, seal: seal, rule: "sha256(name|slug|blurb)", write: "if-missing" }) + "\n");
  }
  built.push({ slug: spec.slug, title: spec.title, room: spec.room, lit: m.lit });
}
fs.writeFileSync(path.join(out, "index.html"), indexHtml(built));
const worldSeal = path.join(out, "seals", "sophia.dlw");
if (!fs.existsSync(worldSeal)) {
  const name = "Sophia";
  const slug = "sophia";
  const blurb = "Five rooms of pentaptychs. Russian, ternary, geometry, the count, and the Sanskrit word. The flag is not drawn.";
  const seal = crypto.createHash("sha256").update(name + "|" + slug + "|" + blurb).digest("hex");
  fs.writeFileSync(worldSeal, JSON.stringify({ name: name, slug: slug, blurb: blurb, seal: seal, rule: "sha256(name|slug|blurb)", write: "if-missing" }) + "\n");
}
console.log("SOPHIA " + built.length);
console.log(built.map(function (p) { return p.room + " " + p.slug; }).join("\n"));
