(function() {
    const segredosARG = {
      "terminal": () => {
        document.getElementById("terminal").style.display = "inline-block";
      },
      "nero": () => {
        document.getElementById("nero").style.display = "inline-block";
      },
      "verdade": () => {
        const msg = document.getElementById("");
        msg.style.display = "block";

        setTimeout(() => { msg.style.display = "none"; }, 4000);
      },
      "sinal": () => {

        const audio = new Audio("estatica.mp3");
        audio.play();
      },
      "apagar": () => {

        document.querySelectorAll(".hades").forEach(el => {
          el.style.display = "none";
        });
      }
    };

    const tamanhoMaximo = Math.max(...Object.keys(segredosARG).map(p => p.length));
    let historicoTeclas = "";

    document.addEventListener("keydown", (event) => {
      const tag = event.target.tagName.toLowerCase();
      if (tag === "input" || tag === "textarea") return;

      if (event.key.length === 1) {
        historicoTeclas += event.key.toLowerCase();

        if (historicoTeclas.length > tamanhoMaximo) {
          historicoTeclas = historicoTeclas.slice(-tamanhoMaximo);
        }

        for (const [palavra, acao] of Object.entries(segredosARG)) {
          if (historicoTeclas.endsWith(palavra)) {
            acao();
            historicoTeclas = "";
            break;
          }
        }
      }
    });
  })();
