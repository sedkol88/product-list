document
  .getElementById("myButton")
  .addEventListener("click", executeAsyncFunction);

function executeAsyncFunction() {
  // Показываем overlay перед началом выполнения асинхронной функции
  document.getElementById("overlay").style.display = "flex";

  // Ваша асинхронная функция
  asyncFunction()
    .then(() => {
      // Скрываем overlay после завершения выполнения функции
      document.getElementById("overlay").style.display = "none";
    })
    .catch((error) => {
      console.error("Произошла ошибка:", error);
      // Тут также можно скрыть overlay в случае ошибки
      document.getElementById("overlay").style.display = "none";
    });
}

async function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Асинхронная функция завершена");
      resolve();
    }, 2000);
  });
}
