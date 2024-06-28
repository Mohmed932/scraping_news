// const CodePermissions = () => {
//     const url = `https://threads.net/oauth/authorize
//     ?client_id=966169984417122
//     &redirect_uri=https://awalbawl.online
//     &scope=threads_basic, threads_content_publish, threads_read_replies, threads_manage_replies, threads_manage_insights
//     &response_type=code`;
//     window.open(url, "_blank");
//   };
//   CodePermissions();
const ShortAccessToken = () => {
    const clientId = "966169984417122";
    const clientSecret = "61991ee7f25c76ae92221529ed7bb8ec"; // أدخل client_secret الكامل هنا
    const redirectUri = "https://socialsizzle.herokuapp.com/auth/";
    const code = "AQBx-hBsH3..."; // أدخل الكود الكامل هنا
  
    const url = "https://graph.threads.net/oauth/access_token";
  
    const formData = new URLSearchParams();
    formData.append("client_id", clientId);
    formData.append("client_secret", clientSecret);
    formData.append("grant_type", "authorization_code");
    formData.append("redirect_uri", redirectUri);
    formData.append("code", code);
  
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
  