function getImageExtension(url) {
  var match = url.match(/\.(jpg|jpeg|png|gif)(?:\?|$)/i);

  if (match) {
    return match[1].toLowerCase();
  } else {
    return null;
  }
}

export const getImageUrlWithoutQueryParams = (url) => {
  const extension = getImageExtension(url);
  const newUrl = url.split(".jpg" || ".jpeg");
  return `${newUrl[0]}.${extension}`;
};
