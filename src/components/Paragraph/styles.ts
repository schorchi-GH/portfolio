import styled from 'styled-components'
import { Props } from './index'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.type === 'principal'
      ? props.theme.mainColor
      : props.theme.secondaryColor};
  line-height: 22px;
`
