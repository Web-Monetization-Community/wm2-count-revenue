let total = 0;
let scale;

if (document.monetization) {
  document.monetization.addEventListener("monetizationprogress", ev => {
    // initialize currency and scale on first progress event
    if (total === 0) {
      scale = ev.detail.assetScale;
      document.getElementById("currency").innerText = ev.detail.assetCode;
    }

    total += Number(ev.detail.amount);

    const formatted = (total * Math.pow(10, -scale)).toFixed(scale);
    document.getElementById("total").innerText = formatted;
  });
}