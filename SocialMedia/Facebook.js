export const PostToFacebookPage = (
    pageId,
    message,
    linkNews,
    access_token,
    image
  ) => {
    const url = `https://graph.facebook.com/${pageId}/photos?url=${image}&access_token=${access_token}&message=${
      message + linkNews
    }`;
  
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
      })
      .catch((error) => {
        console.error("Error posting on Facebook Page:", error);
      });
  };