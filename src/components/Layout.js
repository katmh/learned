/** @jsx jsx */
import { ThemeProvider } from "theme-ui"
import { jsx } from 'theme-ui'
import { Global } from '@emotion/core'
import Container from './Container'
import SEO from './SEO'
import theme from './theme'

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <Global
            styles={{
                '*': {
                    boxSizing: 'border-box',
                    margin: '0',
                    padding: '0',
                }
            }}
        />
        <SEO />
        <Container>
            {children}
        </Container>
    </ThemeProvider>
)

export default Layout