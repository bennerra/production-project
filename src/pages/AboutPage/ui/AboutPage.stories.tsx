import type { Meta, StoryObj } from '@storybook/react'
import {
  ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const AboutPageLight: Story = {
  args: {}
}

export const AboutPageDark: Story = {
  args: {}
}
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)]
