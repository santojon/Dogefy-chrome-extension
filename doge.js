document.body.dogefy({
  barkOn: ['click', 'mouseover'],
  barkInterval: 500,
  barkDuration: -1,
  sizes: ['16', '20', '24', '30', '36', '42'],
  shadow: true
}).manyBark();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      document.body.dogefy({
        barkOn: ['click', 'mouseover'],
        barkInterval: 500,
        barkDuration: -1,
        sizes: ['16', '20', '24', '30', '36', '42'],
        shadow: true
      }).manyBark();
    }
  }
);