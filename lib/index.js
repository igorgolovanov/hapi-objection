'use strict';

const Pkg = require('../package.json');

const Decorators = require('./decorators');

const internals = {};

exports.plugin = {
  name: 'objection',
  version: Pkg.version,
  dependencies: {
    knex: '1.0.0'
  },
  requirements: {
    node: '>=10',
    hapi: '>=17.0'
  },
  once: true,
  register: async function (server, options) {

    server.realm.plugins.objection = {};

    server.decorate('handler', 'objection:fetch', Decorators.fetch(server, options));
    server.decorate('handler', 'objection:fetchOne', Decorators.fetchOne(server, options));
    server.decorate('handler', 'objection:fetchById', Decorators.fetchById(server, options));
    server.decorate('handler', 'objection:fetchSetByIds', Decorators.fetchSetByIds(server, options));
    server.decorate('handler', 'objection:fetchMax', Decorators.fetchMax(server, options));
    server.decorate('handler', 'objection:fetchMin', Decorators.fetchMin(server, options));
    server.decorate('handler', 'objection:fetchAvg', Decorators.fetchAvg(server, options));
    server.decorate('handler', 'objection:fetchAvgDistinct', Decorators.fetchAvgDistinct(server, options));
    server.decorate('handler', 'objection:fetchPage', Decorators.fetchPage(server, options));
    server.decorate('handler', 'objection:fetchRange', Decorators.fetchRange(server, options));
    server.decorate('handler', 'objection:fetchCount', Decorators.fetchCount(server, options));
    server.decorate('handler', 'objection:fetchCountDistinct', Decorators.fetchCountDistinct(server, options));
    server.decorate('handler', 'objection:fetchRelatedOneById', Decorators.fetchRelatedOneById(server, options));
    server.decorate('handler', 'objection:fetchRelatedById', Decorators.fetchRelatedById(server, options));

    server.decorate('handler', 'objection:insert', Decorators.insert(server, options));
    server.decorate('handler', 'objection:insertAndFetch', Decorators.insertAndFetch(server, options));
    server.decorate('handler', 'objection:insertGraph', Decorators.insertGraph(server, options));
    server.decorate('handler', 'objection:insertGraphAndFetch', Decorators.insertGraphAndFetch(server, options));

    server.decorate('handler', 'objection:insertSet', Decorators.insertSet(server, options));
    server.decorate('handler', 'objection:insertSetAndFetchSet', Decorators.insertSetAndFetchSet(server, options));
    server.decorate('handler', 'objection:insertGraphSet', Decorators.insertGraphSet(server, options));
    server.decorate('handler', 'objection:insertGraphSetAndFetchSet', Decorators.insertGraphSetAndFetchSet(server, options));

    server.decorate('handler', 'objection:update', Decorators.update(server, options));
    server.decorate('handler', 'objection:updateById', Decorators.updateById(server, options));
    server.decorate('handler', 'objection:updateAndFetchById', Decorators.updateAndFetchById(server, options));
    server.decorate('handler', 'objection:updateRelatedById', Decorators.updateRelatedById(server, options));
    server.decorate('handler', 'objection:updateRelatedSetByIds', Decorators.updateRelatedSetByIds(server, options));
    server.decorate('handler', 'objection:updateRelatedSetAndFetchRelatedSetByIds', Decorators.updateRelatedSetAndFetchRelatedSetByIds(server, options));

    server.decorate('handler', 'objection:updateSetByIds', Decorators.updateSetByIds(server, options));
    server.decorate('handler', 'objection:updateSetAndFetchSetByIds', Decorators.updateSetAndFetchSetByIds(server, options));

    server.decorate('handler', 'objection:upsertGraph', Decorators.upsertGraph(server, options));
    server.decorate('handler', 'objection:upsertGraphAndFetch', Decorators.upsertGraphAndFetch(server, options));

    server.decorate('handler', 'objection:upsertGraphSet', Decorators.upsertGraphSet(server, options));
    server.decorate('handler', 'objection:upsertGraphSetAndFetchSet', Decorators.upsertGraphSetAndFetchSet(server, options));

    server.decorate('handler', 'objection:relate', Decorators.relate(server, options));
    server.decorate('handler', 'objection:unrelate', Decorators.unrelate(server, options));

    server.decorate('handler', 'objection:increment', Decorators.increment(server, options));
    server.decorate('handler', 'objection:decrement', Decorators.decrement(server, options));

    server.decorate('handler', 'objection:delete', Decorators.delete(server, options));
    server.decorate('handler', 'objection:deleteById', Decorators.deleteById(server, options));
    server.decorate('handler', 'objection:deleteByIds', Decorators.deleteByIds(server, options));
    server.decorate('handler', 'objection:deleteRelatedById', Decorators.deleteRelatedById(server, options));
    server.decorate('handler', 'objection:deleteRelatedByIds', Decorators.deleteRelatedByIds(server, options));
  }
};
