import facepaint from 'facepaint'

export const da = facepaint([
  '@media(min-width: 321px)',
  '@media(min-width: 376px)',
  '@media(min-width: 426px)',
  '@media(min-width: 769px)',
  '@media(min-width: 1026px)',
  '@media(min-width: 1441px)',
  '@media(min-width: 2561px)'
])

export const config = {
  paddingTop: ['0rem', '0rem', '0rem', '0rem', '0rem', '0rem'],
  paddingBottom: ['0rem', '0rem', '0rem', '0rem', '0rem', '0rem'],
  paddingLeft: ['0rem', '1rem', '1rem', '1.5rem', '1.5rem', '5rem'],
  paddingRight: ['0rem', '1rem', '1rem', '1.5rem', '1.5rem', '5rem']
}
