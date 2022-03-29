import React from 'react'
import { Button, ButtonProps, useWalletModal} from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import useAuth from 'hooks/useAuth'

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <Button onClick={onPresentConnectModal}  style={{color: "#fff",border:'none',background:" rgb(93, 82, 255)"}}{...props}>
      {TranslateString(292, 'Connect Wallet')}
    </Button>
  )
}

export default UnlockButton
