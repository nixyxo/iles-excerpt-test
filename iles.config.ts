import { defineConfig } from 'iles'

export default defineConfig({
    modules: [
        ['@islands/excerpt', { separator: '<!-- ... -->' }],
    ]
})
