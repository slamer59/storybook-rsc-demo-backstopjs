import { Meta, StoryObj } from '@storybook/react'
import Page from '#app/note/[id]/page'
import { prisma } from '#prisma/prisma'
import Layout from '#app/layout'
import { getUserFromSession } from '#libs/get-user-from-session.mock'

const meta = {
  component: Page,
  decorators(Story) {
    return (
      <Layout>
        <Story />
      </Layout>
    )
  },
  async loaders() {
    // TODO
    // const cookieStore = cookies()
    // cookieStore.set(userCookieKey, await createUserCookie('storybookjs'));

    await prisma.note.create({
      data: {
        id: '1',
        title: 'Module mocking in Storybook?',
        body: "Yup, that's a thing now! 🎉",
        createdBy: 'storybookjs',
      },
    })
    await prisma.note.create({
      data: {
        id: '2',
        title: 'RSC support as well??',
        body: 'RSC is pretty cool, even cooler that Storybook supports it!',
        createdBy: 'storybookjs',
      },
    })
  },
  args: {
    params: { id: '2' },
  },
} satisfies Meta<typeof Page>

export default meta

type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  loaders() {
    getUserFromSession.mockReturnValue('storybookjs')
  }
}

export const NotLoggedIn: Story = {
  loaders() {
    getUserFromSession.mockReturnValue('storybookjs')
  }
}

