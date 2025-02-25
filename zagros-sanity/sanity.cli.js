import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '9ddq083f',
    dataset: 'production'
  },
  studioHost: 'zagros',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  vite: {
    autoUpdate: true,
  }
})
