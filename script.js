const tweetInput = document.querySelector("#tweet-input");
const tweetBtn = document.querySelector("#tweet-button");

const tweets = JSON.parse(localStorage.getItem("tweets")) || [];

function insertTweet() {
  if (!tweetInput.value) {
    // warningPara.textContent = "* please fill all fields";
    return;
  }
  const tweet = {
    id: tweets[0]?.id ? tweets[0].id + 1 : 1,
    text: tweetInput.value,
    liked: false,
    retweeted: false,
  };
  tweets.unshift(tweet);
  tweetInput.value = "";
  localStorage.setItem("tweets", JSON.stringify(tweets));
  renderTweets();
}

// render tweets
function renderTweets() {
  if (tweets?.length) {
    feedContainer.textContent = "";
    for (let i in tweets) {
      createCard(tweets[i]);
    }
  }
}

function like(tweet, likeIcon) {
  tweet.liked = !tweet.liked;
  likeIcon.style.color = tweet.liked ? "red" : "rgb(111, 110, 110)";
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function retweet(tweet, retweetIcon) {
  if (tweet.retweeted === true) {
    return;
  }
  tweet.retweeted = !tweet.retweeted;
  retweetIcon.style.color = tweet.retweeted
    ? "rgb(0, 195, 0)"
    : "rgb(93, 92, 88)";
  tweets.unshift(tweet);
  localStorage.setItem("tweets", JSON.stringify(tweets));
  window.location.reload();
}

tweetBtn.addEventListener("click", insertTweet);
renderTweets();
