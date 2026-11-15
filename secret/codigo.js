
    const projeto = {
      "reflexo": { pista: "n", gif: "olho.gif" },
      "sombra":  { pista: "2 = e", gif: "olho.gif" },
      "vozes":     { pista: "r", gif: "olho.gif" },
      "maquina": { pista: "o", gif: "olho.gif" },
    };

    const tempoDoGif = 2000;   
    const tempoDaPista = 1400; 

    const caixaCodigo = document.getElementById("caixaCodigo");
    const overlay = document.getElementById("codigo");
    const gif = document.getElementById("sinal");
    const pista = document.getElementById("segredo");

    let timerGif;
    let timerPista;


    caixaCodigo.addEventListener("input", () => {
      const valorDigitado = caixaCodigo.value.trim().toLowerCase();

      if (projeto[valorDigitado]) {
        const dados = projeto[valorDigitado];
        caixaCodigo.value = ""; 
        caixaCodigo.blur();     
        iniciarEventoARG(dados.pista, dados.gif);
      }
    });

    function iniciarEventoARG(textoPista, arquivoGif) {
      clearTimeout(timerGif);
      clearTimeout(timerPista);


      gif.src = "";
      gif.src = arquivoGif;

      // Etapa 1: Mostra o GIF
      overlay.style.display = "flex";
      pista.style.display = "none";
      gif.style.display = "block";


      timerGif = setTimeout(() => {
        gif.style.display = "none";
        pista.textContent = textoPista;
        pista.style.display = "block";


        timerPista = setTimeout(() => {
          pista.style.display = "none";
          overlay.style.display = "none";
          caixaCodigo.focus();
        }, tempoDaPista);

      }, tempoDoGif);
    }