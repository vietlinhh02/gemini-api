# Gemini-API Demo


A demo repo rebuild [ChatGPT - DEMO.](https://github.com/ddiu8081/chatgpt-demo)

**🍿 Live preview**: https://gemini-api-vietlinhh02s-projects.vercel.app

> ⚠️ Notice: The app is for learning purposes only. It is not to be used for commercial purposes.

![chat-logo](/public/gemni.png)

## Running Locally

### Pre environment
1. **Node**: Check that both your development environment and deployment environment are using `Node v18` or later. You can use [nvm](https://github.com/nvm-sh/nvm) to manage multiple `node` versions locally.
   ```bash
    node -v
   ```
2. **PNPM**: We recommend using [pnpm](https://pnpm.io/) to manage dependencies. If you have never installed pnpm, you can install it with the following command:
   ```bash
    npm i -g pnpm
   ```
3. **GEMINI_API_KEY**: Before running this application, you need to obtain the API key from OpenAI. You can register the API key at [https://aistudio.google.com](https://aistudio.google.com).

### Getting Started

1. Install dependencies
   ```bash
    pnpm install
   ```
2. Copy the `.env.example` file, then rename it to `.env`, and add your [GEMINI API key](https://aistudio.google.com/app/apikey) to the `.env` file.
   ```bash
    GEMINI_API_KEY=sk-xxx...
   ```
3. Run the application, the local project runs on `http://localhost:3000/`
   ```bash
    pnpm run dev
   ```

## Deploy

### Deploy With Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fddiu8081%2Fchatgpt-demo&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20Key&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys)



> #### 🔒 Need website password?
>
> Deploy with the [`SITE_PASSWORD`](#environment-variables)
>
> <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvietlinhh02%2Fgemini-api&env=GEMINI_API_KEY&env=SITE_PASSWORD&envDescription=GEMINI%20API%20Key&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys" alt="Deploy with Vercel" target="_blank"><img src="https://vercel.com/button" alt="Deploy with Vercel" height=24 style="vertical-align: middle; margin-right: 4px;"></a>

![image](https://cdn.jsdelivr.net/gh/yzh990918/static@master/20230310/image.4wzfb79qt7k0.webp)


### Deploy With Netlify

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ddiu8081/chatgpt-demo#OPENAI_API_KEY=&HTTPS_PROXY=&OPENAI_API_BASE_URL=&HEAD_SCRIPTS=&PUBLIC_SECRET_KEY=&OPENAI_API_MODEL=&SITE_PASSWORD=)

**Step-by-step deployment tutorial:**

1. [Fork](https://github.com/vietlinhh02/gemini-api/fork) this project, Go to [https://app.netlify.com/start](https://app.netlify.com/start) new Site, select the project you `forked` done, and connect it with your `GitHub` account.

![image](https://cdn.jsdelivr.net/gh/yzh990918/static@master/20230310/image.3nlt4hgzb16o.webp)

![image](https://cdn.jsdelivr.net/gh/yzh990918/static@master/20230310/image.5fhfouap270g.webp)


2. Select the branch you want to deploy, then configure environment variables in the project settings.

![image](https://cdn.jsdelivr.net/gh/yzh990918/static@master/20230311/image.gfs9lx8c854.webp)

3. Select the default build command and output directory, Click the `Deploy Site` button to start deploying the site.

![image](https://cdn.jsdelivr.net/gh/yzh990918/static@master/20230311/image.4jky9e1wbojk.webp)

### Deploy on more servers

Please refer to the official deployment documentation: https://docs.astro.build/en/guides/deploy

## Environment Variables

You can control the website through environment variables.

| Name                | Description                                                                                          | Default                                     |
|---------------------|------------------------------------------------------------------------------------------------------|---------------------------------------------|
| `GEMINI_API_KEY`    | Your API Key for GEMINI.                                                                             | `null`                                      |
| `HTTPS_PROXY`       | Provide proxy for GEMINI API. e.g. `http://127.0.0.1:7890`                                           | `null`                                      |
| `API_BASE_URL`      | Custom base url for GEMINI API.                                                                      | `https://generativelanguage.googleapis.com` |
| `HEAD_SCRIPTS`      | Inject analytics or other scripts before `</head>` of the page                                       | `null`                                      |
| `PUBLIC_SECRET_KEY` | Secret string for the project. Use for generating signatures for API calls                           | `null`                                      |
| `SITE_PASSWORD`     | Set password for site, support multiple password separated by comma. If not set, site will be public | `null`                                      |
| `GEMINI_API_MODEL`  | ID of the model to use. [List models](https://ai.google.dev/gemini-api/docs/models/gemini)    | `gemini-1.5-pro`                            |

## Enable Automatic Updates

After forking the project, you need to manually enable Workflows and Upstream Sync Action on the Actions page of the forked project. Once enabled, automatic updates will be scheduled every day:

![](https://cdn.jsdelivr.net/gh/yzh990918/static@master/20230518/image.2hhnrsrd2t1c.webp)



## Contributing

This project exists thanks to all those who contributed.

Thank you to all our supporters!🙏

## License

MIT © [vietlinhh02](https://github.com/vietlinh02/gemini-api/blob/main/LICENSE)
