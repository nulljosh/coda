// Hero: Coda playing itself. Real lines from quotes.json; the quote types in, the right source lights up, the poster turns over. Decoration only.
(function () {
  var wall = document.getElementById('qwall'); if (!wall) return;
  var Q = [["I'm gonna make him an offer he can't refuse.", ["The Godfather", "Goodfellas", "Scarface", "Casino"], "The Godfather", "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"], ["May the Force be with you.", ["Star Trek", "Star Wars", "Dune", "The Last Starfighter"], "Star Wars", "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"], ["You're gonna need a bigger boat.", ["Jaws", "The Perfect Storm", "Deep Blue Sea", "Titanic"], "Jaws", "https://image.tmdb.org/t/p/w500/lxM6kqilAdpdhqUl2biYp5frUxE.jpg"], ["Here's looking at you, kid.", ["Casablanca", "Gone with the Wind", "Roman Holiday", "An American in Paris"], "Casablanca", "https://image.tmdb.org/t/p/w500/lGCEKlJo2CnWydQj7aamY7s1S7Q.jpg"], ["I'll be back.", ["Predator", "RoboCop", "The Terminator", "Total Recall"], "The Terminator", "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg"], ["I'm king of the world!", ["Titanic", "The Perfect Storm", "Master and Commander", "Poseidon"], "Titanic", "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"], ["To infinity and beyond!", ["Toy Story", "A Bug's Life", "Cars", "Up"], "Toy Story", "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"], ["Stupid is as stupid does.", ["Forrest Gump", "Rain Man", "Big", "Cast Away"], "Forrest Gump", "https://image.tmdb.org/t/p/w500/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg"], ["There's no place like home.", ["Alice in Wonderland", "The Wizard of Oz", "Peter Pan", "Mary Poppins"], "The Wizard of Oz", "https://image.tmdb.org/t/p/w500/uCC3j4pV9eOZwzDUWp2ilbcTf1f.jpg"], ["You had me at hello.", ["Jerry Maguire", "As Good as It Gets", "Notting Hill", "You've Got Mail"], "Jerry Maguire", "https://image.tmdb.org/t/p/w500/lABvGN7fDk5ifnwZoxij6G96t2w.jpg"], ["Houston, we have a problem.", ["Gravity", "Apollo 13", "The Martian", "Interstellar"], "Apollo 13", "https://image.tmdb.org/t/p/w500/tVeKscCm2fY1xDXZk8PgnZ87h9S.jpg"], ["You talkin' to me?", ["Taxi Driver", "Raging Bull", "Mean Streets", "Goodfellas"], "Taxi Driver", "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg"], ["I feel the need — the need for speed.", ["Days of Thunder", "Top Gun", "The Fast and the Furious", "Speed"], "Top Gun", "https://image.tmdb.org/t/p/w500/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg"], ["Here's Johnny!", ["The Shining", "Misery", "The Amityville Horror", "Poltergeist"], "The Shining", "https://image.tmdb.org/t/p/w500/uAR0AWqhQL1hQa69UDEbb2rE5Wx.jpg"], ["Roads? Where we're going, we don't need roads.", ["Back to the Future", "Doc Hollywood", "Field of Dreams", "The Time Machine"], "Back to the Future", "https://image.tmdb.org/t/p/w500/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg"], ["Just keep swimming.", ["Finding Nemo", "Shark Tale", "The Little Mermaid", "Moana"], "Finding Nemo", "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg"], ["That's what she said.", ["The Office", "Parks and Recreation", "Community", "30 Rock"], "The Office", "https://image.tmdb.org/t/p/w500/kKZnljlSpvkg42QAKeOIBhAQGgy.jpg"]];
  var mq = function (q) { return matchMedia(q).matches; };
  var n = mq('(max-width: 560px)') ? 3 : mq('(max-width: 960px)') ? 6 : 9, still = mq('(prefers-reduced-motion: reduce)');
  for (var i = 0; i < n; i++) (function (i) {
    var el = document.createElement('div'); el.className = 'qc';
    el.innerHTML = '<q></q><div class="pos">?</div><div class="opts"></div>'; wall.appendChild(el);
    var q = el.querySelector('q'), pos = el.querySelector('.pos'), opts = el.querySelector('.opts'), k = i;
    function play() {
      var x = Q[k % Q.length]; k += n;
      pos.style.backgroundImage = ''; pos.textContent = '?'; opts.innerHTML = ''; var right;
      x[1].forEach(function (o) { var s = document.createElement('span'); s.textContent = o; opts.appendChild(s); if (o === x[2]) right = s; });
      function reveal() { right.className = 'ok'; pos.textContent = ''; pos.style.backgroundImage = 'url("' + x[3] + '")'; }
      if (still) { q.textContent = x[0]; return reveal(); }
      var j = 0; q.textContent = '';
      (function type() { q.textContent = x[0].slice(0, ++j); if (j < x[0].length) setTimeout(type, 35 + Math.random() * 40); else { setTimeout(reveal, 1300); setTimeout(play, 4800 + Math.random() * 1500); } })();
    }
    setTimeout(play, i * 500);
  })(i);

  // Parallax: the wall drifts at 0.45, the copy lifts at 0.2 and fades.
  if (still) return;
  var bg = document.querySelector('.hero-bg'), copy = document.querySelector('.hero-copy'), t = 0;
  addEventListener('scroll', function () {
    if (t) return;
    t = requestAnimationFrame(function () {
      t = 0; var y = scrollY, h = innerHeight; if (y > h * 1.2) return;
      bg.style.setProperty('--py', (y * .45) + 'px');
      copy.style.transform = 'translate3d(0,' + (y * .2) + 'px,0)'; copy.style.opacity = Math.max(0, 1 - y / (h * .7));
    });
  }, { passive: true });
})();
