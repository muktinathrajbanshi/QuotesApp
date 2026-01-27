
const getQuotes = async () => {
    
    try {
        const response = await fetch("https://raw.githubusercontent.com/muktinathrajbanshi/quotes-api/refs/heads/main/index.json");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

};

getQuotes();
