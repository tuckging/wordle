if (is_today_special()) {
  document.addEventListener("DOMContentLoaded", async function () {
    //dom is fully loaded, but maybe waiting on images & css files
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    game = document.getElementsByTagName("game-app")[0].$game;
    function sendKey(key) {
      game.dispatchEvent(
        new CustomEvent("game-key-press", {
          bubbles: !0,
          composed: !0,
          detail: { key: key, is_special: true },
        })
      );
    }
    await sleep(2000);
    sendKey("w");
    await sleep(700);
    sendKey("i");
    await sleep(700);
    sendKey("l");
    await sleep(700);
    sendKey("l");
    await sleep(700);
    sendKey(" ");
    await sleep(700);
    sendKey("Enter");
    await sleep(2000);

    sendKey(" ");
    await sleep(700);
    sendKey("y");
    await sleep(700);
    sendKey("o");
    await sleep(700);
    sendKey("u");
    await sleep(700);
    sendKey(" ");
    await sleep(700);
    sendKey("Enter");
    await sleep(2000);

    sendKey("m");
    await sleep(700);
    sendKey("a");
    await sleep(700);
    sendKey("g");
    await sleep(700);
    sendKey("g");
    await sleep(700);
    sendKey("i");
    await sleep(3000);
    sendKey("Backspace");
    await sleep(300);
    sendKey("Backspace");
    await sleep(300);
    sendKey("Backspace");
    await sleep(1700);
    sendKey("r");
    await sleep(700);
    sendKey("r");
    await sleep(700);
    sendKey("y");
    await sleep(700);
    sendKey("Enter");
    await sleep(2000);

    sendKey(" ");
    await sleep(700);
    sendKey("m");
    await sleep(700);
    sendKey("e");
    await sleep(700);
    sendKey("?");
    await sleep(700);
    sendKey(" ");
    await sleep(700);
    sendKey("Enter");
  });
}
