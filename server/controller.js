module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            "Your love of music will be an important part of your life",
            "Your loyalty is a virtue, but not when its wedded with blind stubbornness",
            "Your mentality is alert, practical, and analytical",
            "Your mind is creative, original and alert",
            "Your mind is your greatest asset",
            "Your quick wits will get you out of a tough situation"
        ];

            // choose random fortune
        let randomFort = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomFort];
        res.status(200).send(randomFortune);
    },
    luckyNum: (req, res) => {
        const numbers = ["5", "7", "9", "12", "67"]

        // choose random lucky number
        let num = Math.floor(Math.random() * numbers.length);
        let randomNum = numbers[num];
        res.status(200).send(randomNum);
    },
    babyNames: (req, res) => {
        const names = ["Tyler", "Orlando", "Kevin", "Daniel"];
        let name = Math.floor(Math.random() * names.length);
        let randomNames = names[name];
        res.status(200).send(randomNames);
    },
    favFoods: (req, res) => {
        const foods = ["Rice", "Chicken", "Potatoes", "Bread"];
        let food = Math.floor(Math.random() * foods.length);
        let randomFoods = foods[food];
        res.status(200).send(randomFoods);
    },
}