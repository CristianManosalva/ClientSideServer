const url2 = "https://api.coincap.io/v2";
const url1 = "http://localhost:3000/v1/servers";
const url = "https://apidomaininfo.herokuapp.com/v1/servers";

function getAssets() {
  return fetch(`${url2}/assets?limit=10`)
    .then(res => res.json())
    .then(res => res.data);
}

function getServerInfo(domain) {
  return (
    fetch(`${url}/getServerInfo/${domain}`)
    // .then(res => console.log(res))
    .then(res => res.json())
    // .then(res => console.log(res))
  );
}

function getServersRecord() {
  return (
    fetch(`${url}/getServersRecord`)
    // .then(res => console.log(res))
    .then(res => res.json())
    // .then(res => console.log(res))
  );
}

async function validDomain(domino) {
  var rp = {
    "type": "error",
    "message": "invalid host"
  }

  await fetch(`${url}/validDomain/${domino}`)
    .then(res => res.json())
    .then(res => rp = res)

  return rp.type == "Success"

}

async function getSslGrade(domino) {
  var rp = {
    "Endpoints": [],
    "SslGrade": "A",
    "Status": "IN_PROGRESS"
  }

  await fetch(`${url}/ConsultDomainSslGrade/${domino}`)
    .then(res => res.json())
    .then(res => rp = res)
  return rp
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

export default {
  getAssets,
  getServerInfo,
  getServersRecord,
  validDomain,
  getSslGrade,
  sleep
};
