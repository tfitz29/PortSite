var images = new Array();
preloadImages("dayton pic.jpg");

function navigateToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function understands_video() {
  return !!document.createElement('video').canPlayType; // boolean
}

if (!understands_video()) {
  // Must be older browser or IE.
  // Maybe do something like hide custom
  // HTML5 controls. Or whatever...
  videoControls.style.display = 'none';
}

function setCookie(name, value, expires, path, domain, secure) {
  document.cookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}


function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
  }
  var end = document.cookie.indexOf(";", begin);
  if (end == -1) {
    end = dc.length;
  }
  return unescape(dc.substring(begin + prefix.length, end));
}

function deleteCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie = name + "=" +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      "; expires=Thu, 01-Jan-70 00:00:01 GMT";

  }

}

function preloadImages() {
  for (i = 0; i < preloadImages.arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preloadImages.arguments[i];
  }
}