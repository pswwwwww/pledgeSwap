import React, { useContext } from 'react'
import { Menu as UikitMenu} from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import styled from 'styled-components'
import links from './config'
import Logo from '../../images/img1.png'

const StyleMenu = styled.div`
&>div>div:nth-child(2){
  display:none
}
&>div>nav>div>button{
  display:none
}
&>div>nav>div>a{
  display:none
}
&>div>nav{
  background:none;
  border:none;
  padding:0 16px
}
&>div>nav>div>div>button{
  color:#5D52FF;
  background:#fff;
}
&>div>nav>div>div>.gcCDSt{
  color:#fff;
  background:#5D52FF;
  border-radius: 24px 24px 24px 0px;
}
`
const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()

  
  return (
    <StyleMenu>
    <img src={Logo} alt="" style={{margin:'8px 0 0 8px'}}/>
    <UikitMenu 
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      {...props}
    />
    </StyleMenu>
  )
}

export default Menu
