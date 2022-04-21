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
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Transition
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
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
  const [openDrawer, setOpenDrawer] = useState(false)
  const [navbarTarget, setNavbarTarget] = useState({})
  const smallScreen = useMediaQuery('(min-width: 800px)');

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
      padding={0}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      sx={{
        width: "100vw",
        height: "100vh"
      }}
      header={
        !smallScreen &&
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Burger
              opened={!openDrawer}
              onClick={() => setOpenDrawer(!openDrawer)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
            <Text>e-Process</Text>
          </div>
        </Header>
      }
      navbar={
        <Navbar
          width={{ sm: 200, lg: 300 }}
          height="100vh"
          p="xs"
          hiddenBreakpoint="sm"
          hidden={openDrawer}
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
            <Title order={3}>{getTranslation("process.label")} 2022-07.37895427 <Badge color="teal">{getTranslation("process.type.administrative")}</Badge></Title>
          </Group>
          <Group direction="row">
            <Group direction="column">
              <Text weight="600">{getTranslation("process.interestedParts")}</Text>
              <Text>Fulano x Fulana</Text>
            </Group>
            <Group direction="column">
              <Text weight="600">{getTranslation("process.accessType")}</Text>
              <Text><Badge color="red">{getTranslation("process.accessType.restricted")}</Badge></Text>
            </Group>
          </Group>
        </Paper>
      </Center>
    </AppShell>
  )
}