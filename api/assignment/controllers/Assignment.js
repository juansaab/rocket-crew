'use strict';

/**
 * Assignment.js controller
 *
 * @description: A set of functions called "actions" for managing `Assignment`.
 */

module.exports = {

  /**
   * Retrieve assignment records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.assignment.search(ctx.query);
    } else {
      return strapi.services.assignment.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a assignment record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.assignment.fetch(ctx.params);
  },

  /**
   * Count assignment records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.assignment.count(ctx.query);
  },

  /**
   * Create a/an assignment record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.assignment.add(ctx.request.body);
  },

  /**
   * Update a/an assignment record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.assignment.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an assignment record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.assignment.remove(ctx.params);
  }
};
