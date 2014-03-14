// Generated by LiveScript 1.2.0
(function(){
  var ref$, id, compact, unlines, min, max;
  ref$ = require('prelude-ls'), id = ref$.id, compact = ref$.compact, unlines = ref$.unlines, min = ref$.min, max = ref$.max;
  module.exports = {
    formatResult: formatResult,
    formatName: formatName,
    formatCount: formatCount
  };
  function formatResult(name, inputLines, inputLinesLength, arg$, options, node){
    var color, bold, resStartLine, startLine, resEndLine, endLine, startCol, endCol, highlight, onlyMatch, outputLines, res$, i$, lineNum, line, start, middle, end, rest, cleanLines, multiline, outputString, displayStartLine, displayEndLine, locationString, separatorString, nameString;
    color = arg$.color, bold = arg$.bold;
    resStartLine = node.loc.start.line - 1;
    startLine = max(resStartLine - options.beforeContext, 0);
    resEndLine = node.loc.end.line - 1;
    endLine = min(resEndLine + options.afterContext, inputLinesLength - 1);
    startCol = node.loc.start.column;
    endCol = node.loc.end.column;
    highlight = function(){
      return color.red(bold.apply(this, arguments));
    };
    onlyMatch = options.onlyMatching;
    res$ = [];
    for (i$ = startLine; i$ <= endLine; ++i$) {
      lineNum = i$;
      line = inputLines[lineNum];
      if (lineNum < resStartLine || lineNum > resEndLine) {
        if (onlyMatch) {
          res$.push('');
        } else {
          res$.push(line);
        }
      } else if (lineNum === resStartLine && resStartLine === resEndLine) {
        start = onlyMatch
          ? ''
          : line.slice(0, startCol);
        middle = line.slice(startCol, endCol);
        end = onlyMatch
          ? ''
          : line.slice(endCol);
        res$.push(start + "" + highlight(middle) + end);
      } else if (resStartLine < lineNum && lineNum < resEndLine) {
        res$.push(highlight(line));
      } else if (lineNum === resStartLine) {
        start = onlyMatch
          ? ''
          : line.slice(0, startCol);
        rest = line.slice(startCol);
        res$.push(start + "" + highlight(rest));
      } else {
        end = onlyMatch
          ? ''
          : line.slice(endCol);
        rest = line.slice(0, endCol);
        res$.push(highlight(rest) + "" + end);
      }
    }
    outputLines = res$;
    cleanLines = (onlyMatch ? compact : id)(outputLines);
    multiline = cleanLines.length > 1;
    outputString = unlines(cleanLines);
    displayStartLine = node.loc.start.line;
    displayEndLine = node.loc.end.line;
    locationString = options.colNumber
      ? color.green((options.lineNumber ? displayStartLine + "," : '') + "" + startCol) + "" + color.cyan('-') + "" + color.green((options.lineNumber ? displayEndLine + "," : '') + "" + (endCol - 1))
      : options.lineNumber ? multiline
        ? displayStartLine === displayEndLine
          ? color.green(displayStartLine)
          : color.green(displayStartLine) + "" + color.green('-') + "" + color.green(displayEndLine)
        : color.green(displayStartLine) : '';
    separatorString = (multiline ? color.cyan((locationString.length ? ':' : '') + "(multiline)") : '') + "" + (locationString.length || multiline ? color.cyan(':') : '') + "" + (multiline ? '\n' : '');
    nameString = options.displayFilename ? formatName(color, name) + "" + color.cyan(':') : '';
    return nameString + "" + locationString + "" + separatorString + "" + outputString;
  }
  function formatName(color, name){
    return color.magenta(name);
  }
  function formatCount(color, count, name){
    return (name ? formatName(color, name) + "" + color.cyan(':') : '') + "" + count;
  }
}).call(this);