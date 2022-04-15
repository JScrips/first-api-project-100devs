const getAPI = () => {
  fetch(`https://cat-fact.herokuapp.com/facts`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let i = Math.ceil(Math.random() * data.length - 1);
      let fact = data[i];
      console.log(fact);
      document.querySelector("#first").innerHTML = fact.createdAt;
      document.querySelector("#second").innerHTML = fact.deleted;
      document.querySelector("#third").innerHTML = fact.source;
      document.querySelector("#fourth").innerHTML = fact.status;
      document.querySelector("#fifth").innerHTML = fact.text;
      document.querySelector("#sixth").innerHTML = fact.type;
      document.querySelector("#seventh").innerHTML = fact.updatedAt;
      document.querySelector("#eighth").innerHTML = fact.used;
      document.querySelector("#ninth").innerHTML = fact.user;
      document.querySelector("#tenth").innerHTML = fact._id;

      localStorage.setItem(`${fact}`, `${i}`);
    });
};

document.querySelector("button").addEventListener("click", getAPI);
