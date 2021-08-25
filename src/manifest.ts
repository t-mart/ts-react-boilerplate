import { ManifestV3 } from 'rollup-plugin-chrome-extension'

const manifest: ManifestV3 = {
  manifest_version: 3,
  background: {
    service_worker: 'background/index.ts',
  },
  content_scripts: [
    {
      js: ['content/index.ts'],
      matches: ['https://*/*', 'http://*/*'],
    },
  ],
  action: {
    default_popup: 'pages/popup/index.html',
  },
}

export default manifest
