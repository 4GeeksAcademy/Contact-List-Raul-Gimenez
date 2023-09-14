const URL = "https://pruebas-raul-4geeks-default-rtdb.europe-west1.firebasedatabase.app/contact-list.json";

export const getData = () => {
  return (
    fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error al obtener datos");
      }
      return res.json();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
  )
};

export const postData = (data) => {
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error al enviar datos");
      }
      return res.json();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
