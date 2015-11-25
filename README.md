# Transliteration
Transliteration with Slugify

## Installation

```bash
meteor add ongoworks:transliteration
```

## Usage
This is both a server (NPM) and client wrapper of the [Transliteration](https://github.com/andyhu/node-transliteration) package.

This package exports `Transliteration` which is used as:

```
Transliteration('你好，世界'); // ni-hao-shi-jie
Transliteration('你好，世界', {lowercase: false, separator: '_'}); // Ni_Hao_Shi_Jie
```

or slugify

```
Transliteration.slugify("你好 世界");
"ni-hao-shi-jie"
```

As a direct drop in to using getSlug().

```
getSlug = function (slugString) {
  return Transliteration.slugify(slugString);
};
```
