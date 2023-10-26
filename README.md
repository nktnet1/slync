<div align="center">

# [![Slync](logo.svg)](https://github.com/nktnet1/slync)

<!-- [![pipeline](https://github.com/nktnet1/slync/actions/workflows/pipeline.yml/badge.svg)](https://github.com/nktnet1/slync/actions/workflows/pipeline.yml)
&nbsp;
[![codecov](https://codecov.io/gh/nktnet1/slync/branch/main/graph/badge.svg?token=RAC7SKJTGU)](https://codecov.io/gh/nktnet1/slync)
&nbsp;
[![Maintainability](https://api.codeclimate.com/v1/badges/aaae5cf33d58299ed722/maintainability)](https://codeclimate.com/github/nktnet1/slync/maintainability)
&nbsp;
[![Snyk Security](https://snyk.io/test/github/nktnet1/slync/badge.svg)](https://snyk.io/test/github/nktnet1/slync)
&nbsp;
[![GitHub top language](https://img.shields.io/github/languages/top/nktnet1/slync)](https://github.com/search?q=repo%3Anktnet1%2Fslync++language%3ATypeScript&type=code)

[![NPM Version](https://img.shields.io/npm/v/slync?logo=npm)](https://www.npmjs.com/package/slync?activeTab=versions)
&nbsp;
[![install size](https://packagephobia.com/badge?p=slync)](https://packagephobia.com/result?p=slync)
&nbsp;
[![Depfu Dependencies](https://badges.depfu.com/badges/6c4074c4d23ad57ee2bfd9ff90456090/overview.svg)](https://depfu.com/github/nktnet1/slync?project_id=39032)
&nbsp;
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fnktnet1%2Fslync.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fnktnet1%2Fslync?ref=badge_shield)
&nbsp;
[![NPM License](https://img.shields.io/npm/l/slync)](https://opensource.org/license/mit/)
&nbsp;
[![GitHub issues](https://img.shields.io/github/issues/nktnet1/slync.svg?style=social)](https://github.com/nktnet1/slync/issues)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=nktnet1_slync&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=nktnet1_slync)
&nbsp;
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/65161ae4d1c646ed83c9ef47b0a11473)](https://app.codacy.com/gh/nktnet1/slync/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
&nbsp;
[![DeepSource](https://app.deepsource.com/gh/nktnet1/slync.svg/?label=active+issues&show_trend=true&token=r1frerF1-N2Mhrc7ZXIC1uNa)](https://app.deepsource.com/gh/nktnet1/slync/)
&nbsp;
[![codebeat badge](https://codebeat.co/badges/acc44573-9938-4a14-bc41-7eb6a58dffbb)](https://codebeat.co/projects/github-com-nktnet1-slync-main)
&nbsp;
[![GitHub stars](https://img.shields.io/github/stars/nktnet1/slync.svg?style=social)](https://github.com/nktnet1/slync/stargazers)

[![Downloads Total](https://badgen.net/npm/dt/slync)](https://moiva.io/?npm=slync)
&nbsp;
[![Downloads Yearly](https://badgen.net/npm/dy/slync)](https://moiva.io/?npm=slync)
&nbsp;
[![Downloads Monthly](https://badgen.net/npm/dm/slync)](https://moiva.io/?npm=slync)
&nbsp;
[![Downloads Weekly](https://badgen.net/npm/dw/slync)](https://moiva.io/?npm=slync)
&nbsp;
[![Downloads Daily](https://badgen.net/npm/dd/slync)](https://moiva.io/?npm=slync) -->

<!-- --- -->

0 dependencies event-loop blocking synchronous sleep

sleep + sync = slync

modelled after [atomic-sleep](https://github.com/davidmarkclements/atomic-sleep)

</div>

---

- [1. Installation](#1-installation)
- [2. Usage](#2-usage)
    - [2.1. id](#21-id)
    - [2.2. options](#22-options)
    - [2.3. return](#23-return)
- [3. License](#3-license)
- [4. Limitations](#4-limitations)
- [5. Caveats](#5-caveats)
    - [5.1. Idea](#51-idea)
    - [5.2. Discovery](#52-approach)
    - [5.3. Result](#53-result)

## 1. Installation

```
npm install slync
```

## 2. Usage

Try with [Replit](https://replit.com/@nktnet1/slync-example#index.js).

```javascript
// import slync from 'slync';
const slync = require('slync');

setTimeout(() => {
  console.log('This will print after 500 milliseconds');
}, 500);

slync(1000);

console.log('This will print after 1000 milliseconds!');
```


## 3. License

<details closed>
<summary>
  Massachusetts Institute of Technology
  (<a href="https://opensource.org/license/mit" target="_blank">MIT</a>)
</summary>

<br/>

```
Copyright (c) 2023 Khiet Tam Nguyen

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the “Software”),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
```

</details>

## 4. Limitations

There are currently no known limitations.

## 5. Caveats

**slync** was modelled after [atomic-sleep](https://github.com/davidmarkclements/atomic-sleep), with some minor differences:
- slync is written in [TypeScript](https://www.typescriptlang.org)
- slync only accepts 'number' for the ms parameter, [atomic-sleep](https://github.com/davidmarkclements/atomic-sleep) also accepts 'bigint'
- **slync** will determine which sleep method to use (atomic vs naive) at runtime

For synchronous non-blocking sleep, look into [deasync](https://github.com/abbr/deasync).