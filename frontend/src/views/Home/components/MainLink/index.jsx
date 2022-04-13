import { UnstyledButton, Group, ThemeIcon, Text } from "@mantine/core"

export default function MainLink({ icon, color, label }) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon size="md" color={color} variant="filled">
          {icon}
        </ThemeIcon>

        <Text size="md" weight="normal">{label}</Text>
      </Group>
    </UnstyledButton>
  )
}