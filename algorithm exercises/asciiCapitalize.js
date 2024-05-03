function asciiCapitalize (str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result = result + ((str.charCodeAt(i) % 2 === 0) ? str[i].toUpperCase() : str[i].toLowerCase());
    }
    return result;
  }
  
  asciiCapitalize('Oh what a beautiful morning.');
  