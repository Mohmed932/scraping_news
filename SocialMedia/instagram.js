export const PostToInstagramPage = (ig_user_id, message, linkNews, access_token, image) => {
  const url = `https://graph.facebook.com/v20.0/${ig_user_id}/media`;
  const params = new URLSearchParams({
    image_url: image,
    caption: `${message} لمعرفه المزيد ${linkNews}`,
    access_token, // Replace with your actual access token
  });

  // Create the post using the fetch method
  fetch(`${url}?${params.toString()}`, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data.id);
      Puplisher(data.id);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  const Puplisher = async (creation_id) => {
    try {
      const req = await fetch(
        `https://graph.facebook.com/v20.0/${ig_user_id}/media_publish?creation_id=${creation_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_token,
          }),
        }
      );
      const res = await req.json();
      console.log("Success:", res);
    } catch (error) {
      console.error("Error:", error);
    }
  };
};
