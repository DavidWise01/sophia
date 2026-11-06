export const figureOf = {
  "cyrillic-thirty-three": ["alpha", null],
  "the-seventh-letter": ["yo", null],
  "the-onegin-scheme": ["scheme", "AbAbCCddEffEgg"],
  "fifty-six-seats": ["beats", [14, 4]],
  "the-chebyshev-bound": ["bound", null],
  "the-short-triangle": ["short", [50, 60, 40]],
  "the-kept-steps": ["kept", [17, 68, 136]],
  "the-thirteen-days": ["gap", 13],
  "kazak": ["mirror", "казак"],
  "sofia": ["glyph", "София"],
  "mir": ["glyph", "мир"],
  "the-nested-dolls": ["dolls", 7],
  "the-rod-of-ten": ["beads", 10],
  "the-troika": ["horses", 3],
  "three-strings": ["lute", 3],
  "five-domes": ["domes", 5],
  "brusentsov": ["lamps", ["−", "0", "+"]],
  "two-signs": ["glyph", "ъь"],
  "ten-vowels": ["glyph", "аеёиоуыэюя"],
  "twenty-one-consonants": ["glyph", "бвгджзйклмнпрстфхцчшщ"],
  "shalash": ["mirror", "шалаш"],
  "moskva": ["glyph", "Москва"],
  "twelve-months": ["year", 12],
  "four-seasons": ["seasons", 4],
  "three-states": ["balance", ["−1", "0", "+1"]],
  "two-trits": ["cells", [3, 3]],
  "seven-trits": ["branch", 7],
  "four-trit-range": ["span", 40],
  "the-sign-flip": ["flip", 13],
  "the-middle-third": ["cantor", 4],
  "three-triangles": ["sier", 5],
  "the-cheaper-base": ["vessels", null],
  "residues": ["bowls", ["0", "1", "2"]],
  "the-round-trip": ["trip", null],
  "thirteen-in-trits": ["trits", 13],
  "no-digit-two": ["no2", null],
  "nine-cells": ["cells", [3, 3]],
  "place-values": ["stacks", [1, 3, 9, 27, 81]],
  "depth-of-eighty-one": ["well", 4],
  "all-marks-up": ["marks", 5],
  "nine-to-the-second": ["cells", [9, 9]],
  "the-sixth-power": ["branch", 6],
  "the-ninth-power": ["branch", 9],
  "deeper-dust": ["cantor", 6],
  "the-cube-of-three": ["cubes", 3],
  "the-eighth-power": ["branch", 8],
  "two-cuts": ["cantor", 2],
  "forty-in-trits": ["trits", 40],
  "the-vesica": ["vesica", null],
  "three-sixties": ["polygon", 3],
  "the-pentagon-sum": ["polygon", 5],
  "the-hexagon-sum": ["polygon", 6],
  "cassini-six": ["fib", 6],
  "cassini-seven": ["fib", 7],
  "the-golden-identity": ["golden", null],
  "the-silver-identity": ["silver", null],
  "five-solids": ["solids", null],
  "the-dual-pair": ["dual", null],
  "the-seed": ["rings", [1, 6]],
  "two-rings": ["rings", [1, 6, 12]],
  "three-four-five": ["pyth", null],
  "fifteen-chords": ["complete", 6],
  "four-points": ["tetra", null],
  "eight-vertices": ["twotetra", null],
  "the-order-three-square": ["loshu", null],
  "square-angles": ["rightsq", null],
  "six-faces": ["cube", null],
  "twelve-around": ["rings", [12]],
  "the-heptagon-sum": ["polygon", 7],
  "the-octagon-sum": ["polygon", 8],
  "the-nonagon-sum": ["polygon", 9],
  "cassini-eight": ["fib", 8],
  "ten-sephirot": ["tree", 10],
  "thirty-two": ["tree", 32],
  "two-hundred-thirty-one": ["pairs", 22],
  "seventy-eight": ["deck", null],
  "the-seven-constants": ["squares", 7],
  "five-phases": ["cycle", 5],
  "seven-metals": ["discs", 7],
  "sixty-four": ["hexes", 64],
  "the-repeating-seven": ["cycle7", "142857"],
  "the-circle-of-signs": ["wedges", 12],
  "thirty-six-decans": ["wedges", 36],
  "the-tetractys": ["dots", [1, 2, 3, 4]],
  "twenty-eight": ["dots", [7, 7, 7, 7]],
  "fifty-six-cards": ["suits", [4, 14]],
  "twenty-two-letters": ["arc", 22],
  "nine-points": ["arc", 9],
  "order-seven": ["cells", [7, 7]],
  "eight-trigrams": ["trigrams", 8],
  "one-and-the-ring": ["rings", [1, 12]],
  "the-lo-shu-again": ["loshu", null],
  "one-hundred-twenty-eight": ["field", 7],
  "two-hundred-fifty-six": ["field", 8],
  "one-thousand-twenty-four": ["field", 10],
  "nine-times-nine": ["cells", [9, 9]],
  "su-asti-ka": ["join", ["su", "asti", "ka"]],
  "eight-letters": ["glyph", "swastika"],
  "the-devanagari": ["scripts", ["svastika", "स्वस्तिक"]],
  "four-arms": ["hooks", 4],
  "four-positions": ["hooks", "degrees"],
  "not-the-flag": ["hooks", "word"],
  "two-directions": ["arrows", 2],
  "four-gammas": ["gammas", 4],
  "the-fylfot": ["glyph", "fylfot"],
  "four-destinies": ["arches", 4],
  "the-kolovrat": ["crank", "коловорот"],
  "it-is-well": ["join", ["it", "is", "well"]],
  "two-scripts": ["scripts", ["svastika", "स्वस्तिक"]],
  "language-not-race": ["zero", null],
  "the-loanword": ["voyage", "svastika"],
  "the-suffix-ka": ["glyph", "ka"],
  "asti": ["glyph", "asti"],
  "su": ["glyph", "su"],
  "the-hundred": ["rooms", [5, 20]],
  "the-word-remains": ["join", ["su", "asti", "ka"]],
  "svasti": ["glyph", "svasti"],
  "tri": ["glyph", "tri"],
  "panca": ["glyph", "panca"],
  "catur": ["glyph", "catur"]
};

export function drawArt(g, W, H, fig, arg, t) {
  if (t == null) t = 1;
  var P = ["#d9a441", "#4fbf8f", "#c7d0dc", "#ff6a3d", "#4a8fff"];
  function pal(i) { return P[Math.abs(i) % 5]; }
  function grow(n, fn) {
    var m = t >= 1 ? n : Math.max(n ? 1 : 0, Math.ceil(t * n));
    for (var i = 0; i < m; i++) fn(i);
  }
  function text(s, x, y, col, size) {
    g.fillStyle = col;
    g.font = (size || 13) + "px monospace";
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText(String(s), x, y);
  }
  function circ(x, y, r, col, w) {
    g.beginPath();
    g.arc(x, y, Math.max(0.5, r), 0, 6.2832);
    if (w) { g.strokeStyle = col; g.lineWidth = w; g.stroke(); }
    else { g.fillStyle = col; g.fill(); }
  }
  function line(x1, y1, x2, y2, col, w) {
    g.beginPath();
    g.moveTo(x1, y1);
    g.lineTo(x2, y2);
    g.strokeStyle = col;
    g.lineWidth = w || 1.5;
    g.stroke();
  }
  function poly(cx, cy, r, n, rot, col, w) {
    g.beginPath();
    for (var i = 0; i <= n; i++) {
      var a = (rot == null ? -1.5708 : rot) + i * 6.2832 / n;
      var x = cx + r * Math.cos(a);
      var y = cy + r * Math.sin(a);
      if (i === 0) g.moveTo(x, y);
      else g.lineTo(x, y);
    }
    g.strokeStyle = col;
    g.lineWidth = w || 1.7;
    g.stroke();
  }
  function bals(n) {
    if (n === 0) return [0];
    var d = [];
    var x = n;
    var neg = n < 0;
    if (neg) x = -n;
    while (x !== 0) {
      var rem = ((x % 3) + 3) % 3;
      if (rem === 2) rem = -1;
      d.push(neg ? -rem : rem);
      x = (x - rem) / 3;
    }
    return d;
  }
  g.strokeStyle = "rgba(199,208,220,0.28)";
  g.lineWidth = 1;
  [[8, 8, 1, 1], [W - 8, 8, -1, 1], [8, H - 8, 1, -1], [W - 8, H - 8, -1, -1]].forEach(function (c) {
    g.beginPath();
    g.moveTo(c[0], c[1] + c[3] * 12);
    g.lineTo(c[0], c[1]);
    g.lineTo(c[0] + c[2] * 12, c[1]);
    g.stroke();
  });
  var cx = W / 2;
  var cy = H / 2 + 4;

  if (fig === "alpha" || fig === "yo") {
    var alpha = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    var vowels = "аеёиоуыэюя";
    var signs = "ъь";
    var rad = Math.min(W, H) * 0.36;
    grow(alpha.length, function (i) {
      var a = -1.5708 + i * 6.2832 / alpha.length;
      var x = cx + Math.cos(a) * rad;
      var y = cy + Math.sin(a) * rad * 0.92;
      var ch = alpha.charAt(i);
      var hot = ch === "ё";
      var col = signs.indexOf(ch) >= 0 ? P[3] : vowels.indexOf(ch) >= 0 ? P[0] : P[2];
      if (fig === "yo" && !hot) col = "rgba(199,208,220,0.35)";
      text(ch, x, y, hot ? P[3] : col, hot ? 18 : 12);
    });
    return true;
  }
  if (fig === "scheme") {
    var scheme = String(arg);
    var seen = {};
    var ci = 0;
    grow(scheme.length, function (i) {
      var ch = scheme.charAt(i);
      var k = ch.toLowerCase();
      if (seen[k] == null) seen[k] = ci++;
      var y = 22 + i * ((H - 36) / scheme.length);
      g.fillStyle = pal(seen[k]);
      g.globalAlpha = 0.85;
      g.fillRect(cx - 78, y, 16 + (ch === ch.toUpperCase() ? 70 : 48), 9);
      g.globalAlpha = 1;
      text(ch, cx + 62, y + 4, pal(seen[k]), 12);
    });
    return true;
  }
  if (fig === "beats") {
    var linesN = arg[0];
    var beats = arg[1];
    grow(linesN * beats, function (i) {
      var r = Math.floor(i / beats);
      var c = i % beats;
      circ(cx - 54 + c * 36, 20 + r * ((H - 32) / linesN), 4.5, r % 2 ? P[2] : P[0]);
    });
    return true;
  }
  if (fig === "bound") {
    var steps = 48;
    g.beginPath();
    grow(steps, function (i) {
      var u = 0.55 + (i / (steps - 1)) * 3.4;
      var x = 18 + (i / (steps - 1)) * (W - 36);
      var y = H - 20 - (1 / (u * u)) * (H * 0.55);
      if (i === 0) g.moveTo(x, y);
      else g.lineTo(x, y);
    });
    g.strokeStyle = P[4];
    g.lineWidth = 2;
    g.stroke();
    if (t > 0.45) {
      line(18, H - 20, W - 18, H - 20, "rgba(199,208,220,0.4)", 1);
      text("1/4", 70, 28, P[0], 12);
      text("1/9", 150, 28, P[1], 12);
    }
    return true;
  }
  if (fig === "short") {
    var A = [cx, 34];
    var B = [28, H - 34];
    var C = [W - 28, H - 26];
    g.beginPath();
    g.moveTo(A[0], A[1]);
    g.lineTo(B[0], B[1]);
    g.lineTo(C[0], C[1]);
    g.closePath();
    g.strokeStyle = P[4];
    g.lineWidth = 2;
    g.stroke();
    g.fillStyle = "rgba(74,143,255,0.12)";
    g.fill();
    if (t > 0.4) {
      text(String(arg[0]), B[0] + 28, B[1] - 18, P[0], 13);
      text(String(arg[1]), cx, H - 18, P[1], 13);
      text(String(arg[2]), C[0] - 26, C[1] - 16, P[3], 13);
    }
    if (t > 0.75) text("30 short", cx, 22, P[3], 11);
    return true;
  }
  if (fig === "kept") {
    grow(4, function (i) {
      var x = 22 + i * ((W - 40) / 4);
      if (i < 3) {
        g.strokeStyle = pal(i);
        g.lineWidth = 1.6;
        g.strokeRect(x, cy - 28, 52, 52);
        text(String(arg[i]), x + 26, cy, pal(i), 13);
      } else {
        g.setLineDash([3, 4]);
        g.strokeStyle = P[3];
        g.strokeRect(x, cy - 28, 52, 52);
        g.setLineDash([]);
        text("drop", x + 26, cy, P[3], 12);
      }
    });
    return true;
  }
  if (fig === "gap") {
    grow(14, function (i) {
      var day = i + 1;
      var x = 14 + i * ((W - 28) / 14);
      if (day > 1 && day < 14) {
        g.strokeStyle = "rgba(255,106,61,0.45)";
        g.strokeRect(x, cy - 18, 8, 30);
      } else {
        g.fillStyle = P[0];
        g.fillRect(x, cy - 22, 12, 38);
        text(String(day), x + 6, cy + 30, P[2], 11);
      }
    });
    return true;
  }
  if (fig === "mirror") {
    var chars = Array.from(String(arg));
    var rev = chars.slice().reverse();
    line(cx, 20, cx, H - 20, P[2], 1);
    grow(chars.length, function (i) {
      var y = cy + (i - (chars.length - 1) / 2) * 22;
      text(chars[i], cx - 42, y, P[0], 20);
      text(rev[i], cx + 42, y, P[4], 20);
    });
    return true;
  }
  if (fig === "glyph") {
    var glyphs = Array.from(String(arg));
    var per = glyphs.length > 12 ? Math.ceil(glyphs.length / 2) : glyphs.length;
    var size = glyphs.length > 12 ? 16 : glyphs.length > 6 ? 26 : 42;
    grow(glyphs.length, function (i) {
      var row = i < per ? 0 : 1;
      var col = row ? i - per : i;
      var n = row ? glyphs.length - per : per;
      var x = cx + (col - (n - 1) / 2) * Math.min(size + 6, (W - 36) / n);
      var y = glyphs.length > 12 ? cy + (row ? 16 : -16) : cy;
      text(glyphs[i], x, y, pal(i), size);
    });
    return true;
  }
  if (fig === "dolls") {
    grow(arg, function (i) {
      var rr = 16 + i * 11;
      g.strokeStyle = pal(i);
      g.lineWidth = 1.5;
      g.beginPath();
      g.ellipse(cx, cy + 8, rr * 0.62, rr * 0.78, 0, 0, 6.2832);
      g.stroke();
      circ(cx, cy + 8 - rr * 0.78, rr * 0.22, pal(i), 1.4);
    });
    return true;
  }
  if (fig === "beads") {
    line(18, cy, W - 18, cy, P[2], 2);
    grow(arg, function (i) {
      var gap = i >= arg / 2 ? 16 : 0;
      var x = 28 + i * ((W - 64) / arg) + gap;
      circ(x, cy, 8, i < 4 ? P[0] : P[4]);
    });
    return true;
  }
  if (fig === "horses") {
    grow(arg, function (i) {
      var x = cx + (i - 1) * 70;
      var y = cy + 20;
      var s = 54;
      g.strokeStyle = pal(i);
      g.lineWidth = 1.8;
      g.beginPath();
      g.moveTo(x - 20, y);
      g.quadraticCurveTo(x, y - 10, x + 16, y - 36);
      g.quadraticCurveTo(x + 28, y - 52, x + 42, y - 40);
      g.moveTo(x - 16, y);
      g.lineTo(x - 22, y + 28);
      g.moveTo(x + 6, y - 4);
      g.lineTo(x + 14, y + 28);
      g.moveTo(x - 28, y - 6);
      g.quadraticCurveTo(x - 46, y - 18, x - 36, y + 6);
      g.stroke();
    });
    return true;
  }
  if (fig === "lute") {
    g.beginPath();
    g.moveTo(cx, cy + 58);
    g.lineTo(cx - 58, cy + 10);
    g.lineTo(cx + 58, cy + 10);
    g.closePath();
    g.fillStyle = "rgba(217,164,65,0.18)";
    g.fill();
    g.strokeStyle = P[0];
    g.lineWidth = 1.8;
    g.stroke();
    line(cx, cy + 10, cx, cy - 62, P[2], 2);
    grow(3, function (i) {
      var x = cx - 16 + i * 16;
      line(x, cy + 48, cx - 8 + i * 8, cy - 58, pal(i + 1), 1.2);
    });
    return true;
  }
  if (fig === "domes") {
    var domes = [[0, -16, 46], [-78, 16, 30], [78, 16, 30], [-40, 28, 24], [40, 28, 24]];
    line(16, cy + 58, W - 16, cy + 58, P[2], 1.4);
    grow(domes.length, function (i) {
      var d = domes[i];
      var x = cx + d[0];
      var y = cy + d[1];
      var rd = d[2];
      g.beginPath();
      g.moveTo(x - rd * 0.7, y + rd * 0.2);
      g.quadraticCurveTo(x - rd, y - rd * 0.2, x, y - rd);
      g.quadraticCurveTo(x + rd, y - rd * 0.2, x + rd * 0.7, y + rd * 0.2);
      g.closePath();
      g.fillStyle = "rgba(74,143,255,0.15)";
      g.fill();
      g.strokeStyle = pal(i);
      g.lineWidth = 1.6;
      g.stroke();
    });
    return true;
  }
  if (fig === "lamps") {
    line(40, cy + 36, W - 40, cy + 36, P[2], 2);
    grow(arg.length, function (i) {
      var x = cx + (i - 1) * 74;
      g.strokeStyle = pal(i);
      g.lineWidth = 1.5;
      g.strokeRect(x - 16, cy - 10, 32, 40);
      circ(x, cy - 28, 14, pal(i), 1.6);
      if (t > 0.5) g.fillStyle = pal(i), circ(x, cy - 28, 6, pal(i));
      text(arg[i], x, cy + 10, pal(i), 14);
    });
    return true;
  }
  if (fig === "year") {
    circ(cx, cy, Math.min(W, H) * 0.34, P[2], 1.2);
    grow(arg, function (i) {
      var a = -1.5708 + i * 6.2832 / arg;
      var r1 = Math.min(W, H) * 0.28;
      var r2 = Math.min(W, H) * 0.36;
      line(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1, cx + Math.cos(a) * r2, cy + Math.sin(a) * r2, pal(i), 2);
    });
    return true;
  }
  if (fig === "seasons") {
    var names = ["winter", "spring", "summer", "autumn"];
    var R = Math.min(W, H) * 0.34;
    grow(4, function (i) {
      g.beginPath();
      g.moveTo(cx, cy);
      g.arc(cx, cy, R, -1.5708 + i * 1.5708, -1.5708 + (i + 1) * 1.5708);
      g.closePath();
      g.fillStyle = pal(i);
      g.globalAlpha = 0.38;
      g.fill();
      g.globalAlpha = 1;
      g.strokeStyle = pal(i);
      g.stroke();
      var a = -1.5708 + (i + 0.5) * 1.5708;
      text(names[i], cx + Math.cos(a) * R * 0.62, cy + Math.sin(a) * R * 0.62, "#e6ebf2", 11);
    });
    return true;
  }
  if (fig === "balance") {
    line(36, cy, W - 36, cy, P[2], 3);
    circ(cx, cy, 7, P[0]);
    grow(3, function (i) {
      var x = cx + (i - 1) * 78;
      line(x, cy, x, cy + 28, pal(i), 1.4);
      g.beginPath();
      g.arc(x, cy + 40, 18, 0.15 * 3.14, 0.85 * 3.14);
      g.strokeStyle = pal(i);
      g.lineWidth = 1.6;
      g.stroke();
      text(arg[i], x, cy - 18, pal(i), 14);
    });
    return true;
  }
  if (fig === "cells") {
    var cols = arg[0];
    var rows = arg[1];
    var cell = Math.min((W - 36) / cols, (H - 36) / rows);
    var x0 = cx - cols * cell / 2;
    var y0 = cy - rows * cell / 2;
    grow(cols * rows, function (i) {
      var x = i % cols;
      var y = Math.floor(i / cols);
      g.strokeStyle = pal((x + y) % 5);
      g.lineWidth = 1;
      g.strokeRect(x0 + x * cell, y0 + y * cell, cell - 1.5, cell - 1.5);
      if (cols <= 3 && rows <= 3) {
        var dig = (x + y) % 3;
        text(dig === 2 ? "−" : String(dig), x0 + x * cell + cell / 2, y0 + y * cell + cell / 2, pal(dig), 13);
      }
    });
    return true;
  }
  if (fig === "branch") {
    grow(arg, function (i) {
      var count = Math.min(Math.pow(3, i), 27);
      var y = 24 + i * ((H - 40) / arg);
      for (var k = 0; k < count; k++) {
        var x = 20 + (count === 1 ? (W - 40) / 2 : k * ((W - 40) / (count - 1)));
        circ(x, y, i === 0 ? 5 : 2.4, pal(i));
      }
    });
    return true;
  }
  if (fig === "span") {
    line(20, cy, W - 20, cy, P[2], 1.5);
    grow(9, function (i) {
      var x = 20 + i * ((W - 40) / 8);
      line(x, cy - 8, x, cy + 8, P[2], 1);
    });
    circ(cx, cy, 5, P[0]);
    text("−" + arg, 36, cy + 28, P[3], 13);
    text("0", cx, cy + 28, P[0], 13);
    text("+" + arg, W - 36, cy + 28, P[1], 13);
    return true;
  }
  if (fig === "flip" || fig === "trits") {
    var digs = bals(arg);
    if (fig === "flip") {
      grow(digs.length * 2, function (i) {
        var side = i < digs.length ? 0 : 1;
        var k = side ? i - digs.length : i;
        var d = side ? -digs[k] : digs[k];
        var x = (side ? cx + 48 : cx - 48);
        var y = 36 + k * 28;
        text((d > 0 ? "+" : "") + d, x, y, d < 0 ? P[3] : d > 0 ? P[1] : P[2], 18);
      });
      if (t > 0.8) text("flip", cx, H - 18, P[2], 11);
    } else {
      text(String(arg), cx, 28, P[2], 12);
      grow(digs.length, function (i) {
        var d = digs[i];
        circ(cx, 52 + i * 32, 12, d < 0 ? P[3] : d > 0 ? P[1] : P[2], 1.6);
        text((d > 0 ? "+" : "") + d, cx, 52 + i * 32, d < 0 ? P[3] : d > 0 ? P[1] : P[2], 13);
      });
    }
    return true;
  }
  if (fig === "cantor") {
    function segs(depth) {
      var out = [[16, W - 32]];
      for (var d = 0; d < depth; d++) {
        var next = [];
        out.forEach(function (s) {
          var third = s[1] / 3;
          next.push([s[0], third]);
          next.push([s[0] + 2 * third, third]);
        });
        out = next;
      }
      return out;
    }
    grow(arg + 1, function (i) {
      var y = 26 + i * ((H - 44) / (arg + 1));
      segs(i).forEach(function (s) {
        g.fillStyle = pal(i);
        g.fillRect(s[0], y, Math.max(1, s[1]), 7);
      });
    });
    return true;
  }
  if (fig === "sier") {
    var depth = Math.max(1, Math.round(t * arg));
    function tri(x1, y1, x2, y2, x3, y3, d) {
      if (d === 0) {
        g.beginPath();
        g.moveTo(x1, y1);
        g.lineTo(x2, y2);
        g.lineTo(x3, y3);
        g.closePath();
        g.fillStyle = "rgba(74,143,255,0.2)";
        g.fill();
        g.strokeStyle = P[4];
        g.stroke();
        return;
      }
      var mx = (x2 + x3) / 2;
      var my = (y2 + y3) / 2;
      var nx = (x1 + x3) / 2;
      var ny = (y1 + y3) / 2;
      var ox = (x1 + x2) / 2;
      var oy = (y1 + y2) / 2;
      tri(x1, y1, ox, oy, nx, ny, d - 1);
      tri(ox, oy, x2, y2, mx, my, d - 1);
      tri(nx, ny, mx, my, x3, y3, d - 1);
    }
    tri(cx, 24, 24, H - 20, W - 24, H - 20, depth);
    return true;
  }
  if (fig === "vessels") {
    function cup(x, h, col, label) {
      g.beginPath();
      g.moveTo(x - 22, cy + 30);
      g.lineTo(x - 16, cy + 30 - h);
      g.lineTo(x + 16, cy + 30 - h);
      g.lineTo(x + 22, cy + 30);
      g.closePath();
      g.fillStyle = col;
      g.globalAlpha = 0.35;
      g.fill();
      g.globalAlpha = 1;
      g.strokeStyle = col;
      g.stroke();
      text(label, x, cy + 48, col, 12);
    }
    if (t > 0) cup(cx - 58, 88, P[3], "base 2");
    if (t > 0.5) cup(cx + 58, 62, P[1], "base 3");
    return true;
  }
  if (fig === "bowls") {
    grow(arg.length, function (i) {
      var x = cx + (i - 1) * 74;
      g.beginPath();
      g.arc(x, cy + 10, 28, 0.1 * 3.14, 0.9 * 3.14);
      g.strokeStyle = pal(i);
      g.lineWidth = 1.8;
      g.stroke();
      text(arg[i], x, cy - 8, pal(i), 18);
    });
    return true;
  }
  if (fig === "trip") {
    g.beginPath();
    g.arc(cx, cy, 48, 0.4, 5.6);
    g.strokeStyle = P[4];
    g.lineWidth = 1.8;
    g.stroke();
    g.beginPath();
    g.arc(cx, cy, 28, 5.4, 0.8, true);
    g.strokeStyle = P[0];
    g.stroke();
    if (t > 0.6) {
      text("out", cx + 62, cy - 10, P[4], 11);
      text("back", cx - 62, cy + 16, P[0], 11);
    }
    return true;
  }
  if (fig === "no2") {
    text("2", cx - 48, cy, P[3], 54);
    if (t > 0.35) line(cx - 70, cy + 24, cx - 26, cy - 24, P[3], 2);
    var digs = bals(2);
    grow(digs.length, function (i) {
      var d = digs[i];
      text((d > 0 ? "+" : "") + d, cx + 36, cy - 16 + i * 32, d < 0 ? P[3] : P[1], 22);
    });
    return true;
  }
  if (fig === "stacks") {
    var vals = arg;
    var max = vals[vals.length - 1];
    grow(vals.length, function (i) {
      var h = 16 + Math.sqrt(vals[i] / max) * (H - 70);
      var x = 24 + i * ((W - 36) / vals.length);
      g.fillStyle = pal(i);
      g.globalAlpha = 0.85;
      g.fillRect(x, cy + 40 - h, 28, h);
      g.globalAlpha = 1;
      text(String(vals[i]), x + 14, cy + 40 - h - 12, pal(i), 11);
    });
    return true;
  }
  if (fig === "well") {
    grow(arg, function (i) {
      var pad = 28 + i * 16;
      g.strokeStyle = pal(i);
      g.lineWidth = 1.6;
      g.strokeRect(pad, pad * 0.7, W - pad * 2, H - pad * 1.4);
    });
    return true;
  }
  if (fig === "marks") {
    grow(arg, function (i) {
      var x = cx + (i - (arg - 1) / 2) * 36;
      text("+", x, cy - 8, P[1], 28);
      circ(x, cy + 28, 4, pal(i));
    });
    return true;
  }
  if (fig === "vesica") {
    var r = Math.min(W, H) * 0.28;
    var d = r * 0.5;
    g.beginPath();
    g.arc(cx - d, cy, r, 0, 6.2832);
    g.strokeStyle = P[4];
    g.lineWidth = 1.8;
    g.stroke();
    g.beginPath();
    g.arc(cx + d, cy, r, 0, 6.2832);
    g.stroke();
    if (t > 0.45) {
      g.beginPath();
      g.arc(cx - d, cy, r, -1.05, 1.05);
      g.arc(cx + d, cy, r, 2.09, 4.19);
      g.fillStyle = "rgba(74,143,255,0.28)";
      g.fill();
      text("√3", cx, cy, P[2], 14);
    }
    return true;
  }
  if (fig === "polygon") {
    var n = arg;
    poly(cx, cy, Math.min(W, H) * 0.36, n, -1.5708, P[4], 2);
    if (t > 0.55) {
      for (var i = 0; i < n; i++) {
        var a = -1.5708 + i * 6.2832 / n;
        circ(cx + Math.cos(a) * Math.min(W, H) * 0.36, cy + Math.sin(a) * Math.min(W, H) * 0.36, 3, P[0]);
      }
    }
    return true;
  }
  if (fig === "fib") {
    var seq = [1, 1, 2, 3, 5, 8, 13, 21].slice(0, arg);
    var sum = 0;
    seq.forEach(function (n) { sum += n; });
    var scale = (Math.min(W, H) - 36) / (seq[seq.length - 1] + seq[Math.max(0, seq.length - 2)]);
    var x = 20;
    var y = H - 20;
    var dir = 0;
    grow(seq.length, function (i) {
      var s = seq[i] * scale;
      g.strokeStyle = pal(i);
      g.lineWidth = 1.5;
      g.strokeRect(dir === 0 ? x : dir === 2 ? x - s : x, dir === 1 ? y - s : dir === 3 ? y : y - s, s, s);
      g.beginPath();
      var ax = dir === 0 ? x + s : dir === 1 ? x : dir === 2 ? x - s : x;
      var ay = dir === 0 ? y - s : dir === 1 ? y - s : dir === 2 ? y : y;
      if (dir === 0) { g.moveTo(x, y); g.arc(x, y, s, -1.5708, 0); x += s; }
      else if (dir === 1) { g.moveTo(x, y); g.arc(x, y, s, 0, 1.5708); y -= s; }
      else if (dir === 2) { g.moveTo(x, y); g.arc(x, y, s, 1.5708, 3.1416); x -= s; }
      else { g.moveTo(x, y); g.arc(x, y, s, 3.1416, 4.7124); y += s; }
      g.strokeStyle = P[0];
      g.stroke();
      dir = (dir + 1) % 4;
      void ax;
      void ay;
      void sum;
    });
    return true;
  }
  if (fig === "golden") {
    g.strokeStyle = P[0];
    g.lineWidth = 1.6;
    g.strokeRect(28, cy - 46, 150, 92);
    g.strokeStyle = P[4];
    g.strokeRect(28, cy - 46, 92, 92);
    if (t > 0.6) {
      line(120, cy - 46, 120, cy + 46, P[1], 1);
      text("1", 74, cy, P[2], 14);
      text("φ", 164, cy, P[0], 16);
    }
    return true;
  }
  if (fig === "silver") {
    g.strokeStyle = P[2];
    g.lineWidth = 1.6;
    g.strokeRect(cx - 40, cy - 40, 80, 80);
    line(cx - 40, cy + 40, cx + 40, cy - 40, P[0], 1.8);
    if (t > 0.55) {
      g.strokeStyle = P[4];
      g.strokeRect(cx - 40, cy - 40, 80 * 1.41, 80);
      text("1+√2", cx + 78, cy + 58, P[4], 12);
    }
    return true;
  }
  if (fig === "solids" || fig === "dual" || fig === "cube" || fig === "cubes") {
    function cubeAt(x, y, s, col) {
      var a = [x, y];
      var b = [x + s, y + s * 0.25];
      var c = [x + s * 0.35, y + s * 0.62];
      var d = [x - s * 0.65, y + s * 0.38];
      var e = [x, y - s * 0.7];
      var f = [x + s, y - s * 0.45];
      var h = [x - s * 0.65, y - s * 0.32];
      [ [a, b], [b, c], [c, d], [d, a], [a, e], [b, f], [d, h], [e, f], [f, [x + s * 0.35, y - s * 0.08]], [[x + s * 0.35, y - s * 0.08], h], [h, e] ].forEach(function (ed) {
        line(ed[0][0], ed[0][1], ed[1][0], ed[1][1], col, 1.3);
      });
    }
    if (fig === "cube") {
      cubeAt(cx - 10, cy + 10, 70, P[2]);
      return true;
    }
    if (fig === "cubes") {
      cubeAt(cx - 16, cy + 16, 78, P[4]);
      if (t > 0.4) {
        for (var i = 1; i < 3; i++) {
          line(cx - 16 + i * 26, cy + 10 - i * 6, cx - 16 + 78, cy + 10 + 78 * 0.25 - i * 8, P[0], 1);
        }
      }
      return true;
    }
    if (fig === "dual") {
      cubeAt(cx - 20, cy + 8, 64, P[2]);
      poly(cx + 8, cy - 6, 34, 4, 0, P[0], 1.6);
      if (t > 0.6) poly(cx + 8, cy - 6, 18, 4, 0.785, P[3], 1.2);
      return true;
    }
    var icons = 5;
    grow(icons, function (i) {
      var x = 36 + i * ((W - 48) / 5);
      var y = cy + 8;
      if (i === 0) poly(x, y, 22, 3, -1.5708, pal(i), 1.4);
      else if (i === 1) cubeAt(x - 8, y, 28, pal(i));
      else if (i === 2) poly(x, y, 22, 4, 0, pal(i), 1.4);
      else if (i === 3) poly(x, y, 22, 5, -1.5708, pal(i), 1.4);
      else poly(x, y, 22, 3, 0.4, pal(i), 1.4);
    });
    return true;
  }
  if (fig === "rings") {
    var spots = [];
    arg.forEach(function (count, ri) {
      if (count === 1) spots.push([cx, cy, ri]);
      else {
        var rad = Math.min(W, H) * (0.16 + ri * 0.16);
        if (arg.length === 1) rad = Math.min(W, H) * 0.32;
        for (var k = 0; k < count; k++) {
          var a = -1.5708 + k * 6.2832 / count;
          spots.push([cx + Math.cos(a) * rad, cy + Math.sin(a) * rad * 0.92, ri]);
        }
      }
    });
    var rr = arg.length > 2 ? 7 : 11;
    grow(spots.length, function (i) {
      circ(spots[i][0], spots[i][1], rr, pal(spots[i][2]), 1.5);
    });
    return true;
  }
  if (fig === "pyth") {
    var u = 16;
    var x = 48;
    var y = H - 42;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + 4 * u, y);
    g.lineTo(x, y - 3 * u);
    g.closePath();
    g.strokeStyle = P[2];
    g.lineWidth = 1.8;
    g.stroke();
    if (t > 0.3) g.strokeRect(x, y, 4 * u, 4 * u * 0.35), g.strokeStyle = P[1];
    if (t > 0.3) {
      g.strokeStyle = P[1];
      g.strokeRect(x, y - 3 * u, -3 * u, 3 * u);
      g.strokeStyle = P[0];
      g.save();
      g.translate(x, y - 3 * u);
      g.rotate(-0.64);
      g.strokeRect(0, -5 * u, 5 * u, 5 * u);
      g.restore();
    }
    text("3", x - 16, y - 24, P[1], 12);
    text("4", x + 32, y + 16, P[4], 12);
    text("5", x + 36, y - 36, P[0], 12);
    return true;
  }
  if (fig === "complete") {
    var n = arg;
    var pts = [];
    var rad = Math.min(W, H) * 0.36;
    for (var i = 0; i < n; i++) {
      var a = -1.5708 + i * 6.2832 / n;
      pts.push([cx + Math.cos(a) * rad, cy + Math.sin(a) * rad]);
    }
    var edges = [];
    for (var p = 0; p < n; p++) for (var q = p + 1; q < n; q++) edges.push([p, q]);
    grow(edges.length, function (i) {
      var e = edges[i];
      line(pts[e[0]][0], pts[e[0]][1], pts[e[1]][0], pts[e[1]][1], "rgba(74,143,255,0.85)", 1.2);
    });
    pts.forEach(function (p, i) { if (t > 0.2) circ(p[0], p[1], 4, pal(i)); });
    return true;
  }
  if (fig === "tetra" || fig === "twotetra") {
    function tet(x, y, s, col, flip) {
      var top = [x, y - s];
      var left = [x - s * 0.9, y + s * 0.6];
      var right = [x + s * 0.9, y + s * 0.6];
      var back = [x + (flip ? -s * 0.2 : s * 0.2), y - s * 0.05];
      line(top[0], top[1], left[0], left[1], col, 1.5);
      line(top[0], top[1], right[0], right[1], col, 1.5);
      line(left[0], left[1], right[0], right[1], col, 1.5);
      line(top[0], top[1], back[0], back[1], col, 1.2);
      line(left[0], left[1], back[0], back[1], col, 1.2);
      line(right[0], right[1], back[0], back[1], col, 1.2);
      [top, left, right, back].forEach(function (p) { circ(p[0], p[1], 3, col); });
    }
    if (fig === "tetra") tet(cx, cy + 10, 58, P[4], false);
    else {
      tet(cx - 8, cy + 6, 50, P[4], false);
      if (t > 0.45) tet(cx + 10, cy + 18, 50, P[0], true);
    }
    return true;
  }
  if (fig === "loshu") {
    var cell = [["2", "7", "6"], ["9", "5", "1"], ["4", "3", "8"]];
    var s = Math.min(W, H) * 0.22;
    var x0 = cx - 1.5 * s;
    var y0 = cy - 1.5 * s;
    grow(9, function (i) {
      var r = Math.floor(i / 3);
      var c = i % 3;
      g.strokeStyle = P[2];
      g.strokeRect(x0 + c * s, y0 + r * s, s, s);
      text(cell[r][c], x0 + c * s + s / 2, y0 + r * s + s / 2, P[0], 16);
    });
    if (t > 0.8) {
      line(x0, y0, x0 + 3 * s, y0 + 3 * s, "rgba(74,143,255,0.7)", 1.2);
    }
    return true;
  }
  if (fig === "rightsq") {
    var s = Math.min(W, H) * 0.46;
    var x = cx - s / 2;
    var y = cy - s / 2;
    g.strokeStyle = P[2];
    g.lineWidth = 1.8;
    g.strokeRect(x, y, s, s);
    grow(4, function (i) {
      var px = i === 0 || i === 3 ? x : x + s;
      var py = i < 2 ? y : y + s;
      g.beginPath();
      g.arc(px, py, 12, i * 1.5708, (i + 1) * 1.5708);
      g.strokeStyle = P[0];
      g.stroke();
    });
    return true;
  }
  if (fig === "tree") {
    var pts = [[0, 0], [-1, 1], [1, 1], [-1, 2], [0, 2], [1, 2], [-1, 3], [1, 3], [0, 4], [0, 5]];
    function pt(i) {
      return [cx + pts[i][0] * 48, 28 + pts[i][1] * ((H - 48) / 5)];
    }
    var paths = [[0, 1], [0, 2], [0, 4], [1, 2], [1, 4], [1, 3], [2, 4], [2, 5], [3, 4], [3, 6], [4, 5], [4, 6], [4, 7], [5, 7], [3, 8], [6, 8], [7, 8], [6, 9], [7, 9], [4, 8], [8, 9], [5, 8]];
    if (arg === 32) {
      grow(paths.length, function (i) {
        var a = pt(paths[i][0]);
        var b = pt(paths[i][1]);
        line(a[0], a[1], b[0], b[1], "rgba(199,208,220,0.55)", 1);
      });
    }
    grow(10, function (i) {
      var p = pt(i);
      circ(p[0], p[1], 7, pal(i), 1.6);
    });
    return true;
  }
  if (fig === "pairs") {
    var n = arg;
    var rad = Math.min(W, H) * 0.38;
    var pts = [];
    for (var i = 0; i < n; i++) {
      var a = -1.5708 + i * 6.2832 / n;
      pts.push([cx + Math.cos(a) * rad, cy + Math.sin(a) * rad * 0.95]);
    }
    var edges = [];
    for (var p = 0; p < n; p++) for (var q = p + 1; q < n; q++) edges.push([p, q]);
    grow(edges.length, function (i) {
      var e = edges[Math.floor(i * edges.length / Math.max(1, Math.ceil(t >= 1 ? edges.length : t * edges.length))) ] || edges[i];
      line(pts[edges[i][0]][0], pts[edges[i][0]][1], pts[edges[i][1]][0], pts[edges[i][1]][1], "rgba(217,164,65,0.28)", 1);
      void e;
    });
    pts.forEach(function (p, i) { circ(p[0], p[1], 2.5, pal(i % 5)); });
    return true;
  }
  if (fig === "deck") {
    grow(4, function (i) {
      var x = 36 + i * 42;
      g.strokeStyle = pal(i);
      g.lineWidth = 1.4;
      for (var k = 0; k < 5; k++) g.strokeRect(x + k * 2, cy - 20 - k * 2, 28, 44);
    });
    if (t > 0.5) {
      g.strokeStyle = P[0];
      g.strokeRect(W - 78, 28, 36, 120);
      text("22", W - 60, 88, P[0], 14);
    }
    return true;
  }
  if (fig === "squares") {
    grow(arg, function (i) {
      var pad = 18 + i * 10;
      g.strokeStyle = pal(i);
      g.lineWidth = 1.4;
      g.strokeRect(pad, pad * 0.65, W - pad * 2, H - pad * 1.3);
    });
    return true;
  }
  if (fig === "cycle") {
    var n = arg;
    var rad = Math.min(W, H) * 0.32;
    var pts = [];
    for (var i = 0; i < n; i++) {
      var a = -1.5708 + i * 6.2832 / n;
      pts.push([cx + Math.cos(a) * rad, cy + Math.sin(a) * rad]);
    }
    grow(n, function (i) {
      var a = pts[i];
      var b = pts[(i + 1) % n];
      line(a[0], a[1], b[0], b[1], pal(i), 1.6);
      circ(a[0], a[1], 8, pal(i));
    });
    return true;
  }
  if (fig === "discs") {
    grow(arg, function (i) {
      var x = 28 + i * ((W - 40) / arg);
      circ(x, cy, 8 + i * 1.4, pal(i), 1.6);
      circ(x, cy, 3, pal(i));
    });
    return true;
  }
  if (fig === "hexes") {
    function hexa(x, y, bits, sc, col) {
      for (var k = 0; k < 6; k++) {
        var yy = y + k * sc * 3;
        var broken = ((bits >> k) & 1) === 0;
        g.strokeStyle = col;
        g.lineWidth = Math.max(1, sc * 0.7);
        if (!broken) line(x, yy, x + sc * 8, yy, col, Math.max(1, sc * 0.7));
        else {
          line(x, yy, x + sc * 3, yy, col, Math.max(1, sc * 0.7));
          line(x + sc * 5, yy, x + sc * 8, yy, col, Math.max(1, sc * 0.7));
        }
      }
    }
    hexa(cx - 36, 30, 0x2a, 3.2, P[2]);
    if (t > 0.35) {
      for (var i = 0; i < 64; i++) {
        var c = i % 8;
        var r = Math.floor(i / 8);
        hexa(16 + c * 22, cy + 8 + r * 8, i, 0.7, pal(r));
      }
    }
    return true;
  }
  if (fig === "cycle7") {
    var word = String(arg);
    var rad = Math.min(W, H) * 0.32;
    grow(word.length, function (i) {
      var a = -1.5708 + i * 6.2832 / word.length;
      var x = cx + Math.cos(a) * rad;
      var y = cy + Math.sin(a) * rad;
      circ(x, y, 14, pal(i), 1.4);
      text(word.charAt(i), x, y, pal(i), 14);
      var b = -1.5708 + (i + 0.5) * 6.2832 / word.length;
      circ(cx + Math.cos(b) * (rad - 22), cy + Math.sin(b) * (rad - 22), 2, P[2]);
    });
    return true;
  }
  if (fig === "wedges") {
    var n = arg;
    var R = Math.min(W, H) * 0.38;
    grow(n, function (i) {
      g.beginPath();
      g.moveTo(cx, cy);
      g.arc(cx, cy, R, -1.5708 + i * 6.2832 / n, -1.5708 + (i + 1) * 6.2832 / n);
      g.closePath();
      g.fillStyle = pal(Math.floor(i / (n / 5)));
      g.globalAlpha = 0.28;
      g.fill();
      g.globalAlpha = 1;
      g.strokeStyle = "rgba(199,208,220,0.45)";
      g.stroke();
    });
    return true;
  }
  if (fig === "dots") {
    var rows = arg;
    var total = 0;
    rows.forEach(function (n) { total += n; });
    var seen = 0;
    var drawn = t >= 1 ? total : Math.max(1, Math.ceil(t * total));
    for (var r = 0; r < rows.length; r++) {
      var n = rows[r];
      var y = cy + (r - (rows.length - 1) / 2) * 28;
      for (var c = 0; c < n; c++) {
        if (seen >= drawn) break;
        var x = cx + (c - (n - 1) / 2) * Math.min(22, (W - 40) / n);
        circ(x, y, 6, pal(r));
        seen++;
      }
    }
    return true;
  }
  if (fig === "suits") {
    grow(arg[0], function (i) {
      var x = cx - 80 + i * 36;
      g.strokeStyle = pal(i);
      g.lineWidth = 1.5;
      if (i % 4 === 0) poly(x, cy - 10, 12, 4, 0, pal(i), 1.4);
      else if (i % 4 === 1) circ(x, cy - 10, 10, pal(i), 1.4);
      else if (i % 4 === 2) poly(x, cy - 6, 12, 3, -1.5708, pal(i), 1.4);
      else g.strokeRect(x - 8, cy - 20, 16, 22);
    });
    if (t > 0.45) {
      grow(arg[1], function (i) {
        circ(cx + 30 + (i % 7) * 14, cy + 24 + Math.floor(i / 7) * 14, 3, P[2]);
      });
    }
    return true;
  }
  if (fig === "arc") {
    var n = arg;
    var rad = Math.min(W, H) * 0.36;
    grow(n, function (i) {
      var a = -1.5708 + i * 6.2832 / n;
      circ(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad * 0.95, n > 16 ? 3 : 6, pal(i), n > 16 ? 0 : 1.4);
    });
    return true;
  }
  if (fig === "trigrams") {
    grow(8, function (i) {
      var a = -1.5708 + i * 6.2832 / 8;
      var x = cx + Math.cos(a) * Math.min(W, H) * 0.32 - 12;
      var y = cy + Math.sin(a) * Math.min(W, H) * 0.30 - 10;
      for (var k = 0; k < 3; k++) {
        var broken = ((i >> k) & 1) === 0;
        var yy = y + k * 7;
        g.strokeStyle = pal(i);
        g.lineWidth = 1.6;
        if (!broken) line(x, yy, x + 22, yy, pal(i), 1.6);
        else {
          line(x, yy, x + 8, yy, pal(i), 1.6);
          line(x + 14, yy, x + 22, yy, pal(i), 1.6);
        }
      }
    });
    return true;
  }
  if (fig === "field") {
    var n = Math.pow(2, arg);
    var cols = Math.ceil(Math.sqrt(n));
    var rows = Math.ceil(n / cols);
    var cell = Math.min((W - 28) / cols, (H - 28) / rows);
    var x0 = cx - cols * cell / 2;
    var y0 = cy - rows * cell / 2;
    grow(n, function (i) {
      var x = i % cols;
      var y = Math.floor(i / cols);
      g.fillStyle = pal((x + y) % 5);
      g.globalAlpha = 0.8;
      g.fillRect(x0 + x * cell, y0 + y * cell, Math.max(1, cell - 0.6), Math.max(1, cell - 0.6));
      g.globalAlpha = 1;
    });
    return true;
  }
  if (fig === "join") {
    var parts = arg;
    grow(parts.length, function (i) {
      var spread = (1 - Math.min(1, t)) * 40;
      var x = cx + (i - (parts.length - 1) / 2) * (78 - spread);
      g.strokeStyle = pal(i);
      g.strokeRect(x - 32, cy - 22, 64, 40);
      text(parts[i], x, cy, pal(i), 16);
    });
    if (t > 0.72 && parts.length === 3) text("ua → va", cx, cy + 42, P[2], 12);
    return true;
  }
  if (fig === "scripts") {
    text(arg[0], cx, cy - 24, P[0], 28);
    if (t > 0.45) text(arg[1], cx, cy + 28, P[4], 28);
    return true;
  }
  if (fig === "hooks") {
    text("C4 · four arms · 90°", cx, 22, "#c7d0dc", 11);
    var arm = Math.min(W, H) * 0.2;
    grow(4, function (i) {
      g.save();
      g.translate(cx, cy + 6);
      g.rotate(i * Math.PI / 2);
      g.strokeStyle = "#c7d0dc";
      g.lineWidth = 3;
      g.beginPath();
      g.moveTo(0, 0);
      g.lineTo(arm, 0);
      g.lineTo(arm, arm * 0.55);
      g.stroke();
      g.restore();
    });
    if (arg === "degrees" && t > 0.6) {
      text("0°", cx, cy + 6 - arm - 14, P[2], 11);
      text("90°", cx + arm + 18, cy + 6, P[2], 11);
      text("180°", cx, cy + 6 + arm + 16, P[2], 11);
      text("270°", cx - arm - 22, cy + 6, P[2], 11);
    }
    if (arg === "word" && t > 0.55) text("the flag is not drawn", cx, H - 18, P[3], 12);
    return true;
  }
  if (fig === "arrows") {
    g.beginPath();
    g.arc(cx, cy - 8, 36, 0.6, 5.4);
    g.strokeStyle = P[4];
    g.lineWidth = 1.8;
    g.stroke();
    if (t > 0.4) {
      g.beginPath();
      g.arc(cx, cy + 10, 22, 4.2, 2.4, true);
      g.strokeStyle = P[0];
      g.stroke();
    }
    return true;
  }
  if (fig === "gammas") {
    grow(4, function (i) {
      var x = cx + (i - 1.5) * 52;
      g.strokeStyle = pal(i);
      g.lineWidth = 2;
      g.beginPath();
      g.moveTo(x - 12, cy - 18);
      g.lineTo(x - 12, cy + 16);
      g.lineTo(x + 14, cy + 16);
      g.stroke();
    });
    return true;
  }
  if (fig === "arches") {
    grow(arg, function (i) {
      var x = cx + (i - 1.5) * 52;
      g.strokeStyle = pal(i);
      g.lineWidth = 1.6;
      g.beginPath();
      g.moveTo(x - 16, cy + 28);
      g.lineTo(x - 16, cy - 4);
      g.arc(x, cy - 4, 16, 3.1416, 0);
      g.lineTo(x + 16, cy + 28);
      g.stroke();
    });
    return true;
  }
  if (fig === "crank") {
    circ(cx - 10, cy, 34, P[2], 2);
    line(cx + 20, cy - 12, cx + 62, cy - 36, P[0], 3);
    circ(cx + 62, cy - 36, 6, P[0]);
    if (t > 0.55) text(String(arg), cx, H - 22, P[2], 16);
    return true;
  }
  if (fig === "zero") {
    circ(cx - 52, cy, 26, P[1], 1.8);
    text("1", cx - 52, cy, P[1], 20);
    text("language", cx - 52, cy + 46, P[1], 11);
    if (t > 0.45) {
      circ(cx + 56, cy, 26, P[3], 1.5);
      text("0", cx + 56, cy, P[3], 20);
      text("blood", cx + 56, cy + 46, P[3], 11);
    }
    return true;
  }
  if (fig === "voyage") {
    var word = String(arg);
    var x = 40 + Math.min(1, t) * (cx - 40);
    text(word, x, cy, P[0], 22);
    if (t > 0.5) {
      g.setLineDash([3, 4]);
      line(36, cy + 28, W - 36, cy + 28, P[2], 1);
      g.setLineDash([]);
      text("english", W - 64, cy + 48, P[4], 11);
    }
    return true;
  }
  if (fig === "rooms") {
    var rooms = arg[0];
    var pages = arg[1];
    grow(rooms, function (i) {
      var x = 16 + i * ((W - 24) / rooms);
      var w = (W - 40) / rooms;
      g.strokeStyle = pal(i);
      g.lineWidth = 1.4;
      g.strokeRect(x, 24, w - 6, H - 48);
      for (var k = 0; k < pages; k++) {
        var rr = Math.floor(k / 5);
        var cc = k % 5;
        circ(x + 8 + cc * 7, 36 + rr * 8, 2, pal(i));
      }
    });
    return true;
  }
  throw new Error("figure " + fig);
}
