import { useState } from 'react'
import { useOs } from "@mantine/hooks"
import {
  Paper,
  Center,
  Transition,
  Progress,
  Text,
  Container,
  Group,
  Button,
  Notification,
  useMantineTheme
} from "@mantine/core"
import { AiFillInfoCircle } from 'react-icons/ai'
import { ImDatabase } from "react-icons/im"
import { FaServer } from "react-icons/fa"

export default function Int() {
  const theme = useMantineTheme()
  const currentOs = useOs()
  const [progress, setProgress] = useState(0)
  const color = theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black

  const timeout = setTimeout(() => {
    setProgress(progress + 1)
  }, 500)

  if (progress === 100) clearTimeout(timeout)

  return (
    <Center
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.dark[0], 
      }}>
      <Transition mounted={true} transition="fade" duration={1000} timingFunction="ease">
        {() => (
          <Paper
            shadow="xl"
            p="md"
            radius="md"
            sx={(theme) => ({
              minWidth: "30vw",
              maxWidth: "720px"
            })}
          >
            <Container style={{ display: "flex", gap: "5%", marginBottom: "30px" }}>
              <AiFillInfoCircle size={25} color={color} />
              <Text weight="bold">Configuração inicial do e-Process</Text>
            </Container>
            <Container style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

              <Group direction="column" spacing="md"
                sx={(theme) => ({
                  minWidth: "100%",
                  gap: "20px"
                })}
              >
                <Notification
                  disallowClose
                  icon={<ImDatabase size={25} color={color} />}
                  color="dark"
                  title="Banco de Dados"
                  sx={{ width: "100%", boxShadow: "none" }}  
                >
                  <Text>PostgreSQL 12 (linux x64) 172.472.6.8:5871</Text>
                </Notification>
                <Notification
                  disallowClose
                  icon={<FaServer size={25} color={color} />}
                  color="dark"
                  title="Servidor"
                  sx={{ width: "100%", boxShadow: "none"  }}
                >
                  <Text>Server (linux x64) 172.472.6.8:4657</Text>
                </Notification>
              </Group>
              <Text>OS do Cliente: {currentOs}</Text>
              <Text>Relizando conexão...</Text>
              <Progress value={progress} />
              <Text align="right">{progress}%</Text>
              <Button sx={() => ({ marginBottom: "20px" })} disabled={progress !== 100}>Prosseguir</Button>
            </Container>
          </Paper>
        )}
      </Transition>
    </Center>
  )
}