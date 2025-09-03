
function alternarCalculadora() {
      const dropdown = document.getElementById('dropdown').value;

      // Oculta todas as calculadoras
      document.querySelectorAll('.calculadora').forEach(calc => {
        calc.classList.remove('active');
      });

      // Exibe a calculadora selecionada
      const calculadoraSelecionada = document.getElementById(dropdown);
      calculadoraSelecionada.classList.add('active');
    }

     // Exibe a primeira calculadora por padrão
     document.getElementById('calc1').classList.add('active');

     // Calculadora 1000MB

    function calcular1000() {
      const desconto = document.getElementById('desconto1000').value;
      
      const kindle1000 = 0.1328;
      const ubook1000 = 0.1194;
      const streamingTV1000 = 0.2884;
      const standard1000 = 0.1594;
      const comunicacaoMultimidia1000 = 0.3000;
      //const nexConectaIP1000 = 0.465;
      //const leveduca1000 = 0.04;

      const resultadoKindle1000 = (parseFloat(desconto)*kindle1000).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoUbook1000 = (parseFloat(desconto)*ubook1000).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoStreamingTV1000 = (parseFloat(desconto)*streamingTV1000).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoComunicacaoMultimidia1000 = (parseFloat(desconto)*comunicacaoMultimidia1000).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
      const resultadoStandard1000 = (parseFloat(desconto)*standard1000).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoNexConectaIP1000 = (parseFloat(desconto)*nexConectaIP1000).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoLeveduca1000 = (parseFloat(desconto)*leveduca1000).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

      //const resultado = parseFloat(input1) + parseFloat(input2);  // Exemplo de cálculo

      document.getElementById('resultadoKindle1000').innerText =  resultadoKindle1000;
      document.getElementById('resultadoUbook1000').innerText =  resultadoUbook1000;
      document.getElementById('resultadoStreamingTV1000').innerText =  resultadoStreamingTV1000;
      document.getElementById('resultadoComunicacaoMultimidia1000').innerText = resultadoComunicacaoMultimidia1000;
      document.getElementById('resultadoStandard1000').innerText = resultadoStandard1000;
      //document.getElementById('resultadoNexConectaIP1000').innerText = resultadoNexConectaIP1000;
      //document.getElementById('resultadoLeveduca1000').innerText = resultadoLeveduca1000;
    }

    function calcular700() {
      const desconto700 = document.getElementById('desconto700').value;

      
      const kindle700 = 0.1532;
      const ubook700 = 0.1378;
      const streamingTV700 = 0.2250;
      const standard700 = 0.1840;
      const comunicacaoMultimidia700 = 0.30;
      //const nexConectaIP700 = 0.34;
      //const leveduca700 = 0.08;

      const resultadoKindle700 = (parseFloat(desconto700)*kindle700).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoUbook700 = (parseFloat(desconto700)*ubook700).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoStreamingTV700 = (parseFloat(desconto700)*streamingTV700).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoComunicacaoMultimidia700 = (parseFloat(desconto700)*comunicacaoMultimidia700).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
      const resultadoStandard700 = (parseFloat(desconto700)*standard700).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoNexConectaIP500 = (parseFloat(desconto500)*nexConectaIP500).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoLeveduca500 = (parseFloat(desconto500)*leveduca500).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

      //const resultado = parseFloat(input1) + parseFloat(input2);  // Exemplo de cálculo
      document.getElementById('resultadoKindle700').innerText =  resultadoKindle700;
      document.getElementById('resultadoUbook700').innerText =  resultadoUbook700;
      document.getElementById('resultadoStreamingTV700').innerText =  resultadoStreamingTV700;
      document.getElementById('resultadoComunicacaoMultimidia700').innerText = resultadoComunicacaoMultimidia700;
      document.getElementById('resultadoStandard700').innerText = resultadoStandard700;
      //document.getElementById('resultadoNexConectaIP500').innerText = resultadoNexConectaIP500;
      //document.getElementById('resultadoLeveduca500').innerText = resultadoLeveduca500;
    }


    function calcular500() {
      const desconto500 = document.getElementById('desconto500').value;

      const kindle500 = 0.1992;
      const ubook500 = 0.1792;
      const streamingTV500 = 0.0824;
      const standard500 = 0.2392;
      const comunicacaoMultimidia500 = 0.30;
      
      //const nexConectaIP500 = 0.34;
      //const leveduca500 = 0.08;
      const resultadoKindle500 = (parseFloat(desconto500)*kindle500).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoUbook500 = (parseFloat(desconto500)*ubook500).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoStreamingTV500 = (parseFloat(desconto500)*streamingTV500).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoComunicacaoMultimidia500 = (parseFloat(desconto500)*comunicacaoMultimidia500).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
      const resultadoStandard500 = (parseFloat(desconto500)*standard500).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoNexConectaIP500 = (parseFloat(desconto500)*nexConectaIP500).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoLeveduca500 = (parseFloat(desconto500)*leveduca500).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

      //const resultado = parseFloat(input1) + parseFloat(input2);  // Exemplo de cálculo
      document.getElementById('resultadoKindle500').innerText =  resultadoKindle500;
      document.getElementById('resultadoUbook500').innerText =  resultadoUbook500;
      document.getElementById('resultadoStreamingTV500').innerText =  resultadoStreamingTV500;
      document.getElementById('resultadoComunicacaoMultimidia500').innerText = resultadoComunicacaoMultimidia500;
      document.getElementById('resultadoStandard500').innerText = resultadoStandard500;

      //document.getElementById('resultadoNexConectaIP500').innerText = resultadoNexConectaIP500;
      //document.getElementById('resultadoLeveduca500').innerText = resultadoLeveduca500;
    }

    function calcular300() {
      const desconto300 = document.getElementById('desconto300').value;

      const kindle300 = 0.2214;
      const ubook300 = 0.1990;
      const streamingTV300 = 0.0571;
      const comunicacaoMultimidia300 = 0.3;
      const standard300 = 0.2225;
      //const nexConectaIP350 = 0.33;
      //const leveduca350 = 0.08;

      const resultadoKindle300 = (parseFloat(desconto300)*kindle300).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
      const resultadoUbook300 = (parseFloat(desconto300)*ubook300).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoStreamingTV300 = (parseFloat(desconto300)*streamingTV300).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoComunicacaoMultimidia300 = (parseFloat(desconto300)*comunicacaoMultimidia300).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
      const resultadoStandard300 = (parseFloat(desconto300)*standard300).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

      //const resultadoNexConectaIP300 = (parseFloat(desconto300)*nexConectaIP350).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoLeveduca350 = (parseFloat(desconto350)*leveduca350).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

      //const resultado = parseFloat(input1) + parseFloat(input2);  // Exemplo de cálculo
      
      document.getElementById('resultadoKindle300').innerText =  resultadoKindle300;
      document.getElementById('resultadoUbook300').innerText =  resultadoUbook300;
      document.getElementById('resultadoStreamingTV300').innerText =  resultadoStreamingTV300;
      document.getElementById('resultadoComunicacaoMultimidia300').innerText = resultadoComunicacaoMultimidia300;
      document.getElementById('resultadoStandard300').innerText = resultadoStandard300;

      //document.getElementById('resultadoNexConectaIP350').innerText = resultadoNexConectaIP350;
      //document.getElementById('resultadoLeveduca350').innerText = resultadoLeveduca350;
    }

    function calcular200() {
      const desconto200 = document.getElementById('desconto200').value;

      const kindle200 = 0.2847;
      const ubook200 = 0.2561;
      const standard200 = 0.1592;
      const comunicacaoMultimidia200 = 0.3;
      //const nexConectaIP150 = 0.47;
      //const leveduca150 = 0.05;
    
      const resultadoKindle200 = (parseFloat(desconto200)*kindle200).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoUbook200 = (parseFloat(desconto200)*ubook200).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoStandard200 = (parseFloat(desconto200)*standard200).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoComunicacaoMultimidia200 = (parseFloat(desconto200)*comunicacaoMultimidia200).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
      //const resultadoNexConectaIP150 = (parseFloat(desconto150)*nexConectaIP150).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      //const resultadoLeveduca150 = (parseFloat(desconto150)*leveduca150).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

      //const resultado = parseFloat(input1) + parseFloat(input2);  // Exemplo de cálculo
      document.getElementById('resultadoKindle200').innerText =  resultadoKindle200;
      document.getElementById('resultadoUbook200').innerText =  resultadoUbook200;
      document.getElementById('resultadoStandard200').innerText =  resultadoStandard200;
      document.getElementById('resultadoComunicacaoMultimidia200').innerText = resultadoComunicacaoMultimidia200;
      //document.getElementById('resultadoNexConectaIP150').innerText = resultadoNexConectaIP150;
      //document.getElementById('resultadoLeveduca150').innerText = resultadoLeveduca150;
      
    }

    function calcular100() {
      const desconto100 = document.getElementById('desconto100').value;

      
      const ubook100 = 0.1;
      const streamingTV100 = 0.093;
      const nexConectaIP100 = 0.457;
      const leveduca100 = 0.05;
      const comunicacaoMultimidia100 = 0.3;

      const resultadoUbook100 = (parseFloat(desconto100)*ubook100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const resultadoStreamingTV100 = (parseFloat(desconto100)*streamingTV100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoNexConectaIP100 = (parseFloat(desconto100)*nexConectaIP100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoLeveduca100 = (parseFloat(desconto100)*leveduca100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const resultadoComunicacaoMultimidia100 = (parseFloat(desconto100)*comunicacaoMultimidia100).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
     

      //const resultado = parseFloat(input1) + parseFloat(input2);  // Exemplo de cálculo
      document.getElementById('resultadoUbook100').innerText =  resultadoUbook100;
      document.getElementById('resultadoStreamingTV100').innerText =  resultadoStreamingTV100;
      document.getElementById('resultadoNexConectaIP100').innerText = resultadoNexConectaIP100;
      document.getElementById('resultadoLeveduca100').innerText = resultadoLeveduca100;
      document.getElementById('resultadoComunicacaoMultimidia100').innerText = resultadoComunicacaoMultimidia100;
      
    }