import request from 'axios'

export default {
  cache: {},
  defaultCacheTtl: 360000,
  /**
   * Make a service request and return the result.
   * @param req: Object, to be passed to the url library
   * @returns JSON: body of response from request
   */

  async getServiceResult(req) {
    // Contains Naive caching of service requests...needs refactoring.
    let u = req.url
    let key = req.method + ":" + u
    let timeNow = Date.now() / 1000 // Time in seconds
    let ttl = this.defaultCacheTtl
    let responseObject
    let cachedResponse = this.cache[key]
    let serviceResponse

    if (cachedResponse && cachedResponse.fetch_time > timeNow - ttl) {
      serviceResponse = cachedResponse.res
    } else {
      console.log("No cache found for %s", key)

      // try {
        // TODO: Add retry logic (https://tools.timeinc.net/jira/browse/MADHYB-60)
        serviceResponse = await request({
          url: u,
          method: req.method
        })

        // Add the response to the cache...
        this.cache[key] = {
          'fetch_time': timeNow,
          'res': serviceResponse
        }

      // } catch (e) {
        if(cachedResponse && cachedResponse.res){
          console.log('ServiceRequest failed. Falling back to stale cache.', u)
          serviceResponse = cachedResponse.res
        // }else{
          // We had an error fetching the file
          console.log('ServiceRequest failed.', u)
        // }
      }
    }

    return serviceResponse
  },

  clearCache() {
    /* Function to bust the cache. Can be called from within a route */
    this.cache = {}
    console.log("ServiceRequest: clearing the cache", this.cache)
  }
}
