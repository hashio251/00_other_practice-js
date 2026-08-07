import * as ramen from "./list.js";

const storeNameDisplay = document.querySelector('.store-name');
const storeStationDisplay = document.querySelector('.store-station');
const storeMapDisplay = document.querySelector('#map-display');
const ramenCategory = document.querySelectorAll('#category');
const okBtn = document.querySelector('.select-btn');


const ramenTaste = {
  shoyu : ramen.soySourceRamen,
  miso : ramen.misoRamen,
  niboshi : ramen.niboshiRamen,
  shio : ramen.saltRamen,
  aburasoba : ramen.aburasobaRamen
};


function getUserInfo() {
  const selectedTaste = ramenTaste.value;

  if (selectedTaste === "") {
    storeNameDisplay.textContent = '食べたいラーメンの種類を選択するロボ ♪';
    return;
  }

  // 選択された種類のラーメン一覧を取得
  const randomIndex = ramenTaste[selectedTaste];


  const randomCoiseStore =  Math.floor(Math.random() * selectedRamenList.length);
  const selectedRamenList = selectedRamenList[randomIndex];

  storeNameDisplay.textContent = selectedRamenList.name;
  storeStationDisplay.textContent = selectedRamenList.station;
  storeMapDisplay.innerHTML = selectedRamenList.map;
}

okBtn.addEventListener('click', getUserInfo);