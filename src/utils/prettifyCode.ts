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
      return indentedLine;
    }

    if (trimmedLine.endsWith('}')) {
      currentIndentation = Math.max(0, currentIndentation - indentation);
      const indentedLine = ' '.repeat(currentIndentation) + trimmedLine;
      return indentedLine;
    }

    if (trimmedLine === '}') {
      const lastLine = index === lines.length - 1;
      const newLine = lastLine ? '' : '\n';
      currentIndentation = Math.max(0, currentIndentation - indentation);
      return ' '.repeat(currentIndentation) + trimmedLine + newLine;
    }

    const indentedLine =
      ' '.repeat(currentIndentation) + trimmedLine.replace(/:\s*/, ': ');

    return indentedLine;
  });

  return formattedLines.join('\n');
};
