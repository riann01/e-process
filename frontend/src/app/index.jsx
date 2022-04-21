import Init from '../views/Init'
import LangSelect from '../views/LangSelect'
import Home from '../views/Home'
import OrgSelect from '../views/OrgSelect'
import Process from '../views/Process'
import { MantineProvider } from '@mantine/core'
import { useSelector } from 'react-redux'

export default function App() {
  const colorScheme = useSelector(state => state.colorSchemeReducer.colorScheme)
  return (
    <MantineProvider
      theme={{
        colorScheme,
        fontFamily: "Montserrat",
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
      }}>
      <Home />
    </MantineProvider>
  )
}