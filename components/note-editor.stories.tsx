import { type Meta, type StoryObj } from '@storybook/react';
import NoteEditor from "./note-editor";

const meta = {
  component: NoteEditor,
  args: {
    //open-pr-long-running-branch
    initialTitle: 'This title is changed from the long running branch and still open',
    initialBody: 'This is a body',
    noteId: 1,
  }
} satisfies Meta<typeof NoteEditor>

export default meta;

type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const Draft: Story = {
  args: {
    noteId: undefined,
  }
}