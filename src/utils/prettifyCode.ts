export const prettifyCode = (query: string, indentation = 2) => {
  const lines = query.split('\n');
  let currentIndentation = 0;

  const formattedLines = lines.map((line, index) => {
    const trimmedLine = line.trim();

    if (/^(type|query|mutation)\s+\w+\s*{$/.test(trimmedLine)) {
      const indentedLine = ' '.repeat(currentIndentation) + trimmedLine;
      currentIndentation += indentation;
      return indentedLine;
    }

    if (trimmedLine.endsWith('{')) {
      const indentedLine = ' '.repeat(currentIndentation) + trimmedLine;
      currentIndentation += indentation;
      return indentedLine.replace(/\{\s*$/, ' {');
    }

    if (trimmedLine.endsWith('}')) {
      const indentedLine = ' '.repeat(currentIndentation) + trimmedLine;
      currentIndentation += indentation;
      return indentedLine.replace(/\{\s*$/, ' }');
    }

    if (trimmedLine === '}') {
      currentIndentation = Math.max(0, currentIndentation - indentation);
      const lastLine = index === lines.length - 1;
      const newLine = lastLine ? '' : '\n';
      return ' '.repeat(currentIndentation) + trimmedLine + newLine;
    }

    const indentedLine =
      ' '.repeat(currentIndentation) + trimmedLine.replace(/:\s*/, ': ');

    return indentedLine;
  });

  formattedLines.forEach((line) => line.trim());

  return formattedLines.join('\n');
};
