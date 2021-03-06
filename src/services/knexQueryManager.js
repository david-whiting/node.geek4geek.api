/* eslint-disable no-useless-escape */
/**
 * Make order by array of string
 * @param {Array} orders
 * @param {knex} queryKnexInstance
 */
const orderByFromArray = (orders, queryKnexInstance) => {
  orders.forEach(order => {
    queryKnexInstance = orderBy(order, queryKnexInstance)
  })
  return queryKnexInstance
}

/**
 * Make order by string
 * @param {String} order
 * @param {knex} queryKnexInstance
 */
const orderBy = (order, queryKnexInstance) => {
  const [field, value] = order.split(/\_(?=[^\_]+$)/)
  queryKnexInstance.orderBy(field, value)

  return queryKnexInstance
}

/**
 * @param {int} perPage
 * @param {int} currentPage
 * @param {knex} queryKnexInstance
 */
const pagination = (perPage, currentPage, queryKnexInstance) => {
  queryKnexInstance.limit(perPage).offset(perPage * (currentPage - 1))

  return queryKnexInstance
}

/**
 * @param {Object} query 
 * @param {knex} queryKnexInstance 
 */
const where = (query, queryKnexInstance) => queryKnexInstance.where(query)

module.exports = {
  orderBy,
  orderByFromArray,
  pagination,
  where
}
