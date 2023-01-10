const filledHeart = "mdi:cards-heart";
const unfilledHeart = "mdi:cards-heart-outline";
const feedContainer = document.querySelector(".feed-container");

function addClassName(element, className) {
  if (className) {
    element.classList.add(className);
  }
}

function addTextContent(element, textContent) {
  element.textContent = textContent;
}

function appendElement(parentElement, child) {
  parentElement.appendChild(child);
}

function createElement(tag, className, textContent, parentElement) {
  const element = document.createElement(tag);
  addClassName(element, className);
  addTextContent(element, textContent);
  appendElement(parentElement, element);
  return element;
}

function createCardImage(card) {
  const profileImageContainer = createElement(
    "figure",
    "profile-image",
    "",
    card
  );
  profileImageContainer.classList.add("card-image");
  const image = createElement("img", "", "", profileImageContainer);
  image.src = "./profile.jpg";
  image.alt = "profile";
  image.style.width = "100%";
  image.style.height = "100%";
}

function createIcon(name, text, container) {
  const iconContainer = createElement("div", "icon-container", "", container);
  const icon = createElement("iconify-icon", "", "", iconContainer);
  icon.icon = name;
  createElement("p", "", text, iconContainer);
  return icon;
}

function createCard(tweet) {
  const cardContainer = createElement(
    "div",
    "card-container",
    "",
    feedContainer
  );
  const image = createCardImage(cardContainer);
  //////////////////////////////////////
  const cardContent = createElement("div", "card-content", "", cardContainer);
  const cardHeader = createElement("div", "card-header", "", cardContent);
  const namesContainer = createElement("div", "header-typo", "", cardHeader);
  createElement("p", "fullname", "Iyad Sabbah", namesContainer);
  createElement("p", "username", "@iyadsabbah98", namesContainer);
  createElement("p", "time", "10h", namesContainer);
  const headerIconContainer = createElement("div", "", "", cardHeader);
  const headerIcon = createElement(
    "iconify-icon",
    "nav-icon",
    "",
    headerIconContainer
  );
  headerIcon.icon = "ic:baseline-more-horiz";
  ////////////////////////////////////////////////
  const tweetText = createElement("div", "tweet-text", "", cardContent);
  createElement("p", "", tweet.text, tweetText);
  const tweetIconsContainer = createElement(
    "div",
    "tweet-icons-container",
    "",
    cardContent
  );
  createIcon(
    "material-symbols:mode-comment-outline",
    "1,880",
    tweetIconsContainer
  );
  const retweetIcon = createIcon("tabler:exchange", "240", tweetIconsContainer);
  const likeIcon = createIcon("mdi:cards-heart", "950", tweetIconsContainer);
  likeIcon.style.color = tweet.liked ? "red" : "rgb(111, 110, 110)";
  likeIcon.onclick = function () {
    like(tweet, likeIcon);
  };
  retweetIcon.style.color = tweet.retweeted ? "#1c98eb" : "rgb(111, 110, 110)";
  retweetIcon.onclick = function () {
    retweet(tweet, retweetIcon);
  };
}
