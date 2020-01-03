const url2 = "https://api.coincap.io/v2";
const url = "http://localhost:3000/v1/servers";

function getAssets() {
  return fetch(`${url2}/assets?limit=10`)
    .then(res => res.json())
    .then(res => res.data);
}

function getServerInfo() {
  return (
    fetch(`${url}/getServerInfo/truora.com`)
      // .then(res => console.log(res))
      .then(res => res.json())
    // .then(res => console.log(res))
  );
}

export default {
  getAssets,
  getServerInfo
};
