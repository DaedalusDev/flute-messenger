export const EMOJIS = [
  {
    name: 'heart',
    value: '❤',
    shortcut: '<3'
  },
  {
    name: 'smile',
    value: '😁',
    shortcut: ':-D'
  },
  {
    name: 'neutral',
    value: '😐',
    shortcut: ':-|'
  }
]

export const EMOJI_SHORTCUTS = _.keyBy(EMOJIS, 'shortcut')

export const EMOJI_REGEXP = RegExp(
  EMOJIS.map(
    (e) => _.escapeRegExp(e.shortcut)
  ).join('|'),
  'gi'
)
