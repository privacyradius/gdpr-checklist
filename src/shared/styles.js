export const colors = {
  blue: '#057ee6'
}

const breakpoints = {
    small: '0px',
    medium: '700px',
    large: '1024px',
    xlarge: '1200px',
    xxlarge: '1440px',
}

export const width = '1200px'

export const smallOnly = `(max-width: 699px)`
export const mediumAndUp = `(min-width: ${breakpoints.medium})`
export const mediumOnly = `(min-width: ${breakpoints.medium}) and (max-width: 1024px)`
export const largeDown = `(max-width: 1024px)`
export const largeAndUp = `(min-width: ${breakpoints.large})`
export const largeOnly = `(min-width: ${breakpoints.large}) and (max-width: 1119px)`
export const xlargeDown = `(max-width: ${breakpoints.xlarge})`
