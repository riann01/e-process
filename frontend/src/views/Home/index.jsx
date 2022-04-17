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
  Badge,
  Breadcrumbs,
  Anchor,
  Tooltip,
  Pagination,
  useMantineTheme
} from "@mantine/core"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { MdElderly, MdOutlineAccessible } from "react-icons/md"
import { GiHealthNormal, GiLifeTap } from "react-icons/gi"
import { BsChevronRight } from "react-icons/bs"
import { FaArrowCircleUp } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import MainLink from "./components/MainLink"
import navbarContent from "./navbarContent"
import { UserSection } from "./components/UserSection"

export default function Home() {

  const { t: getTranslation } = useTranslation()
  const theme = useMantineTheme()
  const [navbarTarget, setNavbarTarget] = useState({})

  const items = [
    { title: getTranslation("navbar.dashboard"), href: '#' },
    { title: getTranslation("dashboard.processesAwaiting.title"), href: '#' }
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ))

  const getModifier = name => {
    const color = theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black
    return {
      oldPerson:
        <Tooltip
          label={getTranslation("process.modifiers.elderlyCitizen")}
          withArrow
        >
          <MdElderly color={color} size={20} />
        </Tooltip>,
      healthCondition:
        <Tooltip
          label={getTranslation("process.modifiers.healthCondition")}
          withArrow
        >
          <GiHealthNormal color={color} size={20} />
        </Tooltip>,
      lifeDanger:
        <Tooltip
          label={getTranslation("process.modifiers.lifeRisk")}
          withArrow
        >
          <GiLifeTap color={color} size={20} />
        </Tooltip>,
      priority:
        <Tooltip
          label={getTranslation("process.modifiers.needPriority")}
          withArrow
        >
          <FaArrowCircleUp color={color} size={20} />
        </Tooltip>,
      disabledPerson:
        <Tooltip
          label={getTranslation("process.modifiers.disabledPerson")}
          withArrow
        >
          <MdOutlineAccessible color={color} size={20} />
        </Tooltip>
    }[name]
  }

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
            <Breadcrumbs separator={<BsChevronRight size={12} />}>{items}</Breadcrumbs>
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
                    <th>{getTranslation("process.modifiers")}</th>
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
                    <td><Badge color="teal">{getTranslation("process.type.administrative")}</Badge></td>
                    <td>{getModifier("oldPerson")}</td>
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
                    <td><Badge color="teal">{getTranslation("process.type.administrative")}</Badge></td>
                    <td>{getModifier("healthCondition")}</td>
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
                    <td><Badge color="teal">{getTranslation("process.type.administrative")}</Badge></td>
                    <td>{getModifier("lifeDanger")}</td>
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
                    <td><Badge color="teal">{getTranslation("process.type.administrative")}</Badge></td>
                    <td>{getModifier("priority")}</td>
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
                    <td><Badge color="teal">{getTranslation("process.type.administrative")}</Badge></td>
                    <td>{getModifier("disabledPerson")}</td>
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
                    <td><Badge color="teal">{getTranslation("process.type.administrative")}</Badge></td>
                    <td>{getTranslation("process.modifiers.noModifier")}</td>
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
                    <td><Badge color="teal">{getTranslation("process.type.administrative")}</Badge></td>
                    <td>{getTranslation("process.modifiers.noModifier")}</td>
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
                    <td><Badge color="teal">{getTranslation("process.type.administrative")}</Badge></td>
                    <td>{getTranslation("process.modifiers.noModifier")}</td>
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
                    <td><Badge color="teal">{getTranslation("process.type.administrative")}</Badge></td>
                    <td>{getTranslation("process.modifiers.noModifier")}</td>
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
                    <td><Badge color="teal">{getTranslation("process.type.administrative")}</Badge></td>
                    <td>{getTranslation("process.modifiers.noModifier")}</td>
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
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}><Pagination total={3} radius="xl" /></div>
          </Group>
        </Paper>
      </Center>
    </AppShell>
  )
}