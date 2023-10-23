import { FC, PropsWithChildren } from 'react'

export interface IWrapperProps {}

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
	return <div style={{

      paddingTop: '60px',
      height: '100vh',
      overflowY: 'scroll'
    
  }}>{children}</div>
}
