'use strict';

const internals = {};

internals.getRootRealm = (realm) => {

    while (realm.parent) {
        realm = realm.parent;
    }

    return realm;
};

internals.getState = (realm) => {

    realm.plugins.objection = realm.plugins.objection || {};

    return realm.plugins.objection;
};

exports.plugin = {
    name: 'objection',
    pkg: require('../package.json'),
    multiple: true,
    requirements: {
        hapi: '>=17.7.0'
    },
    register: (server) => {

        const rootRealm = internals.getRootRealm(server.realm);
        const rootState = internals.getState(rootRealm);

        if (!rootState.initialized) {

            server.decorate('server', 'model', () => {

            });

            server.decorate('server', 'query', () => {

            });

            rootState.initialized = true;
        }
    }
};
