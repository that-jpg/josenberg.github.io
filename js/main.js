(function(){

  var colors = [
      "YlGn", "YlGnBu", "GnBu",
      "BuGn", "PuBuGn", "PuBu",
      "BuPu", "RdPu", "PuRd",
      "OrRd", "YlOrRd", "YlOrBr",
      "Purples", "Blues", "Greens",
      "Oranges", "Reds", "Greys",
      "PuOr", "BrBG", "PRGn",
      "PiYG", "RdBu", "RdGy" ,
      "RdYlBu", "Spectral", "RdYlGn",
      "Accent", "Dark2", "Paired",
      "Pastel1", "Pastel2", "Set1",
      "Set2", "Set3"];

  var colorToUse = colors[Math.floor(Math.random() * (colors.length - 1))];
  // ;

  var headerWidth = (window.innerWidth > 960) ? 960 : window.innerWidth;
  var header = Trianglify({
      width: headerWidth,
      height: 200,
      x_colors: colorToUse
  });

$("#banner").append(header.canvas());

  var footer = Trianglify({
      width: window.innerWidth,
      height: 200,
      x_colors: colorToUse
  });

  $("#footer").append(footer.canvas());
})();
