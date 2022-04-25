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
  Transition,
  ScrollArea
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { MdElderly, MdOutlineAccessible, MdDarkMode, MdLightMode } from "react-icons/md"
import { GiHealthNormal, GiLifeTap } from "react-icons/gi"
import { BsChevronRight, BsChevronDown } from "react-icons/bs"
import { BiRotateLeft, BiRotateRight } from "react-icons/bi"
import { FaArrowCircleUp } from "react-icons/fa"
import { FiDownloadCloud, FiEdit3 } from "react-icons/fi"
import { VscNewFile } from "react-icons/vsc"
import { useTranslation } from "react-i18next"
import MainLink from "./components/MainLink"
import navbarContent from "./navbarContent"
import { UserSection } from "./components/UserSection"
import ProcessTimeline from "./components/ProcessTimeline"

import { useDispatch, useSelector } from "react-redux"
import { setColorScheme } from "../../app/redux/actions/colorScheme/colorScheme"
import PdfViewer from "../../app/components/PdfViewer"

export default function Home() {

  const { t: getTranslation } = useTranslation()
  const theme = useMantineTheme()
  const dispatch = useDispatch()
  const colorScheme = useSelector(state => state.colorSchemeReducer.colorScheme)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [navbarTarget, setNavbarTarget] = useState({})
  const [favorite, setFavorite] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const smallScreen = useMediaQuery('(min-width: 800px)')

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

  const handleFavorite = () => {
    setFavorite(!favorite)
  }

  const onDocumentLoadSuccess = () => { console.log("sucesso parça") }

  const changeColorScheme = () => {
    dispatch(setColorScheme(colorScheme === "dark" ? "light" : "dark"))
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
            <Tooltip
              label={getTranslation("theme.switch")}
              position="bottom"
              placement="end"
              gutter={10}
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                margin: "10px",
                cursor: "pointer"
              }}
            >
              <ActionIcon
                variant="light"
                size="md"
                color="blue"
                radius="lg"
                onClick={() => changeColorScheme()}
              >
                {theme.colorScheme === "dark" ? <MdLightMode size={25} color={theme.colors.blue[3]} /> : <MdDarkMode size={25} color={theme.colors.blue[3]} />}
              </ActionIcon>
            </Tooltip>
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
            minWidth: "98%",
            minHeight: "98%",
            padding: "20px"
          }}
        >
          <Group style={{ width: "100%" }}>
            <Group direction="column" sx={{ width: "75%", height: "100%" }}>
              <Group direction="row">
                <Group
                  direction="column"
                  sx={{
                    borderRadius: "7px",
                    padding: "10px",
                    flexDirection: "row",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
                      transition: "background-color .1s ease-in-out"
                    }
                  }}
                >
                  <Title order={3}>{getTranslation("process.label")} 2022-07.37895427</Title>
                  <Badge color="teal">{getTranslation("process.type.administrative")}</Badge>
                  <BsChevronDown color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black} size={20} />
                </Group>
                <Paper
                  withBorder
                  radius="md"
                  sx={{
                    padding: "7px"
                  }}
                >
                  <Group direction="row">
                    <Tooltip
                      label={getTranslation("process.button.download")}
                      position="bottom"
                      withArrow
                    >
                      <ActionIcon size="lg" radius="100%">
                        <FiDownloadCloud size={20} color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black} />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip
                      label={getTranslation("process.button.edit")}
                      position="bottom"
                      withArrow
                    >
                      <ActionIcon size="lg" radius="100%">
                        <FiEdit3 size={20} color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black} />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip
                      label={getTranslation("process.button.addFiles")}
                      position="bottom"
                      withArrow
                    >
                      <ActionIcon size="lg" radius="100%">
                        <VscNewFile size={20} color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black} />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip
                      label={favorite ? getTranslation("process.button.unfavorite") : getTranslation("process.button.favorite")}
                      position="bottom"
                      withArrow
                    >
                      <ActionIcon
                        size="lg"
                        radius="100%"
                        onClick={() => handleFavorite()}
                      >
                        {favorite ?
                          <AiFillStar size={20} color="#FAD500" /> :
                          <AiOutlineStar
                            size={20}
                            color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                          />}
                      </ActionIcon>
                    </Tooltip>
                  </Group>
                </Paper>
              </Group>
              <Group>
                <Paper
                  withBorder
                  radius="md"
                  sx={{
                    padding: "10px"
                  }}
                >
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
              </Group>
              <PdfViewer />
            </Group>
            <Group sx={{ width: "23%", height: "100%" }}>
              <ProcessTimeline />
            </Group>
          </Group>
        </Paper>
      </Center>
    </AppShell>
  )
}