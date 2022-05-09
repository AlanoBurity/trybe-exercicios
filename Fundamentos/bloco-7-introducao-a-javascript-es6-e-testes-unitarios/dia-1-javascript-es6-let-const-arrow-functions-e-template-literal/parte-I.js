const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope =` ${ifScope} ótimo, fui utilizada no escopo `;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      elseScope = `${elseScope}  fui usada no Escopo` ;
      console.log(elseScope);
    }
    
  }
  
  testingScope(false);