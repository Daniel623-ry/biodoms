exports.handler = async (event) => {
  const encoded = "aHR0cHM6Ly90Lm1lL0phbWVzd3ltbg="; // correct Base64 for Jameswymn

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: encoded })
  };
};