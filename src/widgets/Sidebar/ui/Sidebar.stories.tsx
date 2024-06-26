import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import {
  ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const SidebarLight: Story = {
  args: {}
}

export const SidebarDark: Story = {
  args: {}
}
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)]
