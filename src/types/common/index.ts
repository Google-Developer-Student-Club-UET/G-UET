export type CommonLogoProps = {
  height: number
}

export type CommonVerticalNavigationProps = {
  isNavigationOpen: boolean
}

export type CommonSearchProps = {
  filtersOption?: string[]
  placeholder?: string
  loading?: boolean
}

export type CommonTitleTextProps = {
  prefix?: string
  text: string
  suffix?: string
}

type RoundedIconColor = 'red' | 'blue' | 'yellow' | 'green' | 'primary'
type RoundedIconSize = 'md' | 'lg'

export type CommonRoundedIconProps = {
  icon: string
  color: RoundedIconColor
  size: RoundedIconSize
  onlyView?: boolean
}
