import { useState } from "react"
import {
  AppShell,
  Container,
  Navbar,
  SegmentedControl,
  ThemeIcon,
  Box,
  Title,
  Paper,
  Center,
  Text,
  Group,
  Table,
  ActionIcon,
  useMantineTheme
} from "@mantine/core"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { useTranslation } from "react-i18next"
import MainLink from "./components/MainLink"
import navbarContent from "./navbarContent"
import { UserSection } from "./components/UserSection"

export default function Home() {

  const { t: getTranslation } = useTranslation()
  const theme = useMantineTheme()
  const [navbarTarget, setNavbarTarget] = useState({})

  return (
    <AppShell
      padding="md"
      sx={{
        width: "100vw",
        height: "100vh"
      }}
      navbar={
        <Navbar
          width={{ base: 300 }}
          height="100vh"
          p="xs"
        >
          <Navbar.Section>
            <Title sx={theme => ({ textAlign: "center", color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black })}>e-Process</Title>
          </Navbar.Section>
          <Navbar.Section grow mt="xs">
            {navbarContent.map(item => (
              <MainLink {...item} key={item.name} label={getTranslation(item.name)} />
            ))}
          </Navbar.Section>
          <Navbar.Section >
            <UserSection />
          </Navbar.Section>
        </Navbar>
      }
    >
      <Center
        sx={theme => ({
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.dark[0],
          width: "100%",
          height: "100%"
        })}
      >
        <Paper
          withBorder
          radius="md"
          shadow="xl"
          sx={{
            minWidth: "95%",
            minHeight: "95%",
            padding: "20px"
          }}
        >
          <Group direction="column">
            <Title order={3}>{getTranslation("dashboard.processesAwaiting.title")}</Title>
            <Text weight="600">{getTranslation("dashboard.processesAwaiting.explanation")}</Text>
            <Paper
              withBorder
              radius="md"
              sx={{ width: "100%" }}
            >
              <Table verticalSpacing="sm">
                <thead>
                  <tr>
                    <th>{getTranslation("process.number")}</th>
                    <th>{getTranslation("process.type")}</th>
                    <th>{getTranslation("process.originSector")}</th>
                    <th>{getTranslation("process.actualSector")}</th>
                    <th>{getTranslation("process.accessType")}</th>
                    <th>{getTranslation("process.interestedParts")}</th>
                    <th>{getTranslation("process.creationDate")}</th>
                    <th>{getTranslation("process.lastModifiedDate")}</th>
                    <th>{getTranslation("process.access.btnLabel")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2022-07.37895427</td>
                    <td>{getTranslation("process.type.administrative")}</td>
                    <td>Ocorrences</td>
                    <td>Ocorrences</td>
                    <td>{getTranslation("process.accessType.public")}</td>
                    <td>Fulano x Fulana</td>
                    <td>{new Date().toDateString()}</td>
                    <td>{new Date().toDateString()}</td>
                    <td>
                      <ActionIcon radius="xl">
                        <BsFillArrowRightCircleFill
                          size={25}
                          color={theme.colorScheme === "dark" ? "#FFF" : theme.colors.dark[4]}
                          style={{ cursor: "pointer" }}
                        />
                      </ActionIcon>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-07.37895427</td>
                    <td>{getTranslation("process.type.administrative")}</td>
                    <td>Ocorrences</td>
                    <td>Ocorrences</td>
                    <td>{getTranslation("process.accessType.public")}</td>
                    <td>Fulano x Fulana</td>
                    <td>{new Date().toDateString()}</td>
                    <td>{new Date().toDateString()}</td>
                    <td>
                      <ActionIcon radius="xl">
                        <BsFillArrowRightCircleFill
                          size={25}
                          color={theme.colorScheme === "dark" ? "#FFF" : theme.colors.dark[4]}
                          style={{ cursor: "pointer" }}
                        />
                      </ActionIcon>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-07.37895427</td>
                    <td>{getTranslation("process.type.administrative")}</td>
                    <td>Ocorrences</td>
                    <td>Ocorrences</td>
                    <td>{getTranslation("process.accessType.public")}</td>
                    <td>Fulano x Fulana</td>
                    <td>{new Date().toDateString()}</td>
                    <td>{new Date().toDateString()}</td>
                    <td>
                      <ActionIcon radius="xl">
                        <BsFillArrowRightCircleFill
                          size={25}
                          color={theme.colorScheme === "dark" ? "#FFF" : theme.colors.dark[4]}
                          style={{ cursor: "pointer" }}
                        />
                      </ActionIcon>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-07.37895427</td>
                    <td>{getTranslation("process.type.administrative")}</td>
                    <td>Ocorrences</td>
                    <td>Ocorrences</td>
                    <td>{getTranslation("process.accessType.public")}</td>
                    <td>Fulano x Fulana</td>
                    <td>{new Date().toDateString()}</td>
                    <td>{new Date().toDateString()}</td>
                    <td>
                      <ActionIcon radius="xl">
                        <BsFillArrowRightCircleFill
                          size={25}
                          color={theme.colorScheme === "dark" ? "#FFF" : theme.colors.dark[4]}
                          style={{ cursor: "pointer" }}
                        />
                      </ActionIcon>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-07.37895427</td>
                    <td>{getTranslation("process.type.administrative")}</td>
                    <td>Ocorrences</td>
                    <td>Ocorrences</td>
                    <td>{getTranslation("process.accessType.public")}</td>
                    <td>Fulano x Fulana</td>
                    <td>{new Date().toDateString()}</td>
                    <td>{new Date().toDateString()}</td>
                    <td>
                      <ActionIcon radius="xl">
                        <BsFillArrowRightCircleFill
                          size={25}
                          color={theme.colorScheme === "dark" ? "#FFF" : theme.colors.dark[4]}
                          style={{ cursor: "pointer" }}
                        />
                      </ActionIcon>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-07.37895427</td>
                    <td>{getTranslation("process.type.administrative")}</td>
                    <td>Ocorrences</td>
                    <td>Ocorrences</td>
                    <td>{getTranslation("process.accessType.public")}</td>
                    <td>Fulano x Fulana</td>
                    <td>{new Date().toDateString()}</td>
                    <td>{new Date().toDateString()}</td>
                    <td>
                      <ActionIcon radius="xl">
                        <BsFillArrowRightCircleFill
                          size={25}
                          color={theme.colorScheme === "dark" ? "#FFF" : theme.colors.dark[4]}
                          style={{ cursor: "pointer" }}
                        />
                      </ActionIcon>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-07.37895427</td>
                    <td>{getTranslation("process.type.administrative")}</td>
                    <td>Ocorrences</td>
                    <td>Ocorrences</td>
                    <td>{getTranslation("process.accessType.public")}</td>
                    <td>Fulano x Fulana</td>
                    <td>{new Date().toDateString()}</td>
                    <td>{new Date().toDateString()}</td>
                    <td>
                      <ActionIcon radius="xl">
                        <BsFillArrowRightCircleFill
                          size={25}
                          color={theme.colorScheme === "dark" ? "#FFF" : theme.colors.dark[4]}
                          style={{ cursor: "pointer" }}
                        />
                      </ActionIcon>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-07.37895427</td>
                    <td>{getTranslation("process.type.administrative")}</td>
                    <td>Ocorrences</td>
                    <td>Ocorrences</td>
                    <td>{getTranslation("process.accessType.public")}</td>
                    <td>Fulano x Fulana</td>
                    <td>{new Date().toDateString()}</td>
                    <td>{new Date().toDateString()}</td>
                    <td>
                      <ActionIcon radius="xl">
                        <BsFillArrowRightCircleFill
                          size={25}
                          color={theme.colorScheme === "dark" ? "#FFF" : theme.colors.dark[4]}
                          style={{ cursor: "pointer" }}
                        />
                      </ActionIcon>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-07.37895427</td>
                    <td>{getTranslation("process.type.administrative")}</td>
                    <td>Ocorrences</td>
                    <td>Ocorrences</td>
                    <td>{getTranslation("process.accessType.public")}</td>
                    <td>Fulano x Fulana</td>
                    <td>{new Date().toDateString()}</td>
                    <td>{new Date().toDateString()}</td>
                    <td>
                      <ActionIcon radius="xl">
                        <BsFillArrowRightCircleFill
                          size={25}
                          color={theme.colorScheme === "dark" ? "#FFF" : theme.colors.dark[4]}
                          style={{ cursor: "pointer" }}
                        />
                      </ActionIcon>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-07.37895427</td>
                    <td>{getTranslation("process.type.administrative")}</td>
                    <td>Ocorrences</td>
                    <td>Ocorrences</td>
                    <td>{getTranslation("process.accessType.public")}</td>
                    <td>Fulano x Fulana</td>
                    <td>{new Date().toDateString()}</td>
                    <td>{new Date().toDateString()}</td>
                    <td>
                      <ActionIcon radius="xl">
                        <BsFillArrowRightCircleFill
                          size={25}
                          color={theme.colorScheme === "dark" ? "#FFF" : theme.colors.dark[4]}
                          style={{ cursor: "pointer" }}
                        />
                      </ActionIcon>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Paper>
          </Group>
        </Paper>
      </Center>
    </AppShell>
  )
}