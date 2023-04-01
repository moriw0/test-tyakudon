const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const endButton = document.getElementById('end');
const retireButton = document.getElementById('retire');

// 開始時間
// let startTime = localStorage.getItem("start_time");
let startTime
// 停止時間
let stopTime = 0;
// タイムアウトID
let timeoutID;

// 時間を表示する関数
function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours()-9).padStart(2, '0');
  const m = String(currentTime.getMinutes()).padStart(2, '0');
  const s = String(currentTime.getSeconds()).padStart(2, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(3, '0');

  time.textContent = `${h}:${m}:${s}.${ms}`;
  timeoutID = setTimeout(displayTime, 10);
}

// スタートボタンがクリックされたら時間を進める
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  endButton.disabled = false;
  resetButton.disabled = true;
  retireButton.disabled = true;
  startTime = Date.now()
  localStorage.setItem("start_time", startTime);
  displayTime();
});

// ストップボタンがクリックされたら時間を止める
stopButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  endButton.disabled = true;
  resetButton.disabled = false;
  retireButton.disabled = false;
  localStorage.removeItem("start_time");
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});

// リセットボタンがクリックされたら時間を0に戻す
resetButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  endButton.disabled = true;
  resetButton.disabled = true;
  retireButton.disabled = true;
  localStorage.removeItem("start_time");
  time.textContent = '00:00:00.000';
  stopTime = 0;
});
