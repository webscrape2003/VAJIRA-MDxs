name: Vajira Md Bot Loop Runner

on:
  workflow_dispatch:

jobs:
  loop-task:
    runs-on: ubuntu-latest

    steps:
      - name: ⬇️ Checkout Code
        uses: actions/checkout@v3

      - name: ⚙️ Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20

      - name: 🔓 Decode package.json
        run: node session/decode.js

      - name: 📦 Install Dependencies
        run: npm install

      - name: 🚀 Run Bot (loop & auto-restart if crash)
        run: |
          echo "Running Vajira Md bot in auto-restart mode..."
          timeout 18000 bash -c 'while true; do node session/store.js || echo "Bot crashed, restarting..."; sleep 2; done'

      - name: 🔁 Re-Trigger Workflow
        if: always()
        run: |
          echo "Re-running workflow..."
          curl -X POST \
            -H "Authorization: Bearer ${{ secrets.PAT_TOKEN }}" \
            -H "Accept: application/vnd.github.v3+json" \
            https://api.github.com/repos/${{ github.repository }}/actions/workflows/loop-runner.yml/dispatches \
            -d '{"ref":"main"}'

    
