import humanizeDuration from 'humanize-duration'

const shortEnHumanizer = humanizeDuration.humanizer({
  language: 'shortEn',
  languages: {
    shortEn: {
      y: function() {
        return 'y'
      },
      mo: function() {
        return 'mo'
      },
      w: function() {
        return 'w'
      },
      d: function() {
        return 'd'
      },
      h: function() {
        return 'h'
      },
      m: function() {
        return 'm'
      },
      s: function() {
        return 's'
      },
      ms: function() {
        return 'ms'
      }
    }
  }
})

export { shortEnHumanizer }

Promise.prototype.delay = function(duration) {
  return this.then(
    function(value) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          resolve(value)
        }, duration)
      })
    },
    function(reason) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          reject(reason)
        }, duration)
      })
    }
  )
}
