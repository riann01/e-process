import { useState } from "react"
import {
  Group,
  Tooltip,
  ActionIcon,
  Paper,
  Input,
  useMantineTheme,
  Container,
  ScrollArea
} from "@mantine/core"
import { Document, Page } from 'react-pdf'
import { useTranslation } from "react-i18next"
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai"
import { BiRotateRight, BiRotateLeft } from "react-icons/bi"
import { BsArrowRightCircleFill, BsArrowLeftCircleFill, BsBorderStyle } from "react-icons/bs"
import { FiDownload } from "react-icons/fi"
import pdf from "../../../assets/6039-21274-1-PB.pdf"
import './pdfConfig'

export default function PdfViewer({ document }) {

  const { t: getTranslation } = useTranslation()
  const theme = useMantineTheme()
  const [pageNumber, setPageNumber] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)
  const color = theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black

  const increasePageNumber = () => {
    if (pageNumber + 1 > numberOfPages) return
    setPageNumber(pageNumber + 1)
  }

  const decreasePageNumber = () => {
    if (pageNumber - 1 < 1) return
    setPageNumber(pageNumber - 1)
  }

  const rotateLeft = () => {
    if (rotation === 0) {
      setRotation(270)
      return
    }
    setRotation(rotation - 90)
  }

  const rotateRight = () => {
    if (rotation === 270) {
      setRotation(0)
      return
    }
    setRotation(rotation + 90)
  }

  const increaseScale = () => {
    if (scale + 0.2 >= 2)
      return
    setScale(scale + 0.1)
  }

  const decreaseScale = () => {
    if (scale - 0.2 <= 1)
      return
    setScale(scale - 0.1)
  }

  const onDocumentLoadSuccess = pdfData => {
    setNumberOfPages(pdfData._pdfInfo.numPages)
  }

  return (
    <Paper
      withBorder
      radius="md"
      sx={{
        width: "100%",
        maxHeight: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        flexDirection: "column"
      }}
    >
      <Group
        direction="row"
        sx={{
          padding: "10px",
          borderBottomWidth: "1.9px",
          borderBottomColor: "#25262B",
          borderBottomStyle: "solid",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Tooltip
          label={getTranslation("pdf.viewer.rotateLeft")}
          position="bottom"
        >
          <ActionIcon
            size="lg"
            radius="100%"
            onClick={() => rotateLeft()}
          >
            <BiRotateLeft size={20} color={color} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          label={getTranslation("pdf.viewer.rotateRight")}
          position="bottom"
        >
          <ActionIcon
            size="lg"
            radius="100%"
            onClick={() => rotateRight()}
          >
            <BiRotateRight size={20} color={color} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          label={getTranslation("pdf.viewer.zoomIn")}
          position="bottom"
        >
          <ActionIcon
            size="lg"
            radius="100%"
            onClick={() => increaseScale()}
          >
            <AiOutlineZoomIn size={20} color={color} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          label={getTranslation("pdf.viewer.zoomOut")}
          position="bottom"
        >
          <ActionIcon
            size="lg"
            radius="100%"
            onClick={() => decreaseScale()}
          >
            <AiOutlineZoomOut size={20} color={color} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          label={getTranslation("pdf.viewer.downloadDocument")}
          position="bottom"
        >
          <ActionIcon
            size="lg"
            radius="100%"
          >
            <FiDownload size={20} color={color} />
          </ActionIcon>
        </Tooltip>
        <Group direction="row">
          <Tooltip
            label={getTranslation("pdf.viewer.lastPage")}
            position="bottom"
          >
            <ActionIcon
              disabled={pageNumber === 1}
              size="lg"
              radius="100%"
              onClick={() => decreasePageNumber()}
            >
              <BsArrowLeftCircleFill size={20} color={color} />
            </ActionIcon>
          </Tooltip>
          <Input
            value={pageNumber}
            onChange={(page) => setPageNumber(page.value)}
            sx={{ width: "75px" }}
          />
          <Tooltip
            label={getTranslation("pdf.viewer.nextPage")}
            position="bottom"
          >
            <ActionIcon
              disabled={pageNumber === numberOfPages}
              size="lg"
              radius="100%"
              onClick={() => increasePageNumber()}
            >
              <BsArrowRightCircleFill size={20} color={color} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
      <ScrollArea
        type="always"
        sx={{
          width: "100%",
          maxHeight: "65vh"
        }}
      >
        <Container
          style={{
            width: "100%",
            maxHeight: "65vh",
            height: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Paper
              radius="sm"
              withBorder
            >
              <Page
                rotate={rotation}
                scale={scale}
                renderMode="canvas"
                pageNumber={pageNumber}
              />
            </Paper>
          </Document>
        </Container>
      </ScrollArea>
    </Paper>
  )
}