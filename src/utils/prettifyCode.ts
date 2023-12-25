export const prettifyCode = (query: string, indentation = 2) => {
  const lines = query.split('\n');

  let currentIndentation = 0;
  const braceRegex = /\{|\}/;

  const formattedLines = lines.map((line, index) => {
    const trimmedLine = line.trim();
    const hasBrace = braceRegex.test(trimmedLine);

    if (hasBrace) {
      if (trimmedLine.endsWith('{')) {
        const indentedLine = ' '.repeat(currentIndentation) + trimmedLine;

        return indentedLine.replace(/\{\s*$/, ' {');
      }

      if (trimmedLine.endsWith('}')) {
        currentIndentation = Math.max(0, currentIndentation - indentation);
        const trimmedWithoutLastChar = trimmedLine.slice(0, -1);
        const lastLine = index === lines.length - 1;
        const newLine = lastLine ? '\n' : '';
        return (
          ' '.repeat(currentIndentation) +
          trimmedWithoutLastChar +
          newLine +
          '}'
        );
      }
    }

    const indentedLine =
      ' '.repeat(currentIndentation) +
      trimmedLine.replace(/:\s*([^}])/g, ': $1');

    if (trimmedLine.includes('{')) {
      currentIndentation += indentation;
    }

    if (trimmedLine.includes('}')) {
      currentIndentation = Math.max(0, currentIndentation - indentation);
    }

    return indentedLine;
  });

  return formattedLines.join('\n');
};

// export function prettifyCode(input: string) {
//   const formattedInput = input
//     .replace(/([a-z])([A-Z])/g, '$1 $2')
//     .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
//     .replace(/(\w+):/g, '$1: ')
//     .replace(/(\w+)\!/g, '$1!')
//     .replace(/(\w+)\n/g, '$1\n  ')
//     .replace(/(\w+)\{/, '$1 {\n  ')
//     .replace(/\}/g, '\n}');
//   return formattedInput;
// }
