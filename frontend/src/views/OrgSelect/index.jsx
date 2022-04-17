import { useState } from "react"
import {
  Center,
  Transition,
  Paper,
  Container,
  Text,
  Button,
  SegmentedControl,
  Box,
  ActionIcon,
  LoadingOverlay,
  Title,
  useMantineTheme,
  Tooltip
} from "@mantine/core"
import { CgOrganisation } from "react-icons/cg"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useTranslation } from "react-i18next";
import getOrgsTypes from "./orgsType"
import { useDispatch, useSelector } from "react-redux";
import { setColorScheme } from "../../app/redux/actions/colorScheme/colorScheme";

export default function OrgSelect() {
  const theme = useMantineTheme()
  const dispatch = useDispatch()
  const { t: getTranslation } = useTranslation()
  const [organization, setOrganization] = useState("")
  const [visible, setVisible] = useState(false)
  const colorScheme = useSelector(state => state.colorSchemeReducer.colorScheme)

  const orgsTypes = getOrgsTypes(theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black)

  const changeColorScheme = () => {
    dispatch(setColorScheme(colorScheme === "dark" ? "light" : "dark"))
  }

  return (
    <Center
      sx={theme => ({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.dark[0],
        width: "100vw", height: "100vh"
      })}
    >
      <Container
        sx={{
          position: "absolute",
          top: "15%"
        }}
      >
        <Title
          order={1}
          sx={theme => ({
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            textAlign: "center",
            fontFamily: "Montserrat"
          })}
        >
          {getTranslation("label.welcome")}
        </Title>
        <Title
          order={2}
          sx={theme => ({
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            textAlign: "center",
            fontFamily: "Montserrat"
          })}
        >
          e-Process
        </Title>
      </Container>
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
      <Paper
        shadow="xl"
        p="md"
        radius="md"
        sx={(theme) => ({
          minWidth: "30vw",
          maxWidth: "700px",
          position: 'relative'
        })}
      >
        <LoadingOverlay visible={visible} />
        <Container style={{ display: "flex", gap: "3%", marginBottom: "30px", justifyContent: "center", width: "100%" }}>
          <CgOrganisation size={25} color={theme.colorScheme === "dark" ? "#FFF" : "#000"} />
          <Text weight="bold">{getTranslation("window.init.orgSelect.title")}</Text>
        </Container>
        <Container style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <SegmentedControl
            fullWidth
            orientation="vertical"
            size="lg"
            value={organization}
            onChange={value => setOrganization(value)}
            data={
              orgsTypes.map(org => ({
                value: org.typeName,
                label: (
                  <>
                    {org.icon}
                    <Center>{getTranslation(org.typeName)}</Center>
                  </>
                )
              }))
            }
          />
          <Button
            onClick={() => setVisible(!visible)}
            sx={() => ({ marginBottom: "20px" })}
          >
            {getTranslation("button.next")}
          </Button>
        </Container>
      </Paper>

    </Center>

  )
}