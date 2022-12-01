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
    await sleep(3000);
    sendKey("w");
    await sleep(500);
    sendKey("i");
    await sleep(500);
    sendKey("l");
    await sleep(500);
    sendKey("l");
    await sleep(500);
    sendKey(" ");
    await sleep(500);
    sendKey("Enter");
    await sleep(2000);

    sendKey(" ");
    await sleep(500);
    sendKey("y");
    await sleep(500);
    sendKey("o");
    await sleep(500);
    sendKey("u");
    await sleep(500);
    sendKey(" ");
    await sleep(500);
    sendKey("Enter");
    await sleep(2000);

    sendKey("m");
    await sleep(500);
    sendKey("a");
    await sleep(500);
    sendKey("g");
    await sleep(500);
    sendKey("g");
    await sleep(500);
    sendKey("i");
    await sleep(3000);
    sendKey("Backspace");
    await sleep(300);
    sendKey("Backspace");
    await sleep(300);
    sendKey("Backspace");
    await sleep(1500);
    sendKey("r");
    await sleep(500);
    sendKey("r");
    await sleep(500);
    sendKey("y");
    await sleep(500);
    sendKey("Enter");
    await sleep(2000);

    sendKey(" ");
    await sleep(500);
    sendKey("m");
    await sleep(500);
    sendKey("e");
    await sleep(500);
    sendKey("?");
    await sleep(500);
    sendKey(" ");
    await sleep(500);
    sendKey("Enter");
  });
}
