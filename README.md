# confish
A tiny module to render json data into mustache templates. It is built to work well with my [shtore](https://www.npmjs.com/package/shtore) tool.

## CLI
JSON data should be passed via stdin. a template file can be specified as the only argument and the rendered template will be printed to stdout.

So to render some data into a template and write it back to disc you could do:

```sh
echo '"abc"' | confish template.conf > rendered.conf
```
