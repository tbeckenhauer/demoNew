SystemJS.config({
  devConfig: {
    'map': {
      'angular-mocks': 'npm:angular-mocks@1.6.10',
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.21'
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'js'
    }
  },
  transpiler: 'plugin-babel'
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'angular': 'npm:angular@1.6.10',
    'angular-ui-router': 'npm:angular-ui-router@1.0.0-beta.3',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'babel': 'npm:babel-core@6.26.3',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'css': 'github:systemjs/plugin-css@0.1.37',
    'events': 'github:jspm/nodelibs-events@0.2.2',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'os': 'github:jspm/nodelibs-os@0.2.2',
    'path': 'github:jspm/nodelibs-path@0.2.3',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.2',
    'todomvc-app-css': 'npm:todomvc-app-css@2.1.1',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha'
  },
  packages: {
    'npm:babel-core@6.26.3': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.26.0',
        'babel-messages': 'npm:babel-messages@6.23.0',
        'babel-generator': 'npm:babel-generator@6.26.1',
        'babel-helpers': 'npm:babel-helpers@6.24.1',
        'babel-template': 'npm:babel-template@6.26.0',
        'babel-register': 'npm:babel-register@6.26.0',
        'convert-source-map': 'npm:convert-source-map@1.5.1',
        'slash': 'npm:slash@1.0.0',
        'path-is-absolute': 'npm:path-is-absolute@1.0.1',
        'json5': 'npm:json5@0.5.1',
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'minimatch': 'npm:minimatch@3.0.4',
        'private': 'npm:private@0.1.8',
        'babel-traverse': 'npm:babel-traverse@6.26.0',
        'debug': 'npm:debug@2.6.9',
        'source-map': 'npm:source-map@0.5.7',
        'babel-types': 'npm:babel-types@6.26.0',
        'lodash': 'npm:lodash@4.17.10',
        'babylon': 'npm:babylon@6.18.0'
      }
    },
    'npm:babel-generator@6.26.1': {
      'map': {
        'babel-messages': 'npm:babel-messages@6.23.0',
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'source-map': 'npm:source-map@0.5.7',
        'babel-types': 'npm:babel-types@6.26.0',
        'lodash': 'npm:lodash@4.17.10',
        'trim-right': 'npm:trim-right@1.0.1',
        'detect-indent': 'npm:detect-indent@4.0.0',
        'jsesc': 'npm:jsesc@1.3.0'
      }
    },
    'npm:babel-helpers@6.24.1': {
      'map': {
        'babel-template': 'npm:babel-template@6.26.0',
        'babel-runtime': 'npm:babel-runtime@6.26.0'
      }
    },
    'npm:babel-messages@6.23.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0'
      }
    },
    'npm:babel-template@6.26.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'babel-traverse': 'npm:babel-traverse@6.26.0',
        'babel-types': 'npm:babel-types@6.26.0',
        'lodash': 'npm:lodash@4.17.10',
        'babylon': 'npm:babylon@6.18.0'
      }
    },
    'npm:babel-register@6.26.0': {
      'map': {
        'babel-core': 'npm:babel-core@6.26.3',
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'lodash': 'npm:lodash@4.17.10',
        'home-or-tmp': 'npm:home-or-tmp@2.0.0',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'source-map-support': 'npm:source-map-support@0.4.18',
        'core-js': 'npm:core-js@2.5.5'
      }
    },
    'npm:babel-traverse@6.26.0': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.26.0',
        'babel-messages': 'npm:babel-messages@6.23.0',
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'debug': 'npm:debug@2.6.9',
        'babel-types': 'npm:babel-types@6.26.0',
        'lodash': 'npm:lodash@4.17.10',
        'invariant': 'npm:invariant@2.2.4',
        'babylon': 'npm:babylon@6.18.0',
        'globals': 'npm:globals@9.18.0'
      }
    },
    'npm:babel-code-frame@6.26.0': {
      'map': {
        'esutils': 'npm:esutils@2.0.2',
        'js-tokens': 'npm:js-tokens@3.0.2',
        'chalk': 'npm:chalk@1.1.3'
      }
    },
    'npm:babel-types@6.26.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'esutils': 'npm:esutils@2.0.2',
        'lodash': 'npm:lodash@4.17.10',
        'to-fast-properties': 'npm:to-fast-properties@1.0.3'
      }
    },
    'npm:minimatch@3.0.4': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.11'
      }
    },
    'npm:babel-runtime@6.26.0': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.11.1',
        'core-js': 'npm:core-js@2.5.5'
      }
    },
    'npm:source-map-support@0.4.18': {
      'map': {
        'source-map': 'npm:source-map@0.5.7'
      }
    },
    'npm:debug@2.6.9': {
      'map': {
        'ms': 'npm:ms@2.0.0'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'has-ansi': 'npm:has-ansi@2.0.0',
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'supports-color': 'npm:supports-color@2.0.0'
      }
    },
    'npm:home-or-tmp@2.0.0': {
      'map': {
        'os-tmpdir': 'npm:os-tmpdir@1.0.2',
        'os-homedir': 'npm:os-homedir@1.0.2'
      }
    },
    'npm:detect-indent@4.0.0': {
      'map': {
        'repeating': 'npm:repeating@2.0.1'
      }
    },
    'npm:brace-expansion@1.1.11': {
      'map': {
        'concat-map': 'npm:concat-map@0.0.1',
        'balanced-match': 'npm:balanced-match@1.0.0'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:invariant@2.2.4': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1'
      }
    },
    'npm:loose-envify@1.3.1': {
      'map': {
        'js-tokens': 'npm:js-tokens@3.0.2'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:repeating@2.0.1': {
      'map': {
        'is-finite': 'npm:is-finite@1.0.2'
      }
    },
    'npm:is-finite@1.0.2': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.1'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'base64-js': 'npm:base64-js@1.3.0',
        'ieee754': 'npm:ieee754@1.1.11'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.3.6'
      }
    },
    'npm:readable-stream@2.3.6': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'inherits': 'npm:inherits@2.0.3',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@2.0.0',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'string_decoder': 'npm:string_decoder@1.1.1'
      }
    },
    'npm:string_decoder@1.1.1': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.12.0'
      }
    },
    'npm:crypto-browserify@3.12.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.2.0',
        'browserify-cipher': 'npm:browserify-cipher@1.0.1',
        'diffie-hellman': 'npm:diffie-hellman@5.0.3',
        'browserify-sign': 'npm:browserify-sign@4.0.4',
        'create-hmac': 'npm:create-hmac@1.1.7',
        'public-encrypt': 'npm:public-encrypt@4.0.2',
        'randomfill': 'npm:randomfill@1.0.4',
        'randombytes': 'npm:randombytes@2.0.6',
        'create-ecdh': 'npm:create-ecdh@4.0.1',
        'pbkdf2': 'npm:pbkdf2@3.0.16'
      }
    },
    'npm:create-hash@1.2.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'ripemd160': 'npm:ripemd160@2.0.2',
        'sha.js': 'npm:sha.js@2.4.11',
        'md5.js': 'npm:md5.js@1.3.4'
      }
    },
    'npm:create-hmac@1.1.7': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'create-hash': 'npm:create-hash@1.2.0',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'ripemd160': 'npm:ripemd160@2.0.2',
        'sha.js': 'npm:sha.js@2.4.11'
      }
    },
    'npm:browserify-sign@4.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.2.0',
        'create-hmac': 'npm:create-hmac@1.1.7',
        'parse-asn1': 'npm:parse-asn1@5.1.1',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'elliptic': 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:diffie-hellman@5.0.3': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.6',
        'miller-rabin': 'npm:miller-rabin@4.0.1',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:public-encrypt@4.0.2': {
      'map': {
        'create-hash': 'npm:create-hash@1.2.0',
        'randombytes': 'npm:randombytes@2.0.6',
        'parse-asn1': 'npm:parse-asn1@5.1.1',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:randomfill@1.0.4': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'randombytes': 'npm:randombytes@2.0.6'
      }
    },
    'npm:randombytes@2.0.6': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2'
      }
    },
    'npm:pbkdf2@3.0.16': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'create-hash': 'npm:create-hash@1.2.0',
        'create-hmac': 'npm:create-hmac@1.1.7',
        'ripemd160': 'npm:ripemd160@2.0.2',
        'sha.js': 'npm:sha.js@2.4.11'
      }
    },
    'npm:browserify-cipher@1.0.1': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.1',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'browserify-aes': 'npm:browserify-aes@1.2.0'
      }
    },
    'npm:cipher-base@1.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2'
      }
    },
    'npm:browserify-des@1.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:evp_bytestokey@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'md5.js': 'npm:md5.js@1.3.4'
      }
    },
    'npm:ripemd160@2.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@3.0.4'
      }
    },
    'npm:sha.js@2.4.11': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2'
      }
    },
    'npm:md5.js@1.3.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@3.0.4'
      }
    },
    'npm:browserify-aes@1.2.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'create-hash': 'npm:create-hash@1.2.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:parse-asn1@5.1.1': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.2.0',
        'create-hash': 'npm:create-hash@1.2.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'pbkdf2': 'npm:pbkdf2@3.0.16',
        'asn1.js': 'npm:asn1.js@4.10.1'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.6',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:create-ecdh@4.0.1': {
      'map': {
        'elliptic': 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:miller-rabin@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'brorand': 'npm:brorand@1.1.0'
      }
    },
    'npm:elliptic@6.4.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.8',
        'brorand': 'npm:brorand@1.1.0',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'hmac-drbg': 'npm:hmac-drbg@1.0.1',
        'hash.js': 'npm:hash.js@1.1.3'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1'
      }
    },
    'npm:hash-base@3.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2'
      }
    },
    'npm:asn1.js@4.10.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.8',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1'
      }
    },
    'npm:hmac-drbg@1.0.1': {
      'map': {
        'hash.js': 'npm:hash.js@1.1.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1'
      }
    },
    'npm:hash.js@1.1.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1'
      }
    }
  }
});
