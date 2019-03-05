'use strict';

// Load modules

const Lab = require('lab');
const Hapi = require('hapi');

const Objection = require('../..');


// Declare internals

const internals = {};


// Test shortcuts

const { describe, it, expect, beforeEach, afterEach } = exports.lab = Lab.script();


describe('objection:query', () => {

    beforeEach(async ({ context }) => {

        const server = context.server = Hapi.server();
        await server.register({ plugin: Objection });

    });

    afterEach(async ({ context }) => {

        await context.server.stop();
    });

    it('register handler with default options', async ({ context: { server } }) => {

        server.route({
            path: '/test1',
            method: '*',
            handler: {
                'objection:query': {
                    model: {
                        tableName: 'test123'
                    }
                }
            }
        });

        await server.inject('/test1');
    });



});
