const complimentBtn = document.querySelector("#complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const fortuneBtn = document.querySelector("#fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const luckyBtn = document.querySelector("#luckyButton")

const luckyNum = () => {
    axios.get("http://localhost:4000/api/lucky?number=9")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const babyNames = () => {
    axios.get("http://localhost:4000/api/baby/2")
    .then((res) => {
        console.log(res.data);
        document.querySelector("#baby").textContent = res.data.names
    });
};

const favFoods = () => {
    axios.post("http://localhost:4000/api/food")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
luckyBtn.addEventListener('click', luckyNum)