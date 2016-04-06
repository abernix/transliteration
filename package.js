Package.describe({
  summary: "Transliteration - transliteration with slugify",
  name: "abernix:transliteration",
  version: "0.1.1",
  git: "https://github.com/abernix/transliteration.git"
});

Npm.depends({
  transliteration: "0.1.1"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.2");

  api.addFiles("lib/transliteration.js", "client");
  api.addFiles("transliteration.js", ["server"]);
  api.export("Transliteration");
});
