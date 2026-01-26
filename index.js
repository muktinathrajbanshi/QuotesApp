 let realData = "";
 const getNewQuotes = () => {
    let ranum = Math.floor(Math.random() * 10);
    console.log(realData[ranum].a);
 };

const getQuotes = async () => {
    const api = "https://zenquotes.io/api/quotes";
    const proxy = "https://api.allorigins.win/get?url=" + encodeURIComponent(api);

    try {
        let data = await fetch(proxy);
        const midData = await data.json();
         realData = JSON.parse(midData.contents);
        getNewQuotes();
    } catch (error) {
        console.log("Error fetching quotes:", error);
    }

};

getQuotes();
