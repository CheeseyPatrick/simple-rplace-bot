const DEFAULT_SERVER = "wss://server.rplace.live";
const DEFAULT_BOARD = "https://server.rplace.live/public/place";
const DEFAULT_AUTH = "https://server.rplace.live/auth";
const CHAT_COLOURS = [
  "lightblue",
  "navy",
  "green",
  "purple",
  "grey",
  "brown",
  "orangered",
  "gold",
];
const DEFAULT_PALETTE_KEYS = "123456789abcdefghijklmnopqrstuvwxyz";
const EMOJIS = /* @__PURE__ */ new Map([
  ["rofl", "🤣"],
  ["joy", "😂"],
  ["cool", "😎"],
  ["sunglasses", "😎"],
  ["heart", "❤️"],
  ["moyai", "🗿"],
  ["bruh", "🗿"],
  ["skull", "💀"],
  ["sus", "ඞ"],
  ["tr", "🇹🇷"],
  ["turkey", "🇹🇷"],
  ["ir", "🇮🇷"],
  ["iran", "🇮🇷"],
  ["gb", "🇬🇧"],
  ["britain", "🇬🇧"],
  ["us", "🇺🇸"],
  ["america", "🇺🇸"],
  ["ru", "🇷🇺"],
  ["russia", "🇷🇺"],
  ["es", "🇪🇸"],
  ["spain", "🇪🇸"],
  ["eyes", "👀"],
  ["fire", "🔥"],
  ["thumbsup", "👍"],
  ["thumbsdown", "👎"],
  ["clown", "🤡"],
  ["facepalm", "🤦‍♂️"],
  ["ok", "👌"],
  ["poop", "💩"],
  ["rocket", "🚀"],
  ["tada", "🎉"],
  ["celebration", "🎉"],
  ["moneybag", "💰"],
  ["crown", "👑"],
  ["muscle", "💪"],
  ["beer", "🍺"],
  ["pizza", "🍕"],
  ["cookie", "🍪"],
  ["balloon", "🎈"],
  ["gift", "🎁"],
  ["star", "⭐️"],
  ["love", "😍"],
  ["crying", "😢"],
  ["angry", "😠"],
  ["sleepy", "😴"],
  ["nerd", "🤓"],
  ["laughing", "😆"],
  ["vomiting", "🤮"],
  ["unicorn", "🦄"],
  ["alien", "👽"],
  ["ghost", "👻"],
  ["skullcrossbones", "☠️"],
  ["explosion", "💥"],
  ["shush", "🤫"],
  ["deaf", "🧏"],
  ["mew", "🤫🧏"],
  ["pray", "🙏"],
  ["thinking", "🤔"],
  ["sweat", "😅"],
  ["wave", "👋"],
]);
const CUSTOM_EMOJIS = /* @__PURE__ */ new Map([
  ["amogus", '<img src="custom_emojis/amogus.png" height="24">'],
  ["biaoqing", '<img src="custom_emojis/biaoqing.png" height="24">'],
  ["deepfriedh", '<img src="custom_emojis/deepfriedh.png" height="24">'],
  ["edp445", '<img src="custom_emojis/edp445.png" height="24">'],
  ["fan", '<img src="custom_emojis/fan.png" height="24">'],
  ["heavy", '<img src="custom_emojis/heavy.png" height="24">'],
  ["herkul", '<img src="custom_emojis/herkul.png" height="24">'],
  ["kaanozdil", '<img src="custom_emojis/kaanozdil.png" height="24">'],
  ["lowtiergod", '<img src="custom_emojis/lowtiergod.png" height="24">'],
  ["manly", '<img src="custom_emojis/manly.png" height="24">'],
  ["plsaddred", '<img src="custom_emojis/plsaddred.png" height="24">'],
  ["rplace", '<img src="custom_emojis/rplace.png" height="24">'],
  ["rplacediscord", '<img src="custom_emojis/rplacediscord.png" height="24">'],
  ["sonic", '<img src="custom_emojis/sonic.png" height="24">'],
  ["transparent", '<img src="custom_emojis/transparent.png" height="24">'],
  ["trollface", '<img src="custom_emojis/trollface.png" height="24">'],
]);
const COMMANDS = /* @__PURE__ */ new Map([
  ["help", "<kbd>Help information for live chat</kbd>"],
  ["name", "<kbd>Change your username</kbd>"],
  ["vip", "<kbd>Apply a VIP code</kbd>"],
  [
    "getid",
    "<kbd>View your own User Id, or provide a name to view a list of online player User Ids</kbd>",
  ],
  [
    "whoplaced",
    "<kbd>View details of who placed the current pixel being hovered</kbd>",
  ],
]);
const LANG_INFOS = /* @__PURE__ */ new Map([
  [
    "en",
    {
      name: "English",
      flag: "https://openmoji.org/data/color/svg/1F1EC-1F1E7.svg",
    },
  ],
  [
    "zh",
    {
      name: "中文",
      flag: "https://openmoji.org/data/color/svg/1F1E8-1F1F3.svg",
    },
  ],
  [
    "hi",
    {
      name: "हिन्दी",
      flag: "https://openmoji.org/data/color/svg/1F1EE-1F1F3.svg",
    },
  ],
  [
    "es",
    {
      name: "Español",
      flag: "https://openmoji.org/data/color/svg/1F1EA-1F1F8.svg",
    },
  ],
  [
    "fr",
    {
      name: "Français",
      flag: "https://openmoji.org/data/color/svg/1F1EB-1F1F7.svg",
    },
  ],
  [
    "ar",
    {
      name: "عربي",
      flag: "https://openmoji.org/data/color/svg/1F1F8-1F1E6.svg",
      rtl: true,
    },
  ],
  [
    "bn",
    {
      name: "বাংলা",
      flag: "https://openmoji.org/data/color/svg/1F1EE-1F1F3.svg",
    },
  ],
  [
    "ru",
    {
      name: "pусский",
      flag: "https://openmoji.org/data/color/svg/1F1F7-1F1FA.svg",
    },
  ],
  [
    "pt",
    {
      name: "Português",
      flag: "https://openmoji.org/data/color/svg/1F1E7-1F1F7.svg",
    },
  ],
  [
    "ur",
    {
      name: "اردو",
      flag: "https://openmoji.org/data/color/svg/1F1F5-1F1F0.svg",
      rtl: true,
    },
  ],
  [
    "de",
    {
      name: "Deutsch",
      flag: "https://openmoji.org/data/color/svg/1F1E9-1F1EA.svg",
    },
  ],
  [
    "jp",
    {
      name: "日本語",
      flag: "https://openmoji.org/data/color/svg/1F1EF-1F1F5.svg",
    },
  ],
  [
    "tr",
    {
      name: "Türkçe",
      flag: "https://openmoji.org/data/color/svg/1F1F9-1F1F7.svg",
    },
  ],
  [
    "vi",
    {
      name: "Tiếng Việt",
      flag: "https://openmoji.org/data/color/svg/1F1FB-1F1F3.svg",
    },
  ],
  [
    "ko",
    {
      name: "한국인",
      flag: "https://openmoji.org/data/color/svg/1F1F0-1F1F7.svg",
    },
  ],
  [
    "it",
    {
      name: "Italiana",
      flag: "https://openmoji.org/data/color/svg/1F1EE-1F1F9.svg",
    },
  ],
  [
    "fa",
    {
      name: "فارسی",
      flag: "https://openmoji.org/data/color/svg/1F1EE-1F1F7.svg",
      rtl: true,
    },
  ],
  [
    "nl",
    {
      name: "Nederland",
      flag: "https://openmoji.org/data/color/svg/1F1F3-1F1F1.svg",
    },
  ],
  [
    "az",
    {
      name: "Azərbaycan",
      flag: "https://openmoji.org/data/color/svg/1F1E6-1F1FF.svg",
      rtl: true,
    },
  ],
]);
const DEFAULT_THEMES = /* @__PURE__ */ new Map([
  [
    "r/place 2022",
    {
      id: "r/place 2022",
      css: "/css/rplace-2022.css",
      cssVersion: "24",
      pixelselect: "/svg/pixel-select-2022.svg",
    },
  ],
  [
    "r/place 2023",
    {
      id: "r/place 2023",
      css: "/css/rplace-2023.css",
      cssVersion: "24",
      pixelselect: "/svg/pixel-select-2023.svg",
    },
  ],
]);
const DEFAULT_EFFECTS = /* @__PURE__ */ new Map([
  ["darkplace", { id: "darkplace", modulePath: "./effects/darkplace.js" }],
  ["winter", { id: "winter", modulePath: "./effects/snowplace.js" }],
]);
const ADS = [
  {
    url: "https://youtu.be/R3UBtMloTdI",
    banners: { en: "/images/august21-ad.png" },
  },
  {
    url: "https://t.me/rplacelive",
    banners: { en: "/images/telegram-ad.png" },
  },
  {
    url: "https://discord.gg/4XnZ9WGux2",
    banners: { en: "/images/discord-ad.png" },
  },
  { url: "https://arbitrum.life", banners: { en: "/images/arbitrum.png" } },
];
const PUNISHMENT_STATE = Object.freeze({
  mute: 0,
  ban: 1,
  appealRejected: 2,
});
const PLACEMENT_MODE = Object.freeze({
  selectPixel: 0,
  selectPixelMouseOnly: 1,
  freeDraw: 2,
});
const VIEWPORT_MODE = Object.freeze({
  placePixels: 0,
  selectPixels: 1,
});
const MAX_CHANNEL_MESSAGES = 100;
const DEFAULT_PALETTE_USABLE_REGION = { start: 0, end: 32 };
const DEFAULT_PALETTE = [
  4279894125, 4281925822, 4278207999, 4278233343, 4281718527, 4290312447,
  4285047552, 4286106624, 4283886974, 4285494528, 4289371648, 4290825216,
  4288958500, 4293562422, 4294240593, 4290853449, 4294925418, 4294947732,
  4288618113, 4290792116, 4294945764, 4286517470, 4286658815, 4289370623,
  4281288813, 4280707484, 4285576447, 4278190080, 4283585105, 4287663497,
  4292466644, 4294967295,
];
const DEFAULT_WIDTH = 2e3;
const DEFAULT_HEIGHT = 2e3;
const DEFAULT_COOLDOWN = 1e4;
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null,
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
var noopTest = { exec: () => null };
function edit(regex, opt = "") {
  let source = typeof regex === "string" ? regex : regex.source;
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(other.caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    },
  };
  return obj;
}
var other = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (bull) =>
    new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (indent) =>
    new RegExp(
      `^ {0,${Math.min(
        3,
        indent - 1
      )}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
    ),
  hrRegex: (indent) =>
    new RegExp(
      `^ {0,${Math.min(
        3,
        indent - 1
      )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
    ),
  fencesBeginRegex: (indent) =>
    new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (indent) =>
    new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`),
  htmlBeginRegex: (indent) =>
    new RegExp(`^ {0,${Math.min(3, indent - 1)}}<(?:[a-z].*>|!--)`, "i"),
};
var newline = /^(?:[ \t]*(?:\n|$))+/;
var blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var fences =
  /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheadingCore =
  /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var lheading = edit(lheadingCore)
  .replace(/bull/g, bullet)
  .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
  .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
  .replace(/blockquote/g, / {0,3}>/)
  .replace(/heading/g, / {0,3}#{1,6}/)
  .replace(/html/g, / {0,3}<[^\n>]+>\n/)
  .replace(/\|table/g, "")
  .getRegex();
var lheadingGfm = edit(lheadingCore)
  .replace(/bull/g, bullet)
  .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
  .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
  .replace(/blockquote/g, / {0,3}>/)
  .replace(/heading/g, / {0,3}#{1,6}/)
  .replace(/html/g, / {0,3}<[^\n>]+>\n/)
  .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
  .getRegex();
var _paragraph =
  /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(
  /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/
)
  .replace("label", _blockLabel)
  .replace(
    "title",
    /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
  )
  .getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
  .replace(/bull/g, bullet)
  .getRegex();
var _tag =
  "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html$2 = edit(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
)
  .replace("comment", _comment)
  .replace("tag", _tag)
  .replace(
    "attribute",
    / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
  )
  .getRegex();
var paragraph = edit(_paragraph)
  .replace("hr", hr)
  .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
  .replace("|lheading", "")
  .replace("|table", "")
  .replace("blockquote", " {0,3}>")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", _tag)
  .getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
  .replace("paragraph", paragraph)
  .getRegex();
var blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html: html$2,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText,
};
var gfmTable = edit(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
)
  .replace("hr", hr)
  .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
  .replace("blockquote", " {0,3}>")
  .replace("code", "(?: {4}| {0,3}	)[^\\n]")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", _tag)
  .getRegex();
var blockGfm = {
  ...blockNormal,
  lheading: lheadingGfm,
  table: gfmTable,
  paragraph: edit(_paragraph)
    .replace("hr", hr)
    .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
    .replace("|lheading", "")
    .replace("table", gfmTable)
    .replace("blockquote", " {0,3}>")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
    )
    .replace("tag", _tag)
    .getRegex(),
};
var blockPedantic = {
  ...blockNormal,
  html: edit(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  )
    .replace("comment", _comment)
    .replace(
      /tag/g,
      "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
    )
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph)
    .replace("hr", hr)
    .replace("heading", " *#{1,6} *[^\n]")
    .replace("lheading", lheading)
    .replace("|table", "")
    .replace("blockquote", " {0,3}>")
    .replace("|fences", "")
    .replace("|list", "")
    .replace("|html", "")
    .replace("|tag", "")
    .getRegex(),
};
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText =
  /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = /[\p{P}\p{S}]/u;
var _punctuationOrSpace = /[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpace = /[^\s\p{P}\p{S}]/u;
var punctuation = edit(/^((?![*_])punctSpace)/, "u")
  .replace(/punctSpace/g, _punctuationOrSpace)
  .getRegex();
var _punctuationGfmStrongEm = /(?!~)[\p{P}\p{S}]/u;
var _punctuationOrSpaceGfmStrongEm = /(?!~)[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpaceGfmStrongEm = /(?:[^\s\p{P}\p{S}]|~)/u;
var blockSkip =
  /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelimCore =
  /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var emStrongLDelim = edit(emStrongLDelimCore, "u")
  .replace(/punct/g, _punctuation)
  .getRegex();
var emStrongLDelimGfm = edit(emStrongLDelimCore, "u")
  .replace(/punct/g, _punctuationGfmStrongEm)
  .getRegex();
var emStrongRDelimAstCore =
  "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var emStrongRDelimAst = edit(emStrongRDelimAstCore, "gu")
  .replace(/notPunctSpace/g, _notPunctuationOrSpace)
  .replace(/punctSpace/g, _punctuationOrSpace)
  .replace(/punct/g, _punctuation)
  .getRegex();
var emStrongRDelimAstGfm = edit(emStrongRDelimAstCore, "gu")
  .replace(/notPunctSpace/g, _notPunctuationOrSpaceGfmStrongEm)
  .replace(/punctSpace/g, _punctuationOrSpaceGfmStrongEm)
  .replace(/punct/g, _punctuationGfmStrongEm)
  .getRegex();
var emStrongRDelimUnd = edit(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
)
  .replace(/notPunctSpace/g, _notPunctuationOrSpace)
  .replace(/punctSpace/g, _punctuationOrSpace)
  .replace(/punct/g, _punctuation)
  .getRegex();
var anyPunctuation = edit(/\\(punct)/, "gu")
  .replace(/punct/g, _punctuation)
  .getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
  .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
  .replace(
    "email",
    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
  )
  .getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
)
  .replace("comment", _inlineComment)
  .replace(
    "attribute",
    /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/
  )
  .getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(
  /^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/
)
  .replace("label", _inlineLabel)
  .replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
  .replace(
    "title",
    /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/
  )
  .getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/)
  .replace("label", _inlineLabel)
  .replace("ref", _blockLabel)
  .getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/)
  .replace("ref", _blockLabel)
  .getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g")
  .replace("reflink", reflink)
  .replace("nolink", nolink)
  .getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest,
};
var inlinePedantic = {
  ...inlineNormal,
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace("label", _inlineLabel)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace("label", _inlineLabel)
    .getRegex(),
};
var inlineGfm = {
  ...inlineNormal,
  emStrongRDelimAst: emStrongRDelimAstGfm,
  emStrongLDelim: emStrongLDelimGfm,
  url: edit(
    /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    "i"
  )
    .replace(
      "email",
      /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/
    )
    .getRegex(),
  _backpedal:
    /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
};
var inlineBreaks = {
  ...inlineGfm,
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text)
    .replace("\\b_", "\\b_| {2,}\\n")
    .replace(/\{2,\}/g, "*")
    .getRegex(),
};
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic,
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic,
};
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape2(html2, encode) {
  if (encode) {
    if (other.escapeTest.test(html2)) {
      return html2.replace(other.escapeReplace, getEscapeReplacement);
    }
  } else {
    if (other.escapeTestNoEncode.test(html2)) {
      return html2.replace(other.escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(other.percentDecode, "%");
  } catch {
    return null;
  }
  return href;
}
function splitCells(tableRow, count) {
  const row = tableRow.replace(other.findPipe, (match, offset, str) => {
      let escaped = false;
      let curr = offset;
      while (--curr >= 0 && str[curr] === "\\") escaped = !escaped;
      if (escaped) {
        return "|";
      } else {
        return " |";
      }
    }),
    cells = row.split(other.splitPipe);
  let i4 = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells.at(-1)?.trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) cells.push("");
    }
  }
  for (; i4 < cells.length; i4++) {
    cells[i4] = cells[i4].trim().replace(other.slashPipe, "|");
  }
  return cells;
}
function rtrim(str, c2, invert2) {
  const l2 = str.length;
  if (l2 === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l2) {
    const currChar = str.charAt(l2 - suffLen - 1);
    if (currChar === c2 && true) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l2 - suffLen);
}
function findClosingBracket(str, b2) {
  if (str.indexOf(b2[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i4 = 0; i4 < str.length; i4++) {
    if (str[i4] === "\\") {
      i4++;
    } else if (str[i4] === b2[0]) {
      level++;
    } else if (str[i4] === b2[1]) {
      level--;
      if (level < 0) {
        return i4;
      }
    }
  }
  if (level > 0) {
    return -2;
  }
  return -1;
}
function outputLink(cap, link2, raw, lexer2, rules) {
  const href = link2.href;
  const title = link2.title || null;
  const text2 = cap[1].replace(rules.other.outputLinkReplace, "$1");
  lexer2.state.inLink = true;
  const token = {
    type: cap[0].charAt(0) === "!" ? "image" : "link",
    raw,
    href,
    title,
    text: text2,
    tokens: lexer2.inlineTokens(text2),
  };
  lexer2.state.inLink = false;
  return token;
}
function indentCodeCompensation(raw, text2, rules) {
  const matchIndentToCode = raw.match(rules.other.indentCodeCompensation);
  if (matchIndentToCode === null) {
    return text2;
  }
  const indentToCode = matchIndentToCode[1];
  return text2
    .split("\n")
    .map((node) => {
      const matchIndentInNode = node.match(rules.other.beginningSpace);
      if (matchIndentInNode === null) {
        return node;
      }
      const [indentInNode] = matchIndentInNode;
      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }
      return node;
    })
    .join("\n");
}
var _Tokenizer = class {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0],
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text2 = cap[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text2, "\n") : text2,
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text2 = indentCodeCompensation(raw, cap[3] || "", this.rules);
      return {
        type: "code",
        raw,
        lang: cap[2]
          ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1")
          : cap[2],
        text: text2,
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text2 = cap[2].trim();
      if (this.rules.other.endingHash.test(text2)) {
        const trimmed = rtrim(text2, "#");
        if (this.options.pedantic) {
          text2 = trimmed.trim();
        } else if (!trimmed || this.rules.other.endingSpaceChar.test(trimmed)) {
          text2 = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text: text2,
        tokens: this.lexer.inline(text2),
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: rtrim(cap[0], "\n"),
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let lines = rtrim(cap[0], "\n").split("\n");
      let raw = "";
      let text2 = "";
      const tokens = [];
      while (lines.length > 0) {
        let inBlockquote = false;
        const currentLines = [];
        let i4;
        for (i4 = 0; i4 < lines.length; i4++) {
          if (this.rules.other.blockquoteStart.test(lines[i4])) {
            currentLines.push(lines[i4]);
            inBlockquote = true;
          } else if (!inBlockquote) {
            currentLines.push(lines[i4]);
          } else {
            break;
          }
        }
        lines = lines.slice(i4);
        const currentRaw = currentLines.join("\n");
        const currentText = currentRaw
          .replace(this.rules.other.blockquoteSetextReplace, "\n    $1")
          .replace(this.rules.other.blockquoteSetextReplace2, "");
        raw = raw
          ? `${raw}
${currentRaw}`
          : currentRaw;
        text2 = text2
          ? `${text2}
${currentText}`
          : currentText;
        const top = this.lexer.state.top;
        this.lexer.state.top = true;
        this.lexer.blockTokens(currentText, tokens, true);
        this.lexer.state.top = top;
        if (lines.length === 0) {
          break;
        }
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "code") {
          break;
        } else if (lastToken?.type === "blockquote") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.blockquote(newText);
          tokens[tokens.length - 1] = newToken;
          raw =
            raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
          text2 =
            text2.substring(0, text2.length - oldToken.text.length) +
            newToken.text;
          break;
        } else if (lastToken?.type === "list") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.list(newText);
          tokens[tokens.length - 1] = newToken;
          raw =
            raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
          text2 =
            text2.substring(0, text2.length - oldToken.raw.length) +
            newToken.raw;
          lines = newText.substring(tokens.at(-1).raw.length).split("\n");
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens,
        text: text2,
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: [],
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = this.rules.other.listItemRegex(bull);
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        let raw = "";
        let itemContents = "";
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2]
          .split("\n", 1)[0]
          .replace(this.rules.other.listReplaceTabs, (t2) =>
            " ".repeat(3 * t2.length)
          );
        let nextLine = src.split("\n", 1)[0];
        let blankLine = !line.trim();
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else if (blankLine) {
          indent = cap[1].length + 1;
        } else {
          indent = cap[2].search(this.rules.other.nonSpaceChar);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        if (blankLine && this.rules.other.blankLine.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = this.rules.other.nextBulletRegex(indent);
          const hrRegex = this.rules.other.hrRegex(indent);
          const fencesBeginRegex = this.rules.other.fencesBeginRegex(indent);
          const headingBeginRegex = this.rules.other.headingBeginRegex(indent);
          const htmlBeginRegex = this.rules.other.htmlBeginRegex(indent);
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            let nextLineWithoutTabs;
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(
                this.rules.other.listReplaceNesting,
                "  "
              );
              nextLineWithoutTabs = nextLine;
            } else {
              nextLineWithoutTabs = nextLine.replace(
                this.rules.other.tabCharGlobal,
                "    "
              );
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (htmlBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(nextLine)) {
              break;
            }
            if (
              nextLineWithoutTabs.search(this.rules.other.nonSpaceChar) >=
                indent ||
              !nextLine.trim()
            ) {
              itemContents += "\n" + nextLineWithoutTabs.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (
                line
                  .replace(this.rules.other.tabCharGlobal, "    ")
                  .search(this.rules.other.nonSpaceChar) >= 4
              ) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLineWithoutTabs.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (this.rules.other.doubleBlankLine.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = this.rules.other.listIsTask.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(
              this.rules.other.listReplaceTask,
              ""
            );
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: [],
        });
        list2.raw += raw;
      }
      const lastItem = list2.items.at(-1);
      if (lastItem) {
        lastItem.raw = lastItem.raw.trimEnd();
        lastItem.text = lastItem.text.trimEnd();
      } else {
        return;
      }
      list2.raw = list2.raw.trimEnd();
      for (let i4 = 0; i4 < list2.items.length; i4++) {
        this.lexer.state.top = false;
        list2.items[i4].tokens = this.lexer.blockTokens(
          list2.items[i4].text,
          []
        );
        if (!list2.loose) {
          const spacers = list2.items[i4].tokens.filter(
            (t2) => t2.type === "space"
          );
          const hasMultipleLineBreaks =
            spacers.length > 0 &&
            spacers.some((t2) => this.rules.other.anyLine.test(t2.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i4 = 0; i4 < list2.items.length; i4++) {
          list2.items[i4].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0],
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag2 = cap[1]
        .toLowerCase()
        .replace(this.rules.other.multipleSpaceGlobal, " ");
      const href = cap[2]
        ? cap[2]
            .replace(this.rules.other.hrefBrackets, "$1")
            .replace(this.rules.inline.anyPunctuation, "$1")
        : "";
      const title = cap[3]
        ? cap[3]
            .substring(1, cap[3].length - 1)
            .replace(this.rules.inline.anyPunctuation, "$1")
        : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title,
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (!cap) {
      return;
    }
    if (!this.rules.other.tableDelimiter.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2]
      .replace(this.rules.other.tableAlignChars, "")
      .split("|");
    const rows = cap[3]?.trim()
      ? cap[3].replace(this.rules.other.tableRowBlankLine, "").split("\n")
      : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: [],
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (this.rules.other.tableAlignRight.test(align)) {
        item.align.push("right");
      } else if (this.rules.other.tableAlignCenter.test(align)) {
        item.align.push("center");
      } else if (this.rules.other.tableAlignLeft.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (let i4 = 0; i4 < headers.length; i4++) {
      item.header.push({
        text: headers[i4],
        tokens: this.lexer.inline(headers[i4]),
        header: true,
        align: item.align[i4],
      });
    }
    for (const row of rows) {
      item.rows.push(
        splitCells(row, item.header.length).map((cell, i4) => {
          return {
            text: cell,
            tokens: this.lexer.inline(cell),
            header: false,
            align: item.align[i4],
          };
        })
      );
    }
    return item;
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1]),
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text2 =
        cap[1].charAt(cap[1].length - 1) === "\n"
          ? cap[1].slice(0, -1)
          : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text: text2,
        tokens: this.lexer.inline(text2),
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0]),
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: cap[1],
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && this.rules.other.startATag.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (
        this.lexer.state.inLink &&
        this.rules.other.endATag.test(cap[0])
      ) {
        this.lexer.state.inLink = false;
      }
      if (
        !this.lexer.state.inRawBlock &&
        this.rules.other.startPreScriptTag.test(cap[0])
      ) {
        this.lexer.state.inRawBlock = true;
      } else if (
        this.lexer.state.inRawBlock &&
        this.rules.other.endPreScriptTag.test(cap[0])
      ) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0],
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (
        !this.options.pedantic &&
        this.rules.other.startAngleBracket.test(trimmedUrl)
      ) {
        if (!this.rules.other.endAngleBracket.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex === -2) {
          return;
        }
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = this.rules.other.pedanticHrefTitle.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (this.rules.other.startAngleBracket.test(href)) {
        if (
          this.options.pedantic &&
          !this.rules.other.endAngleBracket.test(trimmedUrl)
        ) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(
        cap,
        {
          href: href
            ? href.replace(this.rules.inline.anyPunctuation, "$1")
            : href,
          title: title
            ? title.replace(this.rules.inline.anyPunctuation, "$1")
            : title,
        },
        cap[0],
        this.lexer,
        this.rules
      );
    }
  }
  reflink(src, links) {
    let cap;
    if (
      (cap = this.rules.inline.reflink.exec(src)) ||
      (cap = this.rules.inline.nolink.exec(src))
    ) {
      const linkString = (cap[2] || cap[1]).replace(
        this.rules.other.multipleSpaceGlobal,
        " "
      );
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text2 = cap[0].charAt(0);
        return {
          type: "text",
          raw: text2,
          text: text2,
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer, this.rules);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match) return;
    if (match[3] && prevChar.match(this.rules.other.unicodeAlphaNumeric))
      return;
    const nextChar = match[1] || match[2] || "";
    if (
      !nextChar ||
      !prevChar ||
      this.rules.inline.punctuation.exec(prevChar)
    ) {
      const lLength = [...match[0]].length - 1;
      let rDelim,
        rLength,
        delimTotal = lLength,
        midDelimTotal = 0;
      const endReg =
        match[0][0] === "*"
          ? this.rules.inline.emStrongRDelimAst
          : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim =
          match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0) continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(
          0,
          lLength + match.index + lastCharLength + rLength
        );
        if (Math.min(lLength, rLength) % 2) {
          const text22 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text22,
            tokens: this.lexer.inlineTokens(text22),
          };
        }
        const text2 = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text: text2,
          tokens: this.lexer.inlineTokens(text2),
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text2 = cap[2].replace(this.rules.other.newLineCharGlobal, " ");
      const hasNonSpaceChars = this.rules.other.nonSpaceChar.test(text2);
      const hasSpaceCharsOnBothEnds =
        this.rules.other.startingSpaceChar.test(text2) &&
        this.rules.other.endingSpaceChar.test(text2);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text2 = text2.substring(1, text2.length - 1);
      }
      return {
        type: "codespan",
        raw: cap[0],
        text: text2,
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0],
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2]),
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text2, href;
      if (cap[2] === "@") {
        text2 = cap[1];
        href = "mailto:" + text2;
      } else {
        text2 = cap[1];
        href = text2;
      }
      return {
        type: "link",
        raw: cap[0],
        text: text2,
        href,
        tokens: [
          {
            type: "text",
            raw: text2,
            text: text2,
          },
        ],
      };
    }
  }
  url(src) {
    let cap;
    if ((cap = this.rules.inline.url.exec(src))) {
      let text2, href;
      if (cap[2] === "@") {
        text2 = cap[0];
        href = "mailto:" + text2;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
        } while (prevCapZero !== cap[0]);
        text2 = cap[0];
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text: text2,
        href,
        tokens: [
          {
            type: "text",
            raw: text2,
            text: text2,
          },
        ],
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      const escaped = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        escaped,
      };
    }
  }
};
var _Lexer = class __Lexer {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(options2) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options2 || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true,
    };
    const rules = {
      other,
      block: block.normal,
      inline: inline.normal,
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline,
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(other.carriageReturn, "\n");
    this.blockTokens(src, this.tokens);
    for (let i4 = 0; i4 < this.inlineQueue.length; i4++) {
      const next = this.inlineQueue[i4];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = [], lastParagraphClipped = false) {
    if (this.options.pedantic) {
      src = src
        .replace(other.tabCharGlobal, "    ")
        .replace(other.spaceLine, "");
    }
    while (src) {
      let token;
      if (
        this.options.extensions?.block?.some((extTokenizer) => {
          if ((token = extTokenizer.call({ lexer: this }, src, tokens))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })
      ) {
        continue;
      }
      if ((token = this.tokenizer.space(src))) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (token.raw.length === 1 && lastToken !== void 0) {
          lastToken.raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if ((token = this.tokenizer.code(src))) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "paragraph" || lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if ((token = this.tokenizer.fences(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.heading(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.hr(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.blockquote(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.list(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.html(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.def(src))) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "paragraph" || lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title,
          };
        }
        continue;
      }
      if ((token = this.tokenizer.table(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.lheading(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      let cutSrc = src;
      if (this.options.extensions?.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        const lastToken = tokens.at(-1);
        if (lastParagraphClipped && lastToken?.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if ((token = this.tokenizer.text(src))) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let maskedSrc = src;
    let match = null;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while (
          (match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) !=
          null
        ) {
          if (
            links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))
          ) {
            maskedSrc =
              maskedSrc.slice(0, match.index) +
              "[" +
              "a".repeat(match[0].length - 2) +
              "]" +
              maskedSrc.slice(
                this.tokenizer.rules.inline.reflinkSearch.lastIndex
              );
          }
        }
      }
    }
    while (
      (match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) !=
      null
    ) {
      maskedSrc =
        maskedSrc.slice(0, match.index) +
        "++" +
        maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (
      (match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null
    ) {
      maskedSrc =
        maskedSrc.slice(0, match.index) +
        "[" +
        "a".repeat(match[0].length - 2) +
        "]" +
        maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    let keepPrevChar = false;
    let prevChar = "";
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      let token;
      if (
        this.options.extensions?.inline?.some((extTokenizer) => {
          if ((token = extTokenizer.call({ lexer: this }, src, tokens))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })
      ) {
        continue;
      }
      if ((token = this.tokenizer.escape(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.tag(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.link(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.reflink(src, this.tokens.links))) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (token.type === "text" && lastToken?.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if ((token = this.tokenizer.emStrong(src, maskedSrc, prevChar))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.codespan(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.br(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.del(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if ((token = this.tokenizer.autolink(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      let cutSrc = src;
      if (this.options.extensions?.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if ((token = this.tokenizer.inlineText(cutSrc))) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var _Renderer = class {
  options;
  parser;
  // set by the parser
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(token) {
    return "";
  }
  code({ text: text2, lang: lang2, escaped }) {
    const langString = (lang2 || "").match(other.notSpaceStart)?.[0];
    const code2 = text2.replace(other.endingNewline, "") + "\n";
    if (!langString) {
      return (
        "<pre><code>" +
        (escaped ? code2 : escape2(code2, true)) +
        "</code></pre>\n"
      );
    }
    return (
      '<pre><code class="language-' +
      escape2(langString) +
      '">' +
      (escaped ? code2 : escape2(code2, true)) +
      "</code></pre>\n"
    );
  }
  blockquote({ tokens }) {
    const body = this.parser.parse(tokens);
    return `<blockquote>
${body}</blockquote>
`;
  }
  html({ text: text2 }) {
    return text2;
  }
  heading({ tokens, depth }) {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
  }
  hr(token) {
    return "<hr>\n";
  }
  list(token) {
    const ordered = token.ordered;
    const start = token.start;
    let body = "";
    for (let j2 = 0; j2 < token.items.length; j2++) {
      const item = token.items[j2];
      body += this.listitem(item);
    }
    const type = ordered ? "ol" : "ul";
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
  }
  listitem(item) {
    let itemBody = "";
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked });
      if (item.loose) {
        if (item.tokens[0]?.type === "paragraph") {
          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
          if (
            item.tokens[0].tokens &&
            item.tokens[0].tokens.length > 0 &&
            item.tokens[0].tokens[0].type === "text"
          ) {
            item.tokens[0].tokens[0].text =
              checkbox + " " + escape2(item.tokens[0].tokens[0].text);
            item.tokens[0].tokens[0].escaped = true;
          }
        } else {
          item.tokens.unshift({
            type: "text",
            raw: checkbox + " ",
            text: checkbox + " ",
            escaped: true,
          });
        }
      } else {
        itemBody += checkbox + " ";
      }
    }
    itemBody += this.parser.parse(item.tokens, !!item.loose);
    return `<li>${itemBody}</li>
`;
  }
  checkbox({ checked }) {
    return (
      "<input " +
      (checked ? 'checked="" ' : "") +
      'disabled="" type="checkbox">'
    );
  }
  paragraph({ tokens }) {
    return `<p>${this.parser.parseInline(tokens)}</p>
`;
  }
  table(token) {
    let header = "";
    let cell = "";
    for (let j2 = 0; j2 < token.header.length; j2++) {
      cell += this.tablecell(token.header[j2]);
    }
    header += this.tablerow({ text: cell });
    let body = "";
    for (let j2 = 0; j2 < token.rows.length; j2++) {
      const row = token.rows[j2];
      cell = "";
      for (let k2 = 0; k2 < row.length; k2++) {
        cell += this.tablecell(row[k2]);
      }
      body += this.tablerow({ text: cell });
    }
    if (body) body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow({ text: text2 }) {
    return `<tr>
${text2}</tr>
`;
  }
  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type = token.header ? "th" : "td";
    const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
    return (
      tag2 +
      content +
      `</${type}>
`
    );
  }
  /**
   * span level renderer
   */
  strong({ tokens }) {
    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
  }
  em({ tokens }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }
  codespan({ text: text2 }) {
    return `<code>${escape2(text2, true)}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({ tokens }) {
    return `<del>${this.parser.parseInline(tokens)}</del>`;
  }
  link({ href, title, tokens }) {
    const text2 = this.parser.parseInline(tokens);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text2;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + escape2(title) + '"';
    }
    out += ">" + text2 + "</a>";
    return out;
  }
  image({ href, title, text: text2, tokens }) {
    if (tokens) {
      text2 = this.parser.parseInline(tokens, this.parser.textRenderer);
    }
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return escape2(text2);
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text2}"`;
    if (title) {
      out += ` title="${escape2(title)}"`;
    }
    out += ">";
    return out;
  }
  text(token) {
    return "tokens" in token && token.tokens
      ? this.parser.parseInline(token.tokens)
      : "escaped" in token && token.escaped
      ? token.text
      : escape2(token.text);
  }
};
var _TextRenderer = class {
  // no need for block level renderers
  strong({ text: text2 }) {
    return text2;
  }
  em({ text: text2 }) {
    return text2;
  }
  codespan({ text: text2 }) {
    return text2;
  }
  del({ text: text2 }) {
    return text2;
  }
  html({ text: text2 }) {
    return text2;
  }
  text({ text: text2 }) {
    return text2;
  }
  link({ text: text2 }) {
    return "" + text2;
  }
  image({ text: text2 }) {
    return "" + text2;
  }
  br() {
    return "";
  }
};
var _Parser = class __Parser {
  options;
  renderer;
  textRenderer;
  constructor(options2) {
    this.options = options2 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "";
    for (let i4 = 0; i4 < tokens.length; i4++) {
      const anyToken = tokens[i4];
      if (this.options.extensions?.renderers?.[anyToken.type]) {
        const genericToken = anyToken;
        const ret = this.options.extensions.renderers[genericToken.type].call(
          { parser: this },
          genericToken
        );
        if (
          ret !== false ||
          ![
            "space",
            "hr",
            "heading",
            "code",
            "table",
            "blockquote",
            "list",
            "html",
            "paragraph",
            "text",
          ].includes(genericToken.type)
        ) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "space": {
          out += this.renderer.space(token);
          continue;
        }
        case "hr": {
          out += this.renderer.hr(token);
          continue;
        }
        case "heading": {
          out += this.renderer.heading(token);
          continue;
        }
        case "code": {
          out += this.renderer.code(token);
          continue;
        }
        case "table": {
          out += this.renderer.table(token);
          continue;
        }
        case "blockquote": {
          out += this.renderer.blockquote(token);
          continue;
        }
        case "list": {
          out += this.renderer.list(token);
          continue;
        }
        case "html": {
          out += this.renderer.html(token);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(token);
          continue;
        }
        case "text": {
          let textToken = token;
          let body = this.renderer.text(textToken);
          while (i4 + 1 < tokens.length && tokens[i4 + 1].type === "text") {
            textToken = tokens[++i4];
            body += "\n" + this.renderer.text(textToken);
          }
          if (top) {
            out += this.renderer.paragraph({
              type: "paragraph",
              raw: body,
              text: body,
              tokens: [{ type: "text", raw: body, text: body, escaped: true }],
            });
          } else {
            out += body;
          }
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer = this.renderer) {
    let out = "";
    for (let i4 = 0; i4 < tokens.length; i4++) {
      const anyToken = tokens[i4];
      if (this.options.extensions?.renderers?.[anyToken.type]) {
        const ret = this.options.extensions.renderers[anyToken.type].call(
          { parser: this },
          anyToken
        );
        if (
          ret !== false ||
          ![
            "escape",
            "html",
            "link",
            "image",
            "strong",
            "em",
            "codespan",
            "br",
            "del",
            "text",
          ].includes(anyToken.type)
        ) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "escape": {
          out += renderer.text(token);
          break;
        }
        case "html": {
          out += renderer.html(token);
          break;
        }
        case "link": {
          out += renderer.link(token);
          break;
        }
        case "image": {
          out += renderer.image(token);
          break;
        }
        case "strong": {
          out += renderer.strong(token);
          break;
        }
        case "em": {
          out += renderer.em(token);
          break;
        }
        case "codespan": {
          out += renderer.codespan(token);
          break;
        }
        case "br": {
          out += renderer.br(token);
          break;
        }
        case "del": {
          out += renderer.del(token);
          break;
        }
        case "text": {
          out += renderer.text(token);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
var _Hooks = class {
  options;
  block;
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens",
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? _Lexer.lex : _Lexer.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? _Parser.parse : _Parser.parseInline;
  }
};
var Marked = class {
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = _Parser;
  Renderer = _Renderer;
  TextRenderer = _TextRenderer;
  Lexer = _Lexer;
  Tokenizer = _Tokenizer;
  Hooks = _Hooks;
  constructor(...args) {
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach(
              (childTokens) => {
                const tokens2 = genericToken[childTokens].flat(Infinity);
                values = values.concat(this.walkTokens(tokens2, callback));
              }
            );
          } else if (genericToken.tokens) {
            values = values.concat(
              this.walkTokens(genericToken.tokens, callback)
            );
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || {
      renderers: {},
      childTokens: {},
    };
    args.forEach((pack) => {
      const opts = { ...pack };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function (...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (
              !ext.level ||
              (ext.level !== "block" && ext.level !== "inline")
            ) {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (["options", "parser"].includes(prop)) {
            continue;
          }
          const rendererProp = prop;
          const rendererFunc = pack.renderer[rendererProp];
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer =
          this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (["options", "block"].includes(prop)) {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then(
                  (ret2) => {
                    return prevHook.call(hooks, ret2);
                  }
                );
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function (token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = { ...this.defaults, ...opts };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = { ...this.defaults, ...opt };
    return this;
  }
  lexer(src, options2) {
    return _Lexer.lex(src, options2 ?? this.defaults);
  }
  parser(tokens, options2) {
    return _Parser.parse(tokens, options2 ?? this.defaults);
  }
  parseMarkdown(blockType) {
    const parse2 = (src, options2) => {
      const origOpt = { ...options2 };
      const opt = { ...this.defaults, ...origOpt };
      const throwError = this.onError(!!opt.silent, !!opt.async);
      if (this.defaults.async === true && origOpt.async === false) {
        return throwError(
          new Error(
            "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."
          )
        );
      }
      if (typeof src === "undefined" || src === null) {
        return throwError(
          new Error("marked(): input parameter is undefined or null")
        );
      }
      if (typeof src !== "string") {
        return throwError(
          new Error(
            "marked(): input parameter is of type " +
              Object.prototype.toString.call(src) +
              ", string expected"
          )
        );
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
        opt.hooks.block = blockType;
      }
      const lexer2 = opt.hooks
        ? opt.hooks.provideLexer()
        : blockType
        ? _Lexer.lex
        : _Lexer.lexInline;
      const parser2 = opt.hooks
        ? opt.hooks.provideParser()
        : blockType
        ? _Parser.parse
        : _Parser.parseInline;
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src)
          .then((src2) => lexer2(src2, opt))
          .then((tokens) =>
            opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens
          )
          .then((tokens) =>
            opt.walkTokens
              ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(
                  () => tokens
                )
              : tokens
          )
          .then((tokens) => parser2(tokens, opt))
          .then((html2) => (opt.hooks ? opt.hooks.postprocess(html2) : html2))
          .catch(throwError);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        let tokens = lexer2(src, opt);
        if (opt.hooks) {
          tokens = opt.hooks.processAllTokens(tokens);
        }
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html2 = parser2(tokens, opt);
        if (opt.hooks) {
          html2 = opt.hooks.postprocess(html2);
        }
        return html2;
      } catch (e2) {
        return throwError(e2);
      }
    };
    return parse2;
  }
  onError(silent, async) {
    return (e2) => {
      e2.message +=
        "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg =
          "<p>An error occurred:</p><pre>" +
          escape2(e2.message + "", true) +
          "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e2);
      }
      throw e2;
    };
  }
};
var markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function (options2) {
  markedInstance.setOptions(options2);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function (...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function (tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
_Parser.parse;
_Lexer.lex;
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries,
  setPrototypeOf,
  isFrozen,
  getPrototypeOf,
  getOwnPropertyDescriptor,
} = Object;
let { freeze, seal, create: create$2 } = Object;
let { apply, construct } = typeof Reflect !== "undefined" && Reflect;
if (!freeze) {
  freeze = function freeze2(x2) {
    return x2;
  };
}
if (!seal) {
  seal = function seal2(x2) {
    return x2;
  };
}
if (!apply) {
  apply = function apply2(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}
if (!construct) {
  construct = function construct2(Func, args) {
    return new Func(...args);
  };
}
const arrayForEach = unapply(Array.prototype.forEach);
const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
const arrayPop = unapply(Array.prototype.pop);
const arrayPush = unapply(Array.prototype.push);
const arraySplice = unapply(Array.prototype.splice);
const stringToLowerCase = unapply(String.prototype.toLowerCase);
const stringToString = unapply(String.prototype.toString);
const stringMatch = unapply(String.prototype.match);
const stringReplace = unapply(String.prototype.replace);
const stringIndexOf = unapply(String.prototype.indexOf);
const stringTrim = unapply(String.prototype.trim);
const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
const regExpTest = unapply(RegExp.prototype.test);
const typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function (thisArg) {
    if (thisArg instanceof RegExp) {
      thisArg.lastIndex = 0;
    }
    for (
      var _len = arguments.length,
        args = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      args[_key - 1] = arguments[_key];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function () {
    for (
      var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
      _key2 < _len2;
      _key2++
    ) {
      args[_key2] = arguments[_key2];
    }
    return construct(func, args);
  };
}
function addToSet(set, array) {
  let transformCaseFunc =
    arguments.length > 2 && arguments[2] !== void 0
      ? arguments[2]
      : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set, null);
  }
  let l2 = array.length;
  while (l2--) {
    let element = array[l2];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l2] = lcElement;
        }
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function cleanArray(array) {
  for (let index2 = 0; index2 < array.length; index2++) {
    const isPropertyExist = objectHasOwnProperty(array, index2);
    if (!isPropertyExist) {
      array[index2] = null;
    }
  }
  return array;
}
function clone(object) {
  const newObject = create$2(null);
  for (const [property, value] of entries(object)) {
    const isPropertyExist = objectHasOwnProperty(object, property);
    if (isPropertyExist) {
      if (Array.isArray(value)) {
        newObject[property] = cleanArray(value);
      } else if (
        value &&
        typeof value === "object" &&
        value.constructor === Object
      ) {
        newObject[property] = clone(value);
      } else {
        newObject[property] = value;
      }
    }
  }
  return newObject;
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
const html$1 = freeze([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "section",
  "select",
  "shadow",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
]);
const svg$1 = freeze([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern",
]);
const svgFilters = freeze([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
]);
const svgDisallowed = freeze([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use",
]);
const mathMl$1 = freeze([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts",
]);
const mathMlDisallowed = freeze([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none",
]);
const text = freeze(["#text"]);
const html = freeze([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns",
  "slot",
]);
const svg = freeze([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan",
]);
const mathMl = freeze([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnsalign",
  "columnlines",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lspace",
  "lquote",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns",
]);
const xml = freeze([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink",
]);
const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
const TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
const IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
const ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
const DOCTYPE_NAME = seal(/^html$/i);
const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR,
  ATTR_WHITESPACE,
  CUSTOM_ELEMENT,
  DATA_ATTR,
  DOCTYPE_NAME,
  ERB_EXPR,
  IS_ALLOWED_URI,
  IS_SCRIPT_OR_DATA,
  MUSTACHE_EXPR,
  TMPLIT_EXPR,
});
const NODE_TYPE = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
};
const getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
const _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(
  trustedTypes,
  purifyHostElement
) {
  if (
    typeof trustedTypes !== "object" ||
    typeof trustedTypes.createPolicy !== "function"
  ) {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      },
    });
  } catch (_2) {
    console.warn(
      "TrustedTypes policy " + policyName + " could not be created."
    );
    return null;
  }
};
const _createHooksMap = function _createHooksMap2() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: [],
  };
};
function createDOMPurify() {
  let window2 =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : getGlobal();
  const DOMPurify = (root) => createDOMPurify(root);
  DOMPurify.version = "3.2.6";
  DOMPurify.removed = [];
  if (
    !window2 ||
    !window2.document ||
    window2.document.nodeType !== NODE_TYPE.document ||
    !window2.Element
  ) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let { document: document2 } = window2;
  const originalDocument = document2;
  const currentScript = originalDocument.currentScript;
  const {
    DocumentFragment,
    HTMLTemplateElement,
    Node: Node2,
    Element: Element2,
    NodeFilter,
    NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
    HTMLFormElement,
    DOMParser,
    trustedTypes,
  } = window2;
  const ElementPrototype = Element2.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove = lookupGetter(ElementPrototype, "remove");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  const {
    implementation,
    createNodeIterator,
    createDocumentFragment,
    getElementsByTagName,
  } = document2;
  const { importNode } = originalDocument;
  let hooks = _createHooksMap();
  DOMPurify.isSupported =
    typeof entries === "function" &&
    typeof getParentNode === "function" &&
    implementation &&
    implementation.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: MUSTACHE_EXPR2,
    ERB_EXPR: ERB_EXPR2,
    TMPLIT_EXPR: TMPLIT_EXPR2,
    DATA_ATTR: DATA_ATTR2,
    ARIA_ATTR: ARIA_ATTR2,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
    ATTR_WHITESPACE: ATTR_WHITESPACE2,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT2,
  } = EXPRESSIONS;
  let { IS_ALLOWED_URI: IS_ALLOWED_URI$1 } = EXPRESSIONS;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [
    ...html$1,
    ...svg$1,
    ...svgFilters,
    ...mathMl$1,
    ...text,
  ]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [
    ...html,
    ...svg,
    ...mathMl,
    ...xml,
  ]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(
    create$2(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null,
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null,
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false,
      },
    })
  );
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp",
  ]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track",
  ]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns",
  ]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet(
    {},
    [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE],
    stringToString
  );
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, [
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
  ]);
  let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
    "title",
    "style",
    "font",
    "a",
    "script",
  ]);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1
        ? DEFAULT_PARSER_MEDIA_TYPE
        : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc =
      PARSER_MEDIA_TYPE === "application/xhtml+xml"
        ? stringToString
        : stringToLowerCase;
    ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS")
      ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc)
      : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR")
      ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc)
      : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES")
      ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString)
      : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR")
      ? addToSet(
          clone(DEFAULT_URI_SAFE_ATTRIBUTES),
          cfg.ADD_URI_SAFE_ATTR,
          transformCaseFunc
        )
      : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS")
      ? addToSet(
          clone(DEFAULT_DATA_URI_TAGS),
          cfg.ADD_DATA_URI_TAGS,
          transformCaseFunc
        )
      : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS")
      ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc)
      : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS")
      ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc)
      : clone({});
    FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR")
      ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc)
      : clone({});
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES")
      ? cfg.USE_PROFILES
      : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS =
      cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
    HTML_INTEGRATION_POINTS =
      cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
    if (
      cfg.CUSTOM_ELEMENT_HANDLING &&
      isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)
    ) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck =
        cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (
      cfg.CUSTOM_ELEMENT_HANDLING &&
      isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)
    ) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck =
        cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (
      cfg.CUSTOM_ELEMENT_HANDLING &&
      typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ===
        "boolean"
    ) {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements =
        cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate(
          'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
        );
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate(
          'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
        );
      }
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      emptyHTML = trustedTypesPolicy.createHTML("");
    } else {
      if (trustedTypesPolicy === void 0) {
        trustedTypesPolicy = _createTrustedTypesPolicy(
          trustedTypes,
          currentScript
        );
      }
      if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
        emptyHTML = trustedTypesPolicy.createHTML("");
      }
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const ALL_SVG_TAGS = addToSet({}, [
    ...svg$1,
    ...svgFilters,
    ...svgDisallowed,
  ]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: "template",
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return (
          tagName === "svg" &&
          (parentTagName === "annotation-xml" ||
            MATHML_TEXT_INTEGRATION_POINTS[parentTagName])
        );
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (
        parent.namespaceURI === SVG_NAMESPACE &&
        !HTML_INTEGRATION_POINTS[parentTagName]
      ) {
        return false;
      }
      if (
        parent.namespaceURI === MATHML_NAMESPACE &&
        !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]
      ) {
        return false;
      }
      return (
        !ALL_MATHML_TAGS[tagName] &&
        (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName])
      );
    }
    if (
      PARSER_MEDIA_TYPE === "application/xhtml+xml" &&
      ALLOWED_NAMESPACES[element.namespaceURI]
    ) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node,
    });
    try {
      getParentNode(node).removeChild(node);
    } catch (_2) {
      remove(node);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: element.getAttributeNode(name),
        from: element,
      });
    } catch (_2) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: element,
      });
    }
    element.removeAttribute(name);
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(element);
        } catch (_2) {}
      } else {
        try {
          element.setAttribute(name, "");
        } catch (_2) {}
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (
      PARSER_MEDIA_TYPE === "application/xhtml+xml" &&
      NAMESPACE === HTML_NAMESPACE
    ) {
      dirty =
        '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
        dirty +
        "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy
      ? trustedTypesPolicy.createHTML(dirty)
      : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_2) {}
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT
          ? emptyHTML
          : dirtyPayload;
      } catch (_2) {}
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(
        document2.createTextNode(leadingWhitespace),
        body.childNodes[0] || null
      );
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(
        doc,
        WHOLE_DOCUMENT ? "html" : "body"
      )[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root) {
    return createNodeIterator.call(
      root.ownerDocument || root,
      root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT |
        NodeFilter.SHOW_COMMENT |
        NodeFilter.SHOW_TEXT |
        NodeFilter.SHOW_PROCESSING_INSTRUCTION |
        NodeFilter.SHOW_CDATA_SECTION,
      null
    );
  };
  const _isClobbered = function _isClobbered2(element) {
    return (
      element instanceof HTMLFormElement &&
      (typeof element.nodeName !== "string" ||
        typeof element.textContent !== "string" ||
        typeof element.removeChild !== "function" ||
        !(element.attributes instanceof NamedNodeMap) ||
        typeof element.removeAttribute !== "function" ||
        typeof element.setAttribute !== "function" ||
        typeof element.namespaceURI !== "string" ||
        typeof element.insertBefore !== "function" ||
        typeof element.hasChildNodes !== "function")
    );
  };
  const _isNode = function _isNode2(value) {
    return typeof Node2 === "function" && value instanceof Node2;
  };
  function _executeHooks(hooks2, currentNode, data) {
    arrayForEach(hooks2, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _sanitizeElements = function _sanitizeElements2(currentNode) {
    let content = null;
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(currentNode.nodeName);
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS,
    });
    if (
      SAFE_FOR_XML &&
      currentNode.hasChildNodes() &&
      !_isNode(currentNode.firstElementChild) &&
      regExpTest(/<[/\w!]/g, currentNode.innerHTML) &&
      regExpTest(/<[/\w!]/g, currentNode.textContent)
    ) {
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
      _forceRemove(currentNode);
      return true;
    }
    if (
      SAFE_FOR_XML &&
      currentNode.nodeType === NODE_TYPE.comment &&
      regExpTest(/<[/\w]/g, currentNode.data)
    ) {
      _forceRemove(currentNode);
      return true;
    }
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
        if (
          CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp &&
          regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)
        ) {
          return false;
        }
        if (
          CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function &&
          CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)
        ) {
          return false;
        }
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        const parentNode = getParentNode(currentNode) || currentNode.parentNode;
        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          const childCount = childNodes.length;
          for (let i4 = childCount - 1; i4 >= 0; --i4) {
            const childClone = cloneNode(childNodes[i4], true);
            childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
            parentNode.insertBefore(childClone, getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element2 && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if (
      (tagName === "noscript" ||
        tagName === "noembed" ||
        tagName === "noframes") &&
      regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)
    ) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      content = currentNode.textContent;
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        content = stringReplace(content, expr, " ");
      });
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode(),
        });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (
      SANITIZE_DOM &&
      (lcName === "id" || lcName === "name") &&
      (value in document2 || value in formElement)
    ) {
      return false;
    }
    if (
      ALLOW_DATA_ATTR &&
      !FORBID_ATTR[lcName] &&
      regExpTest(DATA_ATTR2, lcName)
    );
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName));
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        (_isBasicCustomElement(lcTag) &&
          ((CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp &&
            regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag)) ||
            (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function &&
              CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag))) &&
          ((CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp &&
            regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName)) ||
            (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function &&
              CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)))) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        (lcName === "is" &&
          CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
          ((CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp &&
            regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value)) ||
            (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function &&
              CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))))
      );
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName]);
    else if (
      regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, ""))
    );
    else if (
      (lcName === "src" || lcName === "xlink:href" || lcName === "href") &&
      lcTag !== "script" &&
      stringIndexOf(value, "data:") === 0 &&
      DATA_URI_TAGS[lcTag]
    );
    else if (
      ALLOW_UNKNOWN_PROTOCOLS &&
      !regExpTest(
        IS_SCRIPT_OR_DATA2,
        stringReplace(value, ATTR_WHITESPACE2, "")
      )
    );
    else if (value) {
      return false;
    } else;
    return true;
  };
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return (
      tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2)
    );
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    const { attributes } = currentNode;
    if (!attributes || _isClobbered(currentNode)) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0,
    };
    let l2 = attributes.length;
    while (l2--) {
      const attr = attributes[l2];
      const { name, namespaceURI, value: attrValue } = attr;
      const lcName = transformCaseFunc(name);
      const initValue = attrValue;
      let value = name === "value" ? initValue : stringTrim(initValue);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      if (!hookEvent.keepAttr) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
          value = stringReplace(value, expr, " ");
        });
      }
      const lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (
        trustedTypesPolicy &&
        typeof trustedTypes === "object" &&
        typeof trustedTypes.getAttributeType === "function"
      ) {
        if (namespaceURI);
        else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case "TrustedHTML": {
              value = trustedTypesPolicy.createHTML(value);
              break;
            }
            case "TrustedScriptURL": {
              value = trustedTypesPolicy.createScriptURL(value);
              break;
            }
          }
        }
      }
      if (value !== initValue) {
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            currentNode.setAttribute(name, value);
          }
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
          } else {
            arrayPop(DOMPurify.removed);
          }
        } catch (_2) {
          _removeAttribute(name, currentNode);
        }
      }
    }
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
  };
  const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while ((shadowNode = shadowIterator.nextNode())) {
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode);
      _sanitizeAttributes(shadowNode);
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
    }
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  DOMPurify.sanitize = function (dirty) {
    let cfg =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      if (typeof dirty.toString === "function") {
        dirty = dirty.toString();
        if (typeof dirty !== "string") {
          throw typeErrorCreate("dirty is not a string, aborting");
        }
      } else {
        throw typeErrorCreate("toString is not a function");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      if (dirty.nodeName) {
        const tagName = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate(
            "root node is forbidden and cannot be sanitized in-place"
          );
        }
      }
    } else if (dirty instanceof Node2) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (
        importedNode.nodeType === NODE_TYPE.element &&
        importedNode.nodeName === "BODY"
      ) {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      if (
        !RETURN_DOM &&
        !SAFE_FOR_TEMPLATES &&
        !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf("<") === -1
      ) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE
          ? trustedTypesPolicy.createHTML(dirty)
          : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
    while ((currentNode = nodeIterator.nextNode())) {
      _sanitizeElements(currentNode);
      _sanitizeAttributes(currentNode);
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
    }
    if (IN_PLACE) {
      return dirty;
    }
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (
      WHOLE_DOCUMENT &&
      ALLOWED_TAGS["!doctype"] &&
      body.ownerDocument &&
      body.ownerDocument.doctype &&
      body.ownerDocument.doctype.name &&
      regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)
    ) {
      serializedHTML =
        "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        serializedHTML = stringReplace(serializedHTML, expr, " ");
      });
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE
      ? trustedTypesPolicy.createHTML(serializedHTML)
      : serializedHTML;
  };
  DOMPurify.setConfig = function () {
    let cfg =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function () {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function (tag2, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag2);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function (entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function (entryPoint, hookFunction) {
    if (hookFunction !== void 0) {
      const index2 = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index2 === -1
        ? void 0
        : arraySplice(hooks[entryPoint], index2, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function (entryPoint) {
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function () {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
createDOMPurify();
const TRANSLATIONS = {
  en: {
    // Game
    connecting: "Connecting...",
    connectingFail: "Could not connect!",
    disconnectedFromServer: "Disconnected from server",
    downloadingImage: "Downloading image...",
    placeTile: "Place a tile",
    donate: "Donate",
    myAccount: "My Account",
    chat: "Chat",
    liveChat: "Live Chat:",
    nicknameToContinue: "Enter a nickname to continue:",
    changeChannel: "Change channel:",
    captchaPrompt:
      "Solve this small captcha to help keep rplace.live fun for all...",
    webappInstall: "Install rplace.live web app",
    connectionProblems: "Connection problems?",
    tryClickingHere: "try clicking here",
    orTweetUs: "Or tweet us",
    pleaseBeRespectful: "Please be respectful and try not to spam!",
    enterNickname: "Enter nickname...",
    enterMessage: "Enter message...",
    signInInstead: "Sign in instead",
    createNewAccount: "Create a new account",
    mention: "Mention",
    replyTo: "Reply to",
    addReaction: "Add reaction",
    report: "Report",
    block: "Block",
    unblock: "Unblock",
    changeMyName: "Change my name",
    putOnCanvas: "🫧 Put on canvas",
    sendInLiveChat: "📨 Send in live chat",
    overlayMenu: "Overlay menu",
    modalAboutContent:
      "There is an empty canvas.<br><br>You may place a tile upon it, but you must wait to place another.<br><br>Individually you can create something.<br><br>Together you can create something more.",
    overlayMenuDesciption: "Visualise your build with a template image!",
    messageNotFound: "Message could not be loaded",
    placedBy: "Placed by:",
    lockMessage: "This canvas is locked... You can't place pixels here anymore",
    adHidden: "Ad hidden for 14 days!",
    copiedToClipboard: "Copied to clipboard!",
    // Posts
    rplaceLivePosts: "rplace.live posts",
    searchKeyword: "Search keyword",
    createPost: "Create post",
    communityPosts: "Community posts",
    sortBy: "Sort by:",
    hideSensitive: "Hide sensitive:",
    date: "Date",
    upvotes: "Upvotes",
    // Accounts
    couldntSignIn: "Couldn't sign in",
    couldntSignUp: "Couldn't sign up",
    couldntVerifySignIn: "Couldn't verify sign in",
    couldntLoadAccountProfile: "Couldn't load account profile",
    signinError: "Sign in error",
    accountTierFree: "Free",
    accountTierBronze: "Bronze",
    accountTierSilver: "Silver",
    accountTierGold: "Gold",
    accountTierModerator: "Moderator",
    accountTierAdministrator: "Administrator",
    deleteAccountAreYouSure:
      "Warning: You are about to delete your account. This can not be undone, are you sure you want to continue?",
    deleteAccountEnterEmail:
      "Enter your email below to confirm account deletion:",
    // Auth
    "auth.signup.ipAddress": "Failed to resolve IP address",
    "auth.signup.rateLimit":
      "Too many signup attempts. Please try again later.",
    "auth.signup.invalidUsername": "Invalid username",
    "auth.signup.invalidEmail": "Invalid email",
    "auth.signup.accountExists":
      "An account with the specified details already exists",
    "auth.login.invalidCredentials": "Invalid credentials",
    "auth.verify.rateLimit":
      "Too many failed attempts. Please try again later.",
    "auth.verify.invalidCode": "Invalid or expired verification code",
    "auth.verify.accountNotFound": "Account not found",
    "auth.link.invalidKey": "Invalid or expired link key",
  },
};
const lang = navigator.language.split("-")[0];
const TRANSLATION_EXPIRY = 3 * 24 * 60 * 60 * 1e3;
function openTranslationDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("translationsDB", 1);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore("translations", { keyPath: "lang" });
    };
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
}
function getCachedTranslation(lang2) {
  return new Promise(async (resolve, reject) => {
    const db = await openTranslationDB();
    const transaction = db.transaction("translations", "readonly");
    const store = transaction.objectStore("translations");
    const request = store.get(lang2);
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
}
function setCachedTranslation(lang2, data) {
  return new Promise(async (resolve, reject) => {
    const db = await openTranslationDB();
    const transaction = db.transaction("translations", "readwrite");
    const store = transaction.objectStore("translations");
    const request = store.put({ lang: lang2, data, timestamp: Date.now() });
    request.onsuccess = () => resolve();
    request.onerror = (event) => reject(event.target.error);
  });
}
async function fetchTranslations(lang2) {
  if (TRANSLATIONS[lang2]) {
    return TRANSLATIONS[lang2];
  }
  try {
    const cachedTranslation = await getCachedTranslation(lang2);
    const now = Date.now();
    if (
      cachedTranslation &&
      now - cachedTranslation.timestamp <= TRANSLATION_EXPIRY
    ) {
      TRANSLATIONS[lang2] = cachedTranslation.data;
      return cachedTranslation.data;
    }
    const response = await fetch(`translations/${lang2}.json`);
    if (!response.ok) {
      throw new Error(`Translations for ${lang2} not found`);
    }
    const translation = await response.json();
    await setCachedTranslation(lang2, translation);
    TRANSLATIONS[lang2] = translation;
    return translation;
  } catch (error) {
    console.error(error);
    return TRANSLATIONS["en"];
  }
}
async function translate$1(key) {
  let translations = TRANSLATIONS[lang];
  if (!translations) {
    translations = await fetchTranslations(lang);
  }
  return translations?.[key] ?? TRANSLATIONS["en"]?.[key] ?? key;
}
async function translateAll() {
  let translations = TRANSLATIONS[lang];
  if (!translations) {
    translations = await fetchTranslations(lang);
  }
  const elements = document.querySelectorAll("[translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("translate");
    const translation = translations?.[key] ?? TRANSLATIONS["en"]?.[key] ?? key;
    if (element instanceof HTMLInputElement) {
      if (element.type === "text") {
        element.placeholder = translation || element.placeholder;
      } else {
        element.value = translation || element.value;
      }
    } else if (element instanceof HTMLTextAreaElement) {
      element.placeholder = translation || element.placeholder;
    } else {
      element.innerHTML = translation || element.innerHTML;
    }
  });
}
fetchTranslations(lang);
function createTopLevelFrame(src, id) {
  return new Promise((resolve, reject) => {
    const topWindow = window.top;
    if (!topWindow) {
      const error = "Unable to access top-level window";
      console.error("Couldn't open account frame:", error);
      return reject(error);
    }
    if (topWindow.document.getElementById(id)) {
      return reject();
    }
    const iframe = topWindow.document.createElement("iframe");
    iframe.src = src;
    iframe.id = id;
    iframe.classList.add("iframe-modal");
    iframe.addEventListener("load", () => {
      resolve(iframe);
    });
    topWindow.document.body.appendChild(iframe);
  });
}
function removeTopLevelFrame(id) {
  const topWindow = window.top;
  if (!topWindow) {
    console.error(
      "Couldn't remove top level frame: Unable to access top-level window"
    );
    return false;
  }
  const iframe = topWindow.document.getElementById(id);
  if (!iframe || !(iframe instanceof HTMLIFrameElement)) {
    console.error("Couldn't remove top level frame: Frame not found");
    return false;
  }
  iframe.remove();
  return true;
}
const currentAuthUrl = new URL(localStorage.auth || DEFAULT_AUTH);
`${currentAuthUrl.host}${currentAuthUrl.pathname}`;
function hash(text2) {
  return text2
    .split("")
    .reduce((hash2, char) => (hash2 * 31 + char.charCodeAt(0)) >>> 0, 0);
}
const $$1 = (selector) => {
  const element = document.querySelector(selector);
  if (!element) {
    throw new Error(`Element not found for selector: ${selector}`);
  }
  return element;
};
function stringToHtml(html2, trim = true) {
  const template = document.createElement("template");
  template.innerHTML = html2;
  const result = template.content.children;
  return (
    /**@type {HTMLElement}*/
    result.length === 1 ? result[0] : result
  );
}
function blobToBase64(blob2) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = function () {
      const result = reader.result;
      if (!result || typeof result !== "string") {
        return reject();
      }
      const base64String = result.split(",")[1];
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob2);
  });
}
function base64ToUint8Array(base64) {
  const binary = atob(base64);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i4 = 0; i4 < len; i4++) {
    bytes[i4] = binary.charCodeAt(i4);
  }
  return bytes;
}
function base64ToBlob(base64, mimeType = "") {
  const bytes = base64ToUint8Array(base64);
  return new Blob([bytes], { type: mimeType });
}
function lerp(from, to, weight) {
  return from + weight * (to - from);
}
function toCapitalised(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
function generateRandomId() {
  let randomId;
  while (!randomId || document.getElementById(randomId)) {
    randomId = crypto.randomUUID().split("-")[0];
  }
  return randomId;
}
const loadingScreen =
  /**@type {HTMLElement}*/
  document.getElementById("loadingScreen");
async function showLoadingScreen(state = "normal", disconnectReason = null) {
  loadingScreen.style.opacity = "1";
  loadingScreen.style.display = "flex";
  if (state == "normal") {
    waitingGame.start();
  } else if (state == "timeout") {
    const loadingLogo =
      /**@type {HTMLImageElement}*/
      loadingScreen.children[0];
    loadingLogo.src = "images/rplace-offline.png";
  } else if (state == "disconnected") {
    const loadingLogo =
      /**@type {HTMLImageElement}*/
      loadingScreen.children[0];
    loadingLogo.src = "images/rplace-offline.png";
    const loadingMessage =
      /**@type {HTMLElement}*/
      document.getElementById("loadingMessage");
    loadingMessage.hidden = false;
    loadingMessage.textContent = `${await translate$1(
      "disconnectedFromServer"
    )}: ${disconnectReason}`;
  }
}
function hideLoadingScreen() {
  loadingScreen.style.opacity = "0";
  setTimeout(() => (loadingScreen.style.display = "none"), 300);
  setTimeout(() => waitingGame.stop(), 300);
}
class WaitingGame {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas2) {
    this.canvas = canvas2;
    this.started = false;
    this.ctx = canvas2.getContext("2d");
    this.boxSize = 80;
    this.columns = [];
    this.gravity = 0.36;
    this.initializeColumns();
  }
  initializeColumns() {
    const columnCount = Math.ceil(innerWidth / this.boxSize);
    this.columns = new Array(columnCount).fill(0).map(() => []);
  }
  start() {
    if (this.started || !this.ctx) return;
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
    this.initializeColumns();
    this.interval = setInterval(() => {
      if (!this.ctx) {
        clearInterval(this.interval);
        return;
      }
      this.#update();
    }, 16);
    this.started = true;
  }
  stop() {
    clearInterval(this.interval);
    this.columns = [];
    this.initializeColumns();
    this.clear();
    this.started = false;
  }
  #update() {
    if (!this.ctx) {
      return;
    }
    this.clear();
    for (let col = 0; col < this.columns.length; col++) {
      for (let i4 = 0; i4 < this.columns[col].length; i4++) {
        this.columns[col][i4].update(this.ctx, col, i4);
      }
    }
  }
  clear() {
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {string} colour
   */
  addBox(x2, y3, colour) {
    const col = Math.floor(x2 / this.boxSize);
    if (col >= 0 && col < this.columns.length) {
      const column = this.columns[col];
      const insertIndex = this.#findInsertIndex(column, y3);
      column.splice(insertIndex, 0, new Box(colour, y3, this.boxSize));
    }
  }
  /**
   * @param {Box[]} column
   * @param {number} y
   */
  #findInsertIndex(column, y3) {
    for (let i4 = 0; i4 < column.length; i4++) {
      if (y3 > column[i4].y) {
        return i4;
      }
    }
    return column.length;
  }
  /**
   * @param {number} col
   * @param {number} index
   */
  getFloorY(col, index2) {
    const column = this.columns[col];
    return index2 > 0 ? column[index2 - 1].y : this.canvas.height;
  }
}
class Box {
  /**
   * @param {string} colour
   * @param {number} y
   * @param {number} size
   */
  constructor(colour, y3, size) {
    this.colour = colour;
    this.y = y3;
    this.size = size;
    this.gravitySpeed = 0;
    this.stretch = this.gravitySpeed;
    this.hitFlash = 0;
  }
  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} col
   * @param {number} stackIndex
   */
  update(ctx, col, stackIndex) {
    const targetY = waitingGame.getFloorY(col, stackIndex) - this.size;
    if (this.y >= targetY) {
      if (this.gravitySpeed > 0) {
        this.hitFlash = 15;
      }
      this.y = targetY;
      this.gravitySpeed = 0;
    } else {
      this.gravitySpeed += waitingGame.gravity;
      this.y += this.gravitySpeed;
    }
    if (this.hitFlash > 0) {
      this.hitFlash--;
    }
    const x2 = col * this.size;
    const stretch = lerp(this.stretch, this.gravitySpeed * 2, 0.3);
    ctx.fillStyle = this.colour;
    ctx.fillRect(
      x2 + stretch / 2,
      this.y - stretch / 2,
      this.size - stretch,
      this.size + stretch
    );
    if (this.hitFlash > 0) {
      const flashAlpha = (this.hitFlash / 15) * 0.5;
      ctx.fillStyle = `rgba(255, 255, 255, ${flashAlpha})`;
      ctx.fillRect(
        x2 + stretch / 2,
        this.y - stretch / 2,
        this.size - stretch,
        this.size + stretch
      );
    }
  }
}
function handleGameCanvasClick(x2, y3) {
  const colours2 = ["grey", "lightgray", "darkgray", "whiteSmoke"];
  let colour = colours2[Math.floor(Math.random() * 4)];
  if (Math.random() < 1 / 100) {
    colour = "#FF5700";
  }
  waitingGame.addBox(x2, y3, colour);
}
const waitingGameCanvas =
  /**@type {HTMLCanvasElement}*/
  document.getElementById("waitingGameCanvas");
const waitingGame = new WaitingGame(waitingGameCanvas);
waitingGameCanvas.addEventListener("mousedown", (event) => {
  handleGameCanvasClick(event.clientX, event.clientY);
  event.preventDefault();
  event.stopPropagation();
});
waitingGameCanvas.addEventListener("touchstart", (event) => {
  if (event.touches[0]) {
    handleGameCanvasClick(event.touches[0].clientX, event.touches[0].clientY);
    event.preventDefault();
    event.stopPropagation();
  }
});
window.addEventListener("resize", () => {
  const mainContent2 =
    /**@type {HTMLElement}*/
    document.getElementById("maincontent");
  waitingGame.canvas.width = innerWidth;
  waitingGame.canvas.height = mainContent2.offsetHeight;
  waitingGame.columns = [];
  waitingGame.initializeColumns();
});
showLoadingScreen();
const captchaPopup$1 =
  /**@type {HTMLElement}*/
  document.getElementById("captchaPopup");
const captchaImagePosition =
  /**@type {HTMLElement}*/
  document.getElementById("captchaImagePosition");
const captchaCanvas =
  /**@type {HTMLCanvasElement}*/
  document.getElementById("captchaCanvas");
let captchaCanvasHandle = null;
function updateImgCaptchaCanvas(imageData) {
  updateImgCaptchaCanvasFallback(imageData);
}
function updateImgCaptchaCanvasFallback(imageData) {
  captchaCanvas.width = captchaPopup$1.offsetWidth;
  captchaCanvas.height = captchaPopup$1.offsetHeight;
  const captchaImg = new Image();
  const url2 = URL.createObjectURL(imageData);
  captchaImg.src = url2;
  const captchaImgRadius = 8;
  captchaImg.onload = function () {
    function drawCaptcha() {
      if (captchaCanvasHandle === null) {
        return;
      }
      const ctx = captchaCanvas.getContext("2d");
      if (ctx === null) {
        console.error(
          "Could not acquire captcha canvas rendering context (ctx was null)"
        );
        return;
      }
      captchaCanvas.width = captchaPopup$1.offsetWidth;
      captchaCanvas.height = captchaPopup$1.offsetHeight;
      const canvasImageSize = 196;
      const x2 = captchaImagePosition.offsetLeft;
      const y3 = captchaImagePosition.offsetTop;
      ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x2 + captchaImgRadius, y3);
      ctx.arcTo(
        x2 + canvasImageSize,
        y3,
        x2 + canvasImageSize,
        y3 + canvasImageSize,
        captchaImgRadius
      );
      ctx.arcTo(
        x2 + canvasImageSize,
        y3 + canvasImageSize,
        x2,
        y3 + canvasImageSize,
        captchaImgRadius
      );
      ctx.arcTo(x2, y3 + canvasImageSize, x2, y3, captchaImgRadius);
      ctx.arcTo(x2, y3, x2 + canvasImageSize, y3, captchaImgRadius);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(captchaImg, x2, y3, canvasImageSize, canvasImageSize);
      ctx.restore();
      const captchaImageBottom =
        captchaImagePosition.offsetTop + canvasImageSize;
      const captchaImageCentreX = captchaCanvas.width / 2;
      ctx.fillStyle = "#ff0000a3";
      ctx.font = "16px reddit";
      ctx.textAlign = "center";
      ctx.fillText(
        "Warning: Your browser doesn't support WebGL 2,",
        captchaImageCentreX,
        captchaImageBottom + 16
      );
      ctx.fillText(
        "this can cause some site features to break!",
        captchaImageCentreX,
        captchaImageBottom + 52
      );
      captchaCanvasHandle = requestAnimationFrame(drawCaptcha);
    }
    captchaCanvasHandle = requestAnimationFrame(drawCaptcha);
  };
}
function clearCaptchaCanvas() {
  if (captchaCanvasHandle) {
    window.cancelAnimationFrame(captchaCanvasHandle);
    captchaCanvasHandle = null;
  }
}
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
if (!Math.hypot)
  Math.hypot = function () {
    var y3 = 0,
      i4 = arguments.length;
    while (i4--) {
      y3 += arguments[i4] * arguments[i4];
    }
    return Math.sqrt(y3);
  };
function create$1() {
  var out = new ARRAY_TYPE(16);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function invert(out, a2) {
  var a00 = a2[0],
    a01 = a2[1],
    a02 = a2[2],
    a03 = a2[3];
  var a10 = a2[4],
    a11 = a2[5],
    a12 = a2[6],
    a13 = a2[7];
  var a20 = a2[8],
    a21 = a2[9],
    a22 = a2[10],
    a23 = a2[11];
  var a30 = a2[12],
    a31 = a2[13],
    a32 = a2[14],
    a33 = a2[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  var det =
    b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
function multiply(out, a2, b2) {
  var a00 = a2[0],
    a01 = a2[1],
    a02 = a2[2],
    a03 = a2[3];
  var a10 = a2[4],
    a11 = a2[5],
    a12 = a2[6],
    a13 = a2[7];
  var a20 = a2[8],
    a21 = a2[9],
    a22 = a2[10],
    a23 = a2[11];
  var a30 = a2[12],
    a31 = a2[13],
    a32 = a2[14],
    a33 = a2[15];
  var b0 = b2[0],
    b1 = b2[1],
    b22 = b2[2],
    b3 = b2[3];
  out[0] = b0 * a00 + b1 * a10 + b22 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b22 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b22 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b22 * a23 + b3 * a33;
  b0 = b2[4];
  b1 = b2[5];
  b22 = b2[6];
  b3 = b2[7];
  out[4] = b0 * a00 + b1 * a10 + b22 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b22 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b22 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b22 * a23 + b3 * a33;
  b0 = b2[8];
  b1 = b2[9];
  b22 = b2[10];
  b3 = b2[11];
  out[8] = b0 * a00 + b1 * a10 + b22 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b22 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b22 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b22 * a23 + b3 * a33;
  b0 = b2[12];
  b1 = b2[13];
  b22 = b2[14];
  b3 = b2[15];
  out[12] = b0 * a00 + b1 * a10 + b22 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b22 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b22 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b22 * a23 + b3 * a33;
  return out;
}
function translate(out, a2, v2) {
  var x2 = v2[0],
    y3 = v2[1],
    z3 = v2[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  if (a2 === out) {
    out[12] = a2[0] * x2 + a2[4] * y3 + a2[8] * z3 + a2[12];
    out[13] = a2[1] * x2 + a2[5] * y3 + a2[9] * z3 + a2[13];
    out[14] = a2[2] * x2 + a2[6] * y3 + a2[10] * z3 + a2[14];
    out[15] = a2[3] * x2 + a2[7] * y3 + a2[11] * z3 + a2[15];
  } else {
    a00 = a2[0];
    a01 = a2[1];
    a02 = a2[2];
    a03 = a2[3];
    a10 = a2[4];
    a11 = a2[5];
    a12 = a2[6];
    a13 = a2[7];
    a20 = a2[8];
    a21 = a2[9];
    a22 = a2[10];
    a23 = a2[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x2 + a10 * y3 + a20 * z3 + a2[12];
    out[13] = a01 * x2 + a11 * y3 + a21 * z3 + a2[13];
    out[14] = a02 * x2 + a12 * y3 + a22 * z3 + a2[14];
    out[15] = a03 * x2 + a13 * y3 + a23 * z3 + a2[15];
  }
  return out;
}
function orthoNO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
var ortho = orthoNO;
function create() {
  var out = new ARRAY_TYPE(4);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }
  return out;
}
function fromValues(x2, y3, z3, w) {
  var out = new ARRAY_TYPE(4);
  out[0] = x2;
  out[1] = y3;
  out[2] = z3;
  out[3] = w;
  return out;
}
function transformMat4(out, a2, m2) {
  var x2 = a2[0],
    y3 = a2[1],
    z3 = a2[2],
    w = a2[3];
  out[0] = m2[0] * x2 + m2[4] * y3 + m2[8] * z3 + m2[12] * w;
  out[1] = m2[1] * x2 + m2[5] * y3 + m2[9] * z3 + m2[13] * w;
  out[2] = m2[2] * x2 + m2[6] * y3 + m2[10] * z3 + m2[14] * w;
  out[3] = m2[3] * x2 + m2[7] * y3 + m2[11] * z3 + m2[15] * w;
  return out;
}
(function () {
  var vec = create();
  return function (a2, stride, offset, count, fn, arg) {
    var i4, l2;
    if (!stride) {
      stride = 4;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l2 = Math.min(count * stride + offset, a2.length);
    } else {
      l2 = a2.length;
    }
    for (i4 = offset; i4 < l2; i4 += stride) {
      vec[0] = a2[i4];
      vec[1] = a2[i4 + 1];
      vec[2] = a2[i4 + 2];
      vec[3] = a2[i4 + 3];
      fn(vec, vec, arg);
      a2[i4] = vec[0];
      a2[i4 + 1] = vec[1];
      a2[i4 + 2] = vec[2];
      a2[i4 + 3] = vec[3];
    }
    return a2;
  };
})();
class BoardRenderer {
  /**@type {HTMLCanvasElement}*/
  canvas;
  /**@type {WebGL2RenderingContext}*/
  _gl;
  /**@type {ResizeObserver}*/
  _resizeObserver;
  // We separate into different render layers for mod & debugging purposes
  /**@type {Uint8Array|null}*/
  _board = null;
  /**@type {Uint8Array|null}*/
  _changes = null;
  /**@type {Uint8Array|null}*/
  _socketPixels = null;
  /**@type {Uint32Array|null}*/
  _palette = null;
  /**@type {number}*/
  _boardWidth = 0;
  /**@type {number}*/
  _boardHeight = 0;
  /**@type {number|null}*/
  _redrawHandle = null;
  /**@type {number}*/
  _x = 0;
  /**@type {number}*/
  _y = 0;
  /**@type {number}*/
  _zoom = 1;
  /**@type {number}*/
  _devicePixelRatio = 1;
  // Default textures and shader program
  /**@type {WebGLProgram}*/
  _boardProgram;
  /**@type {WebGLVertexArrayObject}*/
  _vao;
  /**@type {WebGLTexture}*/
  _canvasTex;
  /**@type {WebGLTexture}*/
  _changesTex;
  /**@type {WebGLTexture}*/
  _socketPixelsTex;
  /**@type {WebGLTexture}*/
  _paletteTex;
  // Transform handling
  /**@type {mat4}*/
  _modelMatrix;
  /**@type {mat4}*/
  _viewMatrix;
  /**@type {mat4}*/
  _projectionMatrix;
  /**@type {mat4}*/
  _mvpMatrix;
  // Default board shader handling
  /**@type {WebGLUniformLocation}*/
  _boardMvpUniformLoc;
  /**@type {WebGLUniformLocation}*/
  _boardSizeUniformLoc;
  /**@type {WebGLUniformLocation}*/
  _boardTexUniformLoc;
  /**@type {WebGLUniformLocation}*/
  _paletteTexUniformLoc;
  // Render layers configuration
  /**@type {LayerShader}*/
  _boardLayerShader;
  /**@type {Array<RenderLayer>}*/
  _renderLayers = [];
  // Picking handling
  /**@type {WebGLFramebuffer}*/
  _pickFBO;
  /**@type {WebGLTexture}*/
  _pickFBOTex;
  /**@type {WebGLTexture}*/
  _pickTex;
  /**@type {WebGLProgram}*/
  _pickProgram;
  /**@type {WebGLUniformLocation}*/
  _pickMvpUniformLoc;
  /**@type {WebGLUniformLocation}*/
  _pickBoardSizeUniformLoc;
  /**@type {WebGLUniformLocation}*/
  _pickTexUniformLoc;
  // Geometry
  /**@type {Float32Array}*/
  _uv;
  /**@type {Float32Array}*/
  _vertices;
  /**@type {number}*/
  _vertexCount;
  static uv = new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]);
  static vertices = new Float32Array([
    -1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0,
  ]);
  // Shaders
  static boardVertexSource = `#version 300 es
		in vec3 a_position;
		in vec2 a_uv;
		out vec2 v_uv;

		uniform mat4 u_modelViewProjection;

		void main() {
			v_uv = vec2(a_uv.x, 1.0 - a_uv.y);
			gl_Position = u_modelViewProjection * vec4(a_position, 1.0); 
		}`;
  static boardFragmentSource = `#version 300 es
		precision highp float;
		precision highp usampler2D;

		in highp vec2 v_uv;
		out vec4 fragColour;

		uniform usampler2D u_boardTex;
		uniform usampler2D u_paletteTex;
		uniform ivec2 u_boardSize;

		void main() {
			ivec2 texelCoord = ivec2(v_uv * vec2(u_boardSize));

			// Get palette index from board texture
			uint index = texelFetch(u_boardTex, texelCoord, 0).r;
			
			if (index == 255u) {
				// Changes / socketPixels alpha index
				fragColour = vec4(1.0, 1.0, 1.0, 0.0);
				return;
			}

			// Get colour from palette texture
			uvec4 raw = texelFetch(u_paletteTex, ivec2(int(index), 0), 0);

			// Convert to normalized float
			fragColour = vec4(raw) / 255.0;
		}`;
  static pickFragmentSource = `#version 300 es
		precision highp float;
		precision highp usampler2D;

		in highp vec2 v_uv;
		layout(location = 0) out uvec4 fragColour;

		uniform usampler2D u_pickTex;
		uniform ivec2 u_boardSize;

		void main() {
			ivec2 texelCoord = ivec2(v_uv * vec2(u_boardSize));
			uvec4 pixelId = texelFetch(u_pickTex, texelCoord, 0);

			if (texelCoord.x >= 0 && texelCoord.x < u_boardSize.x && 
				texelCoord.y >= 0 && texelCoord.y < u_boardSize.y) {
				fragColour = pixelId;
			}
			else {
				// Outside board bounds - output invalid ID
				fragColour = uvec4(255u, 255u, 255u, 255u);
			}
		}`;
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {Float32Array} uv
   * @param {Float32Array} vertices
   * @param {number} vertexCount
   */
  constructor(
    canvas2,
    uv = BoardRenderer.uv,
    vertices = BoardRenderer.vertices,
    vertexCount = 6
  ) {
    this.canvas = canvas2;
    this._uv = uv;
    this._vertices = vertices;
    this._vertexCount = vertexCount;
    this._resizeObserver = new ResizeObserver(() => {
      this._updateCanvasSize();
      this._updatePickFrameBufferSize();
      this.queueRedraw();
    });
    this._resizeObserver.observe(canvas2);
    window.addEventListener("resize", () => {
      this._devicePixelRatio = window.devicePixelRatio ?? 1;
      this._updateCanvasSize();
      this._updatePickFrameBufferSize();
    });
    this._devicePixelRatio = window.devicePixelRatio ?? 1;
    const gl = (this._gl =
      /**@type {WebGL2RenderingContext}*/
      canvas2.getContext("webgl2", { alpha: true }));
    if (!gl) {
      throw new Error("WebGL2 not supported");
    }
    const boardProgram = (this._boardProgram = this._createShader(
      BoardRenderer.boardFragmentSource,
      BoardRenderer.boardVertexSource
    ));
    const vao = (this._vao = gl.createVertexArray());
    gl.bindVertexArray(vao);
    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, this._vertices, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(boardProgram, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);
    const uvBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this._uv, gl.STATIC_DRAW);
    const uvLoc = gl.getAttribLocation(boardProgram, "a_uv");
    gl.enableVertexAttribArray(uvLoc);
    gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);
    this._boardWidth = 1;
    this._boardHeight = 1;
    this._canvasTex = this._createBoardTexture();
    this._changesTex = this._createBoardTexture();
    this._socketPixelsTex = this._createBoardTexture();
    const paletteTex = (this._paletteTex = gl.createTexture());
    gl.bindTexture(gl.TEXTURE_2D, paletteTex);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA8UI,
      1,
      1,
      0,
      gl.RGBA_INTEGER,
      gl.UNSIGNED_BYTE,
      new Uint8Array(4)
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    this._boardMvpUniformLoc =
      /**@type {WebGLUniformLocation}*/
      gl.getUniformLocation(boardProgram, "u_modelViewProjection");
    this._boardTexUniformLoc =
      /**@type {WebGLUniformLocation}*/
      gl.getUniformLocation(boardProgram, "u_boardTex");
    this._boardSizeUniformLoc =
      /**@type {WebGLUniformLocation}*/
      gl.getUniformLocation(boardProgram, "u_boardSize");
    this._paletteTexUniformLoc =
      /**@type {WebGLUniformLocation}*/
      gl.getUniformLocation(boardProgram, "u_paletteTex");
    this._boardLayerShader = {
      program: this._boardProgram,
      mvpUniformLoc: this._boardMvpUniformLoc,
      boardSizeUniformLoc: this._boardSizeUniformLoc,
      paletteTexUniformLoc: this._paletteTexUniformLoc,
      textureUniformLoc: this._boardTexUniformLoc,
    };
    const pickFBO = (this._pickFBO = gl.createFramebuffer());
    gl.bindFramebuffer(gl.FRAMEBUFFER, pickFBO);
    this._pickTex = this._createPickTexture();
    const pickProgram = (this._pickProgram = this._createShader(
      BoardRenderer.pickFragmentSource,
      BoardRenderer.boardVertexSource
    ));
    this._pickMvpUniformLoc =
      /**@type {WebGLUniformLocation}*/
      gl.getUniformLocation(pickProgram, "u_modelViewProjection");
    this._pickBoardSizeUniformLoc =
      /**@type {WebGLUniformLocation}*/
      gl.getUniformLocation(pickProgram, "u_boardSize");
    this._pickTexUniformLoc =
      /**@type {WebGLUniformLocation}*/
      gl.getUniformLocation(pickProgram, "u_pickTex");
    const pickFBOTex = (this._pickFBOTex = gl.createTexture());
    gl.bindTexture(gl.TEXTURE_2D, pickFBOTex);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA8UI,
      canvas2.width,
      canvas2.height,
      0,
      gl.RGBA_INTEGER,
      gl.UNSIGNED_BYTE,
      null
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      pickFBOTex,
      0
    );
    const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (status !== gl.FRAMEBUFFER_COMPLETE) {
      console.error("Incomplete framebuffer:", status.toString(16));
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    this._initialiseRenderLayers();
    const model = (this._modelMatrix = create$1());
    identity(model);
    const view = (this._viewMatrix = create$1());
    identity(view);
    const projection = (this._projectionMatrix = create$1());
    identity(projection);
    const mvp = (this._mvpMatrix = create$1());
    identity(mvp);
    this._updateCanvasSize();
  }
  _initialiseRenderLayers() {
    this._renderLayers = [
      {
        texture: this._canvasTex,
        shader: this._boardLayerShader,
        enabled: true,
        uniforms: {
          u_paletteTex: this._paletteTex,
        },
      },
      {
        texture: this._changesTex,
        shader: this._boardLayerShader,
        enabled: true,
        uniforms: {
          u_paletteTex: this._paletteTex,
        },
      },
      {
        texture: this._socketPixelsTex,
        shader: this._boardLayerShader,
        enabled: true,
        uniforms: {
          u_paletteTex: this._paletteTex,
        },
      },
    ];
  }
  getContext() {
    return this._gl;
  }
  /**
   * Enable or disable a specific render layer
   * @param {number} layerIndex - 0: board, 1: changes, 2: socketPixels
   * @param {boolean} enabled
   */
  setLayerEnabled(layerIndex, enabled) {
    if (this._renderLayers[layerIndex]) {
      this._renderLayers[layerIndex].enabled = enabled;
      this.queueRedraw();
    }
  }
  /**
   * Add a new render layer
   * @param {WebGLTexture} texture
   * @param {LayerShader} shader
   * @param {boolean} enabled
   * @param {Object<string, any>} [uniforms] - Custom uniform values
   */
  addRenderLayer(
    texture,
    shader = this._boardLayerShader,
    enabled = true,
    uniforms = {}
  ) {
    const layer = { texture, shader, enabled, uniforms };
    this._renderLayers.push(layer);
    this.queueRedraw();
    return layer;
  }
  /**
   * @param {RenderLayer} layer
   */
  removeRenderLayer(layer) {
    const index2 = this._renderLayers.indexOf(layer);
    if (index2 != -1) {
      this._renderLayers.splice(index2, 1);
    }
    this.queueRedraw();
    return index2;
  }
  /**
   * Update uniform values for a specific layer
   * @param {RenderLayer} layer
   * @param {Object<string, any>} uniforms
   */
  updateLayerUniforms(layer, uniforms) {
    if (!layer.uniforms) {
      layer.uniforms = {};
    }
    Object.assign(layer.uniforms, uniforms);
    this.queueRedraw();
  }
  /**
   * @param {string} fragmentSource
   * @param {string} vertexSource
   * @param {string} textureUniform
   * @param {Object<string, UniformSchema>} [uniformSchema] - Schema for custom uniforms
   * @returns {LayerShader}
   */
  createLayerShader(
    fragmentSource = BoardRenderer.boardFragmentSource,
    vertexSource = BoardRenderer.boardVertexSource,
    textureUniform = "u_boardTex",
    uniformSchema = {}
  ) {
    const gl = this._gl;
    const program = this._createShader(fragmentSource, vertexSource);
    const textureUniformLoc =
      /**@type {WebGLUniformLocation}*/
      gl.getUniformLocation(program, textureUniform);
    const mvpUniformLoc =
      /**@type {WebGLUniformLocation}*/
      gl.getUniformLocation(program, "u_modelViewProjection");
    const boardSizeUniformLoc =
      /**@type {WebGLUniformLocation}*/
      gl.getUniformLocation(program, "u_boardSize");
    const paletteTexUniformLoc =
      /**@type {WebGLUniformLocation}*/
      gl.getUniformLocation(program, "u_paletteTex");
    const uniformLocations = {};
    let nextTextureUnit = 2;
    for (const [name, schema] of Object.entries(uniformSchema)) {
      const location2 = gl.getUniformLocation(program, name);
      if (location2) {
        uniformLocations[name] = location2;
        if (schema.type === "sampler2D" && schema.textureUnit === void 0) {
          schema.textureUnit = nextTextureUnit++;
        }
      }
    }
    return {
      program,
      mvpUniformLoc,
      boardSizeUniformLoc,
      paletteTexUniformLoc,
      textureUniformLoc,
      uniformSchema,
      uniformLocations,
    };
  }
  /**
   * Bind custom uniforms based on schema
   * @param {WebGL2RenderingContext} gl
   * @param {LayerShader} shader
   * @param {Record<string, any>} uniformValues
   */
  _bindCustomUniforms(gl, shader, uniformValues) {
    if (!shader.uniformSchema || !shader.uniformLocations || !uniformValues) {
      return;
    }
    for (const [name, schema] of Object.entries(shader.uniformSchema)) {
      const location2 = shader.uniformLocations[name];
      const value = uniformValues[name];
      if (!location2 || value === void 0) {
        continue;
      }
      switch (schema.type) {
        case "1f":
          const v1f = value;
          gl.uniform1f(location2, v1f);
          break;
        case "2f":
          const v2f = value;
          gl.uniform2f(location2, ...v2f);
          break;
        case "3f":
          const v3f = value;
          gl.uniform3f(location2, ...v3f);
          break;
        case "4f":
          const v4f = value;
          gl.uniform4f(location2, ...v4f);
          break;
        case "1i":
          const v1i = value;
          gl.uniform1i(location2, v1i);
          break;
        case "2i":
          const v2i = value;
          gl.uniform2i(location2, ...v2i);
          break;
        case "3i":
          const v3i = value;
          gl.uniform3i(location2, ...v3i);
          break;
        case "4i":
          const v4i = value;
          gl.uniform4i(location2, ...v4i);
          break;
        case "mat4":
          const mat = value;
          gl.uniformMatrix4fv(location2, false, mat);
          break;
        case "sampler2D":
          const tex = value;
          const texUnit = schema.textureUnit ?? 0;
          gl.activeTexture(gl.TEXTURE0 + texUnit);
          gl.bindTexture(gl.TEXTURE_2D, tex);
          gl.uniform1i(location2, texUnit);
          break;
        default:
          console.warn(`Unknown uniform type: ${schema.type}`);
          break;
      }
    }
  }
  /**
   * @param {string} fragmentSource
   * @param {string} vertexSource
   */
  _createShader(fragmentSource, vertexSource) {
    const gl = this._gl;
    const program = gl.createProgram();
    gl.attachShader(
      program,
      this._compileShader(gl.FRAGMENT_SHADER, fragmentSource)
    );
    gl.attachShader(
      program,
      this._compileShader(gl.VERTEX_SHADER, vertexSource)
    );
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const errorMsg = gl.getProgramInfoLog(program) ?? "";
      throw new Error(errorMsg);
    }
    return program;
  }
  /**
   *
   * @param {GLenum} type
   * @param {string} source
   * @returns
   */
  _compileShader(type, source) {
    const gl = this._gl;
    const shader = gl.createShader(type);
    if (!shader) {
      throw new Error("Failed to create shader");
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const errorMsg = gl.getShaderInfoLog(shader) ?? "";
      gl.deleteShader(shader);
      throw new Error(`Shader compilation error: ${errorMsg}`);
    }
    return shader;
  }
  _updateCanvasSize() {
    const dpr = this._devicePixelRatio;
    const width = this.canvas.offsetWidth * dpr;
    const height = this.canvas.offsetHeight * dpr;
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
      return true;
    }
    return false;
  }
  _updateMatrices() {
    const model = this._modelMatrix;
    const view = this._viewMatrix;
    const projection = this._projectionMatrix;
    const mvp = this._mvpMatrix;
    const scale = 1 / (this._zoom * 50 * this._devicePixelRatio);
    const ndcX = -(this._x - this._boardWidth / 2) / (this._boardWidth / 2);
    const ndcY = (this._y - this._boardHeight / 2) / (this._boardHeight / 2);
    identity(model);
    identity(view);
    identity(projection);
    translate(view, view, [ndcX, ndcY, 0]);
    const aspect = this.canvas.width / this.canvas.height;
    ortho(
      projection,
      -aspect * scale,
      aspect * scale,
      // Left right
      -scale,
      scale,
      // Bottom top
      -1,
      1
      // Clipping plane
    );
    multiply(mvp, projection, view);
    multiply(mvp, mvp, model);
  }
  /**
   * @param {Uint8Array|null} boardArr Board (canvas), changes, or socket pixels array
   */
  _createBoardTexture(boardArr = null) {
    const gl = this._gl;
    const boardTex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, boardTex);
    const data =
      boardArr || new Uint8Array(this._boardWidth * this._boardHeight);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.R8UI,
      this._boardWidth,
      this._boardHeight,
      0,
      gl.RED_INTEGER,
      gl.UNSIGNED_BYTE,
      data
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return boardTex;
  }
  _setupBlending(blendMode = "normal") {
    const gl = this._gl;
    if (blendMode === "normal") {
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    } else if (blendMode === "additive") {
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    } else {
      gl.disable(gl.BLEND);
    }
  }
  /**
   * @param {RenderLayer} layer
   */
  _renderLayer(layer) {
    if (!layer.enabled) {
      return;
    }
    const gl = this._gl;
    this._setupBlending(layer.blendMode);
    const layerShader = layer.shader;
    gl.useProgram(layerShader.program);
    gl.bindVertexArray(this._vao);
    gl.uniformMatrix4fv(layerShader.mvpUniformLoc, false, this._mvpMatrix);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, layer.texture);
    gl.uniform1i(layerShader.textureUniformLoc, 0);
    gl.uniform2i(
      layerShader.boardSizeUniformLoc,
      this._boardWidth,
      this._boardHeight
    );
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this._paletteTex);
    gl.uniform1i(layerShader.paletteTexUniformLoc, 1);
    if (layer.uniforms) {
      this._bindCustomUniforms(gl, layerShader, layer.uniforms);
    }
    gl.drawArrays(gl.TRIANGLES, 0, this._vertexCount);
  }
  /**
   * @param {Uint8Array} canvas - Base canvas
   * @param {Uint8Array} changes - Server delta changes from base fetched canvas
   * @param {Uint8Array} socketPixels - Websocket received pixels layer
   * @param {Uint32Array} palette
   * @param {number} width
   * @param {number} height
   */
  setSources(canvas2, changes, socketPixels, palette2, width, height) {
    if (
      !canvas2 ||
      !changes ||
      !socketPixels ||
      !palette2 ||
      width <= 0 ||
      height <= 0
    ) {
      console.warn("Invalid sources provided to setSources");
      return;
    }
    this._board = canvas2;
    this._changes = changes;
    this._socketPixels = socketPixels;
    this._palette = palette2;
    this._boardWidth = width;
    this._boardHeight = height;
    const gl = this._gl;
    gl.bindTexture(gl.TEXTURE_2D, this._canvasTex);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.R8UI,
      this._boardWidth,
      this._boardHeight,
      0,
      gl.RED_INTEGER,
      gl.UNSIGNED_BYTE,
      this._board
    );
    gl.bindTexture(gl.TEXTURE_2D, this._changesTex);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.R8UI,
      this._boardWidth,
      this._boardHeight,
      0,
      gl.RED_INTEGER,
      gl.UNSIGNED_BYTE,
      this._changes
    );
    gl.bindTexture(gl.TEXTURE_2D, this._socketPixelsTex);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.R8UI,
      this._boardWidth,
      this._boardHeight,
      0,
      gl.RED_INTEGER,
      gl.UNSIGNED_BYTE,
      this._socketPixels
    );
    const paletteArr = new Uint8Array(this._palette.buffer);
    gl.bindTexture(gl.TEXTURE_2D, this._paletteTex);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA8UI,
      palette2.length,
      1,
      0,
      gl.RGBA_INTEGER,
      gl.UNSIGNED_BYTE,
      paletteArr
    );
    this._pickTex = this._createPickTexture();
    this.queueRedraw();
  }
  /**
   * @param {number} index
   * @param {number} colour
   */
  redrawSocketPixel(index2, colour) {
    const gl = this._gl;
    const x2 = index2 % this._boardWidth;
    const y3 = Math.floor(index2 / this._boardWidth);
    gl.bindTexture(gl.TEXTURE_2D, this._socketPixelsTex);
    gl.texSubImage2D(
      gl.TEXTURE_2D,
      0,
      x2,
      y3,
      1,
      1,
      gl.RED_INTEGER,
      gl.UNSIGNED_BYTE,
      new Uint8Array([colour])
    );
    this.queueRedraw();
  }
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} zoom
   */
  setPosition(x2, y3, zoom) {
    this._x = x2;
    this._y = y3;
    this._zoom = zoom;
    this.queueRedraw();
  }
  _updatePickFrameBufferSize() {
    const gl = this._gl;
    gl.bindTexture(gl.TEXTURE_2D, this._pickFBOTex);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA8UI,
      this.canvas.width,
      this.canvas.height,
      0,
      gl.RGBA_INTEGER,
      gl.UNSIGNED_BYTE,
      null
    );
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._pickFBO);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      this._pickFBOTex,
      0
    );
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
  _createPickTexture() {
    const gl = this._gl;
    if (this._pickTex) {
      gl.deleteTexture(this._pickTex);
    }
    const pickTex = (this._pickTex = gl.createTexture());
    gl.bindTexture(gl.TEXTURE_2D, pickTex);
    const pickTexSize = this._boardWidth * this._boardHeight * 4;
    const pickTexData = new Uint8Array(pickTexSize);
    for (let i4 = 0; i4 < this._boardWidth * this._boardHeight; i4++) {
      const pixelIndex = i4 * 4;
      pickTexData[pixelIndex] = i4 & 255;
      pickTexData[pixelIndex + 1] = (i4 >> 8) & 255;
      pickTexData[pixelIndex + 2] = (i4 >> 16) & 255;
      pickTexData[pixelIndex + 3] = (i4 >> 24) & 255;
    }
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA8UI,
      this._boardWidth,
      this._boardHeight,
      0,
      gl.RGBA_INTEGER,
      gl.UNSIGNED_BYTE,
      pickTexData
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return pickTex;
  }
  /**
   * @param {number} screenX
   * @param {number} screenY
   * @returns
   */
  #screenToGameCoords(screenX, screenY) {
    this._updateMatrices();
    const ndcX = (2 * screenX) / this.canvas.width - 1;
    const ndcY = 1 - (2 * screenY) / this.canvas.height;
    const inverseMVP = create$1();
    invert(inverseMVP, this._mvpMatrix);
    const ndcPoint = fromValues(ndcX, ndcY, 0, 1);
    const gamePoint = create();
    transformMat4(gamePoint, ndcPoint, inverseMVP);
    return {
      x: gamePoint[0],
      y: gamePoint[1],
    };
  }
  /**
   * @param {number} clientX
   * @param {number} clientY
   * @returns {{ x: number, y: number }|null}
   */
  hitTest(clientX, clientY) {
    const gl = this._gl;
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = Math.floor(
      (clientX - rect.left) * (gl.drawingBufferWidth / rect.width)
    );
    const mouseY = Math.floor(
      (clientY - rect.top) * (gl.drawingBufferHeight / rect.height)
    );
    const { x: modelX, y: modelY } = this.#screenToGameCoords(mouseX, mouseY);
    return {
      x: ((modelX + 1) / 2) * this._boardWidth,
      y: ((2 - (modelY + 1)) / 2) * this._boardHeight,
    };
  }
  _draw() {
    const gl = this._gl;
    if (
      !this._board ||
      !this._palette ||
      this._boardWidth === 0 ||
      this._boardHeight === 0
    ) {
      return;
    }
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    this._updateMatrices();
    for (const layer of this._renderLayers) {
      this._renderLayer(layer);
    }
    const error = gl.getError();
    if (error !== gl.NO_ERROR) {
      console.error("WebGL Error:", error);
    }
  }
  queueRedraw() {
    if (this._redrawHandle) {
      cancelAnimationFrame(this._redrawHandle);
    }
    this._redrawHandle = requestAnimationFrame(() => {
      this._redrawHandle = null;
      this._draw();
    });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = globalThis,
  e$4 =
    t$2.ShadowRoot &&
    (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  s$2 = Symbol(),
  o$5 = /* @__PURE__ */ new WeakMap();
let n$3 = class n {
  constructor(t2, e2, o2) {
    if (((this._$cssResult$ = true), o2 !== s$2))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    (this.cssText = t2), (this.t = e2);
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$4 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = o$5.get(s2)),
        void 0 === t2 &&
          ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText),
          e2 && o$5.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$2 = (t2) => new n$3("string" == typeof t2 ? t2 : t2 + "", void 0, s$2),
  S$1 = (s2, o2) => {
    if (e$4)
      s2.adoptedStyleSheets = o2.map((t2) =>
        t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet
      );
    else
      for (const e2 of o2) {
        const o3 = document.createElement("style"),
          n3 = t$2.litNonce;
        void 0 !== n3 && o3.setAttribute("nonce", n3),
          (o3.textContent = e2.cssText),
          s2.appendChild(o3);
      }
  },
  c$2 = e$4
    ? (t2) => t2
    : (t2) =>
        t2 instanceof CSSStyleSheet
          ? ((t3) => {
              let e2 = "";
              for (const s2 of t3.cssRules) e2 += s2.cssText;
              return r$2(e2);
            })(t2)
          : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
    is: i$4,
    defineProperty: e$3,
    getOwnPropertyDescriptor: h$1,
    getOwnPropertyNames: r$1,
    getOwnPropertySymbols: o$4,
    getPrototypeOf: n$2,
  } = Object,
  a$1 = globalThis,
  c$1 = a$1.trustedTypes,
  l$1 = c$1 ? c$1.emptyScript : "",
  p$1 = a$1.reactiveElementPolyfillSupport,
  d$1 = (t2, s2) => t2,
  u$1 = {
    toAttribute(t2, s2) {
      switch (s2) {
        case Boolean:
          t2 = t2 ? l$1 : null;
          break;
        case Object:
        case Array:
          t2 = null == t2 ? t2 : JSON.stringify(t2);
      }
      return t2;
    },
    fromAttribute(t2, s2) {
      let i4 = t2;
      switch (s2) {
        case Boolean:
          i4 = null !== t2;
          break;
        case Number:
          i4 = null === t2 ? null : Number(t2);
          break;
        case Object:
        case Array:
          try {
            i4 = JSON.parse(t2);
          } catch (t3) {
            i4 = null;
          }
      }
      return i4;
    },
  },
  f$1 = (t2, s2) => !i$4(t2, s2),
  b = {
    attribute: true,
    type: String,
    converter: u$1,
    reflect: false,
    useDefault: false,
    hasChanged: f$1,
  };
(Symbol.metadata ??= Symbol("metadata")),
  (a$1.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap());
let y$2 = class y extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ??= []).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = b) {
    if (
      (s2.state && (s2.attribute = false),
      this._$Ei(),
      this.prototype.hasOwnProperty(t2) &&
        ((s2 = Object.create(s2)).wrapped = true),
      this.elementProperties.set(t2, s2),
      !s2.noAccessor)
    ) {
      const i4 = Symbol(),
        h2 = this.getPropertyDescriptor(t2, i4, s2);
      void 0 !== h2 && e$3(this.prototype, t2, h2);
    }
  }
  static getPropertyDescriptor(t2, s2, i4) {
    const { get: e2, set: r2 } = h$1(this.prototype, t2) ?? {
      get() {
        return this[s2];
      },
      set(t3) {
        this[s2] = t3;
      },
    };
    return {
      get: e2,
      set(s3) {
        const h2 = e2?.call(this);
        r2?.call(this, s3), this.requestUpdate(t2, h2, i4);
      },
      configurable: true,
      enumerable: true,
    };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? b;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t2 = n$2(this);
    t2.finalize(),
      void 0 !== t2.l && (this.l = [...t2.l]),
      (this.elementProperties = new Map(t2.elementProperties));
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (
      ((this.finalized = true),
      this._$Ei(),
      this.hasOwnProperty(d$1("properties")))
    ) {
      const t3 = this.properties,
        s2 = [...r$1(t3), ...o$4(t3)];
      for (const i4 of s2) this.createProperty(i4, t3[i4]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2)
        for (const [t3, i4] of s2) this.elementProperties.set(t3, i4);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i4 = this._$Eu(t3, s2);
      void 0 !== i4 && this._$Eh.set(i4, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i4 = [];
    if (Array.isArray(s2)) {
      const e2 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e2) i4.unshift(c$2(s3));
    } else void 0 !== s2 && i4.push(c$2(s2));
    return i4;
  }
  static _$Eu(t2, s2) {
    const i4 = s2.attribute;
    return false === i4
      ? void 0
      : "string" == typeof i4
      ? i4
      : "string" == typeof t2
      ? t2.toLowerCase()
      : void 0;
  }
  constructor() {
    super(),
      (this._$Ep = void 0),
      (this.isUpdatePending = false),
      (this.hasUpdated = false),
      (this._$Em = null),
      this._$Ev();
  }
  _$Ev() {
    (this._$ES = new Promise((t2) => (this.enableUpdating = t2))),
      (this._$AL = /* @__PURE__ */ new Map()),
      this._$E_(),
      this.requestUpdate(),
      this.constructor.l?.forEach((t2) => t2(this));
  }
  addController(t2) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t2),
      void 0 !== this.renderRoot && this.isConnected && t2.hostConnected?.();
  }
  removeController(t2) {
    this._$EO?.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(),
      s2 = this.constructor.elementProperties;
    for (const i4 of s2.keys())
      this.hasOwnProperty(i4) && (t2.set(i4, this[i4]), delete this[i4]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 =
      this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    (this.renderRoot ??= this.createRenderRoot()),
      this.enableUpdating(true),
      this._$EO?.forEach((t2) => t2.hostConnected?.());
  }
  enableUpdating(t2) {}
  disconnectedCallback() {
    this._$EO?.forEach((t2) => t2.hostDisconnected?.());
  }
  attributeChangedCallback(t2, s2, i4) {
    this._$AK(t2, i4);
  }
  _$ET(t2, s2) {
    const i4 = this.constructor.elementProperties.get(t2),
      e2 = this.constructor._$Eu(t2, i4);
    if (void 0 !== e2 && true === i4.reflect) {
      const h2 = (
        void 0 !== i4.converter?.toAttribute ? i4.converter : u$1
      ).toAttribute(s2, i4.type);
      (this._$Em = t2),
        null == h2 ? this.removeAttribute(e2) : this.setAttribute(e2, h2),
        (this._$Em = null);
    }
  }
  _$AK(t2, s2) {
    const i4 = this.constructor,
      e2 = i4._$Eh.get(t2);
    if (void 0 !== e2 && this._$Em !== e2) {
      const t3 = i4.getPropertyOptions(e2),
        h2 =
          "function" == typeof t3.converter
            ? { fromAttribute: t3.converter }
            : void 0 !== t3.converter?.fromAttribute
            ? t3.converter
            : u$1;
      this._$Em = e2;
      const r2 = h2.fromAttribute(s2, t3.type);
      (this[e2] = r2 ?? this._$Ej?.get(e2) ?? r2), (this._$Em = null);
    }
  }
  requestUpdate(t2, s2, i4) {
    if (void 0 !== t2) {
      const e2 = this.constructor,
        h2 = this[t2];
      if (
        ((i4 ??= e2.getPropertyOptions(t2)),
        !(
          (i4.hasChanged ?? f$1)(h2, s2) ||
          (i4.useDefault &&
            i4.reflect &&
            h2 === this._$Ej?.get(t2) &&
            !this.hasAttribute(e2._$Eu(t2, i4)))
        ))
      )
        return;
      this.C(t2, s2, i4);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t2, s2, { useDefault: i4, reflect: e2, wrapped: h2 }, r2) {
    (i4 &&
      !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t2) &&
      (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]),
      true !== h2 || void 0 !== r2)) ||
      (this._$AL.has(t2) ||
        (this.hasUpdated || i4 || (s2 = void 0), this._$AL.set(t2, s2)),
      true === e2 &&
        this._$Em !== t2 &&
        (this._$Eq ??= /* @__PURE__ */ new Set()).add(t2));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && (await t2), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (((this.renderRoot ??= this.createRenderRoot()), this._$Ep)) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0)
        for (const [s3, i4] of t3) {
          const { wrapped: t4 } = i4,
            e2 = this[s3];
          true !== t4 ||
            this._$AL.has(s3) ||
            void 0 === e2 ||
            this.C(s3, void 0, i4, e2);
        }
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      (t2 = this.shouldUpdate(s2)),
        t2
          ? (this.willUpdate(s2),
            this._$EO?.forEach((t3) => t3.hostUpdate?.()),
            this.update(s2))
          : this._$EM();
    } catch (s3) {
      throw ((t2 = false), this._$EM(), s3);
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {}
  _$AE(t2) {
    this._$EO?.forEach((t3) => t3.hostUpdated?.()),
      this.hasUpdated || ((this.hasUpdated = true), this.firstUpdated(t2)),
      this.updated(t2);
  }
  _$EM() {
    (this._$AL = /* @__PURE__ */ new Map()), (this.isUpdatePending = false);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    (this._$Eq &&= this._$Eq.forEach((t3) => this._$ET(t3, this[t3]))),
      this._$EM();
  }
  updated(t2) {}
  firstUpdated(t2) {}
};
(y$2.elementStyles = []),
  (y$2.shadowRootOptions = { mode: "open" }),
  (y$2[d$1("elementProperties")] = /* @__PURE__ */ new Map()),
  (y$2[d$1("finalized")] = /* @__PURE__ */ new Map()),
  p$1?.({ ReactiveElement: y$2 }),
  (a$1.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = globalThis,
  i$3 = t$1.trustedTypes,
  s$1 = i$3 ? i$3.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0,
  e$2 = "$lit$",
  h = `lit$${Math.random().toFixed(9).slice(2)}$`,
  o$3 = "?" + h,
  n$1 = `<${o$3}>`,
  r = document,
  l = () => r.createComment(""),
  c = (t2) => null === t2 || ("object" != typeof t2 && "function" != typeof t2),
  a = Array.isArray,
  u = (t2) => a(t2) || "function" == typeof t2?.[Symbol.iterator],
  d = "[ 	\n\f\r]",
  f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  v = /-->/g,
  _ = />/g,
  m = RegExp(
    `>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
    "g"
  ),
  p = /'/g,
  g = /"/g,
  $ = /^(?:script|style|textarea|title)$/i,
  y$1 =
    (t2) =>
    (i4, ...s2) => ({ _$litType$: t2, strings: i4, values: s2 }),
  x$1 = y$1(1),
  T = Symbol.for("lit-noChange"),
  E = Symbol.for("lit-nothing"),
  A = /* @__PURE__ */ new WeakMap(),
  C = r.createTreeWalker(r, 129);
function P(t2, i4) {
  if (!a(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== s$1 ? s$1.createHTML(i4) : i4;
}
const V = (t2, i4) => {
  const s2 = t2.length - 1,
    o2 = [];
  let r2,
    l2 = 2 === i4 ? "<svg>" : 3 === i4 ? "<math>" : "",
    c2 = f;
  for (let i5 = 0; i5 < s2; i5++) {
    const s3 = t2[i5];
    let a2,
      u2,
      d2 = -1,
      y3 = 0;
    for (
      ;
      y3 < s3.length && ((c2.lastIndex = y3), (u2 = c2.exec(s3)), null !== u2);

    )
      (y3 = c2.lastIndex),
        c2 === f
          ? "!--" === u2[1]
            ? (c2 = v)
            : void 0 !== u2[1]
            ? (c2 = _)
            : void 0 !== u2[2]
            ? ($.test(u2[2]) && (r2 = RegExp("</" + u2[2], "g")), (c2 = m))
            : void 0 !== u2[3] && (c2 = m)
          : c2 === m
          ? ">" === u2[0]
            ? ((c2 = r2 ?? f), (d2 = -1))
            : void 0 === u2[1]
            ? (d2 = -2)
            : ((d2 = c2.lastIndex - u2[2].length),
              (a2 = u2[1]),
              (c2 = void 0 === u2[3] ? m : '"' === u2[3] ? g : p))
          : c2 === g || c2 === p
          ? (c2 = m)
          : c2 === v || c2 === _
          ? (c2 = f)
          : ((c2 = m), (r2 = void 0));
    const x2 = c2 === m && t2[i5 + 1].startsWith("/>") ? " " : "";
    l2 +=
      c2 === f
        ? s3 + n$1
        : d2 >= 0
        ? (o2.push(a2), s3.slice(0, d2) + e$2 + s3.slice(d2) + h + x2)
        : s3 + h + (-2 === d2 ? i5 : x2);
  }
  return [
    P(
      t2,
      l2 + (t2[s2] || "<?>") + (2 === i4 ? "</svg>" : 3 === i4 ? "</math>" : "")
    ),
    o2,
  ];
};
class N {
  constructor({ strings: t2, _$litType$: s2 }, n3) {
    let r2;
    this.parts = [];
    let c2 = 0,
      a2 = 0;
    const u2 = t2.length - 1,
      d2 = this.parts,
      [f2, v2] = V(t2, s2);
    if (
      ((this.el = N.createElement(f2, n3)),
      (C.currentNode = this.el.content),
      2 === s2 || 3 === s2)
    ) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = C.nextNode()) && d2.length < u2; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes())
          for (const t3 of r2.getAttributeNames())
            if (t3.endsWith(e$2)) {
              const i4 = v2[a2++],
                s3 = r2.getAttribute(t3).split(h),
                e2 = /([.?@])?(.*)/.exec(i4);
              d2.push({
                type: 1,
                index: c2,
                name: e2[2],
                strings: s3,
                ctor:
                  "." === e2[1] ? H : "?" === e2[1] ? I : "@" === e2[1] ? L : k,
              }),
                r2.removeAttribute(t3);
            } else
              t3.startsWith(h) &&
                (d2.push({ type: 6, index: c2 }), r2.removeAttribute(t3));
        if ($.test(r2.tagName)) {
          const t3 = r2.textContent.split(h),
            s3 = t3.length - 1;
          if (s3 > 0) {
            r2.textContent = i$3 ? i$3.emptyScript : "";
            for (let i4 = 0; i4 < s3; i4++)
              r2.append(t3[i4], l()),
                C.nextNode(),
                d2.push({ type: 2, index: ++c2 });
            r2.append(t3[s3], l());
          }
        }
      } else if (8 === r2.nodeType)
        if (r2.data === o$3) d2.push({ type: 2, index: c2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = r2.data.indexOf(h, t3 + 1)); )
            d2.push({ type: 7, index: c2 }), (t3 += h.length - 1);
        }
      c2++;
    }
  }
  static createElement(t2, i4) {
    const s2 = r.createElement("template");
    return (s2.innerHTML = t2), s2;
  }
}
function S(t2, i4, s2 = t2, e2) {
  if (i4 === T) return i4;
  let h2 = void 0 !== e2 ? s2._$Co?.[e2] : s2._$Cl;
  const o2 = c(i4) ? void 0 : i4._$litDirective$;
  return (
    h2?.constructor !== o2 &&
      (h2?._$AO?.(false),
      void 0 === o2 ? (h2 = void 0) : ((h2 = new o2(t2)), h2._$AT(t2, s2, e2)),
      void 0 !== e2 ? ((s2._$Co ??= [])[e2] = h2) : (s2._$Cl = h2)),
    void 0 !== h2 && (i4 = S(t2, h2._$AS(t2, i4.values), h2, e2)),
    i4
  );
}
let M$2 = class M {
  constructor(t2, i4) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = t2), (this._$AM = i4);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const {
        el: { content: i4 },
        parts: s2,
      } = this._$AD,
      e2 = (t2?.creationScope ?? r).importNode(i4, true);
    C.currentNode = e2;
    let h2 = C.nextNode(),
      o2 = 0,
      n3 = 0,
      l2 = s2[0];
    for (; void 0 !== l2; ) {
      if (o2 === l2.index) {
        let i5;
        2 === l2.type
          ? (i5 = new R(h2, h2.nextSibling, this, t2))
          : 1 === l2.type
          ? (i5 = new l2.ctor(h2, l2.name, l2.strings, this, t2))
          : 6 === l2.type && (i5 = new z$1(h2, this, t2)),
          this._$AV.push(i5),
          (l2 = s2[++n3]);
      }
      o2 !== l2?.index && ((h2 = C.nextNode()), o2++);
    }
    return (C.currentNode = r), e2;
  }
  p(t2) {
    let i4 = 0;
    for (const s2 of this._$AV)
      void 0 !== s2 &&
        (void 0 !== s2.strings
          ? (s2._$AI(t2, s2, i4), (i4 += s2.strings.length - 2))
          : s2._$AI(t2[i4])),
        i4++;
  }
};
class R {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t2, i4, s2, e2) {
    (this.type = 2),
      (this._$AH = E),
      (this._$AN = void 0),
      (this._$AA = t2),
      (this._$AB = i4),
      (this._$AM = s2),
      (this.options = e2),
      (this._$Cv = e2?.isConnected ?? true);
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i4 = this._$AM;
    return void 0 !== i4 && 11 === t2?.nodeType && (t2 = i4.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i4 = this) {
    (t2 = S(this, t2, i4)),
      c(t2)
        ? t2 === E || null == t2 || "" === t2
          ? (this._$AH !== E && this._$AR(), (this._$AH = E))
          : t2 !== this._$AH && t2 !== T && this._(t2)
        : void 0 !== t2._$litType$
        ? this.$(t2)
        : void 0 !== t2.nodeType
        ? this.T(t2)
        : u(t2)
        ? this.k(t2)
        : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), (this._$AH = this.O(t2)));
  }
  _(t2) {
    this._$AH !== E && c(this._$AH)
      ? (this._$AA.nextSibling.data = t2)
      : this.T(r.createTextNode(t2)),
      (this._$AH = t2);
  }
  $(t2) {
    const { values: i4, _$litType$: s2 } = t2,
      e2 =
        "number" == typeof s2
          ? this._$AC(t2)
          : (void 0 === s2.el &&
              (s2.el = N.createElement(P(s2.h, s2.h[0]), this.options)),
            s2);
    if (this._$AH?._$AD === e2) this._$AH.p(i4);
    else {
      const t3 = new M$2(e2, this),
        s3 = t3.u(this.options);
      t3.p(i4), this.T(s3), (this._$AH = t3);
    }
  }
  _$AC(t2) {
    let i4 = A.get(t2.strings);
    return void 0 === i4 && A.set(t2.strings, (i4 = new N(t2))), i4;
  }
  k(t2) {
    a(this._$AH) || ((this._$AH = []), this._$AR());
    const i4 = this._$AH;
    let s2,
      e2 = 0;
    for (const h2 of t2)
      e2 === i4.length
        ? i4.push((s2 = new R(this.O(l()), this.O(l()), this, this.options)))
        : (s2 = i4[e2]),
        s2._$AI(h2),
        e2++;
    e2 < i4.length &&
      (this._$AR(s2 && s2._$AB.nextSibling, e2), (i4.length = e2));
  }
  _$AR(t2 = this._$AA.nextSibling, i4) {
    for (this._$AP?.(false, true, i4); t2 !== this._$AB; ) {
      const i5 = t2.nextSibling;
      t2.remove(), (t2 = i5);
    }
  }
  setConnected(t2) {
    void 0 === this._$AM && ((this._$Cv = t2), this._$AP?.(t2));
  }
}
class k {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i4, s2, e2, h2) {
    (this.type = 1),
      (this._$AH = E),
      (this._$AN = void 0),
      (this.element = t2),
      (this.name = i4),
      (this._$AM = e2),
      (this.options = h2),
      s2.length > 2 || "" !== s2[0] || "" !== s2[1]
        ? ((this._$AH = Array(s2.length - 1).fill(new String())),
          (this.strings = s2))
        : (this._$AH = E);
  }
  _$AI(t2, i4 = this, s2, e2) {
    const h2 = this.strings;
    let o2 = false;
    if (void 0 === h2)
      (t2 = S(this, t2, i4, 0)),
        (o2 = !c(t2) || (t2 !== this._$AH && t2 !== T)),
        o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n3, r2;
      for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++)
        (r2 = S(this, e3[s2 + n3], i4, n3)),
          r2 === T && (r2 = this._$AH[n3]),
          (o2 ||= !c(r2) || r2 !== this._$AH[n3]),
          r2 === E ? (t2 = E) : t2 !== E && (t2 += (r2 ?? "") + h2[n3 + 1]),
          (this._$AH[n3] = r2);
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === E
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t2 ?? "");
  }
}
class H extends k {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t2) {
    this.element[this.name] = t2 === E ? void 0 : t2;
  }
}
class I extends k {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== E);
  }
}
class L extends k {
  constructor(t2, i4, s2, e2, h2) {
    super(t2, i4, s2, e2, h2), (this.type = 5);
  }
  _$AI(t2, i4 = this) {
    if ((t2 = S(this, t2, i4, 0) ?? E) === T) return;
    const s2 = this._$AH,
      e2 =
        (t2 === E && s2 !== E) ||
        t2.capture !== s2.capture ||
        t2.once !== s2.once ||
        t2.passive !== s2.passive,
      h2 = t2 !== E && (s2 === E || e2);
    e2 && this.element.removeEventListener(this.name, this, s2),
      h2 && this.element.addEventListener(this.name, this, t2),
      (this._$AH = t2);
  }
  handleEvent(t2) {
    "function" == typeof this._$AH
      ? this._$AH.call(this.options?.host ?? this.element, t2)
      : this._$AH.handleEvent(t2);
  }
}
let z$1 = class z {
  constructor(t2, i4, s2) {
    (this.element = t2),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = i4),
      (this.options = s2);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    S(this, t2);
  }
};
const j = t$1.litHtmlPolyfillSupport;
j?.(N, R), (t$1.litHtmlVersions ??= []).push("3.3.1");
const B = (t2, i4, s2) => {
  const e2 = s2?.renderBefore ?? i4;
  let h2 = e2._$litPart$;
  if (void 0 === h2) {
    const t3 = s2?.renderBefore ?? null;
    e2._$litPart$ = h2 = new R(i4.insertBefore(l(), t3), t3, void 0, s2 ?? {});
  }
  return h2._$AI(t2), h2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = globalThis;
let i$2 = class i extends y$2 {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    const t2 = super.createRenderRoot();
    return (this.renderOptions.renderBefore ??= t2.firstChild), t2;
  }
  update(t2) {
    const r2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t2),
      (this._$Do = B(r2, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return T;
  }
};
(i$2._$litElement$ = true),
  (i$2["finalized"] = true),
  s.litElementHydrateSupport?.({ LitElement: i$2 });
const o$2 = s.litElementPolyfillSupport;
o$2?.({ LitElement: i$2 });
(s.litElementVersions ??= []).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = { ATTRIBUTE: 1, CHILD: 2 },
  e$1 =
    (t2) =>
    (...e2) => ({ _$litDirective$: t2, values: e2 });
let i$1 = class i2 {
  constructor(t2) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i4) {
    (this._$Ct = t2), (this._$AM = e2), (this._$Ci = i4);
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class e extends i$1 {
  constructor(i4) {
    if ((super(i4), (this.it = E), i4.type !== t.CHILD))
      throw Error(
        this.constructor.directiveName + "() can only be used in child bindings"
      );
  }
  render(r2) {
    if (r2 === E || null == r2) return (this._t = void 0), (this.it = r2);
    if (r2 === T) return r2;
    if ("string" != typeof r2)
      throw Error(
        this.constructor.directiveName + "() called with a non-string value"
      );
    if (r2 === this.it) return this._t;
    this.it = r2;
    const s2 = [r2];
    return (
      (s2.raw = s2),
      (this._t = {
        _$litType$: this.constructor.resultType,
        strings: s2,
        values: [],
      })
    );
  }
}
(e.directiveName = "unsafeHTML"), (e.resultType = 1);
const o$1 = e$1(e);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n2 = "important",
  i3 = " !" + n2,
  o = e$1(
    class extends i$1 {
      constructor(t$12) {
        if (
          (super(t$12),
          t$12.type !== t.ATTRIBUTE ||
            "style" !== t$12.name ||
            t$12.strings?.length > 2)
        )
          throw Error(
            "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute."
          );
      }
      render(t2) {
        return Object.keys(t2).reduce((e2, r2) => {
          const s2 = t2[r2];
          return null == s2
            ? e2
            : e2 +
                `${(r2 = r2.includes("-")
                  ? r2
                  : r2
                      .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&")
                      .toLowerCase())}:${s2};`;
        }, "");
      }
      update(e2, [r2]) {
        const { style: s2 } = e2.element;
        if (void 0 === this.ft)
          return (this.ft = new Set(Object.keys(r2))), this.render(r2);
        for (const t2 of this.ft)
          null == r2[t2] &&
            (this.ft.delete(t2),
            t2.includes("-") ? s2.removeProperty(t2) : (s2[t2] = null));
        for (const t2 in r2) {
          const e3 = r2[t2];
          if (null != e3) {
            this.ft.add(t2);
            const r3 = "string" == typeof e3 && e3.endsWith(i3);
            t2.includes("-") || r3
              ? s2.setProperty(t2, r3 ? e3.slice(0, -11) : e3, r3 ? n2 : "")
              : (s2[t2] = e3);
          }
        }
        return T;
      }
    }
  );
const scriptRel = "modulepreload";
const assetsURL = function (dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function (promises$2) {
      return Promise.all(
        promises$2.map((p$12) =>
          Promise.resolve(p$12).then(
            (value$1) => ({
              status: "fulfilled",
              value: value$1,
            }),
            (reason) => ({
              status: "rejected",
              reason,
            })
          )
        )
      );
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
        const link2 = document.createElement("link");
        link2.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) link2.as = "script";
        link2.crossOrigin = "";
        link2.href = dep;
        if (cspNonce) link2.setAttribute("nonce", cspNonce);
        document.head.appendChild(link2);
        if (isCss)
          return new Promise((res2, rej) => {
            link2.addEventListener("load", res2);
            link2.addEventListener("error", () =>
              rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`))
            );
          });
      })
    );
  }
  function handlePreloadError(err$2) {
    const e$12 = new Event("vite:preloadError", { cancelable: true });
    e$12.payload = err$2;
    window.dispatchEvent(e$12);
    if (!e$12.defaultPrevented) throw err$2;
  }
  return promise.then((res2) => {
    for (const item of res2 || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
class PublicPromise extends Promise {
  /**@type {(value: any) => void}*/
  #resolve = () => {
    throw new Error(
      "PublicPromise resolve invoked before constructor initialisation"
    );
  };
  /**@type {(value: any) => void}*/
  #reject = (_2) => {
    throw new Error(
      "PublicPromise reject invoked before constructor initialisation"
    );
  };
  /**
   * @param {((resolve: any, reject: any) => void)|null} executor
   */
  constructor(executor = null) {
    let capturedResolve = () => {
      throw new Error(
        "Captured resolve invoked before superclass initialisation"
      );
    };
    let capturedReject = (_2) => {
      throw new Error(
        "Captured reject invoked before superclass initialisation"
      );
    };
    super((resolve, reject) => {
      capturedResolve = resolve;
      capturedReject = reject;
      if (executor) {
        executor(resolve, reject);
      }
    });
    this.#resolve = capturedResolve;
    this.#reject = capturedReject;
  }
  /**
   * @param {any} value
   */
  resolve(value) {
    this.#resolve(value);
  }
  /**
   * @param {any} reason
   */
  reject(reason) {
    this.#reject(reason);
  }
  static deferred() {
    return new PublicPromise();
  }
}
let ipcReqId = 0;
const ipcReqs = /* @__PURE__ */ new Map();
function resolvePostTarget(target) {
  if (
    target &&
    typeof HTMLIFrameElement !== "undefined" &&
    target instanceof HTMLIFrameElement
  ) {
    return (
      /**@type {Window}*/
      target.contentWindow
    );
  }
  return (
    /**@type {Window | Worker}*/
    target
  );
}
function getWindowNameSafe() {
  try {
    return typeof window !== "undefined" && typeof window.name === "string"
      ? window.name
      : "worker";
  } catch {
    return "worker";
  }
}
function isWindowDefined() {
  return typeof Window !== "undefined" && typeof window !== "undefined";
}
function isWindowLike(target) {
  return isWindowDefined() && target instanceof Window;
}
function isNode() {
  return (
    typeof process !== "undefined" &&
    !!process.versions &&
    !!process.versions.node
  );
}
function isIpcMessage(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  const expectedProps = ["call", "data", "handle", "source"];
  const actualProps = Object.keys(obj);
  for (const prop of expectedProps) {
    if (!(prop in obj)) {
      return false;
    }
  }
  for (const prop of actualProps) {
    if (!expectedProps.includes(prop)) {
      return false;
    }
  }
  return true;
}
function isValidIpcMessage(obj) {
  if (!isIpcMessage(obj)) {
    return false;
  }
  if (typeof obj.call !== "string" || obj.call.length === 0) {
    return false;
  }
  if (obj.handle !== void 0) {
    if (
      typeof obj.handle !== "number" ||
      isNaN(obj.handle) ||
      !isFinite(obj.handle)
    ) {
      return false;
    }
  }
  if (typeof obj.source !== "string") {
    return false;
  }
  return true;
}
function isIpcResult(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  const expectedProps = ["data", "handle", "source", "error"];
  const actualProps = Object.keys(obj);
  for (const prop of expectedProps) {
    if (!(prop in obj)) {
      return false;
    }
  }
  for (const prop of actualProps) {
    if (!expectedProps.includes(prop)) {
      return false;
    }
  }
  return true;
}
function isValidIpcResult(obj) {
  if (!isIpcResult(obj)) {
    return false;
  }
  if (obj.data === void 0 && obj.error === void 0) {
    return false;
  }
  if (obj.data !== void 0 && obj.error !== void 0) {
    return false;
  }
  if (
    typeof obj.handle !== "number" ||
    isNaN(obj.handle) ||
    !isFinite(obj.handle)
  ) {
    return false;
  }
  if (typeof obj.source !== "string" || obj.source.length === 0) {
    return false;
  }
  return true;
}
async function postIpcResponse(target = null, response) {
  if (!isValidIpcResult(response)) {
    throw new Error("Invalid IPC result structure");
  }
  if (target) {
    target.postMessage(response);
  } else {
    if (isNode()) {
      try {
        const { parentPort } = await __vitePreload(
          async () => {
            const { parentPort: parentPort2 } = await Promise.resolve().then(
              () => __viteBrowserExternal
            );
            return { parentPort: parentPort2 };
          },
          true ? void 0 : void 0
        );
        if (parentPort) {
          parentPort.postMessage(response);
        } else {
          throw new Error(
            "Invalid postIpcResponse target: No valid method found"
          );
        }
        return;
      } catch {}
    }
    if (typeof postMessage === "function") {
      postMessage(response);
    } else {
      throw new Error("Invalid postIpcResponse target: No valid method found");
    }
  }
}
function postIpcMessage(target, msg) {
  if (!isValidIpcMessage(msg)) {
    throw new Error("Invalid IPC message structure");
  }
  if (target && isWindowLike(target)) {
    target.postMessage(msg, { targetOrigin: location.origin });
  } else if (target && typeof target.postMessage === "function") {
    target.postMessage(msg);
  } else if (typeof postMessage === "function") {
    postMessage(msg);
  } else {
    throw new Error("Invalid postIpcMessage target: No valid method found");
  }
}
async function makeIpcRequest(target, call, data = void 0) {
  const handle = ipcReqId++;
  const promise = PublicPromise.deferred();
  const postCall = { call, data, handle, source: getWindowNameSafe() };
  ipcReqs.set(handle, promise);
  const postTarget = resolvePostTarget(target);
  if (!postTarget) {
    throw new Error("Invalid postMessage target");
  }
  postIpcMessage(postTarget, postCall);
  return await promise;
}
function sendIpcMessage(target, call, data = void 0) {
  const postTarget = resolvePostTarget(target);
  if (!postTarget) {
    throw new Error("Invalid postMessage target");
  }
  const msg = { call, data, handle: void 0, source: getWindowNameSafe() };
  postIpcMessage(postTarget, msg);
}
const ipcHandlers = /* @__PURE__ */ new Map();
function addIpcMessageHandler(name, handler) {
  ipcHandlers.set(name, handler);
}
async function handleIpcMessage(data, source = null) {
  if (!data) {
    throw new Error("Received IPC data was null or undefined");
  }
  let message = null;
  if (typeof MessageEvent !== "undefined" && data instanceof MessageEvent) {
    if (!data.isTrusted) {
      throw new Error(
        "Received IPC data was not a trusted instance of type MessageEvent"
      );
    }
    message = data.data;
    source = data.source;
  } else if (isIpcMessage(data)) {
    message = data;
  } else if (isIpcResult(data)) {
    message = data;
  } else {
    throw new Error(
      "Received IPC data was not a valid instance of type MessageEvent or IpcMessage"
    );
  }
  if (!message) {
    throw new Error("Received IPC message was null or undefined");
  }
  if (isIpcMessage(message)) {
    let result = void 0;
    try {
      const callName = message.call;
      if (ipcHandlers.has(callName)) {
        const reqHandler =
          /** @type {Function} */
          ipcHandlers.get(callName);
        result = await reqHandler(message.data);
      } else {
        let globalContext;
        if (isWindowDefined()) {
          globalContext = /**@type {any}*/ window;
        } else if (typeof globalThis !== "undefined") {
          globalContext = /**@type {any}*/ globalThis;
        } else if (typeof self !== "undefined") {
          globalContext = /**@type {any}*/ self;
        } else {
          throw new Error("Could not access global context to call IPC method");
        }
        if (typeof globalContext[callName] === "function") {
          result = await globalContext[callName](message.data);
        }
      }
      if (message.handle !== void 0 && message.handle !== null) {
        const resultMessage = {
          handle: message.handle,
          data: result,
          source: getWindowNameSafe(),
          error: void 0,
        };
        await postIpcResponse(source, resultMessage);
      }
    } catch (error) {
      console.error(`Error executing IPC call '${message.call}':`, error);
      if (message.handle !== void 0 && message.handle !== null) {
        const errorMessage = {
          handle: message.handle,
          error: error instanceof Error ? error.message : String(error),
          source: getWindowNameSafe(),
          data: void 0,
        };
        await postIpcResponse(source, errorMessage);
      }
    }
  } else if (isIpcResult(message)) {
    const request = ipcReqs.get(message.handle);
    if (request) {
      if (message.error) {
        request.reject(message.error);
      } else {
        request.resolve(message.data);
      }
      ipcReqs.delete(message.handle);
    }
  }
}
async function openAccountFrame(page = null, unauthed = null) {
  const accountFrame = await createTopLevelFrame(
    "/account.html",
    "accountFrame"
  );
  const loginPanel =
    /**@type {HTMLElement}*/
    accountFrame.contentDocument?.querySelector("#loginPanel");
  const unauthedPage =
    /**@type {HTMLElement}*/
    accountFrame.contentDocument?.querySelector("#unauthedPage");
  if (loginPanel && page) {
    loginPanel.dataset.page = page;
  }
  if (unauthedPage && unauthed) {
    unauthedPage.dataset.page = unauthed;
  }
}
function closeAccountFrame() {
  return removeTopLevelFrame("accountFrame");
}
function dispatchAccountEvent(eventName, detail = {}) {
  const event = new CustomEvent(eventName, {
    detail,
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(event);
}
addIpcMessageHandler("closeAccountFrame", closeAccountFrame);
addIpcMessageHandler("dispatchAccountEvent", dispatchAccountEvent);
class Spoiler extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", () => {
      this.show();
    });
  }
  show() {
    this.removeAttribute("hidden");
  }
  static get observedAttributes() {
    return ["hidden"];
  }
}
customElements.define("r-spoiler", Spoiler);
class Gif extends i$2 {
  static get properties() {
    return {
      source: { type: String },
      key: { type: String },
      gifData: { type: Object },
      isLoading: { type: Boolean },
    };
  }
  constructor() {
    super();
    this.source = "";
    this.key = "";
    this.gifData = null;
    this.isLoading = true;
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    this.fetchGifData();
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("source") || changedProperties.has("key")) {
      this.fetchGifData();
    }
  }
  async fetchGifData() {
    this.isLoading = true;
    const httpServerUrl2 = (localStorage.server || DEFAULT_SERVER)
      .replace("wss://", "https://")
      .replace("ws://", "http://");
    const url2 = `${httpServerUrl2}/gifs/${this.key}?source='${this.source}'`;
    try {
      const response = await fetch(url2);
      const gifResult = await response.json();
      this.gifData = gifResult;
    } catch (error) {
      console.error("Error fetching gif data:", error);
    } finally {
      this.isLoading = false;
    }
  }
  render() {
    return x$1`
			${
        this.isLoading
          ? x$1`<div>(Loading GIF...)</div>`
          : this.gifData
          ? this.createGifTag(this.gifData)
          : x$1`<div>(Error loading GIF)</div>`
      }`;
  }
  createGifTag(gif) {
    return x$1`
			<video style="aspect-ratio: ${gif.width}/${
      gif.height
    }" autoplay loop muted playsinline alt="${gif.description}">
				<source src="${gif.source}" type="video/webm">
				${
          gif.sourceFallback
            ? x$1`<source src="${gif.sourceFallback}" type="video/mp4"/>`
            : ""
        }
			</video>`;
  }
}
customElements.define("r-gif", Gif);
class ClipboardCopy extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ["href"];
  }
  async connectedCallback() {
    const clipbardSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    clipbardSvg.setAttribute("viewBox", "0 0 48 48");
    clipbardSvg.setAttribute("width", "30");
    clipbardSvg.setAttribute("height", "30");
    clipbardSvg.setAttribute("opacity", "0.6");
    clipbardSvg.innerHTML =
      '<path d="M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h22v-28H15v28Zm0 0v-28 28Z"/>';
    this.appendChild(clipbardSvg);
    const copyStatusSpan = document.createElement("span");
    copyStatusSpan.className = "copy-status";
    copyStatusSpan.style.opacity = "0";
    copyStatusSpan.style.position = "absolute";
    copyStatusSpan.textContent = await translate$1("copiedToClipboard");
    this.appendChild(copyStatusSpan);
    this.addEventListener("click", (event) => {
      const source = this.getAttribute("href");
      if (!source) {
        return;
      }
      event.stopPropagation();
      navigator.clipboard.writeText(source);
      copyStatusSpan.animate([{ opacity: 1 }, { scale: 1.1 }], {
        duration: 1e3,
        iterations: 1,
      });
    });
  }
}
customElements.define("r-clipboard-copy", ClipboardCopy);
class CloseIcon extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="active">
				<path d="M18.442 2.442l-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116 10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558z" class=""></path>
			</svg>`;
    this.tabIndex = 0;
    this.addEventListener("keydown", function (event) {
      if (event.key == "Enter" || event.key == " ") {
        this.click();
      }
    });
  }
}
customElements.define("r-close-icon", CloseIcon);
class EmojiPanel extends i$2 {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    this.classList.add("context-menu");
    this.classList.add("context-panel");
  }
  /**
   * @param {Map<any, any>} changedProperties
   */
  willUpdate(changedProperties) {
    if (changedProperties.has("class")) {
      this.classList.add("context-menu");
      this.classList.add("context-panel");
    }
  }
  createRenderRoot() {
    return this;
  }
  render() {
    const values = [];
    return x$1`
			<header class="emojis-header">
				<h3>Select an emoji:</h3>
				<r-close-icon @click=${this.#notifyClose}></r-close-icon>
			</header>
			<div class="emojis-body">
				<ul class="emojis-container">
					${EMOJIS.entries().map(([emojiKey, value]) => {
            let entry = null;
            if (!values.includes(value)) {
              entry = x$1`<li title=${emojiKey}>
										<button type="button" @click=${() =>
                      this.#notifySelection(emojiKey, value)}>${value}</button>
									</li>`;
            }
            values.push(value);
            return entry;
          })}
				</ul>
				<hr>
				<h4>Custom emojis:</h4>
				<ul class="emojis-container">
					${CUSTOM_EMOJIS.entries().map(
            ([emojiKey, value]) => x$1`<li title=${emojiKey}>
								<button type="button" @click=${() =>
                  this.#notifySelection(emojiKey, value)}>${o$1(value)}</button>
							</li>`
          )}
				</ul>
			</div>`;
  }
  #notifyClose() {
    const event = new CustomEvent("close", {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
  #notifySelection(key, value) {
    const event = new CustomEvent("emojiselection", {
      detail: { key, value },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}
customElements.define("r-emoji-panel", EmojiPanel);
class GifPanel extends i$2 {
  static properties = {
    searchTerm: { type: String, attribute: false },
    gifs: { type: Array, attribute: false },
    isLoading: { type: Boolean, attribute: false },
    error: { type: String, attribute: false },
    limit: { state: true },
    next: { state: true },
  };
  static DEFAULT_SEARCH_TERM = "excited";
  #columnCount;
  constructor() {
    super();
    this.searchTerm = GifPanel.DEFAULT_SEARCH_TERM;
    this.gifs = [];
    this.isLoading = false;
    this.error = null;
    this.next = null;
    this.limit = 16;
    this.#columnCount = 1;
    this.classList.add("context-menu", "context-panel");
  }
  connectedCallback() {
    super.connectedCallback();
    const resizeObserver = new ResizeObserver(() => {
      const columnCount = this.#columnCount;
      const newColumnCount = this.#calculateColumns();
      if (columnCount != newColumnCount) {
        this.requestUpdate();
      }
    });
    resizeObserver.observe(this);
    this.addEventListener("scroll", this.#onScroll);
  }
  #onScroll() {
    const scrollPosition = this.scrollTop + this.clientHeight;
    const bottomThreshold = this.scrollHeight - 64;
    if (scrollPosition >= bottomThreshold && !this.isLoading) {
      this.fetchGifs();
    }
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("class")) {
      this.classList.add("context-menu", "context-panel");
    }
  }
  async fetchGifs({
    search: searchTerm = this.searchTerm,
    next = this.next,
    limit = this.limit,
  } = {}) {
    this.isLoading = true;
    this.error = null;
    try {
      const params2 = new URLSearchParams();
      params2.set("q", encodeURIComponent(searchTerm));
      params2.set("limit", String(limit));
      if (next) {
        params2.set("pos", next);
      }
      const httpServerUrl2 = (localStorage.server || DEFAULT_SERVER)
        .replace("wss://", "https://")
        .replace("ws://", "http://");
      const url2 = `${httpServerUrl2}/gifs/search?${params2}`;
      const response = await fetch(url2);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const gifResponse = await response.json();
      this.gifs = this.gifs.concat(gifResponse.results);
      this.next = gifResponse.next;
      this.searchTerm = searchTerm;
    } catch (error) {
      console.error("GIF fetch failed:", error);
      this.error = "Failed to load GIFs. Please try again.";
    } finally {
      this.isLoading = false;
    }
  }
  #clearGifs() {
    this.gifs = [];
    this.next = null;
  }
  /**
   * @param {Event} e
   */
  #onSearchChange(e2) {
    this.#clearGifs();
    const input = e2.target;
    const searchValue = input ? input.value : GifPanel.DEFAULT_SEARCH_TERM;
    this.fetchGifs({ search: searchValue, limit: 8 });
  }
  createRenderRoot() {
    return this;
  }
  // Calculate number of columns based on container width
  #calculateColumns() {
    const containerWidth = this.offsetWidth;
    const columnWidth = 150;
    const numColumns = Math.max(Math.floor(containerWidth / columnWidth), 1);
    return numColumns;
  }
  // Split gifs into columns
  #splitGifsIntoColumns() {
    const numColumns = this.#calculateColumns();
    const columns =
      /**@type {GifData[][]}*/
      Array.from({ length: numColumns }, () => []);
    this.gifs.forEach((gif, index2) => {
      const columnIndex = Math.floor(
        index2 / Math.ceil(this.gifs.length / numColumns)
      );
      columns[columnIndex]?.push(gif);
    });
    return columns;
  }
  render() {
    const columns = this.#splitGifsIntoColumns();
    this.#columnCount = columns.length;
    return x$1`
			<header class="panel-header">
				<div style="display: flex; flex-direction: row; justify-content: space-between;">
					<h3>Select a GIF:</h3>
					<r-close-icon @click=${this.#notifyClose}></r-close-icon>
				</div>
				<input type="search" class="search-input" placeholder="Search Tenor GIFs"
					@change=${this.#onSearchChange} ?disabled=${this.isLoading}>
			</header>
			<div class="gif-grid">
				${columns.map(
          (column) => x$1`
					<ul class="gif-column">
						${column.map(
              (gif) => x$1`
							<li class="gif-item">
								<button type="button" @click=${() => this.#notifySelection(gif)}>
									<video class="gif-player" autoplay loop muted playsinline
										poster=${gif.preview} style="aspect-ratio: ${gif.width}/${gif.height}">
										<source src=${gif.source} type="video/webm">
										${
                      gif.sourceFallback
                        ? x$1`<source src=${gif.sourceFallback} type="video/mp4">`
                        : ""
                    }
										<img src=${gif.preview} alt=${gif.description}>
									</video>
								</button>
							</li>
						`
            )}
					</ul>
				`
        )}
			</div>
			${
        this.error
          ? x$1`
				<div class="error-state">
					${this.error}
				</div>
			`
          : ""
      }
			<footer>
				<small>Powered by <a href="https://tenor.com" target="_blank">Tenor</a></small>
			</footer>`;
  }
  #notifyClose() {
    this.#clearGifs();
    this.dispatchEvent(
      new CustomEvent("close", {
        bubbles: true,
        composed: true,
      })
    );
  }
  /**
   * @param {GifData} gif
   */
  #notifySelection(gif) {
    const event = new CustomEvent("gifselection", {
      detail: gif,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}
customElements.define("r-gif-panel", GifPanel);
class CanvasShareEmbed extends i$2 {
  static properties = {
    serverUrl: { type: String, attribute: "serverurl" },
    boardUrl: { type: String, attribute: "boardurl" },
    canvasInfo: { state: true },
  };
  constructor() {
    super();
    this.serverUrl = "";
    this.boardUrl = "";
    this.canvasInfo = null;
  }
  createRenderRoot() {
    return this;
  }
  async connectedCallback() {
    super.connectedCallback();
    await this.loadCanvasData();
  }
  async loadCanvasData() {
    try {
      const httpServerUrl2 = this.serverUrl
        .replace("wss://", "https://")
        .replace("ws://", "http://");
      const response = await fetch(httpServerUrl2);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.canvasInfo = await response.json();
    } catch (error) {
      console.error("Failed to load canvas data:", error);
      this.canvasInfo = null;
    }
  }
  render() {
    if (!this.canvasInfo) {
      return x$1`<div class="canvas-embed">...</div>`;
    }
    const { instance, canvas: canvas2 } = this.canvasInfo;
    const { name, icon } = instance;
    const { width, height, cooldown } = canvas2;
    const serverParam2 = encodeURIComponent(this.serverUrl);
    const boardParam2 = encodeURIComponent(this.boardUrl);
    const shareUrl = `https://rplace.live/?server=${serverParam2}&board=${boardParam2}`;
    return x$1`
			<div class="canvas-embed">
				<a href="${shareUrl}" class="canvas-link">
					<div class="canvas-info">
						<p class="canvas-name">${name}</p>
						<p class="canvas-description">${width}x${height} (cooldown: ${cooldown})</p>
					</div>
				</a>
				<r-clipboard-copy title="Copy canvas URL to clipboard" href="${shareUrl}"></r-clipboard-copy>
			</div>`;
  }
}
customElements.define("r-canvas-share-embed", CanvasShareEmbed);
class EditList extends i$2 {
  static properties = {
    data: { state: true },
  };
  constructor() {
    super();
    this.data = {};
  }
  createRenderRoot() {
    return this;
  }
  /**
   * @param {string} key
   * @param {any} value
   */
  updateEntry(key, value) {
    const newData = { ...this.data, [key]: value };
    this.data = newData;
    this.dispatchEvent(new CustomEvent("change", { detail: this.data }));
    this.dispatchEvent(
      new CustomEvent("itemchange", {
        detail: { key, value },
        bubbles: true,
        composed: true,
      })
    );
  }
  /**
   * @param {string} key
   */
  removeEntry(key) {
    const { [key]: _2, ...rest } = this.data;
    this.data = rest;
    this.dispatchEvent(new CustomEvent("change", { detail: this.data }));
    this.dispatchEvent(
      new CustomEvent("itemremove", {
        detail: { key },
        bubbles: true,
        composed: true,
      })
    );
  }
  addEntry() {
    const newKey = prompt("Enter key for new entry");
    if (!newKey) {
      return;
    }
    this.data = { ...this.data, [newKey]: "" };
    this.dispatchEvent(new CustomEvent("change", { detail: this.data }));
    this.dispatchEvent(
      new CustomEvent("itemadd", {
        detail: { key: newKey, value: "" },
        bubbles: true,
        composed: true,
      })
    );
  }
  render() {
    return x$1`
			<ul>
				${Object.entries(this.data).map(([key, value]) => {
          const inputId =
            (this.getAttribute("id") ?? generateRandomId()) +
            toCapitalised(key);
          return x$1`
						<li>
							<label for="${inputId}" title=${key}>
								${key}:
							</label>
							<input
								id=${inputId}
								type="text"
								title="${key}"
								.value=${value}
								@input=${(e2) => this.updateEntry(key, e2.target.value)}
								placeholder="${key}"
							>
							<button @click=${() => this.removeEntry(key)}>x</button>
						</li>`;
        })}
			</ul>
			<button @click=${this.addEntry}>+ Add Entry</button>
		`;
  }
}
customElements.define("r-edit-list", EditList);
class Sidebar extends i$2 {
  static properties = {
    sidebarOpen: { type: Number, state: true },
    sidebarDrag: { type: Number, state: true },
    sidebarDragging: { type: Boolean, state: true },
    mode: { type: String, attribute: "mode" },
  };
  constructor() {
    super();
    this.sidebarDragLastX = 0;
    this.sidebarDragStartX = 0;
    this.sidebarDragStartY = 0;
    this.sidebarOpen = 0;
    this.sidebarDrag = 0;
    this.sidebarDragging = false;
    this.mode = "inline-overlay";
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    document.body.addEventListener("touchstart", (e2) => {
      this.sidebarDragging = true;
      this.sidebarDragStartX = this.sidebarDragLastX = e2.touches[0].clientX;
      this.sidebarDragStartY = e2.touches[0].clientY;
    });
    document.body.addEventListener("touchmove", (e2) => {
      if (!this.sidebarDragging) {
        return;
      }
      const deltaX = this.sidebarDragStartX - e2.touches[0].clientX;
      if (deltaX > 15) {
        this.close();
      }
      const deltaY = this.sidebarDragStartY - e2.touches[0].clientY;
      if (deltaY > 16 && this.sidebarDrag < 0.1) {
        this.close();
      }
      const sidebar =
        /**@type {HTMLElement}*/
        this.querySelector(".sidebar");
      if (sidebar) {
        const deltaX2 = e2.touches[0].clientX - this.sidebarDragLastX;
        this.sidebarDrag = Math.max(
          0,
          Math.min(this.sidebarDrag + deltaX2 / sidebar.offsetWidth, 1)
        );
        this.sidebarDragLastX = e2.touches[0].clientX;
        this.requestUpdate();
      }
    });
    document.body.addEventListener("touchend", () => {
      this.sidebarOpen = this.sidebarDrag > 0.3 ? 1 : 0;
      this.sidebarDragging = false;
      requestAnimationFrame(() => this.#transition());
    });
    window.addEventListener("resize", () => this.requestUpdate(), {
      passive: true,
    });
  }
  render() {
    const sidebarStyles = o({
      transform:
        this.mode === "overlay" || window.innerWidth < 1200
          ? `translateX(${(this.sidebarDrag - 1) * 100}%)`
          : "translateX(0%)",
      tabIndex: this.sidebarOpen ? "0" : "-1",
    });
    const backgroundStyles = o({
      background:
        this.mode === "overlay" || window.innerWidth < 1200
          ? `rgba(0, 0, 0, ${0.2 * this.sidebarDrag})`
          : "rgba(0, 0, 0, 0)",
      pointerEvents: this.sidebarOpen ? "auto" : "none",
    });
    return x$1`
			<nav class="sidebar" style=${sidebarStyles}>
				<a type="button" href="/posts" style="column-gap: 8px;">
					<svg fill="currentColor" icon-name="home-fill" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
						width="24" height="24">
						<path
							d="m19.724 6.765-9.08-6.11A1.115 1.115 0 0 0 9.368.647L.276 6.765a.623.623 0 0 0 .35 1.141h.444v10.001c.001.278.113.544.31.74.196.195.462.304.739.303h5.16a.704.704 0 0 0 .706-.707v-4.507c0-.76 1.138-1.475 2.02-1.475.882 0 2.02.715 2.02 1.475v4.507a.71.71 0 0 0 .707.707h5.16c.274-.001.538-.112.732-.307.195-.195.305-.46.306-.736v-10h.445a.618.618 0 0 0 .598-.44.625.625 0 0 0-.25-.702Z">
						</path>
					</svg>
					Posts
				</a>
				<a type="button" href="/">
					<img alt="rplace.live" src="/svg/rplace.svg" width="24" height="24">
					Game
				</a>
				<a type="button" href="/premium">
					<img alt="star" src="/svg/premium.svg" width="24" height="24">
					Premium
				</a>
				<nav class="sidebar-footer">
					<a href="https://rplace.live">rplace.live</a> |
					<a href="./disclaimer.html">disclaimer</a> |
					<a href="https://github.com/rplacelive">github</a>
				</nav>
			</nav>
			<div class="sidebar-background" style=${backgroundStyles} @click=${this.close} @touchstart=${this.close}></div>`;
  }
  open() {
    this.sidebarOpen = 1;
    this.sidebarDragging = false;
    this.#transition();
    this.requestUpdate();
  }
  close() {
    this.sidebarOpen = 0;
    this.sidebarDrag = 0;
    this.sidebarDragging = false;
    this.requestUpdate();
  }
  #transition() {
    this.sidebarDrag = lerp(this.sidebarDrag, this.sidebarOpen, 0.3);
    if (
      (!this.sidebarOpen && this.sidebarDrag < 0.05) ||
      (this.sidebarOpen && this.sidebarDrag > 0.95)
    ) {
      this.sidebarDrag = Math.round(this.sidebarDrag);
    } else {
      requestAnimationFrame(() => this.#transition());
    }
    this.requestUpdate();
  }
}
customElements.define("r-sidebar", Sidebar);
class Header extends i$2 {
  static properties = {
    title: { type: String },
    scrolled: { type: Boolean, state: true },
  };
  constructor() {
    super();
    this.title = "rplace.live";
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener(
      "scroll",
      (e2) => {
        if (window.scrollY > 0) {
          this.classList.add("scrolled");
        } else {
          this.classList.remove("scrolled");
        }
      },
      { passive: true }
    );
  }
  render() {
    const sidebarPresent = typeof window.sidebar !== "undefined";
    return x$1`
			${
        sidebarPresent
          ? x$1`
				<button id="sidebarButton" type="button" class="header-menu" onclick="sidebar?.open()">
					<img src="/svg/menu.svg" alt="Menu" width="36" height="36">
				</button>`
          : x$1``
      }
			<img src="/images/rplace.png" alt="Rplace logo">
			<h1>${this.title}</h1>
			<button type="button" id="accountButton" class="header-account" @click=${
        this.#handleAccountButtonClick
      }>
				<img src="/svg/account.svg" alt="Menu" width="36" height="36">
			</button>`;
  }
  #handleAccountButtonClick() {
    openAccountFrame();
  }
}
customElements.define("r-header", Header, { extends: "header" });
const AUDIOS = {
  invalid: new Audio("/sounds/invalid.mp3"),
  highlight: new Audio("/sounds/highlight.mp3"),
  selectColour: new Audio("/sounds/select-colour.mp3"),
  closePalette: new Audio("/sounds/close-palette.mp3"),
  cooldownStart: new Audio("/sounds/cooldown-start.mp3"),
  cooldownEnd: new Audio("/sounds/cooldown-end.mp3"),
  bell: new Audio("/sounds/bell.mp3"),
  celebration: new Audio("/sounds/celebration.mp3"),
};
const DEFAULT_SAMPLE_INFOS = /* @__PURE__ */ new Map([
  ["default", { url: "/sounds/select-colour.mp3", baseNote: 86 }],
  // D6
  ["piano", { url: "/sounds/piano-c5.mp3", baseNote: 72 }],
  // C5
  ["bell", { url: "/sounds/bell.mp3", baseNote: 86 }],
  // TODO: D6 (86) is probably inaccurate
]);
const muteButton =
  /**@type {HTMLButtonElement}*/
  $$1("#muteButton");
const muteButtonImage =
  /**@type {HTMLImageElement}*/
  $$1("#muteButtonImage");
const placeChatButton =
  /**@type {HTMLButtonElement}*/
  $$1("#placeChatButton");
const placeChatButtonImage =
  /**@type {HTMLImageElement}*/
  $$1("#placeChatButtonImage");
let muted = localStorage.muted === "true";
let placeChat = localStorage.placeChat === "true";
if (localStorage.muted !== "true") {
  localStorage.muted = "false";
}
if (localStorage.placeChat !== "false") {
  localStorage.placeChat = "true";
}
window.addEventListener("DOMContentLoaded", function () {
  muteButtonImage.src = muted ? "/svg/muted.svg" : "/svg/unmuted.svg";
  placeChatButtonImage.style.opacity = placeChat ? "1" : "0.6";
});
muteButton.addEventListener("click", function () {
  muted = !muted;
  localStorage.muted = String(muted);
  muteButtonImage.src = muted ? "/svg/muted.svg" : "/svg/unmuted.svg";
});
placeChatButton.addEventListener("click", function () {
  placeChat = !placeChat;
  localStorage.placeChat = String(placeChat);
  placeChatButtonImage.style.opacity = placeChat ? "1" : "0.6";
});
const audioCtx = new AudioContext();
const NATURAL_OFFSETS = [0, 2, 4, 5, 7, 9, 11];
let selectColourSample = null;
async function runAudio(audio) {
  if (muted) {
    return;
  }
  audio.currentTime = 0;
  await audio.play().catch((e2) => {
    console.error(e2);
  });
}
async function loadSample(url2) {
  try {
    const res2 = await fetch(url2);
    if (!res2.ok) {
      throw new Error(
        `Failed to fetch audio ${res2.status} ${res2.statusText}`
      );
    }
    const buffer = await res2.arrayBuffer();
    const audioData = await audioCtx.decodeAudioData(buffer);
    return audioData;
  } catch (e2) {
    console.error("Failed to load audio sample:", e2);
  }
  return null;
}
function playSample(sample, sampleNote = 1, playNote = 1) {
  if (muted) {
    return;
  }
  const source = audioCtx.createBufferSource();
  source.buffer = sample;
  source.playbackRate.value = 2 ** ((playNote - sampleNote) / 12);
  source.connect(audioCtx.destination);
  source.start(0);
}
function getNaturalNotes(octave, count) {
  const notes = [];
  let i4 = 0;
  while (notes.length < count) {
    const offset = NATURAL_OFFSETS[i4 % NATURAL_OFFSETS.length];
    notes.push(octave * 12 + offset);
    i4++;
    if (i4 % NATURAL_OFFSETS.length === 0) {
      octave++;
    }
  }
  return notes;
}
async function getDefaultSample(name) {
  const defaultInfo = DEFAULT_SAMPLE_INFOS.get(name);
  if (!defaultInfo) {
    return null;
  }
  const audioBuffer = await loadSample(defaultInfo.url);
  if (!audioBuffer) {
    return null;
  }
  const sample =
    /**@type {Sample}*/
    {
      audioBuffer,
      baseNote: defaultInfo.baseNote,
    };
  return sample;
}
function setSelectColourSample(sample) {
  selectColourSample = sample;
}
let enableWebglCanvas = localStorage.enableWebglCanvas === "true";
let enableNewOverlayMenu = localStorage.enableNewOverlayMenu === "true";
let enableMelodicPalette = localStorage.enableMelodicPalette === "true";
const enableWebglCanvasCheckbox =
  /**@type {HTMLInputElement}*/
  $$1("#enableWebglCanvasCheckbox");
enableWebglCanvasCheckbox.checked = enableWebglCanvas;
enableWebglCanvasCheckbox.addEventListener("change", function () {
  enableWebglCanvas = !enableWebglCanvas;
  localStorage.enableWebglCanvas = String(enableWebglCanvas);
});
const enableNewOverlayMenuCheckbox =
  /**@type {HTMLInputElement}*/
  $$1("#enableNewOverlayMenuCheckbox");
enableNewOverlayMenuCheckbox.checked = enableNewOverlayMenu;
enableNewOverlayMenuCheckbox.addEventListener("change", function () {
  enableNewOverlayMenu = !enableNewOverlayMenu;
  localStorage.enableNewOverlayMenu = String(enableNewOverlayMenu);
});
const enableMelodicPaletteCheckbox =
  /**@type {HTMLInputElement}*/
  $$1("#enableMelodicPaletteCheckbox");
enableMelodicPaletteCheckbox.checked = enableMelodicPalette;
enableMelodicPaletteCheckbox.addEventListener("change", async function () {
  enableMelodicPalette = !enableMelodicPalette;
  localStorage.enableMelodicPalette = String(enableMelodicPalette);
});
const paletteSoundSelect =
  /**@type {HTMLSelectElement}*/
  $$1("#paletteSoundSelect");
async function handlePaletteSoundChange(value) {
  const sample = await getDefaultSample(value);
  if (sample) {
    setSelectColourSample(sample);
    localStorage.paletteSelectSound = value;
  }
}
async function initPaletteSoundSelect() {
  const selectSound = localStorage.paletteSelectSound;
  if (selectSound) {
    paletteSoundSelect.value = selectSound;
    handlePaletteSoundChange(selectSound);
  }
}
initPaletteSoundSelect();
paletteSoundSelect.addEventListener("change", function () {
  handlePaletteSoundChange(paletteSoundSelect.value);
});
const editLocalStorageList =
  /**@type {EditList}*/
  $$1("#editLocalStorageList");
editLocalStorageList.data = window.localStorage;
editLocalStorageList.addEventListener("itemchange", (e2) => {
  const { key, value } = e2.detail;
  localStorage.setItem(key, value);
});
editLocalStorageList.addEventListener("itemremove", (e2) => {
  const { key } = e2.detail;
  localStorage.removeItem(key);
});
editLocalStorageList.addEventListener("itemadd", (e2) => {
  const { key, value } = e2.detail;
  localStorage.setItem(key, value);
});
let BOARD = null;
let CHANGES = null;
let RAW_BOARD = null;
let SOCKET_PIXELS = null;
let PALETTE_USABLE_REGION = DEFAULT_PALETTE_USABLE_REGION;
let PALETTE = DEFAULT_PALETTE;
let WIDTH = DEFAULT_WIDTH;
let HEIGHT = DEFAULT_HEIGHT;
let COOLDOWN = DEFAULT_COOLDOWN;
const intIdNames = /* @__PURE__ */ new Map();
let intIdPositions = /* @__PURE__ */ new Map();
let intId = null;
let chatName = null;
let connectStatus = "connecting";
let canvasLocked = false;
let placementMode = PLACEMENT_MODE.selectPixel;
const spectators = /* @__PURE__ */ new Set();
let spectatingIntId = null;
let cooldownEndDate = null;
let onCooldown = false;
let preloadedBoard = fetchBoard();
let fetchCooldown = 50;
let fetchFailTimeout = null;
const httpServerUrl = (localStorage.server || DEFAULT_SERVER)
  .replace("wss://", "https://")
  .replace("ws://", "http://");
const res = await fetch(
  `${httpServerUrl}/public/game-worker.js?v=${Date.now()}`
);
const code = await res.text();
const blob = new Blob([code], { type: "application/javascript" });
const url = URL.createObjectURL(blob);
const wsCapsule = new Worker(url, {
  type: "module",
});
wsCapsule.addEventListener("message", handleIpcMessage);
window.addEventListener("beforeunload", (e2) => {
  console.log("Stopping wsCapsule...");
  sendIpcMessage(wsCapsule, "stop");
});
const injectedCjs = document.createElement("script");
injectedCjs.innerHTML = `
	delete WebSocket;
	delete Worker;
	Object.defineProperty(window, "eval", {
		value: function() { throw new Error() },
		writable: false,
		configurable: false
	});
`;
document.body.appendChild(injectedCjs);
const automated = navigator.webdriver;
function handleConnect() {
  connectStatus = "connected";
  if (automated) {
    const activityObj = {
      windowOuterWidth: window.outerWidth,
      windowInnerWidth: window.innerWidth,
      windowOuterHeight: window.outerHeight,
      windowInnerHeight: window.innerHeight,
      localStorage: { ...localStorage },
    };
    sendIpcMessage(wsCapsule, "informAutomatedActivity", activityObj);
  }
}
addIpcMessageHandler("handleConnect", handleConnect);
function handlePalette({ palette: palette2, paletteUsableRegion }) {
  PALETTE = palette2;
  PALETTE_USABLE_REGION.start = paletteUsableRegion.start;
  PALETTE_USABLE_REGION.end = paletteUsableRegion.end;
  const paletteEvent = new CustomEvent("palette", {
    detail: { palette: palette2, paletteUsableRegion },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(paletteEvent);
}
addIpcMessageHandler("handlePalette", handlePalette);
function handleCooldownInfo({ endDate, cooldown }) {
  setCooldown(endDate.getTime());
  COOLDOWN = cooldown;
  const cooldownEvent = new CustomEvent("cooldown", {
    detail: { endDate, cooldown },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(cooldownEvent);
}
addIpcMessageHandler("handleCooldownInfo", handleCooldownInfo);
async function handleCanvasInfo({ width, height }) {
  setSize(width, height);
  const board = await preloadedBoard;
  if (!board) {
    throw new Error("Couldn't handle canvas info: Preloaded board was null");
  }
  const dataArr = new Uint8Array(board);
  BOARD = new Uint8Array(length);
  let boardI = 0;
  let colour = 0;
  for (let i4 = 0; i4 < board.byteLength; i4++) {
    if (i4 % 2 == 0) {
      colour = dataArr[i4];
      continue;
    }
    for (let j2 = 0; j2 < dataArr[i4] + 1; j2++) {
      BOARD[boardI] = colour;
      boardI++;
    }
  }
  const boardLoadedEvent = new CustomEvent("boardloaded", {
    detail: {},
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(boardLoadedEvent);
}
addIpcMessageHandler("handleCanvasInfo", handleCanvasInfo);
async function handleChanges({ width, height, changes }) {
  if (width != WIDTH || height != HEIGHT) {
    setSize(width, height);
  }
  const board = await preloadedBoard;
  if (!board) {
    throw new Error("Couldn't handle changes: Preloaded board was null");
  }
  RAW_BOARD = new Uint8Array(board);
  BOARD = new Uint8Array(RAW_BOARD);
  CHANGES = new Uint8Array(width * height).fill(255);
  SOCKET_PIXELS = new Uint8Array(width * height).fill(255);
  let i4 = 0;
  let boardI = 0;
  const view = new DataView(changes);
  while (i4 < changes.byteLength) {
    let cell = view.getUint8(i4++);
    let c2 = cell >> 6;
    if (c2 == 1) c2 = view.getUint8(i4++);
    else if (c2 == 2) (c2 = view.getUint16(i4++)), i4++;
    else if (c2 == 3) (c2 = view.getUint32(i4++)), (i4 += 3);
    boardI += c2;
    BOARD[boardI] = cell & 63;
    CHANGES[boardI] = cell & 63;
    boardI++;
  }
  const boardLoadedEvent = new CustomEvent("boardloaded", {
    detail: {},
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(boardLoadedEvent);
}
addIpcMessageHandler("handleChanges", handleChanges);
function setOnline(count) {
  const onlineEvent = new CustomEvent("online", {
    detail: { count },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(onlineEvent);
}
addIpcMessageHandler("setOnline", setOnline);
function handlePlacerInfoRegion({ position, width, height, region }) {
  const regionView = new DataView(region);
  let i4 = position;
  let regionI = 0;
  while (regionI < region.byteLength) {
    for (let xi = i4; xi < i4 + width; xi++) {
      const placerIntId = regionView.getUint32(regionI);
      if (placerIntId !== 4294967295) {
        intIdPositions.set(xi, placerIntId);
      }
      regionI += 4;
    }
    i4 += WIDTH;
  }
  const placerInfoEvent = new CustomEvent("placerinfo", {
    detail: { intIdPositions },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(placerInfoEvent);
}
addIpcMessageHandler("handlePlacerInfoRegion", handlePlacerInfoRegion);
function handleSetIntId(newIntId) {
  intId = newIntId;
  const intIdEvent = new CustomEvent("intid", {
    detail: { intId },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(intIdEvent);
}
addIpcMessageHandler("handleSetIntId", handleSetIntId);
function handleSetCanvasLocked({ locked, reason }) {
  canvasLocked = locked;
  const canvasLockedEvent = new CustomEvent("canvaslocked", {
    detail: { locked, reason },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(canvasLockedEvent);
}
addIpcMessageHandler("setCanvasLocked", handleSetCanvasLocked);
function handlePixels(pixels) {
  for (const pixel of pixels) {
    setPixelI(pixel.position, pixel.colour);
    if (pixel.placer) {
      intIdPositions.set(pixel.position, pixel.placer);
      if (pixel.placer === spectatingIntId) {
        const spectatedPixelEvent = new CustomEvent("spectatedpixel", {
          detail: {
            position: pixel.position,
            colour: pixel.colour,
            placer: pixel.placer,
          },
          bubbles: true,
          composed: true,
        });
        window.dispatchEvent(spectatedPixelEvent);
      }
    }
  }
  const pixelsEvent = new CustomEvent("pixels", {
    detail: { pixels },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(pixelsEvent);
}
addIpcMessageHandler("handlePixels", handlePixels);
function handleRejectedPixel({ endDate, position, colour }) {
  setCooldown(endDate.getTime());
  setPixelI(position, colour);
  const x2 = position % WIDTH;
  const y3 = Math.floor(position / WIDTH);
  const pixelsEvent = new CustomEvent("rejectedpixel", {
    detail: { position, x: x2, y: y3, colour, cooldownEndDate: endDate },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(pixelsEvent);
}
addIpcMessageHandler("handleRejectedPixel", handleRejectedPixel);
function handleCooldown({ endDate }) {
  setCooldown(endDate.getTime());
}
addIpcMessageHandler("handleCooldown", handleCooldown);
function setChatName(name) {
  chatName = name;
  const chatNameEvent = new CustomEvent("chatname", {
    detail: { chatName },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(chatNameEvent);
}
addIpcMessageHandler("setChatName", setChatName);
function handleNameInfo(newIntIdNames) {
  for (const [key, value] of newIntIdNames.entries()) {
    intIdNames.set(key, value);
  }
}
addIpcMessageHandler("handleNameInfo", handleNameInfo);
function addLiveChatMessage({ message, channel }) {
  const liveChatMessageEvent = new CustomEvent("livechatmessage", {
    detail: { message, channel },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(liveChatMessageEvent);
}
addIpcMessageHandler("addLiveChatMessage", addLiveChatMessage);
function addPlaceChatMessage(message) {
  const placeChatMessageEvent = new CustomEvent("placechatmessage", {
    detail: { message },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(placeChatMessageEvent);
}
addIpcMessageHandler("addPlaceChatMessage", addPlaceChatMessage);
function handleLiveChatDelete(messageId) {
  const liveChatDeleteEvent = new CustomEvent("livechatdelete", {
    detail: { messageId },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(liveChatDeleteEvent);
}
addIpcMessageHandler("handleLiveChatDelete", handleLiveChatDelete);
function handleLiveChatReaction({ messageId, reactorId, reactionKey }) {
  const liveChatReactionEvent = new CustomEvent("livechatreaction", {
    detail: { messageId, reactorId, reactionKey },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(liveChatReactionEvent);
}
addIpcMessageHandler("handleLiveChatReaction", handleLiveChatReaction);
function applyPunishment(info) {
  const punishmentEvent = new CustomEvent("punishment", {
    detail: info,
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(punishmentEvent);
}
addIpcMessageHandler("applyPunishment", applyPunishment);
function handleDisconnect({ code: code2, reason }) {
  localStorage.lastDisconnect = Date.now();
  connectStatus = "disconnected";
  setCooldown(null);
  wsCapsule.terminate();
  const disconnectEvent = new CustomEvent("disconnect", {
    detail: { code: code2, reason },
    composed: true,
    bubbles: true,
  });
  window.dispatchEvent(disconnectEvent);
}
addIpcMessageHandler("handleDisconnect", handleDisconnect);
async function handleChallenge({ source, input }) {
  const result = await Object.getPrototypeOf(async function () {}).constructor(
    source
  )(input);
  sendIpcMessage(wsCapsule, "sendChallengeResult", result);
}
addIpcMessageHandler("handleChallenge", handleChallenge);
function handleSpectating(userIntId) {
  spectatingIntId = userIntId;
  const spectatingEvent = new CustomEvent("spectating", {
    detail: { userIntId },
    composed: true,
    bubbles: true,
  });
  window.dispatchEvent(spectatingEvent);
}
addIpcMessageHandler("handleSpectating", handleSpectating);
function handleUnspectating({ userIntId, reason }) {
  if (spectatingIntId === userIntId) {
    spectatingIntId = null;
  }
  const unspectatingEvent = new CustomEvent("unspectating", {
    detail: { userIntId, reason },
    composed: true,
    bubbles: true,
  });
  window.dispatchEvent(unspectatingEvent);
}
addIpcMessageHandler("handleUnspectating", handleUnspectating);
function handleSpectated(spectatorIntId) {
  spectators.add(spectatorIntId);
}
addIpcMessageHandler("handleSpectated", handleSpectated);
function handleUnspectated(spectatorIntId) {
  spectators.delete(spectatorIntId);
}
addIpcMessageHandler("handleUnspectated", handleUnspectated);
async function fetchBoard() {
  const response = await fetch(
    (localStorage.board || DEFAULT_BOARD) + "?v=" + Date.now()
  );
  if (!response.ok) {
    const fetchBoardFailEvent = new CustomEvent("fetchboardfail", {
      detail: { type: "badresponse" },
      bubbles: true,
      composed: true,
    });
    window.dispatchEvent(fetchBoardFailEvent);
    fetchFailTimeout = setTimeout(fetchBoard, (fetchCooldown *= 2));
    if (fetchCooldown > 8e3) {
      clearTimeout(fetchFailTimeout);
      const fetchBoardFailEvent2 = new CustomEvent("fetchboardfail", {
        detail: { type: "timeout" },
        bubbles: true,
        composed: true,
      });
      window.dispatchEvent(fetchBoardFailEvent2);
    }
    return null;
  }
  if (fetchFailTimeout) {
    clearTimeout(fetchFailTimeout);
  }
  return await response.arrayBuffer();
}
function setSize(width, height) {
  WIDTH = width;
  HEIGHT = height;
  BOARD = new Uint8Array(width * height).fill(255);
  const sizeEvent = new CustomEvent("size", {
    detail: { width, height },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(sizeEvent);
}
let cooldownTimeout = null;
function setCooldown(endDate) {
  if (cooldownTimeout !== null) {
    clearTimeout(cooldownTimeout);
    cooldownTimeout = null;
  }
  cooldownEndDate = endDate;
  const now = Date.now();
  if (endDate !== null) {
    if (endDate > now) {
      onCooldown = true;
      cooldownTimeout = setTimeout(() => {
        onCooldown = false;
        const cooldownEndEvent = new CustomEvent("cooldownend", {
          detail: { endDate, onCooldown },
        });
        window.dispatchEvent(cooldownEndEvent);
      }, endDate - now);
    } else {
      onCooldown = false;
    }
  } else {
    onCooldown = true;
  }
  const cooldownStartEvent = new CustomEvent("cooldownstart", {
    detail: { endDate, onCooldown },
  });
  window.dispatchEvent(cooldownStartEvent);
}
function setPixelI(index2, colour) {
  if (!BOARD || !SOCKET_PIXELS) {
    console.error("Could not set pixel: Board or socket pixels was null");
    return;
  }
  BOARD[index2] = colour;
  SOCKET_PIXELS[index2] = colour;
}
const palette$1 =
  /**@type {HTMLElement}*/
  $$1("#palette");
const colours$1 =
  /**@type {HTMLElement}*/
  $$1("#colours");
function showPalette() {
  palette$1.style.transform = "";
  runAudio(AUDIOS.highlight);
}
function generatePalette() {
  colours$1.innerHTML = "";
  for (
    let i4 = PALETTE_USABLE_REGION.start;
    i4 < PALETTE_USABLE_REGION.end;
    i4++
  ) {
    const colour = PALETTE[i4] || 0;
    const colourEl = document.createElement("div");
    colourEl.dataset.index = String(i4);
    colourEl.style.background = `rgba(${colour & 255},${(colour >> 8) & 255},${
      (colour >> 16) & 255
    }, 1)`;
    if (colour == 4294967295) {
      colourEl.style.outline = "1px #ddd solid";
      colourEl.style.outlineOffset = "-1px";
    }
    const indicatorSpan = document.createElement("span");
    indicatorSpan.contentEditable = "true";
    indicatorSpan.onkeydown = function (event) {
      rebindIndicator(event, i4);
    };
    colourEl.appendChild(indicatorSpan);
    colours$1.appendChild(colourEl);
  }
}
function hideIndicators() {
  for (let c2 = 0; c2 < colours$1.children.length; c2++) {
    const indicator =
      /**@type {HTMLElement}*/
      colours$1.children[c2]?.firstElementChild;
    if (indicator?.style.visibility !== "hidden") {
      indicator.style.visibility = "hidden";
    }
  }
}
function rebindIndicator(e2, i4) {
  const indicator =
    /**@type {HTMLElement}*/
    e2.target;
  if (!e2.key || e2.key.length != 1 || !indicator) {
    return;
  }
  indicator.innerText = e2.key;
  indicator.blur();
  let binds = (localStorage.paletteKeys || DEFAULT_PALETTE_KEYS).split("");
  const preExisting = binds.indexOf(e2.key);
  if (preExisting != -1) {
    binds[preExisting] = "​";
  }
  binds[i4] = e2.key.charAt(0);
  localStorage.paletteKeys = binds.join("");
  generateIndicators(binds.join(""));
}
function generateIndicators(keybinds) {
  for (let c2 = 0; c2 < colours$1.children.length; c2++) {
    const indicator =
      /**@type {HTMLElement}*/
      colours$1.children[c2].firstChild;
    indicator.textContent = keybinds.charAt(c2);
  }
}
function init() {
  generatePalette();
  generateIndicators(localStorage.paletteKeys || DEFAULT_PALETTE_KEYS);
}
if (document.readyState !== "loading") {
  init();
} else {
  window.addEventListener("DOMContentLoaded", init);
}
const viewport$1 =
  /**@type {HTMLElement}*/
  $$1("#viewport");
const canvParent1$1 =
  /**@type {HTMLElement}*/
  $$1("#canvparent1");
const canvParent2$1 =
  /**@type {HTMLElement}*/
  $$1("#canvparent2");
const canvas$1 =
  /**@type {HTMLCanvasElement}*/
  $$1("#canvas");
const viewportCanvas =
  /**@type {HTMLCanvasElement}*/
  $$1("#viewportCanvas");
const placeContext$1 =
  /**@type {HTMLElement}*/
  $$1("#placeContext");
const canvSelect$1 =
  /**@type {HTMLElement}*/
  $$1("#canvselect");
const placeChatMessages$1 =
  /**@type {HTMLElement}*/
  $$1("#placeChatMessages");
const positionIndicator =
  /**@type {import("./game-elements.js").PositionIndicator}*/
  $$1("#positionIndicator");
const idPosition =
  /**@type {HTMLElement}*/
  $$1("#idPosition");
const idPositionPlacer =
  /**@type {HTMLElement}*/
  $$1("#idPositionPlacer");
VIEWPORT_MODE.placePixels;
let boardRenderer = null;
let canvasCtx = canvas$1.getContext("2d");
if (enableWebglCanvas) {
  try {
    boardRenderer = new BoardRenderer(viewportCanvas);
    canvas$1.style.opacity = "0";
  } catch (e2) {
    console.error(e2);
  }
}
let x = 0;
let y2 = 0;
let z2 = 0;
let minZoom = 0;
let moved = 3;
let touch1 = null;
let touch2 = null;
let touchMoveDistance = 15;
viewport$1.addEventListener("touchstart", function (e2) {
  if (!(e2 instanceof Event) || !e2.isTrusted) {
    return;
  }
  e2.preventDefault();
  for (let i4 = 0; i4 < e2.changedTouches.length; i4++) {
    const touch = e2.changedTouches[i4];
    if (!touch1) {
      touch1 = touch;
      touchMoveDistance = 15;
    } else if (!touch2) {
      touch2 = touch;
    } else {
      [touch1, touch2] = [touch2, touch];
    }
  }
});
viewport$1.addEventListener("touchend", function (e2) {
  if (
    !(e2 instanceof Event) ||
    !e2.isTrusted ||
    !(e2.target instanceof HTMLElement)
  ) {
    return;
  }
  for (let i4 = 0; i4 < e2.changedTouches.length; i4++) {
    const t2 = e2.changedTouches[i4];
    assign2: {
      if (touch2 && touch2.identifier === t2.identifier) {
        touch2 = null;
      } else if (touch1 && touch1.identifier === t2.identifier) {
        [touch1, touch2] = [touch2, null];
        if (
          touchMoveDistance > 0 &&
          e2.target instanceof Node &&
          canvParent2$1.contains(e2.target)
        ) {
          if (!isCanvasDragRegion(e2.target)) {
            break assign2;
          }
          clicked(t2.clientX, t2.clientY);
        }
      }
    }
    let target =
      /** @type {HTMLElement|null} */
      e2.target;
    if (target && "value" in target) {
      target.focus();
    }
    while (target && !target.dispatchEvent) {
      target = target.parentElement;
    }
    if (touchMoveDistance > 0 && target) {
      target.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  }
  e2.preventDefault();
});
viewport$1.addEventListener("touchmove", function (e2) {
  if (
    !(e2 instanceof Event) ||
    !e2.isTrusted ||
    !(e2.target instanceof HTMLElement)
  ) {
    return;
  }
  for (let i4 = 0; i4 < e2.changedTouches.length; i4++) {
    const touch = e2.changedTouches[i4];
    if (!touch) {
      continue;
    }
    if (zoomAnim) {
      clearInterval(zoomAnim);
    }
    const touchTarget =
      /**@type {HTMLElement}*/
      e2.target;
    if (!touch2 && touch1 && touch1.identifier == touch.identifier) {
      touchMoveDistance -=
        Math.abs(touch.clientY - touch1.clientY) +
        Math.abs(touch.clientX - touch1.clientX);
      if (e2.target != viewport$1 && !canvParent2$1.contains(touchTarget)) {
        break;
      }
      x -= (touch.clientX - touch1.clientX) / (z2 * 50);
      y2 -= (touch.clientY - touch1.clientY) / (z2 * 50);
      pos();
    } else if (touch1 && touch2) {
      if (e2.target != viewport$1 && !canvParent2$1.contains(touchTarget)) {
        break;
      }
      let currentTouch =
        touch1.identifier == touch.identifier
          ? touch1
          : touch2.identifier == touch.identifier
          ? touch2
          : null;
      if (!currentTouch) {
        break;
      }
      const otherTouch = currentTouch == touch1 ? touch2 : touch1;
      x -= (touch.clientX - currentTouch.clientX) / (z2 * 50);
      y2 -= (touch.clientY - currentTouch.clientY) / (z2 * 50);
      touchMoveDistance -=
        Math.abs(touch.clientY - currentTouch.clientY) +
        Math.abs(touch.clientX - currentTouch.clientX);
      let dx = currentTouch.clientX - otherTouch.clientX;
      let dy = currentTouch.clientY - otherTouch.clientY;
      let initialDistance = dx * dx + dy * dy;
      dx = touch.clientX - otherTouch.clientX;
      dy = touch.clientY - otherTouch.clientY;
      const scale = Math.sqrt((dx * dx + dy * dy) / initialDistance);
      z2 *= scale;
      pos();
    }
    if (touch1 && touch1.identifier == touch.identifier) touch1 = touch;
    else if (touch2 && touch2.identifier == touch.identifier) touch2 = touch;
  }
});
let mouseDown = 0;
let mx = 0;
let my = 0;
viewport$1.addEventListener("mousemove", function (e2) {
  if (
    !(e2 instanceof Event) ||
    !e2.isTrusted ||
    !(e2.target instanceof HTMLElement)
  ) {
    return;
  }
  if (!isCanvasDragRegion(e2.target)) {
    return;
  }
  moved--;
  let dx = -(mx - (mx = e2.clientX - innerWidth / 2));
  let dy = -(my - (my = e2.clientY - viewport$1.offsetHeight / 2));
  if (dx != dx || dy != dy) {
    return;
  }
  if (mouseDown) {
    x -= dx / (z2 * 50);
    y2 -= dy / (z2 * 50);
    pos();
    if (zoomAnim) {
      clearInterval(zoomAnim);
    }
  }
});
viewport$1.addEventListener("wheel", function (e2) {
  if (
    !(e2 instanceof Event) ||
    !e2.isTrusted ||
    !(e2.target instanceof HTMLElement)
  ) {
    return;
  }
  if (!isCanvasDragRegion(e2.target)) {
    return;
  }
  const d2 = Math.max(
    minZoom / z2,
    Math.min(3 ** Math.max(-0.5, Math.min(0.5, e2.deltaY * -0.01)), 1 / z2)
  );
  z2 *= d2;
  x += (mx * (d2 - 1)) / z2 / 50;
  y2 += (my * (d2 - 1)) / z2 / 50;
  pos();
});
viewport$1.addEventListener("mousedown", function (e2) {
  if (!(e2 instanceof Event) || !e2.isTrusted) {
    return;
  }
  moved = 3;
  mouseDown = e2.button + 1;
  if (placeContext$1.style.display == "block") {
    placeContext$1.style.display = "none";
  }
});
viewport$1.addEventListener("mouseup", function (e2) {
  if (
    !(e2 instanceof Event) ||
    !e2.isTrusted ||
    !(e2.target instanceof HTMLElement)
  ) {
    return;
  }
  if (!isCanvasDragRegion(e2.target)) {
    moved = 3;
    mouseDown = 0;
    return;
  }
  if (moved > 0 && canvParent2$1.contains(e2.target)) {
    clicked(e2.clientX, e2.clientY);
  }
  moved = 3;
  mouseDown = 0;
});
viewport$1.addEventListener("contextmenu", function (e2) {
  if (
    !(e2 instanceof Event) ||
    !e2.isTrusted ||
    !(e2.target instanceof HTMLElement)
  ) {
    return;
  }
  placeContext$1.style.display = "block";
  const { x: x2, y: y3 } = screenToCanvas(e2.clientX, e2.clientY);
  setPlaceContextPosition(x2, y3);
});
let zoomAnim = null;
function clicked(clientX, clientY) {
  if (zoomAnim) {
    clearInterval(zoomAnim);
  }
  clientX = Math.floor(x + (clientX - innerWidth / 2) / z2 / 50) + 0.5;
  clientY =
    Math.floor(y2 + (clientY - viewport$1.offsetHeight / 2) / z2 / 50) + 0.5;
  if (clientX == Math.floor(x) + 0.5 && clientY == Math.floor(y2) + 0.5) {
    clientX -= 0.5;
    clientY -= 0.5;
    if ((cooldownEndDate ?? 0) < Date.now()) {
      zoomIn();
      showPalette();
    } else {
      runAudio(AUDIOS.invalid);
    }
    return;
  }
  runAudio(
    (cooldownEndDate ?? 0) > Date.now() ? AUDIOS.invalid : AUDIOS.highlight
  );
  zoomAnim = setInterval(function () {
    x += (clientX - x) / 10;
    y2 += (clientY - y2) / 10;
    pos();
    if (zoomAnim && Math.abs(clientX - x) + Math.abs(clientY - y2) < 0.1) {
      clearInterval(zoomAnim);
    }
  }, 15);
}
function transform() {
  const scale = z2 * 50;
  const translateX = x * z2 * -50;
  const translateY = y2 * z2 * -50;
  const width = z2 * canvas$1.width * 50;
  const height = z2 * canvas$1.height * 50;
  canvParent1$1.style.transform = `translate(${
    translateX + innerWidth / 2
  }px, ${translateY + viewport$1.offsetHeight / 2}px) scale(${scale})`;
  canvParent2$1.style.transform = canvParent1$1.style.transform;
  canvSelect$1.style.transform = `translate(${Math.floor(x)}px, ${Math.floor(
    y2
  )}px) scale(0.01)`;
  placeChatMessages$1.style.transform = `translate(${
    translateX + innerWidth / 2
  }px, ${translateY + viewport$1.offsetHeight / 2}px) scale(${z2 * 5})`;
  canvas$1.style.width = `${width}px`;
  canvas$1.style.height = `${height}px`;
  canvas$1.style.transform = `translate(${translateX}px, ${translateY}px)`;
  canvas$1.style.imageRendering =
    z2 < 1 / 50 / devicePixelRatio ? "initial" : "";
}
function isCanvasDragRegion(element) {
  return (
    element === viewport$1 ||
    canvParent2$1.contains(element) ||
    placeChatMessages$1.contains(element)
  );
}
function screenToCanvas(clientX, clientY) {
  const scale = z2 * 50;
  const translateX = x * z2 * -50;
  const translateY = y2 * z2 * -50;
  const canvasX = (clientX - innerWidth / 2 - translateX) / scale;
  const canvasY = (clientY - viewport$1.offsetHeight / 2 - translateY) / scale;
  return { x: canvasX, y: canvasY };
}
function setCanvasAttachmentPosition(element, px, py, z3) {
  const scale = z3 * 50;
  const translateX = x * z3 * -50;
  const translateY = y2 * z3 * -50;
  const screenX = px * scale + translateX + viewport$1.offsetWidth / 2;
  const screenY = py * scale + translateY + viewport$1.offsetHeight / 2;
  element.style.left = `${screenX}px`;
  element.style.top = `${screenY}px`;
}
function setPlaceContextPosition(canvX, canvY) {
  if (placeContext$1.style.display === "block") {
    placeContext$1.dataset.x = String(canvX);
    placeContext$1.dataset.y = String(canvY);
    setCanvasAttachmentPosition(placeContext$1, canvX, canvY, z2);
  }
}
function setPlaceChatPosition(element, posX, posY) {
  element.style.left = `${posX * 10}px`;
  element.style.top = `${posY * 10}px`;
}
let idPositionDebounce = false;
let idPositionTimeout = null;
let lastIntX = Math.floor(x);
let lastIntY = Math.floor(y2);
function pos(newX = x, newY = y2, newZ = z2) {
  newX = x = Math.max(Math.min(newX, WIDTH - 1), 0);
  newY = y2 = Math.max(Math.min(newY, HEIGHT - 1), 0);
  newZ = z2 = Math.min(Math.max(newZ, minZoom), 1);
  const right = newX - canvas$1.width + 0.01;
  const left = newX;
  const up = newY - canvas$1.height + 0.01;
  const down = newY;
  if (right >= left) {
    newX = 0;
  } else if (right > 0) {
    newX -= right;
  } else if (left < 0) {
    newX -= left;
  }
  if (up >= down) {
    newY = 0;
  } else if (up > 0) {
    newY -= up;
  } else if (down < 0) {
    newY -= down;
  }
  localStorage.x = Math.floor(newX) + 0.5;
  localStorage.y = Math.floor(newY) + 0.5;
  localStorage.z = newZ;
  transform();
  boardRenderer?.setPosition(x, y2, z2);
  const canvX = Number(placeContext$1.dataset.x);
  const canvY = Number(placeContext$1.dataset.y);
  setPlaceContextPosition(canvX, canvY);
  if (positionIndicator.setPosition) {
    positionIndicator.setPosition(x, y2, z2);
  }
  const intX = Math.floor(newX),
    intY = Math.floor(newY);
  if (intX != lastIntX || intY != lastIntY) {
    if (idPositionTimeout) {
      clearTimeout(idPositionTimeout);
    }
    idPosition.style.display = "none";
    idPositionDebounce = false;
  }
  lastIntX = intX;
  lastIntY = intY;
  if (!idPositionDebounce) {
    idPositionDebounce = true;
    idPositionTimeout = setTimeout(() => {
      idPositionDebounce = false;
      let id = intIdPositions.get(intX + intY * WIDTH);
      if (id === void 0 || id === null) {
        const placersRadius = 15;
        const centreX = Math.floor(Math.max(intX - placersRadius / 2, 0));
        const centreY = Math.floor(Math.max(intY - placersRadius / 2, 0));
        const width = Math.min(placersRadius, WIDTH - intX);
        const height = Math.min(placersRadius, HEIGHT - intY);
        const position = centreX + centreY * WIDTH;
        if (connectStatus === "connected") {
          sendIpcMessage(wsCapsule, "requestPixelPlacers", {
            position,
            width,
            height,
          });
        }
        return;
      }
      idPosition.style.display = "flex";
      setPlaceChatPosition(idPosition, intX, intY);
      idPositionPlacer.style.color = CHAT_COLOURS[hash("" + id) & 7];
      idPositionPlacer.textContent = intIdNames.get(id) || "#" + id;
    }, 1e3);
  }
}
function zoomIn() {
  if (z2 >= 0.4) {
    return;
  }
  if (zoomAnim) {
    clearInterval(zoomAnim);
  }
  let dz = 5e-3;
  zoomAnim = setInterval(function () {
    if (dz < 0.2) dz *= 1.1;
    z2 *= 1 + dz;
    pos();
    if (zoomAnim && z2 >= 0.4) {
      clearInterval(zoomAnim);
    }
  }, 15);
}
function moveTo(newX = x, newY = y2, newZ = z2, durationMs = 300) {
  const startX = x;
  const startY = y2;
  const startZ = z2;
  const startTime = Date.now();
  const easeFunc = setInterval(() => {
    const elapsed = Date.now() - startTime;
    let t2 = elapsed / durationMs;
    if (t2 >= 1) {
      t2 = 1;
    }
    const currentX = lerp(startX, newX, t2);
    const currentY = lerp(startY, newY, t2);
    const currentZ = lerp(startZ, newZ, t2);
    pos(currentX, currentY, currentZ);
    if (t2 >= 1) {
      clearInterval(easeFunc);
      x = newX;
      y2 = newY;
      z2 = newZ;
    }
  }, 16);
}
function setMinZoom(value) {
  minZoom = value;
  pos();
}
function setX(value) {
  x = value;
}
function setY(value) {
  y2 = value;
}
function setZ(value) {
  z2 = value;
}
const overlayMenu =
  /**@type {HTMLDialogElement}*/
  $$1("#overlayMenu");
const overlayMenuCanvas =
  /**@type {HTMLCanvasElement}*/
  $$1("#overlayMenuCanvas");
new BoardRenderer(overlayMenuCanvas);
function initOverlayMenu() {}
if (document.readyState !== "loading");
else {
  document.addEventListener("DOMContentLoaded", initOverlayMenu);
}
function openOverlayMenu() {
  overlayMenu.showModal();
}
const globalNamespace = typeof globalThis !== "undefined" ? globalThis : window;
let turnstileState =
  typeof globalNamespace.turnstile !== "undefined" ? "ready" : "unloaded";
let ensureTurnstile;
let turnstileLoad;
const turnstileLoadPromise = new Promise((resolve, reject) => {
  turnstileLoad = { resolve, reject };
  if (turnstileState === "ready") {
    resolve(void 0);
  }
});
{
  const TURNSTILE_LOAD_FUNCTION = "cf__turnstileOnLoad";
  const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js";
  ensureTurnstile = () => {
    if (turnstileState === "unloaded") {
      turnstileState = "loading";
      globalNamespace[TURNSTILE_LOAD_FUNCTION] = () => {
        turnstileLoad.resolve();
        turnstileState = "ready";
        delete globalNamespace[TURNSTILE_LOAD_FUNCTION];
      };
      const url2 = `${TURNSTILE_SRC}?onload=${TURNSTILE_LOAD_FUNCTION}&render=explicit`;
      const script = document.createElement("script");
      script.src = url2;
      script.async = true;
      script.addEventListener("error", () => {
        turnstileLoad.reject("Failed to load Turnstile.");
        delete globalNamespace[TURNSTILE_LOAD_FUNCTION];
      });
      document.head.appendChild(script);
    }
    return turnstileLoadPromise;
  };
}
function createBoundTurnstileObject(widgetId) {
  return {
    execute: (options) => window.turnstile.execute(widgetId, options),
    reset: () => window.turnstile.reset(widgetId),
    getResponse: () => window.turnstile.getResponse(widgetId),
    isExpired: () => window.turnstile.isExpired(widgetId),
  };
}
class TurnstileWidget {
  constructor(element, options = {}) {
    this.element = element;
    this.options = options;
    this.widgetId = null;
    this.boundTurnstileObject = null;
    this.destroyed = false;
    this.#setupStyles();
    this.#init();
  }
  #setupStyles() {
    if (this.options.fixedSize) {
      const size = this.options.size || "normal";
      const width =
        size === "compact" ? "130px" : size === "flexible" ? "100%" : "300px";
      const height = size === "compact" ? "120px" : "65px";
      this.element.style.width = width;
      this.element.style.height = height;
    }
    if (this.options.style) {
      Object.assign(this.element.style, this.options.style);
    }
  }
  async #init() {
    if (this.destroyed) return;
    try {
      if (turnstileState !== "ready") {
        await ensureTurnstile();
      }
      if (this.destroyed) return;
      this.#render();
    } catch (error) {
      this.options.onError?.(error);
    }
  }
  #render() {
    const turnstileOptions = {
      sitekey: this.options.sitekey,
      action: this.options.action,
      cData: this.options.cData,
      theme: this.options.theme,
      language: this.options.language,
      tabindex: this.options.tabIndex,
      "response-field": this.options.responseField,
      "response-field-name": this.options.responseFieldName,
      size: this.options.size,
      retry: this.options.retry,
      "retry-interval": this.options.retryInterval,
      "refresh-expired": this.options.refreshExpired,
      appearance: this.options.appearance,
      execution: this.options.execution,
      callback: (token, preClearanceObtained) => {
        this.options.onVerify?.(token, this.boundTurnstileObject);
        this.options.onSuccess?.(
          token,
          preClearanceObtained,
          this.boundTurnstileObject
        );
      },
      "error-callback": (error) =>
        this.options.onError?.(error, this.boundTurnstileObject),
      "expired-callback": (token) =>
        this.options.onExpire?.(token, this.boundTurnstileObject),
      "timeout-callback": () =>
        this.options.onTimeout?.(this.boundTurnstileObject),
      "after-interactive-callback": () =>
        this.options.onAfterInteractive?.(this.boundTurnstileObject),
      "before-interactive-callback": () =>
        this.options.onBeforeInteractive?.(this.boundTurnstileObject),
      "unsupported-callback": () =>
        this.options.onUnsupported?.(this.boundTurnstileObject),
    };
    this.widgetId = window.turnstile.render(this.element, turnstileOptions);
    this.boundTurnstileObject = createBoundTurnstileObject(this.widgetId);
    this.options.onLoad?.(this.widgetId, this.boundTurnstileObject);
  }
  destroy() {
    this.destroyed = true;
    if (this.widgetId) {
      window.turnstile.remove(this.widgetId);
      this.widgetId = null;
      this.boundTurnstileObject = null;
    }
  }
  reset() {
    this.boundTurnstileObject?.reset();
  }
  execute(options) {
    this.boundTurnstileObject?.execute(options);
  }
  getResponse() {
    return this.boundTurnstileObject?.getResponse();
  }
  isExpired() {
    return this.boundTurnstileObject?.isExpired();
  }
}
var __assign = function () {
  __assign =
    Object.assign ||
    function __assign2(t2) {
      for (var s2, i4 = 1, n3 = arguments.length; i4 < n3; i4++) {
        s2 = arguments[i4];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
      }
      return t2;
    };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2
      ? value
      : new P2(function (resolve) {
          resolve(value);
        });
  }
  return new (P2 || (P2 = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = {
      label: 0,
      sent: function () {
        if (t2[0] & 1) throw t2[1];
        return t2[1];
      },
      trys: [],
      ops: [],
    },
    f2,
    y3,
    t2,
    g2 = Object.create(
      (typeof Iterator === "function" ? Iterator : Object).prototype
    );
  return (
    (g2.next = verb(0)),
    (g2["throw"] = verb(1)),
    (g2["return"] = verb(2)),
    typeof Symbol === "function" &&
      (g2[Symbol.iterator] = function () {
        return this;
      }),
    g2
  );
  function verb(n3) {
    return function (v2) {
      return step([n3, v2]);
    };
  }
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    while ((g2 && ((g2 = 0), op[0] && (_2 = 0)), _2))
      try {
        if (
          ((f2 = 1),
          y3 &&
            (t2 =
              op[0] & 2
                ? y3["return"]
                : op[0]
                ? y3["throw"] || ((t2 = y3["return"]) && t2.call(y3), 0)
                : y3.next) &&
            !(t2 = t2.call(y3, op[1])).done)
        )
          return t2;
        if (((y3 = 0), t2)) op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y3 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (
              !((t2 = _2.trys), (t2 = t2.length > 0 && t2[t2.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || (op[1] > t2[0] && op[1] < t2[3]))) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2]) _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y3 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i4 = 0, l2 = from.length, ar; i4 < l2; i4++) {
      if (ar || !(i4 in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i4);
        ar[i4] = from[i4];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function"
  ? SuppressedError
  : function (error, suppressed, message) {
      var e2 = new Error(message);
      return (
        (e2.name = "SuppressedError"),
        (e2.error = error),
        (e2.suppressed = suppressed),
        e2
      );
    };
var version = "4.6.2";
function wait(durationMs, resolveWith) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, durationMs, resolveWith);
  });
}
function releaseEventLoop() {
  return new Promise(function (resolve) {
    var channel = new MessageChannel();
    channel.port1.onmessage = function () {
      return resolve();
    };
    channel.port2.postMessage(null);
  });
}
function requestIdleCallbackIfAvailable(fallbackTimeout, deadlineTimeout) {
  if (deadlineTimeout === void 0) {
    deadlineTimeout = Infinity;
  }
  var requestIdleCallback = window.requestIdleCallback;
  if (requestIdleCallback) {
    return new Promise(function (resolve) {
      return requestIdleCallback.call(
        window,
        function () {
          return resolve();
        },
        { timeout: deadlineTimeout }
      );
    });
  } else {
    return wait(Math.min(fallbackTimeout, deadlineTimeout));
  }
}
function isPromise(value) {
  return !!value && typeof value.then === "function";
}
function awaitIfAsync(action, callback) {
  try {
    var returnedValue = action();
    if (isPromise(returnedValue)) {
      returnedValue.then(
        function (result) {
          return callback(true, result);
        },
        function (error) {
          return callback(false, error);
        }
      );
    } else {
      callback(true, returnedValue);
    }
  } catch (error) {
    callback(false, error);
  }
}
function mapWithBreaks(items, callback, loopReleaseInterval) {
  if (loopReleaseInterval === void 0) {
    loopReleaseInterval = 16;
  }
  return __awaiter(this, void 0, void 0, function () {
    var results, lastLoopReleaseTime, i4, now;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          results = Array(items.length);
          lastLoopReleaseTime = Date.now();
          i4 = 0;
          _a.label = 1;
        case 1:
          if (!(i4 < items.length)) return [3, 4];
          results[i4] = callback(items[i4], i4);
          now = Date.now();
          if (!(now >= lastLoopReleaseTime + loopReleaseInterval))
            return [3, 3];
          lastLoopReleaseTime = now;
          return [4, releaseEventLoop()];
        case 2:
          _a.sent();
          _a.label = 3;
        case 3:
          ++i4;
          return [3, 1];
        case 4:
          return [2, results];
      }
    });
  });
}
function suppressUnhandledRejectionWarning(promise) {
  promise.then(void 0, function () {
    return void 0;
  });
  return promise;
}
function includes(haystack, needle) {
  for (var i4 = 0, l2 = haystack.length; i4 < l2; ++i4) {
    if (haystack[i4] === needle) {
      return true;
    }
  }
  return false;
}
function excludes(haystack, needle) {
  return !includes(haystack, needle);
}
function toInt(value) {
  return parseInt(value);
}
function toFloat(value) {
  return parseFloat(value);
}
function replaceNaN(value, replacement) {
  return typeof value === "number" && isNaN(value) ? replacement : value;
}
function countTruthy(values) {
  return values.reduce(function (sum, value) {
    return sum + (value ? 1 : 0);
  }, 0);
}
function round(value, base) {
  if (base === void 0) {
    base = 1;
  }
  if (Math.abs(base) >= 1) {
    return Math.round(value / base) * base;
  } else {
    var counterBase = 1 / base;
    return Math.round(value * counterBase) / counterBase;
  }
}
function parseSimpleCssSelector(selector) {
  var _a, _b;
  var errorMessage = "Unexpected syntax '".concat(selector, "'");
  var tagMatch = /^\s*([a-z-]*)(.*)$/i.exec(selector);
  var tag2 = tagMatch[1] || void 0;
  var attributes = {};
  var partsRegex = /([.:#][\w-]+|\[.+?\])/gi;
  var addAttribute = function (name, value) {
    attributes[name] = attributes[name] || [];
    attributes[name].push(value);
  };
  for (;;) {
    var match = partsRegex.exec(tagMatch[2]);
    if (!match) {
      break;
    }
    var part = match[0];
    switch (part[0]) {
      case ".":
        addAttribute("class", part.slice(1));
        break;
      case "#":
        addAttribute("id", part.slice(1));
        break;
      case "[": {
        var attributeMatch =
          /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(part);
        if (attributeMatch) {
          addAttribute(
            attributeMatch[1],
            (_b =
              (_a = attributeMatch[4]) !== null && _a !== void 0
                ? _a
                : attributeMatch[5]) !== null && _b !== void 0
              ? _b
              : ""
          );
        } else {
          throw new Error(errorMessage);
        }
        break;
      }
      default:
        throw new Error(errorMessage);
    }
  }
  return [tag2, attributes];
}
function getUTF8Bytes(input) {
  var result = new Uint8Array(input.length);
  for (var i4 = 0; i4 < input.length; i4++) {
    var charCode = input.charCodeAt(i4);
    if (charCode > 127) {
      return new TextEncoder().encode(input);
    }
    result[i4] = charCode;
  }
  return result;
}
function x64Add(m2, n3) {
  var m0 = m2[0] >>> 16,
    m1 = m2[0] & 65535,
    m22 = m2[1] >>> 16,
    m3 = m2[1] & 65535;
  var n0 = n3[0] >>> 16,
    n1 = n3[0] & 65535,
    n22 = n3[1] >>> 16,
    n32 = n3[1] & 65535;
  var o0 = 0,
    o1 = 0,
    o2 = 0,
    o3 = 0;
  o3 += m3 + n32;
  o2 += o3 >>> 16;
  o3 &= 65535;
  o2 += m22 + n22;
  o1 += o2 >>> 16;
  o2 &= 65535;
  o1 += m1 + n1;
  o0 += o1 >>> 16;
  o1 &= 65535;
  o0 += m0 + n0;
  o0 &= 65535;
  m2[0] = (o0 << 16) | o1;
  m2[1] = (o2 << 16) | o3;
}
function x64Multiply(m2, n3) {
  var m0 = m2[0] >>> 16,
    m1 = m2[0] & 65535,
    m22 = m2[1] >>> 16,
    m3 = m2[1] & 65535;
  var n0 = n3[0] >>> 16,
    n1 = n3[0] & 65535,
    n22 = n3[1] >>> 16,
    n32 = n3[1] & 65535;
  var o0 = 0,
    o1 = 0,
    o2 = 0,
    o3 = 0;
  o3 += m3 * n32;
  o2 += o3 >>> 16;
  o3 &= 65535;
  o2 += m22 * n32;
  o1 += o2 >>> 16;
  o2 &= 65535;
  o2 += m3 * n22;
  o1 += o2 >>> 16;
  o2 &= 65535;
  o1 += m1 * n32;
  o0 += o1 >>> 16;
  o1 &= 65535;
  o1 += m22 * n22;
  o0 += o1 >>> 16;
  o1 &= 65535;
  o1 += m3 * n1;
  o0 += o1 >>> 16;
  o1 &= 65535;
  o0 += m0 * n32 + m1 * n22 + m22 * n1 + m3 * n0;
  o0 &= 65535;
  m2[0] = (o0 << 16) | o1;
  m2[1] = (o2 << 16) | o3;
}
function x64Rotl(m2, bits) {
  var m0 = m2[0];
  bits %= 64;
  if (bits === 32) {
    m2[0] = m2[1];
    m2[1] = m0;
  } else if (bits < 32) {
    m2[0] = (m0 << bits) | (m2[1] >>> (32 - bits));
    m2[1] = (m2[1] << bits) | (m0 >>> (32 - bits));
  } else {
    bits -= 32;
    m2[0] = (m2[1] << bits) | (m0 >>> (32 - bits));
    m2[1] = (m0 << bits) | (m2[1] >>> (32 - bits));
  }
}
function x64LeftShift(m2, bits) {
  bits %= 64;
  if (bits === 0) {
    return;
  } else if (bits < 32) {
    m2[0] = m2[1] >>> (32 - bits);
    m2[1] = m2[1] << bits;
  } else {
    m2[0] = m2[1] << (bits - 32);
    m2[1] = 0;
  }
}
function x64Xor(m2, n3) {
  m2[0] ^= n3[0];
  m2[1] ^= n3[1];
}
var F1 = [4283543511, 3981806797];
var F2 = [3301882366, 444984403];
function x64Fmix(h2) {
  var shifted = [0, h2[0] >>> 1];
  x64Xor(h2, shifted);
  x64Multiply(h2, F1);
  shifted[1] = h2[0] >>> 1;
  x64Xor(h2, shifted);
  x64Multiply(h2, F2);
  shifted[1] = h2[0] >>> 1;
  x64Xor(h2, shifted);
}
var C1 = [2277735313, 289559509];
var C2 = [1291169091, 658871167];
var M$1 = [0, 5];
var N1 = [0, 1390208809];
var N2 = [0, 944331445];
function x64hash128(input, seed) {
  var key = getUTF8Bytes(input);
  seed = seed || 0;
  var length2 = [0, key.length];
  var remainder = length2[1] % 16;
  var bytes = length2[1] - remainder;
  var h1 = [0, seed];
  var h2 = [0, seed];
  var k1 = [0, 0];
  var k2 = [0, 0];
  var i4;
  for (i4 = 0; i4 < bytes; i4 = i4 + 16) {
    k1[0] =
      key[i4 + 4] |
      (key[i4 + 5] << 8) |
      (key[i4 + 6] << 16) |
      (key[i4 + 7] << 24);
    k1[1] =
      key[i4] | (key[i4 + 1] << 8) | (key[i4 + 2] << 16) | (key[i4 + 3] << 24);
    k2[0] =
      key[i4 + 12] |
      (key[i4 + 13] << 8) |
      (key[i4 + 14] << 16) |
      (key[i4 + 15] << 24);
    k2[1] =
      key[i4 + 8] |
      (key[i4 + 9] << 8) |
      (key[i4 + 10] << 16) |
      (key[i4 + 11] << 24);
    x64Multiply(k1, C1);
    x64Rotl(k1, 31);
    x64Multiply(k1, C2);
    x64Xor(h1, k1);
    x64Rotl(h1, 27);
    x64Add(h1, h2);
    x64Multiply(h1, M$1);
    x64Add(h1, N1);
    x64Multiply(k2, C2);
    x64Rotl(k2, 33);
    x64Multiply(k2, C1);
    x64Xor(h2, k2);
    x64Rotl(h2, 31);
    x64Add(h2, h1);
    x64Multiply(h2, M$1);
    x64Add(h2, N2);
  }
  k1[0] = 0;
  k1[1] = 0;
  k2[0] = 0;
  k2[1] = 0;
  var val = [0, 0];
  switch (remainder) {
    case 15:
      val[1] = key[i4 + 14];
      x64LeftShift(val, 48);
      x64Xor(k2, val);
    // fallthrough
    case 14:
      val[1] = key[i4 + 13];
      x64LeftShift(val, 40);
      x64Xor(k2, val);
    // fallthrough
    case 13:
      val[1] = key[i4 + 12];
      x64LeftShift(val, 32);
      x64Xor(k2, val);
    // fallthrough
    case 12:
      val[1] = key[i4 + 11];
      x64LeftShift(val, 24);
      x64Xor(k2, val);
    // fallthrough
    case 11:
      val[1] = key[i4 + 10];
      x64LeftShift(val, 16);
      x64Xor(k2, val);
    // fallthrough
    case 10:
      val[1] = key[i4 + 9];
      x64LeftShift(val, 8);
      x64Xor(k2, val);
    // fallthrough
    case 9:
      val[1] = key[i4 + 8];
      x64Xor(k2, val);
      x64Multiply(k2, C2);
      x64Rotl(k2, 33);
      x64Multiply(k2, C1);
      x64Xor(h2, k2);
    // fallthrough
    case 8:
      val[1] = key[i4 + 7];
      x64LeftShift(val, 56);
      x64Xor(k1, val);
    // fallthrough
    case 7:
      val[1] = key[i4 + 6];
      x64LeftShift(val, 48);
      x64Xor(k1, val);
    // fallthrough
    case 6:
      val[1] = key[i4 + 5];
      x64LeftShift(val, 40);
      x64Xor(k1, val);
    // fallthrough
    case 5:
      val[1] = key[i4 + 4];
      x64LeftShift(val, 32);
      x64Xor(k1, val);
    // fallthrough
    case 4:
      val[1] = key[i4 + 3];
      x64LeftShift(val, 24);
      x64Xor(k1, val);
    // fallthrough
    case 3:
      val[1] = key[i4 + 2];
      x64LeftShift(val, 16);
      x64Xor(k1, val);
    // fallthrough
    case 2:
      val[1] = key[i4 + 1];
      x64LeftShift(val, 8);
      x64Xor(k1, val);
    // fallthrough
    case 1:
      val[1] = key[i4];
      x64Xor(k1, val);
      x64Multiply(k1, C1);
      x64Rotl(k1, 31);
      x64Multiply(k1, C2);
      x64Xor(h1, k1);
  }
  x64Xor(h1, length2);
  x64Xor(h2, length2);
  x64Add(h1, h2);
  x64Add(h2, h1);
  x64Fmix(h1);
  x64Fmix(h2);
  x64Add(h1, h2);
  x64Add(h2, h1);
  return (
    ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) +
    ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) +
    ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) +
    ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8)
  );
}
function errorToObject(error) {
  var _a;
  return __assign(
    {
      name: error.name,
      message: error.message,
      stack:
        (_a = error.stack) === null || _a === void 0 ? void 0 : _a.split("\n"),
    },
    error
  );
}
function isFunctionNative(func) {
  return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(func));
}
function isFinalResultLoaded(loadResult) {
  return typeof loadResult !== "function";
}
function loadSource(source, sourceOptions) {
  var sourceLoadPromise = suppressUnhandledRejectionWarning(
    new Promise(function (resolveLoad) {
      var loadStartTime = Date.now();
      awaitIfAsync(source.bind(null, sourceOptions), function () {
        var loadArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          loadArgs[_i] = arguments[_i];
        }
        var loadDuration = Date.now() - loadStartTime;
        if (!loadArgs[0]) {
          return resolveLoad(function () {
            return { error: loadArgs[1], duration: loadDuration };
          });
        }
        var loadResult = loadArgs[1];
        if (isFinalResultLoaded(loadResult)) {
          return resolveLoad(function () {
            return { value: loadResult, duration: loadDuration };
          });
        }
        resolveLoad(function () {
          return new Promise(function (resolveGet) {
            var getStartTime = Date.now();
            awaitIfAsync(loadResult, function () {
              var getArgs = [];
              for (var _i2 = 0; _i2 < arguments.length; _i2++) {
                getArgs[_i2] = arguments[_i2];
              }
              var duration = loadDuration + Date.now() - getStartTime;
              if (!getArgs[0]) {
                return resolveGet({ error: getArgs[1], duration });
              }
              resolveGet({ value: getArgs[1], duration });
            });
          });
        });
      });
    })
  );
  return function getComponent() {
    return sourceLoadPromise.then(function (finalizeSource) {
      return finalizeSource();
    });
  };
}
function loadSources(
  sources2,
  sourceOptions,
  excludeSources,
  loopReleaseInterval
) {
  var includedSources = Object.keys(sources2).filter(function (sourceKey) {
    return excludes(excludeSources, sourceKey);
  });
  var sourceGettersPromise = suppressUnhandledRejectionWarning(
    mapWithBreaks(
      includedSources,
      function (sourceKey) {
        return loadSource(sources2[sourceKey], sourceOptions);
      },
      loopReleaseInterval
    )
  );
  return function getComponents() {
    return __awaiter(this, void 0, void 0, function () {
      var sourceGetters, componentPromises, componentArray, components, index2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, sourceGettersPromise];
          case 1:
            sourceGetters = _a.sent();
            return [
              4,
              mapWithBreaks(
                sourceGetters,
                function (sourceGetter) {
                  return suppressUnhandledRejectionWarning(sourceGetter());
                },
                loopReleaseInterval
              ),
            ];
          case 2:
            componentPromises = _a.sent();
            return [
              4,
              Promise.all(componentPromises),
              // Keeping the component keys order the same as the source keys order
            ];
          case 3:
            componentArray = _a.sent();
            components = {};
            for (index2 = 0; index2 < includedSources.length; ++index2) {
              components[includedSources[index2]] = componentArray[index2];
            }
            return [2, components];
        }
      });
    });
  };
}
function isTrident() {
  var w = window;
  var n3 = navigator;
  return (
    countTruthy([
      "MSCSSMatrix" in w,
      "msSetImmediate" in w,
      "msIndexedDB" in w,
      "msMaxTouchPoints" in n3,
      "msPointerEnabled" in n3,
    ]) >= 4
  );
}
function isEdgeHTML() {
  var w = window;
  var n3 = navigator;
  return (
    countTruthy([
      "msWriteProfilerMark" in w,
      "MSStream" in w,
      "msLaunchUri" in n3,
      "msSaveBlob" in n3,
    ]) >= 3 && !isTrident()
  );
}
function isChromium() {
  var w = window;
  var n3 = navigator;
  return (
    countTruthy([
      "webkitPersistentStorage" in n3,
      "webkitTemporaryStorage" in n3,
      (n3.vendor || "").indexOf("Google") === 0,
      "webkitResolveLocalFileSystemURL" in w,
      "BatteryManager" in w,
      "webkitMediaStream" in w,
      "webkitSpeechGrammar" in w,
    ]) >= 5
  );
}
function isWebKit() {
  var w = window;
  var n3 = navigator;
  return (
    countTruthy([
      "ApplePayError" in w,
      "CSSPrimitiveValue" in w,
      "Counter" in w,
      n3.vendor.indexOf("Apple") === 0,
      "RGBColor" in w,
      "WebKitMediaKeys" in w,
    ]) >= 4
  );
}
function isDesktopWebKit() {
  var w = window;
  var HTMLElement2 = w.HTMLElement,
    Document2 = w.Document;
  return (
    countTruthy([
      "safari" in w,
      !("ongestureend" in w),
      !("TouchEvent" in w),
      !("orientation" in w),
      HTMLElement2 && !("autocapitalize" in HTMLElement2.prototype),
      Document2 && "pointerLockElement" in Document2.prototype,
    ]) >= 4
  );
}
function isSafariWebKit() {
  var w = window;
  return (
    // Filters-out Chrome, Yandex, DuckDuckGo (macOS and iOS), Edge
    isFunctionNative(w.print) && // Doesn't work in Safari < 15.4
    String(w.browser) === "[object WebPageNamespace]"
  );
}
function isGecko() {
  var _a, _b;
  var w = window;
  return (
    countTruthy([
      "buildID" in navigator,
      "MozAppearance" in
        ((_b =
          (_a = document.documentElement) === null || _a === void 0
            ? void 0
            : _a.style) !== null && _b !== void 0
          ? _b
          : {}),
      "onmozfullscreenchange" in w,
      "mozInnerScreenX" in w,
      "CSSMozDocumentRule" in w,
      "CanvasCaptureMediaStream" in w,
    ]) >= 4
  );
}
function isChromium86OrNewer() {
  var w = window;
  return (
    countTruthy([
      !("MediaSettingsRange" in w),
      "RTCEncodedAudioFrame" in w,
      "" + w.Intl === "[object Intl]",
      "" + w.Reflect === "[object Reflect]",
    ]) >= 3
  );
}
function isChromium122OrNewer() {
  var w = window;
  var URLPattern = w.URLPattern;
  return (
    countTruthy([
      "union" in Set.prototype,
      "Iterator" in w,
      URLPattern && "hasRegExpGroups" in URLPattern.prototype,
      "RGB8" in WebGLRenderingContext.prototype,
    ]) >= 3
  );
}
function isWebKit606OrNewer() {
  var w = window;
  return (
    countTruthy([
      "DOMRectList" in w,
      "RTCPeerConnectionIceEvent" in w,
      "SVGGeometryElement" in w,
      "ontransitioncancel" in w,
    ]) >= 3
  );
}
function isWebKit616OrNewer() {
  var w = window;
  var n3 = navigator;
  var CSS = w.CSS,
    HTMLButtonElement = w.HTMLButtonElement;
  return (
    countTruthy([
      !("getStorageUpdates" in n3),
      HTMLButtonElement && "popover" in HTMLButtonElement.prototype,
      "CSSCounterStyleRule" in w,
      CSS.supports("font-size-adjust: ex-height 0.5"),
      CSS.supports("text-transform: full-width"),
    ]) >= 4
  );
}
function isIPad() {
  if (navigator.platform === "iPad") {
    return true;
  }
  var s2 = screen;
  var screenRatio = s2.width / s2.height;
  return (
    countTruthy([
      // Since iOS 13. Doesn't work in Chrome on iPadOS <15, but works in desktop mode.
      "MediaSource" in window,
      // Since iOS 12. Doesn't work in Chrome on iPadOS.
      !!Element.prototype.webkitRequestFullscreen,
      // iPhone 4S that runs iOS 9 matches this, but it is not supported
      // Doesn't work in incognito mode of Safari ≥17 with split screen because of tracking prevention
      screenRatio > 0.65 && screenRatio < 1.53,
    ]) >= 2
  );
}
function getFullscreenElement() {
  var d2 = document;
  return (
    d2.fullscreenElement ||
    d2.msFullscreenElement ||
    d2.mozFullScreenElement ||
    d2.webkitFullscreenElement ||
    null
  );
}
function exitFullscreen() {
  var d2 = document;
  return (
    d2.exitFullscreen ||
    d2.msExitFullscreen ||
    d2.mozCancelFullScreen ||
    d2.webkitExitFullscreen
  ).call(d2);
}
function isAndroid() {
  var isItChromium = isChromium();
  var isItGecko = isGecko();
  var w = window;
  var n3 = navigator;
  var c2 = "connection";
  if (isItChromium) {
    return (
      countTruthy([
        !("SharedWorker" in w),
        // `typechange` is deprecated, but it's still present on Android (tested on Chrome Mobile 117)
        // Removal proposal https://bugs.chromium.org/p/chromium/issues/detail?id=699892
        // Note: this expression returns true on ChromeOS, so additional detectors are required to avoid false-positives
        n3[c2] && "ontypechange" in n3[c2],
        !("sinkId" in new Audio()),
      ]) >= 2
    );
  } else if (isItGecko) {
    return (
      countTruthy([
        "onorientationchange" in w,
        "orientation" in w,
        /android/i.test(n3.appVersion),
      ]) >= 2
    );
  } else {
    return false;
  }
}
function isSamsungInternet() {
  var n3 = navigator;
  var w = window;
  var audioPrototype = Audio.prototype;
  var visualViewport = w.visualViewport;
  return (
    countTruthy([
      "srLatency" in audioPrototype,
      "srChannelCount" in audioPrototype,
      "devicePosture" in n3,
      visualViewport && "segments" in visualViewport,
      "getTextInformation" in Image.prototype,
      // Not available in Samsung Internet 21
    ]) >= 3
  );
}
function getAudioFingerprint() {
  if (doesBrowserPerformAntifingerprinting$1()) {
    return -4;
  }
  return getUnstableAudioFingerprint();
}
function getUnstableAudioFingerprint() {
  var w = window;
  var AudioContext2 = w.OfflineAudioContext || w.webkitOfflineAudioContext;
  if (!AudioContext2) {
    return -2;
  }
  if (doesBrowserSuspendAudioContext()) {
    return -1;
  }
  var hashFromIndex = 4500;
  var hashToIndex = 5e3;
  var context = new AudioContext2(1, hashToIndex, 44100);
  var oscillator = context.createOscillator();
  oscillator.type = "triangle";
  oscillator.frequency.value = 1e4;
  var compressor = context.createDynamicsCompressor();
  compressor.threshold.value = -50;
  compressor.knee.value = 40;
  compressor.ratio.value = 12;
  compressor.attack.value = 0;
  compressor.release.value = 0.25;
  oscillator.connect(compressor);
  compressor.connect(context.destination);
  oscillator.start(0);
  var _a = startRenderingAudio(context),
    renderPromise = _a[0],
    finishRendering = _a[1];
  var fingerprintPromise = suppressUnhandledRejectionWarning(
    renderPromise.then(
      function (buffer) {
        return getHash(buffer.getChannelData(0).subarray(hashFromIndex));
      },
      function (error) {
        if (error.name === "timeout" || error.name === "suspended") {
          return -3;
        }
        throw error;
      }
    )
  );
  return function () {
    finishRendering();
    return fingerprintPromise;
  };
}
function doesBrowserSuspendAudioContext() {
  return isWebKit() && !isDesktopWebKit() && !isWebKit606OrNewer();
}
function doesBrowserPerformAntifingerprinting$1() {
  return (
    // Safari ≥17
    (isWebKit() && isWebKit616OrNewer() && isSafariWebKit()) || // Samsung Internet ≥26
    (isChromium() && isSamsungInternet() && isChromium122OrNewer())
  );
}
function startRenderingAudio(context) {
  var renderTryMaxCount = 3;
  var renderRetryDelay = 500;
  var runningMaxAwaitTime = 500;
  var runningSufficientTime = 5e3;
  var finalize = function () {
    return void 0;
  };
  var resultPromise = new Promise(function (resolve, reject) {
    var isFinalized = false;
    var renderTryCount = 0;
    var startedRunningAt = 0;
    context.oncomplete = function (event) {
      return resolve(event.renderedBuffer);
    };
    var startRunningTimeout = function () {
      setTimeout(function () {
        return reject(
          makeInnerError(
            "timeout"
            /* InnerErrorName.Timeout */
          )
        );
      }, Math.min(
        runningMaxAwaitTime,
        startedRunningAt + runningSufficientTime - Date.now()
      ));
    };
    var tryRender = function () {
      try {
        var renderingPromise = context.startRendering();
        if (isPromise(renderingPromise)) {
          suppressUnhandledRejectionWarning(renderingPromise);
        }
        switch (context.state) {
          case "running":
            startedRunningAt = Date.now();
            if (isFinalized) {
              startRunningTimeout();
            }
            break;
          // Sometimes the audio context doesn't start after calling `startRendering` (in addition to the cases where
          // audio context doesn't start at all). A known case is starting an audio context when the browser tab is in
          // background on iPhone. Retries usually help in this case.
          case "suspended":
            if (!document.hidden) {
              renderTryCount++;
            }
            if (isFinalized && renderTryCount >= renderTryMaxCount) {
              reject(
                makeInnerError(
                  "suspended"
                  /* InnerErrorName.Suspended */
                )
              );
            } else {
              setTimeout(tryRender, renderRetryDelay);
            }
            break;
        }
      } catch (error) {
        reject(error);
      }
    };
    tryRender();
    finalize = function () {
      if (!isFinalized) {
        isFinalized = true;
        if (startedRunningAt > 0) {
          startRunningTimeout();
        }
      }
    };
  });
  return [resultPromise, finalize];
}
function getHash(signal) {
  var hash2 = 0;
  for (var i4 = 0; i4 < signal.length; ++i4) {
    hash2 += Math.abs(signal[i4]);
  }
  return hash2;
}
function makeInnerError(name) {
  var error = new Error(name);
  error.name = name;
  return error;
}
function withIframe(action, initialHtml, domPollInterval) {
  var _a, _b, _c;
  if (domPollInterval === void 0) {
    domPollInterval = 50;
  }
  return __awaiter(this, void 0, void 0, function () {
    var d2, iframe;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          d2 = document;
          _d.label = 1;
        case 1:
          if (!!d2.body) return [3, 3];
          return [4, wait(domPollInterval)];
        case 2:
          _d.sent();
          return [3, 1];
        case 3:
          iframe = d2.createElement("iframe");
          _d.label = 4;
        case 4:
          _d.trys.push([4, , 10, 11]);
          return [
            4,
            new Promise(function (_resolve, _reject) {
              var isComplete = false;
              var resolve = function () {
                isComplete = true;
                _resolve();
              };
              var reject = function (error) {
                isComplete = true;
                _reject(error);
              };
              iframe.onload = resolve;
              iframe.onerror = reject;
              var style = iframe.style;
              style.setProperty("display", "block", "important");
              style.position = "absolute";
              style.top = "0";
              style.left = "0";
              style.visibility = "hidden";
              if (initialHtml && "srcdoc" in iframe) {
                iframe.srcdoc = initialHtml;
              } else {
                iframe.src = "about:blank";
              }
              d2.body.appendChild(iframe);
              var checkReadyState = function () {
                var _a2, _b2;
                if (isComplete) {
                  return;
                }
                if (
                  ((_b2 =
                    (_a2 = iframe.contentWindow) === null || _a2 === void 0
                      ? void 0
                      : _a2.document) === null || _b2 === void 0
                    ? void 0
                    : _b2.readyState) === "complete"
                ) {
                  resolve();
                } else {
                  setTimeout(checkReadyState, 10);
                }
              };
              checkReadyState();
            }),
          ];
        case 5:
          _d.sent();
          _d.label = 6;
        case 6:
          if (
            !!((_b =
              (_a = iframe.contentWindow) === null || _a === void 0
                ? void 0
                : _a.document) === null || _b === void 0
              ? void 0
              : _b.body)
          )
            return [3, 8];
          return [4, wait(domPollInterval)];
        case 7:
          _d.sent();
          return [3, 6];
        case 8:
          return [4, action(iframe, iframe.contentWindow)];
        case 9:
          return [2, _d.sent()];
        case 10:
          (_c = iframe.parentNode) === null || _c === void 0
            ? void 0
            : _c.removeChild(iframe);
          return [
            7,
            /*endfinally*/
          ];
        case 11:
          return [
            2,
            /*return*/
          ];
      }
    });
  });
}
function selectorToElement(selector) {
  var _a = parseSimpleCssSelector(selector),
    tag2 = _a[0],
    attributes = _a[1];
  var element = document.createElement(
    tag2 !== null && tag2 !== void 0 ? tag2 : "div"
  );
  for (var _i = 0, _b = Object.keys(attributes); _i < _b.length; _i++) {
    var name_1 = _b[_i];
    var value = attributes[name_1].join(" ");
    if (name_1 === "style") {
      addStyleString(element.style, value);
    } else {
      element.setAttribute(name_1, value);
    }
  }
  return element;
}
function addStyleString(style, source) {
  for (var _i = 0, _a = source.split(";"); _i < _a.length; _i++) {
    var property = _a[_i];
    var match = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(property);
    if (match) {
      var name_2 = match[1],
        value = match[2],
        priority = match[4];
      style.setProperty(name_2, value, priority || "");
    }
  }
}
function isAnyParentCrossOrigin() {
  var currentWindow = window;
  for (;;) {
    var parentWindow = currentWindow.parent;
    if (!parentWindow || parentWindow === currentWindow) {
      return false;
    }
    try {
      if (parentWindow.location.origin !== currentWindow.location.origin) {
        return true;
      }
    } catch (error) {
      if (error instanceof Error && error.name === "SecurityError") {
        return true;
      }
      throw error;
    }
    currentWindow = parentWindow;
  }
}
var testString = "mmMwWLliI0O&1";
var textSize = "48px";
var baseFonts = ["monospace", "sans-serif", "serif"];
var fontList = [
  // This is android-specific font from "Roboto" family
  "sans-serif-thin",
  "ARNO PRO",
  "Agency FB",
  "Arabic Typesetting",
  "Arial Unicode MS",
  "AvantGarde Bk BT",
  "BankGothic Md BT",
  "Batang",
  "Bitstream Vera Sans Mono",
  "Calibri",
  "Century",
  "Century Gothic",
  "Clarendon",
  "EUROSTILE",
  "Franklin Gothic",
  "Futura Bk BT",
  "Futura Md BT",
  "GOTHAM",
  "Gill Sans",
  "HELV",
  "Haettenschweiler",
  "Helvetica Neue",
  "Humanst521 BT",
  "Leelawadee",
  "Letter Gothic",
  "Levenim MT",
  "Lucida Bright",
  "Lucida Sans",
  "Menlo",
  "MS Mincho",
  "MS Outlook",
  "MS Reference Specialty",
  "MS UI Gothic",
  "MT Extra",
  "MYRIAD PRO",
  "Marlett",
  "Meiryo UI",
  "Microsoft Uighur",
  "Minion Pro",
  "Monotype Corsiva",
  "PMingLiU",
  "Pristina",
  "SCRIPTINA",
  "Segoe UI Light",
  "Serifa",
  "SimHei",
  "Small Fonts",
  "Staccato222 BT",
  "TRAJAN PRO",
  "Univers CE 55 Medium",
  "Vrinda",
  "ZWAdobeF",
];
function getFonts() {
  var _this = this;
  return withIframe(function (_2, _a) {
    var document2 = _a.document;
    return __awaiter(_this, void 0, void 0, function () {
      var holder,
        spansContainer,
        defaultWidth,
        defaultHeight,
        createSpan,
        createSpanWithFonts,
        initializeBaseFontsSpans,
        initializeFontsSpans,
        isFontAvailable,
        baseFontsSpans,
        fontsSpans,
        index2;
      return __generator(this, function (_b) {
        holder = document2.body;
        holder.style.fontSize = textSize;
        spansContainer = document2.createElement("div");
        spansContainer.style.setProperty("visibility", "hidden", "important");
        defaultWidth = {};
        defaultHeight = {};
        createSpan = function (fontFamily) {
          var span = document2.createElement("span");
          var style = span.style;
          style.position = "absolute";
          style.top = "0";
          style.left = "0";
          style.fontFamily = fontFamily;
          span.textContent = testString;
          spansContainer.appendChild(span);
          return span;
        };
        createSpanWithFonts = function (fontToDetect, baseFont) {
          return createSpan("'".concat(fontToDetect, "',").concat(baseFont));
        };
        initializeBaseFontsSpans = function () {
          return baseFonts.map(createSpan);
        };
        initializeFontsSpans = function () {
          var spans = {};
          var _loop_1 = function (font2) {
            spans[font2] = baseFonts.map(function (baseFont) {
              return createSpanWithFonts(font2, baseFont);
            });
          };
          for (
            var _i = 0, fontList_1 = fontList;
            _i < fontList_1.length;
            _i++
          ) {
            var font = fontList_1[_i];
            _loop_1(font);
          }
          return spans;
        };
        isFontAvailable = function (fontSpans) {
          return baseFonts.some(function (baseFont, baseFontIndex) {
            return (
              fontSpans[baseFontIndex].offsetWidth !== defaultWidth[baseFont] ||
              fontSpans[baseFontIndex].offsetHeight !== defaultHeight[baseFont]
            );
          });
        };
        baseFontsSpans = initializeBaseFontsSpans();
        fontsSpans = initializeFontsSpans();
        holder.appendChild(spansContainer);
        for (index2 = 0; index2 < baseFonts.length; index2++) {
          defaultWidth[baseFonts[index2]] = baseFontsSpans[index2].offsetWidth;
          defaultHeight[baseFonts[index2]] =
            baseFontsSpans[index2].offsetHeight;
        }
        return [
          2,
          fontList.filter(function (font) {
            return isFontAvailable(fontsSpans[font]);
          }),
        ];
      });
    });
  });
}
function getPlugins() {
  var rawPlugins = navigator.plugins;
  if (!rawPlugins) {
    return void 0;
  }
  var plugins = [];
  for (var i4 = 0; i4 < rawPlugins.length; ++i4) {
    var plugin = rawPlugins[i4];
    if (!plugin) {
      continue;
    }
    var mimeTypes = [];
    for (var j2 = 0; j2 < plugin.length; ++j2) {
      var mimeType = plugin[j2];
      mimeTypes.push({
        type: mimeType.type,
        suffixes: mimeType.suffixes,
      });
    }
    plugins.push({
      name: plugin.name,
      description: plugin.description,
      mimeTypes,
    });
  }
  return plugins;
}
function getCanvasFingerprint() {
  return getUnstableCanvasFingerprint(doesBrowserPerformAntifingerprinting());
}
function getUnstableCanvasFingerprint(skipImages) {
  var _a;
  var winding = false;
  var geometry;
  var text2;
  var _b = makeCanvasContext(),
    canvas2 = _b[0],
    context = _b[1];
  if (!isSupported(canvas2, context)) {
    geometry = text2 = "unsupported";
  } else {
    winding = doesSupportWinding(context);
    if (skipImages) {
      geometry = text2 = "skipped";
    } else {
      (_a = renderImages(canvas2, context)),
        (geometry = _a[0]),
        (text2 = _a[1]);
    }
  }
  return { winding, geometry, text: text2 };
}
function makeCanvasContext() {
  var canvas2 = document.createElement("canvas");
  canvas2.width = 1;
  canvas2.height = 1;
  return [canvas2, canvas2.getContext("2d")];
}
function isSupported(canvas2, context) {
  return !!(context && canvas2.toDataURL);
}
function doesSupportWinding(context) {
  context.rect(0, 0, 10, 10);
  context.rect(2, 2, 6, 6);
  return !context.isPointInPath(5, 5, "evenodd");
}
function renderImages(canvas2, context) {
  renderTextImage(canvas2, context);
  var textImage1 = canvasToString(canvas2);
  var textImage2 = canvasToString(canvas2);
  if (textImage1 !== textImage2) {
    return [
      "unstable",
      "unstable",
      /* ImageStatus.Unstable */
    ];
  }
  renderGeometryImage(canvas2, context);
  var geometryImage = canvasToString(canvas2);
  return [geometryImage, textImage1];
}
function renderTextImage(canvas2, context) {
  canvas2.width = 240;
  canvas2.height = 60;
  context.textBaseline = "alphabetic";
  context.fillStyle = "#f60";
  context.fillRect(100, 1, 62, 20);
  context.fillStyle = "#069";
  context.font = '11pt "Times New Roman"';
  var printedText = "Cwm fjordbank gly ".concat(
    String.fromCharCode(55357, 56835)
    /* 😃 */
  );
  context.fillText(printedText, 2, 15);
  context.fillStyle = "rgba(102, 204, 0, 0.2)";
  context.font = "18pt Arial";
  context.fillText(printedText, 4, 45);
}
function renderGeometryImage(canvas2, context) {
  canvas2.width = 122;
  canvas2.height = 110;
  context.globalCompositeOperation = "multiply";
  for (
    var _i = 0,
      _a = [
        ["#f2f", 40, 40],
        ["#2ff", 80, 40],
        ["#ff2", 60, 80],
      ];
    _i < _a.length;
    _i++
  ) {
    var _b = _a[_i],
      color = _b[0],
      x2 = _b[1],
      y3 = _b[2];
    context.fillStyle = color;
    context.beginPath();
    context.arc(x2, y3, 40, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
  }
  context.fillStyle = "#f9c";
  context.arc(60, 60, 60, 0, Math.PI * 2, true);
  context.arc(60, 60, 20, 0, Math.PI * 2, true);
  context.fill("evenodd");
}
function canvasToString(canvas2) {
  return canvas2.toDataURL();
}
function doesBrowserPerformAntifingerprinting() {
  return isWebKit() && isWebKit616OrNewer() && isSafariWebKit();
}
function getTouchSupport() {
  var n3 = navigator;
  var maxTouchPoints = 0;
  var touchEvent;
  if (n3.maxTouchPoints !== void 0) {
    maxTouchPoints = toInt(n3.maxTouchPoints);
  } else if (n3.msMaxTouchPoints !== void 0) {
    maxTouchPoints = n3.msMaxTouchPoints;
  }
  try {
    document.createEvent("TouchEvent");
    touchEvent = true;
  } catch (_a) {
    touchEvent = false;
  }
  var touchStart = "ontouchstart" in window;
  return {
    maxTouchPoints,
    touchEvent,
    touchStart,
  };
}
function getOsCpu() {
  return navigator.oscpu;
}
function getLanguages() {
  var n3 = navigator;
  var result = [];
  var language =
    n3.language || n3.userLanguage || n3.browserLanguage || n3.systemLanguage;
  if (language !== void 0) {
    result.push([language]);
  }
  if (Array.isArray(n3.languages)) {
    if (!(isChromium() && isChromium86OrNewer())) {
      result.push(n3.languages);
    }
  } else if (typeof n3.languages === "string") {
    var languages = n3.languages;
    if (languages) {
      result.push(languages.split(","));
    }
  }
  return result;
}
function getColorDepth() {
  return window.screen.colorDepth;
}
function getDeviceMemory() {
  return replaceNaN(toFloat(navigator.deviceMemory), void 0);
}
function getScreenResolution() {
  if (isWebKit() && isWebKit616OrNewer() && isSafariWebKit()) {
    return void 0;
  }
  return getUnstableScreenResolution();
}
function getUnstableScreenResolution() {
  var s2 = screen;
  var parseDimension = function (value) {
    return replaceNaN(toInt(value), null);
  };
  var dimensions = [parseDimension(s2.width), parseDimension(s2.height)];
  dimensions.sort().reverse();
  return dimensions;
}
var screenFrameCheckInterval = 2500;
var roundingPrecision = 10;
var screenFrameBackup;
var screenFrameSizeTimeoutId;
function watchScreenFrame() {
  if (screenFrameSizeTimeoutId !== void 0) {
    return;
  }
  var checkScreenFrame = function () {
    var frameSize = getCurrentScreenFrame();
    if (isFrameSizeNull(frameSize)) {
      screenFrameSizeTimeoutId = setTimeout(
        checkScreenFrame,
        screenFrameCheckInterval
      );
    } else {
      screenFrameBackup = frameSize;
      screenFrameSizeTimeoutId = void 0;
    }
  };
  checkScreenFrame();
}
function getUnstableScreenFrame() {
  var _this = this;
  watchScreenFrame();
  return function () {
    return __awaiter(_this, void 0, void 0, function () {
      var frameSize;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            frameSize = getCurrentScreenFrame();
            if (!isFrameSizeNull(frameSize)) return [3, 2];
            if (screenFrameBackup) {
              return [2, __spreadArray([], screenFrameBackup, true)];
            }
            if (!getFullscreenElement()) return [3, 2];
            return [4, exitFullscreen()];
          case 1:
            _a.sent();
            frameSize = getCurrentScreenFrame();
            _a.label = 2;
          case 2:
            if (!isFrameSizeNull(frameSize)) {
              screenFrameBackup = frameSize;
            }
            return [2, frameSize];
        }
      });
    });
  };
}
function getScreenFrame() {
  var _this = this;
  if (isWebKit() && isWebKit616OrNewer() && isSafariWebKit()) {
    return function () {
      return Promise.resolve(void 0);
    };
  }
  var screenFrameGetter = getUnstableScreenFrame();
  return function () {
    return __awaiter(_this, void 0, void 0, function () {
      var frameSize, processSize;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, screenFrameGetter()];
          case 1:
            frameSize = _a.sent();
            processSize = function (sideSize) {
              return sideSize === null
                ? null
                : round(sideSize, roundingPrecision);
            };
            return [
              2,
              [
                processSize(frameSize[0]),
                processSize(frameSize[1]),
                processSize(frameSize[2]),
                processSize(frameSize[3]),
              ],
            ];
        }
      });
    });
  };
}
function getCurrentScreenFrame() {
  var s2 = screen;
  return [
    replaceNaN(toFloat(s2.availTop), null),
    replaceNaN(
      toFloat(s2.width) -
        toFloat(s2.availWidth) -
        replaceNaN(toFloat(s2.availLeft), 0),
      null
    ),
    replaceNaN(
      toFloat(s2.height) -
        toFloat(s2.availHeight) -
        replaceNaN(toFloat(s2.availTop), 0),
      null
    ),
    replaceNaN(toFloat(s2.availLeft), null),
  ];
}
function isFrameSizeNull(frameSize) {
  for (var i4 = 0; i4 < 4; ++i4) {
    if (frameSize[i4]) {
      return false;
    }
  }
  return true;
}
function getHardwareConcurrency() {
  return replaceNaN(toInt(navigator.hardwareConcurrency), void 0);
}
function getTimezone() {
  var _a;
  var DateTimeFormat =
    (_a = window.Intl) === null || _a === void 0 ? void 0 : _a.DateTimeFormat;
  if (DateTimeFormat) {
    var timezone = new DateTimeFormat().resolvedOptions().timeZone;
    if (timezone) {
      return timezone;
    }
  }
  var offset = -getTimezoneOffset();
  return "UTC".concat(offset >= 0 ? "+" : "").concat(offset);
}
function getTimezoneOffset() {
  var currentYear = /* @__PURE__ */ new Date().getFullYear();
  return Math.max(
    // `getTimezoneOffset` returns a number as a string in some unidentified cases
    toFloat(new Date(currentYear, 0, 1).getTimezoneOffset()),
    toFloat(new Date(currentYear, 6, 1).getTimezoneOffset())
  );
}
function getSessionStorage() {
  try {
    return !!window.sessionStorage;
  } catch (error) {
    return true;
  }
}
function getLocalStorage() {
  try {
    return !!window.localStorage;
  } catch (e2) {
    return true;
  }
}
function getIndexedDB() {
  if (isTrident() || isEdgeHTML()) {
    return void 0;
  }
  try {
    return !!window.indexedDB;
  } catch (e2) {
    return true;
  }
}
function getOpenDatabase() {
  return !!window.openDatabase;
}
function getCpuClass() {
  return navigator.cpuClass;
}
function getPlatform() {
  var platform = navigator.platform;
  if (platform === "MacIntel") {
    if (isWebKit() && !isDesktopWebKit()) {
      return isIPad() ? "iPad" : "iPhone";
    }
  }
  return platform;
}
function getVendor() {
  return navigator.vendor || "";
}
function getVendorFlavors() {
  var flavors = [];
  for (
    var _i = 0,
      _a = [
        // Blink and some browsers on iOS
        "chrome",
        // Safari on macOS
        "safari",
        // Chrome on iOS (checked in 85 on 13 and 87 on 14)
        "__crWeb",
        "__gCrWeb",
        // Yandex Browser on iOS, macOS and Android (checked in 21.2 on iOS 14, macOS and Android)
        "yandex",
        // Yandex Browser on iOS (checked in 21.2 on 14)
        "__yb",
        "__ybro",
        // Firefox on iOS (checked in 32 on 14)
        "__firefox__",
        // Edge on iOS (checked in 46 on 14)
        "__edgeTrackingPreventionStatistics",
        "webkit",
        // Opera Touch on iOS (checked in 2.6 on 14)
        "oprt",
        // Samsung Internet on Android (checked in 11.1)
        "samsungAr",
        // UC Browser on Android (checked in 12.10 and 13.0)
        "ucweb",
        "UCShellJava",
        // Puffin on Android (checked in 9.0)
        "puffinDevice",
        // UC on iOS and Opera on Android have no specific global variables
        // Edge for Android isn't checked
      ];
    _i < _a.length;
    _i++
  ) {
    var key = _a[_i];
    var value = window[key];
    if (value && typeof value === "object") {
      flavors.push(key);
    }
  }
  return flavors.sort();
}
function areCookiesEnabled() {
  var d2 = document;
  try {
    d2.cookie = "cookietest=1; SameSite=Strict;";
    var result = d2.cookie.indexOf("cookietest=") !== -1;
    d2.cookie =
      "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT";
    return result;
  } catch (e2) {
    return false;
  }
}
function getFilters() {
  var fromB64 = atob;
  return {
    abpIndo: [
      "#Iklan-Melayang",
      "#Kolom-Iklan-728",
      "#SidebarIklan-wrapper",
      '[title="ALIENBOLA" i]',
      fromB64("I0JveC1CYW5uZXItYWRz"),
    ],
    abpvn: [
      ".quangcao",
      "#mobileCatfish",
      fromB64("LmNsb3NlLWFkcw=="),
      '[id^="bn_bottom_fixed_"]',
      "#pmadv",
    ],
    adBlockFinland: [
      ".mainostila",
      fromB64("LnNwb25zb3JpdA=="),
      ".ylamainos",
      fromB64("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),
      fromB64("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd"),
    ],
    adBlockPersian: [
      "#navbar_notice_50",
      ".kadr",
      'TABLE[width="140px"]',
      "#divAgahi",
      fromB64("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd"),
    ],
    adBlockWarningRemoval: [
      "#adblock-honeypot",
      ".adblocker-root",
      ".wp_adblock_detect",
      fromB64("LmhlYWRlci1ibG9ja2VkLWFk"),
      fromB64("I2FkX2Jsb2NrZXI="),
    ],
    adGuardAnnoyances: [
      ".hs-sosyal",
      "#cookieconsentdiv",
      'div[class^="app_gdpr"]',
      ".as-oil",
      '[data-cypress="soft-push-notification-modal"]',
    ],
    adGuardBase: [
      ".BetterJsPopOverlay",
      fromB64("I2FkXzMwMFgyNTA="),
      fromB64("I2Jhbm5lcmZsb2F0MjI="),
      fromB64("I2NhbXBhaWduLWJhbm5lcg=="),
      fromB64("I0FkLUNvbnRlbnQ="),
    ],
    adGuardChinese: [
      fromB64("LlppX2FkX2FfSA=="),
      fromB64("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),
      "#widget-quan",
      fromB64("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),
      fromB64("YVtocmVmKj0iLjE5NTZobC5jb20vIl0="),
    ],
    adGuardFrench: [
      "#pavePub",
      fromB64("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),
      ".mobile_adhesion",
      ".widgetadv",
      fromB64("LmFkc19iYW4="),
    ],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: [
      "#kauli_yad_1",
      fromB64("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),
      fromB64("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),
      fromB64("LmFkZ29vZ2xl"),
      fromB64("Ll9faXNib29zdFJldHVybkFk"),
    ],
    adGuardMobile: [
      fromB64("YW1wLWF1dG8tYWRz"),
      fromB64("LmFtcF9hZA=="),
      'amp-embed[type="24smi"]',
      "#mgid_iframe1",
      fromB64("I2FkX2ludmlld19hcmVh"),
    ],
    adGuardRussian: [
      fromB64("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),
      fromB64("LnJlY2xhbWE="),
      'div[id^="smi2adblock"]',
      fromB64("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),
      "#psyduckpockeball",
    ],
    adGuardSocial: [
      fromB64("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),
      fromB64("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),
      ".etsy-tweet",
      "#inlineShare",
      ".popup-social",
    ],
    adGuardSpanishPortuguese: [
      "#barraPublicidade",
      "#Publicidade",
      "#publiEspecial",
      "#queTooltip",
      ".cnt-publi",
    ],
    adGuardTrackingProtection: [
      "#qoo-counter",
      fromB64("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),
      fromB64("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),
      fromB64("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),
      "#top100counter",
    ],
    adGuardTurkish: [
      "#backkapat",
      fromB64("I3Jla2xhbWk="),
      fromB64("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),
      fromB64("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),
      fromB64("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ=="),
    ],
    bulgarian: [
      fromB64("dGQjZnJlZW5ldF90YWJsZV9hZHM="),
      "#ea_intext_div",
      ".lapni-pop-over",
      "#xenium_hot_offers",
    ],
    easyList: [
      ".yb-floorad",
      fromB64("LndpZGdldF9wb19hZHNfd2lkZ2V0"),
      fromB64("LnRyYWZmaWNqdW5reS1hZA=="),
      ".textad_headline",
      fromB64("LnNwb25zb3JlZC10ZXh0LWxpbmtz"),
    ],
    easyListChina: [
      fromB64("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),
      fromB64("LmZyb250cGFnZUFkdk0="),
      "#taotaole",
      "#aafoot.top_box",
      ".cfa_popup",
    ],
    easyListCookie: [
      ".ezmob-footer",
      ".cc-CookieWarning",
      "[data-cookie-number]",
      fromB64("LmF3LWNvb2tpZS1iYW5uZXI="),
      ".sygnal24-gdpr-modal-wrap",
    ],
    easyListCzechSlovak: [
      "#onlajny-stickers",
      fromB64("I3Jla2xhbW5pLWJveA=="),
      fromB64("LnJla2xhbWEtbWVnYWJvYXJk"),
      ".sklik",
      fromB64("W2lkXj0ic2tsaWtSZWtsYW1hIl0="),
    ],
    easyListDutch: [
      fromB64("I2FkdmVydGVudGll"),
      fromB64("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),
      ".adstekst",
      fromB64("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),
      "#semilo-lrectangle",
    ],
    easyListGermany: [
      "#SSpotIMPopSlider",
      fromB64("LnNwb25zb3JsaW5rZ3J1ZW4="),
      fromB64("I3dlcmJ1bmdza3k="),
      fromB64("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),
      fromB64("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0="),
    ],
    easyListItaly: [
      fromB64("LmJveF9hZHZfYW5udW5jaQ=="),
      ".sb-box-pubbliredazionale",
      fromB64("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),
      fromB64("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),
      fromB64("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ=="),
    ],
    easyListLithuania: [
      fromB64("LnJla2xhbW9zX3RhcnBhcw=="),
      fromB64("LnJla2xhbW9zX251b3JvZG9z"),
      fromB64("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),
      fromB64("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),
      fromB64("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd"),
    ],
    estonian: [fromB64("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
    fanboyAnnoyances: [
      "#ac-lre-player",
      ".navigate-to-top",
      "#subscribe_popup",
      ".newsletter_holder",
      "#back-top",
    ],
    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
    fanboyEnhancedTrackers: [
      ".open.pushModal",
      "#issuem-leaky-paywall-articles-zero-remaining-nag",
      "#sovrn_container",
      'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
      ".BlockNag__Card",
    ],
    fanboySocial: [
      "#FollowUs",
      "#meteored_share",
      "#social_follow",
      ".article-sharer",
      ".community__social-desc",
    ],
    frellwitSwedish: [
      fromB64("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),
      fromB64("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),
      "article.category-samarbete",
      fromB64("ZGl2LmhvbGlkQWRz"),
      "ul.adsmodern",
    ],
    greekAdBlock: [
      fromB64("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),
      fromB64("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),
      fromB64(
        "QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"
      ),
      "DIV.agores300",
      "TABLE.advright",
    ],
    hungarian: [
      "#cemp_doboz",
      ".optimonk-iframe-container",
      fromB64("LmFkX19tYWlu"),
      fromB64("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),
      "#hirdetesek_box",
    ],
    iDontCareAboutCookies: [
      '.alert-info[data-block-track*="CookieNotice"]',
      ".ModuleTemplateCookieIndicator",
      ".o--cookies--container",
      "#cookies-policy-sticky",
      "#stickyCookieBar",
    ],
    icelandicAbp: [
      fromB64(
        "QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ=="
      ),
    ],
    latvian: [
      fromB64(
        "YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="
      ),
      fromB64(
        "YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ=="
      ),
    ],
    listKr: [
      fromB64("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),
      fromB64("I2xpdmVyZUFkV3JhcHBlcg=="),
      fromB64("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),
      fromB64("aW5zLmZhc3R2aWV3LWFk"),
      ".revenue_unit_item.dable",
    ],
    listeAr: [
      fromB64("LmdlbWluaUxCMUFk"),
      ".right-and-left-sponsers",
      fromB64("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),
      fromB64("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),
      fromB64("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd"),
    ],
    listeFr: [
      fromB64("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),
      fromB64("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),
      fromB64("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),
      ".site-pub-interstitiel",
      'div[id^="crt-"][data-criteo-id]',
    ],
    officialPolish: [
      "#ceneo-placeholder-ceneo-12",
      fromB64("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),
      fromB64(
        "YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="
      ),
      fromB64("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),
      fromB64("ZGl2I3NrYXBpZWNfYWQ="),
    ],
    ro: [
      fromB64("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),
      fromB64(
        "YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"
      ),
      fromB64(
        "YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="
      ),
      fromB64("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),
      'a[href^="/url/"]',
    ],
    ruAd: [
      fromB64("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),
      fromB64("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),
      fromB64("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),
      "#pgeldiz",
      ".yandex-rtb-block",
    ],
    thaiAds: [
      "a[href*=macau-uta-popup]",
      fromB64("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),
      fromB64("LmFkczMwMHM="),
      ".bumq",
      ".img-kosana",
    ],
    webAnnoyancesUltralist: [
      "#mod-social-share-2",
      "#social-tools",
      fromB64("LmN0cGwtZnVsbGJhbm5lcg=="),
      ".zergnet-recommend",
      ".yt.btn-link.btn-md.btn",
    ],
  };
}
function getDomBlockers(_a) {
  var _b = _a === void 0 ? {} : _a,
    debug = _b.debug;
  return __awaiter(this, void 0, void 0, function () {
    var filters, filterNames, allSelectors, blockedSelectors, activeBlockers;
    var _c;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          if (!isApplicable()) {
            return [2, void 0];
          }
          filters = getFilters();
          filterNames = Object.keys(filters);
          allSelectors = (_c = []).concat.apply(
            _c,
            filterNames.map(function (filterName) {
              return filters[filterName];
            })
          );
          return [4, getBlockedSelectors(allSelectors)];
        case 1:
          blockedSelectors = _d.sent();
          if (debug) {
            printDebug(filters, blockedSelectors);
          }
          activeBlockers = filterNames.filter(function (filterName) {
            var selectors = filters[filterName];
            var blockedCount = countTruthy(
              selectors.map(function (selector) {
                return blockedSelectors[selector];
              })
            );
            return blockedCount > selectors.length * 0.6;
          });
          activeBlockers.sort();
          return [2, activeBlockers];
      }
    });
  });
}
function isApplicable() {
  return isWebKit() || isAndroid();
}
function getBlockedSelectors(selectors) {
  var _a;
  return __awaiter(this, void 0, void 0, function () {
    var d2, root, elements, blockedSelectors, i4, element, holder, i4;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          d2 = document;
          root = d2.createElement("div");
          elements = new Array(selectors.length);
          blockedSelectors = {};
          forceShow(root);
          for (i4 = 0; i4 < selectors.length; ++i4) {
            element = selectorToElement(selectors[i4]);
            if (element.tagName === "DIALOG") {
              element.show();
            }
            holder = d2.createElement("div");
            forceShow(holder);
            holder.appendChild(element);
            root.appendChild(holder);
            elements[i4] = element;
          }
          _b.label = 1;
        case 1:
          if (!!d2.body) return [3, 3];
          return [4, wait(50)];
        case 2:
          _b.sent();
          return [3, 1];
        case 3:
          d2.body.appendChild(root);
          try {
            for (i4 = 0; i4 < selectors.length; ++i4) {
              if (!elements[i4].offsetParent) {
                blockedSelectors[selectors[i4]] = true;
              }
            }
          } finally {
            (_a = root.parentNode) === null || _a === void 0
              ? void 0
              : _a.removeChild(root);
          }
          return [2, blockedSelectors];
      }
    });
  });
}
function forceShow(element) {
  element.style.setProperty("visibility", "hidden", "important");
  element.style.setProperty("display", "block", "important");
}
function printDebug(filters, blockedSelectors) {
  var message = "DOM blockers debug:\n```";
  for (var _i = 0, _a = Object.keys(filters); _i < _a.length; _i++) {
    var filterName = _a[_i];
    message += "\n".concat(filterName, ":");
    for (var _b = 0, _c = filters[filterName]; _b < _c.length; _b++) {
      var selector = _c[_b];
      message += "\n  "
        .concat(blockedSelectors[selector] ? "🚫" : "➡️", " ")
        .concat(selector);
    }
  }
  console.log("".concat(message, "\n```"));
}
function getColorGamut() {
  for (var _i = 0, _a = ["rec2020", "p3", "srgb"]; _i < _a.length; _i++) {
    var gamut = _a[_i];
    if (matchMedia("(color-gamut: ".concat(gamut, ")")).matches) {
      return gamut;
    }
  }
  return void 0;
}
function areColorsInverted() {
  if (doesMatch$5("inverted")) {
    return true;
  }
  if (doesMatch$5("none")) {
    return false;
  }
  return void 0;
}
function doesMatch$5(value) {
  return matchMedia("(inverted-colors: ".concat(value, ")")).matches;
}
function areColorsForced() {
  if (doesMatch$4("active")) {
    return true;
  }
  if (doesMatch$4("none")) {
    return false;
  }
  return void 0;
}
function doesMatch$4(value) {
  return matchMedia("(forced-colors: ".concat(value, ")")).matches;
}
var maxValueToCheck = 100;
function getMonochromeDepth() {
  if (!matchMedia("(min-monochrome: 0)").matches) {
    return void 0;
  }
  for (var i4 = 0; i4 <= maxValueToCheck; ++i4) {
    if (matchMedia("(max-monochrome: ".concat(i4, ")")).matches) {
      return i4;
    }
  }
  throw new Error("Too high value");
}
function getContrastPreference() {
  if (doesMatch$3("no-preference")) {
    return 0;
  }
  if (doesMatch$3("high") || doesMatch$3("more")) {
    return 1;
  }
  if (doesMatch$3("low") || doesMatch$3("less")) {
    return -1;
  }
  if (doesMatch$3("forced")) {
    return 10;
  }
  return void 0;
}
function doesMatch$3(value) {
  return matchMedia("(prefers-contrast: ".concat(value, ")")).matches;
}
function isMotionReduced() {
  if (doesMatch$2("reduce")) {
    return true;
  }
  if (doesMatch$2("no-preference")) {
    return false;
  }
  return void 0;
}
function doesMatch$2(value) {
  return matchMedia("(prefers-reduced-motion: ".concat(value, ")")).matches;
}
function isTransparencyReduced() {
  if (doesMatch$1("reduce")) {
    return true;
  }
  if (doesMatch$1("no-preference")) {
    return false;
  }
  return void 0;
}
function doesMatch$1(value) {
  return matchMedia("(prefers-reduced-transparency: ".concat(value, ")"))
    .matches;
}
function isHDR() {
  if (doesMatch("high")) {
    return true;
  }
  if (doesMatch("standard")) {
    return false;
  }
  return void 0;
}
function doesMatch(value) {
  return matchMedia("(dynamic-range: ".concat(value, ")")).matches;
}
var M2 = Math;
var fallbackFn = function () {
  return 0;
};
function getMathFingerprint() {
  var acos = M2.acos || fallbackFn;
  var acosh = M2.acosh || fallbackFn;
  var asin = M2.asin || fallbackFn;
  var asinh = M2.asinh || fallbackFn;
  var atanh = M2.atanh || fallbackFn;
  var atan = M2.atan || fallbackFn;
  var sin = M2.sin || fallbackFn;
  var sinh = M2.sinh || fallbackFn;
  var cos = M2.cos || fallbackFn;
  var cosh = M2.cosh || fallbackFn;
  var tan = M2.tan || fallbackFn;
  var tanh = M2.tanh || fallbackFn;
  var exp = M2.exp || fallbackFn;
  var expm1 = M2.expm1 || fallbackFn;
  var log1p = M2.log1p || fallbackFn;
  var powPI = function (value) {
    return M2.pow(M2.PI, value);
  };
  var acoshPf = function (value) {
    return M2.log(value + M2.sqrt(value * value - 1));
  };
  var asinhPf = function (value) {
    return M2.log(value + M2.sqrt(value * value + 1));
  };
  var atanhPf = function (value) {
    return M2.log((1 + value) / (1 - value)) / 2;
  };
  var sinhPf = function (value) {
    return M2.exp(value) - 1 / M2.exp(value) / 2;
  };
  var coshPf = function (value) {
    return (M2.exp(value) + 1 / M2.exp(value)) / 2;
  };
  var expm1Pf = function (value) {
    return M2.exp(value) - 1;
  };
  var tanhPf = function (value) {
    return (M2.exp(2 * value) - 1) / (M2.exp(2 * value) + 1);
  };
  var log1pPf = function (value) {
    return M2.log(1 + value);
  };
  return {
    acos: acos(0.12312423423423424),
    acosh: acosh(1e308),
    acoshPf: acoshPf(1e154),
    asin: asin(0.12312423423423424),
    asinh: asinh(1),
    asinhPf: asinhPf(1),
    atanh: atanh(0.5),
    atanhPf: atanhPf(0.5),
    atan: atan(0.5),
    sin: sin(-1e300),
    sinh: sinh(1),
    sinhPf: sinhPf(1),
    cos: cos(10.000000000123),
    cosh: cosh(1),
    coshPf: coshPf(1),
    tan: tan(-1e300),
    tanh: tanh(1),
    tanhPf: tanhPf(1),
    exp: exp(1),
    expm1: expm1(1),
    expm1Pf: expm1Pf(1),
    log1p: log1p(10),
    log1pPf: log1pPf(10),
    powPI: powPI(-100),
  };
}
var defaultText = "mmMwWLliI0fiflO&1";
var presets = {
  /**
   * The default font. User can change it in desktop Chrome, desktop Firefox, IE 11,
   * Android Chrome (but only when the size is ≥ than the default) and Android Firefox.
   */
  default: [],
  /** OS font on macOS. User can change its size and weight. Applies after Safari restart. */
  apple: [{ font: "-apple-system-body" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  serif: [{ fontFamily: "serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  sans: [{ fontFamily: "sans-serif" }],
  /** User can change it in desktop Chrome and desktop Firefox. */
  mono: [{ fontFamily: "monospace" }],
  /**
   * Check the smallest allowed font size. User can change it in desktop Chrome, desktop Firefox and desktop Safari.
   * The height can be 0 in Chrome on a retina display.
   */
  min: [{ fontSize: "1px" }],
  /** Tells one OS from another in desktop Chrome. */
  system: [{ fontFamily: "system-ui" }],
};
function getFontPreferences() {
  return withNaturalFonts(function (document2, container) {
    var elements = {};
    var sizes = {};
    for (var _i = 0, _a = Object.keys(presets); _i < _a.length; _i++) {
      var key = _a[_i];
      var _b = presets[key],
        _c = _b[0],
        style = _c === void 0 ? {} : _c,
        _d = _b[1],
        text2 = _d === void 0 ? defaultText : _d;
      var element = document2.createElement("span");
      element.textContent = text2;
      element.style.whiteSpace = "nowrap";
      for (var _e = 0, _f = Object.keys(style); _e < _f.length; _e++) {
        var name_1 = _f[_e];
        var value = style[name_1];
        if (value !== void 0) {
          element.style[name_1] = value;
        }
      }
      elements[key] = element;
      container.append(document2.createElement("br"), element);
    }
    for (var _g = 0, _h = Object.keys(presets); _g < _h.length; _g++) {
      var key = _h[_g];
      sizes[key] = elements[key].getBoundingClientRect().width;
    }
    return sizes;
  });
}
function withNaturalFonts(action, containerWidthPx) {
  if (containerWidthPx === void 0) {
    containerWidthPx = 4e3;
  }
  return withIframe(function (_2, iframeWindow) {
    var iframeDocument = iframeWindow.document;
    var iframeBody = iframeDocument.body;
    var bodyStyle = iframeBody.style;
    bodyStyle.width = "".concat(containerWidthPx, "px");
    bodyStyle.webkitTextSizeAdjust = bodyStyle.textSizeAdjust = "none";
    if (isChromium()) {
      iframeBody.style.zoom = "".concat(1 / iframeWindow.devicePixelRatio);
    } else if (isWebKit()) {
      iframeBody.style.zoom = "reset";
    }
    var linesOfText = iframeDocument.createElement("div");
    linesOfText.textContent = __spreadArray(
      [],
      Array((containerWidthPx / 20) << 0),
      true
    )
      .map(function () {
        return "word";
      })
      .join(" ");
    iframeBody.appendChild(linesOfText);
    return action(iframeDocument, iframeBody);
  }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
}
function isPdfViewerEnabled() {
  return navigator.pdfViewerEnabled;
}
function getArchitecture() {
  var f2 = new Float32Array(1);
  var u8 = new Uint8Array(f2.buffer);
  f2[0] = Infinity;
  f2[0] = f2[0] - f2[0];
  return u8[3];
}
function getApplePayState() {
  var ApplePaySession = window.ApplePaySession;
  if (
    typeof (ApplePaySession === null || ApplePaySession === void 0
      ? void 0
      : ApplePaySession.canMakePayments) !== "function"
  ) {
    return -1;
  }
  if (willPrintConsoleError()) {
    return -3;
  }
  try {
    return ApplePaySession.canMakePayments() ? 1 : 0;
  } catch (error) {
    return getStateFromError(error);
  }
}
var willPrintConsoleError = isAnyParentCrossOrigin;
function getStateFromError(error) {
  if (
    error instanceof Error &&
    error.name === "InvalidAccessError" &&
    /\bfrom\b.*\binsecure\b/i.test(error.message)
  ) {
    return -2;
  }
  throw error;
}
function getPrivateClickMeasurement() {
  var _a;
  var link2 = document.createElement("a");
  var sourceId =
    (_a = link2.attributionSourceId) !== null && _a !== void 0
      ? _a
      : link2.attributionsourceid;
  return sourceId === void 0 ? void 0 : String(sourceId);
}
var STATUS_NO_GL_CONTEXT = -1;
var STATUS_GET_PARAMETER_NOT_A_FUNCTION = -2;
var validContextParameters = /* @__PURE__ */ new Set([
  10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962,
  2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107,
  32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969,
  32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024,
  34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818,
  34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004,
  36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938,
  // SAMPLE_ALPHA_TO_COVERAGE (32926) and SAMPLE_COVERAGE (32928) are excluded because they trigger a console warning
  // in IE, Chrome ≤ 59 and Safari ≤ 13 and give no entropy.
]);
var validExtensionParams = /* @__PURE__ */ new Set([
  34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449,
  // MAX_VIEWS_OVR
]);
var shaderTypes = ["FRAGMENT_SHADER", "VERTEX_SHADER"];
var precisionTypes = [
  "LOW_FLOAT",
  "MEDIUM_FLOAT",
  "HIGH_FLOAT",
  "LOW_INT",
  "MEDIUM_INT",
  "HIGH_INT",
];
var rendererInfoExtensionName = "WEBGL_debug_renderer_info";
var polygonModeExtensionName = "WEBGL_polygon_mode";
function getWebGlBasics(_a) {
  var _b, _c, _d, _e, _f, _g;
  var cache = _a.cache;
  var gl = getWebGLContext(cache);
  if (!gl) {
    return STATUS_NO_GL_CONTEXT;
  }
  if (!isValidParameterGetter(gl)) {
    return STATUS_GET_PARAMETER_NOT_A_FUNCTION;
  }
  var debugExtension = shouldAvoidDebugRendererInfo()
    ? null
    : gl.getExtension(rendererInfoExtensionName);
  return {
    version:
      ((_b = gl.getParameter(gl.VERSION)) === null || _b === void 0
        ? void 0
        : _b.toString()) || "",
    vendor:
      ((_c = gl.getParameter(gl.VENDOR)) === null || _c === void 0
        ? void 0
        : _c.toString()) || "",
    vendorUnmasked: debugExtension
      ? (_d = gl.getParameter(debugExtension.UNMASKED_VENDOR_WEBGL)) === null ||
        _d === void 0
        ? void 0
        : _d.toString()
      : "",
    renderer:
      ((_e = gl.getParameter(gl.RENDERER)) === null || _e === void 0
        ? void 0
        : _e.toString()) || "",
    rendererUnmasked: debugExtension
      ? (_f = gl.getParameter(debugExtension.UNMASKED_RENDERER_WEBGL)) ===
          null || _f === void 0
        ? void 0
        : _f.toString()
      : "",
    shadingLanguageVersion:
      ((_g = gl.getParameter(gl.SHADING_LANGUAGE_VERSION)) === null ||
      _g === void 0
        ? void 0
        : _g.toString()) || "",
  };
}
function getWebGlExtensions(_a) {
  var cache = _a.cache;
  var gl = getWebGLContext(cache);
  if (!gl) {
    return STATUS_NO_GL_CONTEXT;
  }
  if (!isValidParameterGetter(gl)) {
    return STATUS_GET_PARAMETER_NOT_A_FUNCTION;
  }
  var extensions = gl.getSupportedExtensions();
  var contextAttributes = gl.getContextAttributes();
  var unsupportedExtensions = [];
  var attributes = [];
  var parameters = [];
  var extensionParameters = [];
  var shaderPrecisions = [];
  if (contextAttributes) {
    for (
      var _i = 0, _b = Object.keys(contextAttributes);
      _i < _b.length;
      _i++
    ) {
      var attributeName = _b[_i];
      attributes.push(
        "".concat(attributeName, "=").concat(contextAttributes[attributeName])
      );
    }
  }
  var constants = getConstantsFromPrototype(gl);
  for (var _c = 0, constants_1 = constants; _c < constants_1.length; _c++) {
    var constant = constants_1[_c];
    var code2 = gl[constant];
    parameters.push(
      ""
        .concat(constant, "=")
        .concat(code2)
        .concat(
          validContextParameters.has(code2)
            ? "=".concat(gl.getParameter(code2))
            : ""
        )
    );
  }
  if (extensions) {
    for (
      var _d = 0, extensions_1 = extensions;
      _d < extensions_1.length;
      _d++
    ) {
      var name_1 = extensions_1[_d];
      if (
        (name_1 === rendererInfoExtensionName &&
          shouldAvoidDebugRendererInfo()) ||
        (name_1 === polygonModeExtensionName &&
          shouldAvoidPolygonModeExtensions())
      ) {
        continue;
      }
      var extension = gl.getExtension(name_1);
      if (!extension) {
        unsupportedExtensions.push(name_1);
        continue;
      }
      for (
        var _e = 0, _f = getConstantsFromPrototype(extension);
        _e < _f.length;
        _e++
      ) {
        var constant = _f[_e];
        var code2 = extension[constant];
        extensionParameters.push(
          ""
            .concat(constant, "=")
            .concat(code2)
            .concat(
              validExtensionParams.has(code2)
                ? "=".concat(gl.getParameter(code2))
                : ""
            )
        );
      }
    }
  }
  for (
    var _g = 0, shaderTypes_1 = shaderTypes;
    _g < shaderTypes_1.length;
    _g++
  ) {
    var shaderType = shaderTypes_1[_g];
    for (
      var _h = 0, precisionTypes_1 = precisionTypes;
      _h < precisionTypes_1.length;
      _h++
    ) {
      var precisionType = precisionTypes_1[_h];
      var shaderPrecision = getShaderPrecision(gl, shaderType, precisionType);
      shaderPrecisions.push(
        ""
          .concat(shaderType, ".")
          .concat(precisionType, "=")
          .concat(shaderPrecision.join(","))
      );
    }
  }
  extensionParameters.sort();
  parameters.sort();
  return {
    contextAttributes: attributes,
    parameters,
    shaderPrecisions,
    extensions,
    extensionParameters,
    unsupportedExtensions,
  };
}
function getWebGLContext(cache) {
  if (cache.webgl) {
    return cache.webgl.context;
  }
  var canvas2 = document.createElement("canvas");
  var context;
  canvas2.addEventListener("webglCreateContextError", function () {
    return (context = void 0);
  });
  for (var _i = 0, _a = ["webgl", "experimental-webgl"]; _i < _a.length; _i++) {
    var type = _a[_i];
    try {
      context = canvas2.getContext(type);
    } catch (_b) {}
    if (context) {
      break;
    }
  }
  cache.webgl = { context };
  return context;
}
function getShaderPrecision(gl, shaderType, precisionType) {
  var shaderPrecision = gl.getShaderPrecisionFormat(
    gl[shaderType],
    gl[precisionType]
  );
  return shaderPrecision
    ? [
        shaderPrecision.rangeMin,
        shaderPrecision.rangeMax,
        shaderPrecision.precision,
      ]
    : [];
}
function getConstantsFromPrototype(obj) {
  var keys = Object.keys(obj.__proto__);
  return keys.filter(isConstantLike);
}
function isConstantLike(key) {
  return typeof key === "string" && !key.match(/[^A-Z0-9_x]/);
}
function shouldAvoidDebugRendererInfo() {
  return isGecko();
}
function shouldAvoidPolygonModeExtensions() {
  return isChromium() || isWebKit();
}
function isValidParameterGetter(gl) {
  return typeof gl.getParameter === "function";
}
function getAudioContextBaseLatency() {
  var isAllowedPlatform = isAndroid() || isWebKit();
  if (!isAllowedPlatform) {
    return -2;
  }
  if (!window.AudioContext) {
    return -1;
  }
  var latency = new AudioContext().baseLatency;
  if (latency === null || latency === void 0) {
    return -1;
  }
  if (!isFinite(latency)) {
    return -3;
  }
  return latency;
}
function getDateTimeLocale() {
  if (!window.Intl) {
    return -1;
  }
  var DateTimeFormat = window.Intl.DateTimeFormat;
  if (!DateTimeFormat) {
    return -2;
  }
  var locale = DateTimeFormat().resolvedOptions().locale;
  if (!locale && locale !== "") {
    return -3;
  }
  return locale;
}
var sources = {
  // READ FIRST:
  // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-add-an-entropy-source
  // to learn how entropy source works and how to make your own.
  // The sources run in this exact order.
  // The asynchronous sources are at the start to run in parallel with other sources.
  fonts: getFonts,
  domBlockers: getDomBlockers,
  fontPreferences: getFontPreferences,
  audio: getAudioFingerprint,
  screenFrame: getScreenFrame,
  canvas: getCanvasFingerprint,
  osCpu: getOsCpu,
  languages: getLanguages,
  colorDepth: getColorDepth,
  deviceMemory: getDeviceMemory,
  screenResolution: getScreenResolution,
  hardwareConcurrency: getHardwareConcurrency,
  timezone: getTimezone,
  sessionStorage: getSessionStorage,
  localStorage: getLocalStorage,
  indexedDB: getIndexedDB,
  openDatabase: getOpenDatabase,
  cpuClass: getCpuClass,
  platform: getPlatform,
  plugins: getPlugins,
  touchSupport: getTouchSupport,
  vendor: getVendor,
  vendorFlavors: getVendorFlavors,
  cookiesEnabled: areCookiesEnabled,
  colorGamut: getColorGamut,
  invertedColors: areColorsInverted,
  forcedColors: areColorsForced,
  monochrome: getMonochromeDepth,
  contrast: getContrastPreference,
  reducedMotion: isMotionReduced,
  reducedTransparency: isTransparencyReduced,
  hdr: isHDR,
  math: getMathFingerprint,
  pdfViewerEnabled: isPdfViewerEnabled,
  architecture: getArchitecture,
  applePay: getApplePayState,
  privateClickMeasurement: getPrivateClickMeasurement,
  audioBaseLatency: getAudioContextBaseLatency,
  dateTimeLocale: getDateTimeLocale,
  // Some sources can affect other sources (e.g. WebGL can affect canvas), so it's important to run these sources
  // after other sources.
  webGlBasics: getWebGlBasics,
  webGlExtensions: getWebGlExtensions,
};
function loadBuiltinSources(options) {
  return loadSources(sources, options, []);
}
var commentTemplate = "$ if upgrade to Pro: https://fpjs.dev/pro";
function getConfidence(components) {
  var openConfidenceScore = getOpenConfidenceScore(components);
  var proConfidenceScore = deriveProConfidenceScore(openConfidenceScore);
  return {
    score: openConfidenceScore,
    comment: commentTemplate.replace(/\$/g, "".concat(proConfidenceScore)),
  };
}
function getOpenConfidenceScore(components) {
  if (isAndroid()) {
    return 0.4;
  }
  if (isWebKit()) {
    return isDesktopWebKit() && !(isWebKit616OrNewer() && isSafariWebKit())
      ? 0.5
      : 0.3;
  }
  var platform =
    "value" in components.platform ? components.platform.value : "";
  if (/^Win/.test(platform)) {
    return 0.6;
  }
  if (/^Mac/.test(platform)) {
    return 0.5;
  }
  return 0.7;
}
function deriveProConfidenceScore(openConfidenceScore) {
  return round(0.99 + 0.01 * openConfidenceScore, 1e-4);
}
function componentsToCanonicalString(components) {
  var result = "";
  for (var _i = 0, _a = Object.keys(components).sort(); _i < _a.length; _i++) {
    var componentKey = _a[_i];
    var component = components[componentKey];
    var value =
      "error" in component ? "error" : JSON.stringify(component.value);
    result += ""
      .concat(result ? "|" : "")
      .concat(componentKey.replace(/([:|\\])/g, "\\$1"), ":")
      .concat(value);
  }
  return result;
}
function componentsToDebugString(components) {
  return JSON.stringify(
    components,
    function (_key, value) {
      if (value instanceof Error) {
        return errorToObject(value);
      }
      return value;
    },
    2
  );
}
function hashComponents(components) {
  return x64hash128(componentsToCanonicalString(components));
}
function makeLazyGetResult(components) {
  var visitorIdCache;
  var confidence = getConfidence(components);
  return {
    get visitorId() {
      if (visitorIdCache === void 0) {
        visitorIdCache = hashComponents(this.components);
      }
      return visitorIdCache;
    },
    set visitorId(visitorId) {
      visitorIdCache = visitorId;
    },
    confidence,
    components,
    version,
  };
}
function prepareForSources(delayFallback) {
  if (delayFallback === void 0) {
    delayFallback = 50;
  }
  return requestIdleCallbackIfAvailable(delayFallback, delayFallback * 2);
}
function makeAgent(getComponents, debug) {
  var creationTime = Date.now();
  return {
    get: function (options) {
      return __awaiter(this, void 0, void 0, function () {
        var startTime, components, result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              startTime = Date.now();
              return [4, getComponents()];
            case 1:
              components = _a.sent();
              result = makeLazyGetResult(components);
              if (
                debug ||
                (options === null || options === void 0
                  ? void 0
                  : options.debug)
              ) {
                console.log(
                  "Copy the text below to get the debug data:\n\n```\nversion: "
                    .concat(result.version, "\nuserAgent: ")
                    .concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ")
                    .concat(startTime - creationTime, "\nvisitorId: ")
                    .concat(result.visitorId, "\ncomponents: ")
                    .concat(componentsToDebugString(components), "\n```")
                );
              }
              return [2, result];
          }
        });
      });
    },
  };
}
function monitor() {
  if (window.__fpjs_d_m || Math.random() >= 1e-3) {
    return;
  }
  try {
    var request = new XMLHttpRequest();
    request.open(
      "get",
      "https://m1.openfpcdn.io/fingerprintjs/v".concat(
        version,
        "/npm-monitoring"
      ),
      true
    );
    request.send();
  } catch (error) {
    console.error(error);
  }
}
function load(options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  return __awaiter(this, void 0, void 0, function () {
    var delayFallback, debug, getComponents;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          if ((_a = options.monitoring) !== null && _a !== void 0 ? _a : true) {
            monitor();
          }
          (delayFallback = options.delayFallback), (debug = options.debug);
          return [4, prepareForSources(delayFallback)];
        case 1:
          _b.sent();
          getComponents = loadBuiltinSources({ cache: {}, debug });
          return [2, makeAgent(getComponents, debug)];
      }
    });
  });
}
var index = { load, hashComponents, componentsToDebugString };
const effectModules = /* @__PURE__ */ Object.assign({
  "./effects/darkplace.js": () =>
    __vitePreload(
      () => import("./assets/darkplace-BfGCdkFG.js"),
      true ? [] : void 0
    ),
  "./effects/snowplace.js": () =>
    __vitePreload(
      () => import("./assets/snowplace-D9xVgA-e.js"),
      true ? [] : void 0
    ),
});
async function forceTheme(forceTheme2, forceVariant = null) {
  const currentThemeSet = document.documentElement.dataset.theme;
  const currentVariant = document.documentElement.dataset.variant;
  if (currentThemeSet != forceTheme2 || currentVariant != forceVariant) {
    console.warn("Forcing site theme to", forceTheme2, forceVariant);
    await theme(
      /**@type {import("../../defaults.js").ThemeInfo}*/
      DEFAULT_THEMES.get(forceTheme2),
      forceVariant
    );
  }
}
let styleElement = null;
let effectsModule = null;
let currentTheme = null;
let currentEffects = null;
async function theme(themeSet, variant = null, effects = null) {
  variant ??= "";
  let effectInfo;
  if (currentEffects) {
    effectsModule?.disable?.();
  }
  if (effects && (effectInfo = DEFAULT_EFFECTS.get(effects)) !== void 0) {
    const importer = effectModules[effectInfo.modulePath];
    if (importer) {
      effectsModule = await importer();
      await effectsModule?.enable?.(forceTheme);
      currentEffects = effectInfo;
    }
  }
  if (currentTheme !== themeSet) {
    const intermediate = document.createElement("link");
    intermediate.rel = "stylesheet";
    intermediate.type = "text/css";
    intermediate.href = "/css/theme-switch.css";
    intermediate.setAttribute("intermediate-temp", "true");
    await new Promise((resolve) => {
      intermediate.onload = resolve;
      document.head.appendChild(intermediate);
    });
    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.type = "text/css";
    link2.href = themeSet.css + "?v=" + themeSet.cssVersion;
    await new Promise(async (resolve) => {
      link2.onload = resolve;
      document.head.appendChild(link2);
    });
    setTimeout(() => document.head.removeChild(intermediate), 200);
    if (styleElement) {
      document.head.removeChild(styleElement);
    }
    styleElement = link2;
    currentTheme = themeSet;
    document.querySelectorAll("[theme]").forEach((element) => {
      const themeKey = element.getAttribute("theme");
      if (!themeKey) {
        return;
      }
      if (element.tagName == "IMG") {
        const imageElement =
          /**@type {HTMLImageElement}*/
          element;
        imageElement.src = themeSet[themeKey] || imageElement.src;
      } else {
        element.innerHTML = themeSet[themeKey] || element.innerHTML;
      }
    });
    document.documentElement.dataset.theme = themeSet.id;
  }
  document.documentElement.dataset.variant = variant;
}
const params = new URLSearchParams(window.location.search);
const boardParam = params.get("board");
const serverParam = params.get("server");
if (boardParam && serverParam) {
  if (localStorage.server != serverParam || localStorage.board != boardParam) {
    localStorage.server = serverParam;
    localStorage.board = boardParam;
    history.pushState(null, "", location.origin);
    window.location.reload();
  }
}
const debugParam = params.get("debug");
if (debugParam) {
  alert("Debug mode active: Errors will be output in alerts.");
  window.addEventListener("unhandledrejection", (e2) => {
    prompt(
      "Received window unhandledRejection event",
      JSON.stringify(
        {
          type: e2.type,
          reason: e2.reason,
        },
        null,
        2
      )
    );
  });
  window.addEventListener("error", (e2) => {
    prompt(
      "Received window error event",
      JSON.stringify(
        {
          type: e2.type,
          error: e2.error,
          message: e2.message,
        },
        null,
        2
      )
    );
  });
}
const postsFrame =
  /**@type {HTMLIFrameElement}*/
  $$1("#postsFrame");
const more =
  /**@type {HTMLElement}*/
  $$1("#more");
const spaceFiller =
  /**@type {HTMLElement}*/
  $$1("#spaceFiller");
const mainContent =
  /**@type {HTMLElement}*/
  $$1("#maincontent");
const viewport =
  /**@type {HTMLElement}*/
  $$1("#viewport");
const canvParent1 =
  /**@type {HTMLElement}*/
  $$1("#canvparent1");
const canvParent2 =
  /**@type {HTMLElement}*/
  $$1("#canvparent2");
const canvSelect =
  /**@type {HTMLElement}*/
  $$1("#canvselect");
const canvas =
  /**@type {HTMLCanvasElement}*/
  $$1("#canvas");
const placeChatMessages =
  /**@type {HTMLElement}*/
  $$1("#placeChatMessages");
const colours =
  /**@type {HTMLElement}*/
  $$1("#colours");
const modal =
  /**@type {HTMLDialogElement}*/
  $$1("#modal");
const modalInstall =
  /**@type {HTMLButtonElement}*/
  $$1("#modalInstall");
const templateImage =
  /**@type {HTMLImageElement}*/
  $$1("#templateImage");
const overlayMenuOld =
  /**@type {HTMLElement}*/
  $$1("#overlayMenuOld");
/**@type {import("./game-elements.js").PositionIndicator}*/
$$1("#positionIndicator");
/**@type {HTMLElement}*/
$$1("#idPosition");
/**@type {HTMLElement}*/
$$1("#idPositionPlacer");
const onlineCounter =
  /**@type {HTMLElement}*/
  $$1("#onlineCounter");
const canvasLock =
  /**@type {HTMLElement}*/
  $$1("#canvasLock");
const lockMessageLabel =
  /**@type {HTMLElement}*/
  $$1("#lockMessageLabel");
const namePanel =
  /**@type {HTMLElement}*/
  $$1("#namePanel");
const nameInput =
  /**@type {HTMLInputElement}*/
  document.getElementById("nameInput");
const placeButton =
  /**@type {HTMLButtonElement}*/
  $$1("#place");
const placeOkButton =
  /**@type {HTMLButtonElement}*/
  $$1("#pok");
const placeCancelButton =
  /**@type {HTMLButtonElement}*/
  $$1("#pcancel");
const palette =
  /**@type {HTMLElement}*/
  $$1("#palette");
/**@type {HTMLElement}*/
$$1("#channelDrop");
const channelDropMenu =
  /**@type {HTMLElement}*/
  $$1("#channelDropMenu");
const channelDropParent =
  /**@type {HTMLElement}*/
  $$1("#channelDropParent");
const channelEn =
  /**@type {HTMLElement}*/
  $$1("#channelEn");
const channelMine =
  /**@type {HTMLElement}*/
  $$1("#channelMine");
const channelMineButton =
  /**@type {HTMLButtonElement}*/
  $$1("#channelMineButton");
const channelEnButton =
  /**@type {HTMLButtonElement}*/
  $$1("#channelEnButton");
const channelMineName =
  /**@type {HTMLElement}*/
  $$1("#channelMineName");
const channelMineImg =
  /**@type {HTMLImageElement}*/
  $$1("#channelMineImg");
const chatMessages =
  /**@type {HTMLElement}*/
  $$1("#chatMessages");
const chatPreviousButton =
  /**@type {HTMLButtonElement}*/
  $$1("#chatPreviousButton");
const captchaOptions =
  /**@type {HTMLElement}*/
  $$1("#captchaOptions");
const turnstileMenu =
  /**@type {HTMLElement}*/
  $$1("#turnstileMenu");
const messageInput =
  /**@type {HTMLInputElement}*/
  $$1("#messageInput");
const messageTypePanel =
  /**@type {HTMLElement}*/
  $$1("#messageTypePanel");
const messageInputGifPanel =
  /**@type {HTMLElement}*/
  $$1("#messageInputGifPanel");
const messageReplyPanel =
  /**@type {HTMLElement}*/
  $$1("#messageReplyPanel");
const messageReplyLabel =
  /**@type {HTMLElement}*/
  $$1("#messageReplyLabel");
const messageCancelReplyButton =
  /**@type {HTMLButtonElement}*/
  $$1("#messageCancelReplyButton");
const punishmentNote =
  /** @type {HTMLElement}*/
  $$1("#punishmentNote");
const punishmentUserId =
  /** @type {HTMLElement}*/
  $$1("#punishmentUserId");
const punishmentStartDate =
  /** @type {HTMLElement}*/
  $$1("#punishmentStartDate");
const punishmentEndDate =
  /** @type {HTMLElement}*/
  $$1("#punishmentEndDate");
const punishmentReason =
  /** @type {HTMLElement}*/
  $$1("#punishmentReason");
const punishmentAppeal =
  /** @type {HTMLElement}*/
  $$1("#punishmentAppeal");
const punishmentMenu =
  /** @type {HTMLElement}*/
  $$1("#punishmentMenu");
const moderationMenu =
  /**@type {HTMLInputElement}*/
  $$1("#moderationMenu");
const modUserId =
  /**@type {HTMLInputElement}*/
  $$1("#modUserId");
const modMessageId =
  /**@type {HTMLInputElement}*/
  $$1("#modMessageId");
const modMessagePreview =
  /**@type {HTMLInputElement}*/
  $$1("#modMessagePreview");
const modDurationH =
  /**@type {HTMLInputElement}*/
  $$1("#modDurationH");
const modDurationM =
  /**@type {HTMLInputElement}*/
  $$1("#modDurationM");
const modDurationS =
  /**@type {HTMLInputElement}*/
  $$1("#modDurationS");
const modAffectsAll =
  /**@type {HTMLInputElement}*/
  $$1("#modAffectsAll");
const modReason =
  /**@type {HTMLInputElement}*/
  $$1("#modReason");
const modCloseButton =
  /**@type {HTMLButtonElement}*/
  $$1("#modCloseButton");
const modCancelButton =
  /**@type {HTMLButtonElement}*/
  $$1("#modCancelButton");
const captchaPopup =
  /**@type {HTMLDialogElement}*/
  $$1("#captchaPopup");
const modActionDelete =
  /**@type {HTMLInputElement}*/
  $$1("#modActionDelete");
const modActionKick =
  /**@type {HTMLInputElement}*/
  $$1("#modActionKick");
const modActionMute =
  /**@type {HTMLInputElement}*/
  $$1("#modActionMute");
const modActionBan =
  /**@type {HTMLInputElement}*/
  $$1("#modActionBan");
const modActionCaptcha =
  /**@type {HTMLInputElement}*/
  $$1("#modActionCaptcha");
const chatPanel =
  /**@type {HTMLElement}*/
  $$1("#chatPanel");
const messageEmojisPanel =
  /**@type {HTMLElement}*/
  $$1("#messageEmojisPanel");
const messageInputEmojiPanel =
  /**@type {HTMLElement}*/
  $$1("#messageInputEmojiPanel");
/**@type {HTMLElement}*/
$$1("#tlSelect");
/**@type {HTMLImageElement}*/
$$1("#tlImage");
/**@type {HTMLElement}*/
$$1("#timelapsePanel");
/**@type {HTMLButtonElement}*/
$$1("#tlConfirm");
/**@type {HTMLSelectElement}*/
$$1("#tlStartSel");
/**@type {HTMLSelectElement}*/
$$1("#tlEndSel");
/**@type {HTMLElement}*/
$$1("#tlTimer");
/**@type {HTMLInputElement}*/
$$1("#tlFps");
/**@type {HTMLInputElement}*/
$$1("#tlPlayDir");
const overlayInput =
  /**@type {HTMLInputElement}*/
  $$1("#overlayInput");
const chatContext =
  /**@type {HTMLElement}*/
  $$1("#chatContext");
const userNote =
  /**@type {HTMLElement}*/
  $$1("#userNote");
const mentionUserButton =
  /**@type {HTMLButtonElement}*/
  $$1("#mentionUserButton");
const replyUserButton =
  /**@type {HTMLButtonElement}*/
  $$1("#replyUserButton");
const blockUserButton =
  /**@type {HTMLButtonElement}*/
  $$1("#blockUserButton");
const changeMyNameButton =
  /**@type {HTMLElement}*/
  $$1("#changeMyNameButton");
const connProblems =
  /**@type {HTMLElement}*/
  $$1("#connproblems");
const chatAd =
  /**@type {HTMLAnchorElement}*/
  $$1("#chatAd");
const chatCloseButton =
  /**@type {HTMLButtonElement}*/
  $$1("#chatCloseButton");
const closeButton =
  /**@type {HTMLAnchorElement}*/
  $$1("#closebtn");
const chatButton =
  /**@type {HTMLAnchorElement}*/
  $$1("#chatbtn");
const messageOptionsButton =
  /**@type {HTMLAnchorElement}*/
  $$1("#messageOptionsButton");
const themeDrop =
  /**@type {HTMLElement}*/
  $$1("#themeDrop");
const themeDropName =
  /**@type {HTMLElement}*/
  $$1("#themeDropName");
const themeDropParent =
  /**@type {HTMLElement}*/
  $$1("#themeDropParent");
const advancedViewMenu =
  /**@type {HTMLElement}*/
  $$1("#advancedViewMenu");
const spectateMenu =
  /**@type {HTMLElement}*/
  $$1("#spectateMenu");
const spectateCloseButton =
  /**@type {HTMLElement}*/
  $$1("#spectateCloseButton");
const spectateUserIdInput =
  /**@type {HTMLInputElement}*/
  $$1("#spectateUserIdInput");
const spectateStatusLabel =
  /**@type {HTMLElement}*/
  $$1("#spectateStatusLabel");
let currentTurnstileWidget = null;
let spectateStartState = null;
window.addEventListener("palette", (e2) => {
  generatePalette();
  const binds = localStorage.paletteKeys || DEFAULT_PALETTE_KEYS;
  generateIndicators(binds);
  if (boardAlreadyRendered === true) {
    renderAll();
  }
});
window.addEventListener("cooldownend", (e2) => {
  if (!document.hasFocus()) {
    runAudio(AUDIOS.cooldownEnd);
  }
  updatePlaceButton();
});
window.addEventListener("cooldownstart", (e2) => {
  updatePlaceButton();
});
window.addEventListener("fetchboardfail", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { type } = e2.detail;
  if (type === "timeout") {
    showLoadingScreen("timeout");
  } else {
    showLoadingScreen();
  }
});
window.addEventListener("boardloaded", async (e2) => {
  renderAll();
  hideLoadingScreen();
});
window.addEventListener("size", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { width, height } = e2.detail;
  sizeChanged(width, height);
});
window.addEventListener("online", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { count } = e2.detail;
  onlineCounter.textContent = String(count);
  sendIpcMessage(postsFrame, "onlineCounter", count);
});
window.addEventListener("canvaslocked", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { locked, reason } = e2.detail;
  setCanvasLocked(locked);
  if (typeof reason === "string" && reason !== "") {
    alert(reason);
  }
});
window.addEventListener("pixels", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { pixels } = e2.detail;
  for (const pixel of pixels) {
    drawPixel(pixel.position, pixel.colour);
  }
});
window.addEventListener("rejectedpixel", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { position, colour } = e2.detail;
  drawPixel(position, colour);
});
window.addEventListener("spectatedpixel", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { position } = e2.detail;
  const x2 = position % WIDTH;
  const y22 = Math.floor(position / WIDTH);
  zoomIn();
  moveTo(x2, y22);
});
window.addEventListener("chatname", (e2) => {
  namePanel.style.visibility = "hidden";
});
window.addEventListener("livechatmessage", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { message, channel } = e2.detail;
  if (!cMessages.has(channel)) {
    cMessages.set(channel, []);
  }
  const newMessage = createLiveChatMessageElement(
    message.messageId,
    message.content,
    message.senderIntId,
    message.sendDate,
    message.senderChatName,
    message.repliesTo,
    message.reactions
  );
  applyLiveChatMessageInteractivity(newMessage, channel);
  const atScrollBottom =
    chatMessages.scrollTop + chatMessages.offsetHeight + 64 >=
    chatMessages.scrollHeight;
  const channelMessages = cMessages.get(channel);
  if (channelMessages) {
    channelMessages.push(newMessage);
    if (channelMessages.length > MAX_CHANNEL_MESSAGES) {
      channelMessages.shift();
    }
  }
  if (channel === currentChannel) {
    if (chatMessages.children.length > MAX_CHANNEL_MESSAGES) {
      chatMessages.children[0].remove();
    }
    chatMessages.insertAdjacentElement("beforeend", newMessage);
    newMessage.updateComplete.then(() => {
      if (atScrollBottom) {
        chatMessages.scrollTo(0, chatMessages.scrollHeight);
      }
    });
  }
});
window.addEventListener("placechatmessage", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { message } = e2.detail;
  if (!placeChat) {
    return;
  }
  const placeMessage =
    /**@type {import("./game-elements.js").PlaceChat}*/
    document.createElement("r-place-chat");
  placeMessage.positionIndex = message.positionIndex;
  placeMessage.content = message.content;
  placeMessage.senderIntId = message.senderIntId;
  placeMessage.senderChatName = message.senderChatName;
  placeMessage.sendDate = Date.now();
  const posX = message.positionIndex % WIDTH;
  const posY = Math.floor(message.positionIndex / WIDTH);
  setPlaceChatPosition(placeMessage, posX, posY);
  placeChatMessages.appendChild(placeMessage);
  setTimeout(() => {
    placeMessage.remove();
  }, localStorage.placeChatTime || 7e3);
});
window.addEventListener("livechatdelete", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { messageId } = e2.detail;
  for (const channel of cMessages.values()) {
    for (const messageEl of channel) {
      if (messageEl.messageId !== messageId) {
        continue;
      }
      channel.splice(channel.indexOf(messageEl), 1);
      messageEl.remove();
    }
  }
});
window.addEventListener("livechatreaction", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { messageId, reactorId, reactionKey } = e2.detail;
  for (const channel of cMessages.values()) {
    for (const messageEl of channel) {
      if (messageEl.messageId !== messageId) {
        continue;
      }
      const currentReactions = messageEl.reactions;
      const reactors =
        currentReactions?.get(reactionKey) || /* @__PURE__ */ new Set();
      if (![...reactors].find((reactor) => reactor.intId == reactorId)) {
        const newReactions = currentReactions
          ? new Map(currentReactions)
          : /* @__PURE__ */ new Map();
        reactors.add({
          intId: reactorId,
          chatName: intIdNames.get(reactorId) ?? null,
        });
        newReactions.set(reactionKey, reactors);
        messageEl.reactions = newReactions;
      }
    }
  }
});
function handleTextCaptcha({ options, imageData }) {
  captchaOptions.innerHTML = "";
  let captchaSubmitted = false;
  for (const text2 of options) {
    const button = document.createElement("button");
    button.textContent = text2;
    captchaOptions.appendChild(button);
    button.addEventListener("click", (event) => {
      if (captchaSubmitted || !text2) {
        return console.error("Could not send captcha response. No text?");
      }
      captchaSubmitted = true;
      sendIpcMessage(wsCapsule, "sendCaptchaResult", text2);
      captchaOptions.style.pointerEvents = "none";
    });
  }
  captchaPopup.showModal();
  captchaOptions.style.pointerEvents = "all";
  const imageBlob = new Blob([imageData], { type: "image/png" });
  if (webGLSupported) {
    updateImgCaptchaCanvas(imageBlob);
  } else {
    updateImgCaptchaCanvasFallback(imageBlob);
  }
}
addIpcMessageHandler("handleTextCaptcha", handleTextCaptcha);
function handleEmojiCaptcha({ options, imageData }) {
  captchaOptions.innerHTML = "";
  let captchaSubmitted = false;
  for (const emoji of options) {
    let submitCaptcha = function () {
      if (captchaSubmitted || !emoji) {
        return console.error("Could not send captcha response. No emoji?");
      }
      captchaSubmitted = true;
      sendIpcMessage(wsCapsule, "sendCaptchaResult", emoji);
      captchaOptions.style.pointerEvents = "none";
      clearCaptchaCanvas();
    };
    const buttonParent = document.createElement("button");
    buttonParent.classList.add("captcha-options-button");
    buttonParent.setAttribute("value", emoji);
    const emojiImg = document.createElement("img");
    emojiImg.src = `./tweemoji/${emoji.codePointAt(0)?.toString(16)}.png`;
    emojiImg.alt = emoji;
    emojiImg.title = emoji;
    emojiImg.fetchPriority = "high";
    emojiImg.addEventListener("load", (event) => {
      buttonParent.classList.add("loaded");
    });
    buttonParent.appendChild(emojiImg);
    captchaOptions.appendChild(buttonParent);
    buttonParent.addEventListener("click", submitCaptcha);
    emojiImg.addEventListener("click", submitCaptcha);
    buttonParent.addEventListener("touchend", submitCaptcha);
    emojiImg.addEventListener("touchend", submitCaptcha);
  }
  captchaPopup.showModal();
  captchaOptions.style.pointerEvents = "all";
  const imageBlob = new Blob([imageData], { type: "image/png" });
  if (webGLSupported) {
    updateImgCaptchaCanvas(imageBlob);
  } else {
    updateImgCaptchaCanvasFallback(imageBlob);
  }
}
addIpcMessageHandler("handleEmojiCaptcha", handleEmojiCaptcha);
function handleCaptchaSuccess() {
  captchaPopup.close();
}
addIpcMessageHandler("handleCaptchaSuccess", handleCaptchaSuccess);
function handleTurnstile(siteKey) {
  const siteVariant = document.documentElement.dataset.variant;
  const turnstileTheme = siteVariant === "dark" ? "dark" : "light";
  turnstileMenu.setAttribute("open", "true");
  if (currentTurnstileWidget) {
    currentTurnstileWidget.destroy();
  }
  const turnstileContainer = document.getElementById("turnstileContainer");
  currentTurnstileWidget = new TurnstileWidget(turnstileContainer, {
    sitekey: siteKey,
    theme: turnstileTheme,
    language: lang,
    onVerify: (token) => {
      sendIpcMessage(wsCapsule, "sendTurnstileResult", token);
    },
    onError: (error) => {
      console.error("Turnstile error:", error);
    },
    onLoad: (widgetId) => {
      console.log("Turnstile loaded successfully");
    },
  });
}
addIpcMessageHandler("handleTurnstile", handleTurnstile);
function handleTurnstileSuccess() {
  turnstileMenu.removeAttribute("open");
}
addIpcMessageHandler("handleTurnstileSuccess", handleTurnstileSuccess);
window.addEventListener("punishment", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const info = e2.detail;
  if (info.state === PUNISHMENT_STATE.mute) {
    messageInput.disabled = true;
    punishmentNote.innerHTML =
      "You have been <strong>muted</strong>, you cannot send messages in live chat.";
  } else if (info.state === PUNISHMENT_STATE.ban) {
    setCanvasLocked(true);
    messageInput.disabled = true;
    canvasLock.style.display = "flex";
    punishmentNote.innerHTML =
      "You have been <strong>banned</strong> from placing on the canvas or sending messages in live chat.";
  }
  punishmentUserId.textContent = `Your User ID: #${intId}`;
  punishmentStartDate.textContent = `Started on: ${new Date(
    info.startDate
  ).toLocaleString()}`;
  punishmentEndDate.textContent = `Ending on: ${new Date(
    info.endDate
  ).toLocaleString()}`;
  punishmentReason.textContent = `Reason: ${info.reason}`;
  punishmentAppeal.textContent = `Appeal status: ${
    info.appeal && info.appeal !== "null" ? info.appeal : "Unappealable"
  }`;
  punishmentMenu.setAttribute("open", "true");
});
window.addEventListener("spectating", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { userIntId } = e2.detail;
  startedSpectating(userIntId);
});
window.addEventListener("unspectating", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { userIntId, reason } = e2.detail;
  stoppedSpectating(userIntId, reason);
});
window.addEventListener("disconnect", (e2) => {
  if (!(e2 instanceof CustomEvent)) {
    throw new Error("Window event was not of type CustomEvent");
  }
  const { code: code2, reason } = e2.detail;
  if (code2 === 1006 && !sessionStorage.loadError) {
    sessionStorage.loadError = "1";
    window.location.reload();
    console.log(
      "Unexpected disconnect code 10006: Attempting automated reload"
    );
  }
  console.log("Disconnected from server with code:", code2, `(${reason})`);
  showLoadingScreen("disconnected", reason);
});
function resizePostsFrame() {
  if (!postsFrame) {
    return;
  }
  const calcHeight = postsFrame.contentWindow?.document.body.scrollHeight || 0;
  postsFrame.height = String(calcHeight);
  postsFrame.style.minHeight = calcHeight + "px";
}
postsFrame.addEventListener("load", resizePostsFrame);
function openOverlayMenuOld() {
  if (enableNewOverlayMenu === true) {
    openOverlayMenu();
  } else {
    overlayMenuOld.setAttribute("open", "true");
  }
}
function scrollToPosts() {
  postsFrame.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
}
more.addEventListener(
  "scroll",
  function (e2) {
    const moreMaxScroll = more.scrollHeight - more.clientHeight;
    if (moreMaxScroll - more.scrollTop < 256) {
      sendIpcMessage(postsFrame, "tryLoadBottomPosts");
    }
    const dialogTopHeight = Math.max(
      more.scrollTop - spaceFiller.offsetHeight + window.innerHeight / 2,
      spaceFiller.offsetHeight / 2
    );
    sendIpcMessage(postsFrame, "updateDialogTop", dialogTopHeight);
  },
  { passive: true }
);
const placeContext =
  /**@type {HTMLElement}*/
  $$1("#placeContext");
placeContext.addEventListener("mousedown", function (e2) {
  e2.stopPropagation();
});
const placeContextReportButton =
  /**@type {HTMLButtonElement}*/
  $$1("#placeContextReportButton");
placeContextReportButton.addEventListener("click", function (e2) {});
const placeContextInfoButton =
  /**@type {HTMLButtonElement}*/
  $$1("#placeContextInfoButton");
placeContextInfoButton.addEventListener("click", function (e2) {
  const px = Number(placeContext.dataset.x);
  const py = Number(placeContext.dataset.y);
  showPlacerInfo(px, py);
});
if (!localStorage.vip?.startsWith("!")) {
  const placeContextModItem =
    /**@type {HTMLElement}*/
    $$1("#placeContextModItem");
  placeContextModItem.setAttribute("hidden", "");
}
async function showPlacerInfo(x2, y22) {
  const id = intIdPositions.get(Math.floor(x2) + Math.floor(y22) * WIDTH);
  if (id === void 0) {
    alert("Could not find details of who placed pixel at current location...");
    return;
  }
  let name = intIdNames.get(id);
  if (name === void 0) {
    const httpServerUrl2 = (localStorage.server || DEFAULT_SERVER)
      .replace("wss://", "https://")
      .replace("ws://", "http://");
    try {
      const res2 = await fetch(`${httpServerUrl2}/users/${id}`);
      if (!res2.ok) {
        throw new Error(
          `Could not fetch user info: ${res2.status} ${res2.statusText}`
        );
      }
      const user = await res2.json();
      if (!user) {
        throw new Error("User was null");
      }
      name = user.chatName;
    } catch (e2) {
      alert(
        "Could not find details of who placed pixel at current location..."
      );
      console.error("Couldn't show placer info:", e2);
    }
  }
  alert(`Details of who placed at ${Math.floor(x2)}, ${Math.floor(y22)}:
Name: ${name || "anon"}
User ID: #${id}`);
}
let pwaPrompter = null;
modalInstall.disabled = true;
window.addEventListener("beforeinstallprompt", function (e2) {
  e2.preventDefault();
  pwaPrompter = e2;
  modalInstall.disabled = false;
});
modalInstall.addEventListener("click", () => {
  pwaPrompter?.prompt();
});
document.body.addEventListener("keydown", function (e2) {
  if (!e2.isTrusted) {
    return;
  }
  if (!document.activeElement || !("value" in document.activeElement)) {
    if (e2.key === "O" && e2.shiftKey) {
      e2.preventDefault();
      overlayMenuOld.toggleAttribute("open");
    } else if (
      e2.key === "M" &&
      e2.shiftKey &&
      localStorage.vip?.startsWith("!")
    ) {
      e2.preventDefault();
      moderationMenu.toggleAttribute("open");
    } else if (e2.key === "V" && e2.shiftKey && boardRenderer) {
      e2.preventDefault();
      advancedViewMenu.toggleAttribute("open");
    } else if (
      e2.key === "S" &&
      e2.shiftKey &&
      localStorage.vip?.startsWith("!")
    ) {
      e2.preventDefault();
      spectateMenu.toggleAttribute("open");
    } else if (e2.key === "/") {
      e2.preventDefault();
      openChatPanel();
      messageInput.focus();
    } else if (e2.key === "Escape") {
      e2.preventDefault();
      modal.showModal();
    } else if (e2.key === "=" || e2.key == "+") {
      e2.preventDefault();
      setZ(z2 + 0.02);
      pos();
    } else if (e2.key === "-") {
      e2.preventDefault();
      setZ(z2 - 0.02);
      pos();
    }
    let moveEaseI = 10;
    const repeatFunc = setInterval(function () {
      const step = moveEaseI / 55;
      switch (e2.code) {
        case "ArrowLeft":
          setX(x - step);
          break;
        case "ArrowUp":
          setY(y2 - step);
          break;
        case "ArrowRight":
          setX(x + step);
          break;
        case "ArrowDown":
          setY(y2 + step);
          break;
      }
      pos();
      moveEaseI--;
      if (moveEaseI <= 0) {
        clearInterval(repeatFunc);
      }
    }, 16);
  }
  if (
    onCooldown ||
    canvasLocked ||
    placementMode !== PLACEMENT_MODE.selectPixel
  ) {
    return;
  }
  if (
    e2.key == "Enter" &&
    (!document.activeElement || !("value" in document.activeElement))
  ) {
    handlePixelPlace(e2);
    return;
  }
  let keyIndex = null;
  if (document.activeElement != document.body) {
    return;
  }
  keyIndex = (localStorage.paletteKeys || DEFAULT_PALETTE_KEYS).indexOf(e2.key);
  if (keyIndex == -1) {
    return;
  }
  if (palette.style.transform == "translateY(100%)") {
    showPalette();
  }
  for (let c2 = 0; c2 < colours.children.length; c2++) {
    const indicator =
      /**@type {HTMLElement}*/
      colours.children[c2].firstChild;
    indicator.style.visibility = "visible";
  }
  let colourI = [...Array.from(colours.children)].indexOf(
    colours.children[keyIndex]
  );
  if (colourI < 0) {
    return;
  }
  selectColour(keyIndex);
});
function setCanvasLocked(locked, lockMessage = null) {
  canvasLock.style.display = locked ? "flex" : "none";
  if (locked) {
    placeOkButton.classList.remove("enabled");
    unselectColour();
    if (!lockMessage) {
      translate$1("lockMessage").then((translated) => {
        lockMessageLabel.textContent = translated;
      });
    } else {
      lockMessageLabel.textContent = lockMessage;
    }
  } else {
    placeOkButton.classList.add("enabled");
  }
  placeOkButton.disabled = locked;
}
function sizeChanged(width, height) {
  canvas.width = width;
  canvas.height = height;
  canvParent1.style.width = width + "px";
  canvParent1.style.height = height + "px";
  canvParent2.style.width = width + "px";
  canvParent2.style.height = height + "px";
  placeChatMessages.style.width = width + "px";
  placeChatMessages.style.width = height + "px";
  setX(+localStorage.x || width / 2);
  setY(+localStorage.y || height / 2);
  setZ(+localStorage.z || 0.2);
  for (const [key, value] of new URLSearchParams(window.location.search)) {
    switch (key) {
      // Only for numeric value params
      case "x": {
        setX(parseInt(value, 10) || 0);
        pos();
        break;
      }
      case "y": {
        setY(parseInt(value, 10) || 0);
        pos();
        break;
      }
      case "z": {
        setZ(parseInt(value, 10) || 0);
        pos();
        break;
      }
      case "overlay": {
        overlayInfo = JSON.parse(value);
        const imageData = base64ToBlob(overlayInfo.data, overlayInfo.type);
        templateImage.src = URL.createObjectURL(imageData);
        overlayInfo.x = overlayInfo.x || 0;
        overlayInfo.y = overlayInfo.y || 0;
        templateImage.style.transform = `translate(${overlayInfo.x}px, ${overlayInfo.y}px)`;
        templateImage.style.opacity = String(overlayInfo.opacity || 0.8);
        setX(overlayInfo.x);
        setY(overlayInfo.y);
        setZ(Math.min(Math.max(z2, minZoom), 1));
        pos();
        openOverlayMenuOld();
        break;
      }
    }
  }
  onMainContentResize();
}
function onMainContentResize() {
  setMinZoom(
    Math.min(innerWidth / canvas.width, viewport.offsetHeight / canvas.height) /
      100
  );
  pos();
}
let boardAlreadyRendered = false;
function renderAll() {
  const img = new ImageData(canvas.width, canvas.height);
  const data = new Uint32Array(img.data.buffer);
  if (BOARD) {
    for (let i4 = 0; i4 < BOARD.length; i4++) {
      data[i4] = PALETTE[BOARD[i4]];
    }
    if (RAW_BOARD && CHANGES && SOCKET_PIXELS) {
      boardRenderer?.setSources(
        RAW_BOARD,
        CHANGES,
        SOCKET_PIXELS,
        new Uint32Array(PALETTE),
        WIDTH,
        HEIGHT
      );
    }
  }
  if (canvasCtx) {
    canvasCtx.putImageData(img, 0, 0);
    canvasCtx.getImageData(0, 0, 1, 1);
    boardAlreadyRendered = true;
  }
}
const u32Colour = new Uint32Array(1);
const u8ArrColour = new Uint8Array(u32Colour.buffer);
function drawPixel(index2, colour) {
  u32Colour[0] = PALETTE[colour];
  if (canvasCtx) {
    const x2 = index2 % WIDTH;
    const y22 = Math.floor(index2 / WIDTH);
    canvasCtx.fillStyle =
      "#" +
      (u8ArrColour[0] < 16 ? "0" : "") +
      u8ArrColour[0].toString(16) +
      (u8ArrColour[1] < 16 ? "0" : "") +
      u8ArrColour[1].toString(16) +
      (u8ArrColour[2] < 16 ? "0" : "") +
      u8ArrColour[2].toString(16) +
      (u8ArrColour[3] < 16 ? "0" : "") +
      u8ArrColour[3].toString(16);
    canvasCtx.clearRect(x2, y22, 1, 1);
    canvasCtx.fillRect(x2, y22, 1, 1);
  }
  if (boardRenderer) {
    boardRenderer.redrawSocketPixel(index2, colour);
  }
}
let focused = true;
let selectedColour = -1;
function setFocused(state) {
  if (focused !== state) {
    focused = state;
  }
}
window.addEventListener("blur", () => {
  setFocused(false);
});
window.addEventListener("focus", () => {
  setFocused(true);
});
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    setFocused(true);
  } else {
    setFocused(false);
  }
});
function handlePixelPlace(e2) {
  if (!(e2 instanceof Event) || !e2.isTrusted) {
    return;
  }
  if (
    !focused ||
    connectStatus !== "connected" ||
    (cooldownEndDate !== null && cooldownEndDate > Date.now())
  ) {
    return;
  }
  if (!placeOkButton.classList.contains("enabled")) {
    return;
  }
  const position = Math.floor(x) + Math.floor(y2) * WIDTH;
  sendIpcMessage(wsCapsule, "putPixel", { position, colour: selectedColour });
  const now = Date.now();
  const clientServerLatency = 50;
  setCooldown(now + COOLDOWN + clientServerLatency);
  drawPixel(position, selectedColour);
  hideIndicators();
  placeOkButton.classList.remove("enabled");
  canvSelect.style.background = "";
  canvSelect.children[0].style.display = "block";
  canvSelect.style.outline = "";
  canvSelect.style.boxShadow = "";
  palette.style.transform = "translateY(100%)";
  runAudio(AUDIOS.cooldownStart);
  if (!mobile) {
    unselectColour();
  }
}
placeOkButton.addEventListener("click", handlePixelPlace);
function handlePlaceButtonClicked(e2) {
  if (!(e2 instanceof Event) || !e2.isTrusted) {
    return;
  }
  if (
    connectStatus === "connected" &&
    cooldownEndDate !== null &&
    cooldownEndDate < Date.now()
  ) {
    zoomIn();
    showPalette();
    if (isColourSelected()) {
      placeOkButton.classList.add("enabled");
      canvSelect.style.background =
        colours.children[selectedColour].style.background;
      canvSelect.children[0].style.display = "none";
      canvSelect.style.outline = "8px white solid";
      canvSelect.style.boxShadow = "0px 2px 4px 0px rgb(0 0 0 / 50%)";
    }
  } else {
    runAudio(AUDIOS.invalid);
  }
}
placeButton.addEventListener("click", handlePlaceButtonClicked);
function handlePlaceCancelClicked(e2) {
  if (!(e2 instanceof Event) || !e2.isTrusted) {
    return;
  }
  runAudio(AUDIOS.closePalette);
  canvSelect.style.background = "";
  palette.style.transform = "translateY(100%)";
  if (isColourSelected()) {
    unselectColour();
  }
  placeOkButton.classList.remove("enabled");
  canvSelect.children[0].style.display = "block";
  canvSelect.style.outline = "";
  canvSelect.style.boxShadow = "";
  hideIndicators();
}
placeCancelButton.addEventListener("click", handlePlaceCancelClicked);
let cooldownInterval = null;
let currentResolution = null;
async function updatePlaceButton() {
  let innerHTML = "???";
  if (connectStatus === "connecting") {
    innerHTML = await translate$1("connecting");
  } else if (connectStatus === "disconnected") {
    innerHTML = `<span style="color:#f50; white-space: nowrap;">${await translate$1(
      "connectingFail"
    )}</span>`;
    clearCooldownInterval();
  } else if (connectStatus === "connected") {
    const now = Date.now();
    const endDate = cooldownEndDate ?? 0;
    const left = endDate - now;
    const leftS = Math.floor(left / 1e3);
    if (left > 0) {
      if (leftS >= 1) {
        const h2 = String(Math.floor(leftS / 3600)).padStart(2, "0");
        const m2 = String(Math.floor((leftS / 60) % 60)).padStart(2, "0");
        const s2 = String(leftS % 60).padStart(2, "0");
        innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20" style="height: 1.1rem; vertical-align: top;">
						<path d="M13.558 14.442l-4.183-4.183V4h1.25v5.741l3.817 3.817-.884.884z"></path>
						<path d="M10 19.625A9.625 9.625 0 1119.625 10 9.636 9.636 0 0110 19.625zm0-18A8.375 8.375 0 1018.375 10 8.384 8.384 0 0010 1.625z"></path>
					</svg> ${h2}:${m2}:${s2}`;
        startCooldownInterval(500);
      } else {
        innerHTML = `<span style="color:#f50;">${left}ms</span>`;
        startCooldownInterval(100);
      }
    } else {
      innerHTML = await translate$1("placeTile");
      clearCooldownInterval();
    }
  }
  placeButton.innerHTML = innerHTML;
  placeButton.disabled = onCooldown;
}
function startCooldownInterval(resolution) {
  if (cooldownInterval && currentResolution === resolution) {
    return;
  }
  clearCooldownInterval();
  currentResolution = resolution;
  cooldownInterval = setInterval(updatePlaceButton, resolution);
}
function clearCooldownInterval() {
  if (cooldownInterval) {
    clearInterval(cooldownInterval);
    cooldownInterval = null;
    currentResolution = null;
  }
}
function runSelectColourAudio(colourIndex) {
  if (selectColourSample) {
    let note = selectColourSample.baseNote;
    if (enableMelodicPalette) {
      const naturals = getNaturalNotes(4, PALETTE.length);
      note = naturals[colourIndex];
    }
    playSample(
      selectColourSample.audioBuffer,
      selectColourSample.baseNote,
      note
    );
  } else {
    runAudio(AUDIOS.selectColour);
  }
}
function selectColour(colourIndex) {
  const oldColour = colours.children[selectedColour];
  if (oldColour) {
    oldColour.classList.remove("sel");
  }
  selectedColour = colourIndex;
  const clickedColour = colours.children[selectedColour];
  canvSelect.style.background = clickedColour.style.background;
  clickedColour.classList.add("sel");
  placeOkButton.classList.add("enabled");
  canvSelect.children[0].style.display = "none";
  canvSelect.style.outline = "8px white solid";
  canvSelect.style.boxShadow = "0px 2px 4px 0px rgb(0 0 0 / 50%)";
  runSelectColourAudio(colourIndex);
}
function unselectColour() {
  colours.children[selectedColour].classList.remove("sel");
  selectedColour = -1;
}
function isColourSelected() {
  return selectedColour !== -1;
}
function handleColourClicked(e2) {
  if (!(e2 instanceof Event) || !e2.isTrusted) {
    return;
  }
  const clickedColour =
    /**@type {HTMLElement}*/
    e2.target;
  if (!clickedColour || !clickedColour.dataset.index) {
    return;
  }
  const i4 = parseInt(clickedColour.dataset.index);
  if (
    Number.isNaN(i4) ||
    i4 < PALETTE_USABLE_REGION.start ||
    i4 >= PALETTE_USABLE_REGION.end
  ) {
    return;
  }
  selectColour(i4);
  hideIndicators();
}
colours.addEventListener("click", handleColourClicked);
const webGLSupported = (() => {
  let supported = true;
  const glTestCanvas = document.createElement("canvas");
  try {
    supported = glTestCanvas.getContext("webgl2") !== null;
  } catch (e2) {
    supported = false;
  }
  return supported;
})();
if (!webGLSupported) {
  console.error("Client doesn't support WebGL! Some site features may break!");
}
const mobile = window.matchMedia("(orientation: portrait)").matches;
let extraLanguage = lang == "en" ? "tr" : lang;
const cMessages = /* @__PURE__ */ new Map([
  [extraLanguage, []],
  ["en", []],
]);
let chatPreviousLoadDebounce = false;
let chatPreviousAutoLoad = false;
let currentChannel = lang;
extraChannel(extraLanguage);
initChannelDrop();
switchLanguageChannel(currentChannel);
function initChannelDrop() {
  let containsMy = false;
  channelDropMenu.innerHTML = "";
  for (const [code2, info] of LANG_INFOS) {
    if (code2 == lang) {
      containsMy = true;
    }
    const el = document.createElement("li");
    el.innerHTML = `<button type="button"><span>${info.name}</span> <img src="${info.flag}" style="height: 24px;"></button>`;
    el.dataset.lang = code2;
    channelDropMenu.appendChild(el);
  }
  if (!containsMy) {
    const el = document.createElement("li");
    el.innerHTML = `<span>${lang}</span>`;
    el.dataset.lang = lang;
    channelDropMenu.appendChild(el);
  }
}
channelDropMenu.addEventListener("click", function (e2) {
  let target = e2.target;
  while (target instanceof HTMLElement && target != channelDropMenu) {
    if (target.nodeName != "LI") {
      target = target.parentElement;
      continue;
    }
    const lang2 = target.dataset.lang;
    if (!lang2) {
      break;
    }
    if (lang2 != extraLanguage && lang2 != "en") {
      extraChannel(lang2);
    }
    switchLanguageChannel(lang2);
    e2.stopPropagation();
    channelDropParent.removeAttribute("open");
    break;
  }
});
channelMineButton.addEventListener("click", function (e2) {
  switchLanguageChannel(extraLanguage);
});
channelEnButton.addEventListener("click", function (e2) {
  switchLanguageChannel("en");
});
function extraChannel(code2) {
  let info = LANG_INFOS.get(code2);
  channelMineName.innerText = code2.toUpperCase();
  channelMineImg.src = info?.flag || "/svg/flag-unknown.svg";
  extraLanguage = code2;
  cMessages.set(code2, cMessages.get(code2) || []);
}
function switchLanguageChannel(selected) {
  channelMine.style.opacity = "0.5";
  channelEn.style.opacity = "0.5";
  if (currentChannel != selected) {
    chatCancelReplies();
  }
  currentChannel = selected;
  chatMessages.style.direction = LANG_INFOS.get(selected)?.rtl ? "rtl" : "ltr";
  if (selected == "en") {
    channelEn.style.opacity = "1";
  } else if (selected == extraLanguage) {
    channelMine.style.opacity = "1";
  }
  chatMessages.innerHTML = "";
  chatPreviousAutoLoad = false;
  const messageRenderPromises = [];
  if (cMessages.get(selected)?.length) {
    for (const messageEl of cMessages.get(selected) ?? []) {
      messageRenderPromises.push(messageEl.updateComplete);
      chatMessages.appendChild(messageEl);
    }
    Promise.all(messageRenderPromises).then(() => {
      chatMessages.scrollTo(0, chatMessages.scrollHeight);
    });
  }
  const oldestMessage =
    /**@type {import("./game-elements.js").LiveChatMessage|null}*/
    chatMessages.children[0];
  sendIpcMessage(wsCapsule, "requestLoadChannelPrevious", {
    channel: currentChannel,
    anchorMsgId: oldestMessage?.messageId || 0,
    msgCount: 32,
  });
}
function createLiveChatMessageElement(
  messageId,
  content,
  senderId,
  sendDate,
  senderChatName = null,
  repliesTo = null,
  reactions = null
) {
  const message =
    /**@type {import("./game-elements.js").LiveChatMessage}*/
    document.createElement("r-live-chat-message");
  message.messageId = messageId;
  message.content = content;
  message.senderIntId = senderId;
  message.senderChatName = senderChatName;
  message.sendDate = sendDate;
  message.repliesTo = repliesTo;
  message.reactions = reactions
    ? new Map(
        Array.from(reactions, ([key, userIds]) => [
          key,
          new Set(
            [...userIds].map((userId) => ({
              intId: userId,
              chatName: intIdNames.get(userId) ?? null,
            }))
          ),
        ])
      )
    : null;
  return message;
}
function applyLiveChatMessageInteractivity(message, channel = "") {
  message.addEventListener("coordinate-click", (e2) => {
    if (!(e2 instanceof CustomEvent)) {
      throw new Error("Message event was not of type CustomEvent");
    }
    const newX = e2.detail.x ?? x;
    const newY = e2.detail.y ?? y2;
    const params2 = new URLSearchParams(window.location.search);
    params2.set("x", String(newX));
    params2.set("y", String(newY));
    const newUrl = `${window.location.pathname}?${params2.toString()}`;
    window.history.pushState({}, "", newUrl);
    pos(newX, newY);
  });
  message.addEventListener("name-click", (e2) => {
    if (!(e2 instanceof CustomEvent)) {
      throw new Error("Message event was not of type CustomEvent");
    }
    const { messageId, senderId } = e2.detail;
    if (messageId > 0) {
      chatMentionUser(senderId);
    }
  });
  message.addEventListener("context-menu", (e2) => {
    const mouseEvent =
      /**@type {import("./game-elements.js").LiveChatMouseEvent}*/
      e2;
    if (mouseEvent.messageId > 0) {
      onChatContext(mouseEvent, mouseEvent.senderId, mouseEvent.messageId);
    }
  });
  message.addEventListener("report-click", (e2) => {
    if (!(e2 instanceof CustomEvent)) {
      throw new Error("Message event was not of type CustomEvent");
    }
    const { messageId, senderId } = e2.detail;
    chatReport(messageId, senderId);
  });
  message.addEventListener("reply-click", (e2) => {
    if (!(e2 instanceof CustomEvent)) {
      throw new Error("Message event was not of type CustomEvent");
    }
    const { messageId, senderId } = e2.detail;
    chatReply(messageId, senderId);
  });
  message.addEventListener("react-click", (e2) => {
    if (!(e2 instanceof CustomEvent)) {
      throw new Error("Message event was not of type CustomEvent");
    }
    const { messageId, messageElement } = e2.detail;
    const chatReactionsPanel =
      /**@type {HTMLElement}*/
      $$1("#chatReactionsPanel");
    chatReactionsPanel.setAttribute("open", "true");
    const bounds = messageElement.getBoundingClientRect();
    const panelHeight = chatReactionsPanel.offsetHeight;
    const viewportHeight = window.innerHeight;
    const topPosition = Math.min(bounds.y, viewportHeight - panelHeight - 8);
    chatReactionsPanel.style.right = "8px";
    chatReactionsPanel.style.top = `${Math.max(8, topPosition)}px`;
    chatReactionsPanel.addEventListener("emojiselection", (e22) => {
      const { key } = e22.detail;
      if (chatReact) {
        chatReact(messageId, key);
      }
      chatReactionsPanel.removeAttribute("open");
    });
  });
  message.addEventListener("moderate-click", (e2) => {
    if (!(e2 instanceof CustomEvent)) {
      throw new Error("Message event was not of type CustomEvent");
    }
    const { senderId, messageId, messageElement } = e2.detail;
    chatModerate("delete", senderId, messageId, messageElement);
  });
  if (message.senderIntId !== 0 && blockedUsers.includes(message.senderIntId)) {
    message.style.color = "transparent";
    message.style.textShadow = "0px 0px 6px black";
  }
  if (
    message.content.includes("@" + chatName) ||
    message.content.includes("@#" + intId) ||
    message.content.includes("@everyone")
  ) {
    message.setAttribute("mention", "true");
    if (channel === currentChannel) {
      runAudio(AUDIOS.closePalette);
    }
  }
  return message;
}
nameInput.addEventListener("keydown", function (e2) {
  if (e2.key == "Enter") {
    nameInput.blur();
    sendIpcMessage(wsCapsule, "setName", nameInput.value);
  } else if (e2.key == "Escape") {
    namePanel.style.visibility = "hidden";
  } else if (e2.key == "Backspace" && nameInput.value.length == 0) {
    namePanel.style.visibility = "hidden";
  }
});
nameInput.addEventListener("input", function () {
  nameInput.value = nameInput.value.replace(/\W+/g, "").toLowerCase();
});
const nameButton =
  /**@type {HTMLButtonElement}*/
  $$1("#nameButton");
nameButton.addEventListener("click", function () {
  nameInput.blur();
  sendIpcMessage(wsCapsule, "setName", nameInput.value);
});
function handleLiveChatCommand(command, message) {
  switch (command) {
    case "name": {
      namePanel.style.visibility = "visible";
      nameInput.value = message.slice(5).trim();
      break;
    }
    case "vip": {
      const key = message.slice(4).trim();
      localStorage.vip = key;
      window.location.reload();
      break;
    }
    case "getid": {
      const targetName = message.slice(6).trim().toLowerCase();
      if (!targetName) {
        alert("Your User ID is: #" + intId);
      } else {
        let foundUsers = `Found Users with name '${targetName}:'
`;
        for (const pair of intIdNames) {
          if (pair[1] === targetName) {
            foundUsers += `${pair[1]}, #${pair[0]}
`;
          }
        }
        alert(foundUsers);
      }
      break;
    }
    case "whoplaced": {
      showPlacerInfo(x, y2);
      break;
    }
    case "help": {
      const newMessage = createLiveChatMessageElement(
        0,
        `
# Chat Styling Guide ✨
Text in rplace chat can be styled using a simplified version of markdown:
**bold**, *italic*, ||spoilers||, __underline__, \`code\` & ~strikethrough~.

## Text Formatting:
- \`**bold me**\` → **I didn't skip leg day**
- \`*italize me*\` → *whispering sweet nothings*
- \`__underline me__\` → __the terms no-one read__
- \`~strike me out~\` → ~~pineapple pizza is actually ok~~
- \`||spoil the plot||\` → ||Bruce Willis was dead the whole time||
- \`sudo rm -fr /\` → Remove french translations for a faster PC

### Headers:
Use # for a large header, ## for medium, and ### for small. Don’t forget to add a space between the leading heading character and your text!

### Separators:
To create a separator, create a blank line (Shift + Enter on keyboard) and insert a triple dash \`---\`.

### Extras:
1. You can make a list by placing a dash (\`-\`) or star (\`*\`) before what you want to say.
2. > "Block quotes (\`>\`) solve arguments"
>> \\- Confucius, probably (\`>>\`)

---

# Chat commands:
\`\`\`
:vip        :name
:getid      :whoplaced
\`\`\`

## Usage:
\`\`\`
:command arg1 arg2 arg3
\`\`\`

## Example:
\`\`\`
:name zekiah
\`\`\`
(^ Will set your username to 'zekiah')`,
        0,
        Date.now(),
        ":HELP@RPLACE.LIVE"
      );
      chatMessages.insertAdjacentElement("beforeend", newMessage);
      break;
    }
  }
}
function addLiveChatMessages({ channel, messages, before }) {
  if (channel !== currentChannel) {
    return;
  }
  const messageRenderPromises = [];
  messages.forEach((msgData) => {
    const senderChatName = intIdNames.get(msgData.senderIntId) || null;
    const newMessage = createLiveChatMessageElement(
      msgData.messageId,
      msgData.content,
      msgData.senderIntId,
      msgData.sendDate,
      senderChatName,
      msgData.repliesTo,
      msgData.reactions
    );
    applyLiveChatMessageInteractivity(newMessage, channel);
    const channelMessages = cMessages.get(currentChannel);
    if (before) {
      chatMessages.prepend(newMessage);
      channelMessages?.unshift(newMessage);
    } else {
      chatMessages.append(newMessage);
      channelMessages?.push(newMessage);
    }
    messageRenderPromises.push(
      newMessage.updateComplete.then(() => {
        chatMessages.scrollTop += newMessage.offsetHeight;
      })
    );
  });
  Promise.all(messageRenderPromises).then(() => {
    if (before) {
      chatMessages.scrollTop =
        chatMessages.scrollTop - chatPreviousButton.offsetHeight;
    }
    chatPreviousLoadDebounce = false;
  });
}
addIpcMessageHandler("addLiveChatMessages", addLiveChatMessages);
chatMessages.addEventListener("scroll", () => {
  if (chatMessages.scrollTop < 64) {
    if (chatPreviousAutoLoad === true && chatPreviousLoadDebounce === false) {
      const oldestMessage =
        /**@type {import("./game-elements.js").LiveChatMessage|null}*/
        chatMessages.children[0];
      sendIpcMessage(wsCapsule, "requestLoadChannelPrevious", {
        channel: currentChannel,
        anchorMsgId: oldestMessage?.messageId || 0,
      });
      chatPreviousLoadDebounce = true;
    } else {
      chatPreviousButton.dataset.hidden = "false";
    }
  } else {
    chatPreviousButton.dataset.hidden = "true";
  }
});
chatPreviousButton.addEventListener("click", () => {
  const oldestMessage =
    /**@type {import("./game-elements.js").LiveChatMessage|null}*/
    chatMessages.children[0];
  sendIpcMessage(wsCapsule, "requestLoadChannelPrevious", {
    channel: currentChannel,
    anchorMsgId: oldestMessage?.messageId || 0,
  });
  chatPreviousLoadDebounce = true;
  chatPreviousAutoLoad = true;
});
messageInput.addEventListener("keydown", function (e2) {
  if (!e2.isTrusted) {
    return;
  }
  openChatPanel();
  if (e2.key == "Enter" && !e2.shiftKey) {
    if (e2.ctrlKey) {
      sendPlaceChatMsg(messageInput.value);
    } else {
      sendLiveChatMsg(messageInput.value);
    }
    e2.preventDefault();
    messageInput.value = "";
    updateMessageInputHeight();
  }
});
messageInput.addEventListener("focus", openChatPanel);
function chatInsertText(text2) {
  const [start, end] = [messageInput.selectionStart, messageInput.selectionEnd];
  messageInput.setRangeText(text2, start || 0, end || 0, "end");
  messageInput.focus();
}
function chatMentionUser(senderId) {
  let mentionText = "@";
  const identifier = intIdNames.get(senderId) || "#" + senderId;
  if (typeof identifier === "string") {
    mentionText += identifier;
  } else if (typeof identifier === "number") {
    mentionText += "#" + identifier;
  }
  chatInsertText(mentionText);
}
messageTypePanel.children[0].addEventListener("click", function (e2) {
  if (!e2.isTrusted) {
    return;
  }
  sendPlaceChatMsg(messageInput.value);
  messageInput.value = "";
});
messageTypePanel.children[1].addEventListener("click", function (e2) {
  if (!e2.isTrusted) {
    return;
  }
  sendLiveChatMsg(messageInput.value);
  messageInput.value = "";
});
messageInputGifPanel.addEventListener("gifselection", function (e2) {
  const gif = e2.detail;
  if (!gif) {
    return;
  }
  messageInputGifPanel.removeAttribute("open");
  sendLiveChatMsg(`[gif:${gif.id}:tenor]`);
});
function sendPlaceChatMsg(message) {
  const position = Math.floor(y2) * WIDTH + Math.floor(x);
  sendIpcMessage(wsCapsule, "sendPlaceChatMsg", { message, position });
}
function sendLiveChatMsg(
  message,
  channel = currentChannel,
  replyId = currentReplyId
) {
  for (const [command] of COMMANDS) {
    if (message.startsWith(":" + command)) {
      handleLiveChatCommand(command, message);
      return;
    }
  }
  if (localStorage.vip && message.includes(localStorage.vip)) {
    alert(
      "Can't send VIP key in chat. Use ':vip yourvipkeyhere' to apply a VIP key"
    );
    return;
  }
  sendIpcMessage(wsCapsule, "sendLiveChatMsg", { message, channel, replyId });
  chatCancelReplies();
}
async function chatReply(messageId, senderId) {
  for (const messageEl of cMessages.get(currentChannel) || []) {
    messageEl.removeAttribute("reply");
  }
  currentReplyId = messageId;
  messageTypePanel.style.height = "calc(var(--message-input-height) + 92px)";
  messageInput.focus();
  messageReplyPanel.removeAttribute("closed");
  messageReplyLabel.innerText =
    (await translate$1("replyTo")) +
    ": " +
    (intIdNames.get(senderId) || "#" + senderId);
  for (const m2 of cMessages.get(currentChannel) || []) {
    if (m2["messageId"] == messageId) {
      m2.setAttribute("reply", "true");
      break;
    }
  }
}
function chatReport(messageId, senderId) {
  const reason =
    prompt(`Enter the reason for why you are reporting this message (max 280 chars)

Additional info:
Message ID: ${messageId}
Sender ID: ${senderId}
`)?.trim();
  if (!reason || reason.length === 0) {
    return;
  }
  sendIpcMessage(wsCapsule, "chatReport", { messageId, reason });
  alert(
    "Report sent!\nIn the meantime you can block this user by 'right clicking / press hold on the message' > 'block'"
  );
}
function chatReact(messageId, reactKey) {
  sendIpcMessage(wsCapsule, "chatReact", { messageId, reactKey });
}
function chatCancelReplies() {
  for (const messageEl of cMessages.get(currentChannel) || []) {
    messageEl.removeAttribute("reply");
  }
  currentReplyId = null;
  messageTypePanel.style.height = "calc(var(--message-input-height) + 62px)";
  messageReplyPanel.setAttribute("closed", "true");
}
messageCancelReplyButton.addEventListener("click", function (e2) {
  chatCancelReplies();
});
const modOptionsButton =
  /**@type {HTMLButtonElement}*/
  $$1("#modOptionsButton");
modOptionsButton.addEventListener("click", async function (e2) {
  const options = getModOptions();
  if (!options) {
    return;
  }
  const statusMsg = await makeIpcRequest(wsCapsule, "sendModAction", options);
  alert(statusMsg);
  clearChatModerate();
});
modMessageId.addEventListener("input", async function (e2) {
  modMessagePreview.textContent = "Loading message...";
  let found = null;
  for (const message of cMessages.get(currentChannel) || []) {
    if (message.messageId === Number(modMessageId.value)) {
      found = message;
      break;
    }
  }
  if (found) {
    modMessagePreview.innerHTML = found.innerHTML;
  } else {
    try {
      const httpServerUrl2 = (localStorage.server || DEFAULT_SERVER)
        .replace("wss://", "https://")
        .replace("ws://", "http://");
      const url2 = `${httpServerUrl2}/live-chat/messages/${modMessageId.value}`;
      const response = await fetch(url2);
      if (!response.ok) {
        throw new Error("Message not found");
      }
      const message = await response.json();
      if (message) {
        const chatName2 = message.sender.chatName ?? null;
        const messageElement = createLiveChatMessageElement(
          message.id,
          message.message,
          message.senderIntId,
          message.date * 1e3,
          chatName2,
          message.repliesTo,
          null
        );
        modMessagePreview.innerHTML = "";
        modMessagePreview.appendChild(messageElement);
      } else {
        modMessagePreview.textContent = "Message not found";
      }
    } catch (error) {
      modMessagePreview.textContent = "Message not found";
    }
  }
});
function getModOptions() {
  const reason = modReason.value.slice(0, 300);
  const memberId = +modUserId.value;
  const messageId = +modMessageId.value;
  const affectsAll = modAffectsAll.checked;
  if (modActionKick.checked) {
    return { action: "kick", reason, memberId };
  } else if (modActionMute.checked || modActionBan.checked) {
    const seconds = +modDurationS.value || 0;
    const minutes = +modDurationM.value || 0;
    const hours = +modDurationH.value || 0;
    const duration = seconds + minutes * 60 + hours * 3600;
    return {
      action: modActionMute.checked ? "mute" : "ban",
      reason,
      memberId,
      duration,
    };
  } else if (modActionCaptcha.checked) {
    return {
      action: "captcha",
      reason,
      memberId,
      affectsAll,
    };
  } else if (modActionDelete.checked) {
    return {
      action: "delete",
      reason,
      messageId,
    };
  }
  return null;
}
function clearChatModerate() {
  modMessageId.value = "";
  modMessagePreview.innerHTML = "";
  modDurationH.value = "0";
  modDurationM.value = "0";
  modDurationS.value = "0";
  modAffectsAll.checked = false;
  modReason.value = "";
}
function closeChatModerate() {
  moderationMenu.removeAttribute("open");
  clearChatModerate();
}
modCloseButton.addEventListener("click", closeChatModerate);
modCancelButton.addEventListener("click", closeChatModerate);
function chatModerate(mode, senderId, messageId = null, messageElement = null) {
  clearChatModerate();
  modUserId.value = String(senderId);
  modMessageId.value = String(messageId);
  moderationMenu.setAttribute("open", "true");
  moderationMenu.setAttribute("mode", mode);
  modMessagePreview.innerHTML = messageElement?.innerHTML || "";
  switch (mode) {
    case "delete":
      modActionDelete.checked = true;
      break;
    case "kick":
      modActionKick.checked = true;
      break;
    case "mute":
      modActionMute.checked = true;
      break;
    case "ban":
      modActionBan.checked = true;
      break;
    case "captcha":
      modActionCaptcha.checked = true;
      break;
  }
}
function closeMessageEmojisPanel() {
  messageEmojisPanel.setAttribute("closed", "true");
  messageInput.setAttribute("state", "default");
}
let messageInputHeight = messageInput.scrollHeight;
function updateMessageInputHeight() {
  messageInput.style.height = "0px";
  const oldHeight = messageInputHeight;
  messageInputHeight = Math.min(messageInput.scrollHeight, 256);
  chatPanel.style.setProperty(
    "--message-input-height",
    messageInputHeight + "px"
  );
  messageInput.style.height = "";
  const diffHeight = messageInputHeight - oldHeight;
  chatMessages.scrollBy(0, diffHeight);
}
if (document.readyState !== "loading") {
  updateMessageInputHeight();
} else {
  window.addEventListener("DOMContentLoaded", updateMessageInputHeight);
}
messageInput.oninput = (e2) => {
  if (!e2.isTrusted) {
    return;
  }
  updateMessageInputHeight();
  messageEmojisPanel.innerHTML = "";
  let comp = "";
  let search = true;
  let count = 0;
  for (let i4 = messageInput.value.length - 1; i4 >= 0; i4--) {
    if (messageInput.value[i4] == " " && search) {
      comp = "";
      break;
    } else if (messageInput.value[i4] == ":") {
      count++;
      search = false;
    }
    if (search) {
      comp = messageInput.value[i4] + comp;
    }
  }
  if (count % 2 == 0) {
    comp = "";
  }
  if (comp) {
    messageInput.setAttribute("state", "command");
  } else {
    closeMessageEmojisPanel();
  }
  function createEmojiEntry(emojiCode) {
    const entryElement = document.createElement("button");
    entryElement.classList.add("message-emojis-suggestion");
    entryElement.title = `Send this emoji in chat with :${emojiCode}:`;
    const entryLabel = document.createElement("span");
    entryLabel.textContent = `:${emojiCode}:`;
    entryElement.appendChild(entryLabel);
    return entryElement;
  }
  let handled = false;
  for (const [emojiCode, value] of EMOJIS) {
    if (comp && emojiCode.startsWith(comp)) {
      const entryElement = createEmojiEntry(emojiCode);
      const entryValueText = document.createTextNode(value);
      entryElement.appendChild(entryValueText);
      entryElement.addEventListener("click", function () {
        for (let i4 = messageInput.value.length - 1; i4 >= 0; i4--) {
          if (messageInput.value[i4] == ":") {
            messageInput.value = messageInput.value.slice(0, i4) + value;
            closeMessageEmojisPanel();
            break;
          }
        }
      });
      messageEmojisPanel.appendChild(entryElement);
      messageEmojisPanel.removeAttribute("closed");
    }
    if (messageInput.value.includes(":" + emojiCode + ":")) {
      messageInput.value = messageInput.value.replace(
        ":" + emojiCode + ":",
        value
      );
      messageInput.setAttribute("state", "default");
      handled = true;
    }
  }
  if (!handled)
    for (const [emojiCode, value] of CUSTOM_EMOJIS) {
      if (comp && emojiCode.startsWith(comp)) {
        const entryElement = createEmojiEntry(emojiCode);
        entryElement.appendChild(stringToHtml(value));
        entryElement.addEventListener("click", function () {
          for (let i4 = messageInput.value.length - 1; i4 >= 0; i4--) {
            if (messageInput.value[i4] == ":") {
              messageInput.value =
                messageInput.value.slice(0, i4) + ":" + emojiCode + ":";
              closeMessageEmojisPanel();
              break;
            }
          }
        });
        messageEmojisPanel.appendChild(entryElement);
        messageEmojisPanel.removeAttribute("closed");
      }
      if (messageInput.value.includes(":" + emojiCode + ":")) {
        messageInput.setAttribute("state", "default");
        handled = true;
      }
    }
  if (!handled)
    for (const [commandCode, value] of COMMANDS) {
      if (comp && commandCode.startsWith(comp)) {
        const entryElement = document.createElement("button");
        entryElement.classList.add("message-emojis-suggestion");
        entryElement.title = `Use this command in chat :${commandCode} [ARGUMENTS]`;
        const entryLabel = document.createElement("span");
        entryLabel.textContent = `:${commandCode}`;
        entryElement.appendChild(entryLabel);
        entryElement.addEventListener("click", function () {
          messageInput.value = ":" + commandCode;
          closeMessageEmojisPanel();
        });
        entryElement.appendChild(stringToHtml(value));
        messageEmojisPanel.appendChild(entryElement);
        messageEmojisPanel.removeAttribute("closed");
      }
      if (messageInput.value.includes(":" + commandCode)) {
        messageInput.setAttribute("state", "default");
        handled = true;
      }
    }
};
messageInputEmojiPanel.addEventListener("emojiselection", (e2) => {
  messageInputEmojiPanel.removeAttribute("open");
  if (CUSTOM_EMOJIS.has(e2.detail.key)) {
    chatInsertText(`:${e2.detail.key}:`);
  } else {
    chatInsertText(e2.detail.value);
  }
});
spectateCloseButton.addEventListener("click", function (e2) {
  spectateMenu.removeAttribute("open");
  sendIpcMessage(wsCapsule, "unspectateUser", void 0);
});
spectateUserIdInput.addEventListener("change", function (e2) {
  const spectateUserId = Number(spectateUserIdInput.value);
  if (spectateUserId == intId) {
    alert("Can't spectate user " + spectateUserId);
    return;
  }
  sendIpcMessage(wsCapsule, "spectateUser", spectateUserId);
});
function startedSpectating(userIntId) {
  spectateStartState = { x, y: y2, z: z2 };
  const spectatingChatName = intIdNames.get(userIntId);
  spectateStatusLabel.textContent =
    "Spectating " +
    (spectatingChatName
      ? `${spectatingChatName} (#${userIntId})`
      : `#${userIntId}`);
  setCanvasLocked(true);
}
function stoppedSpectating(userIntId, reason) {
  const startState = spectateStartState ?? {
    x: WIDTH / 2,
    y: HEIGHT / 2,
    z: 0,
  };
  const spectateEndMaxTransition = 2e3;
  const maxTransitionDuration = Math.min(spectateEndMaxTransition, COOLDOWN);
  if (typeof reason === "string" && reason !== "") {
    alert(`Stopped spectating ${userIntId}: ${reason}`);
  }
  moveTo(startState.x, startState.y, startState.z, maxTransitionDuration);
  setTimeout(() => {
    spectateUserIdInput.value = "";
    spectateStatusLabel.textContent = "";
    setCanvasLocked(false);
  }, maxTransitionDuration);
}
function defaultServer() {
  delete localStorage.board;
  delete localStorage.server;
  delete localStorage.vip;
  const baseUrl = location.toString().split("?")[0];
  if (location.toString().includes("?")) {
    location.replace(baseUrl);
  } else {
    location.reload();
  }
}
function initTheme() {
  let startupThemeSet = DEFAULT_THEMES.get(
    localStorage.theme || "r/place 2022"
  );
  if (!startupThemeSet) {
    startupThemeSet = DEFAULT_THEMES.get("r/place 2022");
  }
  if (startupThemeSet) {
    theme(startupThemeSet, localStorage.variant, localStorage.effects);
    themeDropName.textContent = "🖌️ " + (localStorage.theme || "r/place 2022");
  } else {
    const errorMessage =
      "Error: Can't find startup theme set, site may appear broken!";
    console.error(errorMessage, {
      availableThemes: DEFAULT_THEMES,
      savedTheme: localStorage.theme,
    });
    alert(errorMessage);
  }
}
if (document.readyState !== "loading") {
  initTheme();
} else {
  window.addEventListener("DOMContentLoaded", initTheme);
}
const themeDropList = themeDrop.firstElementChild;
themeDropList?.addEventListener("click", function (e2) {
  let target = e2.target;
  while (target instanceof HTMLElement && target != themeDropList) {
    if (target.nodeName != "LI") {
      target = target.parentElement;
      continue;
    }
    let targetEffects = target.getAttribute("effects");
    let targetVariant = target.getAttribute("variant");
    let targetTheme = target.getAttribute("theme");
    themeDropParent.removeAttribute("open");
    e2.stopPropagation();
    if (targetTheme) {
      themeDropName.textContent = "🖌️ " + targetTheme;
      const newTheme = DEFAULT_THEMES.get(targetTheme);
      if (newTheme) {
        theme(newTheme, targetVariant, targetEffects);
        localStorage.theme = targetTheme;
        localStorage.variant = targetVariant;
        localStorage.effects = targetEffects;
      }
    }
    break;
  }
});
var overlayInfo = {
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  opacity: 0.8,
  type: "",
  data: null,
};
overlayInput.onchange = function () {
  if (!overlayInput.files || !overlayInput.files[0]) {
    return;
  }
  templateImage.src = URL.createObjectURL(overlayInput.files[0]);
  templateImage.style.opacity = "0.8";
};
async function generateOverlayUrl() {
  if (!overlayInput.files) {
    return null;
  }
  const file = overlayInput.files[0];
  overlayInfo.type = file.type;
  overlayInfo.data = await blobToBase64(file);
  return `${location.origin}/?server=${
    localStorage.server || DEFAULT_SERVER
  }&board=${localStorage.board || DEFAULT_BOARD}&overlay=${JSON.stringify(
    overlayInfo
  )}`;
}
let overlayFailTimeout = null;
const overlayCopyButton =
  /**@type {HTMLButtonElement}*/
  $$1("#overlayCopyButton");
overlayCopyButton.addEventListener("click", async function (e2) {
  const uriString = await generateOverlayUrl();
  if (!uriString) {
    return;
  }
  if (uriString.length < 2e3) {
    navigator.clipboard.writeText(uriString);
    overlayCopyButton.children[2].animate([{ opacity: 1 }, { scale: 1.1 }], {
      duration: 1e3,
      iterations: 1,
    });
  } else {
    overlayCopyButton.children[2].textContent = "Failed: Overlay is too big!";
    overlayCopyButton.children[2].animate([{ opacity: 1 }, { color: "red" }], {
      duration: 1e3,
      iterations: 1,
    });
    if (overlayFailTimeout) {
      clearTimeout(overlayFailTimeout);
    }
    overlayFailTimeout = setTimeout(() => {
      overlayCopyButton.children[2].textContent = "Copied to clipboard!";
    }, 1e3);
  }
});
const overlayXInput =
  /**@type {HTMLInputElement}*/
  $$1("#overlayXInput");
overlayXInput.addEventListener("change", function () {
  overlayInfo.x = Number(overlayXInput.value);
  templateImage.style.transform = `translate(${overlayInfo.x}px, ${overlayInfo.y}px)`;
});
const overlayYInput =
  /**@type {HTMLInputElement}*/
  $$1("#overlayYInput");
overlayYInput.addEventListener("change", function () {
  overlayInfo.y = Number(overlayYInput.value);
  templateImage.style.transform = `translate(${overlayInfo.x}px, ${overlayInfo.y}px)`;
});
const overlayOpacity =
  /**@type {HTMLInputElement}*/
  $$1("#overlayOpacity");
overlayOpacity.addEventListener("change", function () {
  overlayInfo.opacity = Number(overlayOpacity.value) / 100;
  templateImage.style.opacity = String(overlayInfo.opacity);
});
let blockedUsers = localStorage.blocked?.split(",") || [];
let targetedIntId = null;
let targetedMsgId = null;
let currentReplyId = null;
function openChatPanel() {
  chatPanel.setAttribute("open", "true");
  chatPanel.inert = false;
}
chatButton.addEventListener("click", openChatPanel);
messageOptionsButton.addEventListener("click", function (e2) {
  updateMessageInputHeight();
  messageTypePanel.toggleAttribute("closed");
});
chatCloseButton.addEventListener("click", closeChatPanel);
function closeChatPanel() {
  messageInput.blur();
  messageInputEmojiPanel.removeAttribute("open");
  messageInputGifPanel.removeAttribute("open");
  chatPanel.removeAttribute("open");
  chatPanel.inert = true;
}
closeChatPanel();
const mainContentObserver = new ResizeObserver((entries2) => {
  onMainContentResize();
});
mainContentObserver.observe(mainContent);
function closeGame() {
  if (!postsFrame.src) {
    postsFrame.src = "/posts.html";
  }
  modal.close();
  closeChatPanel();
  document.body.id = "out";
  onMainContentResize();
}
closeButton.addEventListener("click", closeGame);
function openGame() {
  if (document.body.id != "out") {
    return;
  }
  document.body.id = "";
  onMainContentResize();
}
spaceFiller.addEventListener("click", openGame);
async function onChatContext(e2, senderId, msgId) {
  e2.preventDefault();
  if (chatContext.style.display == "block") {
    chatContext.style.display = "none";
  } else {
    let msgName = intIdNames.get(senderId);
    const identifier = msgName || "#" + senderId;
    if (msgName) {
      if (msgName[msgName.length - 1] === "~") {
        msgName = msgName.slice(0, -1);
        userNote.style.display = "block";
        userNote.textContent = "This user is likely impersonating @" + msgName;
      } else if (msgName[msgName.length - 1] === "✓") {
        msgName = msgName.slice(0, -1);
        userNote.style.display = "block";
        userNote.textContent = "This user is verified as @" + msgName;
      } else {
        userNote.style.display = "none";
      }
    }
    targetedMsgId = msgId;
    targetedIntId = senderId;
    chatContext.style.display = "block";
    mentionUserButton.textContent = `${await translate$1(
      "mention"
    )} ${identifier}`;
    replyUserButton.textContent = `${await translate$1(
      "replyTo"
    )} ${identifier}`;
    blockUserButton.textContent = `${await translate$1(
      blockedUsers.includes(senderId) ? "unblock" : "block"
    )} ${identifier}`;
    if (senderId == intId) {
      blockUserButton.disabled = true;
      changeMyNameButton.style.display = "";
    } else {
      blockUserButton.disabled = false;
      changeMyNameButton.style.display = "none";
    }
    chatContext.style.left = e2.pageX - chatPanel.offsetLeft + "px";
    chatContext.style.top = e2.pageY - chatPanel.offsetTop + "px";
  }
}
mentionUserButton.addEventListener("click", function (e2) {
  if (!targetedIntId) {
    return;
  }
  chatMentionUser(targetedIntId);
  chatContext.style.display = "none";
});
replyUserButton.addEventListener("click", function (e2) {
  if (!targetedIntId) {
    return;
  }
  chatReply(targetedMsgId, targetedIntId);
  chatContext.style.display = "none";
});
blockUserButton.addEventListener("click", function (e2) {
  if (blockedUsers.includes(targetedIntId)) {
    blockedUsers.splice(blockedUsers.indexOf(targetedIntId), 1);
  } else if (targetedIntId != intId) {
    blockedUsers.push(targetedIntId);
  }
  localStorage.blocked = blockedUsers;
  chatContext.style.display = "none";
});
changeMyNameButton.addEventListener("click", function (e2) {
  if (!intId) {
    return;
  }
  namePanel.style.visibility = "visible";
  nameInput.value = intIdNames.get(intId) || "";
  chatContext.style.display = "none";
});
window.addEventListener("contextmenu", function (e2) {
  e2.preventDefault();
});
if (!mobile) {
  let cancelZoomGesture = function (e2) {
    e2.preventDefault();
  };
  window.addEventListener(
    "wheel",
    function (e2) {
      const targetElement =
        /**@type {HTMLElement}*/
        e2.target;
      if (e2.target == viewport || canvParent2.contains(targetElement)) {
        e2.preventDefault();
      }
    },
    { passive: false }
  );
  window.addEventListener("gesturestart", cancelZoomGesture);
  window.addEventListener("gesturechange", cancelZoomGesture);
  window.addEventListener("gestureend", cancelZoomGesture);
}
setTimeout(() => {
  if (connProblems) {
    connProblems.style.opacity = "1";
  }
}, 5e3);
if (localStorage.noad && Date.now() - localStorage.noad < 121e7) {
  chatAd.style.display = "none";
} else {
  let cycleAd = function () {
    const currentAd = ADS[adI % ADS.length];
    const langBanners =
      /**@type {Record<string, string>}*/
      currentAd.banners;
    chatAd.style.setProperty(
      "--adurl",
      `url(${langBanners[lang] || langBanners["en"]})`
    );
    chatAd.href = currentAd.url;
    adI++;
  };
  let adI = Math.floor(Math.random() * ADS.length);
  setInterval(cycleAd, 12e4);
  cycleAd();
}
let initialised = false;
async function initialise() {
  if (initialised) {
    return;
  }
  initialised = true;
  console.log("Initialising...");
  translateAll();
  sizeChanged(DEFAULT_WIDTH, DEFAULT_HEIGHT);
  renderAll();
  addIpcMessageHandler("fetchLinkKey", () =>
    makeIpcRequest(wsCapsule, "fetchLinkKey")
  );
  addIpcMessageHandler("openChatPanel", openChatPanel);
  addIpcMessageHandler("scrollToPosts", scrollToPosts);
  addIpcMessageHandler("defaultServer", defaultServer);
  addIpcMessageHandler("openOverlayMenu", openOverlayMenuOld);
  addIpcMessageHandler("resizePostsFrame", resizePostsFrame);
  window.addEventListener("message", handleIpcMessage);
  let lastDisconnect = parseInt(localStorage.lastDisconnect ?? "0");
  if (isNaN(lastDisconnect)) {
    lastDisconnect = 0;
  }
  const nextSafeConnectDate = lastDisconnect + 200;
  setTimeout(async () => {
    const fingerprintJS = await index.load();
    const result = await fingerprintJS.get();
    sendIpcMessage(wsCapsule, "connect", {
      device: result.visitorId,
      server: localStorage.server || DEFAULT_SERVER,
      vip: localStorage.vip,
    });
  }, Math.max(0, nextSafeConnectDate - Date.now()));
}
if (document.readyState !== "loading") {
  initialise();
} else {
  window.addEventListener("DOMContentLoaded", initialise);
}
const __viteBrowserExternal = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

// Expose the necessary functions
window.pos = pos; // pos is the function to move the camera (not necessary to place pixels)
window.sendIpcMessage = sendIpcMessage; // sendIpcMessage is the function to send messages to the rplace server. This can be used to place pixels!
window.getBoard = () => BOARD; // a Uint8Array containing all the pixel data on the board (https://github.com/rplacelive/game/blob/main/PROTOCOL.md#:~:text=Calculate%20coordinates)
window.getWSCapsule = () => wsCapsule; // The wsCapsule is how we send messages to the server

// We can make some custom functions to use later
window.placePixel = (position, color) => {
  window.sendIpcMessage(
    window.getWSCapsule(),
    "putPixel",
    { position, colour: color } // lubbly jubbly colour
  );
};

const canvasWidth = 1000;

window.positionToCoords = (position) => {
  const x = position % canvasWidth;
  const y = Math.floor(position / canvasWidth);

  return { x, y };
};

window.coordsToPosition = ({ x, y }) => {
  return y * canvasWidth + x;
};
