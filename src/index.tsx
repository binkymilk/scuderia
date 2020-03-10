/**
 * @class ExampleComponent
 */

import * as React from 'react'
import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps } from 'styled-system'

type BaseHeadingProps = ColorProps & SpaceProps

const BaseHeading: React.FC<BaseHeadingProps> = styled.h1<
  BaseHeadingProps
>`
  ${color}
  ${space}
`

const YellowHeading: React.FC<BaseHeadingProps> = (
  props: BaseHeadingProps
) => <BaseHeading {...props} />

console.log(YellowHeading)

export default YellowHeading
