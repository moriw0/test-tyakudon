document.addEventListener("DOMContentLoaded", () => {
  const elapsedTimeEl = document.getElementById("time");
  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const endBtn = document.getElementById("end");
  const retireBtn = document.getElementById("retire");
  const resetBtn = document.getElementById("reset");
  
  // タイマーの状態管理
  // let startTime = localStorage.getItem("start_time");
  let startTime
  let stopTime = 0;
  let timerID;

  // 経過時間をフォーマットする関数
  const formatElapsedTime = (time) => {
    const h = String(time.getHours()-9).padStart(2, '0');
    const m = String(time.getMinutes()).padStart(2, '0');
    const s = String(time.getSeconds()).padStart(2, '0');
    const ms = String(time.getMilliseconds()).padStart(3, '0');

    return `${h}:${m}:${s}.${ms}`;
  };

  // 経過時間を更新する関数
  const updateElapsedTime = () => {
    const currentTime = Date.now()
    const elapsedTime = new Date(currentTime - startTime + stopTime);
    elapsedTimeEl.textContent = formatElapsedTime(elapsedTime);
  };

  startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    endBtn.disabled = false;
    resetBtn.disabled = true;
    retireBtn.disabled = true;
    startTime = Date.now()
    // localStorage.setItem("start_time", startTime);
    timerID = setInterval(updateElapsedTime, 10);
  });
  
  // ストップボタンを押したときの処理
  stopBtn.addEventListener("click", () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    endBtn.disabled = true;
    resetBtn.disabled = false;
    retireBtn.disabled = false;
    // localStorage.removeItem("start_time");
    clearInterval(timerID);
    stopTime += (Date.now() - startTime);
    // submitElapsedTime("stop");
  });
  
  // リタイアボタンを押したときの処理
  retireBtn.addEventListener("click", () => {
    clearInterval(timerID);
    // submitElapsedTime("retire");
  });
  
  // リセットボタンのクリックイベント
  resetBtn.addEventListener("click", () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    endBtn.disabled = true;
    resetBtn.disabled = true;
    retireBtn.disabled = true;
    // localStorage.removeItem("start_time");
    elapsedTimeEl.textContent = "00:00:00.000";
    // startTime = null;
    stopTime = 0;
  });
  // // 経過時間をRailsのRecordsコントローラーのcreateアクションに送信する関数
  // const submitElapsedTime = (action) => {
  //   const currentTime = new Date().getTime();
  //   const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  //   const csrfToken = document.querySelector('[name=csrf-token]').content;
  //   const ramenShopId = <%= @ramen_shop.id %>;

  //   fetch("/records", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-CSRF-Token": csrfToken,
  //     },
  //     body: JSON.stringify({
  //       ramen_shop_id: ramenShopId,
  //       action: action,
  //       time: elapsedTime,
  //     }),
  //   })
  //   .then((response) => {
  //     if (response.ok) {
  //       window.location.href = "/";
  //     } else {
  //       alert("エラーが発生しました。");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
  // };

  // セッションに開始時刻が格納されている場合、タイマーを再開する
  // if (startTime) {
  //   timerID = setInterval(updateElapsedTime, 10);
  //   startBtn.disabled = true;
  //   stopBtn.disabled = false;
  //   retireBtn.disabled = false;
  //   resetBtn.disabled = false;
  // }
});

