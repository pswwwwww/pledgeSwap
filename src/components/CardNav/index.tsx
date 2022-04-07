import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledNav = styled.div`
  margin-bottom: 40px;
`
const PledgeNav = styled.div`
 &>div{
   width:319px;
   height:56px;
   background:#F5F5FA;
border-radius: 15px;
height:48px
 }
&>div>div>a{
  width:153.48px;
  height:48px;
  border-radius: 11px;
  background:#F5F5FA;
  font-weight: 500;
font-size: 20px;
line-height: 30px;
text-align: center;
font-style: normal;

color: #8B89A3;
}
&>div>div>a{
  background: #FFFFFF;
  border-radius: 11px;
  color:#000
}
&>div>div>.sc-kstrdz{
  background:#F5F5FA;
  border-radius: 15px;
  color: #8B89A3;

}
&>div>div{
  background:#F5F5FA;
}
`
function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  return (
<PledgeNav>
    <StyledNav>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link} style={{}}>
          {TranslateString(1142, 'Swap')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
          {TranslateString(262, 'Liquidity')}
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
    </PledgeNav>
  )
}

export default Nav
