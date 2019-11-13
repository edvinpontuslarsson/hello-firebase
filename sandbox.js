const getTextContent = (text) => {
  return text[
    'content'
  ]; /*
  return text instanceof Object &&
    text.hasOwnProperty('content')
    ? text['content']
    : 'does not return undefined at least';*/
};

console.log(getTextContent(5));
