'use strict';

const Joi = require('joi');

const Schema = require('./schema');
const Utils = require('./utils');


exports.fetch = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.fetchOne = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.fetchById = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');
    const resolveId = Utils.idResolver(settings.id);

    return async function (request, h) {

      const id = resolveId(request);

      return h.continue;
    };
  };
};

exports.fetchSetByIds = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.fetchMin = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.fetchMax = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.fetchAvg = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.fetchAvgDistinct = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.fetchPage = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.fetchRange = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.fetchCount = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.fetchCountDistinct = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.fetchRelatedById = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');
    const resolveId = Utils.idResolver(settings.id);

    return async function (request, h) {

      const id = resolveId(request);

      return h.continue;
    };
  };
};

exports.fetchRelatedOneById = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');
    const resolveId = Utils.idResolver(settings.id);

    return async function (request, h) {

      const id = resolveId(request);

      return h.continue;
    };
  };
};

exports.insert = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.insertAndFetch = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.insertSet = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.insertSetAndFetchSet = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.insertGraph = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.insertGraphAndFetch = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.insertGraphSet = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.insertGraphSetAndFetchSet = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.update = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.updateById = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');
    const resolveId = Utils.idResolver(settings.id);

    return async function (request, h) {

      const id = resolveId(request);

      return h.continue;
    };
  };
};

exports.updateRelatedById = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');
    const resolveId = Utils.idResolver(settings.id);

    return async function (request, h) {

      const id = resolveId(request);

      return h.continue;
    };
  };
};

exports.updateRelatedSetByIds = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.updateAndFetchById = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');
    const resolveId = Utils.idResolver(settings.id);

    return async function (request, h) {

      const id = resolveId(request);

      return h.continue;
    };
  };
};

exports.updateSetByIds = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.updateSetAndFetchSetByIds = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.updateRelatedSetAndFetchRelatedSetByIds = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.upsertGraph = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.upsertGraphAndFetch = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.upsertGraphSet = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.upsertGraphSetAndFetchSet = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.relate = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.unrelate = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.increment = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.decrement = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.delete = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.deleteById = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');
    const resolveId = Utils.idResolver(settings.id);

    return async function (request, h) {

      const id = resolveId(request);

      return h.continue;
    };
  };
};

exports.deleteByIds = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};

exports.deleteRelatedById = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');
    const resolveId = Utils.idResolver(settings.id);

    return async function (request, h) {

      const id = resolveId(request);

      return h.continue;
    };
  };
};

exports.deleteRelatedByIds = (server, options) => {

  return (route, handlerOptions) => {

    const settings = Joi.attempt(handlerOptions, Schema.fetch(), 'invalid handler options');

    return async function (request, h) {
      return h.continue;
    };
  };
};
