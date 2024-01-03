export const prettifyCode = (query: string, indentation = 2) => {
  let formattedQuery = '';
  let indentationLevel = 0;
  let withinBraces = false;

  for (let i = 0; i < query.length; i++) {
    const char = query[i];

    switch (char) {
      case '{':
        const indentedOpenBrace =
          ' '.repeat(indentationLevel * indentation) + ' {\n';
        formattedQuery += indentedOpenBrace;
        indentationLevel++;
        withinBraces = true;
        break;
      case '}':
        indentationLevel = Math.max(0, indentationLevel - 1);
        const indentedCloseBrace =
          '\n' + ' '.repeat(indentationLevel * indentation) + '}';
        formattedQuery += indentedCloseBrace;
        withinBraces = false;
        break;
      case ',':
        formattedQuery += withinBraces
          ? ',\n' + ' '.repeat(indentationLevel * indentation)
          : ', ';
        break;
      case '\n':
      case '\r':
      case '\t':
      case ' ':
        break;
      default:
        formattedQuery += formattedQuery.endsWith('query') ? ' ' + char : char;
    }
  }

  return formattedQuery;
};
