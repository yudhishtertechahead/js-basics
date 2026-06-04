const fetchWithRetry = async (url, retries = 3) => {
  let attempt = 1;
  while (attempt <= retries) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Attempt ${attempt} failed for ${url}: ${error.message}`);
      if (attempt === retries) {
        throw new Error(`Failed after ${retries} attempts for ${url}`);
      }
      attempt++;
    }
  }
};

module.exports = {
  fetchWithRetry,
};
