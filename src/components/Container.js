/** @jsx jsx */
import { jsx } from 'theme-ui'

const Container = ({children}) => (
    <section
        sx={{
            width: '90%',
            maxWidth: '1100px',
            m: '0 auto'
        }}
    >
        {children}
    </section>
)

export default Container