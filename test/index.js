'use strict';

// Load modules

const Lab = require('lab');
const Hapi = require('hapi');

const Objection = require('..');


// Declare internals

const internals = {};


// Test shortcuts

const { describe, it, expect, beforeEach, afterEach } = exports.lab = Lab.script();


describe('objection', () => {

    it('should register with default options', async () => {

        const server = Hapi.server();
        await server.register(Objection);
    });
});
