document.head.insertAdjacentHTML(
    "beforeend",
    "<style>.app > :first-child,.panelblock.mainblock{flex: 1 !important}body > div.flexrow.app > div:nth-child(1) > div:nth-child(3){width:100% !important}</style>"
  );
  
  document.querySelector(".app > :last-child").remove();
  
  const hk_canvas_body = document.querySelector(
    ".panelblock.mainblock > .block > .body"
  );
  
  const hk_panelhead = document.querySelector(".panelblock.mainblock .panelhead");
  
  const hk_canvas = document.querySelector(".panelblock.mainblock .pbody canvas");
  
  function hk_photopea() {
    hk_canvas_body.style.width = "100%";
    hk_canvas.style.width = "100%";
    hk_panelhead.style.maxWidth = "100%";
  }
  
  hk_photopea();
  
  new MutationObserver((x) => {
    for (let y of x) {
      if (y.type === "attributes") {
        hk_photopea();
      }
    }
  }).observe(hk_canvas_body, {
    attributes: true,
  });