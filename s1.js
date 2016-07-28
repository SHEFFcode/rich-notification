var options = {
  type: "basic",
  title: "My first popup with chrome",
  message: "This is pretty good",
  iconUrl: "twitter.png"
};

chrome.notifications.create(options, callback);

function callback () {
  console.log('popup done!');
}
