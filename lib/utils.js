'use strict';

const Hoek = require('hoek');

exports.idResolver = (id) => {
  Hoek.assert(id && (typeof id === 'string' || (Array.isArray(id) && id.length >= 2)));

  const resolve = (request, id) => Hoek.reach({
    params: request.params,
    query: request.query,
    payload: request.payload,
    credentials: request.auth.credentials,
    pre: request.pre,
    headers: request.headers,
  }, id);

  return Array.isArray(id) ? (request) => id.map((part) => resolve(request, part)) : (request) => resolve(request, id);
};
