
const getQuotes = async () => {
    
    try {
        const response = await fetch("./api/index.json");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

};

getQuotes();
