export const prettifyCode = (code: string) => {
  const lines = code.split('\n');

  let indentation = 0;
  const braceRegex = /\{|\}/;

  const formattedLines = lines.map((line) => {
    const trimmedLine = line.trim();
    const hasBrace = braceRegex.test(trimmedLine);

    if (hasBrace) {
      if (trimmedLine.endsWith('{')) {
        const indentedLine = ' '.repeat(indentation) + trimmedLine;

        return indentedLine.replace(/\{\s*$/, ' {');
      }

      if (trimmedLine.endsWith('}')) {
        indentation = Math.max(0, indentation - 2);
        const trimmedWithoutLastChar = trimmedLine.slice(0, -1);
        return ' '.repeat(indentation) + trimmedWithoutLastChar + '\n}';
      }
    }

    const indentedLine =
      ' '.repeat(indentation) + trimmedLine.replace(/:\s*([^}])/g, ': $1');

    if (trimmedLine.includes('{')) {
      indentation += 2;
    }

    if (trimmedLine.includes('}')) {
      indentation = Math.max(0, indentation - 2);
    }

    return indentedLine;
  });

  const formattedQuery = formattedLines.join('\n');

  return formattedQuery;
};
