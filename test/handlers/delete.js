'use strict';

// Load modules

const Lab = require('lab');
const Objection = require('../..');


// Declare internals

const internals = {};


// Test shortcuts

const { describe, it, expect } = exports.lab = Lab.script();


describe('objection:delete', () => {


    it('returns empty status code when success', async ({ context: { server } }) => {

        server.route({
            options: {
                plugins: {
                    objection: {
                        throwIfNotFound: true
                    }
                }
            },
            handler: {
                'objection:delete': {
                    query: (query) => query.debug(),
                    model: {
                        tableName: 'ashk'
                    }
                }
            }
        })
    });
});
