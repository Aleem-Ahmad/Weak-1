async function fetchWithRetry(url, retries) {
    for (let i = 1; i <= retries; i++) {
        try {
            let res = await fetch(url);

            console.log("Status:", res.status);

            if (res.status >= 200 && res.status < 300) {
                return await res.json();
            }

            throw new Error(`Request failed with status ${res.status}`);

        } catch (error) {
            console.log(`Attempt ${i} failed:`, error.message);

            if (i === retries) {
                throw error;
            }

            console.log("Retrying...");
        }
    }
}