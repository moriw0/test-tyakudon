document.addEventListener("DOMContentLoaded", () => {
  let startTime = sessionStorage.getItem("start_time");
  const elapsedTimeEl = document.getElementById("elapsed-time");
  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const retireBtn = document.getElementById("retire");
  const resetBtn = document.getElementById("reset");

  // タイマーの状態管理
  let timer;

  // 経過時間をフォーマットする関数
  const formatElapsedTime = (time) => {
    const hours = Math.floor(time / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    
    return `${hours}:${minutes}:${seconds}`;
  };

  // 経過時間を更新する関数
  const updateElapsedTime = () => {
    const currentTime = new Date().getTime();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    elapsedTimeEl.textContent = formatElapsedTime(elapsedTime);
  };

  // スタートボタンを押したときの処理
  // startBtn.addEventListener("click", () => {
  //   startTime = new Date();
  //   timer = setInterval(updateElapsedTime, 1000);
  //   startBtn.disabled = true;
  //   stopBtn.disabled = false;
  //   retireBtn.disabled = false;
  //   resetBtn.disabled = false;
  // });
  startBtn.addEventListener("click", () => {
    if (startTime === null) {
      startTime = new Date().getTime();
    }
    sessionStorage.setItem("start_time", new Date().getTime());
    timer = setInterval(updateElapsedTime, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    retireBtn.disabled = false;
    resetBtn.disabled = false;
  });
  
  // ストップボタンを押したときの処理
  stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    retireBtn.disabled = true;
    resetBtn.disabled = false;
    // submitElapsedTime("stop");
  });
  
  // リタイアボタンを押したときの処理
  retireBtn.addEventListener("click", () => {
    clearInterval(timer);
    // submitElapsedTime("retire");
  });
  
  // リセットボタンのクリックイベント
  resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    elapsedTimeEl.textContent = "00:00:00";
    sessionStorage.removeItem("start_time");
    startTime = null;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
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
  if (startTime) {
    timer = setInterval(updateElapsedTime, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    retireBtn.disabled = false;
    resetBtn.disabled = false;
  }
});

