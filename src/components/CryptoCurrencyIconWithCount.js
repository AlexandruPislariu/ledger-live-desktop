// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'

import type { Currency } from '@ledgerhq/live-common/lib/types'
import { getCurrencyColor } from '@ledgerhq/live-common/lib/currencies'

import { colors } from 'styles/theme'
import Tooltip from 'components/base/Tooltip'
import CryptoCurrencyIcon, { TokenIconWrapper, TokenIcon } from './CryptoCurrencyIcon'

type Props = {
  currency: Currency,
  count: number,
  withTooltip?: boolean,
  bigger?: boolean,
  inactive?: boolean,
}

const Wrapper = styled.div`
  ${p =>
    p.doubleIcon
      ? `
  margin-left: -6px;
  margin-right: -6px;

  > :nth-child(1) {
    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 81% 50%, 68% 54%, 58% 63%, 52% 74%, 50% 86%, 50% 100%, 0% 100%);
  }`
      : `
  display: flex;
  align-items: center;`}

  line-height: ${p => (p.bigger ? '18px' : '18px')};
  font-size: ${p => (p.bigger ? '12px' : '12px')};

  > :nth-child(2) {
    margin-top: ${p => (p.bigger ? '-15px' : '-13px')};
    margin-left: ${p => (p.bigger ? '10px' : '8px')};

    border: 2px solid ${p => p.theme.colors.white};
  }
`

export default class CryptoCurrencyIconWithCount extends PureComponent<Props> {
  render() {
    const { currency, bigger, withTooltip, inactive, count } = this.props
    const color = inactive ? colors.grey : getCurrencyColor(currency)

    const size = bigger ? 20 : 16
    const fontSize = size / 2 + (count < 10 ? 2 : count >= 100 ? -2 : 0)

    const content = (
      <Wrapper doubleIcon={count > 0} bigger={bigger}>
        <CryptoCurrencyIcon inactive={inactive} currency={currency} size={size} />
        {count > 0 && (
          <TokenIconWrapper>
            <TokenIcon color={color} size={size} fontSize={fontSize}>
              {`+${count}`}
            </TokenIcon>
          </TokenIconWrapper>
        )}
      </Wrapper>
    )

    if (withTooltip && count > 0) {
      return (
        <Tooltip
          render={() => (
            <Trans i18nKey={'tokensList.countTooltip'} count={count} values={{ count }} />
          )}
        >
          {content}
        </Tooltip>
      )
    }

    return content
  }
}
