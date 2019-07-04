'use strict';

// Load modules

const Lab = require('@hapi/lab');
const Hapi = require('@hapi/hapi');

const Objection = require('..');


// Declare internals

const internals = {};


// Test shortcuts

const { describe, it, expect } = exports.lab = Lab.script();


describe('objection', () => {

    it('should register with default options', async () => {

        const server = Hapi.server();
        await server.register(Objection);
    });

    it('should decorate server with model() function', async () => {

        const server = Hapi.server();
        await server.register(Objection);

        expect(server.model).to.be.a.function();
    });

    it('should decorate server with query() function', async () => {

        const server = Hapi.server();
        await server.register(Objection);

        expect(server.query).to.be.a.function();
    });
});
