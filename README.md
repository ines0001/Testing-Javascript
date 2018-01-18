Formation Javascript Testing
=========================


### Support de cours

Grafikart : tutorial [youtube](https://www.youtube.com/watch?v=Zdz7cSsTMSk) 

Grafikart : présentation et sommaire [ici](https://www.grafikart.fr/formations/javascript-unit-test/premiers-tests)


### Liens utiles:

Mocha : [site officielle](https://mochajs.org/#installation)

---

Installation Mocha
------------

Pour `nodejs` en local (pas les droit en global sous `Glitch`)
```
$ npm install --save-dev mocha

```

Package.json
------
```
"name": "mocha-testing",
  "version": "0.0.1",
  "description": "What am I about?",
  "main": "server.js",
  "scripts": {
    "start": "",
    "test": "./node_modules/mocha/bin/mocha -R list"
  },
  "dependencies": {
    "express": "^4.16.2"
  },
  "engines": {
    "node": "8.x"
  },
  "repository": {
    "url": "https://glitch.com/edit/#!/welcome-project"
  },
  "license": "MIT",
  "keywords": [
    "node",
    "glitch",
    "express"
  ],
  "devDependencies": {
    "mocha": "^5.0.0"
  }
```

Fichier test
------
`.test/testSpec.js`
```
var assert = require('assert');

describe('Array', function() {
  describe('#indexOf() false', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
    
   
  });
  
  describe('#indexOf() true', function() {
    it('should return 0 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(2), 1);
    });
    
   
  });
});

```

Test en ligne de commande
------
```
$ npm test
> mocha-testing@0.0.1 test /app
> ./node_modules/mocha/bin/mocha -R list
  ✓ Array #indexOf() false should return -1 when the value is not present: 0ms
  ✓ Array #indexOf() true should return 0 when the value is not present: 0ms
  2 passing (9ms)

```