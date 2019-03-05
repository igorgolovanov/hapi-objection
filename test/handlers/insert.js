'use strict';

// Load modules

const Lab = require('lab');
const Hapi = require('hapi');

const Objection = require('../..');


// Declare internals

const internals = {};


// Test shortcuts

const { describe, it, expect, before } = exports.lab = Lab.script();


describe('objection:insert', () => {

    before(async ({ context }) => {
        const server = context.server = Hapi.server();
        await server.register(Plugin)
    });

    it('', async ({ context }) => {
        context.server.route({})
    });
});
