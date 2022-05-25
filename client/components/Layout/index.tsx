import { Tag } from 'antd'
import { StepForwardOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useStores } from '@client/hooks/useStores'
import { observer } from 'mobx-react'

const StyledWrapper = styled.div`
    background: aqua;
`

const Layout = ({ children }: any) => {
    console.log('render layout')
    const { t } = useTranslation()
    const { user } = useStores()
    return (
        <StyledWrapper>
            <h2>
                <span>{t('Welcome to React')}</span>, <button onClick={() => user.setName()}>{user.name}</button>
            </h2>
            <Tag color="magenta">layout-start</Tag>
            <StepForwardOutlined />
            {children}
            <Tag color="magenta">layout-end</Tag>
        </StyledWrapper>
    )
}

export default observer(Layout)
