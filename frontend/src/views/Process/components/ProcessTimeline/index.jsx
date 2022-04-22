import { Paper, Text, Notification } from "@mantine/core"
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
      <Text weight="bold">{getTranslation("process.timeline.title")}</Text>
      <Notification
        disallowClose
        title={`Dispatch - ${new Date().toDateString()}`}
        icon={<AiOutlineFileAdd size={18} />}
      >
        Dispatch included with 2 files by <strong>Fulano de Tal</strong>.
      </Notification>
      
      
    </Paper>
  )
}