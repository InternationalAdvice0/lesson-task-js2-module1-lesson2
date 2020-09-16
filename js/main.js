import * as fetchApi from "./api/fetchApi.js";

const resultContainer = document.querySelector(".result-container");

fetchApi.callApi().then(function (data) {
  if (data.success === true) {
    resultContainer.innerHTML = "";
    for (let i = 0; i < 7; i++) {
      resultContainer.innerHTML += `<div class="result">
                                        <h4>${data.result[i].name}</h4>
                                        <p>Birthday: <b>${
                                          data.result[i].birthday
                                        }</b></p>
                                        <p>Nickname: <b>${
                                          data.result[i].nickname
                                        }</b></p>
                                        <div>Occupations:                                         
                                            ${createTags(
                                              data.result[i].occupation
                                            )}
                                        </div>
                                    </div>`;
    }
  } else {
    resultContainer.innerHTML = displayMessage("error", data.error);
  }
});

function createTags(list = []) {
  let tags = "";

  list.forEach((item) => (tags += `<span>${item}</span>`));

  return tags;
}

function displayMessage(type, message) {
  return `<div class="message ${type}">${message}</div>`;
}
