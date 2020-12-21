let progess = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;





console.log('document.body.scrollHeight', document.body.scrollHeight);
console.log(' window.innerHeight', window.innerHeight);

window.onscroll = function () {
  console.log('00- totalHeight', totalHeight);
  console.log('01- document.body.scrollWidth=', document.body.scrollWidth);
  console.log('02- document.body.scrollHeight',   document.body.scrollHeight);
  console.log('03- window.innerHeight', window.innerHeight);
  console.log('04- window.pageYOffset',   window.pageYOffset);
  console.log('05- window.innerHeight', window.innerHeight);
  console.log('06- window.scrollTop',   window.scrollbars);
 console.log('Current scroll from the left: ' + window.pageXOffset);

  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progess.style.height = progressHeight + '%';
};
console.log(totalHeight);
