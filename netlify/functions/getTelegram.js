exports.handler = async (event) => {
  // Base64 encode the Telegram URL
  const encoded = "aHR0cHM6Ly90Lm1lL0phbWVzdHd5bW4"; // base64 for https://t.me/Jameswymn

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: encoded })
  };
};