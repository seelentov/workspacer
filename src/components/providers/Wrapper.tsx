import { FC, PropsWithChildren } from 'react'

export interface IWrapperProps {}

const wrapper = {
	paddingTop: '60px',
}

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
	return <div style={wrapper}>{children}</div>
}
