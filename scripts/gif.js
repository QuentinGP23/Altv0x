document.addEventListener("DOMContentLoaded", () => {
  const gifSequences = [
    [
      "./media/gif/Revolution1.gif",
      "./media/gif/Revolution2.gif",
      "./media/gif/Revolution3.gif",
      "./media/gif/Revolution4.gif",
    ],
    ["./media/gif/people.gif"],
    ["./media/gif/identity.gif"],
  ];
  const gifPopins = Array.from(document.querySelectorAll(".popin")).filter(
    (popin) => popin.querySelector("img.gif")
  );
  gifPopins.forEach((popin, popinIndex) => {
    const gif = popin.querySelector("img.gif");
    const btnDownload = popin.querySelector(".btn-download");
    const btnCopy = popin.querySelector(".btn-copy");

    let currentGifIndex = 0;

    if (gif && gifSequences[popinIndex]) {
      gif.src = gifSequences[popinIndex][currentGifIndex];
    }

    function nextGif() {
      if (!gifSequences[popinIndex]) return;
      currentGifIndex = (currentGifIndex + 1) % gifSequences[popinIndex].length;
      gif.src = gifSequences[popinIndex][currentGifIndex];
    }

    if (gif && btnDownload) {
      btnDownload.addEventListener("click", () => {
        const url = gif.src;
        const filename = url.split("/").pop();
        const a = document.createElement("a");
        a.href = url;
        a.download = filename || "artefact.gif";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        nextGif();
      });
    }

    if (gif && btnCopy) {
      btnCopy.addEventListener("click", async () => {
        try {
          if (!navigator.clipboard || !window.ClipboardItem) {
            alert("La copie d'images n'est pas supportée par ce navigateur.");
            return;
          }
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = gif.src;
          img.onload = async () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(async (blob) => {
              try {
                await navigator.clipboard.write([
                  new ClipboardItem({ [blob.type]: blob }),
                ]);
                nextGif();
              } catch (e) {
                alert(
                  "Impossible de copier ce GIF en PNG.\n" + (e.message || e)
                );
              }
            }, "image/png");
          };
          img.onerror = () => {
            alert("Impossible de charger l'image pour la copier.");
          };
        } catch (e) {
          alert("Impossible de copier ce GIF.\n" + (e.message || e));
        }
      });
    }
  });
});
