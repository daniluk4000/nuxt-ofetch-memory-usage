1. `yarn install`
2. `yarn test`
3. Open `chrome://inspect`
4. DDos your server (ex. `siege -c 30 http://localhost:3000/`)
5. Disable `timeout` or `asyncContext` and compare results

Relates to https://github.com/unjs/ofetch/issues/361
