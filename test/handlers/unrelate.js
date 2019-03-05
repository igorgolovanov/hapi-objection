'use strict';

// Load modules

const Lab = require('lab');
const Hapi = require('hapi');

const Objection = require('../..');


// Declare internals

const internals = {};


// Test shortcuts

const { describe, it, expect, beforeEach, afterEach } = exports.lab = Lab.script();


describe('objection:unrelate', () => {

    beforeEach(async ({ context }) => {

        const server = context.server = Hapi.server();
        await server.register({ plugin: Objection });
    });

});
