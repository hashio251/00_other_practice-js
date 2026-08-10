import * as ramen from "./list.js";

const storeNameDisplay = document.querySelector('.store-name');
const storeStationDisplay = document.querySelector('.store-station');
const storeMapDisplay = document.querySelector('#map-display');
const ramenCategory = document.querySelector('#category');
const okBtn = document.querySelector('.select-btn');


const ramenTaste = {
  shoyu : ramen.soySourceRamen,
  miso : ramen.misoRamen,
  niboshi : ramen.niboshiRamen,
  shio : ramen.saltRamen,
  aburasoba : ramen.aburasobaRamen
};


function getUserWantInfo() {
  // selectで選ばれたvalueを取得
  const selectedTaste = ramenCategory.value;

  if (selectedTaste === "") {
    storeNameDisplay.textContent = '食べたいラーメンの種類を選択するロボ ♪';
    return;
  }

  // 選択された種類のラーメン一覧を取得
  const selectedRamenList = ramenTaste[selectedTaste];


  // ランダムな番号
  const randomChoiceStore = Math.floor(Math.random() * selectedRamenList.length);
  // 1店舗選ぶ
  const selectedRamen = selectedRamenList[randomChoiceStore];

  // 表示
  storeNameDisplay.textContent = selectedRamen.name;
  storeStationDisplay.textContent = `${selectedRamen.station}駅が最寄りロボ ♪`;
  storeMapDisplay.innerHTML = selectedRamen.map;
}

okBtn.addEventListener('click', getUserWantInfo);