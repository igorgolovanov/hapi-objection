'use strict';

const Joi = require('joi');

const internals = {};

internals.query = () => () => Joi.object().keys({
  model: [Joi.string(), Joi.object()].required(),
  query: Joi.func()
});

internals.queryById = () => () => Joi.object().keys({
  id: Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string()).min(2)]).default('params.id'),
  model: [Joi.string(), Joi.object()].required(),
  query: Joi.func()
});

exports.fetch = () => internals.query().keys({
  throwIfNotFound: Joi.boolean().default(true),
});

exports.fetchOne = () => internals.query().keys({
  throwIfNotFound: Joi.boolean().default(true),
});

exports.fetchById = () => internals.queryById().keys({
  throwIfNotFound: Joi.boolean().default(true),
});

exports.fetchSetByIds = () => internals.query().keys({
  throwIfNotFound: Joi.boolean().default(true),
});

exports.fetchMin = () => internals.query().keys({});

exports.fetchMax = () => internals.query().keys({});

exports.fetchAvg = () => internals.query().keys({});

exports.fetchAvgDistinct = () => internals.query().keys({});

exports.fetchPage = () => internals.query().keys({
  throwIfNotFound: Joi.boolean().default(true),
});

exports.fetchRange = () => internals.query().keys({
  throwIfNotFound: Joi.boolean().default(true),
});

exports.fetchCount = () => internals.query().keys({
  throwIfNotFound: Joi.boolean().default(true),
});

exports.fetchCountDistinct = () => internals.query().keys({
  throwIfNotFound: Joi.boolean().default(true),
});

exports.fetchRelatedById = () => internals.query().keys({
  throwIfNotFound: Joi.boolean().default(true),
});

exports.fetchRelatedOneById = () => internals.query().keys({
  throwIfNotFound: Joi.boolean().default(true),
});

exports.insert = () => internals.query().keys({});

exports.insertAndFetch = () => internals.query().keys({});

exports.insertSet = () => internals.query().keys({});

exports.insertSetAndFetchSet = () => internals.query().keys({});

exports.insertGraph = () => internals.query().keys({});

exports.insertGraphAndFetch = () => internals.query().keys({});

exports.insertGraphSet = () => internals.query().keys({});

exports.insertGraphSetAndFetchSet = () => internals.query().keys({});

exports.update = () => internals.query().keys({});

exports.updateById = () => internals.queryById().keys({});

exports.updateRelatedById = () => internals.queryById().keys({});

exports.updateRelatedSetByIds = () => internals.query().keys({});

exports.updateAndFetchById = () => internals.query().keys({});

exports.updateSetByIds = () => internals.query().keys({});

exports.updateSetAndFetchSetByIds = () => internals.query().keys({});

exports.updateRelatedSetAndFetchRelatedSetByIds = () => internals.query().keys({});

exports.upsertGraph = () => internals.query().keys({});

exports.upsertGraphAndFetch = () => internals.query().keys({});

exports.upsertGraphSet = () => internals.query().keys({});

exports.upsertGraphSetAndFetchSet = () => internals.query().keys({});

exports.relate = () => internals.query().keys({});

exports.unrelate = () => internals.query().keys({});

exports.increment = () => internals.query().keys({});

exports.decrement = () => internals.query().keys({});

exports.delete = () => internals.query().keys({});

exports.deleteById = () => internals.queryById().keys({});

exports.deleteByIds = () => internals.query().keys({});

exports.deleteRelatedById = () => internals.queryById().keys({});

exports.deleteRelatedByIds = () => internals.query().keys({});
