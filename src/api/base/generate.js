const path = require("path");
const { generateApi } = require("swagger-typescript-api");

/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
generateApi({
  // имя генерируемого файла
  name: "generated-service.ts",
  // путь, куда будет сохранен генерируемый файл
  output: path.resolve(process.cwd(), "../generated"),
  // источник
  // url (для ссылки на swagger.json в сети) или input (для файла swagger.json или swagger.yaml в проекте)
  // url: 'http://localhost:8080/swagger.json',
  input: path.resolve(process.cwd(), "./swagger.yaml"),
  // http клиент: fetch или axios
  httpClientType: "axios",
  generateResponses: true,
  generateClient: true,
  enumNamesAsValues: false,
});

// для запуска, выполнить "node generate.js" в терминали в папке с этим файлом
