import { Paper, Text, Notification, Tabs } from "@mantine/core"
import { AiOutlineFileAdd } from "react-icons/ai"
import { useTranslation } from "react-i18next"

export default function ProcessTimeline() {

  const { t: getTranslation } = useTranslation()

  return (
    <Paper
      withBorder
      radius="md"
      sx={{
        width: "100%",
        height: "100%",
        padding: "10px"
      }}
    >
      <Tabs grow variant="pills">
        <Tabs.Tab label={getTranslation("process.timeline.title")}>
          <Notification
            disallowClose
            title={`Dispatch - ${new Date().toDateString()}`}
            icon={<AiOutlineFileAdd size={18} />}
          >
            Dispatch included with 2 files by <strong>Fulano de Tal</strong>.
          </Notification>
        </Tabs.Tab>
        <Tabs.Tab label={getTranslation("process.files.tree.title")}>
          Second tab content
        </Tabs.Tab>
      </Tabs>
    </Paper>
  )
}