document.addEventListener('DOMContentLoaded', function() {
  var barkButton = document.getElementById('makeItBarkALot');
  barkButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      document.body.dogefy({
          barkOn: ['click', 'mouseover'],
          barkInterval: 500,
          barkDuration: -1,
          sizes: ['16', '20', '24', '30', '36', '42'],
          shadow: true
        }).manyBark();
    });
  });
});