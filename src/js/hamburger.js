const forEach = function(t,o,r){
    if("[object Object]"===Object.prototype.toString.call(t))
        for(let c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);
    else 
        for(let e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    const hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }