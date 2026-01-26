const getQuotes = async () => {
    const api = "https://zenquotes.io/api/quotes";
    const proxy = "https://api.allorigins.win/get?url=" + encodeURIComponent(api);

    try {
        const data = await fetch(proxy);
        const midData = await data.json();
        const readData = JSON.parse(midData.contents); // actual quotes
        console.log(readData);
    } catch (error) {
        console.log("Error fetching quotes:", error);
    }

};

getQuotes();
