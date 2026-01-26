 let realData = "";
 const getNewQuotes = () => {
    let ranum = Math.floor(Math.random() * 10);
    console.log(ranum);
    
 }

const getQuotes = async () => {
    const api = "https://zenquotes.io/api/quotes";
    const proxy = "https://api.allorigins.win/get?url=" + encodeURIComponent(api);

    try {
        const data = await fetch(proxy);
        const midData = await data.json();
        const realData = JSON.parse(midData.contents);
        getNewQuotes();
        // console.log(realData.length);
        // console.log(realData[0].q);
        // console.log(realData[0].a);
    } catch (error) {
        console.log("Error fetching quotes:", error);
    }

};

getQuotes();
