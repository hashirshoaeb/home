## Setup And Custom-Deployment 🔧

1. To Get Started, create a new repository named \<your-username>.github.io
1.  Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/editable-stuff/configurations.json](./src/editable-stuff/configurations.json) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)
5. Change URL in [package.json](./package.json) file:

   ```json
   "homepage": "https://<your-username>.github.io"
   ```

6. Now you need to go to [pages.js](../pages.js#L3)
There you must now change the 3rd line to:

```js
const repoURL = "https://github.com/<your-username>/<your-username>.github.io.git";
```

6. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).


8. To deploy website run:

   ```bash
    npm run build
    npm run custom-deploy
   ```

9. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io
   ```

Facing issues? Feel free to contact at hashirshoaeb@gmail.com.