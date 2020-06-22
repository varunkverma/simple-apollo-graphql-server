const GRAPHQL_URL = "http://localhost:9000/";

const fetchGreeting = async () => {
  const response = await fetch("http://localhost:9000/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query{
                greeting
            }
        `,
    }),
  });

  const { data } = await response.json();
  return data;
};

fetchGreeting().then(({ greeting }) => {
  document.querySelector("h1").textContent = greeting;
});
