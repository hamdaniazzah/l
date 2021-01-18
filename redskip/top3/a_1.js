$(function(){
  if ((location.search.indexOf('') === -1) || (location.search.indexOf('?a=') !== -1)) {
/* START */
var l3id = window.location.search.substring(3);history.pushState('', document.title, window.location.pathname);
$(".link3_post").hide();
var l3p = 'https://www.link3.my.id';
var l3p1 = '/2021/';
var l3p2 = '/2022/';
var l3p3 = '/2023/';
var g = '?alt=';
var listU = [l3p+l3p1+g+l3id,l3p+l3p2+g+l3id,l3p+l3p3+g+l3id];
var randomU = listU[Math.floor(Math.random()*listU.length)];
$(".link3_l3").each(function(){
  $(this).replaceWith('<div class="link3_l3class"><a href="' + randomU + '" target="_blank" rel="nofollow noopener" onclick="l3click()">SKIP&#10140;</a></div><div id="link3_ads"></div>')});
$("#link3_ads").replaceWith('<div class="link3_ads" align="center"><div id="a_d"><iframe data-aa="1554266" src="//ad.a-ads.com/1554266?size=320x50" scrolling="no" style="width:320px; height:50px; border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe></div></div>');
/* FINISH */}});
