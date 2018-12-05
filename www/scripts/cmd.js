function cmd(log) {
  $(".cmd").find('p:first').remove();
  $(".cmd").append("<p id='cmdText'></p>");
  $(".cmd").find('p:last').text("# " + log);
}
